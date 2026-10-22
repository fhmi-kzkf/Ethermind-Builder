import { clear, h } from './lib/dom.js';
import { login } from './lib/session.js';
import { form } from './lib/ui.js';

export function renderLogin(root, { title, onSuccess }) {
  const loginForm = form({
    submitLabel: 'Masuk',
    fields: [
      { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'username', inputmode: 'email' },
      { name: 'password', label: 'Kata sandi', type: 'password', required: true, autocomplete: 'current-password' },
    ],
    onSubmit: async ({ email, password }) => {
      await login(email, password);
      onSuccess();
    },
  });

  clear(root).append(
    h(
      'main',
      { class: 'login' },
      h(
        'section',
        { class: 'login-card' },
        h('span', { class: 'brand-mark', 'aria-hidden': 'true' }, title.charAt(0).toUpperCase()),
        h('h1', { class: 'login-title' }, title),
        h('p', { class: 'login-subtitle' }, 'Masuk untuk melanjutkan.'),
        loginForm.el
      )
    )
  );
  loginForm.focusFirst();
}
