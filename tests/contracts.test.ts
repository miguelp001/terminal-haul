import { describe, it, expect } from 'vitest';
import { ContractEngine } from '../src/sim/contractEngine';
import { WORLD_NODES } from '../src/constants/nodes';
import { CourierContract } from '../src/types/contracts';
import { GameStore } from '../src/state/gameState';

describe('Procedural Courier Contracts System', () => {
  const originNode = WORLD_NODES[0];

  it('generates exactly 3 procedural contracts on docking', () => {
    const contracts = ContractEngine.generateContractsForNode(originNode, WORLD_NODES, 1.0);
    expect(contracts.length).toBe(3);

    for (const c of contracts) {
      expect(c.originNodeId).toBe(originNode.id);
      expect(c.destinationNodeId).not.toBe(originNode.id);
      expect(c.rewardCredits).toBeGreaterThanOrEqual(400);
      expect(c.rewardCredits).toBeLessThanOrEqual(1200);
      expect(c.deadlineGameDay).toBeGreaterThanOrEqual(1.0 + 2.0);
      expect(c.deadlineGameDay).toBeLessThanOrEqual(1.0 + 6.0 + 0.1);
      expect(c.status).toBe('AVAILABLE');
      expect(c.requiredQuantity).toBeGreaterThanOrEqual(1);
    }
  });

  it('detects and marks contracts as EXPIRED when deadline is passed', () => {
    const activeContract: CourierContract = {
      id: 'c1',
      originNodeId: 'node_001',
      destinationNodeId: 'node_002',
      destinationNodeName: 'Neo-Syracuse',
      destinationSector: 'northeast',
      issuingFaction: 'aegis',
      title: 'Urgent Delivery',
      description: 'Deliver goods',
      commodityId: 'grain',
      requiredQuantity: 2,
      rewardCredits: 600,
      rewardReputation: 10,
      deadlineGameDay: 3.0,
      status: 'ACTIVE',
      issuedGameDay: 1.0
    };

    // At game day 2.5: not expired
    const check1 = ContractEngine.updateContractDeadlines([activeContract], 2.5);
    expect(check1.newlyExpired.length).toBe(0);
    expect(activeContract.status).toBe('ACTIVE');

    // At game day 3.5: expired
    const check2 = ContractEngine.updateContractDeadlines([activeContract], 3.5);
    expect(check2.newlyExpired.length).toBe(1);
    expect(activeContract.status).toBe('EXPIRED');
  });

  it('fulfills contract upon arrival if player has required cargo before deadline', () => {
    const targetNodeId = 'node_002';
    const activeContract: CourierContract = {
      id: 'c2',
      originNodeId: 'node_001',
      destinationNodeId: targetNodeId,
      destinationNodeName: 'Neo-Syracuse',
      destinationSector: 'northeast',
      issuingFaction: 'neuralfront',
      title: 'Neural Core Run',
      description: 'Deliver 1 neural chip',
      commodityId: 'chips',
      requiredQuantity: 1,
      rewardCredits: 950,
      rewardReputation: 12,
      deadlineGameDay: 5.0,
      status: 'ACTIVE',
      issuedGameDay: 1.0
    };

    // Arrive with 2 chips at day 2.0
    const cargo = { grain: 0, batteries: 0, cyberware: 0, chips: 2, cryo: 0, toxins: 0 };
    const result = ContractEngine.checkContractFulfillment(
      [activeContract],
      targetNodeId,
      cargo,
      2.0
    );

    expect(result.fulfilled.length).toBe(1);
    expect(result.fulfilled[0].id).toBe('c2');
    expect(result.cargoDeductions.chips).toBe(1);
    expect(activeContract.status).toBe('COMPLETED');
  });

  it('rejects fulfillment if player arrives without required cargo', () => {
    const targetNodeId = 'node_002';
    const activeContract: CourierContract = {
      id: 'c3',
      originNodeId: 'node_001',
      destinationNodeId: targetNodeId,
      destinationNodeName: 'Neo-Syracuse',
      destinationSector: 'northeast',
      issuingFaction: 'neuralfront',
      title: 'Neural Core Run',
      description: 'Deliver 1 neural chip',
      commodityId: 'chips',
      requiredQuantity: 1,
      rewardCredits: 950,
      rewardReputation: 12,
      deadlineGameDay: 5.0,
      status: 'ACTIVE',
      issuedGameDay: 1.0
    };

    // Arrive with 0 chips
    const cargo = { grain: 0, batteries: 0, cyberware: 0, chips: 0, cryo: 0, toxins: 0 };
    const result = ContractEngine.checkContractFulfillment(
      [activeContract],
      targetNodeId,
      cargo,
      2.0
    );

    expect(result.fulfilled.length).toBe(0);
    expect(activeContract.status).toBe('ACTIVE');
  });

  it('GameStore loads consignment cargo on accept and delivers at target', () => {
    const store = new GameStore();
    const state = store.getState();

    // Prepare mock available contract
    const contract: CourierContract = {
      id: 'test_c_100',
      originNodeId: state.currentLocationId,
      destinationNodeId: 'node_005',
      destinationNodeName: 'Neo-Detroit',
      destinationSector: 'midwest',
      issuingFaction: 'aegis',
      title: 'Aegis Test Consignment',
      description: 'Deliver 2x Synthetic Grain',
      commodityId: 'grain',
      requiredQuantity: 2,
      rewardCredits: 750,
      rewardReputation: 10,
      deadlineGameDay: 10.0,
      status: 'AVAILABLE',
      issuedGameDay: 1.0
    };

    state.availableContracts.push(contract);
    const initialGrain = state.cargo.grain;
    const initialCredits = state.credits;

    // Accept contract -> should load 2x grain
    const accepted = store.acceptContract('test_c_100');
    expect(accepted).toBe(true);
    expect(store.getState().cargo.grain).toBe(initialGrain + 2);
    expect(store.getState().activeContracts.length).toBe(1);

    // Cannot deliver if at wrong node
    const wrongNodeDeliver = store.deliverContract('test_c_100');
    expect(wrongNodeDeliver).toBe(false);

    // Move to target node
    // @ts-expect-error test location override
    store.state.currentLocationId = 'node_005';

    // Deliver contract
    const delivered = store.deliverContract('test_c_100');
    expect(delivered).toBe(true);
    expect(store.getState().cargo.grain).toBe(initialGrain); // 2 deducted
    expect(store.getState().credits).toBe(initialCredits + 750); // payout awarded
    expect(store.getState().completedContractsCount).toBe(1);
    expect(store.getState().activeContracts.length).toBe(0);
  });
});
