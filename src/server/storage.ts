import fs from 'fs';
import path from 'path';
import { CommodityId } from '../types';
import { SharedMarketAdjustment, GlobalTradeEvent, ChatMessage, LeaderboardEntry } from './types';

export interface PersistentServerData {
  epochStartRealTime: number;
  serverGameDays: number;
  players: Record<string, { callsign: string; lastSeen: number; savePayloadJson: string }>;
  marketAdjustments: Record<CommodityId, SharedMarketAdjustment>;
  recentTrades: GlobalTradeEvent[];
  recentChat: ChatMessage[];
  leaderboard: Record<string, LeaderboardEntry>;
}

export class ServerPersistence {
  private filePath: string;
  private data: PersistentServerData;

  constructor(customPath?: string) {
    const dataDir = customPath ? path.dirname(customPath) : path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      try {
        fs.mkdirSync(dataDir, { recursive: true });
      } catch (err) {
        console.error('Failed to create data directory:', err);
      }
    }

    this.filePath = customPath || path.join(dataDir, 'server_state.json');
    this.data = this.load();
    if (!fs.existsSync(this.filePath)) {
      this.save();
    }
  }

  private load(): PersistentServerData {
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, 'utf-8');
        const parsed = JSON.parse(raw);
        if (!parsed.recentChat) parsed.recentChat = [];
        if (!parsed.leaderboard) parsed.leaderboard = {};
        return parsed;
      }
    } catch (err) {
      console.warn('Failed to load server state file, initializing clean state:', err);
    }

    return {
      epochStartRealTime: Date.now(),
      serverGameDays: 1.0,
      players: {},
      marketAdjustments: {
        grain: { commodityId: 'grain', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 40 },
        batteries: { commodityId: 'batteries', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 120 },
        cyberware: { commodityId: 'cyberware', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 350 },
        chips: { commodityId: 'chips', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 800 },
        cryo: { commodityId: 'cryo', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 1500 },
        toxins: { commodityId: 'toxins', globalDemandMultiplier: 1.0, totalVolumeTraded: 0, lastTradePrice: 2200 }
      },
      recentTrades: [],
      recentChat: [],
      leaderboard: {
        'ai_nomad_01': {
          playerId: 'ai_nomad_01',
          callsign: 'Vanguard-09',
          netWorth: 18450,
          credits: 14200,
          completedContractsCount: 16,
          totalDistanceTraveled: 3820,
          careerScore: 24500,
          rankTitle: 'Continental Transporter',
          currentLocationName: 'Detroit Rust Yards',
          lastSeen: Date.now() - 3600000,
          isOnline: false
        },
        'ai_nomad_02': {
          playerId: 'ai_nomad_02',
          callsign: 'Apex Runner MK-II',
          netWorth: 12600,
          credits: 9800,
          completedContractsCount: 11,
          totalDistanceTraveled: 2450,
          careerScore: 16400,
          rankTitle: 'Continental Transporter',
          currentLocationName: 'Neo-Chicago',
          lastSeen: Date.now() - 7200000,
          isOnline: false
        },
        'ai_nomad_03': {
          playerId: 'ai_nomad_03',
          callsign: 'Chariot-7',
          netWorth: 7850,
          credits: 5400,
          completedContractsCount: 7,
          totalDistanceTraveled: 1620,
          careerScore: 9200,
          rankTitle: 'Syndicate Contractor',
          currentLocationName: 'Pittsburgh Steel Core',
          lastSeen: Date.now() - 10800000,
          isOnline: false
        }
      }
    };
  }

  public save(): void {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to persist server state to disk:', err);
    }
  }

  public getData(): PersistentServerData {
    return this.data;
  }

  public savePlayerProfile(playerId: string, callsign: string, savePayloadJson: string): void {
    this.data.players[playerId] = {
      callsign,
      lastSeen: Date.now(),
      savePayloadJson
    };
    this.save();
  }

  public getPlayerProfile(playerId: string): { callsign: string; lastSeen: number; savePayloadJson: string } | undefined {
    return this.data.players[playerId];
  }

  public recordTrade(trade: GlobalTradeEvent, adjustment: SharedMarketAdjustment): void {
    this.data.recentTrades.unshift(trade);
    if (this.data.recentTrades.length > 50) {
      this.data.recentTrades.pop();
    }
    this.data.marketAdjustments[trade.commodityId] = adjustment;
    this.save();
  }

  public recordChatMessage(chat: ChatMessage): void {
    if (!this.data.recentChat) {
      this.data.recentChat = [];
    }
    this.data.recentChat.push(chat);
    if (this.data.recentChat.length > 100) {
      this.data.recentChat.shift();
    }
    this.save();
  }

  public getRecentChat(): ChatMessage[] {
    return this.data.recentChat || [];
  }

  public updateLeaderboardEntry(entry: LeaderboardEntry): void {
    if (!this.data.leaderboard) {
      this.data.leaderboard = {};
    }
    this.data.leaderboard[entry.playerId] = { ...entry, lastSeen: Date.now() };
    this.save();
  }

  public updatePlayerCallsign(playerId: string, callsign: string): void {
    if (this.data.players && this.data.players[playerId]) {
      this.data.players[playerId].callsign = callsign;
    }
    if (this.data.leaderboard && this.data.leaderboard[playerId]) {
      this.data.leaderboard[playerId].callsign = callsign;
    }
    this.save();
  }

  public setPlayerOnline(playerId: string, isOnline: boolean): void {
    if (this.data.leaderboard && this.data.leaderboard[playerId]) {
      this.data.leaderboard[playerId].isOnline = isOnline;
      this.data.leaderboard[playerId].lastSeen = Date.now();
      this.save();
    }
  }

  public getLeaderboard(): LeaderboardEntry[] {
    if (!this.data.leaderboard) return [];
    return Object.values(this.data.leaderboard).sort((a, b) => b.netWorth - a.netWorth);
  }
}
