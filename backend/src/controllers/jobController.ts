import { Request, Response } from 'express';
import config from '../config';
import prisma from '../db/prisma';
import jobQueue from '../services/queue/jobQueue';
import { resumeJob } from '../services/queue/resume';
import sseManager from '../services/sse/sseManager';

const ELEVATED = new Set(['admin', 'operator']);
const ACTIVE = ['pending', 'running'];

/** Returns the job only when the caller owns its project (admins and operators may see every job). */
async function findAccessibleJob(req: Request, res: Response) {
  const job = await prisma.job.findFirst({
    where: {
      id: req.params.id,
      ...(ELEVATED.has(req.user!.role) ? {} : { project: { userId: req.user!.id } }),
    },
  });
  if (!job) res.status(404).json({ success: false, error: 'Job tidak ditemukan' });
  return job;
}

/**
 * Where a waiting build stands. The wait is a rough guess from how long the last builds took: about half a build for a running one
 * to finish, plus a full build for each full round of waiting jobs ahead. It is null when there is nothing to base it on.
 */
async function queueInfo(jobId: string, status: string) {
  if (status !== 'pending') return null;
  const position = jobQueue.positionOf(jobId);
  const { active, maxConcurrency, queued } = jobQueue.getStats();
  const recent = await prisma.job.findMany({ where: { status: 'completed', startedAt: { not: null }, finishedAt: { not: null } }, orderBy: { finishedAt: 'desc' }, take: 10, select: { startedAt: true, finishedAt: true } });
  const durations = recent.map((j) => (j.finishedAt as Date).getTime() - (j.startedAt as Date).getTime()).filter((ms) => ms > 0);
  const average = durations.length >= 3 ? durations.reduce((a, b) => a + b, 0) / durations.length : null;
  const waitMs = position === null || average === null ? null : active < maxConcurrency ? 0 : average / 2 + Math.floor((position - 1) / maxConcurrency) * average;
  return { position, waiting: queued, active, maxConcurrency, estimatedWaitMinutes: waitMs === null ? null : Math.max(0, Math.ceil(waitMs / 60_000)) };
}

export class JobController {
  public static async getJob(req: Request, res: Response): Promise<void> {
    const found = await findAccessibleJob(req, res);
    if (!found) return;

    const job = await prisma.job.findUnique({
      where: { id: found.id },
      include: { events: { orderBy: { createdAt: 'desc' }, take: 20 }, gateResults: true },
    });
    res.json({ success: true, data: job && { ...job, queue: await queueInfo(job.id, job.status) } });
  }

  /** Real-time SSE stream of job progress. */
  public static async streamEvents(req: Request, res: Response): Promise<void> {
    const job = await findAccessibleJob(req, res);
    if (!job) return;
    await sseManager.addClient(job.id, res);
  }

  public static async cancelJob(req: Request, res: Response): Promise<void> {
    const job = await findAccessibleJob(req, res);
    if (!job) return;

    if (!ACTIVE.includes(job.status)) {
      res.status(400).json({ success: false, error: `Job sudah dalam status ${job.status}` });
      return;
    }

    const cancelled = await jobQueue.cancelJob(job.id);
    res.json({ success: true, message: cancelled ? 'Job berhasil dibatalkan' : 'Job ditandai sebagai dibatalkan' });
  }

  /** Continues at the quality gates using the code that is already written; nothing is rebuilt. */
  public static async resumeJob(req: Request, res: Response): Promise<void> {
    const job = await findAccessibleJob(req, res);
    if (!job) return;

    const result = await resumeJob(job.id);
    if (!result.ok) {
      res.status(result.status).json({ success: false, error: result.error });
      return;
    }
    res.json({ success: true, message: 'Dilanjutkan dari kode yang sudah dibuat.', data: await prisma.job.findUnique({ where: { id: job.id } }) });
  }

  public static async retryJob(req: Request, res: Response): Promise<void> {
    const oldJob = await findAccessibleJob(req, res);
    if (!oldJob) return;

    if (ACTIVE.includes(oldJob.status) || oldJob.status === 'completed') {
      res.status(400).json({ success: false, error: `Job dengan status ${oldJob.status} tidak perlu diulang` });
      return;
    }
    const busy = await prisma.job.count({ where: { projectId: oldJob.projectId, status: { in: ACTIVE } } });
    if (busy > 0) {
      res.status(409).json({ success: false, error: 'Proyek ini masih memiliki job yang berjalan.' });
      return;
    }

    const newJob = await prisma.job.create({
      data: {
        projectId: oldJob.projectId,
        specId: oldJob.specId,
        type: oldJob.type,
        prompt: oldJob.prompt,
        model: oldJob.model,
        status: 'pending',
        maxSteps: config.limits.defaultMaxSteps,
        tokenBudget: config.limits.defaultTokenBudget,
      },
    });
    await prisma.project.update({ where: { id: oldJob.projectId }, data: { status: 'building' } });
    await jobQueue.addJob(newJob.id, oldJob.projectId, newJob.model ?? undefined);

    res.status(201).json({ success: true, message: 'Job retry berhasil dijadwalkan', data: newJob });
  }

  public static async getGates(req: Request, res: Response): Promise<void> {
    const job = await findAccessibleJob(req, res);
    if (!job) return;

    const gates = await prisma.gateResult.findMany({ where: { jobId: job.id }, orderBy: { createdAt: 'asc' } });
    res.json({
      success: true,
      data: gates.map((g) => ({ id: g.id, gate: g.gate, passed: g.passed, report: JSON.parse(g.report), createdAt: g.createdAt })),
    });
  }
}
