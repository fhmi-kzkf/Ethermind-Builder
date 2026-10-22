import React, { useEffect, useState } from 'react';
import type { User } from '../types';
import { Logo } from './ui';

export type AppView = 'home' | 'templates' | 'pricing' | 'security' | 'terms' | 'privacy' | 'projects' | 'builder' | 'admin';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  onNewProject: () => void;
}

const PUBLIC_LINKS: Array<{ view: AppView; label: string }> = [
  { view: 'templates', label: 'Contoh' },
  { view: 'pricing', label: 'Harga' },
  { view: 'security', label: 'Keamanan' },
];

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onLogout, currentView, onChangeView, onNewProject }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isStaff = user?.role === 'admin' || user?.role === 'operator';

  const links = [...PUBLIC_LINKS, ...(user ? [{ view: 'projects' as AppView, label: 'Proyek saya' }] : []), ...(isStaff ? [{ view: 'admin' as AppView, label: 'Admin' }] : [])];

  // The mobile menu closes with Escape, and when a link is chosen.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (view: AppView) => (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    onChangeView(view);
  };

  const renderLink = (link: { view: AppView; label: string }) => (
    <a key={link.view} className="nav__link" href={`#${link.view}`} aria-current={currentView === link.view ? 'page' : undefined} onClick={go(link.view)}>
      {link.label}
    </a>
  );

  return (
    <>
      <a className="skip-link" href="#isi">
        Lewati ke isi halaman
      </a>
      <header className="nav">
        <nav className="container nav__inner" aria-label="Utama">
          <a className="brand" href="#" onClick={go('home')} aria-label="Ethermind, ke beranda">
            <Logo size={34} label={null} />
            <span>Ethermind</span>
          </a>

          <div className="nav__links">{links.map(renderLink)}</div>

          <div className="nav__actions">
            {user ? (
              <>
                <button type="button" className="btn btn--sm hide-sm" onClick={onNewProject}>
                  Proyek baru
                </button>
                <span className="small muted hide-sm" title={user.email}>
                  {user.email.length > 22 ? `${user.email.slice(0, 20)}...` : user.email}
                </span>
                <button type="button" className="btn btn--secondary btn--sm" onClick={onLogout}>
                  Keluar
                </button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn--quiet btn--sm hide-sm" onClick={onOpenAuth}>
                  Masuk
                </button>
                <button type="button" className="btn btn--sm" onClick={onOpenAuth}>
                  Mulai membuat
                </button>
              </>
            )}
            <button type="button" className="btn btn--secondary btn--sm nav__menu-btn" aria-expanded={menuOpen} aria-controls="menu-seluler" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? 'Tutup' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div id="menu-seluler" className="drawer">
          {links.map(renderLink)}
          {user ? (
            <button type="button" className="btn" style={{ marginTop: 'var(--space-4)' }} onClick={onNewProject}>
              Proyek baru
            </button>
          ) : (
            <button type="button" className="btn btn--secondary" style={{ marginTop: 'var(--space-4)' }} onClick={onOpenAuth}>
              Masuk
            </button>
          )}
        </div>
      )}
    </>
  );
};
