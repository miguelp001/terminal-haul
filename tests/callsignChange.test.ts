import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { GameStore } from '../src/state/gameState';
import { ServerPersistence } from '../src/server/storage';
import { TerminalHaulServer } from '../src/server/gameServer';
import { MultiplayerClient } from '../src/network/multiplayerClient';
import { WebSocket } from 'ws';

const TEST_DIR = path.join(process.cwd(), 'data', 'test_env_callsign');
const TEST_STORAGE_PATH = path.join(TEST_DIR, 'test_callsign_state.json');

describe('Global Frequency Chat Callsign Customization', () => {
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

  describe('GameStore Callsign Management', () => {
    it('allows player to update their callsign and persists to convoy state', () => {
      const store = new GameStore();
      const initialName = store.getState().convoy.name;
      expect(initialName).toBe('Iron Nomad MK-IV');

      const ok = store.setCallsign('Neon Drifter-77');
      expect(ok).toBe(true);
      expect(store.getState().convoy.name).toBe('Neon Drifter-77');

      // Verifies transponder log event
      const logs = store.getState().eventLogs;
      expect(logs[0]).toContain('TRANSPONDER: Callsign updated to "Neon Drifter-77"');
    });

    it('rejects empty or whitespace-only callsigns', () => {
      const store = new GameStore();
      const ok = store.setCallsign('   ');
      expect(ok).toBe(false);
      expect(store.getState().convoy.name).toBe('Iron Nomad MK-IV');
    });

    it('sanitizes and truncates overly long callsigns', () => {
      const store = new GameStore();
      const longName = 'A'.repeat(50);
      const ok = store.setCallsign(longName);
      expect(ok).toBe(true);
      expect(store.getState().convoy.name.length).toBeLessThanOrEqual(32);
    });
  });

  describe('ServerPersistence & Leaderboard Callsign Synchronization', () => {
    it('updates player profile and leaderboard callsign', () => {
      const storage = new ServerPersistence(TEST_STORAGE_PATH);
      const playerId = 'test_player_callsign';
      storage.savePlayerProfile(playerId, 'Old-Rig', '{}');
      storage.updateLeaderboardEntry({
        playerId,
        callsign: 'Old-Rig',
        netWorth: 10000,
        credits: 5000,
        completedContractsCount: 3,
        totalDistanceTraveled: 1200,
        careerScore: 8000,
        rankTitle: 'Scrap Runner',
        currentLocationName: 'Detroit Foundry',
        lastSeen: Date.now(),
        isOnline: true
      });

      storage.updatePlayerCallsign(playerId, 'Valkyrie-Prime');

      const profile = storage.getPlayerProfile(playerId);
      expect(profile?.callsign).toBe('Valkyrie-Prime');

      const leaderboard = storage.getLeaderboard();
      const entry = leaderboard.find((e) => e.playerId === playerId);
      expect(entry?.callsign).toBe('Valkyrie-Prime');
    });
  });

  describe('MultiplayerClient & WebSocket Protocol', () => {
    it('sets, gets, and dispatches C2S_CALLSIGN_UPDATE message', () => {
      const client = new MultiplayerClient('ws://localhost:9999');
      expect(client.getCallsign()).toBe('Iron Nomad MK-IV');

      client.setCallsign('Ghost Courier');
      expect(client.getCallsign()).toBe('Ghost Courier');

      client.updateCallsign('Rust Runner MK-II');
      expect(client.getCallsign()).toBe('Rust Runner MK-II');
    });

    it('server receives C2S_CALLSIGN_UPDATE and broadcasts updated convoy callsign to peers', async () => {
      const port = 9088;
      const server = new TerminalHaulServer(port, TEST_STORAGE_PATH);
      await server.start();

      try {
        const ws = new WebSocket(`ws://localhost:${port}`);
        await new Promise<void>((resolve, reject) => {
          ws.on('open', () => resolve());
          ws.on('error', reject);
        });

        // 1. Join cluster
        ws.send(JSON.stringify({
          type: 'C2S_JOIN',
          playerId: 'hauler_test_01',
          callsign: 'Initial-Callsign',
          currentLocationId: 'node_002',
          netWorth: 3000,
          credits: 2000,
          completedContractsCount: 1,
          totalDistanceTraveled: 500,
          careerScore: 3000,
          rankTitle: 'Rookie Hauler'
        }));

        // Wait for welcome
        await new Promise((resolve) => setTimeout(resolve, 80));

        // 2. Change callsign
        ws.send(JSON.stringify({
          type: 'C2S_CALLSIGN_UPDATE',
          playerId: 'hauler_test_01',
          callsign: 'CyberPhantom-99'
        }));

        // Wait for processing
        await new Promise((resolve) => setTimeout(resolve, 80));

        const convoys = server.getActiveConvoys();
        const myConvoy = convoys.find((c) => c.playerId === 'hauler_test_01');
        expect(myConvoy?.callsign).toBe('CyberPhantom-99');

        ws.close();
      } finally {
        await server.stop();
      }
    });
  });

  describe('Global Chat UI CallSign Components', () => {
    it('ensures HTML contains transponder callsign header and inline editor', () => {
      const htmlPath = path.resolve(__dirname, '../index.html');
      const html = fs.readFileSync(htmlPath, 'utf8');

      expect(html).toContain('id="chatCallsignDisplay"');
      expect(html).toContain('id="btnOpenCallsignModal"');
      expect(html).toContain('id="callsignEditContainer"');
      expect(html).toContain('id="callsignEditInput"');
      expect(html).toContain('id="btnSaveCallsign"');
      expect(html).toContain('id="btnCancelCallsign"');
      expect(html).toContain('TRANSMIT ON FREQ 8080 (or /callsign <name>)...');
    });

    it('ensures CSS styles callsign bar, editor inputs, and system notices', () => {
      const cssPath = path.resolve(__dirname, '../src/styles/terminal.css');
      const css = fs.readFileSync(cssPath, 'utf8');

      expect(css).toContain('.chat-callsign-bar');
      expect(css).toContain('.chat-callsign-edit-bar');
      expect(css).toContain('.callsign-text-input');
      expect(css).toContain('.change-callsign-btn');
      expect(css).toContain('.chat-msg-row.system-notice');
      expect(css).toContain('.system-notice-badge');
    });
  });
});
