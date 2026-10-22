import React, { useCallback, useEffect, useId, useState } from 'react';
import { Navbar, AppView } from './components/Navbar';
import { Home } from './components/Home';
import { ProjectDashboard } from './components/ProjectDashboard';
import { ProjectBuilder } from './components/ProjectBuilder';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { Dialog, Notice } from './components/ui';
import { TemplatesPage } from './pages/TemplatesPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { LegalPage } from './pages/LegalPage';
import { DEFAULT_MODEL_ID } from './data/models';
import { useEnterMotion } from './motion/useEnterMotion';
import { usePageMotion } from './motion/usePageMotion';
import api from './services/api';
import type { Project, User } from './types';

const VIEWS: AppView[] = ['home', 'templates', 'pricing', 'security', 'terms', 'privacy', 'projects', 'admin'];

/** A short working title from the first sentence of what the client wrote. The real title arrives with the spec. */
function nameFromPrompt(prompt: string): string {
  const cleaned = prompt
    .trim()
    .replace(/^(saya|aku|kami)\s+(punya|ingin|mau|butuh|perlu)\s+/i, '')
    .replace(/^(tolong\s+)?(buatkan|buat|bangun(kan)?|bikin(kan)?)\s+(saya\s+)?(sebuah\s+)?(aplikasi|sistem)?\s*/i, '');
  const words = cleaned.split(/[\s,.:;]+/).filter(Boolean).slice(0, 5).join(' ');
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : 'Aplikasi baru';
}

/** Guest accounts get a password nobody knows, kept only as the session token in this browser. */
function randomPassword(): string {
  const bytes = new Uint8Array(18);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(36).padStart(2, '0')).join('');
}

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectPrompt, setNewProjectPrompt] = useState('');
  const [creatingProject, setCreatingProject] = useState(false);
  const [notice, setNotice] = useState<{ tone: 'bad' | 'neutral'; text: string } | null>(null);
  // The first message of a new project is sent by the builder itself, so it shows up the moment the chat opens.
  const [pendingPrompt, setPendingPrompt] = useState<{ projectId: string; text: string } | null>(null);
  const [selectedEngineModel, setSelectedEngineModel] = useState<string>(DEFAULT_MODEL_ID);
  usePageMotion(currentView);
  useEnterMotion();
  const nameFieldId = useId();
  const promptFieldId = useId();

  // Sync the view with the URL hash.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VIEWS.includes(hash as AppView)) setCurrentView(hash as AppView);
      else if (hash === '') setCurrentView((current) => (current === 'builder' ? current : 'home'));
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const loadProjects = useCallback(async () => {
    setLoadingProjects(true);
    try {
      setProjects(await api.projects.list());
    } catch (err) {
      console.error('Failed to load projects:', err);
      setNotice({ tone: 'bad', text: 'Daftar proyek belum bisa dimuat. Muat ulang halaman, atau coba lagi sebentar lagi.' });
    } finally {
      setLoadingProjects(false);
    }
  }, []);

  // Restore the session on startup.
  useEffect(() => {
    if (!api.getToken()) return;
    api.auth
      .me()
      .then((u) => {
        setUser(u);
        void loadProjects();
      })
      .catch(() => {
        api.auth.logout();
        setUser(null);
      });
  }, [loadProjects]);

  const navigateToView = (view: AppView) => {
    if (view === 'projects' && !user) {
      setAuthModalOpen(true);
      return;
    }
    if (view === 'admin' && (!user || (user.role !== 'admin' && user.role !== 'operator'))) {
      setNotice({ tone: 'bad', text: 'Halaman admin hanya untuk operator dan administrator.' });
      return;
    }
    setNotice(null);
    setCurrentView(view);
    if (view !== 'builder') window.location.hash = view === 'home' ? '' : `#${view}`;
    window.scrollTo({ top: 0 });
  };

  const handleLogout = () => {
    api.auth.logout();
    setUser(null);
    setProjects([]);
    setSelectedProject(null);
    navigateToView('home');
  };

  const handleAuthSuccess = (u: User) => {
    setUser(u);
    void loadProjects();
    if (currentView === 'home') navigateToView('projects');
  };

  // A visitor who writes an idea before signing in gets a guest account, so nothing they typed is lost.
  const ensureUser = async (): Promise<User> => {
    if (user) return user;
    const res = await api.auth.register(`tamu-${Date.now()}@ethermind.app`, randomPassword(), 'client');
    setUser(res.user);
    return res.user;
  };

  const openBuilder = (project: Project, prompt?: string) => {
    setSelectedProject(project);
    if (prompt) setPendingPrompt({ projectId: project.id, text: prompt });
    setCurrentView('builder');
    setNotice(null);
    window.scrollTo({ top: 0 });
    void loadProjects();
  };

  const startFromPrompt = async (prompt: string, selectedModel?: string) => {
    if (selectedModel) setSelectedEngineModel(selectedModel);
    setCreatingProject(true);
    setNotice(null);
    try {
      await ensureUser();
      openBuilder(await api.projects.create(nameFromPrompt(prompt)), prompt);
    } catch (err: any) {
      setNotice({ tone: 'bad', text: `Percakapan belum bisa dibuka: ${err.message}. Coba lagi.` });
    } finally {
      setCreatingProject(false);
    }
  };

  const handleSelectProject = async (projectId: string) => {
    try {
      const full = await api.projects.get(projectId);
      openBuilder(full);
    } catch (err: any) {
      setNotice({ tone: 'bad', text: `Proyek belum bisa dibuka: ${err.message}` });
    }
  };

  const submitNewProject = async (event: React.FormEvent) => {
    event.preventDefault();
    const name = newProjectName.trim();
    if (!name) return;
    setCreatingProject(true);
    try {
      await ensureUser();
      const project = await api.projects.create(name);
      setNewProjectOpen(false);
      setNewProjectName('');
      const prompt = newProjectPrompt.trim();
      setNewProjectPrompt('');
      openBuilder(project, prompt || undefined);
    } catch (err: any) {
      setNotice({ tone: 'bad', text: `Proyek belum bisa dibuat: ${err.message}` });
    } finally {
      setCreatingProject(false);
    }
  };

  const isBuilder = currentView === 'builder' && selectedProject;
  const withFooter = (page: React.ReactNode) => (
    <>
      {page}
      <Footer onChangeView={navigateToView} />
    </>
  );

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        onLogout={handleLogout}
        currentView={currentView}
        onChangeView={navigateToView}
        onNewProject={() => setNewProjectOpen(true)}
      />

      {notice && (
        <div className="container" style={{ paddingTop: 'var(--space-3)' }}>
          <Notice tone={notice.tone}>{notice.text}</Notice>
        </div>
      )}

      <main id="isi" tabIndex={-1} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentView === 'home' && withFooter(<Home onStartBuild={startFromPrompt} busy={creatingProject} />)}
        {currentView === 'templates' && withFooter(<TemplatesPage onSelectTemplate={startFromPrompt} />)}
        {currentView === 'pricing' && withFooter(<PricingPage onStart={() => navigateToView('home')} />)}
        {currentView === 'security' && withFooter(<SecurityPage />)}
        {currentView === 'terms' && withFooter(<LegalPage kind="terms" />)}
        {currentView === 'privacy' && withFooter(<LegalPage kind="privacy" />)}

        {currentView === 'projects' && (
          <ProjectDashboard projects={projects} loading={loadingProjects} onSelectProject={handleSelectProject} onNewProject={() => setNewProjectOpen(true)} onRefresh={loadProjects} />
        )}

        {isBuilder && (
          <ProjectBuilder
            project={selectedProject}
            initialModel={selectedEngineModel}
            initialPrompt={pendingPrompt?.projectId === selectedProject.id ? pendingPrompt.text : undefined}
            onInitialPromptSent={() => setPendingPrompt(null)}
            onBack={() => {
              navigateToView('projects');
              void loadProjects();
            }}
            onRefreshProject={async () => {
              setSelectedProject(await api.projects.get(selectedProject.id));
            }}
          />
        )}

        {currentView === 'admin' && <AdminDashboard />}
      </main>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} onSuccess={handleAuthSuccess} />

      <Dialog open={newProjectOpen} onClose={() => setNewProjectOpen(false)} title="Proyek baru" description="Beri nama proyek. Cerita tentang usahanya bisa ditulis sekarang atau nanti di dalam chat.">
        <form className="stack" onSubmit={submitNewProject}>
          <div className="field">
            <label htmlFor={nameFieldId}>Nama proyek</label>
            <input id={nameFieldId} data-autofocus className="input" required value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} placeholder="Contoh: Stok Toko Berkah" />
          </div>
          <div className="field">
            <label htmlFor={promptFieldId}>Cerita awal (boleh dikosongkan)</label>
            <textarea id={promptFieldId} className="textarea" rows={4} value={newProjectPrompt} onChange={(e) => setNewProjectPrompt(e.target.value)} placeholder="Siapa yang memakai aplikasi, dan apa yang paling sering dicatat?" />
          </div>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn--secondary" onClick={() => setNewProjectOpen(false)}>
              Batal
            </button>
            <button type="submit" className="btn" disabled={creatingProject || !newProjectName.trim()}>
              {creatingProject ? 'Membuat...' : 'Buat proyek'}
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}

export default App;
