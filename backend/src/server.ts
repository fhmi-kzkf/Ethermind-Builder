import { Server } from 'http';
import app from './app';
import config from './config';
import { AuthController } from './controllers/authController';
import { ChatController } from './controllers/chatController';
import { disconnectDatabase, initDatabase } from './db/prisma';
import liveManager from './services/deployment/liveManager';
import previewManager from './services/deployment/previewManager';
import { startGateway } from './services/gateway/gateway';
import { startIdleSweeper, stopIdleSweeper } from './services/gateway/idle';
import { startMaintenance, stopMaintenance } from './services/maintenance/scheduler';
import llmClient from './services/llm/client';
import jobQueue from './services/queue/jobQueue';
import { sandbox } from './services/sandbox/sandbox';

let server: Server;
let gateway: Server | null = null;

async function bootstrap() {
  try {
    await initDatabase();
    await AuthController.ensureBootstrapAdmin();

    if (!llmClient.isConfigured()) {
      console.warn('⚠️  NVIDIA_API_KEY / OPENAI_API_KEY belum diisi: chat dan build akan ditolak sampai mesin AI dikonfigurasi.');
    }
    try {
      await sandbox.ensureReady();
      console.log(`✔ Sandbox siap (mode: ${config.sandbox.mode})`);
    } catch (error: any) {
      console.warn(`⚠️  ${error.message}`);
    }

    const stoppedPreviews = await previewManager.reconcile();
    const expiredMessages = await ChatController.expireStalePending();
    if (expiredMessages) console.log(`✔ ${expiredMessages} balasan chat yang terputus ditandai agar bisa dikirim ulang`);
    const { requeued, interrupted } = await jobQueue.recover();
    if (stoppedPreviews || requeued || interrupted) {
      console.log(`✔ Pemulihan: ${requeued} job diantrekan ulang, ${interrupted} job terputus, ${stoppedPreviews} pratinjau mati dicatat`);
    }

    server = app.listen(config.server.port, () => {
      console.log(`🚀 Ethermind AI App Builder Backend: http://localhost:${config.server.port} (${config.server.env})`);
      console.log(`   Model: planner=${config.llm.models.planner} coder=${config.llm.models.coder} reviewer=${config.llm.models.reviewer}`);
    });

    // One entrance for every app address: it wakes sleeping apps, and the sweeper puts quiet ones to sleep.
    gateway = startGateway({ wake: (projectId, environment) => (environment === 'production' ? liveManager.start(projectId) : previewManager.restart(projectId).then(() => undefined)) });
    if (gateway) startIdleSweeper((projectId) => previewManager.forget(projectId));
    startMaintenance();

    const handleShutdown = async (signal: string) => {
      console.log(`\nReceived ${signal}. Gracefully shutting down Ethermind backend...`);
      server?.close();
      gateway?.close();
      stopIdleSweeper();
      stopMaintenance();
      previewManager.shutdownAll();
      await disconnectDatabase();
      process.exit(0);
    };

    process.on('SIGINT', () => handleShutdown('SIGINT'));
    process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  } catch (err) {
    console.error('Fatal error during startup:', err);
    process.exit(1);
  }
}

bootstrap();
