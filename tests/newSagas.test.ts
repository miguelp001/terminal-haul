import { describe, it, expect } from 'vitest';
import { GHOST_QUEST_STORYLETS } from '../src/data/ghostQuestStorylets';
import { COLOSSUS_QUEST_STORYLETS } from '../src/data/colossusQuestStorylets';
import { SMUGGLER_QUEST_STORYLETS } from '../src/data/smugglerQuestStorylets';
import { ICARUS_QUEST_STORYLETS } from '../src/data/icarusQuestStorylets';
import { PLAGUE_QUEST_STORYLETS } from '../src/data/plagueQuestStorylets';
import { STORYLET_POOL } from '../src/data/storylets';
import { GameStore } from '../src/state/gameState';

describe('Epic 5 Sagas Verification (100 Storylets)', () => {
  const sagas = [
    { name: 'Ghost in the Differential', list: GHOST_QUEST_STORYLETS, stageKey: 'Ghost Stage', pathKey: 'Ghost Chosen Path', finaleId: 'story_ghost_20_finale', endingOpt: 'opt_ghost20_ending_symbiosis' },
    { name: 'Iron Colossus', list: COLOSSUS_QUEST_STORYLETS, stageKey: 'Colossus Stage', pathKey: 'Colossus Chosen Path', finaleId: 'story_colossus_20_finale', endingOpt: 'opt_colossus20_ending_chassis' },
    { name: 'Smuggler King', list: SMUGGLER_QUEST_STORYLETS, stageKey: 'Smuggler Stage', pathKey: 'Smuggler Chosen Path', finaleId: 'story_smuggler_20_finale', endingOpt: 'opt_smuggler20_ending_monarch' },
    { name: 'Project Icarus', list: ICARUS_QUEST_STORYLETS, stageKey: 'Icarus Stage', pathKey: 'Icarus Chosen Path', finaleId: 'story_icarus_20_finale', endingOpt: 'opt_icarus20_ending_engine' },
    { name: 'Biomechanical Plague', list: PLAGUE_QUEST_STORYLETS, stageKey: 'Plague Stage', pathKey: 'Plague Chosen Path', finaleId: 'story_plague_20_finale', endingOpt: 'opt_plague20_ending_humanitarian' }
  ];

  it('verifies all 5 sagas contain exactly 20 storylets with at least 3 options and non-repeatable', () => {
    for (const saga of sagas) {
      expect(saga.list.length, `${saga.name} count`).toBe(20);
      for (const s of saga.list) {
        expect(s.repeatable, `${s.id} repeatable`).toBe(false);
        expect(s.options.length, `${s.id} option count`).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('guarantees unique storylet IDs across all 5 sagas and verifies inclusion in STORYLET_POOL', () => {
    const allIds = new Set<string>();
    for (const saga of sagas) {
      for (const s of saga.list) {
        expect(allIds.has(s.id), `Duplicate storylet ID: ${s.id}`).toBe(false);
        allIds.add(s.id);
        expect(STORYLET_POOL.some((poolS) => poolS.id === s.id), `${s.id} in pool`).toBe(true);
      }
    }
    expect(allIds.size).toBe(100);
  });

  it('guarantees unique option IDs across each saga', () => {
    for (const saga of sagas) {
      const optIds = new Set<string>();
      for (const s of saga.list) {
        for (const opt of s.options) {
          expect(optIds.has(opt.id), `Duplicate option ID ${opt.id} in saga ${saga.name}`).toBe(false);
          optIds.add(opt.id);
        }
      }
    }
  });

  // Test full reachability and completion of each saga from Stage 1 through Stage 20
  for (const saga of sagas) {
    it(`executes full progression and grants permanent rig mod for ${saga.name}`, () => {
      const store = new GameStore();
      const engine = store.getNarrativeEngine();
      const node = store.getCurrentNode();

      // Set initial player stats and baseline qualities
      store.state.stats = { grit: 2, edge: 2, cyber: 2, cool: 2 };
      store.state.qualities['Street Cred'] = 10;
      store.state.qualities['Tech Literacy'] = 10;
      store.state.qualities['Contraband Mastery'] = 10;
      store.state.qualities['Cyberware Level'] = 5;

      const initialSpeed = store.state.convoy.speedRating;
      const initialMaxHull = store.state.convoy.maxHull;

      // Progress through stages 1 to 20
      for (let stageNum = 1; stageNum <= 20; stageNum++) {
        const expectedStageVal = stageNum - 1;
        const currentQualityVal = store.state.qualities[saga.stageKey] || 0;
        expect(currentQualityVal, `${saga.name} stage quality before stage ${stageNum}`).toBe(expectedStageVal);

        const currentStorylet = saga.list[stageNum - 1];
        expect(currentStorylet).toBeDefined();

        // Check eligibility via narrativeEngine
        const trigger = currentStorylet.triggerType || currentStorylet.trigger || 'DOCK';
        const eligible = engine.getEligibleStorylets(store.getState(), node, trigger as any);
        const found = eligible.find((s) => s.id === currentStorylet.id);
        expect(found, `${saga.name} storylet ${currentStorylet.id} eligible under trigger ${trigger}`).toBeDefined();

        // Simulate activating and selecting an option
        // @ts-expect-error test activeStorylet
        store.state.activeStorylet = currentStorylet;

        // Choose option: at stage 15, choose Path 1
        let optToChoose = currentStorylet.options[0];
        if (stageNum === 15) {
          // Look for Path 1 option
          const path1Opt = currentStorylet.options.find((o) => o.id.includes('path1') || o.id.includes('symbiosis') || o.id.includes('reinforce') || o.id.includes('ledger') || o.id.includes('hyperflux') || o.id.includes('humanitarian'));
          if (path1Opt) optToChoose = path1Opt;
        } else if (stageNum === 19 || stageNum === 20) {
          // Pick option matching Path 1
          const pathOpt = currentStorylet.options.find((o) => {
            if (!o.requirements?.qualities) return true;
            return o.requirements.qualities[saga.pathKey] === 1;
          });
          if (pathOpt) optToChoose = pathOpt;
        }

        const res = store.selectStoryletOption(optToChoose.id, [6, 6]);
        expect(res.success, `Failed to select option ${optToChoose.id} on storylet ${currentStorylet.id}`).toBe(true);

        if (stageNum < 20) {
          expect(store.state.qualities[saga.stageKey], `${saga.name} advanced to stage ${stageNum}`).toBe(stageNum);
        } else {
          // Final stage advances quality by 80 to 99
          expect(store.state.qualities[saga.stageKey]).toBeGreaterThanOrEqual(99);
        }
      }

      // Verify permanent rig upgrade or stat boost occurred on finale completion
      const state = store.getState();
      const hasRigUpgrade =
        state.convoy.speedRating > initialSpeed ||
        state.convoy.maxHull > initialMaxHull ||
        state.convoy.name.includes('-') ||
        state.stats.grit > 2 ||
        state.stats.cyber > 2 ||
        state.stats.cool > 2 ||
        state.stats.edge > 2;

      expect(hasRigUpgrade, `${saga.name} finale granted permanent rig/stat upgrade`).toBe(true);
    });
  }

  // Branch test for different paths
  it('allows alternative branch paths in Ghost saga', () => {
    const store = new GameStore();
    store.state.qualities['Ghost Stage'] = 14; // Stage 15
    const s15 = GHOST_QUEST_STORYLETS.find((s) => s.id === 'story_ghost_15_point_of_coalescence')!;
    expect(s15).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    // Choose Path 2: Cyber-weapon
    const optPath2 = s15.options.find((o) => o.id === 'opt_ghost15_choose_weapon')!;
    expect(optPath2).toBeDefined();
    const res = store.selectStoryletOption(optPath2.id, [5, 5]);
    expect(res.success).toBe(true);
    expect(store.state.qualities['Ghost Chosen Path']).toBe(2);
    expect(store.state.qualities['Ghost Stage']).toBe(15);
  });

  it('allows alternative branch paths in Colossus saga', () => {
    const store = new GameStore();
    store.state.qualities['Colossus Stage'] = 14; // Stage 15
    const s15 = COLOSSUS_QUEST_STORYLETS.find((s) => s.id === 'story_colossus_15_basin_crossroads')!;
    expect(s15).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    // Choose Path 3: War Rig
    const optPath3 = s15.options.find((o) => o.id === 'opt_col15_choose_warrig')!;
    expect(optPath3).toBeDefined();
    const res = store.selectStoryletOption(optPath3.id, [5, 5]);
    expect(res.success).toBe(true);
    expect(store.state.qualities['Colossus Chosen Path']).toBe(3);
    expect(store.state.qualities['Colossus Stage']).toBe(15);
  });

  it('allows alternative branch paths in Smuggler saga', () => {
    const store = new GameStore();
    store.state.qualities['Smuggler Stage'] = 14; // Stage 15
    const s15 = SMUGGLER_QUEST_STORYLETS.find((s) => s.id === 'story_smuggler_15_coronation_crossroads')!;
    expect(s15).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    // Choose Path 2: Liberator
    const optPath2 = s15.options.find((o) => o.id === 'opt_smug15_choose_liberator')!;
    expect(optPath2).toBeDefined();
    const res = store.selectStoryletOption(optPath2.id, [5, 5]);
    expect(res.success).toBe(true);
    expect(store.state.qualities['Smuggler Chosen Path']).toBe(2);
    expect(store.state.qualities['Smuggler Stage']).toBe(15);
  });

  it('allows alternative branch paths in Icarus saga', () => {
    const store = new GameStore();
    store.state.qualities['Icarus Stage'] = 14; // Stage 15
    const s15 = ICARUS_QUEST_STORYLETS.find((s) => s.id === 'story_icarus_15_tether_terminal_crossroads')!;
    expect(s15).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    // Choose Path 2: Solaris Energy
    const optPath2 = s15.options.find((o) => o.id === 'opt_icarus15_choose_solaris')!;
    expect(optPath2).toBeDefined();
    const res = store.selectStoryletOption(optPath2.id, [5, 5]);
    expect(res.success).toBe(true);
    expect(store.state.qualities['Icarus Chosen Path']).toBe(2);
    expect(store.state.qualities['Icarus Stage']).toBe(15);
  });

  it('allows alternative branch paths in Plague saga', () => {
    const store = new GameStore();
    store.state.qualities['Plague Stage'] = 14; // Stage 15
    const s15 = PLAGUE_QUEST_STORYLETS.find((s) => s.id === 'story_plague_15_the_crossroads')!;
    expect(s15).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    // Choose Path 2: Transhuman Synergy
    const optPath2 = s15.options.find((o) => o.id === 'opt_plague15_choose_transhuman')!;
    expect(optPath2).toBeDefined();
    const res = store.selectStoryletOption(optPath2.id, [5, 5]);
    expect(res.success).toBe(true);
    expect(store.state.qualities['Plague Chosen Path']).toBe(2);
    expect(store.state.qualities['Plague Stage']).toBe(15);
  });
});
