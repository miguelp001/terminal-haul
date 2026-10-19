import { FactionId, SectorId, CommodityId, CoreStatKey, NodeArchetype } from './index';

export type StoryletLayer =
  | 'global'
  | 'sector'
  | 'coastal'
  | 'inland'
  | 'archetype'
  | 'faction'
  | 'signature';

export interface StoryletRequirement {
  qualities?: Record<string, number>; // Minimum required quality value
  maxQualities?: Record<string, number>; // Maximum allowed quality value (e.g. max Heat)
  stats?: Partial<Record<CoreStatKey, number>>; // Minimum required core stat (e.g. grit >= 2)
  credits?: number; // Minimum credits required
  cargo?: Partial<Record<CommodityId, number>>; // Minimum cargo required
  factionRep?: Partial<Record<FactionId, number>>; // Minimum faction rep required
  sector?: SectorId;
  sectors?: SectorId[];
  locationId?: string;
  locationIds?: string[];
  archetype?: NodeArchetype;
  archetypes?: NodeArchetype[];
  coastalOnly?: boolean;
  inlandOnly?: boolean;
  factions?: FactionId[];
  layer?: StoryletLayer;
}

export interface StoryletReward {
  qualities?: Record<string, number>; // Delta (+ or -)
  stats?: Partial<Record<CoreStatKey, number>>; // Stat deltas (+ or -)
  credits?: number; // Delta (+ or -)
  cargo?: Partial<Record<CommodityId, number>>; // Delta (+ or -)
  rep?: Partial<Record<FactionId, number>>; // Delta (+ or -)
  hullIntegrity?: number; // Delta (+ or -)
  rig?: {
    speedRating?: number; // Delta (+ or -)
    maxHull?: number; // Delta (+ or -)
    maxCargoWeight?: number; // Delta (+ or -)
    name?: string;
  };
}

export interface PbtABranchOutcome {
  effectText: string;
  rewards: StoryletReward;
}

export interface StoryletOption {
  id: string;
  label: string;
  reqs?: StoryletRequirement;
  effectText: string;
  rewards: StoryletReward;
  // Powered by the Apocalypse (PbtA) move extensions:
  statRoll?: CoreStatKey;
  qualityBonusKey?: string; // Quality name whose value / threshold confers bonus (e.g. 'Street Cred' >= 4 -> +1)
  qualityBonusThreshold?: number; // default 3 if unspecified
  strongHit?: PbtABranchOutcome; // 10+
  weakHit?: PbtABranchOutcome;   // 7-9
  miss?: PbtABranchOutcome;      // 6-
}

export type StoryletTriggerType = 'DOCK' | 'TRANSIT_ENCOUNTER' | 'ANY';

export interface Storylet {
  id: string;
  title: string;
  triggerType: StoryletTriggerType;
  triggerLocation?: string; // 'Any' or specific nodeId or sector or 'coastal' or 'inland'
  layer?: StoryletLayer;
  reqs?: StoryletRequirement;
  text: string;
  options: StoryletOption[];
  repeatable?: boolean; // If false, triggers once per playthrough
}

