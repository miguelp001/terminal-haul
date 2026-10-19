import { describe, it, expect } from 'vitest';
import { GoapEconomySimulation } from '../src/sim/goap';

describe('GOAP AI Market Dynamics', () => {
  it('initializes all commodity multipliers at 1.0', () => {
    const goap = new GoapEconomySimulation();
    const mults = goap.getMultipliers();
    expect(mults.grain).toBe(1.0);
    expect(mults.batteries).toBe(1.0);
    expect(mults.cyberware).toBe(1.0);
    expect(mults.chips).toBe(1.0);
    expect(mults.cryo).toBe(1.0);
    expect(mults.toxins).toBe(1.0);
  });

  it('executes a faction action and updates commodity multipliers within bounds [0.5, 2.5]', () => {
    const goap = new GoapEconomySimulation();
    const action = goap.executeGoapStep();

    expect(action.headline).toBeDefined();
    expect(action.factionId).toBeDefined();
    expect(action.description).toBeDefined();

    const mults = goap.getMultipliers();
    for (const val of Object.values(mults)) {
      expect(val).toBeGreaterThanOrEqual(0.5);
      expect(val).toBeLessThanOrEqual(2.5);
    }
  });

  it('drifts back towards 1.0 equilibrium over multiple simulation steps', () => {
    const goap = new GoapEconomySimulation();
    // Artificially spike grain to max 2.5
    goap.setMultiplier('grain', 2.5);
    expect(goap.getMultiplier('grain')).toBe(2.5);

    // After many steps, drift brings it down from 2.5
    for (let i = 0; i < 20; i++) {
      goap.executeGoapStep();
    }

    expect(goap.getMultiplier('grain')).toBeLessThan(2.5);
  });
});
