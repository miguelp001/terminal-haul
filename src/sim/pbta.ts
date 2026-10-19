import { CoreStatKey, PlayerQualities } from '../types';

export type PbtAOutcome = 'STRONG_HIT' | 'WEAK_HIT' | 'MISS';

export interface PbtARollResult {
  dice: [number, number];
  diceTotal: number;
  statKey?: CoreStatKey;
  statValue: number;
  qualityBonus: number;
  qualityBonusKey?: string;
  total: number;
  outcome: PbtAOutcome;
  outcomeLabel: string; // 'STRONG HIT (10+)' | 'WEAK HIT (7-9)' | 'MISS (6-)'
  breakdownText: string;
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Resolves a Powered by the Apocalypse style move: 2d6 + CoreStat + QualityBonus.
 * - 10+: Strong Hit (Full success, no negative compromise)
 * - 7-9: Weak Hit (Mixed success, achieves intent at a cost or complication)
 * - 6-:  Miss (Hard move / failure, complication, but fail-forward)
 */
export function resolvePbtA(
  statValue: number = 0,
  qualityBonus: number = 0,
  diceOverride?: [number, number],
  statKey?: CoreStatKey,
  qualityBonusKey?: string
): PbtARollResult {
  const d1 = diceOverride ? diceOverride[0] : rollD6();
  const d2 = diceOverride ? diceOverride[1] : rollD6();
  const diceTotal = d1 + d2;
  const total = diceTotal + statValue + qualityBonus;

  let outcome: PbtAOutcome;
  let outcomeLabel: string;

  if (total >= 10) {
    outcome = 'STRONG_HIT';
    outcomeLabel = 'STRONG HIT (10+)';
  } else if (total >= 7) {
    outcome = 'WEAK_HIT';
    outcomeLabel = 'WEAK HIT (7-9)';
  } else {
    outcome = 'MISS';
    outcomeLabel = 'MISS (6-)';
  }

  // Format breakdown: e.g. 🎲 [4 + 5] +1 EDGE +1 Street Cred = 11 -> STRONG HIT
  const statPart = statKey ? ` ${statValue >= 0 ? '+' : ''}${statValue} ${statKey.toUpperCase()}` : (statValue !== 0 ? ` ${statValue >= 0 ? '+' : ''}${statValue}` : '');
  const qualPart = qualityBonusKey && qualityBonus !== 0 ? ` +${qualityBonus} [${qualityBonusKey}]` : (qualityBonus > 0 ? ` +${qualityBonus}` : '');
  const breakdownText = `🎲 2d6 (${d1} + ${d2} = ${diceTotal})${statPart}${qualPart} = ${total} -> ${outcomeLabel}`;

  return {
    dice: [d1, d2],
    diceTotal,
    statKey,
    statValue,
    qualityBonus,
    qualityBonusKey,
    total,
    outcome,
    outcomeLabel,
    breakdownText
  };
}

/**
 * Calculates a +1 quality bonus modifier if the player meets or exceeds the required quality threshold.
 */
export function computeQualityRollBonus(
  qualities: PlayerQualities,
  qualityKey?: string,
  threshold: number = 3
): number {
  if (!qualityKey) return 0;
  const val = qualities[qualityKey] ?? 0;
  return val >= threshold ? 1 : 0;
}
