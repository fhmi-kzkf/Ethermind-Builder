import React, { useEffect, useRef } from 'react';
import type { JobEvent } from '../../types';
import { AGENT_LABEL, formatClock } from './shared';
import { eventKey } from './useBuilder';

/** The build's events as a plain list. It follows new lines until the reader scrolls up, then stays where they are. */
export const BuildLog: React.FC<{ events: JobEvent[] }> = ({ events }) => {
  const box = useRef<HTMLDivElement>(null);
  const following = useRef(true);

  useEffect(() => {
    const el = box.current;
    if (el && following.current) el.scrollTop = el.scrollHeight;
  }, [events.length]);

  return (
    <section className="stack-sm" aria-labelledby="judul-catatan">
      <div className="row-between">
        <h3 id="judul-catatan">Catatan build</h3>
        <p className="small muted num">{events.length} baris</p>
      </div>
      {events.length === 0 ? (
        <p className="muted small">Belum ada catatan. Baris muncul di sini selama aplikasi dibangun.</p>
      ) : (
        <div
          ref={box}
          className="buildlog"
          role="log"
          aria-label="Catatan build"
          tabIndex={0}
          onScroll={(event) => {
            const el = event.currentTarget;
            following.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
          }}
        >
          <ol>
            {events.map((event) => (
              <li key={eventKey(event)} className="buildlog__line">
                <span className="num muted">{formatClock(event.createdAt, true)}</span>
                <strong>{AGENT_LABEL[event.agent] ?? event.agent}</strong>
                <span>{event.message}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};
