import { WorldNode, CommodityId, FactionId } from '../types';
import { CourierContract } from '../types/contracts';
import { FACTIONS, COMMODITIES } from '../constants/worldData';

export class ContractEngine {
  /**
   * Generates 3 procedural contracts for the given current node and game time.
   */
  public static generateContractsForNode(
    currentNode: WorldNode,
    allNodes: WorldNode[],
    currentGameDay: number
  ): CourierContract[] {
    const contracts: CourierContract[] = [];
    // Potential destinations: any node other than current
    const candidateNodes = allNodes.filter((n) => n.id !== currentNode.id);

    if (candidateNodes.length === 0) return [];

    const commodities: CommodityId[] = ['grain', 'batteries', 'cyberware', 'chips', 'cryo', 'toxins'];

    for (let i = 0; i < 3; i++) {
      // Pick random destination
      const destIndex = Math.floor(Math.random() * candidateNodes.length);
      const destNode = candidateNodes[destIndex];

      // Issuing faction: either current node's dominant faction or destination's
      const factionId: FactionId = Math.random() < 0.6 
        ? currentNode.dominantFaction 
        : destNode.dominantFaction;

      // Desired goods favored by faction or random commodity
      const factionDemands = FACTIONS[factionId]?.demandedGoods || [];
      const commodityId: CommodityId = factionDemands.length > 0 && Math.random() < 0.7
        ? factionDemands[Math.floor(Math.random() * factionDemands.length)]
        : commodities[Math.floor(Math.random() * commodities.length)];

      const def = COMMODITIES[commodityId];
      // Required quantity 1 to 3 units (or 1 for heavy cryo)
      const maxUnits = commodityId === 'cryo' ? 1 : commodityId === 'chips' ? 4 : 3;
      const quantity = Math.floor(Math.random() * maxUnits) + 1;

      // Reward between 400 and 1200 Credits (scaled with commodity value and quantity)
      const baseReward = 400 + Math.floor(Math.random() * 801); // 400 to 1200
      const rewardCredits = Math.min(1200, Math.max(400, baseReward));

      // Deadline between 2 and 6 Game Days
      const durationDays = Math.round((2.0 + Math.random() * 4.0) * 10) / 10; // 2.0 to 6.0 days
      const deadlineGameDay = Math.round((currentGameDay + durationDays) * 100) / 100;

      const title = `${FACTIONS[factionId]?.name.split(' ')[0]} Consignment: ${def.name}`;
      const description = `Deliver ${quantity}x ${def.name} to ${destNode.name} [${destNode.sector.toUpperCase()}].`;

      contracts.push({
        id: `contract_${Date.now()}_${i}_${Math.floor(Math.random() * 1000)}`,
        originNodeId: currentNode.id,
        destinationNodeId: destNode.id,
        destinationNodeName: destNode.name,
        destinationSector: destNode.sector,
        issuingFaction: factionId,
        title,
        description,
        commodityId,
        requiredQuantity: quantity,
        rewardCredits,
        rewardReputation: Math.floor(Math.random() * 10) + 6, // +6 to +15 rep
        deadlineGameDay,
        status: 'AVAILABLE',
        issuedGameDay: currentGameDay
      });
    }

    return contracts;
  }

  /**
   * Updates deadlines on active contracts. Marks contracts past deadline as EXPIRED.
   */
  public static updateContractDeadlines(
    activeContracts: CourierContract[],
    currentGameDay: number
  ): { newlyExpired: CourierContract[] } {
    const newlyExpired: CourierContract[] = [];

    for (const contract of activeContracts) {
      if (contract.status === 'ACTIVE') {
        const remaining = Math.round((contract.deadlineGameDay - currentGameDay) * 100) / 100;
        contract.daysRemaining = Math.max(0, remaining);

        if (currentGameDay > contract.deadlineGameDay) {
          contract.status = 'EXPIRED';
          newlyExpired.push(contract);
        }
      }
    }

    return { newlyExpired };
  }

  /**
   * Evaluates if active contracts can be fulfilled upon arriving at a destination.
   */
  public static checkContractFulfillment(
    activeContracts: CourierContract[],
    arrivedNodeId: string,
    playerCargo: Record<CommodityId, number>,
    currentGameDay: number
  ): { fulfilled: CourierContract[]; cargoDeductions: Partial<Record<CommodityId, number>> } {
    const fulfilled: CourierContract[] = [];
    const cargoDeductions: Partial<Record<CommodityId, number>> = {};

    // Temporary cargo tracking to handle multiple contracts requesting same commodity
    const workingCargo = { ...playerCargo };

    for (const contract of activeContracts) {
      if (contract.status !== 'ACTIVE') continue;

      if (contract.destinationNodeId === arrivedNodeId) {
        // Check if within deadline
        if (currentGameDay <= contract.deadlineGameDay) {
          const available = workingCargo[contract.commodityId] || 0;
          if (available >= contract.requiredQuantity) {
            workingCargo[contract.commodityId] -= contract.requiredQuantity;
            cargoDeductions[contract.commodityId] = (cargoDeductions[contract.commodityId] || 0) + contract.requiredQuantity;
            contract.status = 'COMPLETED';
            fulfilled.push(contract);
          }
        }
      }
    }

    return { fulfilled, cargoDeductions };
  }
}
