import { WorldNode } from '../types';
import { calculateDistanceKm, calculateTravelDurationSeconds } from './movement';

export interface HighwayEdge {
  fromNodeId: string;
  toNodeId: string;
  distanceKm: number;
}

/**
 * RouteGraph manages the North American highway and trade corridor network.
 * It ensures 100% continental connectivity across all sectors while preventing
 * unrealistic cross-continental direct jumps (e.g., Chiba-on-Hudson directly to Vegas).
 * All multi-node routes prioritize minimizing intermediate stops (BFS shortest-hop).
 */
export class RouteGraph {
  private static instance: RouteGraph | null = null;
  private nodesById: Map<string, WorldNode> = new Map();
  private adjacencyList: Map<string, string[]> = new Map();
  private edges: HighwayEdge[] = [];
  private edgesSet: Set<string> = new Set();

  constructor(nodes: WorldNode[]) {
    this.init(nodes);
  }

  public static getInstance(nodes: WorldNode[]): RouteGraph {
    if (!RouteGraph.instance) {
      RouteGraph.instance = new RouteGraph(nodes);
    }
    return RouteGraph.instance;
  }

  private nodeDist(a: WorldNode, b: WorldNode): number {
    return calculateDistanceKm(a, b);
  }

  private addEdge(u: WorldNode, v: WorldNode): void {
    if (u.id === v.id) return;
    const key = u.id < v.id ? `${u.id}---${v.id}` : `${v.id}---${u.id}`;
    if (this.edgesSet.has(key)) return;
    this.edgesSet.add(key);

    this.adjacencyList.get(u.id)!.push(v.id);
    this.adjacencyList.get(v.id)!.push(u.id);

    this.edges.push({
      fromNodeId: u.id,
      toNodeId: v.id,
      distanceKm: calculateDistanceKm(u, v)
    });
  }

  private init(nodes: WorldNode[]): void {
    this.nodesById.clear();
    this.adjacencyList.clear();
    this.edges = [];
    this.edgesSet.clear();

    for (const node of nodes) {
      this.nodesById.set(node.id, node);
      this.adjacencyList.set(node.id, []);
    }

    if (nodes.length === 0) return;

    // 1. Minimum Spanning Tree (MST) guarantees 100% continental connectivity
    const inMst = new Set<string>([nodes[0].id]);
    while (inMst.size < nodes.length) {
      let bestDist = Infinity;
      let bestPair: [WorldNode, WorldNode] | null = null;

      for (const n1 of nodes) {
        if (!inMst.has(n1.id)) continue;
        for (const n2 of nodes) {
          if (inMst.has(n2.id)) continue;
          const d = this.nodeDist(n1, n2);
          if (d < bestDist) {
            bestDist = d;
            bestPair = [n1, n2];
          }
        }
      }

      if (bestPair) {
        inMst.add(bestPair[1].id);
        this.addEdge(bestPair[0], bestPair[1]);
      } else {
        break;
      }
    }

    // 2. Add local arterial connections:
    // - Connect each node to its 3 nearest neighbors
    // - Connect any regional neighbors within driving distance (<= 480 km or <= 385 km for legacy grid)
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      const hasGeo = typeof nodeA.lng === 'number';
      const maxRegionalDist = hasGeo ? 480 : 385;

      const sorted = nodes
        .filter((n) => n.id !== nodeA.id)
        .map((n) => ({ node: n, dist: this.nodeDist(nodeA, n) }))
        .sort((a, b) => a.dist - b.dist);

      for (let k = 0; k < Math.min(3, sorted.length); k++) {
        this.addEdge(nodeA, sorted[k].node);
      }

      for (const s of sorted) {
        if (s.dist <= maxRegionalDist) {
          this.addEdge(nodeA, s.node);
        }
      }
    }
  }

  /**
   * Returns whether two nodes have a direct highway corridor link.
   */
  public isDirectlyConnected(nodeAId: string, nodeBId: string): boolean {
    const key = nodeAId < nodeBId ? `${nodeAId}---${nodeBId}` : `${nodeBId}---${nodeAId}`;
    return this.edgesSet.has(key);
  }

  /**
   * Returns all neighboring nodes directly connected to the specified node.
   */
  public getNeighbors(nodeId: string): WorldNode[] {
    const neighborIds = this.adjacencyList.get(nodeId) || [];
    return neighborIds
      .map((id) => this.nodesById.get(id))
      .filter((n): n is WorldNode => !!n);
  }

  /**
   * Finds the path from originId to destinationId with the minimum number of stops/hops (BFS).
   * "With an eye for stopping at the least nodes."
   */
  public findShortestHopRoute(originId: string, destinationId: string): WorldNode[] | null {
    if (originId === destinationId) {
      const node = this.nodesById.get(originId);
      return node ? [node] : null;
    }

    if (!this.nodesById.has(originId) || !this.nodesById.has(destinationId)) {
      return null;
    }

    const queue: string[][] = [[originId]];
    const visited = new Set<string>([originId]);

    while (queue.length > 0) {
      const path = queue.shift()!;
      const currentId = path[path.length - 1];

      if (currentId === destinationId) {
        return path.map((id) => this.nodesById.get(id)!);
      }

      const neighbors = this.adjacencyList.get(currentId) || [];
      for (const neighborId of neighbors) {
        if (!visited.has(neighborId)) {
          visited.add(neighborId);
          queue.push([...path, neighborId]);
        }
      }
    }

    return null;
  }

  /**
   * Returns all unique highway segments in the network.
   */
  public getAllEdges(): HighwayEdge[] {
    return this.edges;
  }

  /**
   * Calculates total cumulative distance in km across all consecutive legs in a route.
   */
  public static calculateRouteDistanceKm(route: WorldNode[]): number {
    let total = 0;
    for (let i = 0; i < route.length - 1; i++) {
      total += calculateDistanceKm(route[i], route[i + 1]);
    }
    return total;
  }

  /**
   * Calculates total cumulative duration in seconds across all consecutive legs in a route.
   */
  public static calculateRouteDurationSeconds(route: WorldNode[]): number {
    let total = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const dist = calculateDistanceKm(route[i], route[i + 1]);
      total += calculateTravelDurationSeconds(dist);
    }
    return total;
  }
}
