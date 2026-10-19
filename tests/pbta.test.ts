import { describe, it, expect } from 'vitest';
import { resolvePbtA, computeQualityRollBonus } from '../src/sim/pbta';

describe('PbtA Dice Engine (2d6 + Stat + QualityBonus)', () => {
  it('correctly resolves a Strong Hit (10+)', () => {
    // 2d6 = 5 + 4 = 9, stat +1 = 10 -> STRONG_HIT
    const result = resolvePbtA(1, 0, [5, 4], 'edge');
    expect(result.diceTotal).toBe(9);
    expect(result.total).toBe(10);
    expect(result.outcome).toBe('STRONG_HIT');
    expect(result.outcomeLabel).toContain('STRONG HIT');
    expect(result.breakdownText).toContain('EDGE');
    expect(result.breakdownText).toContain('10');
  });

  it('correctly resolves a Weak Hit / Mixed Success (7-9)', () => {
    // 2d6 = 3 + 3 = 6, stat +1 = 7 -> WEAK_HIT
    const result = resolvePbtA(1, 0, [3, 3], 'grit');
    expect(result.diceTotal).toBe(6);
    expect(result.total).toBe(7);
    expect(result.outcome).toBe('WEAK_HIT');
    expect(result.outcomeLabel).toContain('WEAK HIT');

    // 2d6 = 5 + 4 = 9, stat 0 = 9 -> WEAK_HIT
    const result9 = resolvePbtA(0, 0, [5, 4], 'cyber');
    expect(result9.total).toBe(9);
    expect(result9.outcome).toBe('WEAK_HIT');
  });

  it('correctly resolves a Miss (6-)', () => {
    // 2d6 = 2 + 3 = 5, stat 0 = 5 -> MISS
    const result = resolvePbtA(0, 0, [2, 3], 'cool');
    expect(result.diceTotal).toBe(5);
    expect(result.total).toBe(5);
    expect(result.outcome).toBe('MISS');
    expect(result.outcomeLabel).toContain('MISS');

    // 2d6 = 1 + 2 = 3, stat +1 = 4 -> MISS
    const result4 = resolvePbtA(1, 0, [1, 2], 'edge');
    expect(result4.total).toBe(4);
    expect(result4.outcome).toBe('MISS');
  });

  it('incorporates quality bonus when threshold is satisfied', () => {
    const qualities = {
      'Street Cred': 5,
      'Tech Literacy': 1,
      'Contraband Mastery': 0,
      'Cyberware Level': 0,
      'Enclave Permits': 0,
      'Heat': 0,
      'Glitch Rating': 0
    };

    const bonusCred = computeQualityRollBonus(qualities, 'Street Cred', 3);
    expect(bonusCred).toBe(1);

    const bonusTech = computeQualityRollBonus(qualities, 'Tech Literacy', 3);
    expect(bonusTech).toBe(0);

    // Roll with bonus turning 6 into 7 (Miss to Weak Hit)
    const result = resolvePbtA(0, bonusCred, [2, 4], 'cool', 'Street Cred');
    expect(result.total).toBe(7);
    expect(result.outcome).toBe('WEAK_HIT');
    expect(result.qualityBonus).toBe(1);
    expect(result.qualityBonusKey).toBe('Street Cred');
  });
});
