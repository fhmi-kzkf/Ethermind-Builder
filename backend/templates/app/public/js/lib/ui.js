import { ApiError } from './api.js';
import { clear, h, icon } from './dom.js';

let fieldCounter = 0;

/* ---------- feedback ---------- */

let toastRegion = null;

export const toast = {
  show(message, kind = 'info') {
    if (!toastRegion) {
      toastRegion = h('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
      document.body.append(toastRegion);
    }
    const item = h('div', { class: `toast toast-${kind}` }, message);
    toastRegion.append(item);
    setTimeout(() => item.remove(), kind === 'error' ? 7000 : 4000);
  },
  success: (message) => toast.show(message, 'success'),
  error: (message) => toast.show(message, 'error'),
};

export function errorMessage(error) {
  if (error instanceof ApiError) return error.message;
  console.error(error);
  return 'Terjadi kesalahan. Silakan coba lagi.';
}

/* ---------- buttons ---------- */

/** variant: primary | secondary | ghost | danger. Icon-only buttons must pass `ariaLabel`. */
export function button({ label, icon: iconName, variant = 'secondary', type = 'button', onClick, disabled, ariaLabel, title }) {
  if (!label && !ariaLabel) throw new Error('An icon-only button needs an ariaLabel');
  const element = h(
    'button',
    { type, class: `btn btn-${variant}${label ? '' : ' btn-icon'}`, disabled, 'aria-label': label ? undefined : ariaLabel, title, onclick: onClick },
    iconName ? icon(iconName, { size: 18 }) : null,
    label ? h('span', null, label) : null
  );
  return element;
}

/** Disables a button and shows a spinner while `task` runs. */
export async function withPending(element, task) {
  const spinner = h('span', { class: 'spinner', 'aria-hidden': 'true' });
  element.disabled = true;
  element.setAttribute('aria-busy', 'true');
  element.prepend(spinner);
  try {
    return await task();
  } finally {
    spinner.remove();
    element.removeAttribute('aria-busy');
    element.disabled = false;
  }
}

export function badge(text, tone = 'neutral') {
  return h('span', { class: `badge badge-${tone}` }, text);
}

/* ---------- states ---------- */

export function stateLoading(label = 'Memuat data') {
  return h(
    'div',
    { class: 'state state-loading', role: 'status' },
    h('span', { class: 'sr-only' }, `${label}...`),
    h('div', { class: 'skeleton skeleton-title', 'aria-hidden': 'true' }),
    h('div', { class: 'skeleton', 'aria-hidden': 'true' }),
    h('div', { class: 'skeleton', 'aria-hidden': 'true' }),
    h('div', { class: 'skeleton skeleton-short', 'aria-hidden': 'true' })
  );
}

export function stateEmpty({ title, message, action, iconName = 'box' }) {
  return h(
    'div',
    { class: 'state state-empty' },
    h('div', { class: 'state-icon' }, icon(iconName, { size: 28 })),
    h('h2', { class: 'state-title' }, title),
    message ? h('p', { class: 'state-message' }, message) : null,
    action ? button({ label: action.label, icon: action.icon, variant: 'primary', onClick: action.onClick }) : null
  );
}

export function stateError({ message, onRetry }) {
  return h(
    'div',
    { class: 'state state-error', role: 'alert' },
    h('div', { class: 'state-icon' }, icon('alert', { size: 28 })),
    h('h2', { class: 'state-title' }, 'Data belum bisa dimuat'),
    h('p', { class: 'state-message' }, message),
    onRetry ? button({ label: 'Coba lagi', variant: 'secondary', onClick: onRetry }) : null
  );
}

/* ---------- layout pieces ---------- */

export function pageHeader({ title, subtitle, actions = [] }) {
  return h(
    'header',
    { class: 'page-header' },
    h('div', null, h('h1', { class: 'page-title' }, title), subtitle ? h('p', { class: 'page-subtitle' }, subtitle) : null),
    actions.length > 0 ? h('div', { class: 'page-actions' }, actions) : null
  );
}

export function card({ title, children = [] }) {
  return h('section', { class: 'card' }, title ? h('h2', { class: 'card-title' }, title) : null, children);
}

export function statCard({ label, value, hint, tone = 'neutral' }) {
  return h(
    'div',
    { class: `stat stat-${tone}` },
    h('p', { class: 'stat-label' }, label),
    h('p', { class: 'stat-value' }, value),
    hint ? h('p', { class: 'stat-hint' }, hint) : null
  );
}

export function searchInput({ value = '', placeholder = 'Cari...', onSearch }) {
  let timer;
  const input = h('input', {
    type: 'search',
    class: 'input',
    value,
    placeholder,
    'aria-label': placeholder,
    autocomplete: 'off',
    oninput: () => {
      clearTimeout(timer);
      timer = setTimeout(() => onSearch(input.value.trim()), 350);
    },
  });
  return h('div', { class: 'search' }, icon('search', { size: 18 }), input);
}

/* ---------- table ---------- */

/**
 * columns: [{ key, label, render?(row) -> Node|string, align?: 'end' }]
 * Under 720px every row turns into a labelled card, so there is no sideways scrolling.
 */
export function dataTable({ columns, rows, rowKey = 'id', caption, actions }) {
  const head = h(
    'tr',
    null,
    columns.map((column) => h('th', { scope: 'col', class: column.align === 'end' ? 'cell-end' : undefined }, column.label)),
    actions ? h('th', { scope: 'col', class: 'cell-end' }, h('span', { class: 'sr-only' }, 'Aksi')) : null
  );

  const body = rows.map((row) =>
    h(
      'tr',
      { 'data-key': row[rowKey] },
      columns.map((column) => {
        const content = column.render ? column.render(row) : row[column.key];
        return h('td', { 'data-label': column.label, class: column.align === 'end' ? 'cell-end' : undefined }, content === null || content === undefined || content === '' ? '-' : content);
      }),
      actions ? h('td', { class: 'cell-actions cell-end', 'data-label': 'Aksi' }, h('div', { class: 'row-actions' }, actions(row))) : null
    )
  );

  return h(
    'div',
    { class: 'table-wrap' },
    h('table', { class: 'table' }, caption ? h('caption', { class: 'sr-only' }, caption) : null, h('thead', null, head), h('tbody', null, body))
  );
}

export function pagination({ meta, onChange }) {
  if (!meta || meta.totalPages <= 1) {
    return meta ? h('p', { class: 'pagination-summary' }, `${meta.total} data`) : null;
  }
  return h(
    'nav',
    { class: 'pagination', 'aria-label': 'Halaman data' },
    h('p', { class: 'pagination-summary' }, `Halaman ${meta.page} dari ${meta.totalPages} (${meta.total} data)`),
    h(
      'div',
      { class: 'pagination-buttons' },
      button({ ariaLabel: 'Halaman sebelumnya', icon: 'chevronLeft', disabled: meta.page <= 1, onClick: () => onChange(meta.page - 1) }),
      button({ ariaLabel: 'Halaman berikutnya', icon: 'chevronRight', disabled: meta.page >= meta.totalPages, onClick: () => onChange(meta.page + 1) })
    )
  );
}

/* ---------- forms ---------- */

function createInput(spec, id, describedBy) {
  const common = {
    id,
    name: spec.name,
    class: 'input',
    required: spec.required,
    placeholder: spec.placeholder,
    autocomplete: spec.autocomplete,
    'aria-describedby': describedBy,
  };

  if (spec.type === 'textarea') {
    return h('textarea', { ...common, rows: spec.rows || 4, maxlength: spec.maxlength }, spec.value ?? '');
  }

  if (spec.type === 'select') {
    const select = h(
      'select',
      common,
      spec.required ? null : h('option', { value: '' }, spec.placeholder || 'Pilih salah satu'),
      (spec.options || []).map((option) => h('option', { value: option.value }, option.label))
    );
    select.value = spec.value ?? (spec.required ? spec.options?.[0]?.value ?? '' : '');
    return select;
  }

  if (spec.type === 'checkbox') {
    const input = h('input', { ...common, type: 'checkbox', class: 'checkbox' });
    input.checked = Boolean(spec.value);
    return input;
  }

  const input = h('input', {
    ...common,
    type: spec.type || 'text',
    min: spec.min,
    max: spec.max,
    step: spec.step,
    maxlength: spec.maxlength,
    inputmode: spec.inputmode,
  });
  input.value = spec.value ?? '';
  return input;
}

/**
 * spec: { name, label, type, required, value, options, hint, placeholder, min, max, step, maxlength }
 * Returns { el, getValue(), setError(message), clearError(), focus() }.
 */
export function field(spec) {
  const id = `field-${spec.name}-${++fieldCounter}`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const hint = spec.hint ? h('p', { class: 'field-hint', id: hintId }, spec.hint) : null;
  const error = h('p', { class: 'field-error', id: errorId, hidden: true });
  const describedBy = [spec.hint ? hintId : null, errorId].filter(Boolean).join(' ');
  const input = createInput(spec, id, describedBy);

  const label = h('label', { for: id, class: 'label' }, spec.label, spec.required ? h('span', { class: 'required', 'aria-hidden': 'true' }, ' *') : null);
  const isCheckbox = spec.type === 'checkbox';

  const el = h(
    'div',
    { class: `field${isCheckbox ? ' field-check' : ''}` },
    isCheckbox ? [input, label] : [label, input],
    hint,
    error
  );

  const getValue = () => {
    if (isCheckbox) return input.checked;
    const raw = input.value.trim();
    if (raw === '') return null;
    if (spec.type === 'number') return Number(raw);
    if (spec.type === 'datetime-local') return new Date(raw).toISOString();
    return raw;
  };

  return {
    el,
    name: spec.name,
    label: spec.label,
    required: Boolean(spec.required),
    getValue,
    focus: () => input.focus(),
    setError(message) {
      error.textContent = message;
      error.hidden = false;
      input.setAttribute('aria-invalid', 'true');
    },
    clearError() {
      error.textContent = '';
      error.hidden = true;
      input.removeAttribute('aria-invalid');
    },
  };
}

/**
 * Validated form with pending state and server-error mapping.
 * onSubmit(values) may throw an ApiError: field errors from the server appear under their fields.
 */
export function form({ fields, submitLabel = 'Simpan', onSubmit, onCancel, cancelLabel = 'Batal' }) {
  const built = fields.map((spec) => field(spec));
  const banner = h('div', { class: 'form-error', role: 'alert', hidden: true });
  const submit = button({ label: submitLabel, variant: 'primary', type: 'submit' });

  const element = h(
    'form',
    {
      class: 'form',
      novalidate: true,
      onsubmit: async (event) => {
        event.preventDefault();
        banner.hidden = true;
        built.forEach((item) => item.clearError());

        const values = {};
        let firstInvalid = null;
        for (const item of built) {
          const value = item.getValue();
          if (item.required && (value === null || value === '')) {
            item.setError(`${item.label} wajib diisi`);
            firstInvalid = firstInvalid || item;
          }
          values[item.name] = value;
        }
        if (firstInvalid) {
          firstInvalid.focus();
          return;
        }

        try {
          await withPending(submit, () => onSubmit(values));
        } catch (error) {
          const unmatched = [];
          for (const detail of error.details || []) {
            const target = built.find((item) => item.name === detail.field);
            if (target) target.setError(detail.message);
            else unmatched.push(detail.message);
          }
          const matchedAny = (error.details || []).length > unmatched.length;
          if (!matchedAny) {
            banner.textContent = [errorMessage(error), ...unmatched].join(' ');
            banner.hidden = false;
          } else {
            built.find((item) => !item.el.querySelector('.field-error')?.hidden)?.focus();
          }
        }
      },
    },
    built.map((item) => item.el),
    banner,
    h('div', { class: 'form-actions' }, onCancel ? button({ label: cancelLabel, variant: 'ghost', onClick: onCancel }) : null, submit)
  );

  return { el: element, focusFirst: () => built[0]?.focus() };
}

/* ---------- dialogs ---------- */

/** Native <dialog>: focus is trapped, Escape closes it, and focus returns to the opener. */
export function dialog({ title, body, onClose }) {
  const titleId = `dialog-title-${++fieldCounter}`;
  const element = h(
    'dialog',
    { class: 'dialog', 'aria-labelledby': titleId },
    h(
      'div',
      { class: 'dialog-header' },
      h('h2', { id: titleId, class: 'dialog-title' }, title),
      button({ ariaLabel: 'Tutup', icon: 'x', variant: 'ghost', onClick: () => element.close() })
    ),
    h('div', { class: 'dialog-body' }, body)
  );

  element.addEventListener('click', (event) => {
    if (event.target === element) element.close();
  });
  element.addEventListener('close', () => {
    element.remove();
    onClose?.();
  });

  document.body.append(element);
  element.showModal();
  return { el: element, close: () => element.close() };
}

export function confirmDialog({ title, message, confirmLabel = 'Ya, lanjutkan', cancelLabel = 'Batal', danger = false }) {
  return new Promise((resolve) => {
    let answer = false;
    const confirm = button({
      label: confirmLabel,
      variant: danger ? 'danger' : 'primary',
      onClick: () => {
        answer = true;
        shown.close();
      },
    });
    const shown = dialog({
      title,
      body: [h('p', { class: 'dialog-message' }, message), h('div', { class: 'form-actions' }, button({ label: cancelLabel, variant: 'ghost', onClick: () => shown.close() }), confirm)],
      onClose: () => resolve(answer),
    });
  });
}

export { clear };
