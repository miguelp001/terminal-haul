import { SectorId, SectorInfo, FactionId, CommodityId, CommodityDefinition } from '../types';

export const SECTORS: Record<SectorId, SectorInfo> = {
  northeast: {
    id: 'northeast',
    name: 'Northeast Megalopolis',
    description: 'Hyper-dense corporate arcologies, naval shipyards, and high-tech corporate enclaves.',
    color: '#00f0ff'
  },
  midwest: {
    id: 'midwest',
    name: 'Midwest Industrial Rust',
    description: 'Vast automated manufacturing hubs, metal foundries, and Rustworks union yards.',
    color: '#ff9900'
  },
  pacific_northwest: {
    id: 'pacific_northwest',
    name: 'Pacific Northwest Cascadia',
    description: 'High-altitude cloud datacenters, biotech labs, and Neural Front hacker enclaves.',
    color: '#39ff14'
  },
  southwest_wasteland: {
    id: 'southwest_wasteland',
    name: 'Southwest & Mojave Wasteland',
    description: 'Arid scorched highways, massive solar fields, and Solaris nomad strongholds.',
    color: '#ff0055'
  },
  southern: {
    id: 'southern',
    name: 'Southern Petro-Gulf Freeholds',
    description: 'Offshore oil platforms, floodwall citadels, and Syndicate smuggling ports.',
    color: '#ffe600'
  },
  east_coast: {
    id: 'east_coast',
    name: 'East Coast Corporate Corridor',
    description: 'Aegis defense compounds, munitions stockpiles, and Appalachian bunker complexes.',
    color: '#0077ff'
  },
  north: {
    id: 'north',
    name: 'Northern Laurentian Shield',
    description: 'Sub-zero cryo-vaults, hydro-power mega-dams, and geo-isolated research domes.',
    color: '#00ffff'
  }
};

export const FACTIONS: Record<FactionId, { name: string; focus: string; demandedGoods: CommodityId[] }> = {
  aegis: {
    name: 'Aegis Security Corp',
    focus: 'Military-industrial bloc, corporate enforcers',
    demandedGoods: ['batteries', 'chips']
  },
  gridlock: {
    name: 'Gridlock Syndicate',
    focus: 'Black-market trade cartel, illegal contraband brokers',
    demandedGoods: ['toxins', 'cyberware']
  },
  solaris: {
    name: 'Solaris Nomad Clans',
    focus: 'Highway scavengers, wasteland convoy operators',
    demandedGoods: ['grain', 'batteries']
  },
  rustworks: {
    name: 'Rustworks Collective',
    focus: 'Reclaimer engineer unions, heavy industrial salvagers',
    demandedGoods: ['cryo', 'grain']
  },
  neuralfront: {
    name: 'Neural Front',
    focus: 'Transhumanist hackers, digital insurgents',
    demandedGoods: ['chips', 'cyberware']
  }
};

export const COMMODITIES: Record<CommodityId, CommodityDefinition> = {
  grain: {
    id: 'grain',
    name: 'Synthetic Grain',
    basePrice: 40,
    weightTonnes: 1.0,
    isContraband: false,
    description: 'Engineered algae and protein brick nourishment for arcology populations.'
  },
  batteries: {
    id: 'batteries',
    name: 'Hydro-Batteries',
    basePrice: 120,
    weightTonnes: 2.0,
    isContraband: false,
    description: 'Pressurized hydrogen cells essential for convoy power and outpost grids.'
  },
  cyberware: {
    id: 'cyberware',
    name: 'Cyberware Optics',
    basePrice: 350,
    weightTonnes: 1.0,
    isContraband: false,
    description: 'Precision tactical sensory implants and infrared visual targeting arrays.'
  },
  chips: {
    id: 'chips',
    name: 'Neural Processing Chips',
    basePrice: 800,
    weightTonnes: 0.5,
    isContraband: false,
    description: 'Sub-atomic quantum processors capable of hosting neural reflex AI.'
  },
  cryo: {
    id: 'cryo',
    name: 'Cryo-Medical Pods',
    basePrice: 1500,
    weightTonnes: 4.0,
    isContraband: false,
    description: 'Heavy life-support stasis chambers used for organ preservation and trauma surgery.'
  },
  toxins: {
    id: 'toxins',
    name: 'Bio-Toxins',
    basePrice: 2200,
    weightTonnes: 1.5,
    isContraband: true,
    description: 'Military-grade neurochemical agents strictly prohibited across corporate borders.'
  }
};
