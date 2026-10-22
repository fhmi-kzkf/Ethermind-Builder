import config from '../../config';
import prisma from '../../db/prisma';
import jobQueue from './jobQueue';
import { hasResumableCode } from './resumable';

export type ResumeResult = { ok: true } | { ok: false; status: number; error: string };

/**
 * Continues a job that stopped after the code was written: the same job and workspace go back to the
 * queue and only the quality gates (and their repairs) run again. Nothing is regenerated.
 * The job gets more steps and tokens, because the earlier attempt may have used them up.
 */
export async function resumeJob(jobId: string): Promise<ResumeResult> {
  const job = await prisma.job.findUnique({ where: { id: jobId } });
  if (!job) return { ok: false, status: 404, error: 'Job tidak ditemukan' };

  if (!['needs_review', 'failed'].includes(job.status)) {
    return { ok: false, status: 409, error: `Job dengan status ${job.status} tidak bisa dilanjutkan.` };
  }
  if (!(await hasResumableCode(job))) {
    return { ok: false, status: 409, error: 'Belum ada kode yang selesai dibuat untuk dilanjutkan. Gunakan bangun ulang.' };
  }
  const busy = await prisma.job.count({ where: { projectId: job.projectId, status: { in: ['pending', 'running'] } } });
  if (busy > 0) return { ok: false, status: 409, error: 'Proyek ini masih memiliki job yang berjalan.' };

  await prisma.job.update({
    where: { id: job.id },
    data: {
      status: 'pending',
      errorMessage: null,
      finishedAt: null,
      maxSteps: { increment: Math.ceil(config.limits.defaultMaxSteps / 2) },
      tokenBudget: { increment: config.limits.defaultTokenBudget },
    },
  });
  await prisma.project.update({ where: { id: job.projectId }, data: { status: 'building' } });
  await jobQueue.addJob(job.id, job.projectId, job.model ?? undefined);
  return { ok: true };
}
