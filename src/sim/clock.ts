export type ClockTickListener = (deltaTimeDays: number, totalGameDays: number) => void;

export class SimulationClock {
  private gameDays: number;
  private speedMultiplier: number;
  private isPaused: boolean;
  private listeners: Set<ClockTickListener> = new Set();
  private timerId: number | null = null;

  // 1 Game Day = 2 Real Hours = 7,200 Real Seconds
  public static readonly SECONDS_PER_GAME_DAY = 7200;
  public static readonly BASE_TICK_INTERVAL_MS = 1000;

  constructor(initialGameDays: number = 1.0, initialMultiplier: number = 1) {
    this.gameDays = initialGameDays;
    this.speedMultiplier = initialMultiplier;
    this.isPaused = false;
  }

  public getGameDays(): number {
    return this.gameDays;
  }

  public setGameDays(days: number): void {
    this.gameDays = Math.max(0, days);
  }

  public getSpeedMultiplier(): number {
    return this.speedMultiplier;
  }

  public setSpeedMultiplier(multiplier: number): void {
    if (multiplier <= 0) return;
    this.speedMultiplier = multiplier;
  }

  public isClockPaused(): boolean {
    return this.isPaused;
  }

  public pause(): void {
    this.isPaused = true;
  }

  public resume(): void {
    this.isPaused = false;
  }

  public togglePause(): boolean {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    return this.isPaused;
  }

  /**
   * Advances the simulation by 1 standard tick.
   * Delta Day = (1 / 7200) * SpeedMultiplier
   */
  public tick(manualDeltaSeconds?: number): number {
    if (this.isPaused) return 0;

    const deltaSec = manualDeltaSeconds !== undefined ? manualDeltaSeconds : 1;
    const deltaDay = (deltaSec / SimulationClock.SECONDS_PER_GAME_DAY) * this.speedMultiplier;

    this.gameDays += deltaDay;

    for (const listener of this.listeners) {
      listener(deltaDay, this.gameDays);
    }

    return deltaDay;
  }

  public addListener(listener: ClockTickListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public start(): void {
    if (this.timerId !== null) return;

    // In browser or Node environment
    this.timerId = setInterval(() => {
      this.tick(1);
    }, SimulationClock.BASE_TICK_INTERVAL_MS) as unknown as number;
  }

  public stop(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  /**
   * Formats current game time into Days, Hours, Minutes string.
   */
  public formatGameTime(): { day: number; hour: number; minute: number; formatted: string } {
    const totalDays = this.gameDays;
    const day = Math.floor(totalDays);
    const dayFraction = totalDays - day;
    const totalHours = dayFraction * 24;
    const hour = Math.floor(totalHours);
    const minute = Math.floor((totalHours - hour) * 60);

    const pad = (n: number) => n.toString().padStart(2, '0');
    return {
      day,
      hour,
      minute,
      formatted: `DAY ${day} — ${pad(hour)}:${pad(minute)}`
    };
  }
}
