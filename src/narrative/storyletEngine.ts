import { WorldNode, CommodityId, FactionId, getNodeArchetype } from '../types';
import { FACTIONS, SECTORS } from '../constants/worldData';
import {
  Storylet,
  QualityRequirements,
  PlayerNarrativeState,
  TextInterpolationContext
} from './storyletTypes';

export class StoryletEngine {
  /**
   * Evaluates if a given storylet is eligible to trigger given current player state and location.
   */
  public static isStoryletEligible(
    storylet: Storylet,
    state: PlayerNarrativeState,
    currentNode: WorldNode
  ): { eligible: boolean; reasons: string[] } {
    const reasons: string[] = [];

    // 1. Non-repeatable Check
    if (!storylet.repeatable && state.completedStorylets.includes(storylet.id)) {
      reasons.push('Storylet already completed and is non-repeatable');
    }

    // 2. Cooldown Check
    const cooldownExpiry = state.storyletCooldowns[storylet.id];
    if (cooldownExpiry !== undefined && state.gameDays < cooldownExpiry) {
      const remaining = (cooldownExpiry - state.gameDays).toFixed(1);
      reasons.push(`Storylet on cooldown (${remaining} days remaining)`);
    }

    // 3. Transit Context Check
    if (storylet.scope.enRouteOnly && !state.isEnRoute) {
      reasons.push('Storylet can only trigger while in transit on highway');
    }
    if (storylet.scope.dockOnly && state.isEnRoute) {
      reasons.push('Storylet can only trigger while docked at an enclave');
    }

    // 4. Sector Scope Check
    if (storylet.scope.sectors && storylet.scope.sectors !== 'any') {
      if (!storylet.scope.sectors.includes(currentNode.sector)) {
        reasons.push(`Current sector (${currentNode.sector}) outside storylet scope`);
      }
    }

    // 5. Archetype Scope Check
    if (storylet.scope.archetypes && storylet.scope.archetypes !== 'any') {
      const archetype = getNodeArchetype(currentNode);
      if (!storylet.scope.archetypes.includes(archetype)) {
        reasons.push(`Current node archetype (${archetype}) outside storylet scope`);
      }
    }

    // 6. Location ID Scope Check
    if (storylet.scope.locationIds && storylet.scope.locationIds !== 'any') {
      if (!storylet.scope.locationIds.includes(currentNode.id)) {
        reasons.push(`Current node ID (${currentNode.id}) outside storylet scope`);
      }
    }

    // 7. Structured Requirements Check
    const reqCheck = this.evaluateRequirements(storylet.reqs, state);
    if (!reqCheck.meets) {
      reasons.push(...reqCheck.missing);
    }

    return {
      eligible: reasons.length === 0,
      reasons
    };
  }

  /**
   * Evaluates quality, reputation, currency, cargo, and prerequisite conditions.
   */
  public static evaluateRequirements(
    reqs: QualityRequirements | undefined,
    state: PlayerNarrativeState
  ): { meets: boolean; missing: string[] } {
    if (!reqs) return { meets: true, missing: [] };

    const missing: string[] = [];

    // Prerequisite storylets
    if (reqs.requiredStoryletsCompleted) {
      for (const requiredId of reqs.requiredStoryletsCompleted) {
        if (!state.completedStorylets.includes(requiredId)) {
          missing.push(`Requires prior completion of storylet [${requiredId}]`);
        }
      }
    }

    // Excluded storylets
    if (reqs.excludedStoryletsCompleted) {
      for (const excludedId of reqs.excludedStoryletsCompleted) {
        if (state.completedStorylets.includes(excludedId)) {
          missing.push(`Incompatible with prior storylet [${excludedId}]`);
        }
      }
    }

    // Credits
    if (reqs.minCredits !== undefined && state.credits < reqs.minCredits) {
      missing.push(`Requires at least ${reqs.minCredits} credits (Have ${state.credits})`);
    }
    if (reqs.maxCredits !== undefined && state.credits > reqs.maxCredits) {
      missing.push(`Requires no more than ${reqs.maxCredits} credits (Have ${state.credits})`);
    }

    // Cargo
    if (reqs.minCargo) {
      for (const [cid, minQty] of Object.entries(reqs.minCargo) as [CommodityId, number][]) {
        const owned = state.cargo[cid] || 0;
        if (owned < minQty) {
          missing.push(`Requires ${minQty}x ${cid} in cargo (Have ${owned})`);
        }
      }
    }

    // Min Qualities
    if (reqs.minQualities) {
      for (const [qName, minVal] of Object.entries(reqs.minQualities)) {
        if (minVal !== undefined) {
          const current = state.qualities[qName] ?? 0;
          if (current < minVal) {
            missing.push(`${qName} >= ${minVal} (Current: ${current})`);
          }
        }
      }
    }

    // Max Qualities
    if (reqs.maxQualities) {
      for (const [qName, maxVal] of Object.entries(reqs.maxQualities)) {
        if (maxVal !== undefined) {
          const current = state.qualities[qName] ?? 0;
          if (current > maxVal) {
            missing.push(`${qName} <= ${maxVal} (Current: ${current})`);
          }
        }
      }
    }

    // Min Faction Reputation
    if (reqs.minReputation) {
      for (const [fid, minRep] of Object.entries(reqs.minReputation) as [FactionId, number][]) {
        const current = state.factions[fid] ?? 0;
        if (current < minRep) {
          missing.push(`${fid.toUpperCase()} rep >= ${minRep} (Current: ${current})`);
        }
      }
    }

    // Max Faction Reputation
    if (reqs.maxReputation) {
      for (const [fid, maxRep] of Object.entries(reqs.maxReputation) as [FactionId, number][]) {
        const current = state.factions[fid] ?? 0;
        if (current > maxRep) {
          missing.push(`${fid.toUpperCase()} rep <= ${maxRep} (Current: ${current})`);
        }
      }
    }

    return {
      meets: missing.length === 0,
      missing
    };
  }

  /**
   * Replaces placeholders dynamically: {{LOCATION}}, {{FACTION}}, {{SECTOR}}, {{ENFORCER}}, {{CONTRABAND}}.
   */
  public static renderStoryletText(template: string, context: TextInterpolationContext): string {
    const loc = context.location;
    const factionObj = FACTIONS[loc.dominantFaction];
    const factionName = factionObj ? factionObj.name : loc.dominantFaction.toUpperCase();
    const sectorObj = SECTORS[loc.sector];
    const sectorName = sectorObj ? sectorObj.name : loc.sector.toUpperCase();

    let defaultEnforcer = 'Aegis Patrol Enforcers';
    if (loc.dominantFaction === 'gridlock') defaultEnforcer = 'Syndicate Hit-Squad';
    else if (loc.dominantFaction === 'solaris') defaultEnforcer = 'Nomad Road Outriders';
    else if (loc.dominantFaction === 'rustworks') defaultEnforcer = 'Union Security Marshals';
    else if (loc.dominantFaction === 'neuralfront') defaultEnforcer = 'Neural Mesh Agents';

    const enforcer = context.enforcerName || defaultEnforcer;
    const contraband = context.contrabandItem || 'Military-Grade Bio-Toxins';

    return template
      .replace(/\{\{LOCATION\}\}/g, loc.name)
      .replace(/\{\{FACTION\}\}/g, factionName)
      .replace(/\{\{SECTOR\}\}/g, sectorName)
      .replace(/\{\{ENFORCER\}\}/g, enforcer)
      .replace(/\{\{CONTRABAND\}\}/g, contraband);
  }

  /**
   * Draws a weighted random sample of 3–5 eligible storylets without duplicates.
   */
  public static drawStorylets(
    pool: Storylet[],
    state: PlayerNarrativeState,
    currentNode: WorldNode,
    targetCount: number = 3
  ): Storylet[] {
    const eligiblePool = pool.filter((s) => this.isStoryletEligible(s, state, currentNode).eligible);

    if (eligiblePool.length <= targetCount) {
      return [...eligiblePool];
    }

    const selected: Storylet[] = [];
    const remaining = [...eligiblePool];
    const countToDraw = Math.min(targetCount, remaining.length);

    for (let i = 0; i < countToDraw; i++) {
      const totalWeight = remaining.reduce((sum, item) => sum + Math.max(1, item.weight), 0);
      let roll = Math.random() * totalWeight;
      let chosenIndex = 0;

      for (let j = 0; j < remaining.length; j++) {
        roll -= Math.max(1, remaining[j].weight);
        if (roll <= 0) {
          chosenIndex = j;
          break;
        }
      }

      selected.push(remaining[chosenIndex]);
      remaining.splice(chosenIndex, 1);
    }

    return selected;
  }

  /**
   * Resolves a chosen option and returns the immutable next state, rendered outcome text, and change summary.
   */
  public static resolveStoryletOption(
    storylet: Storylet,
    optionId: string,
    state: PlayerNarrativeState,
    currentNode: WorldNode
  ): { nextState: PlayerNarrativeState; outcomeText: string; changes: string[] } {
    const option = storylet.options.find((o) => o.id === optionId);
    if (!option) {
      throw new Error(`Option [${optionId}] not found in storylet [${storylet.id}]`);
    }

    // Verify option requirements
    const check = this.evaluateRequirements(option.reqs, state);
    if (!check.meets) {
      throw new Error(`Requirements not met for option [${optionId}]: ${check.missing.join(', ')}`);
    }

    // Clone state immutably
    const nextState: PlayerNarrativeState = {
      credits: state.credits,
      cargo: { ...state.cargo },
      qualities: { ...state.qualities },
      factions: { ...state.factions },
      currentLocationId: state.currentLocationId,
      gameDays: state.gameDays,
      completedStorylets: [...state.completedStorylets],
      storyletCooldowns: { ...state.storyletCooldowns },
      isEnRoute: state.isEnRoute,
      convoyHullIntegrity: state.convoyHullIntegrity,
      convoyMaxHull: state.convoyMaxHull,
      eventLogs: [...state.eventLogs]
    };

    const changes: string[] = [];
    const outcomes = option.outcomes;

    // 1. Credits
    if (outcomes.credits !== undefined && outcomes.credits !== 0) {
      nextState.credits = Math.max(0, nextState.credits + outcomes.credits);
      changes.push(`Credits: ${outcomes.credits > 0 ? '+' : ''}${outcomes.credits} ₵`);
    }

    // 2. Cargo
    if (outcomes.cargo) {
      for (const [cid, delta] of Object.entries(outcomes.cargo) as [CommodityId, number | undefined][]) {
        if (delta !== undefined && delta !== 0) {
          const cur = nextState.cargo[cid] || 0;
          const next = Math.max(0, cur + delta);
          nextState.cargo[cid] = next;
          changes.push(`${cid.toUpperCase()}: ${delta > 0 ? '+' : ''}${delta} units`);
        }
      }
    }

    // 3. Qualities
    if (outcomes.qualities) {
      for (const [qName, delta] of Object.entries(outcomes.qualities)) {
        if (delta !== undefined && delta !== 0) {
          const cur = nextState.qualities[qName] ?? 0;
          let next = cur + delta;
          if (qName === 'Heat' || qName === 'Glitch Rating') {
            next = Math.max(0, Math.min(100, next));
          } else if (qName === 'Cyberware Level' || qName === 'Tech Literacy' || qName === 'Contraband Mastery') {
            next = Math.max(1, Math.min(10, next));
          } else if (qName === 'Enclave Permits') {
            next = Math.max(0, Math.min(5, next));
          } else {
            next = Math.max(0, next);
          }
          nextState.qualities[qName] = next;
          changes.push(`${qName}: ${delta > 0 ? '+' : ''}${delta}`);
        }
      }
    }

    // 4. Reputation
    if (outcomes.reputation) {
      for (const [fid, delta] of Object.entries(outcomes.reputation) as [FactionId, number | undefined][]) {
        if (delta !== undefined && delta !== 0) {
          const cur = nextState.factions[fid] ?? 0;
          const next = Math.max(-100, Math.min(100, cur + delta));
          nextState.factions[fid] = next;
          changes.push(`Reputation [${fid.toUpperCase()}]: ${delta > 0 ? '+' : ''}${delta}`);
        }
      }
    }

    // 5. Convoy Hull
    if (outcomes.hullIntegrity !== undefined && outcomes.hullIntegrity !== 0) {
      const cur = nextState.convoyHullIntegrity;
      const next = Math.max(0, Math.min(nextState.convoyMaxHull, cur + outcomes.hullIntegrity));
      nextState.convoyHullIntegrity = next;
      changes.push(`Hull Integrity: ${outcomes.hullIntegrity > 0 ? '+' : ''}${outcomes.hullIntegrity}%`);
    }

    // Record Completion & Cooldown
    if (!nextState.completedStorylets.includes(storylet.id)) {
      nextState.completedStorylets.push(storylet.id);
    }
    if (storylet.cooldownDays > 0) {
      nextState.storyletCooldowns[storylet.id] = nextState.gameDays + storylet.cooldownDays;
    }

    // Render outcome text
    const outcomeText = this.renderStoryletText(option.effectText, { location: currentNode });

    // Log to narrative feed
    nextState.eventLogs.unshift(`[STORYLET] ${storylet.title}: ${option.label} -> ${changes.join(', ')}`);
    if (nextState.eventLogs.length > 80) nextState.eventLogs.pop();

    return {
      nextState,
      outcomeText,
      changes
    };
  }
}
