import { CommodityId, SectorId, FactionId } from '../types';
import { COMMODITIES } from '../constants/worldData';

/**
 * Regional bias multipliers R_region(commodity) across 7 sectors.
 * Value > 1.0 indicates high regional demand/scarcity (higher prices).
 * Value < 1.0 indicates local production/abundance (cheaper prices).
 */
export const REGIONAL_BIAS_MATRIX: Record<SectorId, Record<CommodityId, number>> = {
  northeast: {
    grain: 1.25,
    batteries: 1.15,
    cyberware: 0.95,
    chips: 1.05,
    cryo: 1.10,
    toxins: 1.40
  },
  midwest: {
    grain: 0.80,
    batteries: 0.90,
    cyberware: 1.10,
    chips: 1.20,
    cryo: 1.30,
    toxins: 1.00
  },
  pacific_northwest: {
    grain: 1.10,
    batteries: 0.95,
    cyberware: 0.85,
    chips: 0.80,
    cryo: 0.95,
    toxins: 1.15
  },
  southwest_wasteland: {
    grain: 1.35,
    batteries: 0.75,
    cyberware: 1.15,
    chips: 1.10,
    cryo: 1.25,
    toxins: 0.85
  },
  southern: {
    grain: 1.00,
    batteries: 1.10,
    cyberware: 1.05,
    chips: 0.90,
    cryo: 1.15,
    toxins: 0.75
  },
  east_coast: {
    grain: 1.05,
    batteries: 1.10,
    cyberware: 1.00,
    chips: 1.15,
    cryo: 1.05,
    toxins: 1.50
  },
  north: {
    grain: 1.30,
    batteries: 1.25,
    cyberware: 1.20,
    chips: 1.10,
    cryo: 0.80,
    toxins: 1.20
  }
};

export interface MarketPriceQuote {
  commodityId: CommodityId;
  basePrice: number;
  adjustedPrice: number;
  buyPrice: number;
  sellPrice: number;
  goapMultiplier: number;
  regionalBias: number;
  repDiscount: number;
}

/**
 * Calculates adjusted price P_adjusted = P_base * M_goap * R_region
 */
export function calculateAdjustedPrice(
  commodityId: CommodityId,
  goapMultiplier: number,
  sector: SectorId
): number {
  const base = COMMODITIES[commodityId].basePrice;
  const regionalBias = REGIONAL_BIAS_MATRIX[sector]?.[commodityId] ?? 1.0;
  return base * goapMultiplier * regionalBias;
}

/**
 * Calculates local faction reputation discount factor:
 * D_rep = (Rep_local / 100) * 0.25 (where Rep in [-100, 100])
 */
export function calculateReputationDiscount(localReputation: number): number {
  const clampedRep = Math.max(-100, Math.min(100, localReputation));
  return (clampedRep / 100) * 0.25;
}

/**
 * Calculates Buy Price:
 * P_buy = Math.max(10, Math.round(P_adjusted * (1 - D_rep)))
 */
export function calculateBuyPrice(adjustedPrice: number, repDiscount: number): number {
  return Math.max(10, Math.round(adjustedPrice * (1 - repDiscount)));
}

/**
 * Calculates Sell Price:
 * P_sell = Math.max(5, Math.round(P_adjusted * 0.85 * (1 + D_rep)))
 */
export function calculateSellPrice(adjustedPrice: number, repDiscount: number): number {
  return Math.max(5, Math.round(adjustedPrice * 0.85 * (1 + repDiscount)));
}

/**
 * Generates complete price quote for a single commodity at a given sector and local reputation.
 */
export function getCommodityQuote(
  commodityId: CommodityId,
  goapMultiplier: number,
  sector: SectorId,
  localReputation: number
): MarketPriceQuote {
  const basePrice = COMMODITIES[commodityId].basePrice;
  const regionalBias = REGIONAL_BIAS_MATRIX[sector]?.[commodityId] ?? 1.0;
  const adjustedPrice = basePrice * goapMultiplier * regionalBias;
  const repDiscount = calculateReputationDiscount(localReputation);
  const buyPrice = calculateBuyPrice(adjustedPrice, repDiscount);
  const sellPrice = calculateSellPrice(adjustedPrice, repDiscount);

  return {
    commodityId,
    basePrice,
    adjustedPrice,
    buyPrice,
    sellPrice,
    goapMultiplier,
    regionalBias,
    repDiscount
  };
}

/**
 * Generates market quotes for all 6 commodities for a node.
 */
export function getMarketQuotesForLocation(
  sector: SectorId,
  dominantFaction: FactionId,
  factionReputations: Record<FactionId, number>,
  goapMultipliers: Record<CommodityId, number>
): Record<CommodityId, MarketPriceQuote> {
  const localRep = factionReputations[dominantFaction] ?? 0;
  const commodities: CommodityId[] = ['grain', 'batteries', 'cyberware', 'chips', 'cryo', 'toxins'];

  const quotes = {} as Record<CommodityId, MarketPriceQuote>;
  for (const cid of commodities) {
    const mult = goapMultipliers[cid] ?? 1.0;
    quotes[cid] = getCommodityQuote(cid, mult, sector, localRep);
  }
  return quotes;
}
