import { Router, Request, Response } from 'express';
import { authenticate, requireRole } from '../middleware/auth';
import { getFirebaseStatus } from '../services/firebase/firebaseAdmin';
import { FirestoreService } from '../services/firebase/firestoreService';

const router = Router();

// Syncing exposes every project and job, so only administrators may use these routes.
router.use(authenticate, requireRole('admin'));

/**
 * GET /api/firebase/status
 * Cek status koneksi Firebase Admin & Firestore
 */
router.get('/status', (req: Request, res: Response) => {
  const status = getFirebaseStatus();
  res.json({
    success: true,
    data: {
      ...status,
      message: status.isConnected
        ? 'Firebase Firestore terhubung dan aktif untuk penyimpanan data'
        : 'Firebase dalam mode standby (isi kredensial di .env untuk sinkronisasi live)',
      instructions: {
        method1: 'Simpan file service account JSON di folder backend dan set FIREBASE_SERVICE_ACCOUNT_KEY=./serviceAccountKey.json di .env',
        method2: 'Atau set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, dan FIREBASE_PRIVATE_KEY langsung di .env',
      },
    },
  });
});

/**
 * POST /api/firebase/sync
 * Memicu sinkronisasi manual semua proyek & jobs ke Firestore
 */
router.post('/sync', async (req: Request, res: Response) => {
  try {
    const result = await FirestoreService.syncAllFromPrisma();
    res.json({
      success: true,
      message: 'Sinkronisasi ke Firebase Firestore berhasil diselesaikan',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
