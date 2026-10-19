import { describe, it, expect } from 'vitest';
import { WORLD_NODES } from '../src/constants/nodes';
import { SECTORS, FACTIONS, COMMODITIES } from '../src/constants/worldData';

describe('World Grid & Data Integrity', () => {
  it('contains exactly 200 world nodes', () => {
    expect(WORLD_NODES.length).toBe(200);
  });

  it('ensures each node has a unique ID and non-empty name', () => {
    const ids = new Set<string>();
    for (const node of WORLD_NODES) {
      expect(ids.has(node.id)).toBe(false);
      ids.add(node.id);
      expect(node.name.trim().length).toBeGreaterThan(0);
      expect(node.x).toBeGreaterThanOrEqual(0);
      expect(node.x).toBeLessThanOrEqual(100);
      expect(node.y).toBeGreaterThanOrEqual(0);
      expect(node.y).toBeLessThanOrEqual(100);
      expect(SECTORS[node.sector]).toBeDefined();
      expect(FACTIONS[node.dominantFaction]).toBeDefined();
      expect(node.securityLevel).toBeGreaterThanOrEqual(1);
      expect(node.securityLevel).toBeLessThanOrEqual(5);
    }
  });

  it('has all 7 geographic sectors defined', () => {
    const sectorKeys = Object.keys(SECTORS);
    expect(sectorKeys.length).toBe(7);
  });

  it('has all 5 factions and 6 canonical commodities defined', () => {
    expect(Object.keys(FACTIONS).length).toBe(5);
    expect(Object.keys(COMMODITIES).length).toBe(6);
    expect(COMMODITIES.toxins.isContraband).toBe(true);
  });
});
