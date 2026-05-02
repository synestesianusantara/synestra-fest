'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnterLink = () => {
      ring.style.transform = `translate(-50%, -50%) scale(2)`;
      ring.style.opacity = '0.5';
    };
    const onLeaveLink = () => {
      ring.style.transform = `translate(-50%, -50%) scale(1)`;
      ring.style.opacity = '1';
    };

    const loop = () => {
      // Dot follows instantly
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';

      // Ring lags behind
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);

    // Hover expand on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], .origin-chip');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: '50%',
          background: 'var(--red)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'multiply',
          transition: 'opacity .3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid var(--navy)',
          transform: 'translate(-50%, -50%) scale(1)',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'multiply',
          transition: 'transform .4s cubic-bezier(.22,1,.36,1), opacity .3s',
        }}
      />
    </>
  );
}
