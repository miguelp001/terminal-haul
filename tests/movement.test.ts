import { describe, it, expect } from 'vitest';
import { calculateDistanceKm, calculateTravelDurationSeconds, MovementEngine } from '../src/sim/movement';
import { WorldNode } from '../src/types';

describe('Movement & Convoy Transit Math', () => {
  const nodeA: WorldNode = {
    id: 'test_a',
    name: 'Node A',
    sector: 'midwest',
    x: 10,
    y: 10,
    dominantFaction: 'aegis',
    description: 'Test node A',
    securityLevel: 3
  };

  const nodeB: WorldNode = {
    id: 'test_b',
    name: 'Node B',
    sector: 'midwest',
    x: 10,
    y: 20,
    dominantFaction: 'rustworks',
    description: 'Test node B',
    securityLevel: 3
  };

  const closeNode: WorldNode = {
    id: 'test_close',
    name: 'Close Node',
    sector: 'midwest',
    x: 10,
    y: 11,
    dominantFaction: 'solaris',
    description: 'Very close test node',
    securityLevel: 2
  };

  it('calculates Euclidean distance with 45km grid multiplier', () => {
    // distance = sqrt(0^2 + 10^2) * 45 = 10 * 45 = 450 km
    const dist = calculateDistanceKm(nodeA, nodeB);
    expect(dist).toBe(450);
  });

  it('calculates travel duration with D / 15 rule', () => {
    // distance = 450 km -> 450 / 15 = 30 seconds
    const duration = calculateTravelDurationSeconds(450);
    expect(duration).toBe(30);
  });

  it('clamps travel duration to minimum 10 seconds for short routes', () => {
    // distance = 1 * 45 = 45 km -> 45 / 15 = 3 seconds -> clamped to 10s
    const dist = calculateDistanceKm(nodeA, closeNode);
    expect(dist).toBe(45);
    const duration = calculateTravelDurationSeconds(dist);
    expect(duration).toBe(10);
  });

  it('advances transit progress and flags arrival on completion', () => {
    const transit = MovementEngine.initiateTransit(nodeA, nodeB, 1.0);
    expect(transit.totalDurationSeconds).toBe(30);
    expect(transit.elapsedSeconds).toBe(0);
    expect(transit.progressPercent).toBe(0);

    // Advance 15 seconds (halfway)
    const finishedHalfway = MovementEngine.advanceTransit(transit, 15);
    expect(finishedHalfway).toBe(false);
    expect(transit.elapsedSeconds).toBe(15);
    expect(transit.progressPercent).toBe(50);

    // Advance remaining 15 seconds
    const finishedComplete = MovementEngine.advanceTransit(transit, 15);
    expect(finishedComplete).toBe(true);
    expect(transit.elapsedSeconds).toBe(30);
    expect(transit.progressPercent).toBe(100);
  });
});
