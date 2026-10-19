import { CommodityId } from '../types';
import { ClientMessage, ServerMessage, RemotePlayerConvoy, SharedMarketAdjustment, GlobalTradeEvent, ChatMessage, LeaderboardEntry } from '../server/types';

export type NetworkStatus = 'ONLINE' | 'CONNECTING' | 'OFFLINE';

export type ConvoysSyncListener = (convoys: RemotePlayerConvoy[]) => void;
export type MarketUpdateListener = (adjustments: Record<CommodityId, SharedMarketAdjustment>) => void;
export type TradeBroadcastListener = (trade: GlobalTradeEvent) => void;
export type StatusChangeListener = (status: NetworkStatus, playerCount: number) => void;
export type ChatListener = (chat: ChatMessage) => void;
export type LeaderboardListener = (leaderboard: LeaderboardEntry[]) => void;

export class MultiplayerClient {
  private ws: WebSocket | null = null;
  private serverUrl: string;
  private playerId: string;
  private callsign: string;
  private status: NetworkStatus = 'OFFLINE';
  private reconnectTimeout: number | null = null;
  private heartbeatInterval: number | null = null;
  private shouldReconnect: boolean = true;
  private activePlayerCount: number = 1;

  private convoysListeners: Set<ConvoysSyncListener> = new Set();
  private marketListeners: Set<MarketUpdateListener> = new Set();
  private tradeListeners: Set<TradeBroadcastListener> = new Set();
  private statusListeners: Set<StatusChangeListener> = new Set();
  private chatListeners: Set<ChatListener> = new Set();
  private leaderboardListeners: Set<LeaderboardListener> = new Set();

  constructor(serverUrl?: string) {
    const defaultEnvUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WS_SERVER_URL)
      ? import.meta.env.VITE_WS_SERVER_URL
      : 'ws://localhost:8080';
    this.serverUrl = serverUrl ?? defaultEnvUrl;
    this.playerId = this.getOrCreatePlayerId();
    this.callsign = 'Iron Nomad MK-IV';
  }

  private getOrCreatePlayerId(): string {
    const storageKey = 'TERMINAL_HAUL_PLAYER_ID';
    let id: string | null = null;
    try {
      if (typeof localStorage !== 'undefined') {
        id = localStorage.getItem(storageKey);
      }
    } catch {
      // ignore
    }
    if (!id) {
      id = `hauler_${Math.random().toString(36).substring(2, 9)}_${Date.now().toString(36)}`;
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(storageKey, id);
        }
      } catch {
        // ignore
      }
    }
    return id;
  }

  public getPlayerId(): string {
    return this.playerId;
  }

  public getCallsign(): string {
    return this.callsign;
  }

  public setCallsign(callsign: string): void {
    this.callsign = callsign;
  }

  public updateCallsign(callsign: string): void {
    const trimmed = callsign.trim().substring(0, 32);
    if (!trimmed) return;
    this.callsign = trimmed;
    this.send({
      type: 'C2S_CALLSIGN_UPDATE',
      playerId: this.playerId,
      callsign: trimmed
    });
  }

  public connect(
    currentLocationId: string = 'node_002',
    initialTelemetry?: {
      netWorth?: number;
      credits?: number;
      completedContractsCount?: number;
      totalDistanceTraveled?: number;
      careerScore?: number;
      rankTitle?: string;
    }
  ): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    this.setStatus('CONNECTING');

    try {
      this.ws = new WebSocket(this.serverUrl);

      this.ws.onopen = () => {
        this.setStatus('ONLINE');
        this.send({
          type: 'C2S_JOIN',
          playerId: this.playerId,
          callsign: this.callsign,
          currentLocationId,
          ...initialTelemetry
        });

        this.startHeartbeat();
      };

      this.ws.onmessage = (event) => {
        try {
          const msg: ServerMessage = JSON.parse(event.data);
          this.handleServerMessage(msg);
        } catch (err) {
          console.error('Failed to parse incoming server message:', err);
        }
      };

      this.ws.onclose = () => {
        this.stopHeartbeat();
        this.setStatus('OFFLINE');
        if (this.shouldReconnect) {
          this.scheduleReconnect(currentLocationId);
        }
      };

      this.ws.onerror = () => {
        // Will trigger onclose automatically
      };
    } catch (err) {
      this.setStatus('OFFLINE');
      if (this.shouldReconnect) {
        this.scheduleReconnect(currentLocationId);
      }
    }
  }

  private scheduleReconnect(currentLocationId: string): void {
    if (this.reconnectTimeout !== null) return;
    this.reconnectTimeout = window.setTimeout(() => {
      this.reconnectTimeout = null;
      this.connect(currentLocationId);
    }, 3000);
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatInterval = window.setInterval(() => {
      this.send({
        type: 'C2S_HEARTBEAT',
        playerId: this.playerId
      });
    }, 15000);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private setStatus(status: NetworkStatus): void {
    this.status = status;
    for (const listener of this.statusListeners) {
      listener(status, this.activePlayerCount);
    }
  }

  public getStatus(): NetworkStatus {
    return this.status;
  }

  public getActivePlayerCount(): number {
    return this.activePlayerCount;
  }

  private send(msg: ClientMessage): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
    }
  }

  private handleServerMessage(msg: ServerMessage): void {
    switch (msg.type) {
      case 'S2C_WELCOME': {
        this.activePlayerCount = msg.activePlayerCount;
        this.setStatus('ONLINE');
        this.notifyConvoys(msg.activeConvoys);
        this.notifyMarket(msg.marketAdjustments);
        if (msg.recentChat) {
          for (const c of msg.recentChat) {
            this.notifyChat(c);
          }
        }
        if (msg.leaderboard) {
          this.notifyLeaderboard(msg.leaderboard);
        }
        break;
      }

      case 'S2C_PLAYERS_SYNC': {
        this.activePlayerCount = msg.activePlayerCount;
        this.notifyConvoys(msg.activeConvoys);
        for (const listener of this.statusListeners) {
          listener(this.status, this.activePlayerCount);
        }
        break;
      }

      case 'S2C_TRADE_BROADCAST': {
        for (const listener of this.tradeListeners) {
          listener(msg.trade);
        }
        break;
      }

      case 'S2C_MARKET_UPDATE': {
        this.notifyMarket(msg.marketAdjustments);
        break;
      }

      case 'S2C_CHAT': {
        this.notifyChat(msg.chat);
        break;
      }

      case 'S2C_LEADERBOARD_SYNC': {
        this.notifyLeaderboard(msg.leaderboard);
        break;
      }
    }
  }

  private notifyLeaderboard(leaderboard: LeaderboardEntry[]): void {
    for (const listener of this.leaderboardListeners) {
      listener(leaderboard);
    }
  }

  private notifyChat(chat: ChatMessage): void {
    for (const listener of this.chatListeners) {
      listener(chat);
    }
  }

  private notifyConvoys(convoys: RemotePlayerConvoy[]): void {
    // Filter out our own player convoy so map doesn't render duplicate
    const others = convoys.filter((c) => c.playerId !== this.playerId);
    for (const listener of this.convoysListeners) {
      listener(others);
    }
  }

  private notifyMarket(adjustments: Record<CommodityId, SharedMarketAdjustment>): void {
    for (const listener of this.marketListeners) {
      listener(adjustments);
    }
  }

  // Public methods called by GameStore / TerminalApp
  public broadcastTrade(
    nodeId: string,
    nodeName: string,
    commodityId: CommodityId,
    quantity: number,
    unitPrice: number,
    tradeType: 'BUY' | 'SELL'
  ): void {
    this.send({
      type: 'C2S_TRADE',
      playerId: this.playerId,
      callsign: this.callsign,
      nodeId,
      nodeName,
      commodityId,
      quantity,
      unitPrice,
      tradeType
    });
  }

  public broadcastPosition(
    currentLocationId: string,
    status: 'DOCKED' | 'IN_TRANSIT',
    originId?: string,
    destinationId?: string,
    progressPercent?: number
  ): void {
    this.send({
      type: 'C2S_POSITION_UPDATE',
      playerId: this.playerId,
      callsign: this.callsign,
      currentLocationId,
      status,
      originId,
      destinationId,
      progressPercent
    });
  }

  public backupStateToServer(savePayloadJson: string): void {
    this.send({
      type: 'C2S_SAVE_STATE',
      playerId: this.playerId,
      savePayloadJson
    });
  }

  public onConvoysSync(listener: ConvoysSyncListener): () => void {
    this.convoysListeners.add(listener);
    return () => this.convoysListeners.delete(listener);
  }

  public onMarketUpdate(listener: MarketUpdateListener): () => void {
    this.marketListeners.add(listener);
    return () => this.marketListeners.delete(listener);
  }

  public onTradeBroadcast(listener: TradeBroadcastListener): () => void {
    this.tradeListeners.add(listener);
    return () => this.tradeListeners.delete(listener);
  }

  public onStatusChange(listener: StatusChangeListener): () => void {
    this.statusListeners.add(listener);
    listener(this.status, this.activePlayerCount);
    return () => this.statusListeners.delete(listener);
  }

  public sendChatMessage(text: string, locationName?: string): void {
    const trimmed = text.trim();
    if (!trimmed) return;
    this.send({
      type: 'C2S_CHAT',
      playerId: this.playerId,
      callsign: this.callsign,
      text: trimmed,
      locationName
    });
  }

  public onChatMessage(listener: ChatListener): () => void {
    this.chatListeners.add(listener);
    return () => this.chatListeners.delete(listener);
  }

  public broadcastLeaderboard(data: {
    netWorth: number;
    credits: number;
    completedContractsCount: number;
    totalDistanceTraveled: number;
    careerScore: number;
    rankTitle: string;
    currentLocationName?: string;
  }): void {
    this.send({
      type: 'C2S_LEADERBOARD_UPDATE',
      playerId: this.playerId,
      callsign: this.callsign,
      ...data
    });
  }

  public onLeaderboardSync(listener: LeaderboardListener): () => void {
    this.leaderboardListeners.add(listener);
    return () => this.leaderboardListeners.delete(listener);
  }

  public disconnect(): void {
    this.shouldReconnect = false;
    this.stopHeartbeat();
    if (this.reconnectTimeout !== null) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.setStatus('OFFLINE');
  }
}

export const multiplayerClient = new MultiplayerClient();
