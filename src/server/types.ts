import { CommodityId } from '../types';

export interface RemotePlayerConvoy {
  playerId: string;
  callsign: string;
  currentLocationId: string;
  status: 'DOCKED' | 'IN_TRANSIT';
  originId?: string;
  destinationId?: string;
  originName?: string;
  destinationName?: string;
  progressPercent?: number;
  lat?: number;
  lng?: number;
  lastUpdated: number;
}

export interface GlobalTradeEvent {
  id: string;
  playerId: string;
  callsign: string;
  nodeId: string;
  nodeName: string;
  commodityId: CommodityId;
  commodityName: string;
  quantity: number;
  unitPrice: number;
  totalCredits: number;
  tradeType: 'BUY' | 'SELL';
  timestamp: number;
}

export interface SharedMarketAdjustment {
  commodityId: CommodityId;
  globalDemandMultiplier: number;
  totalVolumeTraded: number;
  lastTradePrice: number;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  callsign: string;
  text: string;
  locationName?: string;
  timestamp: number;
}

export interface LeaderboardEntry {
  playerId: string;
  callsign: string;
  netWorth: number;
  credits: number;
  completedContractsCount: number;
  totalDistanceTraveled: number;
  careerScore: number;
  rankTitle: string;
  currentLocationName?: string;
  lastSeen: number;
  isOnline: boolean;
}

// Client-to-Server Network Messages
export type ClientMessage =
  | {
      type: 'C2S_JOIN';
      playerId: string;
      callsign: string;
      currentLocationId: string;
      netWorth?: number;
      credits?: number;
      completedContractsCount?: number;
      totalDistanceTraveled?: number;
      careerScore?: number;
      rankTitle?: string;
    }
  | {
      type: 'C2S_POSITION_UPDATE';
      playerId: string;
      callsign: string;
      currentLocationId: string;
      status: 'DOCKED' | 'IN_TRANSIT';
      originId?: string;
      destinationId?: string;
      progressPercent?: number;
      lat?: number;
      lng?: number;
    }
  | {
      type: 'C2S_TRADE';
      playerId: string;
      callsign: string;
      nodeId: string;
      nodeName: string;
      commodityId: CommodityId;
      quantity: number;
      unitPrice: number;
      tradeType: 'BUY' | 'SELL';
    }
  | {
      type: 'C2S_SAVE_STATE';
      playerId: string;
      savePayloadJson: string;
    }
  | {
      type: 'C2S_CHAT';
      playerId: string;
      callsign: string;
      text: string;
      locationName?: string;
    }
  | {
      type: 'C2S_LEADERBOARD_UPDATE';
      playerId: string;
      callsign: string;
      netWorth: number;
      credits: number;
      completedContractsCount: number;
      totalDistanceTraveled: number;
      careerScore: number;
      rankTitle: string;
      currentLocationName?: string;
    }
  | {
      type: 'C2S_HEARTBEAT';
      playerId: string;
    }
  | {
      type: 'C2S_CALLSIGN_UPDATE';
      playerId: string;
      callsign: string;
    };

// Server-to-Client Network Messages
export type ServerMessage =
  | {
      type: 'S2C_WELCOME';
      serverGameDays: number;
      activePlayerCount: number;
      marketAdjustments: Record<CommodityId, SharedMarketAdjustment>;
      activeConvoys: RemotePlayerConvoy[];
      recentTrades: GlobalTradeEvent[];
      recentChat?: ChatMessage[];
      leaderboard?: LeaderboardEntry[];
    }
  | {
      type: 'S2C_PLAYERS_SYNC';
      activeConvoys: RemotePlayerConvoy[];
      activePlayerCount: number;
    }
  | {
      type: 'S2C_TRADE_BROADCAST';
      trade: GlobalTradeEvent;
      marketAdjustment: SharedMarketAdjustment;
    }
  | {
      type: 'S2C_MARKET_UPDATE';
      marketAdjustments: Record<CommodityId, SharedMarketAdjustment>;
    }
  | {
      type: 'S2C_CHAT';
      chat: ChatMessage;
    }
  | {
      type: 'S2C_LEADERBOARD_SYNC';
      leaderboard: LeaderboardEntry[];
    }
  | {
      type: 'S2C_CLOCK_SYNC';
      serverGameDays: number;
    }
  | {
      type: 'S2C_SAVE_ACK';
      success: boolean;
      timestamp: number;
    };
