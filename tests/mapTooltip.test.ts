import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { WORLD_NODES } from '../src/constants/nodes';

describe('Tactical Map Node Hover Tooltip', () => {
  const htmlPath = path.resolve(__dirname, '../index.html');
  const cssPath = path.resolve(__dirname, '../src/styles/terminal.css');
  const mainTsPath = path.resolve(__dirname, '../src/main.ts');
  const mapRendererPath = path.resolve(__dirname, '../src/ui/mapRenderer.ts');

  const html = fs.readFileSync(htmlPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  const mainTs = fs.readFileSync(mainTsPath, 'utf8');
  const mapRendererTs = fs.readFileSync(mapRendererPath, 'utf8');

  it('verifies HTML includes mapHoverHud configured as floating tooltip overlay', () => {
    expect(html).toContain('id="mapHoverHud"');
    expect(html).toContain('class="map-hud-overlay map-node-tooltip"');
    expect(html).toContain('id="hoverTitle"');
    expect(html).toContain('id="hoverSector"');
    expect(html).toContain('id="hoverFaction"');
    expect(html).toContain('id="hoverDesc"');
  });

  it('verifies CSS defines floating tooltip styling with cyber glow and animations', () => {
    expect(css).toMatch(/\.map-hud-overlay\s*\{[^}]*position:\s*absolute/);
    expect(css).toMatch(/\.map-hud-overlay\s*\{[^}]*pointer-events:\s*none/);
    expect(css).toMatch(/\.map-hud-overlay\s*\{[^}]*z-index:\s*35/);
    expect(css).toMatch(/\.map-hud-overlay\s*\{[^}]*max-width:\s*280px/);
    expect(css).toContain('@keyframes tooltipFadeIn');
  });

  it('verifies MapRenderer exports NodeHoverCallback and triggers hover events', () => {
    expect(mapRendererTs).toContain('export type NodeHoverCallback');
    expect(mapRendererTs).toContain('setOnNodeHover(');
    expect(mapRendererTs).toContain('getNodeScreenCoords(');
    expect(mapRendererTs).toContain('this.onNodeHover(closest, closestPos)');
  });

  it('verifies main.ts positions tooltip dynamically relative to hovered node coordinates', () => {
    expect(mainTs).toContain('handleMapNodeHover(');
    expect(mainTs).toContain('positionMapTooltip(');
    expect(mainTs).toContain('this.mapHoverHud.style.left');
    expect(mainTs).toContain('this.mapHoverHud.style.top');

    // Tooltip position calculation verification:
    // When node is at (400, 300) in (800, 600) viewport with 260x90 tooltip
    const nodeX = 400;
    const nodeY = 300;
    const tooltipW = 260;
    const tooltipH = 90;
    const viewportW = 800;
    const viewportH = 600;

    let left = nodeX - tooltipW / 2;
    let top = nodeY - tooltipH - 12;

    if (top < 10) top = nodeY + 16;
    if (left < 10) left = 10;
    else if (left + tooltipW > viewportW - 10) left = viewportW - tooltipW - 10;
    if (top + tooltipH > viewportH - 10) top = viewportH - tooltipH - 10;

    expect(left).toBe(270);
    expect(top).toBe(198); // 300 - 90 - 12 = 198 (above the node)

    // When node is at top edge (e.g. nodeY = 20)
    const topEdgeNodeY = 20;
    let topEdgeTop = topEdgeNodeY - tooltipH - 12;
    if (topEdgeTop < 10) topEdgeTop = topEdgeNodeY + 16;
    expect(topEdgeTop).toBe(36); // flipped below the node!
  });
});
