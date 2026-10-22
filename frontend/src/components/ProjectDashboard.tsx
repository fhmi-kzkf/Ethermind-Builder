import React, { useId, useMemo, useState } from 'react';
import { Project, ProjectStatus } from '../types';
import api from '../services/api';
import { Dialog, EmptyState, Notice } from './ui';

interface ProjectDashboardProps {
  projects: Project[];
  loading: boolean;
  onSelectProject: (projectId: string) => void;
  onNewProject: () => void;
  onRefresh: () => void;
}

type Tone = 'neutral' | 'ok' | 'warn' | 'bad';

const STATUS: Record<ProjectStatus, { label: string; tone: Tone }> = {
  draft: { label: 'Draf', tone: 'neutral' },
  planning: { label: 'Menunggu persetujuan rancangan', tone: 'warn' },
  building: { label: 'Sedang dibangun', tone: 'warn' },
  ready: { label: 'Siap', tone: 'ok' },
  live: { label: 'Siap', tone: 'ok' },
  failed: { label: 'Gagal', tone: 'bad' },
  needs_review: { label: 'Perlu ditinjau', tone: 'warn' },
};

const FILTERS: Array<{ value: string; label: string; match: (s: ProjectStatus) => boolean }> = [
  { value: 'all', label: 'Semua status', match: () => true },
  { value: 'ready', label: 'Siap', match: (s) => s === 'ready' || s === 'live' },
  { value: 'building', label: 'Sedang dibangun', match: (s) => s === 'building' },
  { value: 'attention', label: 'Perlu perhatian', match: (s) => s === 'needs_review' || s === 'failed' },
  { value: 'early', label: 'Draf dan rancangan', match: (s) => s === 'draft' || s === 'planning' },
];

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

export const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ projects, loading, onSelectProject, onNewProject, onRefresh }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [toDelete, setToDelete] = useState<Project | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchId = useId();
  const filterId = useId();

  const sorted = useMemo(() => [...projects].sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [projects]);
  const visible = useMemo(() => {
    const rule = FILTERS.find((f) => f.value === filter) ?? FILTERS[0];
    const term = search.trim().toLowerCase();
    return sorted.filter((p) => rule.match(p.status) && p.name.toLowerCase().includes(term));
  }, [sorted, filter, search]);

  const refresh = async () => {
    setError(null);
    try {
      await Promise.resolve(onRefresh());
    } catch (err: any) {
      setError(err?.message || 'Daftar proyek belum bisa dimuat.');
    }
  };

  const confirmDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    setError(null);
    try {
      await api.projects.delete(toDelete.id);
      setToDelete(null);
      await refresh();
    } catch (err: any) {
      setToDelete(null);
      setError(`"${toDelete.name}" belum bisa dihapus: ${err.message}`);
    } finally {
      setDeleting(false);
    }
  };

  const runningUrl = (project: Project) => project.deployments?.find((d) => d.status === 'running' && d.environment === 'preview')?.url;

  return (
    <div className="workspace container">
      <div className="workspace__head">
        <div className="stack-sm">
          <h1>Proyek saya</h1>
          <p className="muted">{loading && projects.length === 0 ? 'Memuat proyek...' : `${projects.length} proyek`}</p>
        </div>
        <div className="row">
          <button type="button" className="btn btn--secondary" onClick={() => void refresh()} disabled={loading}>
            Muat ulang
          </button>
          <button type="button" className="btn" onClick={onNewProject}>
            Proyek baru
          </button>
        </div>
      </div>

      {error && (
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <Notice tone="bad" title="Ada yang belum berhasil">
            {error}
          </Notice>
        </div>
      )}

      {projects.length > 0 && (
        <div className="toolbar">
          <div className="field field--grow">
            <label htmlFor={searchId}>Cari proyek</label>
            <input id={searchId} type="search" className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ketik sebagian nama" />
          </div>
          <div className="field field--status">
            <label htmlFor={filterId}>Status</label>
            <select id={filterId} className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              {FILTERS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {loading && projects.length === 0 && (
        <ul className="worklist" aria-busy="true" aria-label="Memuat proyek">
          {[0, 1, 2, 3].map((i) => (
            <li key={i} className="work-row work-row--skeleton">
              <span className="skeleton" style={{ height: 22, width: '70%' }} />
              <span className="skeleton" style={{ height: 22, width: '55%' }} />
              <span className="skeleton" style={{ height: 22, width: '60%' }} />
              <span className="skeleton" style={{ height: 36, width: 96 }} />
            </li>
          ))}
        </ul>
      )}

      {!loading && projects.length === 0 && (
        <EmptyState
          title="Belum ada proyek"
          action={
            <button type="button" className="btn" onClick={onNewProject}>
              Ceritakan usaha Anda
            </button>
          }
        >
          Mulai dengan menceritakan usaha Anda. Ethermind mengajukan beberapa pertanyaan, lalu menyusun rancangan yang bisa Anda setujui sebelum apa pun dibuat.
        </EmptyState>
      )}

      {projects.length > 0 && visible.length === 0 && (
        <EmptyState
          title="Tidak ada proyek yang cocok"
          action={
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => {
                setSearch('');
                setFilter('all');
              }}
            >
              Hapus pencarian dan filter
            </button>
          }
        >
          Tidak ada proyek dengan nama yang memuat "{search.trim()}" pada status yang dipilih.
        </EmptyState>
      )}

      {visible.length > 0 && (
        <>
          <p className="work-count" role="status">
            Menampilkan {visible.length} dari {projects.length} proyek, terbaru di atas.
          </p>
          <ul className="worklist">
            {visible.map((project) => {
              const status = STATUS[project.status] ?? { label: project.status, tone: 'neutral' as Tone };
              const url = runningUrl(project);
              return (
                <li key={project.id} className="work-row">
                  <button type="button" className="work-row__name" onClick={() => onSelectProject(project.id)}>
                    {project.name}
                  </button>
                  <span>
                    <span className={`tag${status.tone === 'neutral' ? '' : ` tag--${status.tone}`}`}>{status.label}</span>
                  </span>
                  <span className="small muted">Dibuat {formatDate(project.createdAt)}</span>
                  <div className="work-row__actions">
                    {url && (
                      <a className="btn btn--quiet btn--sm" href={url} target="_blank" rel="noreferrer">
                        Buka aplikasi
                        <span className="sr-only"> (tab baru)</span>
                      </a>
                    )}
                    <button type="button" className="btn btn--secondary btn--sm" onClick={() => onSelectProject(project.id)}>
                      Buka
                      <span className="sr-only"> {project.name}</span>
                    </button>
                    <button type="button" className="btn btn--danger btn--sm" onClick={() => setToDelete(project)}>
                      Hapus
                      <span className="sr-only"> {project.name}</span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <Dialog open={toDelete !== null} onClose={() => !deleting && setToDelete(null)} title="Hapus proyek ini?">
        <div className="stack">
          <p>
            Proyek <strong>{toDelete?.name}</strong> akan dihapus permanen: percakapan, rancangan, kode, database, dan pratinjau yang sedang berjalan. Ini tidak bisa dibatalkan. Unduh kode sumbernya dulu kalau masih Anda perlukan.
          </p>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <button type="button" data-autofocus className="btn btn--secondary" onClick={() => setToDelete(null)} disabled={deleting}>
              Batal
            </button>
            <button type="button" className="btn btn--danger" onClick={() => void confirmDelete()} disabled={deleting}>
              {deleting ? 'Menghapus...' : 'Hapus permanen'}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
