import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Shared interface pieces. Styles live in src/styles/components.css; nothing here sets a colour or a size inline,
 * so a change to the tokens changes every screen.
 */

/**
 * The mark: a heavy capital "E" built from three round-ended bars, one above the other, the way a story becomes a design
 * and then an app. The middle bar carries the prism, the same one as the home page horizon, and is the only colour in the mark.
 * tone "tile" is the app icon (ink tile, paper E); "ink" and "paper" are the bare mark for light and dark backgrounds.
 */
export const Logo: React.FC<{ size?: number; tone?: 'tile' | 'ink' | 'paper'; label?: string | null }> = ({ size = 28, tone = 'ink', label = 'Ethermind' }) => {
  const id = useId().replace(/:/g, '');
  const fill = tone === 'ink' ? '#1c1c1c' : '#fcfbf8';
  return (
    // The bare mark is cropped to its own extent, so it sits at the height of the letters beside it instead of floating in an empty square.
    <svg viewBox={tone === 'tile' ? '0 0 64 64' : '13 11 38 42'} width={tone === 'tile' ? size : Math.round((size * 38) / 42)} height={size} role={label ? 'img' : undefined} aria-label={label ?? undefined} aria-hidden={label ? undefined : true} style={{ flex: 'none' }}>
      <defs>
        <linearGradient id={`${id}-bar`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#2483ff" />
          <stop offset="0.5" stopColor="#ff66f4" />
          <stop offset="1" stopColor="#fe7b02" />
        </linearGradient>
      </defs>
      {tone === 'tile' && <rect width="64" height="64" rx="16" fill="#1c1c1c" />}
      <rect x="15" y="13" width="34" height="9" rx="4.5" fill={fill} />
      <rect x="15" y="27.5" width="25" height="9" rx="4.5" fill={`url(#${id}-bar)`} />
      <rect x="15" y="42" width="34" height="9" rx="4.5" fill={fill} />
    </svg>
  );
};

export const Spinner: React.FC<{ label?: string }> = ({ label = 'Memuat' }) => (
  <span role="status" className="row" style={{ gap: 8 }}>
    <svg className="spin" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path d="M14 8a6 6 0 0 0-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <span className="small muted">{label}</span>
  </span>
);

interface NoticeProps {
  tone?: 'neutral' | 'bad' | 'warn' | 'ok';
  title?: string;
  children?: React.ReactNode;
}

/** A message that stays on the page. Replaces window.alert, which cannot be styled, read in context, or dismissed in place. */
export const Notice: React.FC<NoticeProps> = ({ tone = 'neutral', title, children }) => (
  <div className={`notice${tone === 'neutral' ? '' : ` notice--${tone}`}`} role={tone === 'bad' ? 'alert' : 'status'}>
    {title && <strong>{title}</strong>}
    {children && <span>{children}</span>}
  </div>
);

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  wide?: boolean;
  children: React.ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/** Modal dialog: focus moves in, Tab stays inside, Escape closes, focus returns to what opened it. */
export const Dialog: React.FC<DialogProps> = ({ open, onClose, title, description, wide, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = ref.current;
    const first = panel?.querySelector<HTMLElement>('[data-autofocus]') ?? panel?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div className="dialog-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} className={`dialog${wide ? ' dialog--wide' : ''}`} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descId : undefined}>
        <h2 id={titleId}>{title}</h2>
        {description && (
          <p id={descId} className="muted" style={{ marginBottom: 'var(--space-5)' }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

interface EmptyProps {
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

/** An empty state says why it is empty and offers the one thing that fills it. */
export const EmptyState: React.FC<EmptyProps> = ({ title, children, action }) => (
  <div className="empty">
    <h3>{title}</h3>
    {children && <p className="muted">{children}</p>}
    {action}
  </div>
);
