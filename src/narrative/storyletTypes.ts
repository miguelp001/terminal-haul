import { FactionId, SectorId, CommodityId, PlayerQualities, WorldNode } from '../types';

export type NodeArchetype =
  | 'corporate_arcology'
  | 'wasteland_hub'
  | 'black_market_sprawl'
  | 'reclaimer_foundry'
  | 'freehold_outpost';

export interface StoryletScope {
  sectors?: SectorId[] | 'any';
  archetypes?: NodeArchetype[] | 'any';
  locationIds?: string[] | 'any';
  tier?: 1 | 2 | 3 | 4 | 5;
  enRouteOnly?: boolean;
  dockOnly?: boolean;
}

export interface QualityRequirements {
  minQualities?: Partial<Record<keyof PlayerQualities | string, number>>;
  maxQualities?: Partial<Record<keyof PlayerQualities | string, number>>;
  minReputation?: Partial<Record<FactionId, number>>;
  maxReputation?: Partial<Record<FactionId, number>>;
  minCredits?: number;
  maxCredits?: number;
  minCargo?: Partial<Record<CommodityId, number>>;
  requiredStoryletsCompleted?: string[];
  excludedStoryletsCompleted?: string[];
}

export interface StoryletOutcome {
  qualities?: Partial<Record<keyof PlayerQualities | string, number>>; // Deltas (+ or -)
  reputation?: Partial<Record<FactionId, number>>; // Deltas (+ or -)
  credits?: number; // Delta (+ or -)
  cargo?: Partial<Record<CommodityId, number>>; // Delta (+ or -)
  hullIntegrity?: number; // Delta (+ or -)
}

export interface StoryletOption {
  id: string;
  label: string;
  reqs?: QualityRequirements;
  effectText: string;
  outcomes: StoryletOutcome;
}

export interface Storylet {
  id: string;
  title: string;
  scope: StoryletScope;
  weight: number; // 1 to 20
  repeatable: boolean;
  cooldownDays: number;
  reqs: QualityRequirements;
  text: string;
  options: StoryletOption[];
}

export interface PlayerNarrativeState {
  credits: number;
  cargo: Record<CommodityId, number>;
  qualities: PlayerQualities;
  factions: Record<FactionId, number>;
  currentLocationId: string;
  gameDays: number;
  completedStorylets: string[];
  storyletCooldowns: Record<string, number>; // storyletId -> expiration GameDay
  isEnRoute: boolean;
  convoyHullIntegrity: number;
  convoyMaxHull: number;
  eventLogs: string[];
}

export interface TextInterpolationContext {
  location: WorldNode;
  enforcerName?: string;
  contrabandItem?: string;
}
