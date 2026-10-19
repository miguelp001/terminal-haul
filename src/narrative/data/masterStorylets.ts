import { Storylet } from '../storyletTypes';
import { TIER1_GLOBAL_STORYLETS } from './tier1_global';
import { TIER2_SECTOR_STORYLETS } from './tier2_sectors';
import { TIER3_ARCHETYPE_STORYLETS } from './tier3_archetypes';
import { TIER4_FACTION_STORYLETS } from './tier4_factions';
import { TIER5_SIGNATURE_STORYLETS } from './tier5_signature';

export {
  TIER1_GLOBAL_STORYLETS,
  TIER2_SECTOR_STORYLETS,
  TIER3_ARCHETYPE_STORYLETS,
  TIER4_FACTION_STORYLETS,
  TIER5_SIGNATURE_STORYLETS
};

export const MASTER_STORYLETS: Storylet[] = [
  ...TIER1_GLOBAL_STORYLETS,
  ...TIER2_SECTOR_STORYLETS,
  ...TIER3_ARCHETYPE_STORYLETS,
  ...TIER4_FACTION_STORYLETS,
  ...TIER5_SIGNATURE_STORYLETS
];

export const TOTAL_STORYLET_COUNT = MASTER_STORYLETS.length;
