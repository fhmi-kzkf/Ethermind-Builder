export type UserRole = 'client' | 'operator' | 'admin';

export type ProjectStatus = 'draft' | 'planning' | 'building' | 'ready' | 'live' | 'failed' | 'needs_review';

export type JobType = 'build' | 'revision';

export type JobStatus = 'pending' | 'running' | 'paused' | 'failed' | 'completed' | 'cancelled' | 'needs_review';

export type AgentRole =
  | 'orchestrator'
  | 'planner'
  | 'backend'
  | 'frontend'
  | 'database'
  | 'tester'
  | 'reviewer'
  | 'devops'
  | 'fast'
  | 'vision';

export type EventType =
  | 'started'
  | 'step'
  | 'file_written'
  | 'command_executed'
  | 'test_run'
  | 'gate_check'
  | 'gate_passed'
  | 'gate_failed'
  | 'deployed'
  | 'completed'
  | 'failed'
  | 'error';

export type QualityGateType =
  | 'build_check'
  | 'lint_typecheck'
  | 'unit_test'
  | 'e2e_test'
  | 'security_scan'
  | 'ai_review'
  | 'launch_checklist'
  | 'smoke_test';

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

export type {
  SpecDefinition,
  SpecFeature,
  SpecPage,
  SpecTable,
  SpecTableField,
  SpecEndpoint,
  DesignGuidelines,
} from '../services/spec/specSchema';

export interface GateIssue {
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  message: string;
  file?: string;
  line?: number;
  fixRecommendation?: string;
}

export interface GateCheckResult {
  gate: QualityGateType;
  passed: boolean;
  score?: number;
  summary: string;
  issues: GateIssue[];
  metrics?: Record<string, any>;
}

export interface FileOperation {
  path: string;
  content: string;
  description?: string;
}

export interface CommandExecutionResult {
  command: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  durationMs: number;
  success: boolean;
}

export interface LLMUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  model: string;
  costEstimate: number;
}
