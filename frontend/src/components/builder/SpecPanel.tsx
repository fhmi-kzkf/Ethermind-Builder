import React, { useId } from 'react';
import { MODEL_CHOICES, TIER_LABEL, modelById } from '../../data/models';
import { EmptyState, Notice } from '../ui';
import type { BuilderState } from './useBuilder';

const MARKER = 'Belum termasuk:';

const AUTH_LABEL: Record<string, string> = {
  none: 'Tanpa login, aplikasi langsung terbuka.',
  single_role: 'Login dengan satu jenis akun.',
  multi_role: 'Login dengan beberapa peran.',
};

interface Props {
  state: BuilderState;
  /** The spec can only be approved while the project is in the planning stage. */
  canApprove: boolean;
}

export const SpecPanel: React.FC<Props> = ({ state, canApprove }) => {
  const { specData: spec, specApproved, approving, approveError, selectedModelId, setSelectedModelId } = state;
  const modelId = useId();

  if (!spec) {
    return (
      <EmptyState title="Belum ada rancangan">
        Rancangan dibuat setelah Anda menjawab pertanyaan di percakapan dan menekan Lanjutkan. Isinya halaman, data, dan peran pengguna.
      </EmptyState>
    );
  }

  const cut = spec.summary.indexOf(MARKER);
  const summary = (cut >= 0 ? spec.summary.slice(0, cut) : spec.summary).trim();
  const excluded = cut >= 0 ? spec.summary.slice(cut + MARKER.length).trim() : '';
  const roles = spec.auth?.roles ?? [];
  const visibleEntities = (spec.databaseSchema ?? []).filter((entity) => !entity.internal);
  const model = modelById(selectedModelId);

  return (
    <div className="stack spec">
      <header className="stack-sm">
        <div className="row">
          <h2 className="spec__title">{spec.title}</h2>
          {specApproved && <span className="tag tag--ok">Disetujui</span>}
        </div>
        <p className="muted">{summary}</p>
        {excluded && (
          <Notice tone="warn" title="Belum termasuk">
            {excluded}
          </Notice>
        )}
      </header>

      <section className="stack-sm" aria-labelledby="spec-pengguna">
        <h3 id="spec-pengguna">Pengguna dan peran</h3>
        {(spec.targetUsers ?? []).length > 0 && <p>{spec.targetUsers!.join(', ')}</p>}
        <p className="muted">
          {AUTH_LABEL[spec.auth?.mode ?? ''] ?? ''}
          {roles.length > 0 ? ` Peran: ${roles.join(', ')}.` : ''}
        </p>
      </section>

      {(spec.features ?? []).length > 0 && (
        <section className="stack-sm" aria-labelledby="spec-fitur">
          <h3 id="spec-fitur">Fitur</h3>
          <ul className="spec__list">
            {spec.features!.map((feature) => (
              <li key={feature.name}>
                <strong>{feature.name}</strong>
                {feature.description && <span className="muted"> {feature.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="stack-sm" aria-labelledby="spec-halaman">
        <h3 id="spec-halaman">Halaman</h3>
        <ul className="spec__list">
          {(spec.pages ?? []).map((page) => (
            <li key={page.route}>
              <strong>{page.name}</strong> <code>{page.route}</code>
              {page.purpose && <span className="muted"> {page.purpose}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="stack-sm" aria-labelledby="spec-data">
        <h3 id="spec-data">Data yang disimpan</h3>
        <ul className="spec__list">
          {visibleEntities.map((entity) => (
            <li key={entity.name}>
              <strong>{entity.label || entity.name}</strong>
              <span className="muted"> {entity.fields.map((field) => field.label || field.name).join(', ')}</span>
            </li>
          ))}
        </ul>
      </section>

      {(spec.apiEndpoints ?? []).length > 0 && (
        <section className="stack-sm" aria-labelledby="spec-logika">
          <h3 id="spec-logika">Logika khusus</h3>
          <ul className="spec__list">
            {spec.apiEndpoints!.map((endpoint) => (
              <li key={`${endpoint.method} ${endpoint.path}`}>
                <code>
                  {endpoint.method} {endpoint.path}
                </code>
                {endpoint.description && <span className="muted"> {endpoint.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {canApprove && !specApproved && (
        <section className="card card--warm stack" aria-labelledby="spec-setuju">
          <h3 id="spec-setuju">Siap dibangun?</h3>
          <p className="muted">Setelah disetujui, aplikasi dibuat dengan mesin AI yang Anda pilih. Perubahan setelahnya dilakukan lewat revisi di chat.</p>
          <div className="field">
            <label htmlFor={modelId}>Mesin AI untuk membangun</label>
            <select id={modelId} className="select" value={selectedModelId} onChange={(event) => setSelectedModelId(event.target.value)}>
              {(['pro', 'basic'] as const).map((tier) => (
                <optgroup key={tier} label={TIER_LABEL[tier]}>
                  {MODEL_CHOICES.filter((m) => m.tier === tier).map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <p className="hint">{model.note}</p>
          </div>
          {approveError && <Notice tone="bad">{approveError}</Notice>}
          <div>
            <button type="button" className="btn" onClick={() => void state.approveSpec()} disabled={approving}>
              {approving ? 'Memulai build...' : 'Setujui & mulai build'}
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
