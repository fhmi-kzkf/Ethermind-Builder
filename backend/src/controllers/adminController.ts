import { Request, Response } from 'express';
import config from '../config';
import prisma from '../db/prisma';
import { runBackup } from '../services/maintenance/backup';
import { runCleanup } from '../services/maintenance/cleanup';
import { systemSnapshot } from '../services/maintenance/metrics';
import jobQueue from '../services/queue/jobQueue';

export class AdminController {
  /** Server capacity at a glance: memory, disk, running apps, queue, last backup and cleanup, and what needs attention. */
  public static async system(_req: Request, res: Response): Promise<void> {
    res.json({ success: true, data: await systemSnapshot() });
  }

  /** Runs housekeeping now instead of waiting for the daily run. `?dryRun=true` only reports what the cleanup would remove. */
  public static async runMaintenance(req: Request, res: Response): Promise<void> {
    const task = req.params.task;
    if (task === 'cleanup') {
      res.json({ success: true, data: await runCleanup({ dryRun: req.query.dryRun === 'true' }) });
      return;
    }
    if (task === 'backup') {
      res.json({ success: true, data: await runBackup() });
      return;
    }
    res.status(404).json({ success: false, error: 'Tugas perawatan tidak dikenal' });
  }

  /**
   * List all jobs with pagination and status filter for Operator Dashboard
   */
  public static async listAllJobs(req: Request, res: Response): Promise<void> {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const status = req.query.status as string;

    const where = status ? { status } : {};

    const [total, jobs] = await Promise.all([
      prisma.job.count({ where }),
      prisma.job.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          project: { select: { id: true, name: true, userId: true } },
          gateResults: { select: { gate: true, passed: true } },
        },
      }),
    ]);

    const queueStats = jobQueue.getStats();

    res.json({
      success: true,
      data: {
        total,
        page,
        totalPages: Math.ceil(total / limit),
        queueStats,
        jobs,
      },
    });
  }

  /**
   * System metrics: token costs, success rates, model breakdowns
   */
  public static async getMetrics(req: Request, res: Response): Promise<void> {
    const [
      totalJobs,
      completedJobs,
      failedJobs,
      needsReviewJobs,
      totalTokensAgg,
      totalCostAgg,
      usageByModel,
    ] = await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { status: 'completed' } }),
      prisma.job.count({ where: { status: 'failed' } }),
      prisma.job.count({ where: { status: 'needs_review' } }),
      prisma.job.aggregate({ _sum: { tokensUsed: true } }),
      prisma.job.aggregate({ _sum: { costEstimate: true } }),
      prisma.usageRecord.groupBy({
        by: ['model'],
        _sum: {
          inputTokens: true,
          outputTokens: true,
          costEstimate: true,
        },
      }),
    ]);

    // Jobs that are still waiting or running say nothing about quality, so only finished ones count.
    const finished = completedJobs + failedJobs + needsReviewJobs;
    const successRate = finished > 0 ? Number(((completedJobs / finished) * 100).toFixed(1)) : 0;

    res.json({
      success: true,
      data: {
        summary: {
          totalJobs,
          completedJobs,
          failedJobs,
          needsReviewJobs,
          successRate: `${successRate}%`,
          totalTokensUsed: totalTokensAgg._sum.tokensUsed || 0,
          totalEstimatedCostUSD: Number((totalCostAgg._sum.costEstimate || 0).toFixed(4)),
        },
        modelBreakdown: usageByModel.map((m: any) => ({
          model: m.model,
          inputTokens: m._sum.inputTokens || 0,
          outputTokens: m._sum.outputTokens || 0,
          totalTokens: (m._sum.inputTokens || 0) + (m._sum.outputTokens || 0),
          costUSD: Number((m._sum.costEstimate || 0).toFixed(4)),
        })),
        queueStatus: jobQueue.getStats(),
      },
    });
  }

  /**
   * Manual intervention on stuck/problematic job
   */
  public static async intervene(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { action } = req.body; // 'cancel' | 'retry' | 'mark_completed'

    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) {
      res.status(404).json({ success: false, error: 'Job tidak ditemukan' });
      return;
    }

    if (action === 'cancel') {
      await jobQueue.cancelJob(id);
      res.json({ success: true, message: 'Job dibatalkan oleh operator.' });
      return;
    }

    if (action === 'retry') {
      const busy = await prisma.job.count({ where: { projectId: job.projectId, status: { in: ['pending', 'running'] } } });
      if (busy > 0 || job.status === 'completed') {
        res.status(409).json({ success: false, error: 'Job ini tidak bisa diulang sekarang.' });
        return;
      }
      const retry = await prisma.job.create({
        data: {
          projectId: job.projectId,
          specId: job.specId,
          type: job.type,
          prompt: job.prompt,
          model: job.model,
          status: 'pending',
          maxSteps: config.limits.defaultMaxSteps,
          tokenBudget: config.limits.defaultTokenBudget,
        },
      });
      await prisma.project.update({ where: { id: job.projectId }, data: { status: 'building' } });
      await jobQueue.addJob(retry.id, job.projectId, retry.model ?? undefined);
      res.status(201).json({ success: true, message: 'Job diulang oleh operator.', data: { jobId: retry.id } });
      return;
    }

    // Only for a build that stopped at needs_review and was then checked by a person.
    if (action === 'mark_completed') {
      if (job.status !== 'needs_review') {
        res.status(409).json({ success: false, error: 'Hanya job berstatus needs_review yang bisa ditandai selesai setelah ditinjau.' });
        return;
      }
      await prisma.job.update({ where: { id }, data: { status: 'completed', finishedAt: new Date() } });
      await prisma.project.update({ where: { id: job.projectId }, data: { status: 'ready' } });
      res.json({ success: true, message: 'Job ditandai selesai setelah ditinjau operator.' });
      return;
    }

    res.status(400).json({ success: false, error: 'Aksi intervensi tidak dikenali' });
  }
}
