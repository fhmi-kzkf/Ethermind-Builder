import { appConfig } from './app.config.js';
import { clear, h, icon } from './lib/dom.js';
import { createRouter } from './lib/router.js';
import { loadSession, logout, session } from './lib/session.js';
import { badge, button } from './lib/ui.js';

const root = document.getElementById('app');
const authEnabled = appConfig.auth.mode !== 'none';

function visiblePages(user) {
  return appConfig.pages.filter((page) => !page.roles || (user && page.roles.includes(user.role)));
}

function buildShell(user) {
  const pages = visiblePages(user);
  const links = new Map();

  const nav = h(
    'nav',
    { class: 'nav', id: 'nav', 'aria-label': 'Menu utama' },
    pages
      .filter((page) => page.nav !== false)
      .map((page) => {
        const link = h('a', { class: 'nav-link', href: `#${page.path}` }, icon(page.icon || 'file'), h('span', null, page.name));
        links.set(page.path, link);
        return link;
      })
  );

  const menuButton = button({ ariaLabel: 'Buka menu', icon: 'menu', variant: 'ghost', onClick: () => toggleNav() });
  menuButton.classList.add('menu-toggle');
  menuButton.setAttribute('aria-controls', 'nav');
  menuButton.setAttribute('aria-expanded', 'false');

  const account = user
    ? h(
        'div',
        { class: 'account' },
        h('span', { class: 'account-name' }, user.name),
        badge(user.role, 'accent'),
        button({
          ariaLabel: 'Keluar',
          icon: 'logout',
          variant: 'ghost',
          onClick: async () => {
            await logout();
            start();
          },
        })
      )
    : null;

  const main = h('main', { class: 'main', id: 'main' });
  const shell = h(
    'div',
    { class: 'shell' },
    h('a', { class: 'skip-link', href: '#main' }, 'Lewati ke konten'),
    h(
      'header',
      { class: 'appbar' },
      menuButton,
      h('div', { class: 'brand' }, h('span', { class: 'brand-mark', 'aria-hidden': 'true' }, appConfig.title.charAt(0).toUpperCase()), h('span', { class: 'brand-name' }, appConfig.title)),
      account
    ),
    nav,
    main
  );

  function toggleNav(force) {
    const open = force ?? !shell.classList.contains('nav-open');
    shell.classList.toggle('nav-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && shell.classList.contains('nav-open')) toggleNav(false);
  });

  clear(root).append(shell);

  const router = createRouter({
    outlet: main,
    appTitle: appConfig.title,
    getUser: () => session.user,
    routes: pages.map((page) => ({ path: page.path, name: page.name, module: page.module, roles: page.roles })),
    onRendered: () => toggleNav(false),
  });

  const markCurrent = () => {
    const current = router.current();
    for (const [path, link] of links) {
      if (path === current || (path !== '/' && current.startsWith(`${path}/`))) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  };
  window.addEventListener('hashchange', markCurrent);
  router.start().then(markCurrent);
}

async function start() {
  if (authEnabled) {
    await loadSession();
    if (!session.user) {
      const { renderLogin } = await import('./login.js');
      document.title = `Masuk - ${appConfig.title}`;
      renderLogin(root, { title: appConfig.title, onSuccess: start });
      return;
    }
  }
  buildShell(session.user);
}

window.addEventListener('auth:expired', () => {
  if (authEnabled && session.user) {
    session.user = null;
    start();
  }
});

start();
