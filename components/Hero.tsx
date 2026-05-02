'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    badge:    'Synesthesia Nusantara · Edisi Pertama',
    title1:   'SYNESTRA',
    title2:   'FEST',
    sub:      'The First Pour',
    tagline:  'Di mana aroma kopi bertemu warna batik,\ndan indera menjadi satu pengalaman.',
    date:     '22 – 25 Agustus 2026',
    venue:    'Benteng Vredeburg, Yogyakarta',
    cta1:     'Beli Tiket',
    cta2:     'Selengkapnya',
  },
  en: {
    badge:    'Synesthesia Nusantara · First Edition',
    title1:   'SYNESTRA',
    title2:   'FEST',
    sub:      'The First Pour',
    tagline:  'Where coffee aromas meet batik colours,\nand the senses become one experience.',
    date:     'August 22 – 25, 2026',
    venue:    'Benteng Vredeburg, Yogyakarta',
    cta1:     'Buy Tickets',
    cta2:     'Learn More',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef   = useRef<HTMLDivElement>(null);
  const tagRef   = useRef<HTMLParagraphElement>(null);
  const metaRef  = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      titleRef.current?.classList.add('in');
      if (subRef.current)  { subRef.current.style.opacity  = '1'; subRef.current.style.transform  = 'translateY(0)'; }
      if (tagRef.current)  { tagRef.current.style.opacity  = '1'; tagRef.current.style.transform  = 'translateY(0)'; }
      if (metaRef.current) { metaRef.current.style.opacity = '1'; metaRef.current.style.transform = 'translateY(0)'; }
      if (ctaRef.current)  { ctaRef.current.style.opacity  = '1'; ctaRef.current.style.transform  = 'translateY(0)'; }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: 68,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        background: `
          radial-gradient(ellipse at 20% 10%, rgba(200,168,75,0.08), transparent 50%),
          radial-gradient(ellipse at 80% 90%, rgba(192,57,43,0.06), transparent 50%),
          var(--cream)
        `,
      }}
    >
      {/* Noise */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.5, mixBlendMode: 'multiply',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.15 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
      }} />

      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 60px 80px 80px', position: 'relative', zIndex: 5 }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid rgba(30,42,74,0.3)',
          padding: '7px 16px', borderRadius: 100,
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--navy)', marginBottom: 32, width: 'fit-content',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }} />
          {t.badge}
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="hero-title"
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 900,
            fontSize: 'clamp(64px, 8.6vw, 120px)',
            lineHeight: 0.88,
            color: 'var(--navy)',
            letterSpacing: '-0.025em',
          }}
        >
          <span className="word"><span>{t.title1}</span></span>
          <br />
          <span className="word"><span><em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>{t.title2}</em></span></span>
        </h1>

        {/* Sub */}
        <div
          ref={subRef}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 3.4vw, 42px)',
            color: 'var(--red)',
            marginTop: 18,
            lineHeight: 1,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity .9s .55s ease, transform .9s .55s cubic-bezier(.22,1,.36,1)',
          }}
        >
          {t.sub}
        </div>

        {/* Tagline */}
        <p
          ref={tagRef}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 19, lineHeight: 1.65,
            color: 'rgba(30,42,74,0.65)',
            fontStyle: 'italic',
            marginTop: 18, maxWidth: 420,
            opacity: 0, transform: 'translateY(16px)',
            transition: 'opacity .8s .8s ease, transform .8s .8s cubic-bezier(.22,1,.36,1)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.tagline}
        </p>

        {/* Meta */}
        <div
          ref={metaRef}
          style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 32, opacity: 0, transform: 'translateY(16px)', transition: 'opacity .8s .95s ease, transform .8s .95s cubic-bezier(.22,1,.36,1)' }}
        >
          {[
            { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2.5" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1"/><line x1="1" y1="5" x2="13" y2="5" stroke="currentColor" strokeWidth="1"/><line x1="4" y1="1" x2="4" y2="3.5" stroke="currentColor" strokeWidth="1"/><line x1="10" y1="1" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1"/></svg>, text: t.date },
            { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12.5C7 12.5 12 8.5 12 5.5C12 2.74 9.76 0.5 7 0.5C4.24 0.5 2 2.74 2 5.5C2 8.5 7 12.5 7 12.5Z" stroke="currentColor" strokeWidth="1"/><circle cx="7" cy="5.5" r="1.6" stroke="currentColor" strokeWidth="1"/></svg>, text: t.venue },
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--navy)', letterSpacing: '0.02em' }}>
              <span style={{ width: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', opacity: 0.7 }}>{m.icon}</span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: 14, marginTop: 36, opacity: 0, transform: 'translateY(16px)', transition: 'opacity .8s 1.1s ease, transform .8s 1.1s cubic-bezier(.22,1,.36,1)' }}
        >
          <a
            href="#tickets"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', padding: '14px 30px', borderRadius: 100, textDecoration: 'none', background: 'var(--red)', color: '#fff', border: '1px solid var(--red)', transition: 'background .3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--navy-deep)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--navy-deep)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--red)'; }}
          >
            <span>{t.cta1}</span> <span style={{ transition: 'transform .35s cubic-bezier(.22,1,.36,1)' }}>→</span>
          </a>
          <a
            href="#about"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', padding: '14px 30px', borderRadius: 100, textDecoration: 'none', border: '1.5px solid var(--navy)', color: 'var(--navy)', background: 'transparent', transition: 'all .3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--navy)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--navy)'; }}
          >
            <span>{t.cta2}</span>
          </a>
        </div>
      </div>

      {/* Right — sticky composition */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse at 60% 30%, rgba(200,168,75,0.12), transparent 60%),
          linear-gradient(135deg, rgba(245,237,224,1) 0%, rgba(237,226,208,1) 100%)
        `,
        borderLeft: '1px solid var(--border)',
      }}>
        <div style={{ position: 'sticky', top: 68, height: 'calc(100vh - 68px)', width: '100%', overflow: 'hidden' }}>
          <Image
            src="/images/hero_composition.png"
            alt="Synestra Fest — komposisi Nusantara"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              animation: 'heroIn 1.4s .15s cubic-bezier(.22,1,.36,1) forwards, heroFloat 12s 1.6s ease-in-out infinite',
              opacity: 0,
            }}
          />
        </div>
      </div>

      {/* Mobile hero: show composition below */}
      <style>{`
        @media (max-width: 1024px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:nth-child(3) { display: none !important; }
          #hero > div:nth-child(2) { padding: 80px 32px 60px !important; }
        }
        .hero-title.in .word > span { transform: translateY(0) !important; }
        .hero-sub.in, .hero-meta.in, .hero-cta-row.in, .hero-tagline.in {
          opacity: 1 !important; transform: translateY(0) !important;
        }
        @keyframes heroIn { to { opacity: 1; } }
        @keyframes heroFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
      `}</style>
    </section>
  );
}
