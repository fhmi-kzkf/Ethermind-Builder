import React, { useCallback, useEffect, useState } from 'react';
import type { Project } from '../types';
import { Notice } from './ui';
import { BuildPanel } from './builder/BuildPanel';
import { ChatPanel } from './builder/ChatPanel';
import { LiveDialog } from './builder/LiveDialog';
import { PaymentDialog } from './builder/PaymentDialog';
import { PreviewPanel } from './builder/PreviewPanel';
import { RevisionDialog } from './builder/RevisionDialog';
import { PROJECT_STATUS, TAB_LABEL, type BuilderTab } from './builder/shared';
import { SpecPanel } from './builder/SpecPanel';
import { VersionsDialog } from './builder/VersionsDialog';
import { useBuilder } from './builder/useBuilder';

interface ProjectBuilderProps {
  project: Project;
  onBack: () => void;
  onRefreshProject: () => void;
  initialModel?: string;
  /** First message of a brand-new project: shown and sent as soon as the chat opens. */
  initialPrompt?: string;
  onInitialPromptSent?: () => void;
}

/** Side-by-side layout needs room for a readable chat column and a work column. */
function useWide(): boolean {
  const query = '(min-width: 960px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setWide(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return wide;
}

export const ProjectBuilder: React.FC<ProjectBuilderProps> = (props) => {
  const { project, onBack } = props;
  const state = useBuilder(props);
  const wide = useWide();
  const [revisionText, setRevisionText] = useState('');
  const [versionsOpen, setVersionsOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);
  const locked = Boolean(state.payment?.required);
  const { refreshPayment } = state;
  const onPaymentChanged = useCallback(() => void refreshPayment(), [refreshPayment]);
  const { refreshLive } = state;
  const onLiveChanged = useCallback(() => void refreshLive(), [refreshLive]);

  const tabs: BuilderTab[] = wide ? ['build', 'preview', 'spec'] : ['chat', 'build', 'preview', 'spec'];
  const activeTab: BuilderTab = tabs.includes(state.tab) ? state.tab : 'build';
  const status = PROJECT_STATUS[project.status] ?? { label: project.status, tone: '' as const };
  const canApprove = project.status === 'planning' && !state.buildRunning;

  const openRevision = (text = '') => {
    setRevisionText(text);
    state.setRevisionError(null);
    state.setRevisionOpen(true);
  };

  /** A change the assistant worded from the chat is sent as it is; if it fails, the dialog opens with the text and the reason. */
  const applySuggested = async (request: string) => {
    if (!(await state.startRevision(request))) openRevision(request);
  };

  const onTabKey = (event: React.KeyboardEvent, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = tabs[(index + step + tabs.length) % tabs.length];
    state.setTab(next);
    document.getElementById(`tab-${next}`)?.focus();
  };

  const panel = (
    <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} tabIndex={0} className="bld__panel">
      {activeTab === 'build' && <BuildPanel state={state} onOpenSpec={() => state.setTab('spec')} onPay={() => setPaymentOpen(true)} />}
      {activeTab === 'preview' && <PreviewPanel state={state} />}
      {activeTab === 'spec' && <SpecPanel state={state} canApprove={canApprove} />}
    </div>
  );

  return (
    <div className="bld">
      <header className="bld__head">
        <div className="container bld__bar">
          <button type="button" className="btn btn--quiet btn--sm bld__back" onClick={onBack}>
            Semua proyek
          </button>
          <h1 className="bld__name" title={project.name}>
            {project.name}
          </h1>
          <span className={`tag bld__status${status.tone ? ` tag--${status.tone}` : ''}`}>{status.label}</span>
          <div className="bld__actions">
            {state.live?.enabled && (
              <button type="button" className="btn btn--secondary btn--sm" onClick={() => setLiveOpen(true)} disabled={!state.appReady}>
                {state.live.published ? 'Link live aktif' : 'Link live'}
              </button>
            )}
            <button type="button" className="btn btn--secondary btn--sm" onClick={() => setVersionsOpen(true)} disabled={!state.appReady}>
              Riwayat versi
            </button>
            <button type="button" className="btn btn--secondary btn--sm" onClick={() => openRevision()} disabled={!state.appReady}>
              Minta revisi
            </button>
            <button
              type="button"
              className="btn btn--sm"
              onClick={() => (locked ? setPaymentOpen(true) : void state.downloadZip())}
              disabled={!state.appReady || state.downloading}
            >
              {state.downloading ? 'Menyiapkan...' : locked ? `Unduh kode (Rp ${new Intl.NumberFormat('id-ID').format(state.payment?.amount ?? 0)})` : 'Unduh kode (.zip)'}
            </button>
          </div>
        </div>
        {state.downloadError && (
          <div className="container" style={{ paddingBottom: 'var(--space-3)' }}>
            <Notice tone="bad">{state.downloadError}</Notice>
          </div>
        )}
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Bagian layar">
            {tabs.map((id, index) => (
              <button
                key={id}
                id={`tab-${id}`}
                type="button"
                role="tab"
                className="tab"
                aria-selected={activeTab === id}
                aria-controls={`panel-${id}`}
                tabIndex={activeTab === id ? 0 : -1}
                onClick={() => state.setTab(id)}
                onKeyDown={(event) => onTabKey(event, index)}
              >
                {TAB_LABEL[id]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className={`container bld__body${wide ? ' bld__body--wide' : ''}`}>
        {(wide || activeTab === 'chat') && (
          <ChatPanel state={state} projectId={project.id} projectStatus={project.status} onOpenSpec={() => state.setTab('spec')} onApplyRevision={(request) => void applySuggested(request)} />
        )}
        {activeTab !== 'chat' && panel}
      </div>

      <LiveDialog open={liveOpen} projectId={project.id} live={state.live} onClose={() => setLiveOpen(false)} onChanged={onLiveChanged} />

      <PaymentDialog open={paymentOpen} projectId={project.id} payment={state.payment} onClose={() => setPaymentOpen(false)} onChanged={onPaymentChanged} onDownload={() => void state.downloadZip()} />

      <VersionsDialog open={versionsOpen} projectId={project.id} onClose={() => setVersionsOpen(false)} onRestored={(jobId) => void state.afterRestore(jobId)} />

      <RevisionDialog
        open={state.revisionOpen}
        busy={state.revising}
        error={state.revisionError}
        initialText={revisionText}
        onClose={() => state.setRevisionOpen(false)}
        onSubmit={state.startRevision}
      />
    </div>
  );
};

export default ProjectBuilder;
