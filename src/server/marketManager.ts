import { CommodityId } from '../types';
import { COMMODITIES } from '../constants/worldData';
import { SharedMarketAdjustment, GlobalTradeEvent } from './types';
import { ServerPersistence } from './storage';

export class GlobalMarketManager {
  private persistence: ServerPersistence;
  private adjustments: Record<CommodityId, SharedMarketAdjustment>;

  constructor(persistence: ServerPersistence) {
    this.persistence = persistence;
    this.adjustments = this.persistence.getData().marketAdjustments;
  }

  public getAdjustments(): Record<CommodityId, SharedMarketAdjustment> {
    return this.adjustments;
  }

  public getAdjustment(commodityId: CommodityId): SharedMarketAdjustment {
    return this.adjustments[commodityId];
  }

  /**
   * Processes a player trade transaction, updating global demand multipliers.
   * Purchasing increases scarcity (+0.01 per unit, max 1.50).
   * Selling increases supply (-0.01 per unit, min 0.65).
   */
  public processPlayerTrade(
    playerId: string,
    callsign: string,
    nodeId: string,
    nodeName: string,
    commodityId: CommodityId,
    quantity: number,
    unitPrice: number,
    tradeType: 'BUY' | 'SELL'
  ): { tradeEvent: GlobalTradeEvent; adjustment: SharedMarketAdjustment } {
    const current = this.adjustments[commodityId];
    const def = COMMODITIES[commodityId];
    const commodityName = def ? def.name : commodityId;

    // Price elasticity delta
    const delta = tradeType === 'BUY' ? 0.012 * quantity : -0.012 * quantity;
    const newMultiplier = Math.round(Math.max(0.65, Math.min(1.50, current.globalDemandMultiplier + delta)) * 1000) / 1000;

    const updatedAdj: SharedMarketAdjustment = {
      commodityId,
      globalDemandMultiplier: newMultiplier,
      totalVolumeTraded: current.totalVolumeTraded + quantity,
      lastTradePrice: unitPrice
    };

    this.adjustments[commodityId] = updatedAdj;

    const tradeEvent: GlobalTradeEvent = {
      id: `trade_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      playerId,
      callsign,
      nodeId,
      nodeName,
      commodityId,
      commodityName,
      quantity,
      unitPrice,
      totalCredits: quantity * unitPrice,
      tradeType,
      timestamp: Date.now()
    };

    this.persistence.recordTrade(tradeEvent, updatedAdj);

    return { tradeEvent, adjustment: updatedAdj };
  }

  /**
   * Simulates passive mean-reversion of market pricing towards equilibrium (1.0).
   */
  public tickMeanReversion(): boolean {
    let changed = false;
    for (const cid of Object.keys(this.adjustments) as CommodityId[]) {
      const adj = this.adjustments[cid];
      if (Math.abs(adj.globalDemandMultiplier - 1.0) > 0.005) {
        // Step 0.002 towards 1.0
        const step = adj.globalDemandMultiplier > 1.0 ? -0.002 : 0.002;
        adj.globalDemandMultiplier = Math.round((adj.globalDemandMultiplier + step) * 1000) / 1000;
        changed = true;
      }
    }
    if (changed) {
      this.persistence.save();
    }
    return changed;
  }
}
