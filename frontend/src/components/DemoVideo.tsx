import React, { useEffect, useRef } from 'react';

/**
 * The screen recording plays by itself, silently and on a loop, while it is on screen, and stops when it is scrolled away.
 * Browsers only allow autoplay for muted video, and the recording has no sound anyway. There is no visible control;
 * a click or Space on the video pauses and resumes it, so it can still be stopped.
 */
export const DemoVideo: React.FC<{ describedBy: string }> = ({ describedBy }) => {
  const video = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByUser.current) void el.play().catch(() => undefined);
        else if (!entry.isIntersecting) el.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    pausedByUser.current = !el.paused;
    if (el.paused) void el.play().catch(() => undefined);
    else el.pause();
  };

  return (
    <video
      ref={video}
      className="shot__video"
      muted
      loop
      playsInline
      preload="auto"
      width={1280}
      height={720}
      poster="/img/tur-poster.jpg"
      tabIndex={0}
      aria-label="Rekaman layar: dari cerita tentang warung sampai aplikasi yang berjalan. Tekan Spasi untuk jeda atau lanjut."
      aria-describedby={describedBy}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          toggle();
        }
      }}
    >
      <source src="/video/tur.mp4" type="video/mp4" />
      <source src="/video/tur.webm" type="video/webm" />
    </video>
  );
};
