import { describe, it, expect } from 'vitest';
import {
  calculateAdjustedPrice,
  calculateReputationDiscount,
  calculateBuyPrice,
  calculateSellPrice,
  getCommodityQuote
} from '../src/sim/economy';
import { COMMODITIES } from '../src/constants/worldData';

describe('Economic Engine & Pricing Formulas', () => {
  it('correctly calculates adjusted price with base, GOAP multiplier, and regional bias', () => {
    // Synthetic Grain base price = 40
    // In northeast, regional bias = 1.25
    // With GOAP multiplier = 1.20
    // Adjusted price = 40 * 1.20 * 1.25 = 60
    const adjusted = calculateAdjustedPrice('grain', 1.20, 'northeast');
    expect(adjusted).toBeCloseTo(60, 4);
  });

  it('correctly calculates reputation discount factor D_rep', () => {
    // Rep = 100 -> D_rep = (100 / 100) * 0.25 = 0.25
    expect(calculateReputationDiscount(100)).toBe(0.25);

    // Rep = 0 -> D_rep = 0
    expect(calculateReputationDiscount(0)).toBe(0);

    // Rep = -100 -> D_rep = -0.25 (hostile faction charges +25% markup)
    expect(calculateReputationDiscount(-100)).toBe(-0.25);

    // Rep = 40 -> D_rep = 0.4 * 0.25 = 0.10
    expect(calculateReputationDiscount(40)).toBeCloseTo(0.10, 4);
  });

  it('calculates Buy Price formula: max(10, round(P_adjusted * (1 - D_rep)))', () => {
    const pAdjusted = 100;
    // Positive rep: D_rep = 0.10 -> 100 * (1 - 0.10) = 90
    expect(calculateBuyPrice(pAdjusted, 0.10)).toBe(90);

    // Negative rep: D_rep = -0.10 -> 100 * (1 - (-0.10)) = 110
    expect(calculateBuyPrice(pAdjusted, -0.10)).toBe(110);

    // Minimum clamp test: P_adjusted = 5, rep discount = 0.50 -> max(10, 3) = 10
    expect(calculateBuyPrice(5, 0.5)).toBe(10);
  });

  it('calculates Sell Price formula: max(5, round(P_adjusted * 0.85 * (1 + D_rep)))', () => {
    const pAdjusted = 100;
    // Neutral rep: D_rep = 0 -> 100 * 0.85 * 1.0 = 85
    expect(calculateSellPrice(pAdjusted, 0)).toBe(85);

    // Positive rep: D_rep = 0.20 -> 100 * 0.85 * 1.20 = 102
    expect(calculateSellPrice(pAdjusted, 0.20)).toBe(102);

    // Hostile rep: D_rep = -0.20 -> 100 * 0.85 * 0.80 = 68
    expect(calculateSellPrice(pAdjusted, -0.20)).toBe(68);

    // Minimum clamp test: P_adjusted = 2 -> max(5, round(2 * 0.85)) = 5
    expect(calculateSellPrice(2, 0)).toBe(5);
  });

  it('generates consistent quotes matching commodity base prices', () => {
    const quote = getCommodityQuote('batteries', 1.0, 'midwest', 0);
    expect(quote.basePrice).toBe(COMMODITIES.batteries.basePrice);
    expect(quote.buyPrice).toBeGreaterThan(0);
    expect(quote.sellPrice).toBeLessThanOrEqual(quote.buyPrice);
  });
});
