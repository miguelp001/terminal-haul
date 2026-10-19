import { describe, it, expect } from 'vitest';
import { NarrativeEngine } from '../src/sim/narrativeEngine';
import { GameStore } from '../src/state/gameState';
import { Storylet } from '../src/types/storylet';

describe('Quality-Driven Narrative Engine (Storylets)', () => {
  it('correctly evaluates quality and credit requirements', () => {
    const engine = new NarrativeEngine();
    const store = new GameStore();
    const state = store.getState();
    const node = store.getCurrentNode();

    // Default state: Street Cred = 5, Credits = 2500, Tech Literacy = 2
    const passCheck = engine.checkRequirement(
      { qualities: { 'Street Cred': 3, 'Tech Literacy': 2 }, credits: 1000 },
      state,
      node
    );
    expect(passCheck.meets).toBe(true);
    expect(passCheck.missing.length).toBe(0);

    const failCheck = engine.checkRequirement(
      { qualities: { 'Cyberware Level': 5 }, credits: 10000 },
      state,
      node
    );
    expect(failCheck.meets).toBe(false);
    expect(failCheck.missing.length).toBe(2);
  });

  it('correctly checks cargo and faction reputation requirements', () => {
    const engine = new NarrativeEngine();
    const store = new GameStore();
    const state = store.getState();
    const node = store.getCurrentNode();

    // Default state: grain: 4, aegis rep: 10
    const passCargo = engine.checkRequirement({ cargo: { grain: 2 } }, state, node);
    expect(passCargo.meets).toBe(true);

    const failCargo = engine.checkRequirement({ cargo: { cryo: 5 } }, state, node);
    expect(failCargo.meets).toBe(false);

    const passRep = engine.checkRequirement({ factionRep: { aegis: 5 } }, state, node);
    expect(passRep.meets).toBe(true);

    const failRep = engine.checkRequirement({ factionRep: { gridlock: 50 } }, state, node);
    expect(failRep.meets).toBe(false);
  });

  it('applies option rewards, modifying qualities, credits, and cargo', () => {
    const engine = new NarrativeEngine();
    const store = new GameStore();
    // @ts-expect-error test state
    const mutableState = store.state;

    const initialCredits = mutableState.credits;
    const initialStreetCred = mutableState.qualities['Street Cred'];

    const changes = engine.applyOptionRewards(
      {
        qualities: { 'Street Cred': 3, 'Heat': 15 },
        credits: -200,
        cargo: { batteries: 1 },
        rep: { aegis: 10 },
        hullIntegrity: -15
      },
      mutableState,
      () => store.recalculateCargoWeight()
    );

    expect(mutableState.qualities['Street Cred']).toBe(initialStreetCred + 3);
    expect(mutableState.qualities['Heat']).toBe(15);
    expect(mutableState.credits).toBe(initialCredits - 200);
    expect(mutableState.cargo.batteries).toBe(3); // was 2 + 1 = 3
    expect(mutableState.factions.aegis).toBe(20); // was 10 + 10 = 20
    expect(mutableState.convoy.hullIntegrity).toBe(85); // was 100 - 15 = 85
    expect(changes.length).toBe(6);
  });

  it('enforces Heat bounds between 0 and 100', () => {
    const engine = new NarrativeEngine();
    const store = new GameStore();
    // @ts-expect-error test state
    const mutableState = store.state;

    // Apply +150 Heat
    engine.applyOptionRewards({ qualities: { 'Heat': 150 } }, mutableState);
    expect(mutableState.qualities['Heat']).toBe(100);

    // Apply -200 Heat
    engine.applyOptionRewards({ qualities: { 'Heat': -200 } }, mutableState);
    expect(mutableState.qualities['Heat']).toBe(0);
  });

  it('filters and triggers storylets based on trigger context (DOCK vs TRANSIT_ENCOUNTER)', () => {
    const testStorylet: Storylet = {
      id: 'dock_only',
      title: 'Dock Event',
      triggerType: 'DOCK',
      text: 'Dock test',
      options: []
    };

    const engine = new NarrativeEngine([testStorylet]);
    const store = new GameStore();
    const state = store.getState();
    const node = store.getCurrentNode();

    const dockList = engine.getEligibleStorylets(state, node, 'DOCK');
    expect(dockList.length).toBe(1);

    const transitList = engine.getEligibleStorylets(state, node, 'TRANSIT_ENCOUNTER');
    expect(transitList.length).toBe(0);
  });

  it('correctly processes opt_buy_salvage_lot, awarding cargo and deducting credits', () => {
    const store = new GameStore();
    const initialCyberware = store.getState().cargo.cyberware;
    const initialBatteries = store.getState().cargo.batteries;
    const initialCredits = store.getState().credits;
    const initialWeight = store.getState().convoy.currentCargoWeight;

    // Simulate story_rustworks_salvage triggering
    const storylet = store.getNarrativeEngine().getEligibleStorylets(store.getState(), store.getCurrentNode(), 'TRANSIT_ENCOUNTER')
      .find((s) => s.id === 'story_rustworks_salvage');
    expect(storylet).toBeDefined();

    // @ts-expect-error set activeStorylet
    store.state.activeStorylet = storylet;

    const result = store.selectStoryletOption('opt_buy_salvage_lot');
    expect(result.success).toBe(true);
    expect(result.changes).toContain('Cyberware Optics: +2 units');
    expect(result.changes).toContain('Hydro-Batteries: +1 units');
    expect(result.changes).toContain('Credits: -500 ₵');

    const nextState = store.getState();
    expect(nextState.cargo.cyberware).toBe(initialCyberware + 2);
    expect(nextState.cargo.batteries).toBe(initialBatteries + 1);
    expect(nextState.credits).toBe(initialCredits - 500);
    // Cyberware = 1.0T * 2 = 2.0T; Batteries = 2.0T * 1 = 2.0T. Total +4.0T.
    expect(nextState.convoy.currentCargoWeight).toBeCloseTo(initialWeight + 4.0, 1);
  });
});
