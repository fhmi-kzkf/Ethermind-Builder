import { api } from '../lib/api.js';
import { appConfig } from '../app.config.js';
import { h } from '../lib/dom.js';
import { dateTime } from '../lib/format.js';
import { badge, button, dataTable, dialog, form, pageHeader, pagination, searchInput, toast } from '../lib/ui.js';

const roleOptions = appConfig.auth.roles.map((role) => ({ value: role, label: role }));

export default {
  title: 'Pengguna',

  async load(ctx) {
    const page = Math.max(1, Number(ctx.query.page) || 1);
    const q = ctx.query.q || '';
    const { data, meta } = await api.get('/api/users', { page, limit: 20, q });
    return { rows: data, meta, q };
  },

  render(data, ctx) {
    const open = (user) => {
      const editing = Boolean(user);
      const fields = [
        { name: 'name', label: 'Nama', type: 'text', required: true, value: user?.name, maxlength: 120 },
        ...(editing ? [] : [{ name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'off' }]),
        { name: 'role', label: 'Peran', type: 'select', required: true, options: roleOptions, value: user?.role },
        {
          name: 'password',
          label: editing ? 'Kata sandi baru' : 'Kata sandi awal',
          type: 'password',
          required: !editing,
          autocomplete: 'new-password',
          hint: editing ? 'Kosongkan jika tidak ingin mengganti. Minimal 10 karakter.' : 'Minimal 10 karakter.',
        },
        ...(editing ? [{ name: 'active', label: 'Akun aktif', type: 'checkbox', value: user.active }] : []),
      ];

      const shown = dialog({
        title: editing ? 'Ubah pengguna' : 'Tambah pengguna',
        body: form({
          fields,
          submitLabel: editing ? 'Simpan perubahan' : 'Tambah pengguna',
          onCancel: () => shown.close(),
          onSubmit: async (values) => {
            const body = { ...values };
            if (!body.password) delete body.password;
            if (editing) await api.patch(`/api/users/${user.id}`, body);
            else await api.post('/api/users', body);
            shown.close();
            toast.success(editing ? 'Perubahan tersimpan' : 'Pengguna ditambahkan');
            ctx.reload();
          },
        }).el,
      });
    };

    return h(
      'div',
      { class: 'page' },
      pageHeader({
        title: 'Pengguna',
        subtitle: 'Kelola siapa saja yang bisa masuk dan perannya.',
        actions: [button({ label: 'Tambah pengguna', icon: 'plus', variant: 'primary', onClick: () => open(null) })],
      }),
      h('div', { class: 'toolbar' }, searchInput({ value: data.q, placeholder: 'Cari nama atau email...', onSearch: (q) => ctx.setQuery({ q, page: 1 }) })),
      dataTable({
        caption: 'Daftar pengguna',
        columns: [
          { key: 'name', label: 'Nama' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Peran', render: (row) => badge(row.role, 'accent') },
          { key: 'active', label: 'Status', render: (row) => badge(row.active ? 'Aktif' : 'Nonaktif', row.active ? 'success' : 'neutral') },
          { key: 'createdAt', label: 'Dibuat', render: (row) => dateTime(row.createdAt) },
        ],
        rows: data.rows,
        actions: (row) => [button({ ariaLabel: `Ubah ${row.name}`, icon: 'edit', variant: 'ghost', onClick: () => open(row) })],
      }),
      pagination({ meta: data.meta, onChange: (page) => ctx.setQuery({ page }) })
    );
  },
};
