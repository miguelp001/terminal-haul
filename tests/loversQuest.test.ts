import { describe, it, expect } from 'vitest';
import { LOVERS_QUEST_STORYLETS } from '../src/data/loversQuestStorylets';
import { STORYLET_POOL } from '../src/data/storylets';
import { GameStore } from '../src/state/gameState';

describe('Lovers Across the Ashline Saga (20 Storylets)', () => {
  it('contains exactly 20 distinct non-repeatable storylets with at least 3 options each', () => {
    expect(LOVERS_QUEST_STORYLETS.length).toBe(20);
    for (const storylet of LOVERS_QUEST_STORYLETS) {
      expect(storylet.repeatable).toBe(false);
      expect(storylet.options.length).toBeGreaterThanOrEqual(3);
    }

    const ids = new Set(LOVERS_QUEST_STORYLETS.map((s) => s.id));
    expect(ids.size).toBe(20);

    // Verify all 20 are present in STORYLET_POOL
    for (const s of LOVERS_QUEST_STORYLETS) {
      expect(STORYLET_POOL.some((poolS) => poolS.id === s.id)).toBe(true);
    }
  });

  it('guarantees unique option IDs across all 20 storylets', () => {
    const optIds = new Set<string>();
    for (const storylet of LOVERS_QUEST_STORYLETS) {
      for (const opt of storylet.options) {
        expect(optIds.has(opt.id)).toBe(false);
        optIds.add(opt.id);
      }
    }
  });

  it('executes full quest progression for Ending 1: The Elopement & Wedding', () => {
    const store = new GameStore();
    const engine = store.getNarrativeEngine();
    const node = store.getCurrentNode();

    // Baseline qualities
    store.state.qualities['Street Cred'] = 5;
    store.state.qualities['Tech Literacy'] = 3;
    store.state.qualities['Cyberware Level'] = 2;
    store.state.qualities['Enclave Permits'] = 2;

    // --- STAGE 1: The Ashline Rendezvous (DOCK, Stage 0) ---
    let eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s1 = eligible.find((s) => s.id === 'story_lovers_01_rendezvous');
    expect(s1).toBeDefined();

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s1;
    const r1 = store.selectStoryletOption('opt_lovers01_tactical_load', [6, 4]);
    expect(r1.success).toBe(true);
    expect(r1.rollResult?.outcome).toBe('STRONG_HIT');
    expect(store.getState().qualities['Lovers Stage']).toBe(1);
    expect(store.getState().completedStorylets).toContain('story_lovers_01_rendezvous');

    // Stage 1 cannot re-trigger
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    expect(eligible.some((s) => s.id === 'story_lovers_01_rendezvous')).toBe(false);

    // --- STAGE 2: The Scramble at the Gate (TRANSIT_ENCOUNTER, Stage 1) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s2 = eligible.find((s) => s.id === 'story_lovers_02_gate_evasion');
    expect(s2).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s2;
    const r2 = store.selectStoryletOption('opt_lovers02_overclock_spoof', [5, 5]);
    expect(r2.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(2);

    // --- STAGE 3: The First Safehouse (DOCK, Stage 2) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s3 = eligible.find((s) => s.id === 'story_lovers_03_first_safehouse');
    expect(s3).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s3;
    const r3 = store.selectStoryletOption('opt_lovers03_counsel_peace', [6, 4]);
    expect(r3.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(3);

    // --- STAGE 4: Errand - Medicine (DOCK, Stage 3) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s4 = eligible.find((s) => s.id === 'story_lovers_04_errand_medicine');
    expect(s4).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s4;
    const r4 = store.selectStoryletOption('opt_lovers04_heist_clinic', [5, 5]);
    expect(r4.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(4);

    // --- STAGE 5: Severed Transmission - Intercepted Bounty (TRANSIT_ENCOUNTER, Stage 4) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s5 = eligible.find((s) => s.id === 'story_lovers_05_severed_transmission');
    expect(s5).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s5;
    const r5 = store.selectStoryletOption('opt_lovers05_purge_comms', [5, 5]);
    expect(r5.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(5);

    // --- STAGE 6: Errand - The Foundry at Rustworks (DOCK, Stage 5) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s6 = eligible.find((s) => s.id === 'story_lovers_06_errand_foundry');
    expect(s6).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s6;
    const r6 = store.selectStoryletOption('opt_lovers06_forge_wedding_rings', [6, 4]);
    expect(r6.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(6);

    // --- STAGE 7: Jackal Ambush (TRANSIT_ENCOUNTER, Stage 6) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s7 = eligible.find((s) => s.id === 'story_lovers_07_jackal_ambush');
    expect(s7).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s7;
    const r7 = store.selectStoryletOption('opt_lovers07_valerie_tactics', [6, 4]);
    expect(r7.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(7);

    // --- STAGE 8: Errand - Forged Passports (DOCK, Stage 7) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s8 = eligible.find((s) => s.id === 'story_lovers_08_errand_passports');
    expect(s8).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s8;
    const r8 = store.selectStoryletOption('opt_lovers08_hack_registry', [5, 5]);
    expect(r8.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(8);

    // --- STAGE 9: Cabin Confession (DOCK, Stage 8) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s9 = eligible.find((s) => s.id === 'story_lovers_09_cabin_confession');
    expect(s9).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s9;
    const r9 = store.selectStoryletOption('opt_lovers09_advise_escape', [6, 4]);
    expect(r9.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(9);

    // --- STAGE 10: Aegis Tactical Interception (TRANSIT_ENCOUNTER, Stage 9) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s10 = eligible.find((s) => s.id === 'story_lovers_10_aegis_interception');
    expect(s10).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s10;
    const r10 = store.selectStoryletOption('opt_lovers10_emp_blinding', [6, 4]);
    expect(r10.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(10);

    // --- STAGE 11: Errand - Mesh Ghost (DOCK, Stage 10) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s11 = eligible.find((s) => s.id === 'story_lovers_11_errand_mesh_ghost');
    expect(s11).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s11;
    const r11 = store.selectStoryletOption('opt_lovers11_hack_relay', [5, 5]);
    expect(r11.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(11);

    // --- STAGE 12: Warlord Blackmail (TRANSIT_ENCOUNTER, Stage 11) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s12 = eligible.find((s) => s.id === 'story_lovers_12_warlord_blackmail');
    expect(s12).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s12;
    const r12 = store.selectStoryletOption('opt_lovers12_frame_job', [6, 4]);
    expect(r12.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(12);

    // --- STAGE 13: Cyberware Crisis (TRANSIT_ENCOUNTER, Stage 12) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s13 = eligible.find((s) => s.id === 'story_lovers_13_cyberware_crisis');
    expect(s13).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s13;
    const r13 = store.selectStoryletOption('opt_lovers13_steady_wheel', [5, 5]);
    expect(r13.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(13);

    // --- STAGE 14: Errand - Maglev Depot Heist (DOCK, Stage 13) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s14 = eligible.find((s) => s.id === 'story_lovers_14_errand_train_heist');
    expect(s14).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s14;
    const r14 = store.selectStoryletOption('opt_lovers14_stealth_hack', [6, 4]);
    expect(r14.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(14);

    // --- STAGE 15: Crossroads Council (DOCK, Stage 14) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s15 = eligible.find((s) => s.id === 'story_lovers_15_crossroads_council');
    expect(s15).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    const r15 = store.selectStoryletOption('opt_lovers15_choose_elopement');
    expect(r15.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(15);
    expect(store.getState().qualities['Lovers Chosen Path']).toBe(1);

    // --- STAGE 16: Hunted Interstate (TRANSIT_ENCOUNTER, Stage 15) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s16 = eligible.find((s) => s.id === 'story_lovers_16_hunted_interstate');
    expect(s16).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s16;
    const r16 = store.selectStoryletOption('opt_lovers16_redline_drive', [6, 4]);
    expect(r16.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(16);

    // --- STAGE 17: Errand - The Final Cache (DOCK, Stage 16) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s17 = eligible.find((s) => s.id === 'story_lovers_17_errand_last_munitions');
    expect(s17).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s17;
    const r17 = store.selectStoryletOption('opt_lovers17_prep_gear', [6, 4]);
    expect(r17.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(17);

    // --- STAGE 18: Sovereign Gate Lockdown (TRANSIT_ENCOUNTER, Stage 17) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'TRANSIT_ENCOUNTER');
    const s18 = eligible.find((s) => s.id === 'story_lovers_18_perimeter_lockdown');
    expect(s18).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s18;
    const r18 = store.selectStoryletOption('opt_lovers18_charge_gate', [6, 4]);
    expect(r18.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(18);

    // --- STAGE 19: The Climax Gauntlet (ANY, Stage 18) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'ANY');
    const s19 = eligible.find((s) => s.id === 'story_lovers_19_climax_gauntlet');
    expect(s19).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s19;
    const r19 = store.selectStoryletOption('opt_lovers19_elopement_run', [6, 4]);
    expect(r19.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(19);

    // --- STAGE 20: The Grand Finale (DOCK, Stage 19) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s20 = eligible.find((s) => s.id === 'story_lovers_20_finale');
    expect(s20).toBeDefined();

    const initialCredits = store.getState().credits;
    const initialCool = store.getState().stats.cool;

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s20;
    const r20 = store.selectStoryletOption('opt_lovers20_ending_elopement');
    expect(r20.success).toBe(true);

    const finalState = store.getState();
    expect(finalState.qualities['Lovers Stage']).toBe(99); // 19 + 80 = 99
    expect(finalState.credits).toBe(initialCredits + 8500);
    expect(finalState.stats.cool).toBe(initialCool + 1); // Permanent +1 COOL
    expect(finalState.cargo.batteries).toBeGreaterThanOrEqual(3);
    expect(finalState.cargo.cryo).toBeGreaterThanOrEqual(2);
    expect(finalState.qualities['Enclave Permits']).toBeGreaterThanOrEqual(3);
    expect(finalState.completedStorylets).toContain('story_lovers_20_finale');

    // Confirm that no lovers quest cards can re-trigger once finished
    const finalEligible = engine.getEligibleStorylets(finalState, node, 'DOCK');
    expect(finalEligible.some((s) => s.id.startsWith('story_lovers_'))).toBe(false);
  });

  it('executes full quest progression for Ending 2: The Dual Faction Coup', () => {
    const store = new GameStore();
    const engine = store.getNarrativeEngine();
    const node = store.getCurrentNode();

    // Fast forward to Stage 14 (pre-choice)
    store.state.qualities['Street Cred'] = 10;
    store.state.qualities['Tech Literacy'] = 4;
    store.state.qualities['Lovers Stage'] = 14;

    // --- STAGE 15: Choose Coup Path ---
    let eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s15 = eligible.find((s) => s.id === 'story_lovers_15_crossroads_council');
    expect(s15).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    const r15 = store.selectStoryletOption('opt_lovers15_choose_coup');
    expect(r15.success).toBe(true);
    expect(store.getState().qualities['Lovers Chosen Path']).toBe(2);
    expect(store.getState().qualities['Lovers Stage']).toBe(15);

    // --- Fast forward to Stage 18 ---
    store.state.qualities['Lovers Stage'] = 18;

    // --- STAGE 19: Climax Gauntlet (Coup option requires Path 2) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'ANY');
    const s19 = eligible.find((s) => s.id === 'story_lovers_19_climax_gauntlet');
    expect(s19).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s19;
    const r19 = store.selectStoryletOption('opt_lovers19_coup_assault', [6, 4]);
    expect(r19.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(19);

    // --- STAGE 20: Finale (Ending 2: Coup Ascension) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s20 = eligible.find((s) => s.id === 'story_lovers_20_finale');
    expect(s20).toBeDefined();

    const initialCredits = store.getState().credits;
    const initialCyber = store.getState().stats.cyber;

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s20;
    const r20 = store.selectStoryletOption('opt_lovers20_ending_coup');
    expect(r20.success).toBe(true);

    const finalState = store.getState();
    expect(finalState.qualities['Lovers Stage']).toBe(99);
    expect(finalState.credits).toBe(initialCredits + 15000); // 15,000 credit treasury bounty
    expect(finalState.stats.cyber).toBe(initialCyber + 1); // Permanent +1 CYBER
    expect(finalState.factions.aegis).toBeGreaterThanOrEqual(30);
    expect(finalState.factions.gridlock).toBeGreaterThanOrEqual(30);
  });

  it('executes full quest progression for Ending 3: The Tragic Last Stand', () => {
    const store = new GameStore();
    const engine = store.getNarrativeEngine();
    const node = store.getCurrentNode();

    // Fast forward to Stage 14
    store.state.qualities['Street Cred'] = 10;
    store.state.qualities['Lovers Stage'] = 14;

    // --- STAGE 15: Choose Tragedy Path ---
    let eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s15 = eligible.find((s) => s.id === 'story_lovers_15_crossroads_council');
    expect(s15).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s15;
    const r15 = store.selectStoryletOption('opt_lovers15_choose_sacrifice');
    expect(r15.success).toBe(true);
    expect(store.getState().qualities['Lovers Chosen Path']).toBe(3);
    expect(store.getState().qualities['Lovers Stage']).toBe(15);

    // --- Fast forward to Stage 18 ---
    store.state.qualities['Lovers Stage'] = 18;

    // --- STAGE 19: Climax Gauntlet (Tragedy option requires Path 3) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'ANY');
    const s19 = eligible.find((s) => s.id === 'story_lovers_19_climax_gauntlet');
    expect(s19).toBeDefined();
    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s19;
    const r19 = store.selectStoryletOption('opt_lovers19_tragic_standoff', [6, 4]);
    expect(r19.success).toBe(true);
    expect(store.getState().qualities['Lovers Stage']).toBe(19);

    // --- STAGE 20: Finale (Ending 3: The Iron Requiem) ---
    eligible = engine.getEligibleStorylets(store.getState(), node, 'DOCK');
    const s20 = eligible.find((s) => s.id === 'story_lovers_20_finale');
    expect(s20).toBeDefined();

    const initialCredits = store.getState().credits;
    const initialGrit = store.getState().stats.grit;
    const initialStreetCred = store.getState().qualities['Street Cred'];

    // @ts-expect-error test activeStorylet
    store.state.activeStorylet = s20;
    const r20 = store.selectStoryletOption('opt_lovers20_ending_tragedy');
    expect(r20.success).toBe(true);

    const finalState = store.getState();
    expect(finalState.qualities['Lovers Stage']).toBe(99);
    expect(finalState.credits).toBe(initialCredits + 6000);
    expect(finalState.stats.grit).toBe(initialGrit + 1); // Permanent +1 GRIT
    expect(finalState.qualities['Street Cred']).toBe(initialStreetCred + 25);
  });
});
