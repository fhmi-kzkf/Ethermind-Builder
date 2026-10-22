export type UserRole = 'client' | 'operator' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export type ProjectStatus = 'draft' | 'planning' | 'building' | 'ready' | 'live' | 'failed' | 'needs_review';

export interface Project {
  id: string;
  userId: string;
  name: string;
  status: ProjectStatus;
  repoPath?: string | null;
  stack: string;
  createdAt: string;
  updatedAt: string;
  conversation?: Conversation;
  specs?: Spec[];
  jobs?: Job[];
  deployments?: Deployment[];
}

export interface Conversation {
  id: string;
  projectId: string;
  messages: Message[];
}

export interface ClarificationOption {
  id: string;
  label: string;
  description?: string;
  value: string;
}

export interface ClarificationQuestion {
  id: string;
  question: string;
  category: 'features' | 'auth' | 'database' | 'ui';
  options: ClarificationOption[];
  allowMultiple?: boolean;
}

export interface MessageMetadata {
  type?: 'clarifications' | 'spec_preview' | 'revision_request' | 'revision_started' | 'pending' | 'error';
  startedAt?: string;
  retryable?: boolean;
  questions?: ClarificationQuestion[];
  specId?: string;
  spec?: SpecDefinition;
  jobId?: string;
  isReadyForSpec?: boolean;
  answers?: Record<string, string>;
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  metadata?: string | null;
  createdAt: string;
}

export interface SpecDefinition {
  title: string;
  summary: string;
  targetUsers: string[];
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    styling: string;
  };
  features: Array<{
    name: string;
    description: string;
    priority: 'must_have' | 'should_have' | 'nice_to_have';
    userRole: string;
  }>;
  pages: Array<{
    route: string;
    name: string;
    purpose: string;
    components: string[];
  }>;
  databaseSchema: Array<{
    name: string;
    fields: Array<{
      name: string;
      type: string;
      required: boolean;
      unique?: boolean;
    }>;
  }>;
  apiEndpoints: Array<{
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    description: string;
  }>;
  designGuidelines: {
    theme: string;
    primaryColor: string;
    cardRadius: string;
    fontFamily: string;
  };
}

export interface Spec {
  id: string;
  projectId: string;
  version: number;
  content: string; // JSON
  approvedAt?: string | null;
  createdAt: string;
}

export type JobStatus = 'pending' | 'running' | 'paused' | 'failed' | 'completed' | 'cancelled' | 'needs_review';

export interface JobEvent {
  id: string;
  jobId: string;
  agent: string;
  eventType: string;
  message: string;
  payload?: any;
  createdAt: string;
}

export interface GateResult {
  id: string;
  jobId: string;
  gate: string;
  passed: boolean;
  report: {
    summary: string;
    issues?: Array<{
      severity: string;
      category: string;
      message: string;
      file?: string;
      fixRecommendation?: string;
    }>;
  };
  createdAt: string;
}

export interface Deployment {
  id: string;
  projectId: string;
  environment: string;
  url: string;
  port?: number | null;
  status: string;
  createdAt: string;
}

export interface Job {
  id: string;
  projectId: string;
  specId?: string | null;
  type: string;
  status: JobStatus;
  stepCount: number;
  maxSteps: number;
  tokenBudget: number;
  tokensUsed: number;
  costEstimate: number;
  errorMessage?: string | null;
  startedAt?: string | null;
  finishedAt?: string | null;
  createdAt: string;
  events?: JobEvent[];
  gateResults?: GateResult[];
  /** Only for a build that is waiting its turn. The wait is a rough guess from the last builds, or null. */
  queue?: { position: number | null; waiting: number; active: number; maxConcurrency: number; estimatedWaitMinutes: number | null } | null;
}

export interface AdminMetrics {
  summary: {
    totalJobs: number;
    completedJobs: number;
    failedJobs: number;
    successRate: string;
    totalTokensUsed: number;
    totalEstimatedCostUSD: number;
  };
  modelBreakdown: Array<{
    model: string;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    costUSD: number;
  }>;
  queueStatus: {
    queued: number;
    active: number;
    maxConcurrency: number;
  };
}

export type ModelTier = 'basic' | 'pro';

export interface ModelInfo {
  id: string;
  name: string;
  tier: ModelTier;
  badge: 'Basic' | 'Pro';
  parameters: string;
  contextWindow: string;
  pricingDesc: string;
  pricePerApp: number;
  zipExportPrice: number;
  recommendedFor: string;
  isFreeBuild: boolean;
  canCode: boolean;
}

export interface PlatformPricing {
  PRO_PRICE: number;
  BASIC_BUILD_PRICE: number;
  BASIC_ZIP_EXPORT_PRICE: number;
  CURRENCY: string;
  MODEL: string;
  LIVE_DOMAIN_SUFFIX: string;
  PRO_DESCRIPTION: string;
  BASIC_DESCRIPTION: string;
}
