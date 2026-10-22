import { api } from '../lib/api.js';
import { h } from '../lib/dom.js';
import { card, form, pageHeader, toast } from '../lib/ui.js';

export default {
  title: 'Akun saya',

  render(_data, ctx) {
    const passwordForm = form({
      submitLabel: 'Ganti kata sandi',
      fields: [
        { name: 'currentPassword', label: 'Kata sandi saat ini', type: 'password', required: true, autocomplete: 'current-password' },
        { name: 'newPassword', label: 'Kata sandi baru', type: 'password', required: true, autocomplete: 'new-password', hint: 'Minimal 10 karakter.' },
      ],
      onSubmit: async (values) => {
        await api.post('/api/auth/change-password', values);
        toast.success('Kata sandi berhasil diganti');
        ctx.reload();
      },
    });

    return h(
      'div',
      { class: 'page' },
      pageHeader({ title: 'Akun saya', subtitle: `${ctx.user.name} (${ctx.user.email})` }),
      h('div', { class: 'account-panel' }, card({ title: 'Keamanan', children: [passwordForm.el] }))
    );
  },
};
