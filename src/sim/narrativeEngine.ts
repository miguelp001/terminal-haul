import { PlayerState, WorldNode, CommodityId, FactionId, CoreStatKey, getNodeArchetype } from '../types';
import type { Storylet, StoryletRequirement, StoryletReward, StoryletTriggerType, StoryletOption, PbtABranchOutcome } from '../types/storylet';
import { STORYLET_POOL } from '../data/storylets';
import { COMMODITIES } from '../constants/worldData';
import { resolvePbtA, computeQualityRollBonus, PbtARollResult } from './pbta';

/**
 * Checks whether a given world node is situated on or adjacent to a coastline, ocean, harbor, bay, sound, or major maritime waterfront.
 */
export function isCoastalNode(node: WorldNode): boolean {
  if (typeof node.isCoastal === 'boolean') {
    return node.isCoastal;
  }
  const text = `${node.name} ${node.description}`.toLowerCase();
  const coastalKeywords = [
    'coast', 'coastal', 'harbor', 'bay', 'port', 'waterfront', 'ocean', 'sea',
    'sound', 'cape', 'island', 'beach', 'dock', 'docklands', 'submersible',
    'marina', 'atlantic', 'pacific', 'gulf', 'wharf', 'pier', 'sub-base',
    'kelp', 'tide', 'tidal', 'naval', 'fjord', 'estuary', 'deep sea',
    'seaboard', 'marine', 'shore', 'lake ontario', 'lake erie', 'lake michigan',
    'lake superior', 'st. lawrence', 'hudson waterfront'
  ];
  if (coastalKeywords.some((kw) => text.includes(kw))) {
    return true;
  }

  // Pacific coast seaboard (PNW west of -122 longitude)
  if (node.sector === 'pacific_northwest' && node.lng <= -122.0) {
    return true;
  }
  // East Coast Atlantic seaboard (East of -81.5 longitude and below 45 lat)
  if (node.sector === 'east_coast' && node.lng >= -81.5) {
    return true;
  }
  // Southern Gulf Coast
  if (node.sector === 'southern' && node.lat <= 30.8 && node.lng >= -98.0 && node.lng <= -81.0) {
    return true;
  }

  return false;
}

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

    // 6. Sector & Multiple Sectors
    if (req.sector && currentNode.sector !== req.sector) {
      missing.push(`Must be in ${req.sector.toUpperCase()} sector`);
    }
    if (req.sectors && !req.sectors.includes(currentNode.sector)) {
      missing.push(`Must be in one of sectors: ${req.sectors.map((s) => s.toUpperCase()).join(', ')}`);
    }

    // 7. Location ID & Location IDs
    if (req.locationId && currentNode.id !== req.locationId) {
      missing.push(`Specific location requirement not met (${req.locationId})`);
    }
    if (req.locationIds && !req.locationIds.includes(currentNode.id)) {
      missing.push(`Must be at one of nodes: ${req.locationIds.join(', ')}`);
    }

    // 8. Coastal / Inland Constraints
    if (req.coastalOnly && !isCoastalNode(currentNode)) {
      missing.push('Must be at a coastal or maritime waterfront node');
    }
    if (req.inlandOnly && isCoastalNode(currentNode)) {
      missing.push('Must be at an inland interior node away from coasts');
    }

    // 9. Node Archetypes & Factions
    if (req.archetype && getNodeArchetype(currentNode) !== req.archetype) {
      missing.push(`Node archetype must be ${req.archetype}`);
    }
    if (req.archetypes && !req.archetypes.includes(getNodeArchetype(currentNode))) {
      missing.push(`Node archetype must be one of: ${req.archetypes.join(', ')}`);
    }
    if (req.factions && !req.factions.includes(currentNode.dominantFaction)) {
      missing.push(`Dominant faction must be one of: ${req.factions.join(', ')}`);
    }

    // 10. Layer Constraints
    if (req.layer) {
      if (req.layer === 'coastal' && !isCoastalNode(currentNode)) {
        missing.push('Requires coastal layer environment');
      } else if (req.layer === 'inland' && isCoastalNode(currentNode)) {
        missing.push('Requires inland layer environment');
      }
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
        if (storylet.triggerLocation === 'coastal') {
          if (!isCoastalNode(currentNode)) return false;
        } else if (storylet.triggerLocation === 'inland') {
          if (isCoastalNode(currentNode)) return false;
        } else if (
          storylet.triggerLocation !== currentNode.id &&
          storylet.triggerLocation !== currentNode.sector &&
          storylet.triggerLocation !== getNodeArchetype(currentNode)
        ) {
          return false;
        }
      }

      // Check storylet layer
      if (storylet.layer) {
        if (storylet.layer === 'coastal' && !isCoastalNode(currentNode)) {
          return false;
        }
        if (storylet.layer === 'inland' && isCoastalNode(currentNode)) {
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

    // 7. Rig Modifications
    if (rewards.rig && state.convoy) {
      if (rewards.rig.speedRating) {
        state.convoy.speedRating = Math.round((state.convoy.speedRating + rewards.rig.speedRating) * 100) / 100;
        changes.push(`Rig Speed: ${rewards.rig.speedRating > 0 ? '+' : ''}${Math.round(rewards.rig.speedRating * 100)}% (Now ${state.convoy.speedRating.toFixed(2)}x)`);
      }
      if (rewards.rig.maxHull) {
        state.convoy.maxHull += rewards.rig.maxHull;
        state.convoy.hullIntegrity = Math.min(state.convoy.maxHull, state.convoy.hullIntegrity + rewards.rig.maxHull);
        changes.push(`Max Hull: +${rewards.rig.maxHull}% (Now ${state.convoy.maxHull}%)`);
      }
      if (rewards.rig.maxCargoWeight) {
        state.convoy.maxCargoWeight += rewards.rig.maxCargoWeight;
        changes.push(`Cargo Capacity: +${rewards.rig.maxCargoWeight}T (Now ${state.convoy.maxCargoWeight}T)`);
      }
      if (rewards.rig.name) {
        state.convoy.name = rewards.rig.name;
        changes.push(`Rig Designation: "${rewards.rig.name}"`);
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
