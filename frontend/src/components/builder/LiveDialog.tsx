import React, { useEffect, useRef, useState } from 'react';
import api, { type LiveState } from '../../services/api';
import { Dialog, Notice, Spinner } from '../ui';

interface Props {
  open: boolean;
  projectId: string;
  live: LiveState | null;
  onClose: () => void;
  /** Called after any change so the header button and the state it shows follow. */
  onChanged: () => void;
}

const dateFormat = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/** Mounted only while the dialog is open: it asks the server again on opening and starts clean each time. */
const LiveFlow: React.FC<Omit<Props, 'open'>> = ({ projectId, live: initial, onClose, onChanged }) => {
  const [state, setState] = useState<LiveState | null>(initial);
  const [slug, setSlug] = useState(initial?.slug ?? initial?.suggestedSlug ?? '');
  const [renaming, setRenaming] = useState(false);
  const [confirmOff, setConfirmOff] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<'publish' | 'unpublish' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    api.live
      .get(projectId)
      .then((fresh) => {
        setState(fresh);
        setSlug((current) => current || fresh.slug || fresh.suggestedSlug);
      })
      .catch((err: any) => setError(err.message || 'Status link live belum bisa dimuat.'));
  }, [projectId]);

  const publish = async () => {
    setBusy('publish');
    setError(null);
    try {
      const next = await api.live.publish(projectId, { slug: slug.trim() || undefined });
      setState(next);
      setSlug(next.slug ?? slug);
      setRenaming(false);
      onChanged();
    } catch (err: any) {
      setError(err.message || 'Aplikasi belum bisa diterbitkan.');
    } finally {
      setBusy(null);
    }
  };

  const unpublish = async () => {
    setBusy('unpublish');
    setError(null);
    try {
      setState(await api.live.unpublish(projectId));
      setConfirmOff(false);
      onChanged();
    } catch (err: any) {
      setError(err.message || 'Aplikasi belum bisa ditarik.');
    } finally {
      setBusy(null);
    }
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Alamat belum bisa disalin otomatis. Salin dari kotak di atas.');
    }
  };

  if (!state) return error ? <Notice tone="bad">{error}</Notice> : <Spinner label="Memuat status link live" />;

  if (!state.enabled) {
    return (
      <div className="stack">
        <Notice tone="warn">{state.reason ?? 'Link live belum diaktifkan di server ini.'}</Notice>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    );
  }

  const preview = state.urlTemplate ? state.urlTemplate.replace('{slug}', slug.trim().toLowerCase() || 'nama-anda') : '';

  if (confirmOff) {
    return (
      <div className="stack">
        <p>
          Tarik <strong>{state.url}</strong> dari internet?
        </p>
        <p className="muted">Orang yang membuka alamat itu akan melihat pesan bahwa aplikasi belum diterbitkan. Data aplikasi tetap tersimpan, dan nama alamatnya tetap milik Anda. Anda bisa menerbitkannya lagi kapan saja.</p>
        {error && <Notice tone="bad">{error}</Notice>}
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={() => setConfirmOff(false)} disabled={busy !== null}>
            Batal
          </button>
          <button type="button" className="btn btn--danger" data-autofocus onClick={() => void unpublish()} disabled={busy !== null}>
            {busy === 'unpublish' ? 'Menarik...' : 'Ya, tarik'}
          </button>
        </div>
      </div>
    );
  }

  const form = (label: string) => (
    <div className="stack">
      <div className="field">
        <label htmlFor="live-slug">Nama alamat</label>
        <input id="live-slug" className="input" value={slug} onChange={(e) => setSlug(e.target.value)} maxLength={30} autoCapitalize="none" spellCheck={false} aria-describedby="live-slug-hint" />
        <p id="live-slug-hint" className="hint">
          Alamat Anda akan menjadi <strong>{preview}</strong>. Huruf kecil, angka, dan tanda hubung, 3 sampai 30 karakter.
        </p>
      </div>
      <button type="button" className="btn" onClick={() => void publish()} disabled={busy !== null || !state.allowed || slug.trim().length < 3}>
        {busy === 'publish' ? 'Menerbitkan, biasanya setengah menit...' : label}
      </button>
    </div>
  );

  return (
    <div className="stack">
      {!state.allowed && <Notice tone="warn">{state.reason}</Notice>}

      {state.published && state.url ? (
        <>
          <div className="live__url">
            <a className="link" href={state.url} target="_blank" rel="noreferrer">
              {state.url}
            </a>
            <button type="button" className="btn btn--secondary btn--sm" onClick={() => void copy(state.url as string)}>
              {copied ? 'Tersalin' : 'Salin alamat'}
            </button>
          </div>
          <p className="small muted">
            {state.versionSummary ? `${state.versionSummary}. ` : ''}Terbit {state.publishedAt ? dateFormat.format(new Date(state.publishedAt)) : ''}. {state.running ? 'Sedang menyala.' : 'Sedang beristirahat; menyala sendiri dalam beberapa detik saat ada yang membukanya.'}
          </p>
          <Notice>
            Aplikasi live beristirahat bila lama tidak dibuka, lalu menyala lagi saat dikunjungi. Datanya terpisah dari pratinjau: membangun ulang atau merevisi tidak menghapus isi yang sudah dimasukkan ke aplikasi live.
          </Notice>

          {state.credentials && (
            <div className="stack-sm">
              <h3 style={{ fontSize: 'var(--text-base)' }}>Akun administrator aplikasi live</h3>
              <p className="small muted">Akun pertama untuk masuk ke aplikasi live. Ini berbeda dari akun pratinjau.</p>
              <dl className="pay__sum">
                <div>
                  <dt>Email</dt>
                  <dd>{state.credentials.email}</dd>
                </div>
                <div>
                  <dt>Kata sandi</dt>
                  <dd>
                    <span className="num">{showPassword ? state.credentials.password : '••••••••••••'}</span>{' '}
                    <button type="button" className="btn btn--quiet btn--sm" onClick={() => setShowPassword((v) => !v)} aria-pressed={showPassword}>
                      {showPassword ? 'Sembunyikan' : 'Tampilkan'}
                    </button>
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {renaming ? (
            form('Simpan nama baru dan terbitkan')
          ) : (
            <div className="row">
              <button type="button" className="btn" onClick={() => void publish()} disabled={busy !== null || !state.allowed}>
                {busy === 'publish' ? 'Menerbitkan...' : 'Terbitkan versi aktif'}
              </button>
              <button type="button" className="btn btn--secondary" onClick={() => setRenaming(true)} disabled={busy !== null}>
                Ganti nama alamat
              </button>
              <button type="button" className="btn btn--quiet" onClick={() => setConfirmOff(true)} disabled={busy !== null}>
                Tarik dari internet
              </button>
            </div>
          )}
          <p className="small muted">"Terbitkan versi aktif" memasang versi yang sedang Anda pakai di Riwayat versi, dengan data live yang sudah ada.</p>
        </>
      ) : (
        <>
          <p>Terbitkan aplikasi ini agar siapa pun yang punya alamatnya bisa membukanya, bukan hanya Anda di pratinjau. Versi yang sedang aktif yang diterbitkan, dan aplikasi live mulai dengan data kosong, hanya akun administrator.</p>
          {state.slug && <p className="small muted">Nama <strong>{state.slug}</strong> masih milik proyek ini.</p>}
          {form('Terbitkan')}
        </>
      )}

      <p className="small muted">
        Link live terpakai {state.quota.used} dari {state.quota.max} di akun ini.
      </p>
      {error && <Notice tone="bad">{error}</Notice>}
      <div className="row" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn--secondary" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export const LiveDialog: React.FC<Props> = ({ open, ...rest }) => (
  <Dialog open={open} onClose={rest.onClose} title="Link live" description="Alamat publik untuk aplikasi Anda, dengan data yang terpisah dari pratinjau.">
    <LiveFlow {...rest} />
  </Dialog>
);
