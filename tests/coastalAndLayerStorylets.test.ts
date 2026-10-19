import { describe, it, expect } from 'vitest';
import { GameStore } from '../src/state/gameState';
import { NarrativeEngine, isCoastalNode } from '../src/sim/narrativeEngine';
import { WORLD_NODES } from '../src/constants/nodes';

describe('Storylet Layers & Coastal Location Gating', () => {
  const store = new GameStore();
  const engine = store.getNarrativeEngine();

  const coastalNode = store.getNode('node_004')!; // Boston Nano-Harbor (East Coast Atlantic harbor)
  const pnwCoastalNode = store.getNode('node_067')!; // Vancouver Synth-Docks (Pacific Northwest ocean harbor)
  const inlandDesertNode = store.getNode('node_095')!; // Vegas Neon Wasteland (Southwest Wasteland inland)
  const phoenixInlandNode = store.getNode('node_096')!; // Phoenix Solar Array (Southwest Wasteland inland)
  const cascadiaNode = store.getNode('node_065')!; // Cascadia Megalopolis (PNW)
  const foundryNode = store.getNode('node_009')!; // Buffalo Hydro-Foundry (reclaimer_foundry)
  const sprawlNode = store.getNode('node_006')!; // Newark Refinery Arcology (black_market_sprawl)

  it('correctly identifies coastal vs inland nodes with isCoastalNode', () => {
    expect(isCoastalNode(coastalNode)).toBe(true);
    expect(isCoastalNode(pnwCoastalNode)).toBe(true);
    expect(isCoastalNode(inlandDesertNode)).toBe(false);
    expect(isCoastalNode(phoenixInlandNode)).toBe(false);
  });

  describe('Coastal Storylet Layer', () => {
    it('allows coastal questlines (Leviathan & Siren) to trigger at coastal nodes', () => {
      const state = { ...store.getState(), qualities: { ...store.getState().qualities, 'Leviathan Stage': 0, 'Siren Stage': 0 } };

      const eligibleAtCoast = engine.getEligibleStorylets(state, coastalNode, 'DOCK');
      expect(eligibleAtCoast.some((s) => s.id === 'story_leviathan_01_tide_salvage')).toBe(true);
      expect(eligibleAtCoast.some((s) => s.id === 'story_siren_01_frozen_distress')).toBe(true);
      expect(eligibleAtCoast.some((s) => s.id === 'story_submersible_contraband')).toBe(true);

      const eligibleTransitAtCoast = engine.getEligibleStorylets(state, pnwCoastalNode, 'TRANSIT_ENCOUNTER');
      expect(eligibleTransitAtCoast.some((s) => s.id === 'story_coastal_fog')).toBe(true);
    });

    it('strictly forbids coastal storylets from triggering at inland desert nodes', () => {
      const state = { ...store.getState(), qualities: { ...store.getState().qualities, 'Leviathan Stage': 0, 'Siren Stage': 0 } };

      const eligibleAtInland = engine.getEligibleStorylets(state, inlandDesertNode, 'DOCK');
      expect(eligibleAtInland.some((s) => s.id === 'story_leviathan_01_tide_salvage')).toBe(false);
      expect(eligibleAtInland.some((s) => s.id === 'story_siren_01_frozen_distress')).toBe(false);
      expect(eligibleAtInland.some((s) => s.id === 'story_submersible_contraband')).toBe(false);

      const transitAtInland = engine.getEligibleStorylets(state, inlandDesertNode, 'TRANSIT_ENCOUNTER');
      expect(transitAtInland.some((s) => s.id === 'story_coastal_fog')).toBe(false);
    });
  });

  describe('Inland Storylet Layer', () => {
    it('allows inland wastelands quests (Colossus, Black Sun, Ghostway, Skyway) to trigger at inland desert nodes', () => {
      const state = {
        ...store.getState(),
        qualities: {
          ...store.getState().qualities,
          'Colossus Stage': 0,
          'Blacksun Stage': 0,
          'Ghostway Stage': 0,
          'Skyway Stage': 0
        }
      };

      const eligibleInland = engine.getEligibleStorylets(state, inlandDesertNode, 'DOCK');
      expect(eligibleInland.some((s) => s.id === 'story_colossus_01_behemoth_wakes')).toBe(true);
      expect(eligibleInland.some((s) => s.id === 'story_blacksun_01_containment_leak')).toBe(true);
      expect(eligibleInland.some((s) => s.id === 'story_ghostway_01_mirage_frequency')).toBe(true);
      expect(eligibleInland.some((s) => s.id === 'story_skyway_01_the_booster_sled')).toBe(true);
    });

    it('strictly forbids inland wastelands quests from triggering at coastal ocean nodes', () => {
      const state = {
        ...store.getState(),
        qualities: {
          ...store.getState().qualities,
          'Colossus Stage': 0,
          'Blacksun Stage': 0,
          'Ghostway Stage': 0,
          'Skyway Stage': 0
        }
      };

      const eligibleAtCoast = engine.getEligibleStorylets(state, coastalNode, 'DOCK');
      expect(eligibleAtCoast.some((s) => s.id === 'story_colossus_01_behemoth_wakes')).toBe(false);
      expect(eligibleAtCoast.some((s) => s.id === 'story_blacksun_01_containment_leak')).toBe(false);
      expect(eligibleAtCoast.some((s) => s.id === 'story_ghostway_01_mirage_frequency')).toBe(false);
      expect(eligibleAtCoast.some((s) => s.id === 'story_skyway_01_the_booster_sled')).toBe(false);
    });
  });

  describe('Sector and Archetype Storylet Layers', () => {
    it('restricts Eden quest to the Pacific Northwest sector', () => {
      const state = { ...store.getState(), qualities: { ...store.getState().qualities, 'Eden Stage': 0 } };

      const eligibleAtPNW = engine.getEligibleStorylets(state, cascadiaNode, 'DOCK');
      expect(eligibleAtPNW.some((s) => s.id === 'story_eden_01_botanical_bunker')).toBe(true);

      const eligibleAtMidwest = engine.getEligibleStorylets(state, inlandDesertNode, 'DOCK');
      expect(eligibleAtMidwest.some((s) => s.id === 'story_eden_01_botanical_bunker')).toBe(false);
    });

    it('restricts Railgun quest to reclaimer foundry archetypes', () => {
      const state = { ...store.getState(), qualities: { ...store.getState().qualities, 'Railgun Stage': 0 } };

      const eligibleAtFoundry = engine.getEligibleStorylets(state, foundryNode, 'DOCK');
      expect(eligibleAtFoundry.some((s) => s.id === 'story_railgun_01_mountain_rumble')).toBe(true);

      const eligibleAtSprawl = engine.getEligibleStorylets(state, sprawlNode, 'DOCK');
      expect(eligibleAtSprawl.some((s) => s.id === 'story_railgun_01_mountain_rumble')).toBe(false);
    });

    it('restricts Kingpin syndicate debt quest to black market sprawl archetypes', () => {
      const state = { ...store.getState(), qualities: { ...store.getState().qualities, 'Kingpin Stage': 0 } };

      const eligibleAtSprawl = engine.getEligibleStorylets(state, sprawlNode, 'DOCK');
      expect(eligibleAtSprawl.some((s) => s.id === 'story_kingpin_01_fallen_patriarch')).toBe(true);

      const eligibleAtFoundry = engine.getEligibleStorylets(state, foundryNode, 'DOCK');
      expect(eligibleAtFoundry.some((s) => s.id === 'story_kingpin_01_fallen_patriarch')).toBe(false);
    });
  });
});
