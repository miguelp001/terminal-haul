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

  it('verifies navigation dispatch drawer is accessible and properly toggleable on mobile', () => {
    // btnToggleNavDrawer must be inside the drawer panel-header so it is always visible and clickable
    expect(html).toMatch(/<aside id="navDispatchPanel"[\s\S]*?<div class="panel-header" id="navDispatchHeader"[\s\S]*?id="btnToggleNavDrawer"/);

    // CSS defines sliding drawer transition
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.nav-dispatch-panel\s*\{[^}]*transform:\s*translateY\(calc\(100% - 44px\)\)/);
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?\.nav-dispatch-panel\.drawer-open\s*\{[^}]*transform:\s*translateY\(0\)/);

    // main.ts auto-expands drawer on mobile node tap
    expect(mainTs).toContain('this.navDispatchPanel.classList.add(\'drawer-open\')');
    // main.ts auto-collapses drawer on dispatch
    expect(mainTs).toContain('this.navDispatchPanel.classList.remove(\'drawer-open\')');
  });

  it('verifies iOS Safari auto-zoom prevention on form controls', () => {
    // iOS Safari zooms the entire page if input font-size is < 16px
    expect(css).toMatch(/@media\s*\(max-width:\s*768px\)[\s\S]*?select\.term-select,\s*input\.chat-text-input,\s*input\.callsign-text-input\s*\{[^}]*font-size:\s*16px/);
  });

  it('verifies touch-action none on map canvas for smooth touch controls', () => {
    expect(css).toMatch(/canvas#worldMapCanvas\s*\{[^}]*touch-action:\s*none/);
  });
});
