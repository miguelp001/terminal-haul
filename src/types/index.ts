export type FactionId = 'aegis' | 'gridlock' | 'solaris' | 'rustworks' | 'neuralfront';

export type SectorId = 
  | 'northeast' 
  | 'midwest' 
  | 'pacific_northwest' 
  | 'southwest_wasteland' 
  | 'southern' 
  | 'east_coast' 
  | 'north';

export interface SectorInfo {
  id: SectorId;
  name: string;
  description: string;
  color: string;
}

export type NodeArchetype =
  | 'corporate_arcology'
  | 'wasteland_hub'
  | 'black_market_sprawl'
  | 'reclaimer_foundry'
  | 'freehold_outpost';

export interface WorldNode {
  id: string;
  name: string;
  sector: SectorId;
  x: number; // 0 - 100 legacy grid coordinate
  y: number; // 0 - 100 legacy grid coordinate
  lng: number; // Geographic Longitude (-180 to 180)
  lat: number; // Geographic Latitude (-90 to 90)
  dominantFaction: FactionId;
  description: string;
  securityLevel: number; // 1 to 5
  archetype?: NodeArchetype;
}

export function getNodeArchetype(node: WorldNode): NodeArchetype {
  if (node.archetype) return node.archetype;
  switch (node.dominantFaction) {
    case 'aegis':
      return node.securityLevel >= 4 ? 'corporate_arcology' : 'freehold_outpost';
    case 'gridlock':
      return 'black_market_sprawl';
    case 'solaris':
      return 'wasteland_hub';
    case 'rustworks':
      return 'reclaimer_foundry';
    case 'neuralfront':
      return node.securityLevel <= 2 ? 'freehold_outpost' : 'corporate_arcology';
    default:
      return 'wasteland_hub';
  }
}

export type CommodityId = 'grain' | 'batteries' | 'cyberware' | 'chips' | 'cryo' | 'toxins';

export interface CommodityDefinition {
  id: CommodityId;
  name: string;
  basePrice: number;
  weightTonnes: number;
  isContraband: boolean;
  description: string;
}

export interface PlayerQualities {
  'Cyberware Level': number;
  'Street Cred': number;
  'Tech Literacy': number;
  'Contraband Mastery': number;
  'Enclave Permits': number;
  'Heat': number; // 0 - 100
  'Glitch Rating': number;
  [key: string]: number;
}

export type CoreStatKey = 'grit' | 'edge' | 'cyber' | 'cool';

export interface CoreStats {
  grit: number;   // Chassis endurance, brute force, rig toughness (-1 to +3)
  edge: number;   // Reflexes, evasive maneuvers, highway speed, dodging (-1 to +3)
  cyber: number;  // Interface, scanner telemetry, hacking, electronic ops (-1 to +3)
  cool: number;   // Composure, intimidation, street parley, deception (-1 to +3)
}

export interface ConvoyRig {
  name: string;
  hullIntegrity: number; // 0 - 100
  maxHull: number;
  maxCargoWeight: number; // Tonnes
  currentCargoWeight: number;
  speedRating: number;
}

export type ConvoyStatus = 'DOCKED' | 'IN_TRANSIT' | 'ARRIVED';

export interface ActiveTransit {
  originId: string;
  destinationId: string;
  distanceKm: number;
  totalDurationSeconds: number;
  elapsedSeconds: number;
  progressPercent: number; // 0 - 100
  startGameDay: number;
  departureRealTime: number;
  legIndex?: number;
  totalLegs?: number;
  finalDestinationId?: string;
}

export interface ActiveRoute {
  finalDestinationId: string;
  routeNodeIds: string[]; // [origin, waypoint1, waypoint2, ..., finalDest]
  currentLegIndex: number; // index in routeNodeIds of current target waypoint (1 to length - 1)
  autoAdvance: boolean;
}

export interface GameClockState {
  gameDays: number;
  speedMultiplier: number; // 1 or 60
  isPaused: boolean;
  lastTickTimestamp: number;
}

export interface PlayerState {
  credits: number;
  cargo: Record<CommodityId, number>;
  qualities: PlayerQualities;
  stats: CoreStats;
  factions: Record<FactionId, number>; // -100 to 100
  currentLocationId: string;
  convoy: ConvoyRig;
  transit: ActiveTransit | null;
  activeRoute: ActiveRoute | null;
  status: ConvoyStatus;
  totalDistanceTraveled: number;
  completedContractsCount: number;
  eventLogs: string[];
  activeStorylet: import('./storylet').Storylet | null;
  completedStorylets?: string[];
  availableContracts: import('./contracts').CourierContract[];
  activeContracts: import('./contracts').CourierContract[];
}
