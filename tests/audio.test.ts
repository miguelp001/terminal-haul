import { describe, it, expect } from 'vitest';
import { SoundFXEngine } from '../src/audio/soundFX';

describe('Web Audio Synthesizer (Section 8.2)', () => {
  it('initializes in unmuted state without crashing in test environments', () => {
    const sfx = new SoundFXEngine();
    expect(sfx.isSoundMuted()).toBe(false);
  });

  it('correctly toggles mute state', () => {
    const sfx = new SoundFXEngine();
    expect(sfx.isSoundMuted()).toBe(false);

    sfx.toggleMute();
    expect(sfx.isSoundMuted()).toBe(true);

    sfx.toggleMute();
    expect(sfx.isSoundMuted()).toBe(false);
  });

  it('executes audio methods safely without throwing in headless environments', () => {
    const sfx = new SoundFXEngine();
    expect(() => sfx.playClick()).not.toThrow();
    expect(() => sfx.playTrade()).not.toThrow();
    expect(() => sfx.playEvent()).not.toThrow();
    expect(() => sfx.startTravelRumble()).not.toThrow();
    expect(() => sfx.stopTravelRumble()).not.toThrow();
  });
});
