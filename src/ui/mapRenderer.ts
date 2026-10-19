import { WorldNode, PlayerState } from '../types';
import { SECTORS } from '../constants/worldData';
import { RouteGraph, HighwayEdge } from '../sim/routeGraph';
import { geoMercator, geoPath, geoGraticule10, GeoProjection, GeoPath } from 'd3-geo';
import northAmericaData from '../assets/geo/northAmerica.json';
import { RemotePlayerConvoy } from '../server/types';

export type NodeSelectCallback = (node: WorldNode) => void;
export type NodeHoverCallback = (node: WorldNode | null, coords: { x: number; y: number } | null) => void;

export class MapRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private offscreenCanvas: HTMLCanvasElement;
  private offscreenCtx: CanvasRenderingContext2D;

  private projection: GeoProjection;
  private geoPathGenerator: GeoPath;
  private naCollection: { type: string; features: any[] };
  private nodesGeoFeature: { type: string; coordinates: [number, number][] };

  private nodes: WorldNode[];
  private nodesById: Map<string, WorldNode> = new Map();
  private otherConvoys: RemotePlayerConvoy[] = [];
  private highwayEdges: HighwayEdge[] = [];
  private plannedRouteNodes: WorldNode[] = [];
  private hoveredNode: WorldNode | null = null;
  private selectedNode: WorldNode | null = null;
  private currentState: PlayerState | null = null;
  private onNodeSelect: NodeSelectCallback | null = null;
  private onNodeHover: NodeHoverCallback | null = null;
  private pulsePhase: number = 0;
  private animationFrameId: number | null = null;

  constructor(canvas: HTMLCanvasElement, nodes: WorldNode[], onSelect?: NodeSelectCallback, onHover?: NodeHoverCallback) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D context from canvas');
    this.ctx = ctx;

    // Create offscreen canvas for caching static vector geography
    this.offscreenCanvas = document.createElement('canvas');
    const offCtx = this.offscreenCanvas.getContext('2d');
    if (!offCtx) throw new Error('Could not get 2D context from offscreen canvas');
    this.offscreenCtx = offCtx;

    this.nodes = nodes;
    for (const node of nodes) {
      this.nodesById.set(node.id, node);
    }
    this.highwayEdges = RouteGraph.getInstance(nodes).getAllEdges();
    this.onNodeSelect = onSelect || null;
    this.onNodeHover = onHover || null;

    // Initialize 2D planar projection
    this.projection = geoMercator();

    this.geoPathGenerator = geoPath(this.projection);

    this.naCollection = {
      type: 'FeatureCollection',
      features: (northAmericaData as any).countries || []
    };

    // GeoJSON collection of all nodes to maximize viewport utilization
    this.nodesGeoFeature = {
      type: 'MultiPoint',
      coordinates: this.nodes
        .filter((n) => typeof n.lng === 'number' && typeof n.lat === 'number')
        .map((n) => [n.lng, n.lat])
    };

    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());

    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('click', () => this.handleClick());
    this.canvas.addEventListener('mouseleave', () => {
      this.hoveredNode = null;
      if (this.onNodeHover) {
        this.onNodeHover(null, null);
      }
    });

    this.canvas.addEventListener('touchstart', (e) => this.handleTouch(e), { passive: true });
    this.canvas.addEventListener('touchmove', (e) => this.handleTouch(e), { passive: true });
    this.canvas.addEventListener('touchend', () => {
      this.handleClick();
    });

    this.startRenderLoop();
  }

  public setOnNodeHover(cb: NodeHoverCallback | null): void {
    this.onNodeHover = cb;
  }

  public getNodeScreenCoords(node: WorldNode): { x: number; y: number } {
    return this.screenCoords(node);
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  public updateState(state: PlayerState): void {
    this.currentState = state;
  }

  public setSelectedNode(node: WorldNode | null): void {
    this.selectedNode = node;
  }

  public getHoveredNode(): WorldNode | null {
    return this.hoveredNode;
  }

  public setPlannedRoute(route: WorldNode[] | null): void {
    this.plannedRouteNodes = route || [];
  }

  public setOtherConvoys(convoys: RemotePlayerConvoy[]): void {
    this.otherConvoys = convoys;
  }

  private handleResize(): void {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.ctx.resetTransform?.();
    this.ctx.scale(dpr, dpr);

    this.offscreenCanvas.width = w * dpr;
    this.offscreenCanvas.height = h * dpr;
    this.offscreenCtx.resetTransform?.();
    this.offscreenCtx.scale(dpr, dpr);

    // Fit 2D projection tightly to all 200 nodes so they occupy maximum viewport area
    const padding = 24;
    this.projection.fitExtent(
      [[padding, padding], [w - padding, h - padding]],
      this.nodesGeoFeature as any
    );

    // Update geoPath generator with the resized projection
    this.geoPathGenerator = geoPath(this.projection, this.offscreenCtx);

    // Re-render static vector map to offscreen cache
    this.renderBackgroundToOffscreen(w, h);

    if (this.hoveredNode && this.onNodeHover) {
      this.onNodeHover(this.hoveredNode, this.screenCoords(this.hoveredNode));
    }
  }

  /**
   * Projects node geographic coordinates [lng, lat] to canvas 2D pixel coordinates.
   */
  private screenCoords(node: WorldNode): { x: number; y: number } {
    if (typeof node.lng === 'number' && typeof node.lat === 'number') {
      const p = this.projection([node.lng, node.lat]);
      if (p) return { x: p[0], y: p[1] };
    }

    // Fallback if coordinates missing
    const rect = this.canvas.getBoundingClientRect();
    const padding = 24;
    const width = rect.width - padding * 2;
    const height = rect.height - padding * 2;
    return {
      x: padding + ((node.x ?? 50) / 100) * width,
      y: padding + ((node.y ?? 50) / 100) * height
    };
  }

  /**
   * Renders the authentic cartographic background (landmass, borders, graticule, highways)
   * into the offscreen canvas for high-performance 60fps blitting.
   */
  private renderBackgroundToOffscreen(w: number, h: number): void {
    // 1. Deep Cyber Void (Ocean / Space)
    this.offscreenCtx.fillStyle = '#03070f';
    this.offscreenCtx.fillRect(0, 0, w, h);

    // 2. Cartographic Latitude/Longitude Graticule
    const graticule = geoGraticule10();
    this.offscreenCtx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
    this.offscreenCtx.lineWidth = 1;
    this.offscreenCtx.beginPath();
    this.geoPathGenerator(graticule);
    this.offscreenCtx.stroke();

    // 3. North American Continental Landmass
    this.offscreenCtx.fillStyle = '#081422';
    this.offscreenCtx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
    this.offscreenCtx.lineWidth = 1.4;
    this.offscreenCtx.beginPath();
    this.geoPathGenerator(this.naCollection as any);
    this.offscreenCtx.fill();
    this.offscreenCtx.stroke();

    // 4. US State Boundaries (from TopoJSON state mesh)
    if ((northAmericaData as any).stateMesh) {
      this.offscreenCtx.strokeStyle = 'rgba(0, 240, 255, 0.14)';
      this.offscreenCtx.lineWidth = 0.8;
      this.offscreenCtx.setLineDash([2, 3]);
      this.offscreenCtx.beginPath();
      this.geoPathGenerator((northAmericaData as any).stateMesh);
      this.offscreenCtx.stroke();
      this.offscreenCtx.setLineDash([]);
    }

    // 5. Continental Trade Highway Grid (Corridors connecting real geographic nodes)
    this.offscreenCtx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
    this.offscreenCtx.lineWidth = 1;
    for (const edge of this.highwayEdges) {
      const n1 = this.nodes.find((n) => n.id === edge.fromNodeId);
      const n2 = this.nodes.find((n) => n.id === edge.toNodeId);
      if (n1 && n2) {
        const p1 = this.screenCoords(n1);
        const p2 = this.screenCoords(n2);
        this.offscreenCtx.beginPath();
        this.offscreenCtx.moveTo(p1.x, p1.y);
        this.offscreenCtx.lineTo(p2.x, p2.y);
        this.offscreenCtx.stroke();
      }
    }

    // 6. Tactical Telemetry Legend
    this.offscreenCtx.fillStyle = 'rgba(0, 240, 255, 0.45)';
    this.offscreenCtx.font = '9px monospace';
    this.offscreenCtx.fillText('// NORTH AMERICA THEATER : 2D TACTICAL GRID [WGS84]', 16, 20);
    this.offscreenCtx.fillText('// CORRIDORS: INTERSTATE & TRANS-CONTINENTAL TRADE MATRIX', 16, 32);
  }

  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let closest: WorldNode | null = null;
    let minDistanceSq = 256; // 16px hit detection radius
    let closestPos: { x: number; y: number } | null = null;

    for (const node of this.nodes) {
      const pos = this.screenCoords(node);
      const dx = pos.x - mouseX;
      const dy = pos.y - mouseY;
      const distSq = dx * dx + dy * dy;

      if (distSq < minDistanceSq) {
        minDistanceSq = distSq;
        closest = node;
        closestPos = pos;
      }
    }

    if (this.hoveredNode !== closest) {
      this.hoveredNode = closest;
      if (this.onNodeHover) {
        this.onNodeHover(closest, closestPos);
      }
    }
  }

  private handleTouch(e: TouchEvent): void {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    let closest: WorldNode | null = null;
    let minDistanceSq = 625; // 25px hit detection radius for touch screens
    let closestPos: { x: number; y: number } | null = null;

    for (const node of this.nodes) {
      const pos = this.screenCoords(node);
      const dx = pos.x - touchX;
      const dy = pos.y - touchY;
      const distSq = dx * dx + dy * dy;

      if (distSq < minDistanceSq) {
        minDistanceSq = distSq;
        closest = node;
        closestPos = pos;
      }
    }

    if (this.hoveredNode !== closest) {
      this.hoveredNode = closest;
      if (this.onNodeHover) {
        this.onNodeHover(closest, closestPos);
      }
    }
  }

  private handleClick(): void {
    if (this.hoveredNode) {
      this.selectedNode = this.hoveredNode;
      if (this.onNodeSelect) {
        this.onNodeSelect(this.hoveredNode);
      }
    }
  }

  private startRenderLoop(): void {
    const render = () => {
      this.pulsePhase = (this.pulsePhase + 0.05) % (Math.PI * 2);
      this.draw();
      this.animationFrameId = requestAnimationFrame(render);
    };
    render();
  }

  public destroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private draw(): void {
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Blit pre-rendered vector geography instantly (<0.1ms GPU copy)
    this.ctx.drawImage(this.offscreenCanvas, 0, 0, w, h);

    // 1. Determine Route Polyline to Draw
    let routeToDraw: WorldNode[] = [];
    if (this.currentState?.activeRoute) {
      routeToDraw = this.currentState.activeRoute.routeNodeIds
        .map((id) => this.nodes.find((n) => n.id === id))
        .filter((n): n is WorldNode => !!n);
    } else if (this.plannedRouteNodes.length > 1) {
      routeToDraw = this.plannedRouteNodes;
    }

    // 2. Draw Expedition Route Polyline
    if (routeToDraw.length > 1) {
      this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.55)';
      this.ctx.lineWidth = 2.5;
      this.ctx.shadowColor = '#00f0ff';
      this.ctx.shadowBlur = 8;
      this.ctx.setLineDash([6, 4]);
      this.ctx.beginPath();
      for (let i = 0; i < routeToDraw.length; i++) {
        const p = this.screenCoords(routeToDraw[i]);
        if (i === 0) this.ctx.moveTo(p.x, p.y);
        else this.ctx.lineTo(p.x, p.y);
      }
      this.ctx.stroke();
      this.ctx.setLineDash([]);
      this.ctx.shadowBlur = 0;
    }

    // 3. Draw Active Transit Leg & Moving Convoy Rig
    if (this.currentState && this.currentState.transit) {
      const originNode = this.nodes.find((n) => n.id === this.currentState!.transit!.originId);
      const destNode = this.nodes.find((n) => n.id === this.currentState!.transit!.destinationId);

      if (originNode && destNode) {
        const p1 = this.screenCoords(originNode);
        const p2 = this.screenCoords(destNode);

        // Highlight active leg corridor in pulsing neon amber
        this.ctx.strokeStyle = '#ffaa00';
        this.ctx.lineWidth = 3;
        this.ctx.shadowColor = '#ffaa00';
        this.ctx.shadowBlur = 12;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;

        // Convoy position interpolation
        const pct = this.currentState.transit.progressPercent / 100;
        const cx = p1.x + (p2.x - p1.x) * pct;
        const cy = p1.y + (p2.y - p1.y) * pct;

        // Outer pulse ring for convoy
        const convoyPulse = 7 + Math.sin(this.pulsePhase * 2) * 3;
        this.ctx.strokeStyle = 'rgba(255, 204, 0, 0.6)';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, convoyPulse, 0, Math.PI * 2);
        this.ctx.stroke();

        // Convoy Rig Core Icon
        this.ctx.fillStyle = '#ffcc00';
        this.ctx.shadowColor = '#ffcc00';
        this.ctx.shadowBlur = 14;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Core dot
        this.ctx.fillStyle = '#030508';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    // 3b. Draw Other Connected Players' Convoys on Map
    for (const other of this.otherConvoys) {
      if (other.status === 'IN_TRANSIT' && other.originId && other.destinationId) {
        const oNode = this.nodesById.get(other.originId);
        const dNode = this.nodesById.get(other.destinationId);
        if (oNode && dNode) {
          const p1 = this.screenCoords(oNode);
          const p2 = this.screenCoords(dNode);
          const pct = (other.progressPercent || 0) / 100;
          const ox = p1.x + (p2.x - p1.x) * pct;
          const oy = p1.y + (p2.y - p1.y) * pct;

          // Remote Convoy Pulse Ring
          const rPulse = 6 + Math.sin(this.pulsePhase * 1.5) * 2.5;
          this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
          this.ctx.lineWidth = 1.2;
          this.ctx.beginPath();
          this.ctx.arc(ox, oy, rPulse, 0, Math.PI * 2);
          this.ctx.stroke();

          // Remote Convoy Rig Icon (Cyan Beacon)
          this.ctx.fillStyle = '#00f0ff';
          this.ctx.shadowColor = '#00f0ff';
          this.ctx.shadowBlur = 10;
          this.ctx.beginPath();
          this.ctx.arc(ox, oy, 4.5, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.shadowBlur = 0;

          // Remote Rig Core
          this.ctx.fillStyle = '#030508';
          this.ctx.beginPath();
          this.ctx.arc(ox, oy, 2, 0, Math.PI * 2);
          this.ctx.fill();

          // Remote Player Callsign Tag
          this.ctx.fillStyle = '#00f0ff';
          this.ctx.font = '9px monospace';
          this.ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
          this.ctx.shadowBlur = 4;
          this.ctx.fillText(`▲ ${other.callsign}`, ox + 7, oy + 3);
          this.ctx.shadowBlur = 0;
        }
      }
    }

    const routeNodeIdSet = new Set(routeToDraw.map((n) => n.id));

    // 4. Draw All 200 Geographic World Nodes
    for (const node of this.nodes) {
      const pos = this.screenCoords(node);
      const sectorInfo = SECTORS[node.sector];
      const isCurrent = this.currentState?.currentLocationId === node.id;
      const isSelected = this.selectedNode?.id === node.id;
      const isHovered = this.hoveredNode?.id === node.id;
      const isWaypoint = routeNodeIdSet.has(node.id) && !isCurrent && !isSelected;

      // Waypoint marker ring for route waypoints
      if (isWaypoint) {
        this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.7)';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Outer animated beacon for current player location
      if (isCurrent) {
        const pulse = 7 + Math.sin(this.pulsePhase) * 3.5;
        this.ctx.strokeStyle = '#39ff14';
        this.ctx.lineWidth = 2;
        this.ctx.shadowColor = '#39ff14';
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, pulse, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      }

      // Selection reticle ring
      if (isSelected) {
        this.ctx.strokeStyle = '#00f0ff';
        this.ctx.lineWidth = 2;
        this.ctx.shadowColor = '#00f0ff';
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, 8.5, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      }

      // Node point
      this.ctx.fillStyle = isCurrent
        ? '#00ff88'
        : isWaypoint
        ? '#00f0ff'
        : sectorInfo
        ? sectorInfo.color
        : '#38bdf8';

      this.ctx.beginPath();
      const radius = isCurrent ? 5 : isHovered ? 5.5 : isWaypoint ? 4 : 3;
      this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Node label for current, hovered, selected, or active route endpoints
      if (isCurrent || isHovered || isSelected) {
        this.ctx.fillStyle = isCurrent ? '#00ff88' : '#00f0ff';
        this.ctx.font = 'bold 11px monospace';
        this.ctx.shadowColor = 'rgba(0,0,0,0.95)';
        this.ctx.shadowBlur = 5;
        this.ctx.fillText(node.name, pos.x + 9, pos.y + 4);
        this.ctx.shadowBlur = 0;
      }
    }
  }
}
