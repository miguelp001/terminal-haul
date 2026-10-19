import { describe, it, expect } from 'vitest';
import { PersistenceManager } from '../src/sim/persistence';
import { GameStore } from '../src/state/gameState';

describe('Data Storage & Persistence (Section 7 Schema)', () => {
  it('serializes game state conforming to the technical spec payload schema', () => {
    const store = new GameStore();
    const payload = PersistenceManager.serializeGameState(store.getState(), 1.5, []);

    expect(payload.credits).toBe(2500);
    expect(payload.cargo.grain).toBe(4);
    expect(payload.qualities['Street Cred']).toBe(5);
    expect(payload.factions.aegis).toBe(10);
    expect(payload.currentLocation).toBe('node_002');
    expect(payload.gameDays).toBe(1.5);
    expect(payload.totalDistanceTraveled).toBe(0);
    expect(Array.isArray(payload.eventLogs)).toBe(true);
  });

  it('validates and parses valid save json', () => {
    const sampleJson = JSON.stringify({
      credits: 3000,
      cargo: { grain: 2, batteries: 1, cyberware: 0, chips: 0, cryo: 0, toxins: 0 },
      qualities: { 'Street Cred': 6 },
      factions: { aegis: 15 },
      currentLocation: 'node_001',
      gameDays: 2.1,
      totalDistanceTraveled: 350
    });

    const parsed = PersistenceManager.validateAndParseSave(sampleJson);
    expect(parsed).not.toBeNull();
    expect(parsed?.credits).toBe(3000);
    expect(parsed?.currentLocation).toBe('node_001');
  });

  it('rejects corrupted or malformed save json', () => {
    expect(PersistenceManager.validateAndParseSave('{ corrupted json ...')).toBeNull();
    expect(PersistenceManager.validateAndParseSave(JSON.stringify({ credits: 'invalid' }))).toBeNull();
  });

  it('exports formatted JSON string correctly', () => {
    const store = new GameStore();
    const jsonStr = PersistenceManager.exportSaveJson(store.getState(), 1.0);
    expect(jsonStr).toContain('"credits": 2500');
    const parsed = JSON.parse(jsonStr);
    expect(parsed.credits).toBe(2500);
  });

  it('persists and restores core stats (grit, edge, cyber, cool)', () => {
    const store = new GameStore();
    store.modifyStat('cyber', 2);
    store.modifyStat('grit', 1);

    const payload = PersistenceManager.serializeGameState(store.getState(), 2.0);
    expect(payload.stats).toBeDefined();
    expect(payload.stats?.cyber).toBe(2);
    expect(payload.stats?.grit).toBe(2);

    const newStore = new GameStore();
    expect(newStore.getStats().cyber).toBe(0);
    // @ts-expect-error test payload restoration
    newStore.applySavedPayload(payload);
    expect(newStore.getStats().cyber).toBe(2);
    expect(newStore.getStats().grit).toBe(2);
  });
});
