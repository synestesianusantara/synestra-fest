'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    eyebrow: 'Lokasi',
    name1: 'Benteng',
    name2em: 'Vredeburg',
    sub: 'Yogyakarta · Jawa Tengah',
    desc: 'Salah satu situs bersejarah paling ikonik di Indonesia. Ruang-ruang benteng abad ke-18 ini menjadi panggung yang sempurna untuk mempertemukan tradisi dan ekspresi kontemporer — di mana setiap dinding telah menjadi saksi sejarah bangsa.',
    stats: [{ num: '1760', label: 'Tahun dibangun' }, { num: '8K m²', label: 'Luas area' }, { num: '4', label: 'Hari festival' }],
    pills: ['Cagar Budaya Nasional', 'Pusat Kota Yogyakarta', 'Walk to KA Tugu'],
  },
  en: {
    eyebrow: 'Venue',
    name1: 'Benteng',
    name2em: 'Vredeburg',
    sub: 'Yogyakarta, Central Java',
    desc: 'One of Indonesia\'s most iconic historic sites. The chambers of this 18th-century fortress become the perfect stage to bring together tradition and contemporary expression — where every wall has witnessed the nation\'s history.',
    stats: [{ num: '1760', label: 'Year built' }, { num: '8K m²', label: 'Total area' }, { num: '4', label: 'Festival days' }],
    pills: ['National Cultural Heritage', 'City Centre Yogyakarta', 'Walk to KA Tugu'],
  },
};

export default function Venue() {
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
      id="venue"
      ref={sectionRef}
      style={{ background: 'var(--cream-light)', padding: '140px 80px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80, alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Image */}
      <div
        className="reveal"
        style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '4/5', position: 'relative', background: 'var(--cream)' }}
      >
        <Image
          src="/images/benteng_vredeburg.webp"
          alt="Benteng Vredeburg, Yogyakarta"
          fill
          style={{ objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.22,1,.36,1)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = ''; }}
        />
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(20,29,53,0.6))', pointerEvents: 'none' }} />
        {/* Meta overlay */}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, color: 'var(--cream)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(245,237,224,0.7)' }}>07°48&#39;01&#34;S · 110°22&#39;01&#34;E</div>
          <a
            href="https://maps.google.com/?q=Benteng+Vredeburg+Yogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(245,237,224,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'var(--cream)', textDecoration: 'none', transition: 'all .3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--red)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,237,224,0.4)'; }}
          >
            →
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 520 }}>
        <div className="section-eyebrow reveal">{t.eyebrow}</div>

        <h2 className="reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(48px, 5vw, 72px)', fontWeight: 700, lineHeight: 1.0, color: 'var(--navy)', marginBottom: 12, letterSpacing: '-0.02em' }}>
          {t.name1}<br /><em style={{ color: 'var(--red)', fontStyle: 'italic' }}>{t.name2em}</em>
        </h2>

        <p className="reveal" style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 22, color: 'var(--warm-tan)', marginBottom: 28 }}>{t.sub}</p>

        <p className="reveal" style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(30,42,74,0.7)', marginBottom: 28 }}>{t.desc}</p>

        {/* Stats */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 32, padding: '24px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {t.stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 36, color: 'var(--navy)', lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(30,42,74,0.55)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {t.pills.map(p => (
            <span key={p} style={{ border: '1px solid var(--border-strong)', padding: '9px 18px', borderRadius: 100, fontSize: 11, letterSpacing: '0.1em', color: 'var(--navy)', background: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span className="pill-dot" />
              {p}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #venue { grid-template-columns: 1fr !important; gap: 60px !important; padding: 100px 40px !important; }
        }
      `}</style>
    </section>
  );
}
