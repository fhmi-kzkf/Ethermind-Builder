import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  onSnapshot,
  type Firestore,
  type Unsubscribe,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  type Auth,
  type UserCredential,
} from 'firebase/auth';

// Konfigurasi Client Firebase dari Environment Variables (Vite)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    console.log('[Firebase Client] Berhasil diinisialisasi untuk project:', firebaseConfig.projectId);
  } catch (err: any) {
    console.warn('[Firebase Client] Gagal inisialisasi client SDK:', err.message);
  }
} else {
  // Silent fallback: jika env VITE_FIREBASE_* belum diisi, frontend tetap berjalan normal menggunakan Backend REST API
}

export { app as firebaseApp, db as firestoreDb, auth as firebaseAuth };

export interface FirebaseSsoResult {
  email: string;
  name: string;
  photoUrl: string | null;
  idToken: string;
  provider: 'google' | 'github';
}

/**
 * Single Sign-On via Google
 */
export async function signInWithGoogleSSO(): Promise<FirebaseSsoResult> {
  if (!auth) {
    throw new Error(
      'Firebase Auth belum dikonfigurasi di frontend/.env. Lengkapi VITE_FIREBASE_API_KEY dan VITE_FIREBASE_PROJECT_ID untuk mengaktifkan Google SSO.'
    );
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const credential: UserCredential = await signInWithPopup(auth, provider);
  const user = credential.user;
  const idToken = await user.getIdToken();

  return {
    email: user.email || '',
    name: user.displayName || user.email?.split('@')[0] || 'User',
    photoUrl: user.photoURL || null,
    idToken,
    provider: 'google',
  };
}

/**
 * Single Sign-On via GitHub
 */
export async function signInWithGithubSSO(): Promise<FirebaseSsoResult> {
  if (!auth) {
    throw new Error(
      'Firebase Auth belum dikonfigurasi di frontend/.env. Lengkapi VITE_FIREBASE_API_KEY dan VITE_FIREBASE_PROJECT_ID untuk mengaktifkan GitHub SSO.'
    );
  }

  const provider = new GithubAuthProvider();
  const credential: UserCredential = await signInWithPopup(auth, provider);
  const user = credential.user;
  const idToken = await user.getIdToken();

  return {
    email: user.email || '',
    name: user.displayName || user.email?.split('@')[0] || 'User',
    photoUrl: user.photoURL || null,
    idToken,
    provider: 'github',
  };
}

/**
 * Sign out dari Firebase Client
 */
export async function signOutFirebase(): Promise<void> {
  if (auth) {
    try {
      await signOut(auth);
    } catch (e: any) {
      console.warn('[Firebase Auth] SignOut warning:', e.message);
    }
  }
}

/**
 * Real-time listener untuk status proyek
 */
export function subscribeToProject(
  projectId: string,
  onUpdate: (data: any) => void,
  onError?: (error: Error) => void
): Unsubscribe | null {
  if (!db) return null;

  try {
    const docRef = doc(db, 'projects', projectId);
    return onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          onUpdate({ id: docSnap.id, ...docSnap.data() });
        }
      },
      onError
    );
  } catch (err: any) {
    console.warn('[Firebase Client] Gagal membuat subscription proyek:', err.message);
    return null;
  }
}

/**
 * Real-time listener untuk log job build multi-agent
 */
export function subscribeToJob(
  jobId: string,
  onUpdate: (data: any) => void
): Unsubscribe | null {
  if (!db) return null;

  try {
    const docRef = doc(db, 'jobs', jobId);
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        onUpdate({ id: docSnap.id, ...docSnap.data() });
      }
    });
  } catch (err: any) {
    console.warn('[Firebase Client] Gagal membuat subscription job:', err.message);
    return null;
  }
}

export default {
  firebaseApp: app,
  firestoreDb: db,
  firebaseAuth: auth,
  isFirebaseConfigured,
  signInWithGoogleSSO,
  signInWithGithubSSO,
  signOutFirebase,
  subscribeToProject,
  subscribeToJob,
};
