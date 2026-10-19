import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { ServerPersistence } from './storage';
import { GlobalMarketManager } from './marketManager';
import { ClientMessage, ServerMessage, RemotePlayerConvoy, ChatMessage } from './types';

export class TerminalHaulServer {
  private server: http.Server;
  private wss: WebSocketServer;
  private port: number;
  private persistence: ServerPersistence;
  private marketManager: GlobalMarketManager;

  // Active connected clients: WebSocket -> Player info
  private activeClients: Map<WebSocket, { playerId: string; callsign: string; lastPing: number }> = new Map();
  // Active convoys for all connected players
  private activeConvoys: Map<string, RemotePlayerConvoy> = new Map();

  private clockTickInterval: NodeJS.Timeout | null = null;
  private syncInterval: NodeJS.Timeout | null = null;
  private serverGameDays: number = 1.0;
  private epochStartTime: number = Date.now();

  constructor(port: number = 8080, customStoragePath?: string) {
    this.port = port;
    this.persistence = new ServerPersistence(customStoragePath);
    this.marketManager = new GlobalMarketManager(this.persistence);

    // Calculate elapsed game days from epoch (1 game day = 7200 real seconds)
    const stored = this.persistence.getData();
    this.epochStartTime = stored.epochStartRealTime || Date.now();
    const elapsedSeconds = (Date.now() - this.epochStartTime) / 1000;
    this.serverGameDays = Math.round((1.0 + elapsedSeconds / 7200) * 1000) / 1000;

    this.server = http.createServer((req, res) => {
      // Basic HTTP health & status endpoint
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      if (req.url === '/health' || req.url === '/') {
        res.writeHead(200);
        res.end(
          JSON.stringify({
            status: 'ONLINE',
            service: 'Terminal Haul Persistent Multiplayer Engine',
            activePlayers: this.activeClients.size,
            serverGameDays: this.serverGameDays,
            convoysInTransit: Array.from(this.activeConvoys.values()).filter((c) => c.status === 'IN_TRANSIT').length
          })
        );
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
    });

    this.wss = new WebSocketServer({ server: this.server });
    this.initWebSocketHandlers();
  }

  private initWebSocketHandlers(): void {
    this.wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (data: string) => {
        try {
          const message: ClientMessage = JSON.parse(data.toString());
          this.handleClientMessage(ws, message);
        } catch (err) {
          console.error('Failed to parse incoming WebSocket message:', err);
        }
      });

      ws.on('close', () => {
        const client = this.activeClients.get(ws);
        if (client) {
          this.activeClients.delete(ws);
          this.activeConvoys.delete(client.playerId);
          this.broadcastPlayersSync();
        }
      });

      ws.on('error', (err) => {
        console.error('WebSocket connection error:', err);
      });
    });
  }

  private handleClientMessage(ws: WebSocket, msg: ClientMessage): void {
    switch (msg.type) {
      case 'C2S_JOIN': {
        this.activeClients.set(ws, {
          playerId: msg.playerId,
          callsign: msg.callsign,
          lastPing: Date.now()
        });

        this.activeConvoys.set(msg.playerId, {
          playerId: msg.playerId,
          callsign: msg.callsign,
          currentLocationId: msg.currentLocationId,
          status: 'DOCKED',
          lastUpdated: Date.now()
        });

        const welcome: ServerMessage = {
          type: 'S2C_WELCOME',
          serverGameDays: this.serverGameDays,
          activePlayerCount: this.activeClients.size,
          marketAdjustments: this.marketManager.getAdjustments(),
          activeConvoys: Array.from(this.activeConvoys.values()),
          recentTrades: this.persistence.getData().recentTrades,
          recentChat: this.persistence.getRecentChat()
        };
        this.send(ws, welcome);
        this.broadcastPlayersSync();
        break;
      }

      case 'C2S_POSITION_UPDATE': {
        const convoy: RemotePlayerConvoy = {
          playerId: msg.playerId,
          callsign: msg.callsign,
          currentLocationId: msg.currentLocationId,
          status: msg.status,
          originId: msg.originId,
          destinationId: msg.destinationId,
          progressPercent: msg.progressPercent,
          lat: msg.lat,
          lng: msg.lng,
          lastUpdated: Date.now()
        };
        this.activeConvoys.set(msg.playerId, convoy);
        break;
      }

      case 'C2S_TRADE': {
        const result = this.marketManager.processPlayerTrade(
          msg.playerId,
          msg.callsign,
          msg.nodeId,
          msg.nodeName,
          msg.commodityId,
          msg.quantity,
          msg.unitPrice,
          msg.tradeType
        );

        const broadcast: ServerMessage = {
          type: 'S2C_TRADE_BROADCAST',
          trade: result.tradeEvent,
          marketAdjustment: result.adjustment
        };
        this.broadcast(broadcast);
        break;
      }

      case 'C2S_CHAT': {
        const text = (msg.text || '').trim();
        if (!text) break;
        const sanitizedText = text.substring(0, 280);
        const chatMsg: ChatMessage = {
          id: `chat_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          playerId: msg.playerId,
          callsign: msg.callsign || 'Unknown Hauler',
          text: sanitizedText,
          locationName: msg.locationName,
          timestamp: Date.now()
        };
        this.persistence.recordChatMessage(chatMsg);
        this.broadcast({
          type: 'S2C_CHAT',
          chat: chatMsg
        });
        break;
      }

      case 'C2S_SAVE_STATE': {
        const client = this.activeClients.get(ws);
        const callsign = client ? client.callsign : 'Unknown Hauler';
        this.persistence.savePlayerProfile(msg.playerId, callsign, msg.savePayloadJson);

        const ack: ServerMessage = {
          type: 'S2C_SAVE_ACK',
          success: true,
          timestamp: Date.now()
        };
        this.send(ws, ack);
        break;
      }

      case 'C2S_HEARTBEAT': {
        const client = this.activeClients.get(ws);
        if (client) {
          client.lastPing = Date.now();
        }
        break;
      }
    }
  }

  private send(ws: WebSocket, message: ServerMessage): void {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }

  private broadcast(message: ServerMessage): void {
    const payload = JSON.stringify(message);
    for (const ws of this.activeClients.keys()) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(payload);
      }
    }
  }

  private broadcastPlayersSync(): void {
    const message: ServerMessage = {
      type: 'S2C_PLAYERS_SYNC',
      activeConvoys: Array.from(this.activeConvoys.values()),
      activePlayerCount: this.activeClients.size
    };
    this.broadcast(message);
  }

  public start(): Promise<void> {
    return new Promise((resolve) => {
      this.server.listen(this.port, () => {
        console.log(`[TERMINAL HAUL SERVER] Authoritative Multiplayer WebSocket server listening on port ${this.port}`);

        // Periodic 1-second server tick: clock progression & market mean-reversion
        this.clockTickInterval = setInterval(() => {
          // 1 Game Day = 7200 real seconds -> 1/7200 per second
          this.serverGameDays += 1 / 7200;
          this.persistence.getData().serverGameDays = this.serverGameDays;

          // Passive market equilibrium adjustments
          if (Math.random() < 0.1) {
            if (this.marketManager.tickMeanReversion()) {
              this.broadcast({
                type: 'S2C_MARKET_UPDATE',
                marketAdjustments: this.marketManager.getAdjustments()
              });
            }
          }
        }, 1000);

        // Broadcast player positions every 500ms
        this.syncInterval = setInterval(() => {
          if (this.activeClients.size > 0) {
            this.broadcastPlayersSync();
          }
        }, 500);

        resolve();
      });
    });
  }

  public stop(): Promise<void> {
    return new Promise((resolve) => {
      if (this.clockTickInterval) clearInterval(this.clockTickInterval);
      if (this.syncInterval) clearInterval(this.syncInterval);
      this.wss.close(() => {
        this.server.close(() => {
          this.persistence.save();
          resolve();
        });
      });
    });
  }

  public getActiveConvoys(): RemotePlayerConvoy[] {
    return Array.from(this.activeConvoys.values());
  }

  public getServerGameDays(): number {
    return this.serverGameDays;
  }
}

// Standalone runner when executed directly via `node` or `tsx`
if (process.argv[1] && process.argv[1].endsWith('gameServer.ts')) {
  const port = parseInt(process.env.PORT || '8080', 10);
  const server = new TerminalHaulServer(port);
  server.start();
}
