/**
 * Pure Web Audio API Sound Effects Synthesizer for Terminal Haul.
 * Zero external audio assets required.
 * Implements canonical sound profiles from Section 8.2 of the Technical Specification:
 * - click: Sine wave sweep (800Hz -> 400Hz)
 * - trade: Triangle wave upward sweep (300Hz -> 900Hz)
 * - event: Sawtooth event alarm frequency ramp
 * - travel: Sub-bass engine rumble curve
 */

export class SoundFXEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;

  // Transit engine rumble nodes
  private travelOsc: OscillatorNode | null = null;
  private travelGain: GainNode | null = null;

  constructor() {
    // Lazily initialize upon first user gesture
  }

  private initContext(): boolean {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return true;
    }

    try {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return false;

      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      return true;
    } catch {
      return false;
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.3, this.ctx.currentTime);
    }
    if (muted && this.travelOsc) {
      this.stopTravelRumble();
    }
  }

  public isSoundMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  /**
   * Click Sound: Sine wave frequency sweep (800Hz -> 400Hz over 50ms)
   */
  public playClick(): void {
    if (this.isMuted || !this.initContext() || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio playback fails silently if context interrupted
    }
  }

  /**
   * Trade Sound: Triangle wave upward sweep (300Hz -> 900Hz over 120ms)
   */
  public playTrade(): void {
    if (this.isMuted || !this.initContext() || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch {
      // Ignore
    }
  }

  /**
   * Event Alarm Sound: Sawtooth alarm frequency ramp (350Hz -> 750Hz -> 500Hz)
   */
  public playEvent(): void {
    if (this.isMuted || !this.initContext() || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.linearRampToValueAtTime(750, now + 0.12);
      osc.frequency.linearRampToValueAtTime(500, now + 0.25);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch {
      // Ignore
    }
  }

  /**
   * Travel Sound: Sub-bass engine rumble curve (45Hz - 60Hz modulated drone)
   */
  public startTravelRumble(): void {
    if (this.isMuted || !this.initContext() || !this.ctx || !this.masterGain) return;
    if (this.travelOsc) return;

    try {
      this.travelOsc = this.ctx.createOscillator();
      this.travelGain = this.ctx.createGain();

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(120, this.ctx.currentTime);

      this.travelOsc.type = 'triangle';
      this.travelOsc.frequency.setValueAtTime(48, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      this.travelGain.gain.setValueAtTime(0.01, now);
      this.travelGain.gain.linearRampToValueAtTime(0.22, now + 0.5);

      this.travelOsc.connect(filter);
      filter.connect(this.travelGain);
      this.travelGain.connect(this.masterGain);

      this.travelOsc.start(now);
    } catch {
      this.travelOsc = null;
      this.travelGain = null;
    }
  }

  /**
   * Stops or fades out the travel rumble curve.
   */
  public stopTravelRumble(): void {
    if (!this.travelOsc || !this.travelGain || !this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      this.travelGain.gain.linearRampToValueAtTime(0.01, now + 0.4);
      const oscToStop = this.travelOsc;
      setTimeout(() => {
        try {
          oscToStop.stop();
          oscToStop.disconnect();
        } catch {
          // Ignore
        }
      }, 450);
    } catch {
      // Ignore
    } finally {
      this.travelOsc = null;
      this.travelGain = null;
    }
  }
}

export const soundFX = new SoundFXEngine();
