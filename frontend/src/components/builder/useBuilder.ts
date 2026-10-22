import { useCallback, useEffect, useRef, useState } from 'react';
import api, { type AppCredentials, type LiveState, type PaymentState } from '../../services/api';
import { DEFAULT_MODEL_ID } from '../../data/models';
import type { ClarificationOption, ClarificationQuestion, Job, JobEvent, Message, Project } from '../../types';
import { imageCache, MAX_IMAGES, prepareImage } from '../../services/imageUpload';
import type { PendingImage } from './attachments';
import { BACKGROUND_GATES, type BuilderTab, isPendingMessage, messageKind } from './shared';

export interface BuilderOptions {
  project: Project;
  onRefreshProject: () => void;
  initialModel?: string;
  initialPrompt?: string;
  onInitialPromptSent?: () => void;
}

/** A spec as the builder shows it. The platform's real spec has more fields than the shared type lists. */
export interface SpecView {
  title: string;
  summary: string;
  targetUsers?: string[];
  features?: Array<{ name: string; description?: string; priority?: string; userRole?: string }>;
  auth?: { mode?: string; roles?: string[] };
  pages?: Array<{ route: string; name: string; purpose?: string; kind?: string }>;
  databaseSchema?: Array<{ name: string; label?: string; internal?: boolean; fields: Array<{ name: string; label?: string; type?: string; required?: boolean }> }>;
  apiEndpoints?: Array<{ method: string; path: string; description?: string }>;
}

/** Adds events that are not in the list yet, oldest first. The stream and the history overlap, so the same event can arrive twice. */
export const eventKey = (e: JobEvent) => e.id ?? `${e.createdAt}|${e.agent}|${e.eventType}|${e.message}`;
const mergeEvents = (current: JobEvent[], incoming: JobEvent[]) => {
  const known = new Set(current.map(eventKey));
  const fresh = incoming.filter((e) => !known.has(eventKey(e)));
  return fresh.length ? [...current, ...fresh].sort((a, b) => a.createdAt.localeCompare(b.createdAt)) : current;
};

const errorText = (err: unknown, fallback: string) => (err instanceof Error && err.message ? err.message : fallback);

/**
 * All state and side effects of the builder screen: the chat with its background replies, the build job with its
 * live events and checks, the spec, the preview and its login, and the actions on them. The components only draw.
 */
export function useBuilder({ project, onRefreshProject, initialModel, initialPrompt, onInitialPromptSent }: BuilderOptions) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  // Answers to the clarification questions: messageId -> questionId -> chosen option values. Nothing is sent until the client confirms.
  const [selections, setSelections] = useState<Record<string, Record<string, string[]>>>({});
  const [now, setNow] = useState(() => Date.now());
  const initialSent = useRef(false);

  const [tab, setTab] = useState<BuilderTab>('chat');
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [jobEvents, setJobEvents] = useState<JobEvent[]>([]);
  const [gates, setGates] = useState<any[]>([]);
  const [jobError, setJobError] = useState<string | null>(null);

  const [specData, setSpecData] = useState<SpecView | null>(null);
  const [specApproved, setSpecApproved] = useState(false);
  const [approving, setApproving] = useState(false);
  const [approveError, setApproveError] = useState<string | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<string>(initialModel || DEFAULT_MODEL_ID);

  const [credentials, setCredentials] = useState<AppCredentials | null>(null);
  const [credentialsLoaded, setCredentialsLoaded] = useState(false);
  const [previewStarting, setPreviewStarting] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);

  // Pictures for the next message: a screenshot or sketch of the look the client wants.
  const [images, setImages] = useState<PendingImage[]>([]);
  const [imageEnabled, setImageEnabled] = useState(false);

  const [revisionOpen, setRevisionOpen] = useState(false);
  const [revisionError, setRevisionError] = useState<string | null>(null);
  const [revising, setRevising] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [payment, setPayment] = useState<PaymentState | null>(null);
  const [live, setLive] = useState<LiveState | null>(null);

  const serverPending = messages.some((m) => isPendingMessage(m) && !m.id.startsWith('tmp-'));
  const latestDeployment = project.deployments && project.deployments.length > 0 ? project.deployments[0] : null;
  const previewRunning = latestDeployment?.status === 'running';
  const appReady = project.status === 'ready' || project.status === 'live';
  const canRestartPreview = Boolean(latestDeployment) && !previewRunning && appReady;
  const buildRunning = project.status === 'building' || activeJob?.status === 'running' || activeJob?.status === 'pending';

  /* ---------- loading ---------- */

  const loadConversation = useCallback(async () => {
    try {
      const proj = await api.projects.get(project.id);
      if (proj.conversation?.messages) setMessages(proj.conversation.messages);
    } catch (err) {
      console.error('Failed to load messages:', err);
    }
  }, [project.id]);

  const loadSpec = useCallback(async () => {
    try {
      const spec = await api.spec.get(project.id);
      if (spec && spec.content) {
        setSpecData((typeof spec.content === 'string' ? JSON.parse(spec.content) : spec.content) as SpecView);
        setSpecApproved(Boolean(spec.approvedAt));
      }
    } catch {
      // No spec yet.
    }
  }, [project.id]);

  /** After an earlier version was restored: the spec, the chat note, the login and the build panel follow the version now active. */
  const afterRestore = useCallback(
    async (restoredJobId: string | null) => {
      await Promise.all([loadSpec(), loadConversation()]);
      api.projects.getCredentials(project.id).then(setCredentials).catch(() => setCredentials(null));
      if (restoredJobId) {
        try {
          const job = await api.jobs.get(restoredJobId);
          setJobEvents([]);
          setGates([]);
          setActiveJob(job);
        } catch {
          // The build panel keeps showing the previous job; the restore itself already worked.
        }
      }
      onRefreshProject();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [project.id, loadSpec, loadConversation]
  );

  /* ---------- pictures ---------- */

  useEffect(() => {
    api.models
      .list()
      .then((r) => setImageEnabled(Boolean(r.features?.imageReference)))
      .catch(() => setImageEnabled(false));
  }, []);

  const addImages = async (files: File[]) => {
    const room = MAX_IMAGES - images.length;
    const picked = files.slice(0, Math.max(0, room));
    if (files.length > picked.length) setChatError(`Maksimal ${MAX_IMAGES} gambar per pesan.`);
    for (const file of picked) {
      const localId = `img-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const patch = (change: Partial<PendingImage>) => setImages((prev) => prev.map((i) => (i.localId === localId ? { ...i, ...change } : i)));
      setImages((prev) => [...prev, { localId, name: file.name || 'gambar', previewUrl: '', status: 'uploading' }]);
      try {
        const prepared = await prepareImage(file);
        patch({ previewUrl: prepared.previewUrl });
        const stored = await api.projects.uploadAttachment(project.id, prepared.base64);
        imageCache.set(stored.id, prepared.previewUrl);
        patch({ status: 'ready', id: stored.id });
      } catch (err) {
        patch({ status: 'error', error: errorText(err, 'Gambar belum bisa diunggah.') });
      }
    }
  };

  const removeImage = (localId: string) => setImages((prev) => prev.filter((i) => i.localId !== localId));

  /* ---------- chat ---------- */

  /** Shows the message and a pending reply immediately, then sends it. The real reply arrives by polling. */
  const sendMessage = async (text: string, metadata?: any) => {
    const stamp = Date.now();
    setChatError(null);
    setSending(true);
    setInputText('');
    setMessages((prev) => [
      ...prev,
      {
        id: `tmp-user-${stamp}`,
        conversationId: '',
        role: 'user',
        content: text,
        metadata: Array.isArray(metadata?.attachmentIds) ? JSON.stringify({ attachments: metadata.attachmentIds.map((id: string) => ({ id })) }) : null,
        createdAt: new Date(stamp).toISOString(),
      },
      {
        id: `tmp-pending-${stamp}`,
        conversationId: '',
        role: 'assistant',
        content: 'Sedang membaca pesan Anda...',
        metadata: JSON.stringify({ type: 'pending', startedAt: new Date(stamp).toISOString() }),
        createdAt: new Date(stamp).toISOString(),
      },
    ]);

    try {
      const res = await api.chat.sendMessage(project.id, text, metadata);
      setMessages((prev) => [...prev.filter((m) => !m.id.startsWith('tmp-')), res.userMessage, res.assistantMessage]);
    } catch (err) {
      setMessages((prev) => prev.filter((m) => !m.id.startsWith('tmp-')));
      setInputText(text);
      // The pictures were stored already; they stay in the tray so the message can be sent again.
      setChatError(errorText(err, 'Pesan belum terkirim.'));
    } finally {
      setSending(false);
    }
  };

  const submitInput = async () => {
    const ready = images.filter((i) => i.status === 'ready' && i.id);
    // Pictures alone are a complete message: the client points at a look without describing it.
    const text = inputText.trim() || (ready.length > 0 ? 'Tampilan seperti gambar yang saya lampirkan.' : '');
    if (!text || sending || serverPending || images.some((i) => i.status === 'uploading')) return;
    const attachmentIds = ready.map((i) => i.id as string);
    setImages((prev) => prev.filter((i) => i.status === 'error'));
    await sendMessage(text, attachmentIds.length > 0 ? { attachmentIds } : undefined);
  };

  /** Sends the client's last message again after an AI failure, keeping the answers it carried. */
  const retryLast = () => {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (!lastUser || sending || serverPending) return;
    let metadata: any;
    try {
      metadata = lastUser.metadata ? JSON.parse(lastUser.metadata) : undefined;
    } catch {
      metadata = undefined;
    }
    void sendMessage(lastUser.content, metadata);
  };

  const unanswered = (messageId: string, questions: ClarificationQuestion[]) => questions.filter((q) => (selections[messageId]?.[q.id] ?? []).length === 0).length;

  /** Marks an option. Choosing never sends anything; the client confirms with "Lanjutkan" once done. */
  const selectOption = (messageId: string, question: ClarificationQuestion, option: ClarificationOption) => {
    setSelections((prev) => {
      const current = prev[messageId]?.[question.id] ?? [];
      const next = question.allowMultiple ? (current.includes(option.value) ? current.filter((value) => value !== option.value) : [...current, option.value]) : [option.value];
      return { ...prev, [messageId]: { ...prev[messageId], [question.id]: next } };
    });
  };

  /** Sends every answer in one message and asks for the spec. Only unanswered questions are left out. */
  const submitAnswers = (messageId: string, questions: ClarificationQuestion[]) => {
    if (sending || serverPending) return;
    const chosen = selections[messageId] ?? {};
    const answered = questions.filter((q) => (chosen[q.id] ?? []).length > 0);
    if (answered.length === 0) return;
    const lines = answered.map((q) => `- ${q.question} ${q.options.filter((o) => chosen[q.id].includes(o.value)).map((o) => o.label).join(', ')}`);
    const answers = Object.fromEntries(answered.map((q) => [q.id, chosen[q.id].join(',')]));
    void sendMessage(`Jawaban klarifikasi saya:\n${lines.join('\n')}`, { answers, isReadyForSpec: true });
  };

  /* ---------- spec and build ---------- */

  const approveSpec = async () => {
    if (approving) return;
    setApproving(true);
    setApproveError(null);
    try {
      const result = await api.spec.approve(project.id, selectedModelId);
      setSpecApproved(true);
      setActiveJob(await api.jobs.get(result.jobId));
      setTab('build');
      onRefreshProject();
    } catch (err) {
      setApproveError(`Rancangan belum bisa disetujui: ${errorText(err, 'terjadi kesalahan')}`);
    } finally {
      setApproving(false);
    }
  };

  const runJobAction = async (action: () => Promise<void>) => {
    setJobError(null);
    try {
      await action();
      onRefreshProject();
    } catch (err) {
      setJobError(errorText(err, 'Permintaan gagal. Coba lagi.'));
    }
  };

  const cancelJob = () =>
    runJobAction(async () => {
      if (!activeJob) return;
      await api.jobs.cancel(activeJob.id);
      setActiveJob(await api.jobs.get(activeJob.id));
    });

  /** Same job, same code: only the quality checks and their repairs run again. Events keep streaming into the same log. */
  const resumeJob = () =>
    runJobAction(async () => {
      if (!activeJob) return;
      setActiveJob(await api.jobs.resume(activeJob.id));
    });

  const rebuildJob = () =>
    runJobAction(async () => {
      if (!activeJob) return;
      setActiveJob(await api.jobs.retry(activeJob.id));
      setJobEvents([]);
    });

  const startRevision = async (request: string): Promise<boolean> => {
    setRevising(true);
    setRevisionError(null);
    try {
      const res = await api.revisions.create(project.id, request);
      setActiveJob(await api.jobs.get(res.jobId));
      setTab('build');
      onRefreshProject();
      await loadConversation();
      return true;
    } catch (err) {
      setRevisionError(errorText(err, 'Revisi belum bisa dimulai.'));
      return false;
    } finally {
      setRevising(false);
    }
  };

  const refreshPayment = useCallback(async (): Promise<PaymentState | null> => {
    try {
      const next = await api.payments.get(project.id);
      setPayment(next);
      return next;
    } catch {
      setPayment(null);
      return null;
    }
  }, [project.id]);

  const refreshLive = useCallback(async (): Promise<LiveState | null> => {
    try {
      const next = await api.live.get(project.id);
      setLive(next);
      return next;
    } catch {
      setLive(null);
      return null;
    }
  }, [project.id]);

  /** The download needs the sign-in header, which a plain link cannot send, so the file is fetched and saved from here. */
  const downloadZip = async () => {
    setDownloading(true);
    setDownloadError(null);
    try {
      const response = await fetch(api.export.getDownloadUrl(project.id), { headers: { Authorization: `Bearer ${api.getToken() ?? ''}` } });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        // Locked after all (another tab, or the state was stale): show the payment step instead of a bare error.
        if (response.status === 402) void refreshPayment();
        throw new Error(body.error || `Server menjawab ${response.status}.`);
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'aplikasi'}-source.zip`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setDownloadError(`Kode sumber belum bisa diunduh: ${errorText(err, 'terjadi kesalahan')}`);
    } finally {
      setDownloading(false);
    }
  };

  /* ---------- preview ---------- */

  const startPreview = async () => {
    setPreviewStarting(true);
    setPreviewError(null);
    try {
      await api.projects.startPreview(project.id);
      onRefreshProject();
    } catch (err) {
      setPreviewError(errorText(err, 'Pratinjau gagal dijalankan.'));
    } finally {
      setPreviewStarting(false);
    }
  };

  /* ---------- effects ---------- */

  useEffect(() => {
    if (initialPrompt && !initialSent.current) {
      // A brand-new project has no history to load: show the message at once and send it.
      initialSent.current = true;
      onInitialPromptSent?.();
      void sendMessage(initialPrompt);
    } else {
      void loadConversation();
    }
    if (project.jobs && project.jobs.length > 0) setActiveJob(project.jobs[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id]);

  useEffect(() => {
    void loadSpec();
  }, [loadSpec]);

  // The AI answers in the background. While a reply is pending, check for it every 1.5 s and tick the clock.
  useEffect(() => {
    if (!serverPending) return;
    const clock = setInterval(() => setNow(Date.now()), 1000);
    const poll = setInterval(async () => {
      try {
        const latest = await api.chat.list(project.id);
        setMessages(latest);
        if (!latest.some(isPendingMessage)) {
          const reply = latest.filter((m) => m.role === 'assistant').pop();
          if (reply && messageKind(reply) === 'spec_preview') {
            void loadSpec();
            setTab('spec');
          }
          onRefreshProject();
        }
      } catch (err) {
        console.warn('Memeriksa balasan AI gagal, akan dicoba lagi:', err);
      }
    }, 1500);
    return () => {
      clearInterval(clock);
      clearInterval(poll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverPending, project.id]);

  // The build's events stream in live; its history and checks are loaded first.
  useEffect(() => {
    if (!activeJob) return;
    const id = activeJob.id;
    api.jobs
      .get(id)
      .then((j) => {
        setActiveJob(j);
        if (j.events) setJobEvents((prev) => mergeEvents(prev, [...j.events!].reverse()));
      })
      .catch((e) => console.error(e));
    api.jobs.getGates(id).then(setGates).catch((e) => console.error(e));

    const unsubscribe = api.jobs.subscribeEvents(
      id,
      (ev) => {
        setJobEvents((prev) => mergeEvents(prev, [ev]));
        // A build ends with 'completed', or with an event whose payload carries the final status (failed, cancelled, needs_review).
        const ended = ['completed', 'failed', 'error'].includes(ev.eventType) || ['failed', 'cancelled', 'needs_review'].includes(ev.payload?.status);
        if (ended) {
          api.jobs.get(id).then(setActiveJob);
          api.jobs.getGates(id).then(setGates);
          onRefreshProject();
        }
      },
      (err) => console.warn('SSE stream error:', err)
    );
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeJob?.id]);

  // The app is delivered before its slow checks (tests, audit, AI review) finish; their results arrive here.
  const jobId = activeJob?.id;
  const jobCompleted = activeJob?.status === 'completed';
  const backgroundDone = BACKGROUND_GATES.every((id) => gates.some((g) => g.gate === id));
  const backgroundPending = jobCompleted && !backgroundDone;
  useEffect(() => {
    if (!jobId || !jobCompleted || backgroundDone) return;
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (Date.now() - startedAt > 8 * 60 * 1000) return window.clearInterval(timer);
      api.jobs.getGates(jobId).then(setGates).catch(() => undefined);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [jobId, jobCompleted, backgroundDone]);

  // A build waiting for its turn: ask again every few seconds so the place in line and the wait estimate stay true.
  const waitingJobId = activeJob?.status === 'pending' ? activeJob.id : null;
  useEffect(() => {
    if (!waitingJobId) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) api.jobs.get(waitingJobId).then(setActiveJob).catch(() => undefined);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [waitingJobId]);

  // The app's first login, so the owner never has to dig for it in the build log.
  useEffect(() => {
    if (!appReady) return;
    setCredentialsLoaded(false);
    api.projects
      .getCredentials(project.id)
      .then(setCredentials)
      .catch(() => setCredentials(null))
      .finally(() => setCredentialsLoaded(true));
  }, [project.id, appReady]);

  // Whether the source download is free, locked behind a QRIS payment, or already paid for.
  useEffect(() => {
    if (!appReady) return;
    void refreshPayment();
    // Someone who paid and came back to this tab should see the unlock without reloading.
    const onVisible = () => {
      if (!document.hidden) void refreshPayment();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [appReady, refreshPayment]);

  // Whether a live link can exist here, and whether one is published.
  useEffect(() => {
    if (!appReady) return;
    void refreshLive();
  }, [appReady, refreshLive]);

  // Opening a finished project whose preview is down starts it again by itself, once.
  const autoStartedFor = useRef<string | null>(null);
  useEffect(() => {
    if (canRestartPreview && autoStartedFor.current !== project.id) {
      autoStartedFor.current = project.id;
      void startPreview();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRestartPreview, project.id]);

  return {
    messages, inputText, setInputText, sending, chatError, now, selections, serverPending,
    images, imageEnabled, addImages, removeImage,
    tab, setTab, activeJob, jobEvents, gates, jobError, backgroundPending,
    specData, specApproved, approving, approveError, selectedModelId, setSelectedModelId,
    credentials, credentialsLoaded, previewStarting, previewError, latestDeployment, previewRunning, canRestartPreview,
    revisionOpen, setRevisionOpen, revisionError, setRevisionError, revising, downloading, downloadError,
    payment, refreshPayment, live, refreshLive,
    appReady, buildRunning,
    submitInput, retryLast, unanswered, selectOption, submitAnswers,
    approveSpec, cancelJob, resumeJob, rebuildJob, startRevision, downloadZip, startPreview, afterRestore,
  };
}

export type BuilderState = ReturnType<typeof useBuilder>;
