import { AdminMetrics, Job, JobEvent, Message, Project, Spec, User } from '../types';

const API_BASE = '/api';

export interface VersionItem {
  id: string;
  jobId: string | null;
  summary: string;
  kind: 'build' | 'revision';
  request: string | null;
  specVersion: number | null;
  createdAt: string;
  active: boolean;
  available: boolean;
}

export interface RestoreResult {
  alreadyActive: boolean;
  previewUrl?: string;
  previewError?: string;
}

export interface PaymentOrder {
  id: string;
  amount: number;
  uniqueCode: number;
  total: number;
  status: 'pending' | 'reported' | 'paid' | 'rejected' | 'expired';
  /** The dynamic QRIS text: it is drawn as a QR code, never shown as text. */
  qris: string;
  expiresAt: string;
  createdAt: string;
}

export interface PaymentState {
  enabled: boolean;
  /** The source download is locked for this person right now. */
  required: boolean;
  paid: boolean;
  amount: number | null;
  merchant: string;
  order: PaymentOrder | null;
}

export interface AdminPayment extends PaymentOrder {
  reportedAt: string | null;
  paidAt: string | null;
  project: { id: string; name: string; ownerEmail: string } | null;
}

export interface LiveState {
  /** The server has an apps domain, so live links can exist at all. */
  enabled: boolean;
  allowed: boolean;
  reason: string | null;
  published: boolean;
  slug: string | null;
  suggestedSlug: string;
  url: string | null;
  urlTemplate: string | null;
  running: boolean;
  publishedAt: string | null;
  versionSummary: string | null;
  credentials: { email: string; password: string } | null;
  quota: { used: number; max: number };
}

export interface SystemSnapshot {
  at: string;
  memory: { totalMb: number; freeMb: number; freePercent: number };
  disk: { totalGb: number; freeGb: number; freePercent: number } | null;
  cpu: { cores: number; load1: number };
  apps: { previewRunning: number; liveRunning: number; livePublished: number; portsUsed: number; portsTotal: number; domain: string | null };
  queue: { waiting: number; active: number; maxConcurrency: number };
  storage: { workspaces: number; liveData: number };
  gateway: { requests: number; wakes: number; wakeFailures: number; rateLimited: number; notFound: number; idleStopped: number; evicted: number };
  lastBackup: { at: string; liveDatabases: number; errors: number } | null;
  lastCleanup: { at: string; nodeModulesRemoved: number; failedRemoved: number; orphansRemoved: number } | null;
  warnings: string[];
}

export interface AppCredentials {
  email: string;
  password: string;
  url: string | null;
  running: boolean;
}

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('ethermind_auth_token');
  }

  public setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('ethermind_auth_token', token);
    } else {
      localStorage.removeItem('ethermind_auth_token');
    }
  }

  public getToken(): string | null {
    return this.token;
  }

  private async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}: Terjadi kesalahan`);
    }

    return data;
  }

  // Auth API
  public auth = {
    register: async (email: string, password: string, role = 'client'): Promise<{ user: User; token: string }> => {
      const res = await this.request<{ success: boolean; data: { user: User; token: string } }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, role }),
      });
      this.setToken(res.data.token);
      return res.data;
    },
    login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
      const res = await this.request<{ success: boolean; data: { user: User; token: string } }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      this.setToken(res.data.token);
      return res.data;
    },
    firebaseSso: async (data: {
      idToken?: string;
      email: string;
      name?: string;
      photoUrl?: string | null;
      provider?: string;
    }): Promise<{ user: User; token: string }> => {
      const res = await this.request<{ success: boolean; data: { user: User; token: string } }>('/auth/firebase-sso', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      this.setToken(res.data.token);
      return res.data;
    },
    demo: async (role: string): Promise<{ user: User; token: string }> => {
      const res = await this.request<{ success: boolean; data: { user: User; token: string } }>('/auth/demo', {
        method: 'POST',
        body: JSON.stringify({ role }),
      });
      this.setToken(res.data.token);
      return res.data;
    },
    me: async (): Promise<User> => {
      const res = await this.request<{ success: boolean; data: User }>('/auth/me');
      return res.data;
    },
    logout: () => {
      this.setToken(null);
    },
  };

  // Projects API
  public projects = {
    list: async (): Promise<Project[]> => {
      const res = await this.request<{ success: boolean; data: Project[] }>('/projects');
      return res.data;
    },
    create: async (name: string, stack = 'nextjs-sqlite-tailwind'): Promise<Project> => {
      const res = await this.request<{ success: boolean; data: Project }>('/projects', {
        method: 'POST',
        body: JSON.stringify({ name, stack }),
      });
      return res.data;
    },
    get: async (id: string): Promise<Project> => {
      const res = await this.request<{ success: boolean; data: Project }>(`/projects/${id}`);
      return res.data;
    },
    delete: async (id: string): Promise<void> => {
      await this.request(`/projects/${id}`, { method: 'DELETE' });
    },
    /** The first login of the generated app, or null when the app has no login. */
    getCredentials: async (id: string): Promise<AppCredentials | null> => {
      const res = await this.request<{ success: boolean; data: AppCredentials | null }>(`/projects/${id}/credentials`);
      return res.data;
    },
    /** Stores one picture (base64, already shrunk) for the project and returns its id. */
    uploadAttachment: async (id: string, base64: string): Promise<{ id: string; mime: string; bytes: number }> => {
      const res = await this.request<{ success: boolean; data: { id: string; mime: string; bytes: number } }>(`/projects/${id}/attachments`, {
        method: 'POST',
        body: JSON.stringify({ data: base64 }),
      });
      return res.data;
    },
    /** A private picture of the project as a local blob URL. It needs the sign-in token, so a plain <img src> cannot load it. */
    attachmentUrl: async (id: string, attachmentId: string): Promise<string> => {
      const response = await fetch(`${API_BASE}/projects/${id}/attachments/${attachmentId}`, { headers: this.token ? { Authorization: `Bearer ${this.token}` } : {} });
      if (!response.ok) throw new Error('Gambar tidak bisa dimuat');
      return URL.createObjectURL(await response.blob());
    },
    /** Every finished build and revision, newest first. */
    versions: async (id: string): Promise<VersionItem[]> => {
      const res = await this.request<{ success: boolean; data: VersionItem[] }>(`/projects/${id}/versions`);
      return res.data;
    },
    /** Makes an earlier version the current one and starts its preview. */
    restoreVersion: async (id: string, versionId: string): Promise<RestoreResult> => {
      const res = await this.request<{ success: boolean; data: RestoreResult }>(`/projects/${id}/versions/${versionId}/restore`, { method: 'POST' });
      return res.data;
    },
    /** Starts the app's preview again when it is not running (after a server restart, for example). */
    startPreview: async (id: string): Promise<{ url: string }> => {
      const res = await this.request<{ success: boolean; data: { url: string } }>(`/projects/${id}/preview/start`, { method: 'POST' });
      return res.data;
    },
  };

  // Chat & Specs API
  public chat = {
    /**
     * Returns at once with the saved message and a pending assistant reply; the AI answers in the
     * background, so poll `list` until the reply is no longer pending.
     */
    sendMessage: async (
      projectId: string,
      content: string,
      metadata?: any
    ): Promise<{ userMessage: Message; assistantMessage: Message; pending?: boolean }> => {
      const res = await this.request<{
        success: boolean;
        data: { userMessage: Message; assistantMessage: Message; pending?: boolean };
      }>(`/projects/${projectId}/messages`, {
        method: 'POST',
        body: JSON.stringify({ content, metadata }),
      });
      return res.data;
    },
    list: async (projectId: string): Promise<Message[]> => {
      const res = await this.request<{ success: boolean; data: Message[] }>(`/projects/${projectId}/messages`);
      return res.data;
    },
  };

  public spec = {
    get: async (projectId: string): Promise<Spec> => {
      const res = await this.request<{ success: boolean; data: Spec }>(`/projects/${projectId}/spec`);
      return res.data;
    },
    approve: async (
      projectId: string,
      model?: string
    ): Promise<{
      jobId: string;
      status: string;
      projectId: string;
      model?: string;
      tier?: string;
      pricePaid?: number;
      isFree?: boolean;
    }> => {
      const res = await this.request<{
        success: boolean;
        data: {
          jobId: string;
          status: string;
          projectId: string;
          model?: string;
          tier?: string;
          pricePaid?: number;
          isFree?: boolean;
        };
      }>(`/projects/${projectId}/spec/approve`, {
        method: 'POST',
        body: JSON.stringify({ model }),
      });
      return res.data;
    },
  };

  // Job Runner API
  public jobs = {
    get: async (jobId: string): Promise<Job> => {
      const res = await this.request<{ success: boolean; data: Job }>(`/jobs/${jobId}`);
      return res.data;
    },
    cancel: async (jobId: string): Promise<void> => {
      await this.request(`/jobs/${jobId}/cancel`, { method: 'POST' });
    },
    /** Continues at the quality gates with the code already written; nothing is rebuilt. */
    resume: async (jobId: string): Promise<Job> => {
      const res = await this.request<{ success: boolean; data: Job }>(`/jobs/${jobId}/resume`, {
        method: 'POST',
      });
      return res.data;
    },
    retry: async (jobId: string): Promise<Job> => {
      const res = await this.request<{ success: boolean; data: Job }>(`/jobs/${jobId}/retry`, {
        method: 'POST',
      });
      return res.data;
    },
    getGates: async (jobId: string): Promise<any[]> => {
      const res = await this.request<{ success: boolean; data: any[] }>(`/jobs/${jobId}/gates`);
      return res.data;
    },
    subscribeEvents: (
      jobId: string,
      onEvent: (event: JobEvent) => void,
      onError?: (err: any) => void
    ): (() => void) => {
      const tokenQuery = this.token ? `?token=${encodeURIComponent(this.token)}` : '';
      const eventSource = new EventSource(`${API_BASE}/jobs/${jobId}/events${tokenQuery}`);

      eventSource.addEventListener('job_event', (e) => {
        try {
          const parsed = JSON.parse(e.data);
          onEvent(parsed);
        } catch (err) {
          console.error('[SSE Parse Error]', err);
        }
      });

      eventSource.onerror = (err) => {
        if (onError) onError(err);
      };

      return () => {
        eventSource.close();
      };
    },
  };

  // Revisions & Export
  public revisions = {
    create: async (projectId: string, prompt: string): Promise<{ jobId: string }> => {
      const res = await this.request<{ success: boolean; data: { jobId: string } }>(
        `/projects/${projectId}/revisions`,
        {
          method: 'POST',
          body: JSON.stringify({ prompt }),
        }
      );
      return res.data;
    },
  };

  public export = {
    getDownloadUrl: (projectId: string): string => {
      return `${API_BASE}/projects/${projectId}/export`;
    },
  };

  // Live link: a published version under a public name, with its own data
  public live = {
    get: async (projectId: string): Promise<LiveState> => (await this.request<{ data: LiveState }>(`/projects/${projectId}/live`)).data,
    publish: async (projectId: string, body: { slug?: string; jobId?: string } = {}): Promise<LiveState> =>
      (await this.request<{ data: LiveState }>(`/projects/${projectId}/live`, { method: 'POST', body: JSON.stringify(body) })).data,
    unpublish: async (projectId: string): Promise<LiveState> => (await this.request<{ data: LiveState }>(`/projects/${projectId}/live`, { method: 'DELETE' })).data,
  };

  // Paying for the source download (QRIS)
  public payments = {
    get: async (projectId: string): Promise<PaymentState> => (await this.request<{ data: PaymentState }>(`/projects/${projectId}/payment`)).data,
    createOrder: async (projectId: string): Promise<PaymentState> => (await this.request<{ data: PaymentState }>(`/projects/${projectId}/payment`, { method: 'POST' })).data,
    report: async (projectId: string, orderId: string): Promise<PaymentState> =>
      (await this.request<{ data: PaymentState }>(`/projects/${projectId}/payment/report`, { method: 'POST', body: JSON.stringify({ orderId }) })).data,
  };

  // Admin / Operator API
  public admin = {
    getMetrics: async (): Promise<AdminMetrics> => {
      const res = await this.request<{ success: boolean; data: AdminMetrics }>('/admin/metrics');
      return res.data;
    },
    listJobs: async (page = 1, status?: string): Promise<{ total: number; jobs: Job[] }> => {
      const q = new URLSearchParams({ page: String(page) });
      if (status) q.set('status', status);
      const res = await this.request<{ success: boolean; data: { total: number; jobs: Job[] } }>(
        `/admin/jobs?${q.toString()}`
      );
      return res.data;
    },
    system: async (): Promise<SystemSnapshot> => (await this.request<{ data: SystemSnapshot }>('/admin/system')).data,
    runMaintenance: async (task: 'cleanup' | 'backup', dryRun = false): Promise<Record<string, unknown>> =>
      (await this.request<{ data: Record<string, unknown> }>(`/admin/maintenance/${task}${dryRun ? '?dryRun=true' : ''}`, { method: 'POST' })).data,
    listPayments: async (status?: string): Promise<AdminPayment[]> => {
      const q = status ? `?status=${encodeURIComponent(status)}` : '';
      return (await this.request<{ data: AdminPayment[] }>(`/admin/payments${q}`)).data;
    },
    confirmPayment: async (id: string): Promise<void> => {
      await this.request(`/admin/payments/${id}/confirm`, { method: 'POST' });
    },
    rejectPayment: async (id: string): Promise<void> => {
      await this.request(`/admin/payments/${id}/reject`, { method: 'POST' });
    },
    intervene: async (jobId: string, action: 'cancel' | 'retry' | 'mark_completed'): Promise<void> => {
      await this.request(`/admin/jobs/${jobId}/intervene`, {
        method: 'POST',
        body: JSON.stringify({ action }),
      });
    },
  };

  // Models & Pricing API
  public models = {
    list: async (): Promise<{ models: import('../types').ModelInfo[]; pricing: import('../types').PlatformPricing; features?: { imageReference: boolean } }> => {
      const res = await this.request<{ models: import('../types').ModelInfo[]; pricing: import('../types').PlatformPricing; features?: { imageReference: boolean } }>('/models');
      return res;
    },
  };
}

export const api = new ApiClient();
export default api;
