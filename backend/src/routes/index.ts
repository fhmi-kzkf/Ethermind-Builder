import { Router } from 'express';
import config from '../config';
import prisma from '../db/prisma';
import adminRoutes from './adminRoutes';
import authRoutes from './authRoutes';
import firebaseRoutes from './firebaseRoutes';
import jobRoutes from './jobRoutes';
import projectRoutes from './projectRoutes';

const router = Router();

import llmClient from '../services/llm/client';
import { visionAvailable } from '../services/agents/visionAgent';
import { AVAILABLE_MODELS, PLATFORM_PRICING } from '../services/llm/pricing';

// Platform health and metadata
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    platform: 'Ethermind AI App Builder API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    llmConfigured: llmClient.isConfigured(),
    sandbox: config.sandbox.mode,
  });
});

// Available LLM models and tier pricing
router.get('/models', (req, res) => {
  res.json({
    models: Object.values(AVAILABLE_MODELS),
    pricing: PLATFORM_PRICING,
    features: { imageReference: visionAvailable() },
  });
});

// Real count of finished apps for the landing page. `show` stays false below the configured threshold, and nothing else is exposed.
router.get('/public/stats', async (req, res, next) => {
  try {
    const appsBuilt = await prisma.project.count({ where: { status: { in: ['ready', 'live'] } } });
    res.json({ show: appsBuilt >= config.server.publicStatsMin, appsBuilt });
  } catch (error) {
    next(error);
  }
});

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/jobs', jobRoutes);
router.use('/admin', adminRoutes);
router.use('/firebase', firebaseRoutes);

export default router;
