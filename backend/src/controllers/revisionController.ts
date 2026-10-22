import { Request, Response } from 'express';
import { z } from 'zod';
import config from '../config';
import prisma from '../db/prisma';
import { AVAILABLE_MODELS } from '../services/llm/pricing';
import jobQueue from '../services/queue/jobQueue';
import { jobIdFromRepoPath } from '../services/versions/current';

export const createRevisionSchema = z.object({
  prompt: z.string().trim().min(3, 'Permintaan revisi terlalu singkat').max(2000, 'Permintaan revisi maksimal 2000 karakter'),
  model: z.string().optional(),
});

export class RevisionController {
  public static async createRevision(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const { prompt, model } = req.body;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: { specs: { orderBy: { version: 'desc' }, take: 1 } },
    });

    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    // A revision builds on the active version, with the spec that version was built from. The newest spec may belong to a revision that failed.
    const activeJobId = jobIdFromRepoPath(project.repoPath, projectId);
    const activeJob = activeJobId ? await prisma.job.findFirst({ where: { id: activeJobId, projectId }, include: { spec: true } }) : null;
    const latestSpec = activeJob?.spec ?? project.specs[0];
    if (!project.repoPath || !latestSpec || project.status !== 'ready') {
      res.status(409).json({
        success: false,
        error: project.status === 'building' ? 'Aplikasi sedang dibangun. Tunggu sampai selesai.' : 'Revisi hanya bisa diajukan setelah aplikasi berhasil dibangun.',
      });
      return;
    }

    const selectedModel = model && AVAILABLE_MODELS[model] ? model : 'nvidia/nemotron-3-ultra-550b-a55b';
    const job = await prisma.job.create({
      data: {
        projectId,
        specId: latestSpec.id,
        type: 'revision',
        status: 'pending',
        prompt,
        model: selectedModel,
        maxSteps: config.limits.defaultMaxSteps,
        tokenBudget: config.limits.defaultTokenBudget,
      },
    });

    const conversation = await prisma.conversation.findUnique({ where: { projectId } });
    if (conversation) {
      await prisma.message.createMany({
        data: [
          { conversationId: conversation.id, role: 'user', content: `Permintaan revisi: ${prompt}`, metadata: JSON.stringify({ type: 'revision_request', jobId: job.id }) },
          { conversationId: conversation.id, role: 'assistant', content: 'Permintaan revisi diterima. Saya menerapkannya di atas versi aplikasi yang sudah ada, lalu menguji ulang semuanya.', metadata: JSON.stringify({ type: 'revision_started', jobId: job.id }) },
        ],
      });
    }

    await prisma.project.update({ where: { id: projectId }, data: { status: 'building' } });
    await jobQueue.addJob(job.id, projectId, selectedModel);

    res.status(201).json({
      success: true,
      message: 'Job revisi berhasil dibuat dan masuk antrean.',
      data: { jobId: job.id, projectId, status: job.status },
    });
  }
}
