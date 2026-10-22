import fs from 'fs';
import config from '../../config';
import prisma from '../../db/prisma';
import { AgentRole, EventType, GateCheckResult, GateIssue, SpecDefinition } from '../../types';
import previewManager, { LiveApp } from '../deployment/previewManager';
import { renderApp } from '../generation/appRenderer';
import { AVAILABLE_MODELS } from '../llm/pricing';
import { BudgetExceededError, LLMNotConfiguredError } from '../llm/router';
import { autoFixUnusedImports } from '../quality-gate/autofix';
import { QualityGateChecker } from '../quality-gate/checker';
import { runSmokeTest } from '../quality-gate/smokeTest';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { SandboxUnavailableError, sandbox } from '../sandbox/sandbox';
import sseManager from '../sse/sseManager';
import { customEndpointGroups, parseSpec, validateSpec } from '../spec/specSchema';
import { BackendAgent } from './backendAgent';
import { DatabaseAgent } from './databaseAgent';
import { agentPages, FrontendAgent, pagePath } from './frontendAgent';
import { isOwnedPath, ownedPaths } from './ownership';
import { PlannerAgent, RevisionChanges } from './plannerAgent';
import { RemediationAgent } from './remediationAgent';
import { ReviewerAgent } from './reviewerAgent';
import { TesterAgent } from './testerAgent';

class JobCancelledError extends Error {
  constructor() {
    super('Pembangunan dibatalkan atas permintaan pengguna.');
    this.name = 'JobCancelledError';
  }
}

class BuildNotPassedError extends Error {
  constructor(message: string, public readonly failing: GateCheckResult[]) {
    super(message);
    this.name = 'BuildNotPassedError';
  }
}

interface WorkPlan {
  backendSegments?: string[];
  frontendRoutes?: string[];
  backendInstructions: Record<string, string>;
  frontendInstructions: Record<string, string>;
  seed: boolean;
  seedInstruction?: string;
}

const sameJson = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

export class Orchestrator {
  private isCancelled = false;
  private roundOffset = 0;
  /** How many times each file has been patched by remediation in this job. */
  private patchAttempts = new Map<string, number>();
  private live: LiveApp | null = null;
  private finalRound = 0;
  /** Set when the app was delivered before its slow checks ran; resolves when they have all reported. */
  public hardening: Promise<void> | null = null;

  constructor(
    private jobId: string,
    private projectId: string,
    private selectedModel: string = 'nvidia/nemotron-3-ultra-550b-a55b',
    private mode: 'fast' | 'strict' = config.gates.mode
  ) {}

  public cancel(): void {
    this.isCancelled = true;
  }

  /**
   * Builds (or revises) the app, then proves it works: every gate must pass against the real,
   * running app before the job may be marked completed. Failing gates trigger a bounded repair loop;
   * if that is exhausted the job is handed to a human as needs_review.
   */
  public async run(): Promise<{ success: boolean; previewUrl?: string; error?: string }> {
    const job = await prisma.job.findUnique({ where: { id: this.jobId }, include: { spec: true, project: true } });
    if (!job) throw new Error(`Job ${this.jobId} not found`);
    if (!job.spec) throw new Error(`Job ${this.jobId} has no associated technical specification`);

    const modelInfo = AVAILABLE_MODELS[this.selectedModel] || AVAILABLE_MODELS['nvidia/nemotron-3-ultra-550b-a55b'];
    const fm = new WorkspaceFileManager(this.projectId, this.jobId);
    const isRevision = job.type === 'revision';

    try {
      await prisma.job.update({ where: { id: this.jobId }, data: { status: 'running', startedAt: new Date() } });
      await this.emit('orchestrator', 'started', `${isRevision ? 'Memulai revisi' : 'Memulai pembangunan'} dengan mesin coding ${modelInfo.name}.`, { model: this.selectedModel, tier: modelInfo.tier });

      let spec = parseSpec(JSON.parse(job.spec.content));
      const problems = validateSpec(spec);
      if (problems.length > 0) {
        throw new Error(`Spesifikasi belum valid dan perlu dirancang ulang:\n${problems.slice(0, 6).join('\n')}`);
      }

      await sandbox.ensureReady();
      await this.assertNotCancelled();

      // Continuing a job whose code was already written (it stopped for review, or the server restarted):
      // nothing is regenerated, only the quality gates and their repairs run again on the same workspace.
      const resuming = await this.canResume(fm);

      if (resuming) {
        this.roundOffset = await this.nextRound();
        // The platform's own files are rendered again from the spec, so a platform fix reaches code written earlier.
        // Files written by the agents are never touched.
        await this.writeGeneratedFiles(spec, fm, null);
        await this.step('orchestrator', 'Melanjutkan dari kode yang sudah dibuat. File AI tidak ditulis ulang; file bawaan platform disegarkan, lalu gerbang mutu dan perbaikan dijalankan lagi.');
      } else {
        let plan: WorkPlan = { backendInstructions: {}, frontendInstructions: {}, seed: true };

        if (isRevision) {
          const revised = await this.prepareRevision(job.project.repoPath, job.prompt, spec, fm, job.projectId, job.spec.version);
          spec = revised.spec;
          plan = revised.plan;
        } else {
          await fm.initWorkspace();
        }

        await this.writeGeneratedFiles(spec, fm, isRevision ? parseSpec(JSON.parse(job.spec.content)) : null);
        await this.step('orchestrator', 'Kerangka aplikasi, skema database, API standar, layar standar, dan tema dibuat dari spesifikasi.');
        await this.runAgents(spec, fm, plan);
        await this.saveCheckpoint('agents_completed', 5);
      }

      const outcome = await this.verify(spec, fm);

      // Version record and live preview
      const commitRef = `v${job.spec.version}-${Date.now().toString(36)}`;
      const version = await prisma.version.create({
        data: { projectId: this.projectId, jobId: this.jobId, commitRef, summary: `${isRevision ? 'Revisi' : 'Build'} ${commitRef}: ${spec.title}` },
      });
      const previewUrl = await previewManager.adopt(this.projectId, version.id, outcome.live);
      this.live = null;

      await prisma.project.update({ where: { id: this.projectId }, data: { status: 'ready', repoPath: fm.workspaceDir } });
      await prisma.job.update({ where: { id: this.jobId }, data: { status: 'completed', finishedAt: new Date() } });

      const credentials = spec.auth.mode === 'none' ? undefined : { email: outcome.live.secrets.adminEmail, password: outcome.live.secrets.adminPassword };
      const fast = this.mode === 'fast';
      await this.emit(
        'orchestrator',
        'completed',
        `${fast ? 'Aplikasi sudah berjalan dan lolos pemeriksaan dasar. Tes, keamanan, dan review AI masih diperiksa di latar belakang.' : 'Aplikasi siap dipakai dan semua gerbang kualitas lolos.'} Buka: ${previewUrl}${credentials ? `. Masuk dengan ${credentials.email} dan kata sandi awal yang tertera, lalu segera ganti.` : ''}`,
        { previewUrl, version: commitRef, credentials, gates: outcome.gateNames, hardening: fast }
      );
      if (fast) this.hardening = this.harden(spec, fm);
      return { success: true, previewUrl };
    } catch (error: any) {
      await this.discardLive();
      return this.fail(error, isRevision);
    }
  }

  /* ---------- revision ---------- */

  private async prepareRevision(
    previousDir: string | null,
    prompt: string | null,
    current: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    specVersion: number
  ): Promise<{ spec: SpecDefinition; plan: WorkPlan }> {
    if (!prompt) throw new Error('Permintaan revisi kosong.');
    if (!previousDir || !fs.existsSync(previousDir)) throw new Error('Belum ada versi sebelumnya yang bisa direvisi. Bangun aplikasinya dulu.');

    await this.emit('planner', 'step', 'Memahami permintaan revisi dan menentukan bagian yang berubah...', {});
    const revised = await PlannerAgent.reviseSpec(current, prompt, projectId, this.jobId);
    await this.assertNotCancelled();

    await fm.cloneFrom(previousDir);
    // Numbered after the newest spec that exists: an earlier revision may have failed and left a higher number behind.
    const newest = await prisma.spec.findFirst({ where: { projectId }, orderBy: { version: 'desc' }, select: { version: true } });
    const saved = await prisma.spec.create({
      data: { projectId, version: Math.max(newest?.version ?? 0, specVersion) + 1, content: JSON.stringify(revised.spec), approvedAt: new Date() },
    });
    await prisma.job.update({ where: { id: this.jobId }, data: { specId: saved.id } });
    await this.step('planner', revised.summary);

    return { spec: revised.spec, plan: this.planWork(current, revised.spec, revised.changes) };
  }

  /** Which hand-written parts need an agent: those whose spec changed, plus what the planner flagged. */
  private planWork(before: SpecDefinition, after: SpecDefinition, changes: RevisionChanges): WorkPlan {
    const oldGroups = customEndpointGroups(before);
    const backend = new Set<string>();
    const backendInstructions: Record<string, string> = {};
    for (const [segment, endpoints] of customEndpointGroups(after)) {
      if (!oldGroups.has(segment) || !sameJson(oldGroups.get(segment), endpoints)) {
        backend.add(segment);
        backendInstructions[segment] = 'The endpoint list changed. Update this file so it matches the current endpoints exactly.';
      }
    }
    for (const item of changes.endpoints) {
      backend.add(item.segment);
      backendInstructions[item.segment] = item.instruction;
    }

    const frontend = new Set<string>();
    const frontendInstructions: Record<string, string> = {};
    for (const page of agentPages(after)) {
      const old = before.pages.find((p) => p.route === page.route);
      if (!old || !sameJson(old, page)) frontend.add(page.route);
    }
    for (const item of changes.pages) {
      frontend.add(item.route);
      frontendInstructions[item.route] = item.instruction;
    }

    const seed = changes.seed || !sameJson(before.databaseSchema, after.databaseSchema);
    return {
      backendSegments: Array.from(backend).filter((s) => customEndpointGroups(after).has(s)),
      frontendRoutes: Array.from(frontend).filter((r) => agentPages(after).some((p) => p.route === r)),
      backendInstructions,
      frontendInstructions,
      seed,
      seedInstruction: seed ? 'The data model or business changed. Update the demo data to fit the current schema.' : undefined,
    };
  }

  /* ---------- generation ---------- */

  private async writeGeneratedFiles(spec: SpecDefinition, fm: WorkspaceFileManager, previous: SpecDefinition | null): Promise<void> {
    const { files, design } = renderApp(spec);

    if (previous) {
      const kept = new Set(files.map((f) => f.path));
      for (const file of renderApp(previous).files) if (!kept.has(file.path)) await fm.deleteFile(file.path);
      const owned = new Set(ownedPaths(spec));
      for (const file of ownedPaths(previous)) if (!owned.has(file)) await fm.deleteFile(file);
    }

    for (const file of files) await fm.writeFile(file.path, file.content);
    await this.emit('orchestrator', 'file_written', `${files.length} file dasar dibuat dari spesifikasi.`, {
      files: files.length,
      colorAdjustments: design.adjustments,
    });
  }

  /**
   * The agents depend on the spec, not on each other, so they work at the same time: demo data, the business
   * logic (followed by its tests, which need the finished routes), and the custom pages. The shared limit on
   * model calls keeps this from flooding the provider. Every branch is allowed to finish before an error is reported.
   */
  private async runAgents(spec: SpecDefinition, fm: WorkspaceFileManager, plan: WorkPlan): Promise<void> {
    const model = this.selectedModel;
    const groups = customEndpointGroups(spec);
    const wroteFile = (agent: AgentRole) => (path: string, label: string) => {
      void this.emit(agent, 'file_written', `Selesai menulis ${label} (${path}).`, { path });
    };

    const branches: Array<Promise<void>> = [];

    if (plan.seed) {
      branches.push(
        (async () => {
          await this.assertNotCancelled();
          await this.emit('database', 'step', 'Agent Database menyiapkan data contoh yang sesuai dengan bisnis Anda...', {});
          await DatabaseAgent.execute(spec, fm, this.projectId, this.jobId, model, plan.seedInstruction);
          wroteFile('database')('prisma/seed.data.js', 'data contoh');
          await this.step('database', 'Data contoh siap.');
        })()
      );
    }

    if (groups.size > 0 && (!plan.backendSegments || plan.backendSegments.length > 0)) {
      branches.push(
        (async () => {
          await this.assertNotCancelled();
          await this.emit('backend', 'step', `Agent Backend menulis ${plan.backendSegments?.length ?? groups.size} kelompok logika bisnis...`, {});
          await BackendAgent.execute(spec, fm, this.projectId, this.jobId, model, { only: plan.backendSegments, instructions: plan.backendInstructions, onFile: wroteFile('backend') });
          await this.step('backend', 'Logika bisnis selesai ditulis.');

          // Tests are written after delivery in fast mode; the app does not need them to run.
          if (this.mode === 'fast') return;
          await this.assertNotCancelled();
          await this.emit('tester', 'step', 'Agent Tester menulis tes untuk logika bisnis...', {});
          await TesterAgent.execute(spec, fm, this.projectId, this.jobId, model, { only: plan.backendSegments, onFile: wroteFile('tester') });
          await this.step('tester', 'Tes logika bisnis selesai ditulis.');
        })()
      );
    }

    if (agentPages(spec).length > 0 && (!plan.frontendRoutes || plan.frontendRoutes.length > 0)) {
      branches.push(
        (async () => {
          await this.assertNotCancelled();
          await this.emit('frontend', 'step', 'Agent Frontend menyusun halaman khusus aplikasi Anda...', {});
          await FrontendAgent.execute(spec, fm, this.projectId, this.jobId, model, { only: plan.frontendRoutes, instructions: plan.frontendInstructions, onFile: wroteFile('frontend') });
          await this.step('frontend', 'Halaman khusus selesai disusun.');
        })()
      );
    }

    const outcomes = await Promise.allSettled(branches);
    const failed = outcomes.find((o): o is PromiseRejectedResult => o.status === 'rejected');
    if (failed) throw failed.reason;
  }

  /** Re-runs an agent for any hand-written file that is missing, so a gap never reaches the gates as noise. */
  private async fillMissingFiles(spec: SpecDefinition, fm: WorkspaceFileManager): Promise<void> {
    const missing = new Set(ownedPaths(spec).filter((p) => !fm.fileExists(p) && !(this.mode === 'fast' && p.startsWith('tests/'))));
    if (missing.size === 0) return;

    const segments = Array.from(customEndpointGroups(spec).keys());
    const routeSegments = segments.filter((s) => missing.has(`src/routes/custom/${s}.js`));
    const testSegments = segments.filter((s) => missing.has(`tests/custom/${s}.test.js`));
    const pageRoutes = agentPages(spec).filter((p) => missing.has(pagePath(p))).map((p) => p.route);

    if (missing.has('prisma/seed.data.js')) await DatabaseAgent.execute(spec, fm, this.projectId, this.jobId, this.selectedModel);
    if (routeSegments.length > 0) await BackendAgent.execute(spec, fm, this.projectId, this.jobId, this.selectedModel, { only: routeSegments });
    if (pageRoutes.length > 0) await FrontendAgent.execute(spec, fm, this.projectId, this.jobId, this.selectedModel, { only: pageRoutes });
    if (testSegments.length > 0) await TesterAgent.execute(spec, fm, this.projectId, this.jobId, this.selectedModel, { only: testSegments });
  }

  /* ---------- verification loop ---------- */

  private async verify(spec: SpecDefinition, fm: WorkspaceFileManager): Promise<{ live: LiveApp; gateNames: string[] }> {
    const rounds = config.gates.maxRemediationRounds;
    let lastFailing: GateCheckResult[] = [];
    let previousResults: GateCheckResult[] = [];
    let lastChanged: string[] = [];

    for (let round = 0; round <= rounds; round++) {
      await this.assertNotCancelled();
      await this.fillMissingFiles(spec, fm);

      await this.emit('reviewer', 'gate_check', `Menjalankan gerbang kualitas pada kode yang dibangun${round > 0 ? ` (putaran perbaikan ${round})` : ''}...`, { round });
      const checker = new QualityGateChecker(fm, spec, this.jobId, this.projectId);
      const lightRound = round > 0 && lastChanged.length > 0 && lastChanged.every((file) => file.startsWith('public/js/pages/'));
      const fast = this.mode === 'fast';
      const reuse = lightRound ? previousResults : undefined;
      const { results, lowCoverage, reused } = fast ? await checker.runQuick({ reuse }) : await checker.runStatic({ reuse });
      if (reused.length > 0) {
        await this.emit('reviewer', 'step', fast ? 'Hanya halaman yang berubah, jadi build tidak dijalankan ulang.' : 'Hanya halaman yang berubah, jadi build, tes backend, dan checklist tidak dijalankan ulang.', { reused });
      }
      await this.recordGates(results, round, new Set(reused));
      this.finalRound = round;

      if (results.every((r) => r.passed)) {
        // In fast mode the AI review runs after delivery, together with the other slow checks.
        const review: GateCheckResult = fast ? { gate: 'ai_review', passed: true, summary: '', issues: [] } : await this.review(spec, fm);
        if (!fast) {
          results.push(review);
          await this.recordGates([review], round);
        }

        if (review.passed) {
          const smoke = await this.smoke(spec, fm);
          results.push(smoke.result);
          await this.recordGates([smoke.result], round);
          if (smoke.result.passed && smoke.live) {
            this.live = smoke.live;
            return { live: smoke.live, gateNames: results.map((r) => r.gate) };
          }
        }
      }

      lastFailing = results.filter((r) => !r.passed);
      previousResults = results;
      if (round === rounds) break;

      const job = await prisma.job.findUnique({ where: { id: this.jobId }, select: { stepCount: true, maxSteps: true } });
      if (job && job.stepCount >= job.maxSteps) break;

      // A model that fails while repairing must not kill a build whose code is already written: it stops for review and can be continued.
      let changed: string[] = [];
      try {
        changed = await this.remediate(spec, fm, lastFailing, lowCoverage);
      } catch (error: any) {
        if (error instanceof BudgetExceededError) throw error;
        console.warn(`[Orchestrator] Repair attempt failed: ${error.message}`);
        await this.emit('reviewer', 'step', 'Mesin AI tidak berhasil memperbaiki kode pada putaran ini. Kode yang sudah dibuat tetap disimpan dan bisa dilanjutkan.', { error: error.message });
      }
      lastChanged = changed;
      await prisma.job.update({ where: { id: this.jobId }, data: { remediationRounds: { increment: 1 } } });
      await this.step('reviewer', changed.length > 0 ? `Perbaikan otomatis diterapkan pada ${changed.length} file.` : 'Perbaikan otomatis tidak menghasilkan perubahan.');
      if (changed.length === 0) break;
    }

    const names = lastFailing.map((r) => r.gate).join(', ');
    throw new BuildNotPassedError(
      `Gerbang kualitas belum lolos setelah perbaikan otomatis (${names}). ${lastFailing.map((r) => r.summary).join(' ')}`.trim(),
      lastFailing
    );
  }

  /**
   * Runs after the app is already delivered: writes the backend tests, then runs tests with coverage, the dependency
   * audit, the launch checklist and the AI review. Results are recorded honestly but never take the app away or
   * change its files; a failure is a list of findings the client can have fixed.
   */
  private async harden(spec: SpecDefinition, fm: WorkspaceFileManager): Promise<void> {
    try {
      await this.emit('reviewer', 'step', 'Pemeriksaan mutu lanjutan berjalan di latar belakang. Aplikasi Anda sudah bisa dipakai.', { hardening: true });
      if (customEndpointGroups(spec).size > 0) await TesterAgent.execute(spec, fm, this.projectId, this.jobId, this.selectedModel);

      const checker = new QualityGateChecker(fm, spec, this.jobId, this.projectId);
      const { results } = await checker.runHardening();
      await this.recordGates(results, this.finalRound);

      const review = await this.review(spec, fm);
      results.push(review);
      await this.recordGates([review], this.finalRound);

      const failing = results.filter((r) => !r.passed).map((r) => r.gate);
      await this.emit(
        'reviewer',
        failing.length === 0 ? 'gate_passed' : 'gate_failed',
        failing.length === 0 ? 'Semua pemeriksaan lanjutan lolos.' : `Pemeriksaan lanjutan menemukan catatan pada: ${failing.join(', ')}. Aplikasi tetap berjalan.`,
        { hardening: true, failing }
      );
    } catch (error: any) {
      console.warn(`[Orchestrator] Background checks for job ${this.jobId} stopped: ${error.message}`);
      await this.emit('reviewer', 'step', `Pemeriksaan lanjutan berhenti sebelum selesai: ${error.message}`, { hardening: true }).catch(() => undefined);
    }
  }

  private async review(spec: SpecDefinition, fm: WorkspaceFileManager): Promise<GateCheckResult> {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return await ReviewerAgent.execute(spec, fm, this.projectId, this.jobId);
      } catch (error: any) {
        if (error instanceof BudgetExceededError) throw error;
        console.warn(`[Orchestrator] Review attempt ${attempt} failed: ${error.message}`);
      }
    }
    return {
      gate: 'ai_review',
      passed: false,
      summary: 'Review AI tidak bisa dijalankan, jadi kode belum terverifikasi.',
      issues: [{ severity: 'high', category: 'review_unavailable', message: 'Model reviewer tidak merespons dengan hasil yang valid setelah dua percobaan.' }],
    };
  }

  private async smoke(spec: SpecDefinition, fm: WorkspaceFileManager): Promise<{ result: GateCheckResult; live?: LiveApp }> {
    await this.emit('devops', 'step', 'Menjalankan aplikasi untuk smoke test...', {});
    let live: LiveApp;
    try {
      live = await previewManager.launch(this.projectId, this.jobId, fm, spec);
    } catch (error: any) {
      return {
        result: { gate: 'smoke_test', passed: false, summary: 'Aplikasi tidak bisa dijalankan.', issues: [{ severity: 'critical', category: 'smoke', message: error.message }] },
      };
    }

    const credentials = spec.auth.mode === 'none' ? undefined : { email: live.secrets.adminEmail, password: live.secrets.adminPassword };
    const result = await runSmokeTest(live.localUrl ?? live.url, spec, credentials);
    if (!result.passed) {
      await previewManager.discard(live);
      return { result };
    }
    return { result, live };
  }

  private async remediate(spec: SpecDefinition, fm: WorkspaceFileManager, failing: GateCheckResult[], lowCoverage: Array<{ file: string; percent: number }>): Promise<string[]> {
    const issues: GateIssue[] = failing.flatMap((r) => r.issues);
    const coverageIssue = issues.find((i) => i.category === 'coverage');
    let fixable = issues.filter((i) => !['coverage', 'skipped', 'audit_unavailable', 'dependency', 'install'].includes(i.category ?? ''));

    // A lint error inside a platform-generated file cannot be caused by, or fixed in, the hand-written code. Asking the
    // model to try only burns minutes, so it is reported as a platform defect instead.
    const platformLint = fixable.filter((i) => i.category === 'lint' && i.file && fm.fileExists(i.file) && !isOwnedPath(spec, i.file));
    if (platformLint.length > 0) {
      fixable = fixable.filter((i) => !platformLint.includes(i));
      console.error(`[Orchestrator] Lint errors in platform-generated files (platform bug): ${platformLint.map((i) => `${i.file}:${i.line}`).join(', ')}`);
      await this.emit('reviewer', 'step', `Lint menemukan masalah di file bawaan platform (${platformLint[0].file}). Ini bukan kesalahan kode yang ditulis AI dan tidak bisa diperbaiki otomatis; tim platform perlu memperbaikinya.`, { files: platformLint.map((i) => i.file) });
    }
    const changed: string[] = [];

    // Unused imports never need a model.
    const autofix = await autoFixUnusedImports(fm, fixable);
    changed.push(...autofix.changed);
    fixable = autofix.remaining;

    // Patching a file whose structure is broken rarely converges. After one failed patch, write it again from scratch.
    const rewrite = fixable.filter((i) => i.file && /Parsing error|SyntaxError/.test(i.message) && (this.patchAttempts.get(i.file) ?? 0) >= 1);
    if (rewrite.length > 0) {
      changed.push(...(await this.rewriteFiles(spec, fm, rewrite)));
      fixable = fixable.filter((i) => !rewrite.includes(i));
    }
    for (const issue of fixable) if (issue.file) this.patchAttempts.set(issue.file, (this.patchAttempts.get(issue.file) ?? 0) + 1);

    await this.emit('reviewer', 'step', `Menemukan ${issues.length} catatan mutu. Coder Agent memperbaiki berdasarkan hasil tes dan lint yang sebenarnya...`, { issues: issues.length });

    // Repairs always use the platform's coder model, not the (possibly smaller) one the client picked for
    // the first draft: a model that wrote broken code rarely fixes it itself.
    if (fixable.length > 0) changed.push(...(await RemediationAgent.fix(spec, fm, fixable, this.projectId, this.jobId)));
    if (coverageIssue && fixable.length === 0) {
      const added = await TesterAgent.improveCoverage(spec, fm, this.projectId, this.jobId, lowCoverage, this.selectedModel);
      changed.push(...added.map((f) => f.path));
    }
    return changed;
  }

  /** Regenerates files with a syntax error from scratch, telling the agent what went wrong last time. */
  private async rewriteFiles(spec: SpecDefinition, fm: WorkspaceFileManager, issues: GateIssue[]): Promise<string[]> {
    const changed: string[] = [];
    for (const issue of issues) {
      const file = issue.file as string;
      const note =
        `The previous version of this file could not be parsed (${issue.message}). Write it again from scratch. Build it from small named pieces and keep it simple and short; do not reuse the old structure.`;
      await this.emit('reviewer', 'step', `${file} masih berisi kesalahan sintaks setelah diperbaiki. File ditulis ulang dari awal...`, { file });

      const page = agentPages(spec).find((p) => pagePath(p) === file);
      const segment = /^src\/routes\/custom\/(.+)\.js$/.exec(file)?.[1];
      if (page) await FrontendAgent.execute(spec, fm, this.projectId, this.jobId, undefined, { only: [page.route], instructions: { [page.route]: note }, fresh: true });
      else if (segment) await BackendAgent.execute(spec, fm, this.projectId, this.jobId, undefined, { only: [segment], instructions: { [segment]: note }, fresh: true });
      else continue;

      this.patchAttempts.delete(file);
      changed.push(file);
    }
    return changed;
  }

  /* ---------- persistence and events ---------- */

  /** The code exists and the agents finished (checkpoint 5), so the job can continue at the quality gates. */
  private async canResume(fm: WorkspaceFileManager): Promise<boolean> {
    if (!fm.fileExists('package.json')) return false;
    return (await prisma.agentSession.count({ where: { jobId: this.jobId, checkpoint: { gte: 5 } } })) > 0;
  }

  /** Gate rounds keep counting across a continuation, so the history reads as one run. */
  private async nextRound(): Promise<number> {
    const last = await prisma.gateResult.findFirst({ where: { jobId: this.jobId }, orderBy: { createdAt: 'desc' } });
    return last ? (JSON.parse(last.report).round as number) + 1 : 0;
  }

  private async recordGates(results: GateCheckResult[], localRound: number, reused: Set<string> = new Set()): Promise<void> {
    const round = localRound + this.roundOffset;
    for (const result of results) {
      if (reused.has(result.gate)) continue; // carried over from the previous round, already on record
      await prisma.gateResult.create({
        data: { jobId: this.jobId, gate: result.gate, passed: result.passed, report: JSON.stringify({ round, summary: result.summary, issues: result.issues, metrics: result.metrics }) },
      });
      await this.emit('reviewer', result.passed ? 'gate_passed' : 'gate_failed', `${result.passed ? 'Lolos' : 'Belum lolos'}: ${result.summary}`, { gate: result.gate, round, issues: result.issues.length, metrics: result.metrics });
    }
  }

  private async fail(error: any, isRevision: boolean): Promise<{ success: false; error: string }> {
    console.error(`[Orchestrator] Job ${this.jobId} stopped:`, error.message);

    let status: 'failed' | 'cancelled' | 'needs_review' = 'failed';
    let message: string = error.message;
    if (this.isCancelled || error instanceof JobCancelledError) status = 'cancelled';
    else if (error instanceof BuildNotPassedError || error instanceof BudgetExceededError) status = 'needs_review';
    else if (error instanceof LLMNotConfiguredError || error instanceof SandboxUnavailableError) message = error.message;

    await prisma.job.update({ where: { id: this.jobId }, data: { status, finishedAt: new Date(), errorMessage: message } });

    const projectStatus = status === 'cancelled' || isRevision ? 'ready' : status === 'needs_review' ? 'needs_review' : 'failed';
    const workspace = new WorkspaceFileManager(this.projectId, this.jobId).workspaceDir;
    await prisma.project.update({
      where: { id: this.projectId },
      data: { status: projectStatus, ...(status === 'needs_review' && !isRevision ? { repoPath: workspace } : {}) },
    });

    const text =
      status === 'cancelled'
        ? 'Pembangunan dibatalkan oleh pengguna.'
        : status === 'needs_review'
          ? `Aplikasi belum memenuhi standar kualitas dan diteruskan ke tim untuk ditinjau. ${message}`
          : `Pembangunan berhenti: ${message}`;
    await this.emit('orchestrator', status === 'cancelled' ? 'failed' : status === 'needs_review' ? 'gate_failed' : 'error', text, { error: message, status });
    return { success: false, error: message };
  }

  private async discardLive(): Promise<void> {
    if (this.live) {
      await previewManager.discard(this.live).catch(() => undefined);
      this.live = null;
    }
  }

  private async assertNotCancelled(): Promise<void> {
    if (this.isCancelled) throw new JobCancelledError();
    const current = await prisma.job.findUnique({ where: { id: this.jobId }, select: { status: true } });
    if (current?.status === 'cancelled') {
      this.isCancelled = true;
      throw new JobCancelledError();
    }
  }

  private async step(agent: AgentRole, message: string): Promise<void> {
    await prisma.job.update({ where: { id: this.jobId }, data: { stepCount: { increment: 1 } } });
    await this.emit(agent, 'step', message, {});
  }

  private async saveCheckpoint(agentState: string, checkpoint: number): Promise<void> {
    await prisma.agentSession.create({
      data: { jobId: this.jobId, agent: 'orchestrator', state: JSON.stringify({ checkpoint, state: agentState }), checkpoint },
    });
  }

  private async emit(agent: AgentRole, eventType: EventType, message: string, payload: any = {}): Promise<void> {
    const event = await prisma.jobEvent.create({
      data: { jobId: this.jobId, agent, eventType, message, payload: JSON.stringify(payload) },
    });
    sseManager.broadcast({ jobId: this.jobId, agent, eventType, message, payload, createdAt: event.createdAt.toISOString() });
  }
}
