import { FactionId, CommodityId } from '../types';


export interface GoapAction {
  factionId: FactionId;
  headline: string;
  description: string;
  effects: Partial<Record<CommodityId, number>>; // delta to apply to M_goap
}

export class GoapEconomySimulation {
  private multipliers: Record<CommodityId, number> = {
    grain: 1.0,
    batteries: 1.0,
    cyberware: 1.0,
    chips: 1.0,
    cryo: 1.0,
    toxins: 1.0
  };

  private static readonly FACTION_ACTIONS: Record<FactionId, GoapAction[]> = {
    aegis: [
      {
        factionId: 'aegis',
        headline: 'AEGIS SECURES QUANTUM NEURAL CHIPS',
        description: 'Aegis Security Corp issues emergency military requisitions for high-performance processor chips.',
        effects: { chips: 0.25, cyberware: 0.10 }
      },
      {
        factionId: 'aegis',
        headline: 'AEGIS CRACKS DOWN ON REGIONAL CONTRABAND',
        description: 'Highway blockades and drone sweeps seize illicit shipments, spiking black-market bio-toxin scarcity.',
        effects: { toxins: 0.35, grain: -0.05 }
      },
      {
        factionId: 'aegis',
        headline: 'AEGIS REQUISITIONS ENCLAVE HYDRO-CELLS',
        description: 'Base defensive grid upgrades cause acute regional shortages in hydro-batteries.',
        effects: { batteries: 0.20 }
      }
    ],
    gridlock: [
      {
        factionId: 'gridlock',
        headline: 'GRIDLOCK SYNDICATE SMUGGLES FRESH TOXIN SUPPLY',
        description: 'Underground runners flood regional terminals with illicit chemical batches, crashing contraband prices.',
        effects: { toxins: -0.25, cyberware: 0.10 }
      },
      {
        factionId: 'gridlock',
        headline: 'CARGO HEIST: HIGH-GRADE CYBERWARE HIJACKED',
        description: 'Syndicate operatives intercept an Aegis transport, restricting civilian optical implant supply.',
        effects: { cyberware: 0.30, chips: 0.10 }
      },
      {
        factionId: 'gridlock',
        headline: 'BLACK MARKET FLOODED WITH COUNTERFEIT CHIPS',
        description: 'Cloned neural cores circulate through underworld fixers, depressing official chip values.',
        effects: { chips: -0.20 }
      }
    ],
    solaris: [
      {
        factionId: 'solaris',
        headline: 'SOLARIS CARAVAN MASSES FOR GREAT PLAINS HAUL',
        description: 'Nomad clans prepare trans-continental convoys, aggressively buying up synthetic grain supplies.',
        effects: { grain: 0.30, batteries: 0.15 }
      },
      {
        factionId: 'solaris',
        headline: 'SOLARIS DUMPS SURPLUS SOLAR POWER CELLS',
        description: 'Record desert sun yields allow nomads to offload recharged hydro-batteries into trade hubs.',
        effects: { batteries: -0.25 }
      },
      {
        factionId: 'solaris',
        headline: 'DESERT NOMADS RAID CORPORATE GRAIN SILOS',
        description: 'Wasteland skirmishes disrupt commercial food lines, increasing synthetic grain volatility.',
        effects: { grain: 0.25 }
      }
    ],
    rustworks: [
      {
        factionId: 'rustworks',
        headline: 'RUSTWORKS OVERHAULS ARC-FURNACE FOUNDRIES',
        description: 'Heavy industrial retooling requires extensive cryogenic stasis supplies for high-heat forge crews.',
        effects: { cryo: 0.35, batteries: 0.10 }
      },
      {
        factionId: 'rustworks',
        headline: 'RUSTWORKS RELEASES HARVESTED GRAIN RESERVES',
        description: 'Union hydroponic silos distribute emergency rations to industrial hubs, lowering grain costs.',
        effects: { grain: -0.20 }
      },
      {
        factionId: 'rustworks',
        headline: 'DECOMMISSIONED WARSHIPS STRIPPED FOR CRYO-PODS',
        description: 'Reclaimers harvest hundreds of functional medical pods, temporarily saturating the market.',
        effects: { cryo: -0.25 }
      }
    ],
    neuralfront: [
      {
        factionId: 'neuralfront',
        headline: 'NEURAL FRONT RELEASES OPEN-SOURCE PROCESSOR SCHEMATICS',
        description: 'Decentralized hacker networks leak military quantum designs, lowering neural chip barriers.',
        effects: { chips: -0.25 }
      },
      {
        factionId: 'neuralfront',
        headline: 'SUB-NET CYBER-ATTACK CRIPPLES SENSOR FABRICATORS',
        description: 'Targeted malware forces cleanrooms offline, causing cyberware optic prices to skyrocket.',
        effects: { cyberware: 0.35, chips: 0.15 }
      },
      {
        factionId: 'neuralfront',
        headline: 'NEURAL FRONT DISTRIBUTES ENCRYPTED COMBAT OPTICS',
        description: 'Insurgent networks smuggle targeting implants to allied fixers across multiple sectors.',
        effects: { cyberware: -0.20 }
      }
    ]
  };

  public getMultipliers(): Readonly<Record<CommodityId, number>> {
    return this.multipliers;
  }

  public getMultiplier(commodityId: CommodityId): number {
    return this.multipliers[commodityId] ?? 1.0;
  }

  public setMultiplier(commodityId: CommodityId, value: number): void {
    this.multipliers[commodityId] = Math.max(0.50, Math.min(2.50, value));
  }

  /**
   * Evaluates a random faction and executes a GOAP market action.
   * Also applies slight mean-reversion drift towards 1.0 to simulate market equilibrium.
   */
  public executeGoapStep(): GoapAction {
    // 1. Mean reversion drift towards 1.0 (5% drift per step)
    for (const cid of Object.keys(this.multipliers) as CommodityId[]) {
      const current = this.multipliers[cid];
      this.multipliers[cid] = Math.round((current + (1.0 - current) * 0.06) * 1000) / 1000;
    }

    // 2. Select random faction
    const factionIds: FactionId[] = ['aegis', 'gridlock', 'solaris', 'rustworks', 'neuralfront'];
    const selectedFaction = factionIds[Math.floor(Math.random() * factionIds.length)];

    // 3. Select action from pool
    const actions = GoapEconomySimulation.FACTION_ACTIONS[selectedFaction];
    const action = actions[Math.floor(Math.random() * actions.length)];

    // 4. Apply effects
    for (const [cid, delta] of Object.entries(action.effects) as [CommodityId, number][]) {
      const current = this.multipliers[cid] ?? 1.0;
      const next = Math.max(0.50, Math.min(2.50, current + delta));
      this.multipliers[cid] = Math.round(next * 1000) / 1000;
    }

    return action;
  }
}
