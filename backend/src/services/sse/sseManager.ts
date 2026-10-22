import { Response } from 'express';
import prisma from '../../db/prisma';

export interface SSEEventPayload {
  jobId: string;
  agent: string;
  eventType: string;
  message: string;
  payload?: any;
  createdAt?: string;
}

export class SSEManager {
  // Map of jobId -> Set of Express Response objects
  private subscribers: Map<string, Set<Response>> = new Map();

  constructor() {
    // Send periodic heartbeats to all connected clients
    setInterval(() => {
      this.sendHeartbeat();
    }, 15000);
  }

  /**
   * Register a new client for a job event stream
   */
  public async addClient(jobId: string, res: Response): Promise<void> {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Disable proxy buffering (Nginx)
    res.flushHeaders();

    if (!this.subscribers.has(jobId)) {
      this.subscribers.set(jobId, new Set());
    }

    const jobClients = this.subscribers.get(jobId)!;
    jobClients.add(res);

    // Replay past events from database to sync client
    try {
      const pastEvents = await prisma.jobEvent.findMany({
        where: { jobId },
        orderBy: { createdAt: 'asc' },
      });

      for (const ev of pastEvents) {
        this.writeEvent(res, {
          jobId: ev.jobId,
          agent: ev.agent,
          eventType: ev.eventType,
          message: ev.message,
          payload: ev.payload ? JSON.parse(ev.payload) : undefined,
          createdAt: ev.createdAt.toISOString(),
        });
      }
    } catch (err) {
      console.error('[SSEManager] Error replaying past events:', err);
    }

    // Cleanup on disconnect
    res.on('close', () => {
      jobClients.delete(res);
      if (jobClients.size === 0) {
        this.subscribers.delete(jobId);
      }
    });
  }

  /**
   * Broadcast an event to all subscribers of a job
   */
  public broadcast(event: SSEEventPayload): void {
    const clients = this.subscribers.get(event.jobId);
    if (!clients || clients.size === 0) return;

    for (const client of clients) {
      this.writeEvent(client, event);
    }
  }

  private writeEvent(res: Response, event: SSEEventPayload): void {
    const dataString = JSON.stringify({
      ...event,
      createdAt: event.createdAt || new Date().toISOString(),
    });
    res.write(`event: job_event\ndata: ${dataString}\n\n`);
  }

  private sendHeartbeat(): void {
    for (const [, clients] of this.subscribers.entries()) {
      for (const client of clients) {
        client.write(`: heartbeat\n\n`);
      }
    }
  }
}

export const sseManager = new SSEManager();
export default sseManager;
