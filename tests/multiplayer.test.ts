import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { ServerPersistence } from '../src/server/storage';
import { GlobalMarketManager } from '../src/server/marketManager';
import { TerminalHaulServer } from '../src/server/gameServer';
import { GameStore } from '../src/state/gameState';
import { COMMODITIES } from '../src/constants/worldData';
import { WebSocket } from 'ws';

const TEST_DIR = path.join(process.cwd(), 'data', 'test_env');
const TEST_STORAGE_PATH = path.join(TEST_DIR, 'test_server_state.json');

describe('Persistent Multiplayer Backend & Synchronized Economy', () => {
  beforeEach(() => {
    if (fs.existsSync(TEST_DIR)) {
      fs.rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  afterEach(() => {
    if (fs.existsSync(TEST_DIR)) {
      fs.rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  describe('ServerPersistence Layer', () => {
    it('creates persistent storage file with default economy and state', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const data = storage.getData();

      expect(data).toBeDefined();
      expect(data.serverGameDays).toBe(1.0);
      expect(data.marketAdjustments.cyberware.globalDemandMultiplier).toBe(1.0);
      expect(fs.existsSync(TEST_STORAGE_PATH)).toBe(true);
    });

    it('persists and retrieves player profiles across restarts', () => {
      const storage1 = new ServerPersistence(TEST_STORAGE_PATH);
      const fakeSaveJson = JSON.stringify({ credits: 9999, cargo: { grain: 10 } });
      storage1.savePlayerProfile('player_001', 'Nomad-One', fakeSaveJson);

      // Simulate server reload from disk
      const storage2 = new ServerPersistence(TEST_STORAGE_PATH);
      const profile = storage2.getPlayerProfile('player_001');

      expect(profile).toBeDefined();
      expect(profile?.callsign).toBe('Nomad-One');
      expect(profile?.savePayloadJson).toBe(fakeSaveJson);
    });
  });

  describe('GlobalMarketManager & Shared Price Elasticity', () => {
    it('increases demand multiplier when players purchase commodity (scarcity shift)', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const manager = new GlobalMarketManager(storage);

      const before = manager.getAdjustment('chips').globalDemandMultiplier;
      expect(before).toBe(1.0);

      // Buy 5 units of chips
      const result = manager.processPlayerTrade(
        'player_001',
        'Nomad-Alpha',
        'node_002',
        'Neo-Chicago',
        'chips',
        5,
        800,
        'BUY'
      );

      expect(result.tradeEvent.tradeType).toBe('BUY');
      expect(result.tradeEvent.quantity).toBe(5);
      expect(result.adjustment.globalDemandMultiplier).toBeGreaterThan(1.0);
      expect(result.adjustment.totalVolumeTraded).toBe(5);
    });

    it('decreases demand multiplier when players sell commodity (oversupply shift)', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const manager = new GlobalMarketManager(storage);

      // Sell 10 units of grain
      const result = manager.processPlayerTrade(
        'player_002',
        'Nomad-Beta',
        'node_001',
        'Chiba-on-Hudson',
        'grain',
        10,
        40,
        'SELL'
      );

      expect(result.tradeEvent.tradeType).toBe('SELL');
      expect(result.adjustment.globalDemandMultiplier).toBeLessThan(1.0);
      expect(result.adjustment.globalDemandMultiplier).toBeGreaterThanOrEqual(0.65);
    });

    it('enforces bounds (0.65 to 1.50) on extreme trading volumes', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const manager = new GlobalMarketManager(storage);

      // Huge buy
      const buyRes = manager.processPlayerTrade(
        'player_003',
        'Nomad-Gamma',
        'node_001',
        'Node',
        'cyberware',
        500,
        350,
        'BUY'
      );
      expect(buyRes.adjustment.globalDemandMultiplier).toBe(1.50);

      // Huge sell
      const sellRes = manager.processPlayerTrade(
        'player_003',
        'Nomad-Gamma',
        'node_001',
        'Node',
        'cyberware',
        1000,
        350,
        'SELL'
      );
      expect(sellRes.adjustment.globalDemandMultiplier).toBe(0.65);
    });

    it('performs mean-reversion back towards 1.0 equilibrium over time', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const manager = new GlobalMarketManager(storage);

      manager.processPlayerTrade('p1', 'nomad', 'n1', 'City', 'batteries', 20, 120, 'BUY');
      const boosted = manager.getAdjustment('batteries').globalDemandMultiplier;
      expect(boosted).toBeGreaterThan(1.0);

      const reverted = manager.tickMeanReversion();
      expect(reverted).toBe(true);
      expect(manager.getAdjustment('batteries').globalDemandMultiplier).toBeLessThan(boosted);
    });
  });

  describe('GameStore Integration with Global Market & Persistence', () => {
    it('applies shared market adjustments from server to local commodity quotes', () => {
      const store = new GameStore();
      const initialQuotes = store.getCurrentMarketQuotes();
      const baseGrainBuy = initialQuotes.grain.buyPrice;

      // Simulate receiving S2C_MARKET_UPDATE from server indicating high global demand (+25%)
      store.setSharedMarketAdjustments({
        grain: { commodityId: 'grain', globalDemandMultiplier: 1.25, totalVolumeTraded: 50, lastTradePrice: 50 },
        batteries: { commodityId: 'batteries', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 120 },
        cyberware: { commodityId: 'cyberware', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 350 },
        chips: { commodityId: 'chips', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 800 },
        cryo: { commodityId: 'cryo', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 1500 },
        toxins: { commodityId: 'toxins', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 2200 }
      });

      const updatedQuotes = store.getCurrentMarketQuotes();
      expect(updatedQuotes.grain.buyPrice).toBeGreaterThan(baseGrainBuy);
    });

    it('notifies trade listeners on successful commodity purchase and sale', () => {
      const store = new GameStore();
      const tradesLogged: string[] = [];

      store.onTradeExecuted((nodeId, nodeName, cid, qty, price, type) => {
        tradesLogged.push(`${type} ${qty}x ${cid} @ ${price}`);
      });

      // Buy 1 grain
      store.buyCommodity('grain', 1);
      expect(tradesLogged.length).toBe(1);
      expect(tradesLogged[0]).toContain('BUY 1x grain');

      // Sell 1 grain
      store.sellCommodity('grain', 1);
      expect(tradesLogged.length).toBe(2);
      expect(tradesLogged[1]).toContain('SELL 1x grain');
    });

    it('triggers save listeners on auto-save and manual save', () => {
      const store = new GameStore();
      let savePayloadCaptured = '';

      store.onGameSaved((json) => {
        savePayloadCaptured = json;
      });

      store.autoSave();
      expect(savePayloadCaptured).toBeTruthy();
      const parsed = JSON.parse(savePayloadCaptured);
      expect(parsed.credits).toBe(store.getState().credits);
    });
  });

  describe('Authoritative Server WebSocket End-to-End Test', () => {
    it('accepts client join, tracks convoys, and broadcasts state updates', async () => {
      const testPort = 8999;
      const server = new TerminalHaulServer(testPort, TEST_STORAGE_PATH);
      await server.start();

      try {
        const ws = new WebSocket(`ws://localhost:${testPort}`);

        const messagesReceived: any[] = [];
        await new Promise<void>((resolve, reject) => {
          ws.on('open', () => {
            // Send join message
            ws.send(
              JSON.stringify({
                type: 'C2S_JOIN',
                playerId: 'test_player_888',
                callsign: 'Apex Runner',
                currentLocationId: 'node_002'
              })
            );
          });

          ws.on('message', (data) => {
            const parsed = JSON.parse(data.toString());
            messagesReceived.push(parsed);
            if (parsed.type === 'S2C_WELCOME') {
              resolve();
            }
          });

          ws.on('error', reject);
        });

        expect(messagesReceived.length).toBeGreaterThan(0);
        const welcome = messagesReceived.find((m) => m.type === 'S2C_WELCOME');
        expect(welcome).toBeDefined();
        expect(welcome.activePlayerCount).toBe(1);
        expect(welcome.marketAdjustments).toBeDefined();
        expect(welcome.activeConvoys.length).toBe(1);
        expect(welcome.activeConvoys[0].callsign).toBe('Apex Runner');

        // Test position broadcast
        ws.send(
          JSON.stringify({
            type: 'C2S_POSITION_UPDATE',
            playerId: 'test_player_888',
            callsign: 'Apex Runner',
            currentLocationId: 'node_002',
            status: 'IN_TRANSIT',
            originId: 'node_002',
            destinationId: 'node_001',
            progressPercent: 35.5
          })
        );

        // Allow server to process position update
        await new Promise((r) => setTimeout(r, 100));

        const convoys = server.getActiveConvoys();
        const updated = convoys.find((c) => c.playerId === 'test_player_888');
        expect(updated).toBeDefined();
        expect(updated?.status).toBe('IN_TRANSIT');
        expect(updated?.progressPercent).toBe(35.5);

        // Test Chat Broadcast
        const chatPromise = new Promise<any>((resolve) => {
          ws.on('message', (data) => {
            const parsed = JSON.parse(data.toString());
            if (parsed.type === 'S2C_CHAT') {
              resolve(parsed.chat);
            }
          });
        });

        ws.send(
          JSON.stringify({
            type: 'C2S_CHAT',
            playerId: 'test_player_888',
            callsign: 'Apex Runner',
            text: 'Highway corridor clear, moving to Chiba.',
            locationName: 'Neo-Chicago'
          })
        );

        const receivedChat = await chatPromise;
        expect(receivedChat).toBeDefined();
        expect(receivedChat.callsign).toBe('Apex Runner');
        expect(receivedChat.text).toBe('Highway corridor clear, moving to Chiba.');
        expect(receivedChat.locationName).toBe('Neo-Chicago');

        ws.close();
      } finally {
        await server.stop();
      }
    });

    it('persists chat messages to disk and loads them into new connections', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      expect(storage.getRecentChat()).toEqual([]);

      storage.recordChatMessage({
        id: 'chat_01',
        playerId: 'p1',
        callsign: 'Nomad-One',
        text: 'Testing global frequency.',
        timestamp: Date.now()
      });

      expect(storage.getRecentChat().length).toBe(1);

      // Reload from disk
      const storageReloaded = new ServerPersistence(TEST_STORAGE_PATH);
      const reloadedChat = storageReloaded.getRecentChat();
      expect(reloadedChat.length).toBe(1);
      expect(reloadedChat[0].text).toBe('Testing global frequency.');
    });

    it('ranks players strictly on Net Worth in descending order', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);

      storage.updateLeaderboardEntry({
        playerId: 'p_low',
        callsign: 'Low Hauler',
        netWorth: 3000,
        credits: 2000,
        completedContractsCount: 1,
        totalDistanceTraveled: 100,
        careerScore: 3500,
        rankTitle: 'Rookie Hauler',
        lastSeen: Date.now(),
        isOnline: true
      });

      storage.updateLeaderboardEntry({
        playerId: 'p_high',
        callsign: 'Tycoon Hauler',
        netWorth: 45000,
        credits: 30000,
        completedContractsCount: 25,
        totalDistanceTraveled: 6000,
        careerScore: 60000,
        rankTitle: 'Grid Overlord',
        lastSeen: Date.now(),
        isOnline: true
      });

      const board = storage.getLeaderboard();
      expect(board.length).toBeGreaterThanOrEqual(2);
      expect(board[0].playerId).toBe('p_high');
      expect(board[0].netWorth).toBe(45000);

      // Verify strict descending order by net worth
      for (let i = 1; i < board.length; i++) {
        expect(board[i - 1].netWorth).toBeGreaterThanOrEqual(board[i].netWorth);
      }
    });
  });
});
