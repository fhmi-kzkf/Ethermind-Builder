import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Groups that enter as they are reached. One entry per kind of content, each with its own distance and rhythm. */
const SCROLL_GROUPS: Array<{ selector: string; stagger: number; y: number }> = [
  { selector: '.section-head', stagger: 0.1, y: 22 },
  { selector: '.plan', stagger: 0.14, y: 34 },
  { selector: '.model-row', stagger: 0.06, y: 12 },
  { selector: '.notes > *', stagger: 0.1, y: 20 },
  { selector: '.facts > *', stagger: 0.08, y: 18 },
  { selector: '.check', stagger: 0.07, y: 16 },
  { selector: '.caveats', stagger: 0.1, y: 24 },
  { selector: '.template-group', stagger: 0.1, y: 22 },
  { selector: '.template-card', stagger: 0.06, y: 20 },
  { selector: '.prose > *', stagger: 0.04, y: 14 },
  { selector: '.draft-note', stagger: 0.1, y: 12 },
];

const PAGES = new Set(['templates', 'pricing', 'security', 'terms', 'privacy']);

/**
 * Motion for the marketing pages, read from the classes the pages already use, so a page needs no animation code.
 *  - the page head lands at once, top to bottom: title, then the line under it;
 *  - everything below enters as it is reached, once;
 *  - dotted price lists draw their leaders after the row appears (same gesture as the home page).
 * With reduced motion requested nothing is hidden and nothing moves.
 */
export function usePageMotion(view: string) {
  useLayoutEffect(() => {
    if (!PAGES.has(view)) return;
    const scope = document.getElementById('isi');
    if (!scope) return;
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const head = gsap.utils.toArray<HTMLElement>('.page-head > *', scope);
        if (head.length) gsap.from(head, { opacity: 0, y: 26, duration: 0.8, stagger: 0.12, ease: 'power3.out' });

        const filters = gsap.utils.toArray<HTMLElement>('.filters, .filters .chip', scope);
        if (filters.length) gsap.from(filters, { opacity: 0, y: 10, duration: 0.5, stagger: 0.04, delay: 0.35, ease: 'power2.out' });

        for (const group of SCROLL_GROUPS) {
          const items = gsap.utils.toArray<HTMLElement>(group.selector, scope);
          if (items.length === 0) continue;
          gsap.set(items, { opacity: 0, y: group.y });
          const show = (batch: Element[]) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: group.stagger, ease: 'power3.out', overwrite: true });
          // onLeave covers an element that was already scrolled past when the page opened: it must not stay hidden.
          ScrollTrigger.batch(items, { start: 'top 92%', once: true, onEnter: show, onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0 }) });
        }

        const rows = gsap.utils.toArray<HTMLElement>('.leader', scope);
        if (rows.length) {
          gsap.set(rows, { opacity: 0, x: -10, '--dots': 0 });
          const draw = (batch: Element[]) =>
            gsap
              .timeline()
              .to(batch, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' })
              .to(batch, { '--dots': 1, duration: 0.6, stagger: 0.08, ease: 'power2.inOut' }, 0.12);
          ScrollTrigger.batch(rows, { start: 'top 94%', once: true, onEnter: draw, onLeave: (batch) => gsap.set(batch, { opacity: 1, x: 0, '--dots': 1 }) });
        }
      }, scope);
      return () => ctx.revert();
    });

    return () => media.revert();
  }, [view]);
}
