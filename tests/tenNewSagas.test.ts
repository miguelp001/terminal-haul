import { describe, it, expect } from 'vitest';
import { SIREN_QUEST_STORYLETS } from '../src/data/sirenQuestStorylets';
import { RAILGUN_QUEST_STORYLETS } from '../src/data/railgunQuestStorylets';
import { GHOSTWAY_QUEST_STORYLETS } from '../src/data/ghostwayQuestStorylets';
import { BLACKSUN_QUEST_STORYLETS } from '../src/data/blacksunQuestStorylets';
import { ORACLE_QUEST_STORYLETS } from '../src/data/oracleQuestStorylets';
import { LEVIATHAN_QUEST_STORYLETS } from '../src/data/leviathanQuestStorylets';
import { KINGPIN_QUEST_STORYLETS } from '../src/data/kingpinQuestStorylets';
import { NEUROPLAGUE_QUEST_STORYLETS } from '../src/data/neuroplagueQuestStorylets';
import { EDEN_QUEST_STORYLETS } from '../src/data/edenQuestStorylets';
import { SKYWAY_QUEST_STORYLETS } from '../src/data/skywayQuestStorylets';
import { STORYLET_POOL } from '../src/data/storylets';
import { GameStore } from '../src/state/gameState';

describe('Ten Rich Branching Sagas Verification (150 Storylets)', () => {
  const tenSagas = [
    { name: 'Sub-Zero Siren', list: SIREN_QUEST_STORYLETS, stageKey: 'Siren Stage', pathKey: 'Siren Chosen Path', opt15Ending: 'opt_siren15_ending_commune' },
    { name: 'Railgun of Red Ridge', list: RAILGUN_QUEST_STORYLETS, stageKey: 'Railgun Stage', pathKey: 'Railgun Chosen Path', opt15Ending: 'opt_railgun15_ending_dreadnought' },
    { name: 'Ghost Highway of 76', list: GHOSTWAY_QUEST_STORYLETS, stageKey: 'Ghostway Stage', pathKey: 'Ghostway Chosen Path', opt15Ending: 'opt_ghostway15_ending_phantom' },
    { name: 'Black Sun Reactor', list: BLACKSUN_QUEST_STORYLETS, stageKey: 'Blacksun Stage', pathKey: 'Blacksun Chosen Path', opt15Ending: 'opt_blacksun15_ending_darksun' },
    { name: 'Oracle of the Ash Dunes', list: ORACLE_QUEST_STORYLETS, stageKey: 'Oracle Stage', pathKey: 'Oracle Chosen Path', opt15Ending: 'opt_oracle15_ending_oracle' },
    { name: 'Iron Leviathan Graveyard', list: LEVIATHAN_QUEST_STORYLETS, stageKey: 'Leviathan Stage', pathKey: 'Leviathan Chosen Path', opt15Ending: 'opt_leviathan15_ending_reclaimer' },
    { name: 'Syndicate Kingpin Debt', list: KINGPIN_QUEST_STORYLETS, stageKey: 'Kingpin Stage', pathKey: 'Kingpin Chosen Path', opt15Ending: 'opt_kingpin15_ending_shadow' },
    { name: 'Neuro-Plague Protocol', list: NEUROPLAGUE_QUEST_STORYLETS, stageKey: 'Neuroplague Stage', pathKey: 'Neuroplague Chosen Path', opt15Ending: 'opt_neuro15_ending_fortress' },
    { name: 'Last Grain of Eden', list: EDEN_QUEST_STORYLETS, stageKey: 'Eden Stage', pathKey: 'Eden Chosen Path', opt15Ending: 'opt_eden15_ending_harvester' },
    { name: 'Sovereign Skyway', list: SKYWAY_QUEST_STORYLETS, stageKey: 'Skyway Stage', pathKey: 'Skyway Chosen Path', opt15Ending: 'opt_skyway15_ending_comet' }
  ];

  it('verifies all 10 sagas contain exactly 15 storylets with at least 3 options and non-repeatable', () => {
    for (const saga of tenSagas) {
      expect(saga.list.length, `${saga.name} count`).toBe(15);
      for (const s of saga.list) {
        expect(s.repeatable, `${s.id} repeatable`).toBe(false);
        expect(s.options.length, `${s.id} option count`).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('guarantees unique storylet IDs across all 10 sagas and verifies inclusion in STORYLET_POOL', () => {
    const allIds = new Set<string>();
    for (const saga of tenSagas) {
      for (const s of saga.list) {
        expect(allIds.has(s.id), `Duplicate storylet ID: ${s.id}`).toBe(false);
        allIds.add(s.id);
        expect(STORYLET_POOL.some((poolS) => poolS.id === s.id), `${s.id} in pool`).toBe(true);
      }
    }
    expect(allIds.size).toBe(150);
  });

  it('guarantees unique option IDs across each of the 10 sagas', () => {
    for (const saga of tenSagas) {
      const optIds = new Set<string>();
      for (const s of saga.list) {
        for (const opt of s.options) {
          expect(optIds.has(opt.id), `Duplicate option ID ${opt.id} in saga ${saga.name}`).toBe(false);
          optIds.add(opt.id);
        }
      }
    }
  });

  // End-to-end progression & permanent rewards test for all 10 sagas
  for (const saga of tenSagas) {
    it(`executes full progression and grants permanent rig mod for ${saga.name}`, () => {
      const store = new GameStore();
      const engine = store.getNarrativeEngine();
      const node = store.getCurrentNode();

      // Set initial player stats, cargo inventory, and baseline qualities
      store.state.stats = { grit: 2, edge: 2, cyber: 2, cool: 2 };
      store.state.cargo = { batteries: 5, chips: 5, cryo: 5, grain: 5, cyberware: 5 };
      store.state.credits = 10000;
      store.state.qualities['Street Cred'] = 10;
      store.state.qualities['Tech Literacy'] = 10;
      store.state.qualities['Contraband Mastery'] = 10;
      store.state.qualities['Cyberware Level'] = 5;

      const initialSpeed = store.state.convoy.speedRating;
      const initialMaxHull = store.state.convoy.maxHull;
      const initialMaxCargo = store.state.convoy.maxCargoWeight;

      // Progress through stages 1 to 15
      for (let stageNum = 1; stageNum <= 15; stageNum++) {
        const expectedStageVal = stageNum - 1;
        const currentQualityVal = store.state.qualities[saga.stageKey] || 0;
        expect(currentQualityVal, `${saga.name} stage quality before stage ${stageNum}`).toBe(expectedStageVal);

        const currentStorylet = saga.list[stageNum - 1];
        expect(currentStorylet).toBeDefined();

        // Check eligibility via narrativeEngine
        const trigger = currentStorylet.triggerType || 'DOCK';
        const eligible = engine.getEligibleStorylets(store.getState(), node, trigger as any);
        const found = eligible.find((s) => s.id === currentStorylet.id);
        expect(found, `${saga.name} storylet ${currentStorylet.id} eligible under trigger ${trigger}`).toBeDefined();

        // @ts-expect-error test activeStorylet
        store.state.activeStorylet = currentStorylet;

        // At stage 10, pick Path 1
        let optToChoose = currentStorylet.options[0];
        if (stageNum === 10) {
          const path1Opt = currentStorylet.options.find((o) => o.id.includes('path1') || o.id.includes('choose') && (o.id.includes('1') || o.id.includes('boreal') || o.id.includes('dreadnought') || o.id.includes('phantom') || o.id.includes('darksun') || o.id.includes('oracle') || o.id.includes('reclaimer') || o.id.includes('shadow') || o.id.includes('fortress') || o.id.includes('harvester') || o.id.includes('comet')));
          if (path1Opt) optToChoose = path1Opt;
        } else if (stageNum === 14 || stageNum === 15) {
          // Pick option matching Path 1
          const pathOpt = currentStorylet.options.find((o) => {
            if (!o.reqs?.qualities) return true;
            return o.reqs.qualities[saga.pathKey] === 1;
          });
          if (pathOpt) optToChoose = pathOpt;
        }

        const res = store.selectStoryletOption(optToChoose.id, [6, 6]);
        expect(res.success, `Failed to select option ${optToChoose.id} on storylet ${currentStorylet.id}`).toBe(true);

        if (stageNum < 15) {
          expect(store.state.qualities[saga.stageKey], `${saga.name} advanced to stage ${stageNum}`).toBe(stageNum);
        } else {
          // Final stage advances quality by 80 to 94+
          expect(store.state.qualities[saga.stageKey]).toBeGreaterThanOrEqual(90);
        }
      }

      // Verify permanent rig upgrade or stat boost occurred on finale completion
      const state = store.getState();
      const hasRigUpgrade =
        state.convoy.speedRating > initialSpeed ||
        state.convoy.maxHull > initialMaxHull ||
        state.convoy.maxCargoWeight > initialMaxCargo ||
        state.convoy.name.includes('-') ||
        state.stats.grit > 2 ||
        state.stats.cyber > 2 ||
        state.stats.cool > 2 ||
        state.stats.edge > 2;

      expect(hasRigUpgrade, `${saga.name} finale granted permanent rig/stat upgrade`).toBe(true);
    });
  }

  // Test branching paths at Stage 10 for all 10 sagas
  it('allows selecting alternative branch paths at Stage 10 across all 10 sagas', () => {
    for (const saga of tenSagas) {
      const store = new GameStore();
      store.state.qualities[saga.stageKey] = 9; // Stage 10 requires Stage 9
      const s10 = saga.list[9]; // 10th storylet
      expect(s10).toBeDefined();

      // @ts-expect-error test activeStorylet
      store.state.activeStorylet = s10;

      // Select Option 2 (Path 2)
      const optPath2 = s10.options[1];
      expect(optPath2, `${saga.name} path 2 option`).toBeDefined();
      const res = store.selectStoryletOption(optPath2.id, [5, 5]);
      expect(res.success).toBe(true);
      expect(store.state.qualities[saga.pathKey]).toBe(2);
      expect(store.state.qualities[saga.stageKey]).toBe(10);
    }
  });
});
