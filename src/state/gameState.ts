import { PlayerState, WorldNode, CommodityId, CoreStatKey, CoreStats } from '../types';
import type { StoryletOption } from '../types/storylet';
import type { PbtARollResult } from '../sim/pbta';
import { WORLD_NODES } from '../constants/nodes';
import { COMMODITIES } from '../constants/worldData';
import { SimulationClock } from '../sim/clock';
import { MovementEngine } from '../sim/movement';
import { RouteGraph } from '../sim/routeGraph';
import { GoapEconomySimulation } from '../sim/goap';
import { getMarketQuotesForLocation, MarketPriceQuote } from '../sim/economy';
import { NarrativeEngine } from '../sim/narrativeEngine';
import { ContractEngine } from '../sim/contractEngine';
import { PersistenceManager, SavedGamePayload } from '../sim/persistence';
import type { SharedMarketAdjustment } from '../server/types';

export type StateListener = (state: PlayerState) => void;
export type TradeListener = (
  nodeId: string,
  nodeName: string,
  commodityId: CommodityId,
  quantity: number,
  unitPrice: number,
  tradeType: 'BUY' | 'SELL'
) => void;
export type SaveListener = (exportJson: string) => void;

export class GameStore {
  private state: PlayerState;
  private clock: SimulationClock;
  private goap: GoapEconomySimulation;
  private narrativeEngine: NarrativeEngine;
  private goapDayAccumulator: number = 0;
  private hasTriggeredTransitEncounter: boolean = false;
  private nodesById: Map<string, WorldNode> = new Map();
  private listeners: Set<StateListener> = new Set();
  private tradeListeners: Set<TradeListener> = new Set();
  private saveListeners: Set<SaveListener> = new Set();
  private sharedMarketAdjustments: Record<CommodityId, SharedMarketAdjustment> | null = null;

  constructor() {
    for (const node of WORLD_NODES) {
      this.nodesById.set(node.id, node);
    }

    this.clock = new SimulationClock(1.0, 1);
    this.goap = new GoapEconomySimulation();
    this.narrativeEngine = new NarrativeEngine();

    const initialLocation = this.nodesById.get('node_002') || WORLD_NODES[0];

    this.state = {
      credits: 2500,
      cargo: {
        grain: 4,
        batteries: 2,
        cyberware: 1,
        chips: 0,
        cryo: 0,
        toxins: 0
      },
      qualities: {
        'Cyberware Level': 1,
        'Street Cred': 5,
        'Tech Literacy': 2,
        'Contraband Mastery': 0,
        'Enclave Permits': 0,
        'Heat': 0,
        'Glitch Rating': 0
      },
      stats: {
        grit: 1,
        edge: 1,
        cyber: 0,
        cool: 1
      },
      factions: {
        aegis: 10,
        gridlock: -5,
        solaris: 20,
        rustworks: 15,
        neuralfront: 0
      },
      currentLocationId: initialLocation.id,
      convoy: {
        name: 'Iron Nomad MK-IV',
        hullIntegrity: 100,
        maxHull: 100,
        maxCargoWeight: 35.0,
        currentCargoWeight: 0,
        speedRating: 1.0
      },
      transit: null,
      activeRoute: null,
      status: 'DOCKED',
      totalDistanceTraveled: 0,
      completedContractsCount: 0,
      eventLogs: [
        'SYSTEM BOOT: Terminal Haul OS v1.0.0 initialized.',
        `Docked at ${initialLocation.name} [${initialLocation.sector.toUpperCase()}]. Market feeds synchronized.`
      ],
      activeStorylet: null,
      completedStorylets: [],
      availableContracts: [],
      activeContracts: []
    };

    this.recalculateCargoWeight();

    // Check for saved state in localStorage
    const saved = PersistenceManager.loadFromLocalStorage();
    if (saved) {
      this.applySavedPayload(saved);
    } else {
      // Generate initial contracts
      this.state.availableContracts = ContractEngine.generateContractsForNode(
        initialLocation,
        WORLD_NODES,
        this.clock.getGameDays()
      );
    }

    // Hook clock ticks into simulation updates
    this.clock.addListener((deltaDay) => {
      this.handleClockTick(deltaDay);
    });
  }

  public getClock(): SimulationClock {
    return this.clock;
  }

  public getGoap(): GoapEconomySimulation {
    return this.goap;
  }

  public getNarrativeEngine(): NarrativeEngine {
    return this.narrativeEngine;
  }

  public getState(): Readonly<PlayerState> {
    return this.state;
  }

  public getNode(nodeId: string): WorldNode | undefined {
    return this.nodesById.get(nodeId);
  }

  public getAllNodes(): WorldNode[] {
    return WORLD_NODES;
  }

  public getCurrentNode(): WorldNode {
    return this.nodesById.get(this.state.currentLocationId) || WORLD_NODES[0];
  }

  public setSharedMarketAdjustments(adjustments: Record<CommodityId, SharedMarketAdjustment>): void {
    this.sharedMarketAdjustments = adjustments;
    this.notify();
  }

  public getSharedMarketAdjustments(): Record<CommodityId, SharedMarketAdjustment> | null {
    return this.sharedMarketAdjustments;
  }

  public onTradeExecuted(listener: TradeListener): () => void {
    this.tradeListeners.add(listener);
    return () => this.tradeListeners.delete(listener);
  }

  public onGameSaved(listener: SaveListener): () => void {
    this.saveListeners.add(listener);
    return () => this.saveListeners.delete(listener);
  }

  public getCurrentMarketQuotes(): Record<CommodityId, MarketPriceQuote> {
    const current = this.getCurrentNode();
    const goapMultipliers = this.goap.getMultipliers();
    const combinedMultipliers: Record<CommodityId, number> = { ...goapMultipliers };

    if (this.sharedMarketAdjustments) {
      for (const [cid, adj] of Object.entries(this.sharedMarketAdjustments) as [CommodityId, SharedMarketAdjustment][]) {
        const local = combinedMultipliers[cid] ?? 1.0;
        combinedMultipliers[cid] = Math.round(local * adj.globalDemandMultiplier * 1000) / 1000;
      }
    }

    return getMarketQuotesForLocation(
      current.sector,
      current.dominantFaction,
      this.state.factions,
      combinedMultipliers
    );
  }

  /**
   * Calculates player Net Worth = Credits + sum(Quantity(k) * P_base(k))
   */
  public calculateNetWorth(): number {
    let cargoValue = 0;
    for (const [cid, qty] of Object.entries(this.state.cargo) as [CommodityId, number][]) {
      cargoValue += qty * COMMODITIES[cid].basePrice;
    }
    return this.state.credits + cargoValue;
  }

  /**
   * Calculates career leaderboard score:
   * Score = Net Worth + (Contracts * 1500) + round(Distance / 10) + sum(max(0, Rep * 10))
   */
  public calculateCareerScore(): number {
    const netWorth = this.calculateNetWorth();
    const contractsScore = this.state.completedContractsCount * 1500;
    const distanceScore = Math.round(this.state.totalDistanceTraveled / 10);

    let factionScore = 0;
    for (const rep of Object.values(this.state.factions)) {
      if (rep > 0) {
        factionScore += rep * 10;
      }
    }

    return netWorth + contractsScore + distanceScore + factionScore;
  }

  /**
   * Returns career prestige rank based on total score adhering to spec.
   */
  public getCareerRankTitle(): string {
    const score = this.calculateCareerScore();
    if (score <= 10000) return 'Scrap Runner';
    if (score <= 25000) return 'Wasteland Courier';
    if (score <= 60000) return 'Highway Veteran';
    if (score <= 150000) return 'Syndicate Contractor';
    if (score <= 350000) return 'Master Hauler';
    return 'Continental Kingpin';
  }

  /**
   * Repairs convoy hull at docked facilities.
   * Rate: 10 Credits per 1% hull integrity.
   */
  public repairHull(): { success: boolean; message: string; repairedAmount: number; cost: number } {
    if (this.state.status === 'IN_TRANSIT') {
      return { success: false, message: 'Cannot execute chassis repairs while in transit.', repairedAmount: 0, cost: 0 };
    }
    const missing = this.state.convoy.maxHull - this.state.convoy.hullIntegrity;
    if (missing <= 0) {
      return { success: false, message: 'Chassis already at 100% structural integrity.', repairedAmount: 0, cost: 0 };
    }
    const costPerPercent = 10;
    const totalCost = missing * costPerPercent;
    if (this.state.credits < totalCost) {
      const affordablePercent = Math.floor(this.state.credits / costPerPercent);
      if (affordablePercent <= 0) {
        return { success: false, message: `Insufficient credits for hull repair (${costPerPercent} ₵ per 1% hull).`, repairedAmount: 0, cost: 0 };
      }
      const partialCost = affordablePercent * costPerPercent;
      this.state.credits -= partialCost;
      this.state.convoy.hullIntegrity += affordablePercent;
      this.addLog(`CHASSIS REPAIR: Partial repairs completed (+${affordablePercent}% hull for ${partialCost} ₵).`);
      this.autoSave();
      this.notify();
      return { success: true, message: `Repaired +${affordablePercent}% hull for ${partialCost} ₵.`, repairedAmount: affordablePercent, cost: partialCost };
    }

    this.state.credits -= totalCost;
    this.state.convoy.hullIntegrity = this.state.convoy.maxHull;
    this.addLog(`CHASSIS REPAIR: Rig restored to 100% structural integrity (-${totalCost} ₵).`);
    this.autoSave();
    this.notify();
    return { success: true, message: `Fully restored hull to 100% for ${totalCost} ₵.`, repairedAmount: missing, cost: totalCost };
  }

  /**
   * Checks if hull is critically compromised and dispatches emergency roadside stabilization.
   */
  public checkEmergencyHullSOS(): void {
    if (this.state.convoy.hullIntegrity <= 0) {
      this.state.convoy.hullIntegrity = 25; // Emergency field weld
      const fine = Math.min(this.state.credits, 200);
      this.state.credits -= fine;
      this.state.qualities.Heat = Math.min(100, (this.state.qualities.Heat || 0) + 5);
      const loc = this.getCurrentNode().name;
      this.addLog(
        `EMERGENCY SOS: Chassis breach detected! Emergency recovery tug stabilized hull at 25% near ${loc} (-${fine} ₵, +5 Heat).`
      );
      if (this.state.status === 'IN_TRANSIT') {
        this.state.status = 'DOCKED';
        this.state.transit = null;
        if (this.state.activeRoute) {
          this.state.activeRoute = null;
        }
      }
      this.autoSave();
      this.notify();
    }
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  public notify(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  public recalculateCargoWeight(): number {
    let totalWeight = 0;
    for (const [commodityId, quantity] of Object.entries(this.state.cargo)) {
      const def = COMMODITIES[commodityId as CommodityId];
      if (def) {
        totalWeight += quantity * def.weightTonnes;
      }
    }
    this.state.convoy.currentCargoWeight = Math.round(totalWeight * 10) / 10;
    return this.state.convoy.currentCargoWeight;
  }

  public addLog(message: string): void {
    const time = this.clock.formatGameTime().formatted;
    this.state.eventLogs.unshift(`[${time}] ${message}`);
    if (this.state.eventLogs.length > 60) {
      this.state.eventLogs.pop();
    }
    this.notify();
  }

  /**
   * Accepts an available courier contract and loads its consignment payload into cargo hold.
   */
  public acceptContract(contractId: string): boolean {
    const index = this.state.availableContracts.findIndex((c) => c.id === contractId);
    if (index === -1) {
      this.addLog('ERROR: Contract is no longer available.');
      return false;
    }

    const contract = this.state.availableContracts[index];
    const def = COMMODITIES[contract.commodityId];
    const payloadWeight = contract.requiredQuantity * (def ? def.weightTonnes : 1.0);
    const availableCapacity = this.state.convoy.maxCargoWeight - this.state.convoy.currentCargoWeight;

    if (payloadWeight > availableCapacity) {
      this.addLog(
        `CARGO REJECTED: Insufficient hold capacity for ${contract.title}. Requires ${payloadWeight.toFixed(1)} T (Available: ${availableCapacity.toFixed(1)} T).`
      );
      return false;
    }

    contract.status = 'ACTIVE';
    this.state.availableContracts.splice(index, 1);
    this.state.activeContracts.push(contract);

    // Load consignment cargo into rig hold
    this.state.cargo[contract.commodityId] = (this.state.cargo[contract.commodityId] || 0) + contract.requiredQuantity;
    this.recalculateCargoWeight();

    this.addLog(
      `CONTRACT ACCEPTED: ${contract.title}. Loaded ${contract.requiredQuantity}x ${def ? def.name : contract.commodityId} (${payloadWeight.toFixed(1)} T) into cargo hold. Deliver to ${contract.destinationNodeName}. Reward: ${contract.rewardCredits} ₵.`
    );
    this.autoSave();
    this.notify();
    return true;
  }

  /**
   * Requisitions and loads missing consignment payload for an already active contract into the hold.
   */
  public loadConsignmentCargo(contractId: string): boolean {
    const contract = this.state.activeContracts.find((c) => c.id === contractId);
    if (!contract) return false;

    const def = COMMODITIES[contract.commodityId];
    const owned = this.state.cargo[contract.commodityId] || 0;
    const needed = Math.max(0, contract.requiredQuantity - owned);
    if (needed === 0) return true;

    const neededWeight = needed * (def ? def.weightTonnes : 1.0);
    const availableCapacity = this.state.convoy.maxCargoWeight - this.state.convoy.currentCargoWeight;

    if (neededWeight > availableCapacity) {
      this.addLog(
        `CARGO REJECTED: Hold full. Need ${neededWeight.toFixed(1)} T to load consignment payload (Available: ${availableCapacity.toFixed(1)} T).`
      );
      return false;
    }

    this.state.cargo[contract.commodityId] = owned + needed;
    this.recalculateCargoWeight();
    this.addLog(
      `CONSIGNMENT LOADED: Requisitioned ${needed}x ${def ? def.name : contract.commodityId} (${neededWeight.toFixed(1)} T) into cargo hold for [${contract.title}].`
    );
    this.autoSave();
    this.notify();
    return true;
  }

  /**
   * Delivers an active contract while docked at its destination node.
   */
  public deliverContract(contractId: string): boolean {
    const contract = this.state.activeContracts.find((c) => c.id === contractId);
    if (!contract) {
      this.addLog('ERROR: Contract not found in active manifest.');
      return false;
    }

    if (contract.destinationNodeId !== this.state.currentLocationId) {
      this.addLog(
        `DELIVERY FAILED: You are docked at ${this.getCurrentNode().name}, but destination is ${contract.destinationNodeName}.`
      );
      return false;
    }

    if (this.clock.getGameDays() > contract.deadlineGameDay) {
      contract.status = 'EXPIRED';
      this.addLog(`DELIVERY REJECTED: Contract deadline expired on Day ${contract.deadlineGameDay.toFixed(1)}.`);
      this.autoSave();
      this.notify();
      return false;
    }

    const def = COMMODITIES[contract.commodityId];
    const owned = this.state.cargo[contract.commodityId] || 0;
    if (owned < contract.requiredQuantity) {
      this.addLog(
        `DELIVERY FAILED: Missing cargo payload (${owned}/${contract.requiredQuantity} ${def?.name || contract.commodityId} in hold).`
      );
      return false;
    }

    // Process delivery fulfillment
    this.state.cargo[contract.commodityId] = owned - contract.requiredQuantity;
    this.recalculateCargoWeight();

    this.state.credits += contract.rewardCredits;
    const fid = contract.issuingFaction;
    this.state.factions[fid] = Math.min(100, (this.state.factions[fid] || 0) + contract.rewardReputation);
    this.state.completedContractsCount++;
    contract.status = 'COMPLETED';

    this.state.activeContracts = this.state.activeContracts.filter((c) => c.id !== contractId);

    this.addLog(
      `CONTRACT DELIVERED: ${contract.title}! Payout: +${contract.rewardCredits} ₵ | Rep: +${contract.rewardReputation} [${fid.toUpperCase()}]`
    );
    this.autoSave();
    this.notify();
    return true;
  }

  /**
   * Abandons an active contract.
   */
  public abandonContract(contractId: string): boolean {
    const index = this.state.activeContracts.findIndex((c) => c.id === contractId);
    if (index === -1) return false;

    const contract = this.state.activeContracts[index];
    this.state.activeContracts.splice(index, 1);

    // Return or forfeit the consignment cargo
    const owned = this.state.cargo[contract.commodityId] || 0;
    const toDeduct = Math.min(owned, contract.requiredQuantity);
    this.state.cargo[contract.commodityId] = owned - toDeduct;
    this.recalculateCargoWeight();

    const fid = contract.issuingFaction;
    this.state.factions[fid] = Math.max(-100, (this.state.factions[fid] || 0) - 4);
    this.addLog(`CONTRACT ABANDONED: ${contract.title}. Consignment returned. Rep: -4 [${fid.toUpperCase()}].`);
    this.autoSave();
    this.notify();
    return true;
  }

  /**
   * Selects and resolves an option for the active storylet, executing PbtA roll if statRoll is present.
   */
  public selectStoryletOption(
    optionId: string,
    diceOverride?: [number, number]
  ): {
    success: boolean;
    option?: StoryletOption;
    changes?: string[];
    message?: string;
    rollResult?: PbtARollResult;
    effectText?: string;
  } {
    const storylet = this.state.activeStorylet;
    if (!storylet) {
      return { success: false, message: 'No active storylet.' };
    }

    const option = storylet.options.find((o) => o.id === optionId);
    if (!option) {
      return { success: false, message: 'Option not found.' };
    }

    // Check requirement
    const reqCheck = this.narrativeEngine.checkRequirement(
      option.reqs,
      this.state,
      this.getCurrentNode()
    );
    if (!reqCheck.meets) {
      return {
        success: false,
        message: `Requirements not met: ${reqCheck.missing.join(', ')}`
      };
    }

    // Resolve move via NarrativeEngine (applies PbtA if statRoll is present)
    const resolution = this.narrativeEngine.resolveStoryletOption(
      option,
      this.state,
      diceOverride
    );

    // Apply rewards
    const changes = this.narrativeEngine.applyOptionRewards(
      resolution.rewards,
      this.state,
      () => this.recalculateCargoWeight()
    );

    this.addLog(`NARRATIVE [${storylet.title}]: ${option.label}`);
    if (resolution.rollResult) {
      this.addLog(`PbtA ROLL: ${resolution.rollResult.breakdownText}`);
    }
    this.addLog(`OUTCOME: ${resolution.effectText}`);
    if (changes.length > 0) {
      this.addLog(`CONSEQUENCES: ${changes.join(' | ')}`);
    }

    // Storylet resolved
    if (storylet.repeatable === false) {
      if (!this.state.completedStorylets) {
        this.state.completedStorylets = [];
      }
      if (!this.state.completedStorylets.includes(storylet.id)) {
        this.state.completedStorylets.push(storylet.id);
      }
    }
    this.state.activeStorylet = null;
    this.checkEmergencyHullSOS();
    this.autoSave();
    this.notify();

    return {
      success: true,
      option,
      changes,
      rollResult: resolution.rollResult,
      effectText: resolution.effectText
    };
  }

  public dismissStorylet(): void {
    this.state.activeStorylet = null;
    this.notify();
    if (this.state.activeRoute?.autoAdvance && this.state.status === 'DOCKED') {
      this.resumeActiveRoute();
    }
  }

  /**
   * Executes commodity purchase.
   */
  public buyCommodity(commodityId: CommodityId, quantity: number): { success: boolean; message: string } {
    if (this.state.status !== 'DOCKED') {
      return { success: false, message: 'Trading disabled while convoy is in transit.' };
    }
    if (quantity <= 0) {
      return { success: false, message: 'Quantity must be at least 1 unit.' };
    }

    const quotes = this.getCurrentMarketQuotes();
    const quote = quotes[commodityId];
    const def = COMMODITIES[commodityId];
    const totalCost = quote.buyPrice * quantity;

    if (this.state.credits < totalCost) {
      return { success: false, message: `Insufficient credits. Requires ${totalCost} ₵.` };
    }

    const addedWeight = def.weightTonnes * quantity;
    const projectedWeight = this.state.convoy.currentCargoWeight + addedWeight;
    if (projectedWeight > this.state.convoy.maxCargoWeight) {
      return {
        success: false,
        message: `Cargo hold exceeded! Exceeds maximum ${this.state.convoy.maxCargoWeight} T capacity.`
      };
    }

    // Process transaction
    this.state.credits -= totalCost;
    this.state.cargo[commodityId] = (this.state.cargo[commodityId] || 0) + quantity;
    this.recalculateCargoWeight();

    const logMsg = `TRADE: Purchased ${quantity}x ${def.name} for ${totalCost} ₵ (@${quote.buyPrice} ₵/ea).`;
    this.addLog(logMsg);
    this.autoSave();
    this.notify();

    for (const listener of this.tradeListeners) {
      listener(this.state.currentLocationId, this.getCurrentNode().name, commodityId, quantity, quote.buyPrice, 'BUY');
    }

    return { success: true, message: logMsg };
  }

  /**
   * Executes commodity sale.
   */
  public sellCommodity(commodityId: CommodityId, quantity: number): { success: boolean; message: string } {
    if (this.state.status !== 'DOCKED') {
      return { success: false, message: 'Trading disabled while convoy is in transit.' };
    }
    if (quantity <= 0) {
      return { success: false, message: 'Quantity must be at least 1 unit.' };
    }

    const owned = this.state.cargo[commodityId] || 0;
    if (owned < quantity) {
      return { success: false, message: `Insufficient inventory. You only have ${owned} units.` };
    }

    const quotes = this.getCurrentMarketQuotes();
    const quote = quotes[commodityId];
    const def = COMMODITIES[commodityId];
    const totalRevenue = quote.sellPrice * quantity;

    // Process transaction
    this.state.cargo[commodityId] -= quantity;
    this.state.credits += totalRevenue;
    this.recalculateCargoWeight();

    const logMsg = `TRADE: Sold ${quantity}x ${def.name} for +${totalRevenue} ₵ (@${quote.sellPrice} ₵/ea).`;
    this.addLog(logMsg);
    this.autoSave();
    this.notify();

    for (const listener of this.tradeListeners) {
      listener(this.state.currentLocationId, this.getCurrentNode().name, commodityId, quantity, quote.sellPrice, 'SELL');
    }

    return { success: true, message: logMsg };
  }

  /**
   * Dispatches the convoy towards a target destination.
   * If the destination is not directly connected, plots a multi-hop route
   * with the minimum number of intermediate stops (BFS shortest-hop).
   */
  public departTo(destinationId: string, autoAdvance: boolean = true): boolean {
    if (this.state.status === 'IN_TRANSIT') {
      this.addLog('ERROR: Convoy is already in transit.');
      return false;
    }

    if (destinationId === this.state.currentLocationId) {
      this.addLog('ERROR: Destination matches current location.');
      return false;
    }

    const current = this.getCurrentNode();
    const destination = this.getNode(destinationId);
    if (!destination) {
      this.addLog(`ERROR: Unknown destination node ${destinationId}`);
      return false;
    }

    // Plot shortest-hop route through continental highway network
    const routeGraph = RouteGraph.getInstance(WORLD_NODES);
    const route = routeGraph.findShortestHopRoute(current.id, destinationId);

    if (!route || route.length < 2) {
      this.addLog(`ERROR: No connected highway corridor to ${destination.name}.`);
      return false;
    }

    // Set up active multi-hop route
    this.state.activeRoute = {
      finalDestinationId: destinationId,
      routeNodeIds: route.map((n) => n.id),
      currentLegIndex: 1,
      autoAdvance
    };

    const firstWaypoint = route[1];
    const transit = MovementEngine.initiateTransit(
      current,
      firstWaypoint,
      this.clock.getGameDays(),
      this.state.convoy.speedRating,
      this.state.convoy.hullIntegrity
    );
    transit.legIndex = 1;
    transit.totalLegs = route.length - 1;
    transit.finalDestinationId = destinationId;

    this.state.transit = transit;
    this.state.status = 'IN_TRANSIT';
    this.hasTriggeredTransitEncounter = false;

    if (route.length === 2) {
      this.addLog(
        `DISPATCH: Direct highway link to ${destination.name}. Distance: ${transit.distanceKm} km. Est duration: ${transit.totalDurationSeconds}s.`
      );
    } else {
      this.addLog(
        `EXPEDITION DISPATCH: Journey to ${destination.name} planned across ${route.length - 1} waypoints (Fewest Stops). Leg 1/${route.length - 1}: En route to ${firstWaypoint.name} (${transit.distanceKm} km).`
      );
    }

    this.autoSave();
    this.notify();
    return true;
  }

  private handleClockTick(deltaDay: number): void {
    // If an interactive storylet is awaiting player action, pause simulation transit
    if (this.state.activeStorylet) {
      return;
    }

    // 1. Advance transit if moving
    if (this.state.status === 'IN_TRANSIT' && this.state.transit) {
      const simSecondsPerTick = this.clock.getSpeedMultiplier();
      const completed = MovementEngine.advanceTransit(this.state.transit, simSecondsPerTick);

      // Check random transit encounter at ~45-55% progress
      if (!this.hasTriggeredTransitEncounter && this.state.transit.progressPercent >= 45) {
        this.hasTriggeredTransitEncounter = true;
        if (Math.random() < 0.50 && !this.state.activeStorylet) {
          const encounter = this.narrativeEngine.rollStorylet(
            this.state,
            this.getCurrentNode(),
            'TRANSIT_ENCOUNTER'
          );
          if (encounter) {
            this.state.activeStorylet = encounter;
            this.addLog(`INCIDENT ALERT: Encounter detected along highway corridor.`);
          }
        }
      }

      if (completed) {
        this.resolveArrival();
      } else {
        this.notify();
      }
    }

    // 2. Check active contract deadlines
    const deadlineResult = ContractEngine.updateContractDeadlines(
      this.state.activeContracts,
      this.clock.getGameDays()
    );
    for (const expired of deadlineResult.newlyExpired) {
      this.addLog(`CONTRACT EXPIRED: ${expired.title} missed deadline!`);
    }

    // 3. GOAP Faction Step: trigger every ~0.05 Game Days
    this.goapDayAccumulator += deltaDay;
    if (this.goapDayAccumulator >= 0.05) {
      this.goapDayAccumulator -= 0.05;
      const action = this.goap.executeGoapStep();
      this.addLog(`[MARKET INTEL] ${action.headline}: ${action.description}`);
      this.notify();
    }
  }

  private resolveArrival(): void {
    if (!this.state.transit) return;

    const arrivedNode = this.getNode(this.state.transit.destinationId);
    const distance = this.state.transit.distanceKm;

    this.state.currentLocationId = this.state.transit.destinationId;
    this.state.totalDistanceTraveled += distance;
    this.state.transit = null;
    this.state.status = 'DOCKED';

    const nodeName = arrivedNode ? arrivedNode.name : 'Unknown Enclave';
    const activeRoute = this.state.activeRoute;
    const isMultiLeg = activeRoute && activeRoute.routeNodeIds.length > 2;
    const isFinalLeg = !activeRoute || activeRoute.currentLegIndex >= activeRoute.routeNodeIds.length - 1;

    if (!isMultiLeg || isFinalLeg) {
      this.addLog(`DOCKING COMPLETE: Safely arrived at destination ${nodeName}. +${distance} km logged.`);
    } else {
      const finalDest = this.getNode(activeRoute.finalDestinationId);
      const finalName = finalDest ? finalDest.name : 'Target';
      this.addLog(
        `WAYPOINT REACHED: Safely arrived at ${nodeName} (Stop ${activeRoute.currentLegIndex} of ` +
        `${activeRoute.routeNodeIds.length - 1} en route to ${finalName}). +${distance} km logged.`
      );
    }

    // 1. Check Courier Contracts Fulfillment
    const fulfillment = ContractEngine.checkContractFulfillment(
      this.state.activeContracts,
      this.state.currentLocationId,
      this.state.cargo,
      this.clock.getGameDays()
    );

    for (const completedContract of fulfillment.fulfilled) {
      this.state.credits += completedContract.rewardCredits;
      const fid = completedContract.issuingFaction;
      this.state.factions[fid] = Math.min(100, (this.state.factions[fid] || 0) + completedContract.rewardReputation);
      this.state.completedContractsCount++;

      this.addLog(
        `CONTRACT DELIVERED: ${completedContract.title}! Payout: +${completedContract.rewardCredits} ₵ | Rep: +${completedContract.rewardReputation} [${fid.toUpperCase()}]`
      );
    }

    // Deduct cargo delivered
    for (const [cid, qty] of Object.entries(fulfillment.cargoDeductions) as [CommodityId, number][]) {
      this.state.cargo[cid] = Math.max(0, (this.state.cargo[cid] || 0) - qty);
    }
    this.recalculateCargoWeight();

    // Check if any active contracts destined for this node could not be delivered
    for (const contract of this.state.activeContracts) {
      if (contract.destinationNodeId === this.state.currentLocationId && contract.status === 'ACTIVE') {
        const def = COMMODITIES[contract.commodityId];
        const owned = this.state.cargo[contract.commodityId] || 0;
        if (this.clock.getGameDays() > contract.deadlineGameDay) {
          contract.status = 'EXPIRED';
          this.addLog(
            `CONTRACT EXPIRED: [${contract.title}] missed delivery deadline (Expired Day ${contract.deadlineGameDay.toFixed(1)}).`
          );
        } else if (owned < contract.requiredQuantity) {
          this.addLog(
            `CONTRACT NOTICE: Arrived at ${nodeName} for [${contract.title}], but payload missing (${owned}/${contract.requiredQuantity} ${def?.name || contract.commodityId} in hold). Load payload at Dock Board to deliver.`
          );
        }
      }
    }

    // Clean up finished contracts from active list
    this.state.activeContracts = this.state.activeContracts.filter(
      (c) => c.status === 'ACTIVE'
    );

    // If a consignment was delivered, pause automatic route advance to let the player manage dock telemetry
    if (fulfillment.fulfilled.length > 0 && activeRoute) {
      activeRoute.autoAdvance = false;
      this.addLog(`EXPEDITION PAUSED: Consignment delivered at ${nodeName}. Review contracts and dispatch when ready.`);
    }

    // 2. High-security Enclave Permit verification (Security Level 4+)
    if (arrivedNode && arrivedNode.securityLevel >= 4) {
      const permits = this.state.qualities['Enclave Permits'] || 0;
      if (permits > 0) {
        this.addLog(`ENCLAVE CLEARANCE: Corporate Enclave Permit verified. Security checkpoint fee waived at ${nodeName}.`);
      } else {
        const entryToll = 75;
        if (this.state.credits >= entryToll) {
          this.state.credits -= entryToll;
          this.addLog(`SECURITY CHECKPOINT: Paid ${entryToll} ₵ corporate entry toll at ${nodeName} (No Enclave Permit on file).`);
        } else {
          this.state.qualities.Heat = Math.min(100, (this.state.qualities.Heat || 0) + 2);
          this.addLog(`SECURITY CITATION: Unable to pay corporate entry toll at ${nodeName}. Security citation issued (+2 Heat).`);
        }
      }
    }

    // 3. Generate 3 fresh contracts for newly arrived location
    if (arrivedNode) {
      this.state.availableContracts = ContractEngine.generateContractsForNode(
        arrivedNode,
        WORLD_NODES,
        this.clock.getGameDays()
      );
    }

    // 4. Roll docking storylet check
    const hasContraband = (this.state.cargo.toxins || 0) > 0;
    const highHeat = (this.state.qualities.Heat || 0) >= 10;
    const shouldRollEvent = hasContraband || highHeat || Math.random() < 0.40;

    if (shouldRollEvent && arrivedNode && !this.state.activeStorylet) {
      const storylet = this.narrativeEngine.rollStorylet(
        this.state,
        arrivedNode,
        'DOCK'
      );
      if (storylet) {
        this.state.activeStorylet = storylet;
        this.addLog(`ENCLAVE EVENT: Docking protocol interrupted by [${storylet.title}].`);
      }
    }

    // 5. Handle Route Continuation
    if (activeRoute && !isFinalLeg) {
      activeRoute.currentLegIndex++;
      const nextNodeId = activeRoute.routeNodeIds[activeRoute.currentLegIndex];
      const nextNode = this.getNode(nextNodeId);

      // If auto-advance is enabled and NO storylet interrupted the convoy:
      if (activeRoute.autoAdvance && !this.state.activeStorylet && nextNode && arrivedNode) {
        const nextTransit = MovementEngine.initiateTransit(
          arrivedNode,
          nextNode,
          this.clock.getGameDays(),
          this.state.convoy.speedRating,
          this.state.convoy.hullIntegrity
        );
        nextTransit.legIndex = activeRoute.currentLegIndex;
        nextTransit.totalLegs = activeRoute.routeNodeIds.length - 1;
        nextTransit.finalDestinationId = activeRoute.finalDestinationId;

        this.state.transit = nextTransit;
        this.state.status = 'IN_TRANSIT';
        this.hasTriggeredTransitEncounter = false;

        this.addLog(
          `EXPEDITION CONTINUING: Departing ${nodeName} for ${nextNode.name} (Leg ${activeRoute.currentLegIndex}/` +
          `${activeRoute.routeNodeIds.length - 1}).`
        );
      }
    } else if (activeRoute && isFinalLeg) {
      this.state.activeRoute = null;
    }

    this.autoSave();
    this.notify();
  }

  /**
   * Resumes travel to the next waypoint in the active route if currently docked.
   */
  public resumeActiveRoute(): boolean {
    if (this.state.status === 'IN_TRANSIT') return false;
    if (!this.state.activeRoute) return false;

    const { routeNodeIds, currentLegIndex, finalDestinationId } = this.state.activeRoute;
    if (currentLegIndex >= routeNodeIds.length) {
      this.state.activeRoute = null;
      return false;
    }

    const current = this.getCurrentNode();
    const nextNodeId = routeNodeIds[currentLegIndex];
    const nextNode = this.getNode(nextNodeId);
    if (!nextNode) return false;

    const transit = MovementEngine.initiateTransit(
      current,
      nextNode,
      this.clock.getGameDays(),
      this.state.convoy.speedRating,
      this.state.convoy.hullIntegrity
    );
    transit.legIndex = currentLegIndex;
    transit.totalLegs = routeNodeIds.length - 1;
    transit.finalDestinationId = finalDestinationId;

    this.state.transit = transit;
    this.state.status = 'IN_TRANSIT';
    this.hasTriggeredTransitEncounter = false;

    this.addLog(
      `RESUMING EXPEDITION: Departing ${current.name} for ${nextNode.name} (Leg ${currentLegIndex}/` +
      `${routeNodeIds.length - 1}).`
    );

    this.autoSave();
    this.notify();
    return true;
  }

  /**
   * Cancels the currently planned multi-leg route, remaining stationed at the current node.
   */
  public cancelRoute(): void {
    if (this.state.activeRoute) {
      const finalDest = this.getNode(this.state.activeRoute.finalDestinationId);
      const name = finalDest ? finalDest.name : 'Target';
      this.state.activeRoute = null;
      this.addLog(`EXPEDITION ABORTED: Route to ${name} cleared. Convoy stationed at ${this.getCurrentNode().name}.`);
      this.autoSave();
      this.notify();
    }
  }

  /**
   * Toggles auto-advancing across waypoints in active route.
   */
  public setAutoAdvance(enabled: boolean): void {
    if (this.state.activeRoute) {
      this.state.activeRoute.autoAdvance = enabled;
      this.notify();
    }
  }

  /**
   * Computes the shortest-hop route from current location to target destination.
   */
  public getRouteForDestination(destinationId: string): WorldNode[] | null {
    const routeGraph = RouteGraph.getInstance(WORLD_NODES);
    return routeGraph.findShortestHopRoute(this.state.currentLocationId, destinationId);
  }

  // Persistence methods
  public autoSave(): void {
    PersistenceManager.saveToLocalStorage(
      this.state,
      this.clock.getGameDays(),
      this.state.activeContracts
    );
    const json = this.exportSave();
    for (const listener of this.saveListeners) {
      listener(json);
    }
  }

  public saveGame(): boolean {
    const ok = PersistenceManager.saveToLocalStorage(
      this.state,
      this.clock.getGameDays(),
      this.state.activeContracts
    );
    if (ok) {
      this.addLog('SYSTEM: Game state saved to localStorage.');
      const json = this.exportSave();
      for (const listener of this.saveListeners) {
        listener(json);
      }
    }
    return ok;
  }

  public loadGame(): boolean {
    const payload = PersistenceManager.loadFromLocalStorage();
    if (!payload) {
      this.addLog('SYSTEM: No valid save state found.');
      return false;
    }
    this.applySavedPayload(payload);
    this.addLog('SYSTEM: Saved game state restored.');
    this.notify();
    return true;
  }

  public resetGame(): void {
    PersistenceManager.clearSave();
    const initialLocation = this.nodesById.get('node_002') || WORLD_NODES[0];
    this.clock.setGameDays(1.0);
    this.clock.setSpeedMultiplier(1);

    this.state = {
      credits: 2500,
      cargo: { grain: 4, batteries: 2, cyberware: 1, chips: 0, cryo: 0, toxins: 0 },
      qualities: {
        'Cyberware Level': 1,
        'Street Cred': 5,
        'Tech Literacy': 2,
        'Contraband Mastery': 0,
        'Enclave Permits': 0,
        'Heat': 0,
        'Glitch Rating': 0
      },
      stats: {
        grit: 1,
        edge: 1,
        cyber: 0,
        cool: 1
      },
      factions: { aegis: 10, gridlock: -5, solaris: 20, rustworks: 15, neuralfront: 0 },
      currentLocationId: initialLocation.id,
      convoy: {
        name: 'Iron Nomad MK-IV',
        hullIntegrity: 100,
        maxHull: 100,
        maxCargoWeight: 35.0,
        currentCargoWeight: 0,
        speedRating: 1.0
      },
      transit: null,
      activeRoute: null,
      status: 'DOCKED',
      totalDistanceTraveled: 0,
      completedContractsCount: 0,
      eventLogs: ['SYSTEM RESET: Convoy profile re-initialized.'],
      activeStorylet: null,
      completedStorylets: [],
      availableContracts: ContractEngine.generateContractsForNode(initialLocation, WORLD_NODES, 1.0),
      activeContracts: []
    };
    this.recalculateCargoWeight();
    this.notify();
  }

  public getStats(): CoreStats {
    return { ...this.state.stats };
  }

  public modifyStat(key: CoreStatKey, delta: number): void {
    const cur = this.state.stats[key] ?? 0;
    const next = Math.max(-2, Math.min(4, cur + delta));
    this.state.stats[key] = next;
    this.addLog(`STAT ADJUSTMENT: ${key.toUpperCase()} set to ${next >= 0 ? '+' : ''}${next}.`);
    this.autoSave();
    this.notify();
  }

  public exportSave(): string {
    return PersistenceManager.exportSaveJson(
      this.state,
      this.clock.getGameDays(),
      this.state.activeContracts
    );
  }

  public importSave(json: string): boolean {
    const payload = PersistenceManager.validateAndParseSave(json);
    if (!payload) {
      this.addLog('ERROR: Invalid save JSON file format.');
      return false;
    }
    this.applySavedPayload(payload);
    this.autoSave();
    this.addLog('SYSTEM: External save file imported successfully.');
    this.notify();
    return true;
  }

  private applySavedPayload(payload: SavedGamePayload): void {
    this.state.credits = payload.credits;
    this.state.cargo = { ...payload.cargo };
    this.state.qualities = { ...payload.qualities };
    this.state.stats = payload.stats ? { ...payload.stats } : { grit: 1, edge: 1, cyber: 0, cool: 1 };
    this.state.factions = { ...payload.factions };
    this.state.currentLocationId = payload.currentLocation;
    this.state.totalDistanceTraveled = payload.totalDistanceTraveled || 0;
    this.state.completedContractsCount = payload.completedContractsCount || 0;
    this.state.eventLogs = payload.eventLogs || [];
    this.state.activeContracts = payload.activeContracts || [];
    this.state.completedStorylets = payload.completedStorylets ? [...payload.completedStorylets] : [];
    this.state.activeRoute = payload.activeRoute || null;
    if (payload.convoy) {
      this.state.convoy = { ...payload.convoy };
    }
    this.clock.setGameDays(payload.gameDays || 1.0);
    this.recalculateCargoWeight();

    // Ensure available contracts exist
    const current = this.getCurrentNode();
    this.state.availableContracts = ContractEngine.generateContractsForNode(
      current,
      WORLD_NODES,
      this.clock.getGameDays()
    );
  }
}

export const gameStore = new GameStore();
