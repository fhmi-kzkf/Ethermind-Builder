import { Request, Response } from 'express';
import config from '../config';
import prisma from '../db/prisma';
import jobQueue from '../services/queue/jobQueue';
import { AVAILABLE_MODELS } from '../services/llm/pricing';
import { parseSpec, validateSpec } from '../services/spec/specSchema';
import { jobIdFromRepoPath } from '../services/versions/current';

export class SpecController {
  public static async getSpec(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: {
        specs: {
          orderBy: { version: 'desc' },
          take: 1,
        },
      },
    });

    if (!project || project.specs.length === 0) {
      res.status(404).json({ success: false, error: 'Spesifikasi belum dirancang untuk proyek ini' });
      return;
    }

    // A finished app shows the spec of the version that is active, which after a restore is not the newest one.
    let latestSpec = project.specs[0];
    const activeJobId = project.status === 'ready' || project.status === 'live' ? jobIdFromRepoPath(project.repoPath, projectId) : null;
    if (activeJobId) {
      const activeJob = await prisma.job.findFirst({ where: { id: activeJobId, projectId }, include: { spec: true } });
      if (activeJob?.spec) latestSpec = activeJob.spec;
    }
    res.json({
      success: true,
      data: {
        id: latestSpec.id,
        version: latestSpec.version,
        approvedAt: latestSpec.approvedAt,
        createdAt: latestSpec.createdAt,
        content: JSON.parse(latestSpec.content),
      },
    });
  }

  public static async approveSpec(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const { model } = req.body || {};
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: {
        specs: {
          orderBy: { version: 'desc' },
          take: 1,
        },
      },
    });

    if (!project || project.specs.length === 0) {
      res.status(400).json({ success: false, error: 'Tidak ada spesifikasi yang dapat disetujui' });
      return;
    }

    if (project.status === 'building') {
      res.status(409).json({ success: false, error: 'Aplikasi sedang dibangun.' });
      return;
    }

    const spec = project.specs[0];

    // A spec that cannot be built must not start a job that is certain to fail.
    let problems: string[];
    try {
      problems = validateSpec(parseSpec(JSON.parse(spec.content)));
    } catch (error: any) {
      problems = [error.message];
    }
    if (problems.length > 0) {
      res.status(422).json({
        success: false,
        error: 'Spesifikasi belum lengkap dan perlu dirancang ulang sebelum dibangun.',
        details: problems.slice(0, 8),
      });
      return;
    }

    const selectedModel = model && AVAILABLE_MODELS[model] ? model : 'nvidia/nemotron-3-ultra-550b-a55b';
    const modelInfo = AVAILABLE_MODELS[selectedModel] || AVAILABLE_MODELS['nvidia/nemotron-3-ultra-550b-a55b'];
    const pricePaid = modelInfo.pricePerApp; // Rp 100.000 for premium, Rp 0 for basic

    // Mark spec as approved
    await prisma.spec.update({
      where: { id: spec.id },
      data: { approvedAt: new Date() },
    });

    const job = await prisma.job.create({
      data: {
        projectId,
        specId: spec.id,
        type: 'build',
        status: 'pending',
        model: selectedModel,
        maxSteps: config.limits.defaultMaxSteps,
        tokenBudget: config.limits.defaultTokenBudget,
        priceIdr: pricePaid,
      },
    });

    // Update project status
    await prisma.project.update({
      where: { id: projectId },
      data: { status: 'building' },
    });

    // Enqueue job into JobQueue runner with selected coding model
    await jobQueue.addJob(job.id, projectId, selectedModel);

    res.status(201).json({
      success: true,
      message: `Spesifikasi disetujui. Build job dimulai dengan model ${modelInfo.name} (${modelInfo.tier === 'pro' ? 'Paket Pro Rp 100.000' : 'Paket Basic Gratis Build'}).`,
      data: {
        jobId: job.id,
        status: job.status,
        projectId,
        model: selectedModel,
        tier: modelInfo.tier,
        pricePaid,
        isFreeBuild: modelInfo.isFreeBuild,
        zipExportPrice: modelInfo.zipExportPrice,
      },
    });
  }
}
