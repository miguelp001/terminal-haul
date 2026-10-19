import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Mobile Responsiveness & Usability Verification', () => {
  const htmlPath = path.resolve(__dirname, '../index.html');
  const cssPath = path.resolve(__dirname, '../src/styles/terminal.css');
  const mainTsPath = path.resolve(__dirname, '../src/main.ts');

  const html = fs.readFileSync(htmlPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  const mainTs = fs.readFileSync(mainTsPath, 'utf8');

  it('verifies viewport-fit=cover and 100dvh viewport stability for mobile browsers', () => {
    expect(html).toContain('viewport-fit=cover');
    expect(css).toContain('100dvh');
    expect(css).toMatch(/html,\s*body\s*\{[^}]*height:\s*100dvh/);
  });

  it('verifies mobile header is compact with horizontal scrolling HUD telemetry', () => {
    // Under mobile breakpoint, header sub-badges are hidden to save vertical space
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.logo-sub,\s*\.brand-badge\s*\{[^}]*display:\s*none/);

    // Telemetry HUD scrolls horizontally in a single row without wrapping
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.header-hud\s*\{[^}]*flex-wrap:\s*nowrap/);
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.header-hud\s*\{[^}]*overflow-x:\s*auto/);
  });

  it('verifies mobile tab bar has stable icon + label buttons without width shifting', () => {
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?button\.tab-btn \.tab-label\s*\{[^}]*display:\s*block/);
  });

  it('verifies tactical map is a dedicated slide-out drawer on mobile for full visibility', () => {
    // HTML includes trigger button in dispatch console and slide-out map viewport with header and footer
    expect(html).toContain('id="btnOpenMapDrawer"');
    expect(html).toContain('id="mapViewport"');
    expect(html).toContain('class="map-drawer-header"');
    expect(html).toContain('id="btnCloseMapDrawer"');
    expect(html).toContain('id="btnCenterConvoy"');
    expect(html).toContain('id="mapCanvasContainer"');
    expect(html).toContain('class="map-drawer-footer"');
    expect(html).toContain('id="mapDrawerTargetInfo"');
    expect(html).toContain('id="btnMapDrawerSelect"');
    expect(html).toContain('id="btnMapDrawerDispatch"');

    // CSS defines fixed slide-out drawer transition and large 950x580 canvas for mobile usability
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.map-viewport\s*\{[^}]*position:\s*fixed/);
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.map-viewport\s*\{[^}]*transform:\s*translateX\(100%\)/);
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.map-viewport\.map-drawer-open\s*\{[^}]*transform:\s*translateX\(0\)/);
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?canvas#worldMapCanvas\s*\{[^}]*width:\s*950px/);

    // main.ts manages drawer lifecycle and centering
    expect(mainTs).toContain('openMapDrawer(');
    expect(mainTs).toContain('closeMapDrawer(');
    expect(mainTs).toContain('centerMapOnCurrentNode(');
    expect(mainTs).toContain("this.mapViewport.classList.add('map-drawer-open')");
    expect(mainTs).toContain("this.mapViewport.classList.remove('map-drawer-open')");
  });

  it('verifies iOS Safari auto-zoom prevention on form controls', () => {
    // iOS Safari zooms the entire page if input font-size is < 16px
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?select\.term-select,\s*input\.chat-text-input,\s*input\.callsign-text-input\s*\{[^}]*font-size:\s*16px/);
  });

  it('verifies touch-action on map canvas for smooth touch interaction', () => {
    expect(css).toMatch(/canvas#worldMapCanvas\s*\{[^}]*touch-action:\s*none/);
  });
});
