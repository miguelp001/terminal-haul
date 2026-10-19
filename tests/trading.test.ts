import { describe, it, expect, beforeEach } from 'vitest';
import { GameStore } from '../src/state/gameState';

describe('Commodity Trading & Cargo Hold Transactions', () => {
  let store: GameStore;

  beforeEach(() => {
    store = new GameStore();
  });

  it('calculates Net Worth based on spec formula (Credits + sum(Cargo * P_base))', () => {
    // Initial: Credits = 2500
    // Cargo: grain: 4 (4 * 40 = 160), batteries: 2 (2 * 120 = 240), cyberware: 1 (1 * 350 = 350)
    // Total = 2500 + 160 + 240 + 350 = 3250
    const netWorth = store.calculateNetWorth();
    expect(netWorth).toBe(3250);
  });

  it('allows purchasing commodities when credits and capacity permit', () => {
    const quotes = store.getCurrentMarketQuotes();
    const grainPrice = quotes.grain.buyPrice;
    const initialCredits = store.getState().credits;
    const initialGrain = store.getState().cargo.grain;

    const result = store.buyCommodity('grain', 2);
    expect(result.success).toBe(true);
    expect(store.getState().credits).toBe(initialCredits - grainPrice * 2);
    expect(store.getState().cargo.grain).toBe(initialGrain + 2);
    expect(store.getState().convoy.currentCargoWeight).toBeGreaterThan(0);
  });

  it('rejects purchase when credits are insufficient', () => {
    // Attempt to buy 100 cryo pods (each > 1500 credits)
    const result = store.buyCommodity('cryo', 100);
    expect(result.success).toBe(false);
    expect(result.message).toContain('Insufficient credits');
  });

  it('rejects purchase when cargo capacity would be exceeded', () => {
    // Max cargo is 35 Tonnes, each cryo pod is 4.0 Tonnes
    // Buying 10 pods = 40 Tonnes > 35 Tonnes
    // Give enough credits first to test weight limit specifically
    // @ts-expect-error test override
    store.state.credits = 100000;
    const result = store.buyCommodity('cryo', 10);
    expect(result.success).toBe(false);
    expect(result.message).toContain('Cargo hold exceeded');
  });

  it('allows selling owned commodities and increases credits', () => {
    const quotes = store.getCurrentMarketQuotes();
    const grainSellPrice = quotes.grain.sellPrice;
    const initialCredits = store.getState().credits;
    const initialGrain = store.getState().cargo.grain;

    const result = store.sellCommodity('grain', 2);
    expect(result.success).toBe(true);
    expect(store.getState().cargo.grain).toBe(initialGrain - 2);
    expect(store.getState().credits).toBe(initialCredits + grainSellPrice * 2);
  });

  it('rejects selling commodities when player does not own enough units', () => {
    const result = store.sellCommodity('toxins', 5);
    expect(result.success).toBe(false);
    expect(result.message).toContain('Insufficient inventory');
  });
});
