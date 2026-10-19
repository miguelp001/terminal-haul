import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Modal Buttons Readability & Contrast Verification', () => {
  const cssPath = path.resolve(__dirname, '../src/styles/terminal.css');
  const htmlPath = path.resolve(__dirname, '../index.html');
  const mainTsPath = path.resolve(__dirname, '../src/main.ts');

  const css = fs.readFileSync(cssPath, 'utf8');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const mainTs = fs.readFileSync(mainTsPath, 'utf8');

  it('ensures no corrupted --aug-border or --aug-inlay variable definitions exist in CSS', () => {
    // augmented-ui space toggle pattern requires --aug-border and --aug-inlay to NOT be set to lengths.
    // They must use --aug-border-all and --aug-inlay-all instead.
    const invalidAugBorder = css.match(/(?<!-)\b--aug-border\s*:\s*\d+/g);
    const invalidAugInlay = css.match(/(?<!-)\b--aug-inlay\s*:\s*\d+/g);

    expect(invalidAugBorder).toBeNull();
    expect(invalidAugInlay).toBeNull();
  });

  it('verifies system menu modal buttons have high-contrast styling and proper elevation', () => {
    expect(css).toContain('.menu-btn-grid button.term-btn');
    expect(css).toContain('.dismiss-menu-btn');
    expect(css).toContain('button.term-btn.reset-btn');

    // System menu buttons should have solid contrasting background
    expect(css).toMatch(/\.menu-btn-grid button\.term-btn\s*\{[^}]*background:\s*#0d1a29/);
    expect(css).toMatch(/\.menu-btn-grid button\.term-btn\s*\{[^}]*color:\s*#ffffff/);

    // Active state should have glowing high-contrast text and border
    expect(css).toMatch(/\.menu-btn-grid button\.term-btn\.active\s*\{[^}]*color:\s*var\(--neon-green\)/);

    // Dismiss button should have glowing cyan text and clear padding
    expect(css).toMatch(/\.dismiss-menu-btn\s*\{[^}]*color:\s*var\(--neon-cyan\)/);
  });

  it('verifies storylet modal options have high-contrast text, clear borders, and elevated z-index', () => {
    expect(css).toContain('.storylet-option-btn');
    expect(css).toContain('.storylet-opt-text');
    expect(css).toContain('.stat-roll-badge');
    expect(css).toContain('.dismiss-storylet-btn');

    // Storylet options must have solid dark navy background and white text
    expect(css).toMatch(/\.storylet-option-btn\s*\{[^}]*background:\s*#0d1b2a/);
    expect(css).toMatch(/\.storylet-opt-text\s*\{[^}]*color:\s*#ffffff/);

    // Z-index elevation so text is never obscured by pseudo-elements
    expect(css).toMatch(/\.storylet-option-btn > \*\s*\{[^}]*z-index:\s*2/);

    // Dismiss storylet button should have clear neon green styling
    expect(css).toMatch(/\.dismiss-storylet-btn[^\{]*\{[^}]*color:\s*var\(--neon-green\)/);
  });

  it('verifies HTML modal buttons exist with correct classes and augmented-ui hooks', () => {
    expect(html).toContain('id="btnAudioToggle"');
    expect(html).toContain('id="btnThemeToggle"');
    expect(html).toContain('id="btnResetGame"');
    expect(html).toContain('id="btnDismissSystemMenu"');
    expect(html).toContain('id="btnDismissStorylet"');

    expect(html).toContain('class="term-btn dismiss-menu-btn"');
    expect(html).toContain('class="term-btn dismiss-storylet-btn"');
  });

  it('verifies main.ts generates option buttons with explicit typography classes', () => {
    expect(mainTs).toContain("labelSpan.className = 'storylet-opt-label'");
    expect(mainTs).toContain("textSpan.className = 'storylet-opt-text'");
  });
});
