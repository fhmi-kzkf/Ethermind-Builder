import React, { useCallback, useEffect, useState } from 'react';
import api, { type VersionItem } from '../../services/api';
import { Dialog, EmptyState, Notice, Spinner } from '../ui';

interface Props {
  open: boolean;
  projectId: string;
  onClose: () => void;
  /** Called after a version was restored, so the screen reloads the project, preview and spec. */
  onRestored: (restoredJobId: string | null) => void;
}

const dateFormat = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/** Mounted only while the dialog is open: it loads the history on opening and starts clean each time. */
const VersionList: React.FC<Omit<Props, 'open'>> = ({ projectId, onClose, onRestored }) => {
  const [versions, setVersions] = useState<VersionItem[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState<VersionItem | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    try {
      setVersions(await api.projects.versions(projectId));
    } catch (err: any) {
      setLoadError(err.message || 'Riwayat versi belum bisa dimuat.');
    }
  }, [projectId]);

  useEffect(() => {
    void load();
  }, [load]);

  const restore = async (version: VersionItem) => {
    setBusy(true);
    setError(null);
    try {
      const result = await api.projects.restoreVersion(projectId, version.id);
      onRestored(version.jobId);
      if (result.previewError) setError(`Versi dikembalikan, tetapi pratinjau belum menyala: ${result.previewError.slice(0, 160)} Nyalakan dari tab Pratinjau.`);
      else onClose();
    } catch (err: any) {
      setError(err.message || 'Versi belum bisa dikembalikan.');
      setBusy(false);
      return;
    }
    setBusy(false);
  };

  if (loadError) {
    return (
      <div className="stack">
        <Notice tone="bad">{loadError}</Notice>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Tutup
          </button>
          <button type="button" className="btn" onClick={() => void load()}>
            Coba lagi
          </button>
        </div>
      </div>
    );
  }

  if (!versions) return <Spinner label="Memuat riwayat versi" />;

  if (versions.length === 0) {
    return (
      <EmptyState title="Belum ada versi">
        Versi tercatat setiap kali build atau revisi berhasil dan aplikasinya berjalan. Bangun aplikasinya dulu.
      </EmptyState>
    );
  }

  if (confirming) {
    return (
      <div className="stack">
        <p>
          Kembali ke <strong>{confirming.summary}</strong>?
        </p>
        <p className="muted">
          Kode, rancangan, dan data contoh aplikasi kembali seperti saat versi itu dibuat. Data yang Anda isi setelah versi itu diganti tidak ikut kembali. Versi yang sekarang tetap ada di riwayat dan bisa dipulihkan lagi.
        </p>
        {error && <Notice tone="bad">{error}</Notice>}
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={() => { setConfirming(null); setError(null); }} disabled={busy}>
            Batal
          </button>
          <button type="button" className="btn" data-autofocus onClick={() => void restore(confirming)} disabled={busy}>
            {busy ? 'Mengembalikan...' : 'Kembalikan versi ini'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="stack">
      {error && <Notice tone="bad">{error}</Notice>}
      <ul className="versions" aria-label="Riwayat versi">
        {versions.map((version) => (
          <li key={version.id} className="version">
            <div className="stack-sm">
              <div className="row">
                <strong>{version.kind === 'revision' ? 'Revisi' : 'Build pertama'}</strong>
                {version.active && <span className="tag tag--ok">Aktif</span>}
                {!version.available && <span className="tag tag--warn">Berkas hilang</span>}
              </div>
              <p className="small muted">{dateFormat.format(new Date(version.createdAt))}</p>
              {version.request && <p>"{version.request}"</p>}
            </div>
            {!version.active && (
              <button type="button" className="btn btn--secondary btn--sm" disabled={!version.available} onClick={() => { setError(null); setConfirming(version); }}>
                Kembalikan
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="row" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn--secondary" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export const VersionsDialog: React.FC<Props> = ({ open, ...rest }) => (
  <Dialog open={open} onClose={rest.onClose} title="Riwayat versi" description="Setiap build dan revisi yang berhasil tersimpan sebagai versi. Pilih satu untuk mengembalikan aplikasi ke sana.">
    <VersionList {...rest} />
  </Dialog>
);
