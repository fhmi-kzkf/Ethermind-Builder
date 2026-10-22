/**
 * When each running app was last visited, and how busy the gateway has been. Kept in memory: after a restart every app
 * counts as visited at that moment, which only delays its sleep by one idle period.
 */
const lastSeen = new Map<string, number>();

export const gatewayStats = { requests: 0, wakes: 0, wakeFailures: 0, rateLimited: 0, notFound: 0, idleStopped: 0, evicted: 0 };

export const touch = (deploymentId: string, at = Date.now()) => void lastSeen.set(deploymentId, at);
export const seenAt = (deploymentId: string): number | undefined => lastSeen.get(deploymentId);
export const forget = (deploymentId: string) => void lastSeen.delete(deploymentId);
