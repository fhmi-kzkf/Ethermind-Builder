import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Motion for the home page (dial MOTION 2). Each movement has one job:
 *  - hero: the headline lands first, then the box to type in, so the eye starts where the action is;
 *  - horizon: the gradient fades in once, then drifts slower than the page on scroll (depth, driven by the reader);
 *  - sections: content enters as it is reached, once, so a long page is read in the order it is built;
 *  - price list: the dotted leaders are drawn after their label, like a menu being written.
 * Nothing loops. With reduced motion requested nothing moves and everything is simply shown.
 */
export function useHomeMotion(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) return;
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const hero = scope.querySelector<HTMLElement>('.hero');

        // ---- hero entrance ----
        if (hero) {
          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
          intro
            .fromTo(hero, { '--horizon-o': 0, '--horizon-s': 0.82 }, { '--horizon-o': 0.6, '--horizon-s': 1, duration: 1.6, ease: 'power2.out' }, 0)
            .from('.hero .word__in', { yPercent: 115, duration: 0.9, stagger: 0.07, ease: 'power4.out' }, 0.05)
            .from('.hero__lead', { opacity: 0, y: 14, duration: 0.7 }, 0.55)
            .from('.hero .composer', { opacity: 0, y: 28, duration: 0.8 }, 0.7)
            .from('.hero .chip', { opacity: 0, y: 10, duration: 0.5, stagger: 0.06 }, 1.0);

          // ---- horizon parallax: it trails the page a little while the hero scrolls away ----
          gsap.to(hero, {
            '--horizon-y': 90,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
          });
        }

        // ---- the product recording rises into place once ----
        gsap.from('.shot video', {
          opacity: 0,
          y: 48,
          scale: 0.97,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.shot', start: 'top 88%', once: true },
        });

        // ---- steps and example rows: enter in reading order, once ----
        for (const [selector, stagger] of [
          ['.step', 0.12],
          ['.example', 0.07],
        ] as const) {
          const items = gsap.utils.toArray<HTMLElement>(selector, scope);
          if (items.length === 0) continue;
          gsap.set(items, { opacity: 0, y: 24 });
          ScrollTrigger.batch(items, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger, ease: 'power3.out', overwrite: true }),
            onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0 }),
          });
        }

        // ---- the price list: the label appears, then its dotted leader is drawn ----
        const rows = gsap.utils.toArray<HTMLElement>('.panel-dark .leader', scope);
        if (rows.length > 0) {
          gsap.set(rows, { opacity: 0, x: -12, '--dots': 0 });
          ScrollTrigger.batch(rows, {
            start: 'top 92%',
            once: true,
            onEnter: (batch) => {
              const tl = gsap.timeline();
              tl.to(batch, { opacity: 1, x: 0, duration: 0.45, stagger: 0.09, ease: 'power2.out' }).to(batch, { '--dots': 1, duration: 0.7, stagger: 0.09, ease: 'power2.inOut' }, 0.15);
            },
            onLeave: (batch) => gsap.set(batch, { opacity: 1, x: 0, '--dots': 1 }),
          });
        }
      }, scope);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, [root]);
}
