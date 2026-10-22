import { getFirestoreDb } from './firebaseAdmin';
import type { Query } from 'firebase-admin/firestore';
import prisma from '../../db/prisma';

export interface FirestoreProjectData {
  id: string;
  userId: string;
  name: string;
  stack?: string;
  status: string;
  modelId?: string;
  tier?: string;
  liveDomain?: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export class FirestoreService {
  /**
   * Menyimpan / sinkronisasi proyek ke Firestore
   */
  public static async syncProject(projectData: FirestoreProjectData): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      const docRef = db.collection('projects').doc(projectData.id);
      await docRef.set(
        {
          ...projectData,
          syncedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal sync project ${projectData.id}:`, err.message);
      return false;
    }
  }

  /**
   * Mengambil proyek dari Firestore
   */
  public static async getProject(projectId: string): Promise<any | null> {
    const db = getFirestoreDb();
    if (!db) return null;

    try {
      const doc = await db.collection('projects').doc(projectId).get();
      if (!doc.exists) return null;
      return { id: doc.id, ...doc.data() };
    } catch (err: any) {
      console.warn(`[Firestore] Gagal get project ${projectId}:`, err.message);
      return null;
    }
  }

  /**
   * Mengambil daftar proyek dari Firestore
   */
  public static async listProjects(userId?: string): Promise<any[]> {
    const db = getFirestoreDb();
    if (!db) return [];

    try {
      let queryRef: Query = db.collection('projects');
      if (userId) {
        queryRef = queryRef.where('userId', '==', userId);
      }
      queryRef = queryRef.orderBy('createdAt', 'desc');

      const snapshot = await queryRef.get();
      return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (err: any) {
      console.warn('[Firestore] Gagal list projects:', err.message);
      return [];
    }
  }

  /**
   * Menghapus proyek dari Firestore
   */
  public static async deleteProject(projectId: string): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      await db.collection('projects').doc(projectId).delete();
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal delete project ${projectId}:`, err.message);
      return false;
    }
  }

  /**
   * Menyimpan spesifikasi (PRD/Design/Architecture) ke Firestore
   */
  public static async syncSpec(projectId: string, specData: any): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      const specRef = db.collection('projects').doc(projectId).collection('specs').doc(specData.id || 'latest');
      await specRef.set(
        {
          ...specData,
          projectId,
          syncedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal sync spec project ${projectId}:`, err.message);
      return false;
    }
  }

  /**
   * Menyimpan chat pesan ke Firestore
   */
  public static async syncChatMessage(projectId: string, messageData: any): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      const msgId = messageData.id || `msg_${Date.now()}`;
      const msgRef = db.collection('projects').doc(projectId).collection('messages').doc(msgId);
      await msgRef.set(
        {
          ...messageData,
          projectId,
          syncedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal sync message ${projectId}:`, err.message);
      return false;
    }
  }

  /**
   * Menyimpan build job multi-agent ke Firestore
   */
  public static async syncJob(jobData: any): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      const docRef = db.collection('jobs').doc(jobData.id);
      await docRef.set(
        {
          ...jobData,
          syncedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal sync job ${jobData.id}:`, err.message);
      return false;
    }
  }

  /**
   * Menyimpan live deployment info ke Firestore
   */
  public static async syncDeployment(deploymentData: any): Promise<boolean> {
    const db = getFirestoreDb();
    if (!db) return false;

    try {
      const docRef = db.collection('deployments').doc(deploymentData.id || deploymentData.slug);
      await docRef.set(
        {
          ...deploymentData,
          syncedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      return true;
    } catch (err: any) {
      console.warn(`[Firestore] Gagal sync deployment:`, err.message);
      return false;
    }
  }

  /**
   * Sinkronisasi massal seluruh data Prisma ke Firestore
   */
  public static async syncAllFromPrisma(): Promise<{
    projectsSynced: number;
    jobsSynced: number;
    specsSynced: number;
  }> {
    const db = getFirestoreDb();
    if (!db) {
      throw new Error('Firebase Firestore belum terhubung. Konfigurasikan kredensial di .env terlebih dahulu.');
    }

    const projects = await prisma.project.findMany({
      include: {
        specs: true,
        jobs: true,
        deployments: true,
      },
    });

    let projectsSynced = 0;
    let specsSynced = 0;
    let jobsSynced = 0;

    for (const p of projects) {
      await this.syncProject({
        id: p.id,
        userId: p.userId,
        name: p.name,
        stack: p.stack,
        status: p.status,
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      });
      projectsSynced++;

      for (const s of p.specs) {
        await this.syncSpec(p.id, {
          id: s.id,
          version: s.version,
          content: s.content,
          approvedAt: s.approvedAt ? s.approvedAt.toISOString() : null,
          createdAt: s.createdAt.toISOString(),
        });
        specsSynced++;
      }

      for (const j of p.jobs) {
        await this.syncJob({
          id: j.id,
          projectId: j.projectId,
          specId: j.specId,
          type: j.type,
          status: j.status,
          stepCount: j.stepCount,
          maxSteps: j.maxSteps,
          tokenBudget: j.tokenBudget,
          tokensUsed: j.tokensUsed,
          costEstimate: j.costEstimate,
          errorMessage: j.errorMessage,
          startedAt: j.startedAt ? j.startedAt.toISOString() : null,
          finishedAt: j.finishedAt ? j.finishedAt.toISOString() : null,
          createdAt: j.createdAt.toISOString(),
        });
        jobsSynced++;
      }
    }

    return { projectsSynced, specsSynced, jobsSynced };
  }
}

export default FirestoreService;
