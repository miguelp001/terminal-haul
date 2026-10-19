import { describe, it, expect } from 'vitest';
import {
  MASTER_STORYLETS,
  TIER1_GLOBAL_STORYLETS,
  TIER2_SECTOR_STORYLETS,
  TIER3_ARCHETYPE_STORYLETS,
  TIER4_FACTION_STORYLETS,
  TIER5_SIGNATURE_STORYLETS
} from '../src/narrative/data/masterStorylets';
import { StoryletEngine } from '../src/narrative/storyletEngine';
import { PlayerNarrativeState } from '../src/narrative/storyletTypes';
import { WORLD_NODES } from '../src/constants/nodes';

describe('Hierarchical Storylet Master Dataset (400 Cards)', () => {
  it('contains exactly 400 master storylet cards matching strict tier distribution', () => {
    expect(MASTER_STORYLETS.length).toBe(400);
    expect(TIER1_GLOBAL_STORYLETS.length).toBe(80);
    expect(TIER2_SECTOR_STORYLETS.length).toBe(105);
    expect(TIER3_ARCHETYPE_STORYLETS.length).toBe(100);
    expect(TIER4_FACTION_STORYLETS.length).toBe(75);
    expect(TIER5_SIGNATURE_STORYLETS.length).toBe(40);
  });

  it('guarantees 100% unique IDs across all 400 cards', () => {
    const ids = new Set<string>();
    for (const card of MASTER_STORYLETS) {
      expect(ids.has(card.id)).toBe(false);
      ids.add(card.id);
    }
    expect(ids.size).toBe(400);
  });

  it('validates schema completeness and option branches for every card', () => {
    for (const card of MASTER_STORYLETS) {
      expect(card.title.trim().length).toBeGreaterThan(0);
      expect(card.text.trim().length).toBeGreaterThan(0);
      expect(card.weight).toBeGreaterThanOrEqual(1);
      expect(card.weight).toBeLessThanOrEqual(20);
      expect(typeof card.repeatable).toBe('boolean');
      expect(typeof card.cooldownDays).toBe('number');
      expect(card.options.length).toBeGreaterThanOrEqual(2);

      for (const opt of card.options) {
        expect(opt.id.trim().length).toBeGreaterThan(0);
        expect(opt.label.trim().length).toBeGreaterThan(0);
        expect(opt.effectText.trim().length).toBeGreaterThan(0);
        expect(typeof opt.outcomes).toBe('object');
      }
    }
  });

  it('interpolates narrative template tokens correctly', () => {
    const node = WORLD_NODES[0]; // Chiba-on-Hudson, northeast, aegis
    const template = 'Halt in {{LOCATION}} of {{SECTOR}} under jurisdiction of {{FACTION}}. {{ENFORCER}} demand inspection of {{CONTRABAND}}.';
    const rendered = StoryletEngine.renderStoryletText(template, {
      location: node,
      enforcerName: 'Aegis Drone Unit 4',
      contrabandItem: 'Unregistered Bio-Toxins'
    });

    expect(rendered).toContain(node.name);
    expect(rendered).toContain('Northeast');
    expect(rendered).toContain('Aegis');
    expect(rendered).toContain('Aegis Drone Unit 4');
    expect(rendered).toContain('Unregistered Bio-Toxins');
  });

  it('enforces scope matching for en-route vs dock storylets', () => {
    const enRouteCard = TIER1_GLOBAL_STORYLETS[0];
    const node = WORLD_NODES[0];

    const stateDocked: PlayerNarrativeState = {
      credits: 2500,
      cargo: { grain: 0, batteries: 0, cyberware: 0, chips: 0, cryo: 0, toxins: 0 },
      qualities: {
        'Cyberware Level': 1,
        'Street Cred': 5,
        'Tech Literacy': 2,
        'Contraband Mastery': 0,
        'Enclave Permits': 0,
        'Heat': 0,
        'Glitch Rating': 0
      },
      factions: { aegis: 10, gridlock: 0, solaris: 0, rustworks: 0, neuralfront: 0 },
      currentLocationId: node.id,
      gameDays: 1.0,
      completedStorylets: [],
      storyletCooldowns: {},
      isEnRoute: false,
      convoyHullIntegrity: 100,
      convoyMaxHull: 100,
      eventLogs: []
    };

    // When docked, en-route card should not be eligible
    const check1 = StoryletEngine.isStoryletEligible(enRouteCard, stateDocked, node);
    expect(check1.eligible).toBe(false);

    // When en route, en-route card should be eligible
    const stateEnRoute = { ...stateDocked, isEnRoute: true };
    const check2 = StoryletEngine.isStoryletEligible(enRouteCard, stateEnRoute, node);
    expect(check2.eligible).toBe(true);
  });

  it('draws a weighted sample of 3–5 non-duplicate storylets', () => {
    const node = WORLD_NODES[0];
    const state: PlayerNarrativeState = {
      credits: 5000,
      cargo: { grain: 2, batteries: 2, cyberware: 2, chips: 2, cryo: 2, toxins: 2 },
      qualities: {
        'Cyberware Level': 3,
        'Street Cred': 10,
        'Tech Literacy': 4,
        'Contraband Mastery': 2,
        'Enclave Permits': 2,
        'Heat': 0,
        'Glitch Rating': 0
      },
      factions: { aegis: 20, gridlock: 20, solaris: 20, rustworks: 20, neuralfront: 20 },
      currentLocationId: node.id,
      gameDays: 1.0,
      completedStorylets: [],
      storyletCooldowns: {},
      isEnRoute: false,
      convoyHullIntegrity: 100,
      convoyMaxHull: 100,
      eventLogs: []
    };

    const drawn = StoryletEngine.drawStorylets(MASTER_STORYLETS, state, node, 4);
    expect(drawn.length).toBe(4);

    const ids = new Set(drawn.map((d) => d.id));
    expect(ids.size).toBe(4);
  });

  it('immutably executes an option and records cooldown and completion', () => {
    const card = TIER1_GLOBAL_STORYLETS[0];
    const node = WORLD_NODES[0];
    const state: PlayerNarrativeState = {
      credits: 1000,
      cargo: { grain: 0, batteries: 2, cyberware: 0, chips: 0, cryo: 0, toxins: 0 },
      qualities: {
        'Cyberware Level': 1,
        'Street Cred': 5,
        'Tech Literacy': 3,
        'Contraband Mastery': 0,
        'Enclave Permits': 0,
        'Heat': 0,
        'Glitch Rating': 0
      },
      factions: { aegis: 10, gridlock: 0, solaris: 0, rustworks: 0, neuralfront: 0 },
      currentLocationId: node.id,
      gameDays: 2.0,
      completedStorylets: [],
      storyletCooldowns: {},
      isEnRoute: true,
      convoyHullIntegrity: 100,
      convoyMaxHull: 100,
      eventLogs: []
    };

    const option = card.options[0];
    const { nextState, outcomeText, changes } = StoryletEngine.resolveStoryletOption(
      card,
      option.id,
      state,
      node
    );

    // Verify immutability
    expect(nextState).not.toBe(state);
    expect(state.completedStorylets.length).toBe(0);
    expect(nextState.completedStorylets).toContain(card.id);
    expect(nextState.storyletCooldowns[card.id]).toBeGreaterThan(2.0);
    expect(changes.length).toBeGreaterThan(0);
    expect(outcomeText.length).toBeGreaterThan(0);
    expect(nextState.eventLogs.length).toBe(1);
  });
});
