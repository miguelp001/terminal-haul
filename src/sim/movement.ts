import { WorldNode, ActiveTransit } from '../types';

/**
 * Calculates distance in kilometers between two nodes.
 * Uses the Haversine Great-Circle formula when real-world geographic coordinates [lng, lat]
 * are present, falling back to Euclidean grid math for legacy/mock test nodes.
 */
export function calculateDistanceKm(nodeA: WorldNode, nodeB: WorldNode): number {
  if (
    typeof nodeA.lng === 'number' &&
    typeof nodeA.lat === 'number' &&
    typeof nodeB.lng === 'number' &&
    typeof nodeB.lat === 'number'
  ) {
    const R = 6371; // Earth mean radius in km
    const dLat = (nodeB.lat - nodeA.lat) * (Math.PI / 180);
    const dLng = (nodeB.lng - nodeA.lng) * (Math.PI / 180);
    const lat1 = nodeA.lat * (Math.PI / 180);
    const lat2 = nodeB.lat * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.max(15, Math.round(R * c));
  }

  const dx = nodeB.x - nodeA.x;
  const dy = nodeB.y - nodeA.y;
  return Math.max(15, Math.round(Math.sqrt(dx * dx + dy * dy) * 45));
}

/**
 * Calculates base travel duration in seconds with speed rating and hull integrity attenuation.
 * Clamps duration to a minimum of 10 seconds.
 */
export function calculateTravelDurationSeconds(
  distanceKm: number,
  speedRating: number = 1.0,
  hullIntegrity: number = 100
): number {
  const hullFactor = Math.max(0.4, Math.min(1.0, hullIntegrity / 100));
  const effectiveSpeed = Math.max(0.2, (speedRating || 1.0) * hullFactor);
  return Math.max(10, Math.round(distanceKm / (15 * effectiveSpeed)));
}

/**
 * Manages convoy movement and transit state updates.
 */
export class MovementEngine {
  /**
   * Initializes a new transit route between origin and destination.
   */
  public static initiateTransit(
    origin: WorldNode,
    destination: WorldNode,
    currentGameDay: number,
    speedRating: number = 1.0,
    hullIntegrity: number = 100
  ): ActiveTransit {
    const distanceKm = calculateDistanceKm(origin, destination);
    const totalDurationSeconds = calculateTravelDurationSeconds(distanceKm, speedRating, hullIntegrity);

    return {
      originId: origin.id,
      destinationId: destination.id,
      distanceKm,
      totalDurationSeconds,
      elapsedSeconds: 0,
      progressPercent: 0,
      startGameDay: currentGameDay,
      departureRealTime: Date.now()
    };
  }

  /**
   * Updates an active transit given the elapsed delta in simulation seconds.
   * In 1x mode, 1 tick = 1 sim second. In 60x mode, 1 tick = 60 sim seconds.
   * Returns true if transit completed this tick.
   */
  public static advanceTransit(transit: ActiveTransit, deltaSimSeconds: number): boolean {
    transit.elapsedSeconds = Math.min(
      transit.totalDurationSeconds,
      transit.elapsedSeconds + deltaSimSeconds
    );

    transit.progressPercent = Math.min(
      100,
      Math.round((transit.elapsedSeconds / transit.totalDurationSeconds) * 1000) / 10
    );

    return transit.elapsedSeconds >= transit.totalDurationSeconds;
  }
}
