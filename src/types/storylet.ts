import { FactionId, SectorId, CommodityId } from './index';

export interface StoryletRequirement {
  qualities?: Record<string, number>; // Minimum required quality value
  maxQualities?: Record<string, number>; // Maximum allowed quality value (e.g. max Heat)
  credits?: number; // Minimum credits required
  cargo?: Partial<Record<CommodityId, number>>; // Minimum cargo required
  factionRep?: Partial<Record<FactionId, number>>; // Minimum faction rep required
  sector?: SectorId;
  locationId?: string;
}

export interface StoryletReward {
  qualities?: Record<string, number>; // Delta (+ or -)
  credits?: number; // Delta (+ or -)
  cargo?: Partial<Record<CommodityId, number>>; // Delta (+ or -)
  rep?: Partial<Record<FactionId, number>>; // Delta (+ or -)
  hullIntegrity?: number; // Delta (+ or -)
}

export interface StoryletOption {
  id: string;
  label: string;
  reqs?: StoryletRequirement;
  effectText: string;
  rewards: StoryletReward;
}

export type StoryletTriggerType = 'DOCK' | 'TRANSIT_ENCOUNTER' | 'ANY';

export interface Storylet {
  id: string;
  title: string;
  triggerType: StoryletTriggerType;
  triggerLocation?: string; // 'Any' or specific nodeId or sector
  reqs?: StoryletRequirement;
  text: string;
  options: StoryletOption[];
}
