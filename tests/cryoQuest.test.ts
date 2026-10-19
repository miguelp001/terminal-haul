import { describe, it, expect } from 'vitest';
import { CRYO_QUEST_STORYLETS } from '../src/data/cryoQuestStorylets';
import { STORYLET_POOL } from '../src/data/storylets';
import { GameStore } from '../src/state/gameState';

describe('Cryo Contraband Corpo Defector Quest Chain (10 Storylets)', () => {
  it('contains exactly 10 distinct non-repeatable storylets', () => {
    expect(CRYO_QUEST_STORYLETS.length).toBe(10);
    for (const storylet of CRYO_QUEST_STORYLETS) {
      expect(storylet.repeatable).toBe(false);
      expect(storylet.options.length).toBeGreaterThanOrEqual(3);
    }

    const ids = new Set(CRYO_QUEST_STORYLETS.map((s) => s.id));
    expect(ids.size).toBe(10);

    // Verify all 10 are in STORYLET_POOL
    for (const s of CRYO_QUEST_STORYLETS) {
      expect(STORYLET_POOL.some((poolS) => poolS.id === s.id)).toBe(true);
    }
  });

  it('guarantees unique option IDs across all 10 quest cards', () => {
    const optIds = new Set<string>();
    for (const storylet of CRYO_QUEST_STORYLETS) {
      for (const opt of storylet.options) {
        expect(optIds.has(opt.id)).toBe(false);
        optIds.add(opt.id);
      }
    }
  });

  it('executes full quest progression from Stage 0 to Stage 99 with branching', () => {
    const store = new GameStore();
    const engine = store.getNarrativeEngine();
    const node = store.getCurrentNode();

    // 1. Initial State: Qualities 'Cryo Extraction' is undefined/0, Street Cred = 5
    let eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const stage1 = eligible.find((s) => s.id === 'story_cryo_01_handoff');
    expect(stage1).toBeDefined();

    // Trigger Stage 1 and inspect frost-locks with strong hit [6, 4]
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage1;
    const res1 = store.selectStoryletOption('opt_cryo01_inspect_locks', [6, 4]);
    expect(res1.success).toBe(true);
    expect(res1.rollResult?.outcome).toBe('STRONG_HIT');
    expect(store.getState().qualities['Cryo Extraction']).toBe(1);
    expect(store.getState().qualities['Corpo Truth Known']).toBe(1);
    expect(store.getState().cargo.cryo).toBe(1);
    expect(store.getState().completedStorylets).toContain('story_cryo_01_handoff');

    // Verify Stage 1 cannot trigger again (non-repeatable)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    expect(eligible.some((s) => s.id === 'story_cryo_01_handoff')).toBe(false);

    // 2. Stage 2: Transit Encounter - Branch 1 (Slice Telemetry)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const stage2 = eligible.find((s) => s.id === 'story_cryo_02_humming_box');
    expect(stage2).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage2;
    const res2 = store.selectStoryletOption('opt_cryo02_slice_telemetry', [5, 5]);
    expect(res2.success).toBe(true);
    expect(store.getState().qualities['Cryo Extraction']).toBe(2);

    // 3. Stage 3: Transit Encounter - Branch 2 (Aegis Sweeper - Corpo Override)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const stage3 = eligible.find((s) => s.id === 'story_cryo_03_patrol_ambush');
    expect(stage3).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage3;
    // Uses Dr. Vance's cipher (requires Corpo Truth Known 1, Tech Literacy 2)
    const res3 = store.selectStoryletOption('opt_cryo03_corpo_override');
    expect(res3.success).toBe(true);
    expect(store.getState().qualities['Cryo Extraction']).toBe(3);

    // 4. Stage 4: Thermal Runaway - Branch 3 (Controlled Thaw revives Dr. Vance)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'ANY');
    const stage4 = eligible.find((s) => s.id === 'story_cryo_04_thaw_failure');
    expect(stage4).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage4;
    const res4 = store.selectStoryletOption('opt_cryo04_controlled_thaw', [5, 5]);
    expect(res4.success).toBe(true);
    expect(store.getState().qualities['Dr Vance Awakened']).toBe(1);
    expect(store.getState().qualities['Cryo Extraction']).toBe(4);

    // 5. Stage 5: The Defector's Confession (Pledge Alliance)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const stage5 = eligible.find((s) => s.id === 'story_cryo_05_the_revelation');
    expect(stage5).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage5;
    const res5 = store.selectStoryletOption('opt_cryo05_pledge_alliance', [6, 4]);
    expect(res5.success).toBe(true);
    expect(store.getState().qualities['Vance Trust']).toBe(2);
    expect(store.getState().qualities['Cryo Extraction']).toBe(5);

    // 6. Stage 6: The Gridlock Extortion - Branch 4 (Decoy Canister)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const stage6 = eligible.find((s) => s.id === 'story_cryo_06_syndicate_bribe');
    expect(stage6).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage6;
    const res6 = store.selectStoryletOption('opt_cryo06_decoy_canister', [5, 5]);
    expect(res6.success).toBe(true);
    expect(store.getState().qualities['Cryo Extraction']).toBe(6);

    // 7. Stage 7: Orbital Hunter-Killer Ping (Frequency Scramble)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const stage7 = eligible.find((s) => s.id === 'story_cryo_07_neural_hunt');
    expect(stage7).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage7;
    const res7 = store.selectStoryletOption('opt_cryo07_frequency_scramble', [5, 5]);
    expect(res7.success).toBe(true);
    expect(store.getState().qualities['Cryo Extraction']).toBe(7);

    // 8. Stage 8: The Extraction Crossroads - Branch 5 (Choose Solaris Destination)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const stage8 = eligible.find((s) => s.id === 'story_cryo_08_solaris_crossroads');
    expect(stage8).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage8;
    const res8 = store.selectStoryletOption('opt_cryo08_dest_solaris');
    expect(res8.success).toBe(true);
    expect(store.getState().qualities['Delivery Destination']).toBe(2);
    expect(store.getState().qualities['Cryo Extraction']).toBe(8);

    // 9. Stage 9: Commander Thorne's Last Stand (Quantum EMP Overload)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const stage9 = eligible.find((s) => s.id === 'story_cryo_09_final_gauntlet');
    expect(stage9).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage9;
    const res9 = store.selectStoryletOption('opt_cryo09_emp_overload', [6, 4]);
    expect(res9.success).toBe(true);
    expect(res9.rollResult?.outcome).toBe('STRONG_HIT');
    expect(store.getState().qualities['Cryo Extraction']).toBe(9);

    // 10. Stage 10: Grand Finale - Safe Harbor (Claim Solaris Rewards)
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const stage10 = eligible.find((s) => s.id === 'story_cryo_10_extraction_terminus');
    expect(stage10).toBeDefined();

    const initialCredits = store.getState().credits;
    const initialCool = store.getState().stats.cool;

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = stage10;
    const res10 = store.selectStoryletOption('opt_cryo10_claim_solaris_reward');
    expect(res10.success).toBe(true);

    const finalState = store.getState();
    expect(finalState.qualities['Cryo Extraction']).toBe(99); // Quest Complete
    expect(finalState.credits).toBe(initialCredits + 10000); // 10,000 credit bounty!
    expect(finalState.stats.cool).toBe(initialCool + 1); // Permanent +1 COOL
    expect(finalState.qualities['Enclave Permits']).toBeGreaterThanOrEqual(3);
    expect(finalState.cargo.batteries).toBeGreaterThanOrEqual(3);
    expect(finalState.cargo.cyberware).toBeGreaterThanOrEqual(2);
    expect(finalState.factions.solaris).toBeGreaterThanOrEqual(40);

    // Verify quest line cannot be re-triggered
    const finalEligible = engine.getEligibleStorylets(finalState, node, 'DOCK');
    expect(finalEligible.some((s) => s.id.startsWith('story_cryo_'))).toBe(false);
  });
});
