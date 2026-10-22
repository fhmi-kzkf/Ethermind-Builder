import { clear, h } from './dom.js';
import { errorMessage, stateEmpty, stateError, stateLoading, toast, withPending } from './ui.js';

function compile(path) {
  const names = [];
  const pattern = path.replace(/:([A-Za-z0-9_]+)/g, (_match, name) => {
    names.push(name);
    return '([^/]+)';
  });
  return { regex: new RegExp(`^${pattern}$`), names };
}

function currentLocation() {
  const raw = window.location.hash.slice(1) || '/';
  const [path, search = ''] = raw.split('?');
  return { path: path || '/', query: Object.fromEntries(new URLSearchParams(search)) };
}

function toHash(path, query = {}) {
  const search = new URLSearchParams(Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== ''));
  const text = search.toString();
  return `#${path}${text ? `?${text}` : ''}`;
}

/**
 * Hash router that owns the loading, empty and error states of every page.
 *
 * A page module's default export is:
 *   { title, load?(ctx) -> data, render(data, ctx) -> Node, isEmpty?(data) -> boolean, empty?: { title, message, action } }
 * While load() is pending the router shows a skeleton, if it throws it shows an error with a retry
 * button, and if isEmpty() is true it shows the empty state instead of calling render().
 */
export function createRouter({ outlet, routes, appTitle, getUser, onRendered }) {
  const compiled = routes.map((route) => ({ ...route, ...compile(route.path) }));
  let navigation = 0;

  function match(path) {
    for (const route of compiled) {
      const found = route.regex.exec(path);
      if (found) {
        const params = Object.fromEntries(route.names.map((name, index) => [name, decodeURIComponent(found[index + 1])]));
        return { route, params };
      }
    }
    return null;
  }

  async function render() {
    const token = ++navigation;
    const { path, query } = currentLocation();
    const matched = match(path);

    const show = (node) => {
      if (token !== navigation) return;
      clear(outlet).append(node);
      outlet.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    };

    if (!matched) {
      show(stateEmpty({ title: 'Halaman tidak ditemukan', message: 'Alamat yang Anda buka tidak ada.', action: { label: 'Kembali ke beranda', onClick: () => navigate('/') } }));
      return;
    }

    const { route, params } = matched;
    const user = getUser();
    if (route.roles && (!user || !route.roles.includes(user.role))) {
      show(stateError({ message: 'Anda tidak memiliki akses ke halaman ini.' }));
      return;
    }

    const ctx = {
      params,
      query,
      user,
      navigate,
      toast,
      reload: render,
      setQuery: (patch) => window.location.replace(toHash(path, { ...query, ...patch })),
      /** Runs an action, toasts its error, and returns undefined on failure. */
      run: async (task, { success, button } = {}) => {
        try {
          const result = button ? await withPending(button, task) : await task();
          if (success) toast.success(success);
          return result;
        } catch (error) {
          toast.error(errorMessage(error));
          return undefined;
        }
      },
    };

    show(stateLoading());

    try {
      const module = await import(route.module);
      const page = module.default;
      document.title = `${page.title || route.name} - ${appTitle}`;

      const data = page.load ? await page.load(ctx) : undefined;
      if (token !== navigation) return;

      if (page.isEmpty?.(data, ctx)) {
        const empty = page.empty || {};
        show(stateEmpty({ title: empty.title || 'Belum ada data', message: empty.message, action: empty.action, iconName: empty.icon }));
      } else {
        show(page.render(data, ctx));
      }
      onRendered?.(route);
    } catch (error) {
      if (token !== navigation) return;
      show(stateError({ message: errorMessage(error), onRetry: render }));
    }
  }

  function navigate(path, query) {
    const next = toHash(path, query);
    if (window.location.hash === next) render();
    else window.location.hash = next;
  }

  window.addEventListener('hashchange', render);
  outlet.setAttribute('tabindex', '-1');

  return { start: render, navigate, current: () => currentLocation().path };
}

export { h };
