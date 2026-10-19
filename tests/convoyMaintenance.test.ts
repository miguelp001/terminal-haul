import { describe, it, expect, beforeEach } from 'vitest';
import { GameStore } from '../src/state/gameState';
import { WORLD_NODES } from '../src/constants/nodes';

describe('Convoy Maintenance, Hull Attenuation & Enclave Permits', () => {
  let store: GameStore;

  beforeEach(() => {
    store = new GameStore();
  });

  it('rejects hull repair when chassis is already at 100% integrity', () => {
    expect(store.getState().convoy.hullIntegrity).toBe(100);
    const result = store.repairHull();
    expect(result.success).toBe(false);
    expect(result.message).toContain('already at 100%');
  });

  it('restores hull integrity at standard dock repair rate (10 credits / 1%)', () => {
    // Damage hull to 70%
    store.getState().convoy.hullIntegrity = 70;
    const initialCredits = store.getState().credits;

    // 30% missing = 300 credits
    const result = store.repairHull();
    expect(result.success).toBe(true);
    expect(result.repairedAmount).toBe(30);
    expect(result.cost).toBe(300);
    expect(store.getState().convoy.hullIntegrity).toBe(100);
    expect(store.getState().credits).toBe(initialCredits - 300);
  });

  it('executes partial hull repair when player credits are insufficient for full repair', () => {
    store.getState().convoy.hullIntegrity = 50; // 50% missing = 500 credits needed
    store.getState().credits = 150; // Can only afford 15% (150 credits)

    const result = store.repairHull();
    expect(result.success).toBe(true);
    expect(result.repairedAmount).toBe(15);
    expect(result.cost).toBe(150);
    expect(store.getState().convoy.hullIntegrity).toBe(65);
    expect(store.getState().credits).toBe(0);
  });

  it('rejects repair when convoy is currently in transit', () => {
    store.getState().convoy.hullIntegrity = 80;
    store.getState().status = 'IN_TRANSIT';

    const result = store.repairHull();
    expect(result.success).toBe(false);
    expect(result.message).toContain('Cannot execute chassis repairs while in transit');
  });

  it('stabilizes convoy with Emergency SOS when hull integrity hits 0%', () => {
    store.getState().convoy.hullIntegrity = 0;
    store.checkEmergencyHullSOS();

    expect(store.getState().convoy.hullIntegrity).toBe(25);
    expect(store.getState().qualities.Heat).toBeGreaterThanOrEqual(5);
    expect(store.getState().status).toBe('DOCKED');
    expect(store.getState().transit).toBeNull();
  });

  it('evaluates career score and rank titles according to authoritative specification', () => {
    // Initial: Credits 2500, Cargo 750 net worth = 3250
    // Contracts 0, Distance 0, positive rep: solaris 20 (200), rustworks 15 (150), aegis 10 (100) = 450
    // Total = 3250 + 450 = 3700 -> Scrap Runner
    const score = store.calculateCareerScore();
    const rank = store.getCareerRankTitle();
    expect(score).toBe(3700);
    expect(rank).toBe('Scrap Runner');

    // Simulate high-tier veteran hauler
    store.getState().credits = 100000;
    store.getState().completedContractsCount = 30; // 30 * 1500 = 45,000
    store.getState().totalDistanceTraveled = 50000; // 50,000 / 10 = 5,000
    // Score ~ 100,000 + 45,000 + 5,000 + 450 = 150,450 -> Master Hauler
    expect(store.getCareerRankTitle()).toBe('Master Hauler');
  });

  it('verifies Enclave Permits on high-security node arrivals', () => {
    const origin = WORLD_NODES.find((n) => n.id === 'node_001')!;
    const highSecNode = WORLD_NODES.find((n) => n.id === 'node_002')!;

    // Setup transit from origin to highSecNode
    // @ts-expect-error test state modification
    store.state.currentLocationId = origin.id;
    // @ts-expect-error test state modification
    store.state.qualities['Enclave Permits'] = 1;
    // @ts-expect-error test state modification
    store.state.credits = 2000;

    // Dispatch route and force transit completion
    const ok = store.departTo(highSecNode.id);
    expect(ok).toBe(true);
    expect(store.getState().status).toBe('IN_TRANSIT');

    // Complete transit
    if (store.getState().transit) {
      store.getState().transit!.elapsedSeconds = store.getState().transit!.totalDurationSeconds;
    }
    store.getClock().tick(); // Trigger transit step

    // Verified clearance - fee waived, credits intact
    expect(store.getState().credits).toBe(2000);
  });
});
