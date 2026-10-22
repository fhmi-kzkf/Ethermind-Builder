import React, { useState } from 'react';
import { MODEL_CHOICES, TIER_LABEL } from '../../data/models';
import type { Job } from '../../types';
import { Dialog, EmptyState, Notice } from '../ui';
import { BuildLog } from './BuildLog';
import { QualityChecks } from './QualityChecks';
import type { BuilderState } from './useBuilder';

interface Props {
  state: BuilderState;
  onOpenSpec: () => void;
  /** Opens the QRIS payment step for the source download. */
  onPay: () => void;
}

const HEADLINE: Record<string, { title: string; tag: string; tone: '' | 'ok' | 'warn' | 'bad' | 'accent'; text: string }> = {
  pending: { title: 'Menunggu giliran', tag: 'Menunggu', tone: 'accent', text: 'Build akan mulai begitu ada slot kosong.' },
  running: { title: 'Aplikasi sedang dibangun', tag: 'Berjalan', tone: 'accent', text: 'Kode ditulis dan diperiksa. Catatan di bawah bergerak sendiri.' },
  completed: { title: 'Aplikasi sudah berjalan', tag: 'Selesai', tone: 'ok', text: 'Pemeriksaan dasar lolos. Pemeriksaan yang lebih lama dicatat di bawah apa adanya.' },
  needs_review: { title: 'Belum lolos pemeriksaan', tag: 'Perlu ditinjau', tone: 'warn', text: 'Kode sudah ditulis, tetapi belum lolos semua pemeriksaan setelah perbaikan otomatis, jadi belum dijalankan.' },
  failed: { title: 'Build berhenti', tag: 'Gagal', tone: 'bad', text: 'Build terhenti sebelum selesai.' },
  cancelled: { title: 'Build dibatalkan', tag: 'Dibatalkan', tone: '', text: 'Build dihentikan atas permintaan Anda.' },
  paused: { title: 'Build dijeda', tag: 'Dijeda', tone: 'warn', text: 'Build menunggu untuk dilanjutkan.' },
};

function engineName(job: Job): string | null {
  const id = (job as Job & { model?: string | null }).model;
  if (!id) return null;
  const choice = MODEL_CHOICES.find((m) => m.id === id);
  return choice ? `${choice.name} (${TIER_LABEL[choice.tier]})` : id;
}

/** Where a waiting build stands, in plain words. The minutes are a rough guess and are labelled as one. */
function queueText(queue: NonNullable<Job['queue']>): string {
  if (queue.position === null) return 'Build akan mulai begitu ada slot kosong.';
  const place = queue.position === 1 ? 'Anda berikutnya' : `Anda antrean ke-${queue.position}`;
  const wait =
    queue.estimatedWaitMinutes === null
      ? ''
      : queue.estimatedWaitMinutes === 0
        ? ' Build segera dimulai.'
        : ` Perkiraan kasar mulai sekitar ${queue.estimatedWaitMinutes} menit lagi, dari lama build sebelumnya.`;
  return `${place}. ${queue.active} build sedang berjalan, maksimal ${queue.maxConcurrency} bersamaan.${wait} Halaman ini memperbarui diri, jadi Anda boleh menutupnya dan kembali nanti.`;
}

export const BuildPanel: React.FC<Props> = ({ state, onOpenSpec, onPay }) => {
  const { activeJob: job, jobEvents, gates, jobError, backgroundPending } = state;
  const [confirm, setConfirm] = useState<'cancel' | 'rebuild' | null>(null);

  if (!job) {
    return (
      <EmptyState
        title="Belum ada build"
        action={
          <button type="button" className="btn btn--secondary" onClick={onOpenSpec}>
            Lihat rancangan
          </button>
        }
      >
        Build dimulai setelah Anda menyetujui rancangan. Selesaikan pertanyaan di percakapan, lalu setujui rancangannya.
      </EmptyState>
    );
  }

  const headline = HEADLINE[job.status] ?? { title: `Status: ${job.status}`, tag: job.status, tone: '' as const, text: '' };
  const engine = engineName(job);
  const stopped = job.status === 'needs_review' || job.status === 'failed';

  return (
    <div className="stack">
      <section className="stack" aria-labelledby="judul-status-build">
        <div className="row">
          <h2 id="judul-status-build" className="panel__title">
            {headline.title}
          </h2>
          <span className={`tag${headline.tone ? ` tag--${headline.tone}` : ''}`}>{headline.tag}</span>
        </div>
        <p className="muted">{job.status === 'pending' && job.queue ? queueText(job.queue) : headline.text}</p>
        <p className="small muted num">
          Langkah {job.stepCount} dari {job.maxSteps} · {job.tokensUsed.toLocaleString('id-ID')} token terpakai{engine ? ` · Mesin ${engine}` : ''}
        </p>
        {stopped && job.errorMessage && (
          <Notice tone={job.status === 'failed' ? 'bad' : 'warn'} title="Yang terjadi">
            {job.errorMessage}
          </Notice>
        )}
        {jobError && <Notice tone="bad">{jobError}</Notice>}
        {job.status === 'completed' && state.payment?.required && (
          <div className="pay__cta">
            <p>
              <strong>Aplikasi bisa dicoba sekarang, tanpa biaya.</strong> Untuk membawa kodenya pulang, bayar Rp {new Intl.NumberFormat('id-ID').format(state.payment.amount ?? 0)} lewat QRIS, lalu unduh sebagai .zip.
            </p>
            <button type="button" className="btn btn--sm" onClick={onPay}>
              Bayar dengan QRIS
            </button>
          </div>
        )}
        <div className="row">
          {stopped && (
            <>
              <button type="button" className="btn" onClick={() => void state.resumeJob()}>
                Lanjutkan
              </button>
              <button type="button" className="btn btn--quiet btn--sm" onClick={() => setConfirm('rebuild')}>
                Bangun ulang dari awal
              </button>
            </>
          )}
          {job.status === 'running' && (
            <button type="button" className="btn btn--danger btn--sm" onClick={() => setConfirm('cancel')}>
              Batalkan build
            </button>
          )}
        </div>
        {stopped && <p className="small muted">Lanjutkan menjalankan perbaikan dan pemeriksaan lagi pada kode yang sudah ditulis, tanpa menulis ulang dari nol.</p>}
      </section>

      <QualityChecks gates={gates} backgroundPending={backgroundPending} />
      <BuildLog events={jobEvents} />

      <Dialog
        open={confirm === 'cancel'}
        onClose={() => setConfirm(null)}
        title="Batalkan build?"
        description="Build berhenti sekarang. Kode yang sudah ditulis tetap tersimpan, dan Anda bisa melanjutkannya nanti."
      >
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={() => setConfirm(null)}>
            Jangan batalkan
          </button>
          <button
            type="button"
            className="btn btn--danger"
            onClick={() => {
              setConfirm(null);
              void state.cancelJob();
            }}
          >
            Ya, batalkan
          </button>
        </div>
      </Dialog>

      <Dialog
        open={confirm === 'rebuild'}
        onClose={() => setConfirm(null)}
        title="Bangun ulang dari awal?"
        description="Semua kode ditulis ulang oleh AI, dan itu memakai token lagi. Pilih ini hanya bila Lanjutkan tidak membantu."
      >
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={() => setConfirm(null)}>
            Kembali
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setConfirm(null);
              void state.rebuildJob();
            }}
          >
            Bangun ulang
          </button>
        </div>
      </Dialog>
    </div>
  );
};
