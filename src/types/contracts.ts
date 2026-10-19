import { FactionId, CommodityId } from './index';

export type ContractStatus = 'AVAILABLE' | 'ACTIVE' | 'COMPLETED' | 'EXPIRED';

export interface CourierContract {
  id: string;
  originNodeId: string;
  destinationNodeId: string;
  destinationNodeName: string;
  destinationSector: string;
  issuingFaction: FactionId;
  title: string;
  description: string;
  commodityId: CommodityId;
  requiredQuantity: number;
  rewardCredits: number;
  rewardReputation: number;
  deadlineGameDay: number;
  daysRemaining?: number;
  status: ContractStatus;
  issuedGameDay: number;
}
