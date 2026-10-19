import { PlayerState, CommodityId, FactionId, PlayerQualities, ConvoyRig, ActiveRoute, CoreStats } from '../types';
import { CourierContract } from '../types/contracts';

export interface SavedGamePayload {
  credits: number;
  cargo: Record<CommodityId, number>;
  qualities: PlayerQualities;
  stats?: CoreStats;
  factions: Record<FactionId, number>;
  currentLocation: string;
  gameDays: number;
  totalDistanceTraveled: number;
  completedContractsCount: number;
  eventLogs: string[];
  activeContracts?: CourierContract[];
  convoy?: ConvoyRig;
  activeRoute?: ActiveRoute | null;
  version?: string;
  timestamp?: number;
}

export class PersistenceManager {
  public static readonly SAVE_KEY = 'TERMINAL_HAUL_SAVE';
  public static readonly CURRENT_VERSION = '1.0.0';

  /**
   * Serializes current game state into the standard JSON schema payload.
   */
  public static serializeGameState(
    state: PlayerState,
    gameDays: number,
    activeContracts: CourierContract[] = []
  ): SavedGamePayload {
    return {
      credits: state.credits,
      cargo: { ...state.cargo },
      qualities: { ...state.qualities },
      stats: state.stats ? { ...state.stats } : { grit: 1, edge: 1, cyber: 0, cool: 1 },
      factions: { ...state.factions },
      currentLocation: state.currentLocationId,
      gameDays: Math.round(gameDays * 1000) / 1000,
      totalDistanceTraveled: state.totalDistanceTraveled,
      completedContractsCount: state.completedContractsCount,
      eventLogs: [...state.eventLogs],
      activeContracts: [...activeContracts],
      convoy: { ...state.convoy },
      activeRoute: state.activeRoute ? { ...state.activeRoute } : null,
      version: this.CURRENT_VERSION,
      timestamp: Date.now()
    };
  }

  /**
   * Saves state to HTML5 localStorage.
   */
  public static saveToLocalStorage(
    state: PlayerState,
    gameDays: number,
    activeContracts: CourierContract[] = []
  ): boolean {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return false;
      }
      const payload = this.serializeGameState(state, gameDays, activeContracts);
      window.localStorage.setItem(this.SAVE_KEY, JSON.stringify(payload));
      return true;
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
      return false;
    }
  }

  /**
   * Loads state from HTML5 localStorage.
   */
  public static loadFromLocalStorage(): SavedGamePayload | null {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return null;
      }
      const raw = window.localStorage.getItem(this.SAVE_KEY);
      if (!raw) return null;
      return this.validateAndParseSave(raw);
    } catch (err) {
      console.error('Failed to load from localStorage:', err);
      return null;
    }
  }

  /**
   * Clears saved state from localStorage.
   */
  public static clearSave(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(this.SAVE_KEY);
      }
    } catch (err) {
      console.error('Failed to clear save:', err);
    }
  }

  /**
   * Validates and parses a raw JSON save string.
   */
  public static validateAndParseSave(jsonString: string): SavedGamePayload | null {
    try {
      const parsed = JSON.parse(jsonString);
      if (
        typeof parsed !== 'object' ||
        parsed === null ||
        typeof parsed.credits !== 'number' ||
        typeof parsed.cargo !== 'object' ||
        typeof parsed.qualities !== 'object' ||
        typeof parsed.factions !== 'object' ||
        typeof parsed.currentLocation !== 'string' ||
        typeof parsed.gameDays !== 'number'
      ) {
        return null;
      }
      return parsed as SavedGamePayload;
    } catch {
      return null;
    }
  }

  /**
   * Exports game state as downloadable JSON string.
   */
  public static exportSaveJson(
    state: PlayerState,
    gameDays: number,
    activeContracts: CourierContract[] = []
  ): string {
    const payload = this.serializeGameState(state, gameDays, activeContracts);
    return JSON.stringify(payload, null, 2);
  }
}
