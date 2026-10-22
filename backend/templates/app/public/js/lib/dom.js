const SVG_NS = 'http://www.w3.org/2000/svg';
const SAFE_URL = /^(https?:|mailto:|tel:|#|\/(?!\/))/i;
const URL_ATTRIBUTES = new Set(['href', 'src', 'action', 'formaction']);
const BLOCKED_ATTRIBUTES = new Set(['style', 'srcdoc']);

function applyProps(element, props) {
  for (const [name, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === false) continue;

    if (name === 'class' || name === 'className') {
      element.className = Array.isArray(value) ? value.filter(Boolean).join(' ') : value;
    } else if (name === 'dataset') {
      Object.assign(element.dataset, value);
    } else if (name.startsWith('on')) {
      if (typeof value !== 'function') throw new TypeError(`Handler ${name} must be a function`);
      element.addEventListener(name.slice(2).toLowerCase(), value);
    } else if (BLOCKED_ATTRIBUTES.has(name.toLowerCase())) {
      throw new Error(`Attribute "${name}" is not allowed. Use a CSS class instead.`);
    } else if (URL_ATTRIBUTES.has(name.toLowerCase())) {
      if (SAFE_URL.test(String(value).trim())) element.setAttribute(name, value);
    } else if (value === true) {
      element.setAttribute(name, '');
    } else {
      element.setAttribute(name, String(value));
    }
  }
}

function appendChildren(parent, children) {
  for (const child of children) {
    if (child === null || child === undefined || child === false || child === true) continue;
    if (Array.isArray(child)) {
      appendChildren(parent, child);
    } else if (child instanceof Node) {
      parent.append(child);
    } else {
      parent.append(document.createTextNode(String(child)));
    }
  }
}

/**
 * Builds an element. Strings and numbers become text nodes, so user data can never turn into markup.
 *   h('button', { class: 'btn', onclick: save }, 'Simpan')
 */
export function h(tag, props, ...children) {
  const element = document.createElement(tag);
  if (props && typeof props === 'object' && !(props instanceof Node) && !Array.isArray(props)) {
    applyProps(element, props);
  } else if (props !== undefined && props !== null) {
    children.unshift(props);
  }
  appendChildren(element, children);
  return element;
}

export function clear(element) {
  element.replaceChildren();
  return element;
}

const ICONS = {
  plus: 'M12 5v14M5 12h14',
  edit: 'M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4',
  trash: 'M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.5-4.5',
  x: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12.5l4.5 4.5L19 7',
  alert: 'M12 4l9 16H3L12 4zM12 10v4M12 17.5v.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  logout: 'M9 4H5a1 1 0 00-1 1v14a1 1 0 001 1h4M16 8l4 4-4 4M20 12H9',
  home: 'M4 11l8-7 8 7M6 10v10h12V10',
  box: 'M4 8l8-4 8 4v8l-8 4-8-4V8zM4 8l8 4 8-4M12 12v8',
  users: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 6.5M18 14.5a6.5 6.5 0 013.5 5.5',
  chart: 'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3',
  cart: 'M3 4h2l2.4 11h10l2-8H7M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z',
  file: 'M7 3h7l4 4v14H7V3zM14 3v4h4M10 12h5M10 16h5',
  settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 00-2-1.2L14 3h-4l-.6 2.6a7 7 0 00-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 002 1.2L10 21h4l.6-2.6a7 7 0 002-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z',
  calendar: 'M5 6h14v14H5V6zM5 10h14M9 3v4M15 3v4',
  wallet: 'M4 7a2 2 0 012-2h12v4M4 7v11a2 2 0 002 2h14V9H6a2 2 0 01-2-2zM16 14.5h.5',
  tag: 'M3 12V4h8l10 10-8 8L3 12zM7.5 8.5h.01',
  truck: 'M3 6h11v10H3V6zM14 10h4l3 3v3h-7M7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
  chevronLeft: 'M15 5l-7 7 7 7',
  chevronRight: 'M9 5l7 7-7 7',
};

export const ICON_NAMES = Object.keys(ICONS);

/** Inline SVG icon. Decorative by default; pass `label` when the icon is the only content of a control. */
export function icon(name, { label, size = 20 } = {}) {
  const path = ICONS[name] || ICONS.file;
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.75');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('class', 'icon');
  if (label) {
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', label);
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  const shape = document.createElementNS(SVG_NS, 'path');
  shape.setAttribute('d', path);
  svg.append(shape);
  return svg;
}
