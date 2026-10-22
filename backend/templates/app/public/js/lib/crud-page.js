import { api } from './api.js';
import { h } from './dom.js';
import { date, dateTime, number, pick, rupiah, toDateTimeInput, yesNo } from './format.js';
import { badge, button, confirmDialog, dataTable, dialog, form, pageHeader, pagination, searchInput, toast } from './ui.js';

const PAGE_SIZE = 20;

function cell(column, row) {
  const value = pick(row, column.key);
  switch (column.type) {
    case 'money':
      return rupiah(value);
    case 'number':
      return number(value);
    case 'date':
      return date(value);
    case 'datetime':
      return dateTime(value);
    case 'boolean':
      return badge(yesNo(value), value ? 'success' : 'neutral');
    case 'badge': {
      const known = column.values?.[value];
      return value === null || value === undefined ? '-' : badge(known?.label || String(value), known?.tone || 'neutral');
    }
    default:
      return value;
  }
}

function initialValue(spec, row) {
  const value = row ? row[spec.name] : undefined;
  if (value === undefined || value === null) return spec.defaultValue ?? (spec.type === 'checkbox' ? false : '');
  return spec.type === 'datetime-local' ? toDateTimeInput(value) : value;
}

/**
 * Builds a complete list / create / edit / delete page for one API resource.
 *
 * config: {
 *   title, subtitle, endpoint ('/api/products'), singular ('produk'),
 *   searchPlaceholder?, writeRoles?: ['admin', ...] (hides write controls for other roles; the server still enforces access),
 *   columns: [{ key, label, type?: text|money|number|date|datetime|boolean|badge, align?, values? }],
 *   fields:  [{ name, label, type, required, options?, relation?: { endpoint, labelKey }, hint?, min?, step?, maxlength?, defaultValue? }],
 * }
 */
export function crudPage(config) {
  return {
    title: config.title,

    async load(ctx) {
      const page = Math.max(1, Number(ctx.query.page) || 1);
      const q = ctx.query.q || '';

      const relationFields = config.fields.filter((spec) => spec.relation);
      const [list, ...related] = await Promise.all([
        api.get(config.endpoint, { page, limit: PAGE_SIZE, q }),
        ...relationFields.map((spec) => api.get(spec.relation.endpoint, { limit: 100 })),
      ]);

      const options = {};
      relationFields.forEach((spec, index) => {
        options[spec.name] = related[index].data.map((item) => ({ value: item.id, label: String(item[spec.relation.labelKey]) }));
      });

      if (list.data.length === 0 && page > 1) {
        ctx.setQuery({ page: 1 });
      }
      return { rows: list.data, meta: list.meta, options, q };
    },

    isEmpty: (data) => data.rows.length === 0 && !data.q,

    empty: {
      title: `Belum ada ${config.singular}`,
      message: config.emptyMessage || `Tambahkan ${config.singular} pertama untuk mulai mengisi halaman ini.`,
    },

    render(data, ctx) {
      const canWrite = !config.writeRoles || config.writeRoles.includes('*') || Boolean(ctx.user && config.writeRoles.includes(ctx.user.role));
      const specsWithOptions = (row) =>
        config.fields.map((spec) => ({
          ...spec,
          options: spec.relation ? data.options[spec.name] : spec.options,
          type: spec.relation ? 'select' : spec.type,
          value: initialValue(spec, row),
        }));

      const open = (row) => {
        const editing = Boolean(row);
        const shown = dialog({
          title: editing ? `Ubah ${config.singular}` : `Tambah ${config.singular}`,
          body: form({
            fields: specsWithOptions(row),
            submitLabel: editing ? 'Simpan perubahan' : `Tambah ${config.singular}`,
            onCancel: () => shown.close(),
            onSubmit: async (values) => {
              const body = {};
              for (const spec of config.fields) {
                const value = values[spec.name];
                if (value === null && !editing) continue;
                if (value === null && spec.required) continue;
                body[spec.name] = value;
              }
              if (editing) await api.patch(`${config.endpoint}/${row.id}`, body);
              else await api.post(config.endpoint, body);
              shown.close();
              toast.success(editing ? 'Perubahan tersimpan' : `${config.singular} berhasil ditambahkan`);
              ctx.reload();
            },
          }).el,
        });
      };

      const remove = async (row) => {
        const confirmed = await confirmDialog({
          title: `Hapus ${config.singular}?`,
          message: `Data yang dihapus tidak bisa dikembalikan.`,
          confirmLabel: 'Hapus',
          danger: true,
        });
        if (!confirmed) return;
        await ctx.run(() => api.delete(`${config.endpoint}/${row.id}`), { success: `${config.singular} dihapus` });
        ctx.reload();
      };

      const actions = canWrite
        ? (row) => [
            button({ ariaLabel: `Ubah ${config.singular}`, icon: 'edit', variant: 'ghost', onClick: () => open(row) }),
            button({ ariaLabel: `Hapus ${config.singular}`, icon: 'trash', variant: 'ghost', onClick: () => remove(row) }),
          ]
        : undefined;

      return h(
        'div',
        { class: 'page' },
        pageHeader({
          title: config.title,
          subtitle: config.subtitle,
          actions: canWrite ? [button({ label: `Tambah ${config.singular}`, icon: 'plus', variant: 'primary', onClick: () => open(null) })] : [],
        }),
        h(
          'div',
          { class: 'toolbar' },
          searchInput({ value: data.q, placeholder: config.searchPlaceholder || `Cari ${config.singular}...`, onSearch: (q) => ctx.setQuery({ q, page: 1 }) })
        ),
        data.rows.length === 0
          ? h('p', { class: 'no-results' }, `Tidak ada ${config.singular} yang cocok dengan "${data.q}".`)
          : dataTable({
              caption: config.title,
              columns: config.columns.map((column) => ({ ...column, render: (row) => cell(column, row) })),
              rows: data.rows,
              actions,
            }),
        pagination({ meta: data.meta, onChange: (page) => ctx.setQuery({ page }) })
      );
    },
  };
}
