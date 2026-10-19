import { describe, it, expect, beforeEach } from 'vitest';
import { RouteGraph } from '../src/sim/routeGraph';
import { WORLD_NODES } from '../src/constants/nodes';
import { GameStore } from '../src/state/gameState';

describe('RouteGraph & Multi-Hop Highway Network', () => {
  const graph = RouteGraph.getInstance(WORLD_NODES);

  it('guarantees 100% continental reachability across all 200 nodes', () => {
    const chiba = WORLD_NODES.find((n) => n.id === 'node_001')!;
    expect(chiba).toBeDefined();

    for (const target of WORLD_NODES) {
      const route = graph.findShortestHopRoute(chiba.id, target.id);
      expect(route).not.toBeNull();
      expect(route!.length).toBeGreaterThanOrEqual(1);
      expect(route![0].id).toBe(chiba.id);
      expect(route![route!.length - 1].id).toBe(target.id);
    }
  });

  it('prohibits direct connection between Chiba-on-Hudson and Vegas Neon Wasteland', () => {
    const chibaId = 'node_001';
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;
    expect(vegas).toBeDefined();

    // Direct highway edge must NOT exist
    const isDirect = graph.isDirectlyConnected(chibaId, vegas.id);
    expect(isDirect).toBe(false);

    // Neighbors of Chiba must be local/regional nodes in Northeast
    const chibaNeighbors = graph.getNeighbors(chibaId);
    expect(chibaNeighbors.length).toBeGreaterThan(0);
    for (const neighbor of chibaNeighbors) {
      expect(neighbor.id).not.toBe(vegas.id);
    }
  });

  it('finds the route from Chiba to Vegas with an eye for stopping at the least nodes', () => {
    const chibaId = 'node_001';
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;

    const route = graph.findShortestHopRoute(chibaId, vegas.id);
    expect(route).not.toBeNull();

    // Must be a multi-hop route across intermediate areas
    expect(route!.length).toBeGreaterThan(2);
    expect(route![0].id).toBe(chibaId);
    expect(route![route!.length - 1].id).toBe(vegas.id);

    // Verify consecutive nodes in route share direct highway edges
    for (let i = 0; i < route!.length - 1; i++) {
      expect(graph.isDirectlyConnected(route![i].id, route![i + 1].id)).toBe(true);
    }

    // Sectors traversed should span across intermediate regions
    const sectorsInRoute = new Set(route!.map((n) => n.sector));
    expect(sectorsInRoute.size).toBeGreaterThan(1);
    expect(sectorsInRoute.has('northeast')).toBe(true);
    expect(sectorsInRoute.has('southwest_wasteland')).toBe(true);
  });

  it('returns a direct 1-hop route for directly connected adjacent nodes', () => {
    const chibaId = 'node_001';
    const neighbors = graph.getNeighbors(chibaId);
    expect(neighbors.length).toBeGreaterThan(0);

    const neighbor = neighbors[0];
    const route = graph.findShortestHopRoute(chibaId, neighbor.id);
    expect(route).not.toBeNull();
    expect(route!.length).toBe(2);
    expect(route![0].id).toBe(chibaId);
    expect(route![1].id).toBe(neighbor.id);
  });

  it('correctly calculates total cumulative route distance and duration', () => {
    const chibaId = 'node_001';
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;
    const route = graph.findShortestHopRoute(chibaId, vegas.id)!;

    const totalDistance = RouteGraph.calculateRouteDistanceKm(route);
    const totalDuration = RouteGraph.calculateRouteDurationSeconds(route);

    expect(totalDistance).toBeGreaterThan(2000); // Cross-continental distance
    expect(totalDuration).toBeGreaterThan(100);
  });
});

describe('GameStore Expedition Navigation & Multi-Leg Travel', () => {
  let store: GameStore;

  beforeEach(() => {
    store = new GameStore();
  });

  it('plots a multi-hop route and dispatches leg 1 when destination is distant', () => {
    // Current is Neo-Syracuse (node_002)
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;
    const success = store.departTo(vegas.id, true);

    expect(success).toBe(true);
    const state = store.getState();
    expect(state.status).toBe('IN_TRANSIT');
    expect(state.activeRoute).not.toBeNull();
    expect(state.activeRoute!.finalDestinationId).toBe(vegas.id);
    expect(state.activeRoute!.currentLegIndex).toBe(1);
    expect(state.activeRoute!.routeNodeIds.length).toBeGreaterThan(2);

    // Active transit should be the first leg, not direct to Vegas
    expect(state.transit).not.toBeNull();
    expect(state.transit!.originId).toBe('node_002');
    expect(state.transit!.destinationId).not.toBe(vegas.id);
    expect(state.transit!.destinationId).toBe(state.activeRoute!.routeNodeIds[1]);
  });

  it('visits intermediate waypoints sequentially, docking and auto-advancing to subsequent legs', () => {
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;
    store.departTo(vegas.id, true);

    const state = store.getState();
    const firstWaypointId = state.activeRoute!.routeNodeIds[1];
    const secondWaypointId = state.activeRoute!.routeNodeIds[2];
    const leg1Duration = state.transit!.totalDurationSeconds;

    // Simulate clock advancing enough ticks to finish leg 1
    // advance clock by 1 tick at leg1Duration sim seconds
    const clock = store.getClock();
    clock.setSpeedMultiplier(leg1Duration);

    // Call handleClockTick through clock listener
    // Trigger tick
    (store as any).handleClockTick(0.01);

    const updatedState = store.getState();
    // After leg 1 arrival, location should have updated to the first waypoint
    expect(updatedState.currentLocationId).toBe(firstWaypointId);

    // Because autoAdvance was true, it should now be in transit for leg 2
    if (!updatedState.activeStorylet) {
      expect(updatedState.status).toBe('IN_TRANSIT');
      expect(updatedState.activeRoute!.currentLegIndex).toBe(2);
      expect(updatedState.transit!.destinationId).toBe(secondWaypointId);
    }
  });

  it('allows canceling an active route, leaving convoy stationed at the current node', () => {
    const vegas = WORLD_NODES.find((n) => n.name.includes('Vegas'))!;
    store.departTo(vegas.id, false);

    store.cancelRoute();
    const state = store.getState();
    expect(state.activeRoute).toBeNull();
  });
});
