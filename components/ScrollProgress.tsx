'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const fillRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      // rect height is 56 (cup inner), scale from bottom
      fill.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: 28,
        bottom: 40,
        zIndex: 9000,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Coffee cup SVG */}
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cup outline */}
        <path
          d="M4 8 L6 34 Q6 36 8 36 L24 36 Q26 36 26 34 L28 8 Z"
          stroke="rgba(200,168,75,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Handle */}
        <path
          d="M26 14 Q34 14 34 20 Q34 26 26 26"
          stroke="rgba(200,168,75,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Coffee fill (clipped, grows from bottom) */}
        <clipPath id="cupClip">
          <path d="M5.5 9 L7.2 33 Q7.2 34.5 8.5 34.5 L23.5 34.5 Q24.8 34.5 24.8 33 L26.5 9 Z" />
        </clipPath>
        <g clipPath="url(#cupClip)">
          <rect
            ref={fillRef}
            x="4"
            y="8"
            width="24"
            height="28"
            fill="rgba(200,168,75,0.7)"
            style={{ transformOrigin: 'bottom', transform: 'scaleY(0)', transition: 'transform .1s linear' }}
          />
        </g>
        {/* Saucer */}
        <path
          d="M2 37 Q16 40 30 37"
          stroke="rgba(200,168,75,0.5)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Steam lines */}
        <path d="M12 5 Q13 2 12 0" stroke="rgba(200,168,75,0.35)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M16 5 Q17 2 16 0" stroke="rgba(200,168,75,0.35)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M20 5 Q21 2 20 0" stroke="rgba(200,168,75,0.35)" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>

      {/* Scroll label */}
      <div
        style={{
          fontSize: 8,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(200,168,75,0.5)',
          writingMode: 'vertical-rl',
          marginTop: 6,
        }}
      >
        scroll
      </div>
    </div>
  );
}
