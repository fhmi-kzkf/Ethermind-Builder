import fs from 'fs';
import path from 'path';
import { initializeApp, cert, getApps, getApp, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getAuth, type Auth } from 'firebase-admin/auth';
import config from '../../config';

let firebaseApp: App | null = null;
let firestoreDb: Firestore | null = null;
let firebaseAuth: Auth | null = null;
let initializationAttempted = false;
let initializationError: string | null = null;

/**
 * Inisialisasi Firebase Admin SDK secara aman & terisolasi.
 * Mendukung 2 metode:
 * 1. File serviceAccountKey.json (FIREBASE_SERVICE_ACCOUNT_KEY=./serviceAccountKey.json)
 * 2. Environment variables langsung (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY)
 */
export function initFirebaseAdmin(): App | null {
  if (firebaseApp) return firebaseApp;
  if (initializationAttempted && !firebaseApp) return null;

  initializationAttempted = true;

  try {
    const existingApps = getApps();
    if (existingApps.length > 0) {
      firebaseApp = existingApps[0];
      firestoreDb = getFirestore(firebaseApp);
      firebaseAuth = getAuth(firebaseApp);
      return firebaseApp;
    }

    // Metode 1: Service Account Key JSON file
    if (config.firebase.serviceAccountKeyPath) {
      const resolvedPath = path.isAbsolute(config.firebase.serviceAccountKeyPath)
        ? config.firebase.serviceAccountKeyPath
        : path.resolve(process.cwd(), config.firebase.serviceAccountKeyPath);

      if (fs.existsSync(resolvedPath)) {
        const fileContent = fs.readFileSync(resolvedPath, 'utf8');
        const serviceAccount = JSON.parse(fileContent);

        firebaseApp = initializeApp({
          credential: cert(serviceAccount),
          databaseURL: config.firebase.databaseUrl,
          storageBucket: config.firebase.storageBucket,
        });

        firestoreDb = getFirestore(firebaseApp);
        firebaseAuth = getAuth(firebaseApp);
        console.log(`[Firebase] Berhasil terhubung via Service Account file: ${resolvedPath}`);
        return firebaseApp;
      } else {
        console.warn(`[Firebase] File key tidak ditemukan di: ${resolvedPath}`);
      }
    }

    // Metode 2: Environment variables langsung
    if (
      config.firebase.projectId &&
      config.firebase.clientEmail &&
      config.firebase.privateKey
    ) {
      firebaseApp = initializeApp({
        credential: cert({
          projectId: config.firebase.projectId,
          clientEmail: config.firebase.clientEmail,
          privateKey: config.firebase.privateKey,
        }),
        databaseURL: config.firebase.databaseUrl,
        storageBucket: config.firebase.storageBucket,
      });

      firestoreDb = getFirestore(firebaseApp);
      firebaseAuth = getAuth(firebaseApp);
      console.log(`[Firebase] Berhasil terhubung ke project: ${config.firebase.projectId}`);
      return firebaseApp;
    }

    // Jika belum ada kredensial, buat log informasi jelas tanpa crash
    initializationError = 'Kredensial Firebase belum diisi di .env (FIREBASE_PROJECT_ID atau FIREBASE_SERVICE_ACCOUNT_KEY)';
    console.info('[Firebase] Standby: Firebase belum diaktifkan (isi kredensial di .env untuk sinkronisasi data & SSO).');
    return null;
  } catch (error: any) {
    initializationError = error.message;
    console.error('[Firebase] Gagal inisialisasi Firebase Admin:', error.message);
    return null;
  }
}

/**
 * Dapatkan Firestore instance jika aktif
 */
export function getFirestoreDb(): Firestore | null {
  if (!firestoreDb) {
    initFirebaseAdmin();
  }
  return firestoreDb;
}

/**
 * Dapatkan Firebase Auth instance untuk verifikasi SSO ID Token
 */
export function getFirebaseAuth(): Auth | null {
  if (!firebaseAuth) {
    initFirebaseAdmin();
  }
  return firebaseAuth;
}

/**
 * Cek status kesiapan Firebase
 */
export function getFirebaseStatus(): {
  isConfigured: boolean;
  isConnected: boolean;
  projectId: string | null;
  error: string | null;
} {
  initFirebaseAdmin();
  return {
    isConfigured: config.firebase.isConfigured,
    isConnected: Boolean(firestoreDb),
    projectId: config.firebase.projectId || (firestoreDb ? 'connected-via-file' : null),
    error: initializationError,
  };
}

export default {
  initFirebaseAdmin,
  getFirestoreDb,
  getFirebaseAuth,
  getFirebaseStatus,
};
