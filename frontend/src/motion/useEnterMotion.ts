import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * Entrance for things that appear on their own after the page is already there: chat messages, build log lines,
 * quality checks, list rows, tab contents, dialogs, notices. One observer watches the page and animates each new
 * element once, so the screens need no animation code and cannot forget to ask for it.
 *
 * Each kind has one gesture, short enough not to slow work down (0.2 to 0.45 s). Lists enter in a quick stagger,
 * capped so opening a long conversation does not become a show.
 */
interface Entrance {
  selector: string;
  from: gsap.TweenVars;
  duration: number;
  stagger?: number;
}

const ENTRANCES: Entrance[] = [
  { selector: '.dialog-backdrop', from: { opacity: 0 }, duration: 0.2 },
  { selector: '.dialog', from: { opacity: 0, y: 18, scale: 0.97 }, duration: 0.3 },
  { selector: '.drawer', from: { opacity: 0, y: -10 }, duration: 0.25 },
  { selector: '.notice', from: { opacity: 0, y: -8 }, duration: 0.3 },
  { selector: '.msg', from: { opacity: 0, y: 14 }, duration: 0.4, stagger: 0.05 },
  { selector: '.clarify__q', from: { opacity: 0, y: 12 }, duration: 0.4, stagger: 0.08 },
  { selector: '.buildlog__line', from: { opacity: 0, x: -8 }, duration: 0.3, stagger: 0.03 },
  { selector: '.gate', from: { opacity: 0, y: 10 }, duration: 0.4, stagger: 0.06 },
  { selector: '.bld__head', from: { opacity: 0, y: -12 }, duration: 0.4 },
  { selector: '.bld__panel > *', from: { opacity: 0, y: 16 }, duration: 0.4, stagger: 0.07 },
  { selector: '.work-row:not(.work-row--skeleton)', from: { opacity: 0, y: 14 }, duration: 0.4, stagger: 0.04 },
  { selector: '.workspace__head, .toolbar', from: { opacity: 0, y: 12 }, duration: 0.4, stagger: 0.08 },
  { selector: '.admin-section', from: { opacity: 0, y: 16 }, duration: 0.45, stagger: 0.1 },
  { selector: '.fact', from: { opacity: 0, y: 12 }, duration: 0.4, stagger: 0.05 },
  { selector: '.table-wrap tbody tr', from: { opacity: 0, y: 8 }, duration: 0.3, stagger: 0.03 },
];

const MAX_STAGGERED = 14;
const seen = new WeakSet<Element>();

function textOf(node: Node): string {
  return (node.textContent || '').trim().slice(0, 80);
}

export function useEnterMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handle = (records: MutationRecord[]) => {
      // A node removed and re-added with the same text is a re-render (an optimistic message replaced by the saved one), not news.
      const removedText = new Set<string>();
      for (const record of records) record.removedNodes.forEach((n) => n instanceof HTMLElement && removedText.add(textOf(n)));

      for (const entrance of ENTRANCES) {
        const fresh: HTMLElement[] = [];
        for (const record of records) {
          record.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            const matches = node.matches(entrance.selector) ? [node] : [];
            node.querySelectorAll<HTMLElement>(entrance.selector).forEach((el) => matches.push(el));
            for (const el of matches) {
              if (seen.has(el)) continue;
              seen.add(el);
              if (removedText.has(textOf(el)) && textOf(el) !== '') continue;
              fresh.push(el);
            }
          });
        }
        if (fresh.length === 0) continue;
        // Long lists: only the last ones move (the ones the reader is looking at), the rest are simply there.
        const moving = fresh.slice(-MAX_STAGGERED);
        gsap.from(moving, { ...entrance.from, duration: entrance.duration, stagger: entrance.stagger ?? 0, ease: 'power3.out', clearProps: 'transform,opacity,visibility' });
      }
    };

    const observer = new MutationObserver(handle);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}
