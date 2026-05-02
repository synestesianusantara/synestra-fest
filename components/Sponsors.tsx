'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    eyebrow: 'Didukung Oleh',
    heading: 'Sponsor Utama',
    badge: 'Sponsor Utama · Synestra Fest 2026',
  },
  en: {
    eyebrow: 'Supported By',
    heading: 'Main Sponsor',
    badge: 'Main Sponsor · Synestra Fest 2026',
  },
};

export default function Sponsors() {
  const { lang } = useLang();
  const t = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '-40px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      style={{ background: 'var(--cream)', padding: '100px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Eyebrow with lines */}
      <div
        className="reveal"
        style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--warm-tan)', marginBottom: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14 }}
      >
        <span style={{ width: 36, height: 1, background: 'var(--warm-tan)', display: 'inline-block' }} />
        {t.eyebrow}
        <span style={{ width: 36, height: 1, background: 'var(--warm-tan)', display: 'inline-block' }} />
      </div>

      {/* Heading */}
      <h2
        className="reveal"
        style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(32px, 3.6vw, 44px)', fontStyle: 'italic', color: 'var(--navy)', marginBottom: 48 }}
      >
        {t.heading}
      </h2>

      {/* Sponsor box */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '32px 56px',
            background: 'rgba(255,255,255,0.5)',
            transition: 'all .35s cubic-bezier(.22,1,.36,1)',
            cursor: 'default',
            minHeight: 120,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.borderColor = 'var(--border-strong)';
            el.style.background = 'rgba(255,255,255,0.85)';
            el.style.transform = 'translateY(-3px)';
            el.style.boxShadow = '0 16px 40px rgba(30,42,74,0.06)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.borderColor = 'var(--border)';
            el.style.background = 'rgba(255,255,255,0.5)';
            el.style.transform = '';
            el.style.boxShadow = '';
          }}
        >
          <Image
            src="/images/pertamina_logo.png"
            alt="Pertamina"
            width={160}
            height={56}
            style={{ objectFit: 'contain', height: 56, width: 'auto', opacity: 0.92 }}
          />
        </div>
      </div>

      {/* Badge */}
      <div className="reveal">
        <span style={{
          display: 'inline-block',
          border: '1px solid rgba(30,42,74,0.25)',
          padding: '8px 20px', borderRadius: 100,
          fontSize: 10, letterSpacing: '0.2em',
          color: 'rgba(30,42,74,0.65)',
          textTransform: 'uppercase',
        }}>
          {t.badge}
        </span>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #sponsors { padding: 80px 40px !important; }
        }
      `}</style>
    </section>
  );
}
