import { describe, it, expect } from 'vitest';
import { SimulationClock } from '../src/sim/clock';

describe('SimulationClock Time Dilation Engine', () => {
  it('correctly calculates delta day at 1x speed', () => {
    const clock = new SimulationClock(1.0, 1);
    const delta = clock.tick(1);
    expect(delta).toBeCloseTo(1 / 7200, 7);
    expect(clock.getGameDays()).toBeCloseTo(1 + 1 / 7200, 7);
  });

  it('correctly calculates delta day at 60x accelerated speed', () => {
    const clock = new SimulationClock(1.0, 60);
    const delta = clock.tick(1);
    expect(delta).toBeCloseTo(60 / 7200, 7);
    expect(clock.getGameDays()).toBeCloseTo(1 + 60 / 7200, 7);
  });

  it('respects pause and resume state', () => {
    const clock = new SimulationClock(1.0, 1);
    clock.pause();
    const delta = clock.tick(1);
    expect(delta).toBe(0);
    expect(clock.getGameDays()).toBe(1.0);

    clock.resume();
    clock.tick(1);
    expect(clock.getGameDays()).toBeGreaterThan(1.0);
  });

  it('formats game days into standard Day, Hour, Minute string', () => {
    const clock = new SimulationClock(1.5, 1); // 1 day, 12 hours
    const formatted = clock.formatGameTime();
    expect(formatted.day).toBe(1);
    expect(formatted.hour).toBe(12);
    expect(formatted.minute).toBe(0);
    expect(formatted.formatted).toBe('DAY 1 — 12:00');
  });
});
