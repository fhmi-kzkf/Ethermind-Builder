import config from '../../config';
import prisma from '../../db/prisma';
import { Orchestrator } from '../agents/orchestrator';
import { hasResumableCode } from './resumable';

export interface QueuedJob {
  jobId: string;
  projectId: string;
  model?: string;
  createdAt: number;
}

export class JobQueue {
  private queue: QueuedJob[] = [];
  private activeJobs: Map<string, Orchestrator> = new Map();
  private maxConcurrency: number;
  private isProcessing = false;

  constructor(maxConcurrency: number = config.limits.maxConcurrentJobs) {
    this.maxConcurrency = maxConcurrency;
  }

  /**
   * Enqueue a new build or revision job with selected model
   */
  public async addJob(jobId: string, projectId: string, model?: string): Promise<void> {
    this.queue.push({
      jobId,
      projectId,
      model,
      createdAt: Date.now(),
    });

    console.log(`[JobQueue] Job ${jobId} (Model: ${model || 'default'}) added to queue. Queue size: ${this.queue.length}`);
    this.processNext();
  }

  /**
   * Cancel an active or queued job
   */
  public async cancelJob(jobId: string): Promise<boolean> {
    // 1. Check if it's currently running
    const activeOrchestrator = this.activeJobs.get(jobId);
    if (activeOrchestrator) {
      activeOrchestrator.cancel();
      this.activeJobs.delete(jobId);
      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'cancelled', finishedAt: new Date() },
      });
      this.processNext();
      return true;
    }

    // 2. Check if it's pending in queue
    const queueIndex = this.queue.findIndex((j) => j.jobId === jobId);
    if (queueIndex !== -1) {
      this.queue.splice(queueIndex, 1);
      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'cancelled', finishedAt: new Date() },
      });
      return true;
    }

    return false;
  }

  /**
   * Worker loop: pops jobs from queue up to max concurrency
   */
  private async processNext(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;

    try {
      while (this.activeJobs.size < this.maxConcurrency && this.queue.length > 0) {
        const nextJob = this.queue.shift();
        if (!nextJob) break;

        const { jobId, projectId, model } = nextJob;
        const orchestrator = new Orchestrator(jobId, projectId, model);
        this.activeJobs.set(jobId, orchestrator);

        // Run orchestrator asynchronously in worker thread/event loop
        (async () => {
          try {
            console.log(`[JobQueue] Starting execution for job ${jobId}... (Active: ${this.activeJobs.size})`);
            await orchestrator.run();
          } catch (err: any) {
            console.error(`[JobQueue] Job ${jobId} encountered uncaught error:`, err);
          } finally {
            this.activeJobs.delete(jobId);
            this.processNext();
          }
        })();
      }
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * The queue lives in memory, so after a restart the database is the source of truth.
   * Jobs that were waiting are queued again; jobs that were running died with the old process and are
   * marked failed so the client can retry them instead of waiting forever.
   */
  public async recover(): Promise<{ requeued: number; interrupted: number }> {
    const interrupted = await prisma.job.findMany({ where: { status: 'running' } });
    for (const job of interrupted) {
      // If the code was already written, the job continues at the quality gates instead of starting over.
      if (await hasResumableCode(job)) {
        await prisma.job.update({ where: { id: job.id }, data: { status: 'pending' } });
        continue;
      }
      await prisma.job.update({
        where: { id: job.id },
        data: { status: 'failed', finishedAt: new Date(), errorMessage: 'Server dimulai ulang saat build berjalan. Silakan ulangi build.' },
      });
      await prisma.project.update({ where: { id: job.projectId }, data: { status: job.type === 'revision' ? 'ready' : 'failed' } });
    }

    const waiting = await prisma.job.findMany({ where: { status: 'pending' }, orderBy: { createdAt: 'asc' } });
    for (const job of waiting) await this.addJob(job.id, job.projectId, job.model ?? undefined);

    return { requeued: waiting.length, interrupted: interrupted.length };
  }

  /** Place in line, counting from 1, or null when the job is not waiting here (running, finished, or unknown). */
  public positionOf(jobId: string): number | null {
    const index = this.queue.findIndex((j) => j.jobId === jobId);
    return index === -1 ? null : index + 1;
  }

  public getStats(): { queued: number; active: number; maxConcurrency: number } {
    return {
      queued: this.queue.length,
      active: this.activeJobs.size,
      maxConcurrency: this.maxConcurrency,
    };
  }
}

export const jobQueue = new JobQueue();
export default jobQueue;
