import { PlayerState, WorldNode, CommodityId, FactionId, CoreStatKey } from '../types';
import type { Storylet, StoryletRequirement, StoryletReward, StoryletTriggerType, StoryletOption, PbtABranchOutcome } from '../types/storylet';
import { STORYLET_POOL } from '../data/storylets';
import { COMMODITIES } from '../constants/worldData';
import { resolvePbtA, computeQualityRollBonus, PbtARollResult } from './pbta';

export class NarrativeEngine {
  private storylets: Storylet[];

  constructor(customPool?: Storylet[]) {
    this.storylets = customPool || STORYLET_POOL;
  }

  /**
   * Evaluates if player state meets a set of storylet or option requirements.
   */
  public checkRequirement(
    req: StoryletRequirement | undefined,
    state: PlayerState,
    currentNode: WorldNode
  ): { meets: boolean; missing: string[] } {
    if (!req) return { meets: true, missing: [] };

    const missing: string[] = [];

    // 1. Min Qualities
    if (req.qualities) {
      for (const [qName, minVal] of Object.entries(req.qualities)) {
        const currentVal = state.qualities[qName] ?? 0;
        if (currentVal < minVal) {
          missing.push(`${qName} >= ${minVal} (Current: ${currentVal})`);
        }
      }
    }

    // 2. Max Qualities (e.g. Heat cap)
    if (req.maxQualities) {
      for (const [qName, maxVal] of Object.entries(req.maxQualities)) {
        const currentVal = state.qualities[qName] ?? 0;
        if (currentVal > maxVal) {
          missing.push(`${qName} <= ${maxVal} (Current: ${currentVal})`);
        }
      }
    }

    // 2b. Core Stats Check
    if (req.stats && state.stats) {
      for (const [sKey, minVal] of Object.entries(req.stats) as [CoreStatKey, number][]) {
        const currentVal = state.stats[sKey] ?? 0;
        if (currentVal < minVal) {
          missing.push(`${sKey.toUpperCase()} >= ${minVal} (Current: ${currentVal})`);
        }
      }
    }

    // 3. Credits
    if (req.credits !== undefined && state.credits < req.credits) {
      missing.push(`Credits >= ${req.credits} (Current: ${state.credits})`);
    }

    // 4. Cargo
    if (req.cargo) {
      for (const [cid, minQty] of Object.entries(req.cargo) as [CommodityId, number][]) {
        const currentQty = state.cargo[cid] ?? 0;
        if (currentQty < minQty) {
          const cName = COMMODITIES[cid]?.name || cid;
          missing.push(`${cName} >= ${minQty} (Current: ${currentQty})`);
        }
      }
    }

    // 5. Faction Reputation
    if (req.factionRep) {
      for (const [fid, minRep] of Object.entries(req.factionRep) as [FactionId, number][]) {
        const currentRep = state.factions[fid] ?? 0;
        if (currentRep < minRep) {
          missing.push(`Reputation with ${fid.toUpperCase()} >= ${minRep} (Current: ${currentRep})`);
        }
      }
    }

    // 6. Sector
    if (req.sector && currentNode.sector !== req.sector) {
      missing.push(`Must be in ${req.sector.toUpperCase()} sector`);
    }

    // 7. Location ID
    if (req.locationId && currentNode.id !== req.locationId) {
      missing.push(`Specific location requirement not met`);
    }

    return {
      meets: missing.length === 0,
      missing
    };
  }

  /**
   * Finds all storylets eligible to trigger given the current player state, location, and trigger type.
   */
  public getEligibleStorylets(
    state: PlayerState,
    currentNode: WorldNode,
    triggerType: StoryletTriggerType
  ): Storylet[] {
    return this.storylets.filter((storylet) => {
      // Check repeatable constraint
      if (storylet.repeatable === false && state.completedStorylets?.includes(storylet.id)) {
        return false;
      }

      // Check trigger type
      if (storylet.triggerType !== 'ANY' && storylet.triggerType !== triggerType) {
        return false;
      }

      // Check trigger location
      if (storylet.triggerLocation && storylet.triggerLocation !== 'Any') {
        if (storylet.triggerLocation !== currentNode.id && storylet.triggerLocation !== currentNode.sector) {
          return false;
        }
      }

      // Check base requirements
      const check = this.checkRequirement(storylet.reqs, state, currentNode);
      return check.meets;
    });
  }

  /**
   * Selects a random eligible storylet, or null if none available.
   */
  public rollStorylet(
    state: PlayerState,
    currentNode: WorldNode,
    triggerType: StoryletTriggerType
  ): Storylet | null {
    const eligible = this.getEligibleStorylets(state, currentNode, triggerType);
    if (eligible.length === 0) return null;
    return eligible[Math.floor(Math.random() * eligible.length)];
  }

  /**
   * Applies the consequences of a selected option to the player state.
   */
  public applyOptionRewards(
    rewards: StoryletReward,
    state: PlayerState,
    recalculateWeightCb?: () => void
  ): string[] {
    const changes: string[] = [];

    // 1. Qualities
    if (rewards.qualities) {
      for (const [qName, delta] of Object.entries(rewards.qualities)) {
        const cur = state.qualities[qName] ?? 0;
        let next = cur + delta;
        if (qName === 'Heat' || qName === 'Glitch Rating') {
          next = Math.max(0, Math.min(100, next));
        } else {
          next = Math.max(0, next);
        }
        state.qualities[qName] = next;
        changes.push(`${qName}: ${delta > 0 ? '+' : ''}${delta} (Now ${next})`);
      }
    }

    // 2. Credits
    if (rewards.credits !== undefined && rewards.credits !== 0) {
      state.credits = Math.max(0, state.credits + rewards.credits);
      changes.push(`Credits: ${rewards.credits > 0 ? '+' : ''}${rewards.credits} ₵`);
    }

    // 3. Cargo
    if (rewards.cargo) {
      for (const [cid, delta] of Object.entries(rewards.cargo) as [CommodityId, number][]) {
        const cur = state.cargo[cid] ?? 0;
        const next = Math.max(0, cur + delta);
        state.cargo[cid] = next;
        const cName = COMMODITIES[cid]?.name || cid;
        changes.push(`${cName}: ${delta > 0 ? '+' : ''}${delta} units`);
      }
      if (recalculateWeightCb) recalculateWeightCb();
    }

    // 4. Faction Reputations
    if (rewards.rep) {
      for (const [fid, delta] of Object.entries(rewards.rep) as [FactionId, number][]) {
        const cur = state.factions[fid] ?? 0;
        const next = Math.max(-100, Math.min(100, cur + delta));
        state.factions[fid] = next;
        changes.push(`Reputation [${fid.toUpperCase()}]: ${delta > 0 ? '+' : ''}${delta} (Now ${next})`);
      }
    }

    // 5. Rig Hull Integrity
    if (rewards.hullIntegrity !== undefined && rewards.hullIntegrity !== 0) {
      const cur = state.convoy.hullIntegrity;
      const next = Math.max(0, Math.min(state.convoy.maxHull, cur + rewards.hullIntegrity));
      state.convoy.hullIntegrity = next;
      changes.push(`Rig Hull: ${rewards.hullIntegrity > 0 ? '+' : ''}${rewards.hullIntegrity}%`);
    }

    // 6. Core Stats
    if (rewards.stats && state.stats) {
      for (const [sKey, delta] of Object.entries(rewards.stats) as [CoreStatKey, number][]) {
        const cur = state.stats[sKey] ?? 0;
        const next = Math.max(-2, Math.min(4, cur + delta));
        state.stats[sKey] = next;
        changes.push(`${sKey.toUpperCase()}: ${delta > 0 ? '+' : ''}${delta} (Now ${next >= 0 ? '+' : ''}${next})`);
      }
    }

    return changes;
  }

  /**
   * Evaluates a storylet option choice using PbtA mechanics if statRoll is specified.
   */
  public resolveStoryletOption(
    option: StoryletOption,
    state: PlayerState,
    diceOverride?: [number, number]
  ): {
    rollResult?: PbtARollResult;
    effectText: string;
    rewards: StoryletReward;
  } {
    if (option.statRoll) {
      const statVal = state.stats ? (state.stats[option.statRoll] ?? 0) : 0;
      const qualityBonus = computeQualityRollBonus(
        state.qualities,
        option.qualityBonusKey,
        option.qualityBonusThreshold ?? 3
      );
      const rollResult = resolvePbtA(
        statVal,
        qualityBonus,
        diceOverride,
        option.statRoll,
        option.qualityBonusKey
      );

      let branchOutcome: PbtABranchOutcome | undefined;
      if (rollResult.outcome === 'STRONG_HIT') {
        branchOutcome = option.strongHit;
      } else if (rollResult.outcome === 'WEAK_HIT') {
        branchOutcome = option.weakHit;
      } else {
        branchOutcome = option.miss;
      }

      const effectText = branchOutcome?.effectText || option.effectText;
      const rewards = branchOutcome?.rewards || option.rewards;

      return {
        rollResult,
        effectText,
        rewards
      };
    }

    return {
      effectText: option.effectText,
      rewards: option.rewards
    };
  }
}
