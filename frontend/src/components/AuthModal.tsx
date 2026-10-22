import React, { useEffect, useId, useState } from 'react';
import api from '../services/api';
import { isFirebaseConfigured, signInWithGithubSSO, signInWithGoogleSSO } from '../services/firebase';
import { User, UserRole } from '../types';
import { Dialog, Notice } from './ui';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: User) => void;
}

type Mode = 'login' | 'register';

/** Same rules as backend/src/controllers/authController.ts (registerSchema). Login only needs a non-empty password. */
const MIN_PASSWORD = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  email?: string;
  password?: string;
}

function validate(mode: Mode, email: string, password: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!email.trim()) errors.email = 'Isi email Anda.';
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Format email belum benar, misalnya nama@contoh.com.';
  if (!password) errors.password = 'Isi kata sandi Anda.';
  else if (mode === 'register' && password.length < MIN_PASSWORD) errors.password = `Kata sandi minimal ${MIN_PASSWORD} karakter. Sekarang ${password.length}.`;
  return errors;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const emailErrorId = useId();
  const passwordErrorId = useId();
  const passwordHintId = useId();

  // Every opening starts from a clean form.
  useEffect(() => {
    if (!isOpen) return;
    setMode('login');
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setErrors({});
    setServerError(null);
    setLoading(false);
  }, [isOpen]);

  const finish = (user: User) => {
    onSuccess(user);
    onClose();
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setErrors({});
    setServerError(null);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(mode, email, password);
    setErrors(found);
    setServerError(null);
    if (found.email || found.password) return;

    setLoading(true);
    try {
      const { user } = mode === 'login' ? await api.auth.login(email.trim(), password) : await api.auth.register(email.trim(), password, 'client');
      finish(user);
    } catch (err: any) {
      setServerError(err?.message || (mode === 'login' ? 'Masuk belum berhasil. Coba lagi.' : 'Pendaftaran belum berhasil. Coba lagi.'));
    } finally {
      setLoading(false);
    }
  };

  const viaSso = async (provider: 'Google' | 'GitHub') => {
    setServerError(null);
    setLoading(true);
    try {
      const data = provider === 'Google' ? await signInWithGoogleSSO() : await signInWithGithubSSO();
      const { user } = await api.auth.firebaseSso(data);
      finish(user);
    } catch (err: any) {
      setServerError(err?.message || `Masuk dengan ${provider} belum berhasil.`);
    } finally {
      setLoading(false);
    }
  };

  // Development only: the server refuses this endpoint in production as well.
  const viaDemo = async (role: UserRole) => {
    setServerError(null);
    setLoading(true);
    try {
      finish((await api.auth.demo(role)).user);
    } catch (err: any) {
      setServerError(err?.message || 'Akun uji belum bisa dibuka.');
    } finally {
      setLoading(false);
    }
  };

  const isLogin = mode === 'login';

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      title="Akun Ethermind"
      description={isLogin ? 'Masuk untuk membuka proyek Anda.' : 'Daftar supaya proyek Anda tersimpan di akun sendiri.'}
    >
      <div className="tabs auth-modes" role="group" aria-label="Masuk atau daftar">
        <button type="button" className="tab" aria-pressed={isLogin} onClick={() => switchMode('login')}>
          Masuk
        </button>
        <button type="button" className="tab" aria-pressed={!isLogin} onClick={() => switchMode('register')}>
          Daftar
        </button>
      </div>

      <form className="stack" onSubmit={submit} noValidate>
        {serverError && <Notice tone="bad">{serverError}</Notice>}

        <div className="field">
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            data-autofocus
            className="input"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? emailErrorId : undefined}
          />
          {errors.email && (
            <span id={emailErrorId} className="field-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor={passwordId}>Kata sandi</label>
          <div className="field-row">
            <input
              id={passwordId}
              className="input"
              type={showPassword ? 'text' : 'password'}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? true : undefined}
              aria-describedby={[errors.password ? passwordErrorId : '', !isLogin && !errors.password ? passwordHintId : ''].filter(Boolean).join(' ') || undefined}
            />
            <button type="button" className="btn btn--secondary" aria-pressed={showPassword} onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? 'Sembunyikan' : 'Tampilkan'}
            </button>
          </div>
          {!isLogin && !errors.password && (
            <span id={passwordHintId} className="hint">
              Minimal {MIN_PASSWORD} karakter.
            </span>
          )}
          {errors.password && (
            <span id={passwordErrorId} className="field-error">
              {errors.password}
            </span>
          )}
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? (isLogin ? 'Memeriksa...' : 'Membuat akun...') : isLogin ? 'Masuk' : 'Buat akun'}
        </button>
      </form>

      {isFirebaseConfigured && (
        <div className="auth-sso">
          <button type="button" className="btn btn--secondary" disabled={loading} onClick={() => void viaSso('Google')}>
            Lanjut dengan Google
          </button>
          <button type="button" className="btn btn--secondary" disabled={loading} onClick={() => void viaSso('GitHub')}>
            Lanjut dengan GitHub
          </button>
        </div>
      )}

      {import.meta.env.DEV && (
        <div className="auth-dev stack-sm">
          <p className="small muted">Hanya di mode pengembangan: masuk tanpa kata sandi dengan akun uji.</p>
          <div className="row">
            {(['client', 'operator', 'admin'] as const).map((role) => (
              <button key={role} type="button" className="btn btn--quiet btn--sm" disabled={loading} onClick={() => void viaDemo(role)}>
                {role === 'client' ? 'Klien' : role === 'operator' ? 'Operator' : 'Admin'}
              </button>
            ))}
          </div>
        </div>
      )}
    </Dialog>
  );
};
