import React, { useCallback, useEffect, useId, useState } from 'react';
import api, { type AdminPayment, type SystemSnapshot } from '../services/api';
import type { AdminMetrics, Job, JobStatus } from '../types';
import { Dialog, EmptyState, Notice } from './ui';

const PAGE_SIZE = 20;
const POLL_MS = 5000;

/** What /admin/metrics and /admin/jobs return beyond the shared types. */
type Metrics = Omit<AdminMetrics, 'summary'> & { summary: AdminMetrics['summary'] & { needsReviewJobs?: number } };
type AdminJob = Omit<Job, 'gateResults'> & {
  project?: { id: string; name: string } | null;
  gateResults?: Array<{ gate: string; passed: boolean }>;
};
type Action = 'cancel' | 'retry' | 'mark_completed';

const STATUS: Record<JobStatus, { label: string; tone: 'neutral' | 'ok' | 'warn' | 'bad' }> = {
  pending: { label: 'Menunggu', tone: 'neutral' },
  running: { label: 'Berjalan', tone: 'warn' },
  paused: { label: 'Dijeda', tone: 'neutral' },
  completed: { label: 'Selesai', tone: 'ok' },
  needs_review: { label: 'Perlu ditinjau', tone: 'warn' },
  failed: { label: 'Gagal', tone: 'bad' },
  cancelled: { label: 'Dibatalkan', tone: 'neutral' },
};

const JOB_TYPE: Record<string, string> = { build: 'Build', revision: 'Revisi' };

const ACTION_COPY: Record<Action, { title: string; body: string; confirm: string; danger?: boolean }> = {
  cancel: { title: 'Batalkan job ini?', body: 'Job dihentikan. Kode yang sudah ditulis tetap ada di workspace.', confirm: 'Batalkan job', danger: true },
  retry: { title: 'Ulangi job ini?', body: 'Dibuat job baru dengan rancangan dan model yang sama. Job lama tetap tercatat.', confirm: 'Ulangi' },
  mark_completed: {
    title: 'Tandai selesai setelah ditinjau?',
    body: 'Gerbang mutu yang belum lolos tidak dijalankan lagi. Proyek berubah menjadi Siap dan klien melihatnya sebagai build yang berhasil. Lakukan hanya setelah Anda memeriksa kodenya.',
    confirm: 'Tandai selesai',
    danger: true,
  },
};

const FILTERS: Array<{ value: string; label: string }> = [
  { value: '', label: 'Semua status' },
  ...(['running', 'pending', 'needs_review', 'failed', 'completed', 'cancelled'] as JobStatus[]).map((s) => ({ value: s, label: STATUS[s].label })),
];

const PAYMENT_STATUS: Record<string, { label: string; tone: 'neutral' | 'ok' | 'warn' | 'bad' }> = {
  reported: { label: 'Pembeli bilang sudah bayar', tone: 'warn' },
  pending: { label: 'Belum dibayar', tone: 'neutral' },
  expired: { label: 'Kedaluwarsa', tone: 'neutral' },
};

const nf = new Intl.NumberFormat('id-ID');
const when = (iso: string) => new Date(iso).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const usd = (n: number) => `US$ ${n.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;

export const AdminDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<{ job: AdminJob; action: Action } | null>(null);
  const [acting, setActing] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [system, setSystem] = useState<SystemSnapshot | null>(null);
  const [maintenanceNote, setMaintenanceNote] = useState<{ tone: 'ok' | 'bad'; text: string } | null>(null);
  const [maintenanceBusy, setMaintenanceBusy] = useState(false);
  const [confirmCleanup, setConfirmCleanup] = useState(false);
  const [payments, setPayments] = useState<AdminPayment[]>([]);
  const [payAction, setPayAction] = useState<{ order: AdminPayment; action: 'confirm' | 'reject' } | null>(null);
  const [payActing, setPayActing] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);
  const filterId = useId();

  const load = useCallback(async () => {
    try {
      const [m, j, p, sys] = await Promise.all([api.admin.getMetrics(), api.admin.listJobs(page, statusFilter || undefined), api.admin.listPayments(), api.admin.system()]);
      setMetrics(m as Metrics);
      setSystem(sys);
      setJobs(j.jobs as unknown as AdminJob[]);
      setTotal(j.total);
      // Orders whose buyer says they paid come first: those are the ones waiting for a person.
      setPayments([...p].sort((a, b) => Number(b.status === 'reported') - Number(a.status === 'reported')));
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'Data admin belum bisa dimuat.');
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter]);

  useEffect(() => {
    setLoading(true);
    void load();
    const timer = window.setInterval(() => {
      if (!document.hidden) void load();
    }, POLL_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  const run = async () => {
    if (!pending) return;
    setActing(true);
    setActionError(null);
    try {
      await api.admin.intervene(pending.job.id, pending.action);
      setPending(null);
      await load();
    } catch (err: any) {
      setActionError(err?.message || 'Tindakan belum berhasil.');
    } finally {
      setActing(false);
    }
  };

  const runPayment = async () => {
    if (!payAction) return;
    setPayActing(true);
    setPayError(null);
    try {
      if (payAction.action === 'confirm') await api.admin.confirmPayment(payAction.order.id);
      else await api.admin.rejectPayment(payAction.order.id);
      setPayAction(null);
      await load();
    } catch (err: any) {
      setPayError(err?.message || 'Tindakan belum berhasil.');
    } finally {
      setPayActing(false);
    }
  };

  const runMaintenance = async (task: 'cleanup' | 'backup', dryRun = false) => {
    setMaintenanceBusy(true);
    setMaintenanceNote(null);
    try {
      const r = (await api.admin.runMaintenance(task, dryRun)) as Record<string, any>;
      const errors = Array.isArray(r.errors) ? r.errors.length : 0;
      const text =
        task === 'backup'
          ? `Cadangan dibuat di ${r.directory}: database platform ${r.platformDatabase ? 'tersalin' : 'GAGAL'}, ${r.liveDatabases} database live${errors ? `, ${errors} galat` : ''}.`
          : `${dryRun ? 'Akan dihapus' : 'Dihapus'}: node_modules ${r.nodeModulesRemoved} versi lama, ${r.failedRemoved} workspace build gagal, ${r.orphansRemoved} workspace yatim, ${r.exportsRemoved} berkas ekspor${errors ? `. ${errors} galat, lihat log server.` : '.'}`;
      setMaintenanceNote({ tone: errors || (task === 'backup' && !r.platformDatabase) ? 'bad' : 'ok', text });
      setConfirmCleanup(false);
      await load();
    } catch (err: any) {
      setMaintenanceNote({ tone: 'bad', text: err?.message || 'Tugas belum berhasil.' });
    } finally {
      setMaintenanceBusy(false);
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const actionsFor = (job: AdminJob): Action[] => {
    if (job.status === 'running' || job.status === 'pending') return ['cancel'];
    if (job.status === 'needs_review') return ['retry', 'mark_completed'];
    if (job.status === 'failed' || job.status === 'cancelled') return ['retry'];
    return [];
  };
  const actionLabel: Record<Action, string> = { cancel: 'Batalkan', retry: 'Ulangi', mark_completed: 'Tandai selesai' };

  const summary = metrics?.summary;

  return (
    <div className="workspace container">
      <div className="workspace__head">
        <div className="stack-sm">
          <h1>Pantauan build</h1>
          <p className="muted">Data langsung dari server, diperbarui tiap {POLL_MS / 1000} detik. Biaya adalah estimasi dari jumlah token, bukan tagihan penyedia.</p>
        </div>
        <button type="button" className="btn btn--secondary" onClick={() => void load()}>
          Muat ulang
        </button>
      </div>

      {error && (
        <div style={{ marginBottom: 'var(--space-5)' }}>
          <Notice tone="bad" title="Data belum bisa dimuat">
            {error}
          </Notice>
        </div>
      )}

      <section aria-labelledby="judul-ringkasan">
        <h2 id="judul-ringkasan" className="sr-only">
          Ringkasan
        </h2>
        {loading && !metrics ? (
          <div className="facts" aria-busy="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="skeleton" style={{ height: 64 }} />
            ))}
          </div>
        ) : summary ? (
          <dl className="facts">
            <div className="fact">
              <dt>Total job</dt>
              <dd>{nf.format(summary.totalJobs)}</dd>
            </div>
            <div className="fact">
              <dt>Selesai</dt>
              <dd>{nf.format(summary.completedJobs)}</dd>
            </div>
            <div className="fact">
              <dt>Perlu ditinjau</dt>
              <dd>{nf.format(summary.needsReviewJobs ?? 0)}</dd>
            </div>
            <div className="fact">
              <dt>Gagal</dt>
              <dd>{nf.format(summary.failedJobs)}</dd>
            </div>
            <div className="fact">
              <dt>Tingkat selesai</dt>
              <dd>
                {summary.successRate}
                <small>dari job yang sudah berakhir</small>
              </dd>
            </div>
            <div className="fact">
              <dt>Token terpakai</dt>
              <dd>{nf.format(summary.totalTokensUsed)}</dd>
            </div>
            <div className="fact">
              <dt>Estimasi biaya model</dt>
              <dd>{usd(summary.totalEstimatedCostUSD)}</dd>
            </div>
            <div className="fact">
              <dt>Menunggu di antrean</dt>
              <dd>{nf.format(metrics!.queueStatus.queued)}</dd>
            </div>
            <div className="fact">
              <dt>Sedang berjalan</dt>
              <dd>
                {nf.format(metrics!.queueStatus.active)}
                <small>maksimal {metrics!.queueStatus.maxConcurrency} bersamaan</small>
              </dd>
            </div>
          </dl>
        ) : null}
      </section>

      <section className="admin-section" aria-labelledby="judul-kapasitas">
        <h2 id="judul-kapasitas">Kapasitas server</h2>
        {system && (
          <>
            {system.warnings.length > 0 && (
              <div className="stack-sm" style={{ marginBottom: 'var(--space-4)' }}>
                {system.warnings.map((w) => (
                  <Notice key={w} tone="warn">
                    {w}
                  </Notice>
                ))}
              </div>
            )}
            <dl className="facts">
              <div className="fact">
                <dt>Memori bebas</dt>
                <dd>
                  {system.memory.freePercent}%
                  <small>
                    {nf.format(system.memory.freeMb)} dari {nf.format(system.memory.totalMb)} MB
                  </small>
                </dd>
              </div>
              <div className="fact">
                <dt>Disk bebas</dt>
                <dd>
                  {system.disk ? `${system.disk.freePercent}%` : '-'}
                  {system.disk && (
                    <small>
                      {system.disk.freeGb} dari {system.disk.totalGb} GB
                    </small>
                  )}
                </dd>
              </div>
              <div className="fact">
                <dt>Aplikasi menyala</dt>
                <dd>
                  {system.apps.previewRunning + system.apps.liveRunning}
                  <small>
                    {system.apps.previewRunning} pratinjau, {system.apps.liveRunning} live, dari {system.apps.portsTotal} port
                  </small>
                </dd>
              </div>
              <div className="fact">
                <dt>Link live terbit</dt>
                <dd>{system.apps.livePublished}</dd>
              </div>
              <div className="fact">
                <dt>Antrean build</dt>
                <dd>
                  {system.queue.waiting}
                  <small>
                    {system.queue.active} berjalan, maksimal {system.queue.maxConcurrency}
                  </small>
                </dd>
              </div>
              <div className="fact">
                <dt>Beban CPU</dt>
                <dd>
                  {system.cpu.load1}
                  <small>{system.cpu.cores} inti</small>
                </dd>
              </div>
              <div className="fact">
                <dt>Gerbang aplikasi</dt>
                <dd>
                  {nf.format(system.gateway.requests)}
                  <small>
                    permintaan sejak server menyala, {system.gateway.wakes} dinyalakan, {system.gateway.idleStopped} ditidurkan, {system.gateway.rateLimited} dibatasi
                  </small>
                </dd>
              </div>
              <div className="fact">
                <dt>Folder</dt>
                <dd>
                  {nf.format(system.storage.workspaces)}
                  <small>workspace versi, {system.storage.liveData} data live</small>
                </dd>
              </div>
            </dl>
            <p className="small muted" style={{ marginTop: 'var(--space-3)' }}>
              Cadangan terakhir:{' '}
              {system.lastBackup ? `${when(system.lastBackup.at)}, ${system.lastBackup.liveDatabases} database live${system.lastBackup.errors ? `, ${system.lastBackup.errors} galat` : ''}` : 'belum ada sejak server menyala'}. Pembersihan terakhir:{' '}
              {system.lastCleanup ? `${when(system.lastCleanup.at)}, ${system.lastCleanup.nodeModulesRemoved} node_modules lama dihapus` : 'belum berjalan sejak server menyala'}. Domain aplikasi: {system.apps.domain ?? 'belum diisi'}.
            </p>
          </>
        )}
        {maintenanceNote && (
          <div style={{ marginTop: 'var(--space-3)' }}>
            <Notice tone={maintenanceNote.tone}>{maintenanceNote.text}</Notice>
          </div>
        )}
        <div className="row" style={{ marginTop: 'var(--space-4)' }}>
          <button type="button" className="btn btn--secondary btn--sm" onClick={() => void runMaintenance('backup')} disabled={maintenanceBusy}>
            Cadangkan sekarang
          </button>
          <button type="button" className="btn btn--secondary btn--sm" onClick={() => void runMaintenance('cleanup', true)} disabled={maintenanceBusy}>
            Lihat yang akan dibersihkan
          </button>
          <button type="button" className="btn btn--secondary btn--sm" onClick={() => setConfirmCleanup(true)} disabled={maintenanceBusy}>
            Bersihkan sekarang
          </button>
        </div>
      </section>

      <section className="admin-section" aria-labelledby="judul-bayar">
        <h2 id="judul-bayar">Pembayaran QRIS</h2>
        <p className="muted" style={{ marginBottom: 'var(--space-4)' }}>
          Tidak ada notifikasi otomatis dari bank. Cocokkan nominal tepat (harga plus kode unik) dengan mutasi merchant, baru konfirmasi: unduhan kode terbuka seketika. Pesanan yang kedaluwarsa tetap tampil seminggu, karena pembeli bisa saja membayar sesaat setelah kodenya habis.
        </p>
        {payments.length === 0 ? (
          <EmptyState title="Tidak ada pembayaran yang menunggu">Pesanan muncul di sini begitu pembeli membuka kode QRIS dari proyeknya yang sudah selesai.</EmptyState>
        ) : (
          <div className="table-wrap" role="region" aria-label="Tabel pembayaran menunggu" tabIndex={0}>
            <table className="table">
              <caption className="sr-only">Pembayaran QRIS yang menunggu, yang dilaporkan pembeli di atas</caption>
              <thead>
                <tr>
                  <th scope="col">Proyek</th>
                  <th scope="col">Pemilik</th>
                  <th scope="col" className="num">
                    Nominal tepat
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Dibuat</th>
                  <th scope="col">Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((order) => {
                  const status = PAYMENT_STATUS[order.status] ?? { label: order.status, tone: 'neutral' as const };
                  return (
                    <tr key={order.id}>
                      <th scope="row" className="cell-name">
                        {order.project?.name ?? 'Proyek dihapus'}
                      </th>
                      <td>{order.project?.ownerEmail ?? '-'}</td>
                      <td className="num">
                        Rp {nf.format(order.total)}
                        <span className="hint" style={{ display: 'block', fontWeight: 400 }}>
                          harga {nf.format(order.amount)} + kode {order.uniqueCode}
                        </span>
                      </td>
                      <td>
                        <span className={`tag${status.tone === 'neutral' ? '' : ` tag--${status.tone}`}`}>{status.label}</span>
                      </td>
                      <td>{when(order.createdAt)}</td>
                      <td className="actions">
                        <span className="row" style={{ gap: 'var(--space-1)' }}>
                          <button type="button" className="btn btn--sm" onClick={() => { setPayError(null); setPayAction({ order, action: 'confirm' }); }}>
                            Konfirmasi
                            <span className="sr-only"> pembayaran {order.project?.name ?? ''}</span>
                          </button>
                          <button type="button" className="btn btn--sm btn--secondary" onClick={() => { setPayError(null); setPayAction({ order, action: 'reject' }); }}>
                            Tolak
                            <span className="sr-only"> pembayaran {order.project?.name ?? ''}</span>
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section" aria-labelledby="judul-model">
        <h2 id="judul-model">Pemakaian per model</h2>
        {metrics && metrics.modelBreakdown.length === 0 ? (
          <EmptyState title="Belum ada pemakaian model">Tabel ini terisi setelah build pertama memanggil model AI.</EmptyState>
        ) : (
          <div className="table-wrap" role="region" aria-label="Tabel pemakaian per model" tabIndex={0}>
            <table className="table table--models">
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col" className="num">
                    Token masuk
                  </th>
                  <th scope="col" className="num">
                    Token keluar
                  </th>
                  <th scope="col" className="num">
                    Total token
                  </th>
                  <th scope="col" className="num">
                    Estimasi biaya
                  </th>
                </tr>
              </thead>
              <tbody>
                {(metrics?.modelBreakdown ?? []).map((m) => (
                  <tr key={m.model}>
                    <th scope="row" className="cell-name">
                      {m.model}
                    </th>
                    <td className="num">{nf.format(m.inputTokens)}</td>
                    <td className="num">{nf.format(m.outputTokens)}</td>
                    <td className="num">{nf.format(m.totalTokens)}</td>
                    <td className="num">{usd(m.costUSD)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section" aria-labelledby="judul-job">
        <div className="row-between" style={{ marginBottom: 'var(--space-4)' }}>
          <h2 id="judul-job" style={{ marginBottom: 0 }}>
            Job
          </h2>
          <div className="field" style={{ minWidth: '14rem' }}>
            <label htmlFor={filterId}>Status</label>
            <select
              id={filterId}
              className="select"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
            >
              {FILTERS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && jobs.length === 0 ? (
          <div className="stack-sm" aria-busy="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="skeleton" style={{ height: 44 }} />
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <EmptyState title={statusFilter ? 'Tidak ada job dengan status ini' : 'Belum ada job'}>
            {statusFilter ? 'Pilih status lain, atau tampilkan semua status.' : 'Job muncul di sini setelah klien menyetujui rancangan dan build dimulai.'}
          </EmptyState>
        ) : (
          <>
            <div className="table-wrap" role="region" aria-label="Tabel job" tabIndex={0}>
              <table className="table table--jobs">
                <caption>
                  {total} job{statusFilter ? ` berstatus ${STATUS[statusFilter as JobStatus]?.label.toLowerCase()}` : ''}, terbaru di atas. Halaman {page} dari {totalPages}.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Proyek</th>
                    <th scope="col">Jenis</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="num">
                      Langkah
                    </th>
                    <th scope="col" className="num">
                      Token
                    </th>
                    <th scope="col" className="num">
                      Gerbang lolos
                    </th>
                    <th scope="col">Dibuat</th>
                    <th scope="col">Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => {
                    const status = STATUS[job.status] ?? { label: job.status, tone: 'neutral' as const };
                    const gates = job.gateResults ?? [];
                    const passed = new Set(gates.filter((g) => g.passed).map((g) => g.gate));
                    const seen = new Set(gates.map((g) => g.gate));
                    return (
                      <tr key={job.id}>
                        <th scope="row" className="cell-name">
                          {job.project?.name ?? 'Proyek dihapus'}
                          {job.errorMessage && (
                            <span className="hint" style={{ display: 'block', fontWeight: 400 }}>
                              {job.errorMessage.length > 140 ? `${job.errorMessage.slice(0, 140)}...` : job.errorMessage}
                            </span>
                          )}
                        </th>
                        <td>{JOB_TYPE[job.type] ?? job.type}</td>
                        <td>
                          <span className={`tag${status.tone === 'neutral' ? '' : ` tag--${status.tone}`}`}>{status.label}</span>
                        </td>
                        <td className="num">
                          {job.stepCount} / {job.maxSteps}
                        </td>
                        <td className="num">{nf.format(job.tokensUsed)}</td>
                        <td className="num">{seen.size === 0 ? 'belum ada' : `${passed.size} dari ${seen.size}`}</td>
                        <td>{when(job.createdAt)}</td>
                        <td className="actions">
                          {actionsFor(job).length === 0 ? (
                            <span className="muted">Tidak ada</span>
                          ) : (
                            <span className="row" style={{ gap: 'var(--space-1)' }}>
                              {actionsFor(job).map((action) => (
                                <button
                                  key={action}
                                  type="button"
                                  className={`btn btn--sm ${action === 'cancel' ? 'btn--danger' : 'btn--secondary'}`}
                                  onClick={() => {
                                    setActionError(null);
                                    setPending({ job, action });
                                  }}
                                >
                                  {actionLabel[action]}
                                  <span className="sr-only"> {job.project?.name ?? 'job'}</span>
                                </button>
                              ))}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {totalPages > 1 && (
              <div className="pager">
                <button type="button" className="btn btn--secondary btn--sm" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                  Sebelumnya
                </button>
                <span className="small muted">
                  Halaman {page} dari {totalPages}
                </span>
                <button type="button" className="btn btn--secondary btn--sm" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                  Berikutnya
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <Dialog open={confirmCleanup} onClose={() => !maintenanceBusy && setConfirmCleanup(false)} title="Jalankan pembersihan sekarang?">
        <div className="stack">
          <p className="muted">
            Yang dihapus: node_modules versi lama yang tidak aktif dan tidak live (dipasang ulang otomatis bila dibuka lagi), workspace build gagal yang sudah lama, dan workspace yang tidak dimiliki proyek mana pun. Versi aktif, versi live, build yang masih berjalan, dan semua data aplikasi tidak disentuh. Lihat dulu daftarnya dengan "Lihat yang akan dibersihkan".
          </p>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <button type="button" data-autofocus className="btn btn--secondary" onClick={() => setConfirmCleanup(false)} disabled={maintenanceBusy}>
              Batal
            </button>
            <button type="button" className="btn" onClick={() => void runMaintenance('cleanup')} disabled={maintenanceBusy}>
              {maintenanceBusy ? 'Membersihkan...' : 'Bersihkan'}
            </button>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={payAction !== null}
        onClose={() => !payActing && setPayAction(null)}
        title={payAction?.action === 'reject' ? 'Tolak pembayaran ini?' : 'Konfirmasi pembayaran ini?'}
      >
        {payAction && (
          <div className="stack">
            <p>
              Proyek <strong>{payAction.order.project?.name ?? 'tanpa nama'}</strong>, nominal tepat <strong>Rp {nf.format(payAction.order.total)}</strong> dari {payAction.order.project?.ownerEmail ?? 'pemilik tidak dikenal'}.
            </p>
            <p className="muted">
              {payAction.action === 'confirm'
                ? 'Lakukan ini hanya setelah dana dengan nominal persis itu terlihat di mutasi merchant. Pemilik langsung bisa mengunduh kode sumber, dan ini tidak bisa dibatalkan.'
                : 'Pembeli diminta membuat pesanan baru. Gunakan bila dana dengan nominal itu tidak ditemukan.'}
            </p>
            {payError && <Notice tone="bad">{payError}</Notice>}
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button type="button" data-autofocus className="btn btn--secondary" onClick={() => setPayAction(null)} disabled={payActing}>
                Batal
              </button>
              <button type="button" className={`btn${payAction.action === 'reject' ? ' btn--danger' : ''}`} onClick={() => void runPayment()} disabled={payActing}>
                {payActing ? 'Memproses...' : payAction.action === 'confirm' ? 'Dana sudah masuk, konfirmasi' : 'Tolak pesanan'}
              </button>
            </div>
          </div>
        )}
      </Dialog>

      <Dialog open={pending !== null} onClose={() => !acting && setPending(null)} title={pending ? ACTION_COPY[pending.action].title : ''}>
        {pending && (
          <div className="stack">
            <p>
              Proyek <strong>{pending.job.project?.name ?? 'tanpa nama'}</strong> ({JOB_TYPE[pending.job.type] ?? pending.job.type}, {STATUS[pending.job.status]?.label.toLowerCase()}).
            </p>
            <p className="muted">{ACTION_COPY[pending.action].body}</p>
            {actionError && <Notice tone="bad">{actionError}</Notice>}
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button type="button" data-autofocus className="btn btn--secondary" onClick={() => setPending(null)} disabled={acting}>
                Batal
              </button>
              <button type="button" className={`btn${ACTION_COPY[pending.action].danger ? ' btn--danger' : ''}`} onClick={() => void run()} disabled={acting}>
                {acting ? 'Memproses...' : ACTION_COPY[pending.action].confirm}
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};
