import React, { useState } from 'react';
import { EmptyState, Notice, Spinner } from '../ui';
import type { BuilderState } from './useBuilder';

interface Props {
  state: BuilderState;
}

export const PreviewPanel: React.FC<Props> = ({ state }) => {
  const { latestDeployment, previewRunning, previewStarting, previewError, credentials, credentialsLoaded, appReady } = state;
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState<{ label: string; ok: boolean } | null>(null);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied({ label, ok: true });
    } catch {
      // Clipboard access can be blocked by the browser; say so, the value stays on screen to copy by hand.
      setCopied({ label, ok: false });
    }
    window.setTimeout(() => setCopied(null), 2500);
  };

  const copyLabel = (label: string) => (copied?.label !== label ? 'Salin' : copied.ok ? 'Tersalin' : 'Gagal menyalin');

  if (!latestDeployment) {
    return (
      <EmptyState title="Aplikasi belum berjalan">
        Pratinjau muncul di sini setelah build pertama berhasil. Sampai saat itu, ikuti kemajuannya di tab Build.
      </EmptyState>
    );
  }

  return (
    <div className="stack">
      {appReady && credentialsLoaded && (
        <section className="card card--warm stack-sm" aria-labelledby="judul-akun">
          <h3 id="judul-akun">Akun masuk aplikasi</h3>
          {credentials ? (
            <>
              <dl className="creds">
                <div>
                  <dt className="small muted">Email</dt>
                  <dd className="row">
                    <code>{credentials.email}</code>
                    <button type="button" className="btn btn--secondary btn--sm" onClick={() => void copy('email', credentials.email)}>
                      {copyLabel('email')}
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="small muted">Kata sandi awal</dt>
                  <dd className="row">
                    <code>{showPassword ? credentials.password : '••••••••••'}</code>
                    <button type="button" className="btn btn--secondary btn--sm" aria-pressed={showPassword} onClick={() => setShowPassword((v) => !v)}>
                      {showPassword ? 'Sembunyikan' : 'Tampilkan'}
                    </button>
                    <button type="button" className="btn btn--secondary btn--sm" onClick={() => void copy('password', credentials.password)}>
                      {copyLabel('password')}
                    </button>
                  </dd>
                </div>
              </dl>
              <p className="small muted">Ganti kata sandi setelah masuk. Kartu ini selalu menampilkan kata sandi awal, bukan yang sudah Anda ubah.</p>
            </>
          ) : (
            <p className="muted">Aplikasi ini tidak memakai login, atau akun awalnya belum tersedia.</p>
          )}
        </section>
      )}

      <section className="stack-sm" aria-labelledby="judul-pratinjau">
        <div className="row-between">
          <h3 id="judul-pratinjau">Pratinjau</h3>
          {previewRunning ? <span className="tag tag--ok">Berjalan</span> : <span className="tag tag--warn">Berhenti</span>}
        </div>

        {previewRunning ? (
          <div className="stack-sm">
            <iframe
              className="preview-frame"
              src={latestDeployment.url}
              title="Pratinjau aplikasi"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-downloads"
            />
            <p className="small muted">
              Alamat <code>{latestDeployment.url}</code>. Kalau tampilan di atas kosong, buka aplikasi di tab sendiri.{' '}
              <a className="link" href={latestDeployment.url} target="_blank" rel="noreferrer">
                Buka aplikasi di tab baru
              </a>
            </p>
          </div>
        ) : (
          <div className="stack frame frame--empty">
            {previewStarting ? (
              <Spinner label="Menyalakan aplikasi dengan data yang sudah ada. Biasanya kurang dari satu menit." />
            ) : (
              <>
                <h4>Pratinjau sedang berhenti</h4>
                <p className="muted">Pratinjau ikut berhenti saat server platform dimulai ulang. Kode dan data aplikasi Anda tetap tersimpan.</p>
                {previewError && <Notice tone="bad">{previewError}</Notice>}
                {appReady ? (
                  <div>
                    <button type="button" className="btn" onClick={() => void state.startPreview()}>
                      Jalankan pratinjau
                    </button>
                  </div>
                ) : (
                  <p className="small muted">Pratinjau bisa dijalankan lagi setelah aplikasi berstatus siap dipakai.</p>
                )}
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
