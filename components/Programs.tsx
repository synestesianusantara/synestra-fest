'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    eyebrow: 'Program Unggulan',
    heading1: 'Yang Akan',
    heading2: 'Kamu',
    heading2em: 'Rasakan',
    cards: [
      { tag: 'Workshop',     num: '01 / Six', title: 'Cupping & Roasting Masterclass',               desc: 'Belajar langsung dari Q-Grader dan roaster terbaik Indonesia. Sesi terbatas dengan tiket khusus.', meta: 'Hari 1 · 09:00 WIB', img: '/images/elements/biji_kopi_merah.webp' },
      { tag: 'Pameran',      num: '02 / Six', title: 'Batik Nusantara: Dari Pesisir ke Pedalaman',    desc: 'Koleksi motif batik dari 30+ daerah dalam narasi sejarah dan budaya visual yang hidup.',         meta: 'Hari 1–4 · All Day', img: '/images/elements/batik_5.webp' },
      { tag: 'Kompetisi',    num: '03 / Six', title: 'Synestra Barista Championship',                 desc: 'Kompetisi barista terbuka dengan tema fusion: kopi bertemu estetika batik dalam setiap cangkir.', meta: 'Hari 2 & 3 · 13:00', img: '/images/elements/daun_kopi.webp' },
      { tag: 'Pertunjukan',  num: '04 / Six', title: 'Synesthesia Stage — Kolaborasi Lintas Seni',    desc: 'Pertunjukan musik, tari, dan visual art kolaboratif. Dari gamelan kontemporer hingga jazz acoustic.', meta: 'Setiap malam · 19:30', img: '/images/elements/penari_only.webp' },
      { tag: 'Diskusi',      num: '05 / Six', title: 'Forum Kopi & Budaya: Dari Petani ke Cangkir',  desc: 'Diskusi panel bersama petani, peneliti, dan pelaku industri tentang masa depan kopi Indonesia.', meta: 'Hari 3 · 15:00', img: '/images/elements/awan_05_biru_kecil.webp' },
      { tag: 'Pasar',        num: '06 / Six', title: 'Pasar Synestra — Marketplace Origin & Wastra', desc: 'Marketplace langsung dari petani kopi dan perajin batik. Belanja, ngobrol, pulang dengan cerita.', meta: 'Hari 1–4 · All Day', img: '/images/elements/laut_kapal_pulau.webp' },
    ],
  },
  en: {
    eyebrow: 'Festival Highlights',
    heading1: 'What You\'ll',
    heading2: '',
    heading2em: 'Experience',
    cards: [
      { tag: 'Workshop',     num: '01 / Six', title: 'Cupping & Roasting Masterclass',               desc: 'Learn directly from Indonesia\'s finest Q-Graders and roasters. Limited sessions with special tickets.', meta: 'Day 1 · 09:00', img: '/images/elements/biji_kopi_merah.webp' },
      { tag: 'Exhibition',   num: '02 / Six', title: 'Batik Nusantara: From Coast to Heartland',     desc: 'A collection of batik motifs from 30+ regions in a living narrative of history and visual culture.',      meta: 'Day 1–4 · All Day', img: '/images/elements/batik_5.webp' },
      { tag: 'Competition',  num: '03 / Six', title: 'Synestra Barista Championship',                 desc: 'Open barista competition with a fusion theme: coffee meets batik aesthetics in every cup.',               meta: 'Day 2 & 3 · 13:00', img: '/images/elements/daun_kopi.webp' },
      { tag: 'Performance',  num: '04 / Six', title: 'Synesthesia Stage — Cross-Art Collaboration',  desc: 'Collaborative music, dance, and visual art performances. From contemporary gamelan to acoustic jazz.',      meta: 'Every evening · 19:30', img: '/images/elements/penari_only.webp' },
      { tag: 'Discussion',   num: '05 / Six', title: 'Coffee & Culture Forum: From Farmer to Cup',   desc: 'Panel discussions with farmers, researchers, and industry players about the future of Indonesian coffee.', meta: 'Day 3 · 15:00', img: '/images/elements/awan_05_biru_kecil.webp' },
      { tag: 'Market',       num: '06 / Six', title: 'Pasar Synestra — Origin & Textile Marketplace',desc: 'A direct marketplace from coffee farmers and batik artisans. Shop, chat, leave with stories.',              meta: 'Day 1–4 · All Day', img: '/images/elements/laut_kapal_pulau.webp' },
    ],
  },
};

export default function Programs() {
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
      id="programs"
      ref={sectionRef}
      style={{ background: 'var(--navy-deep)', padding: '140px 80px', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06, mixBlendMode: 'screen' }}>
        <Image src="/images/elements/petani_biji_kopi.webp" alt="" fill style={{ objectFit: 'contain', objectPosition: 'bottom right' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: -50, width: 340, opacity: 0.05, mixBlendMode: 'screen', pointerEvents: 'none' }}>
        <Image src="/images/elements/batik_scurve_3.webp" alt="" width={340} height={340} style={{ objectFit: 'contain' }} />
      </div>

      {/* Header */}
      <div className="reveal programs-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, maxWidth: 1280, marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 600 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{t.eyebrow}</div>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(44px, 4.6vw, 60px)', fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.05 }}>
            {t.heading1}{t.heading2 && <>{' '}{t.heading2}<br /></>}{!t.heading2 && <br />}<em style={{ color: 'var(--gold)' }}>{t.heading2em}</em>
          </h2>
        </div>
        <div className="programs-date" style={{ textAlign: 'right', paddingBottom: 8 }}>
          <div style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 900, fontSize: 42, color: 'var(--cream)', lineHeight: 1, marginBottom: 6 }}>22–25</div>
          <div style={{ fontSize: 10, letterSpacing: '0.25em', color: 'rgba(245,237,224,0.5)' }}>Agustus 2026</div>
        </div>
      </div>

      {/* Grid */}
      <div className="programs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {t.cards.map((card) => (
          <div
            key={card.num}
            className="reveal"
            style={{ border: '1px solid rgba(200,168,75,0.18)', borderRadius: 14, padding: '40px 32px', background: 'rgba(255,255,255,0.025)', transition: 'all .4s cubic-bezier(.22,1,.36,1)', position: 'relative', overflow: 'hidden', cursor: 'default', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(200,168,75,0.5)';
              el.style.background = 'rgba(255,255,255,0.05)';
              el.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(200,168,75,0.18)';
              el.style.background = 'rgba(255,255,255,0.025)';
              el.style.transform = '';
            }}
          >
            {/* Deco */}
            <div style={{ position: 'absolute', bottom: -30, right: -30, width: 160, opacity: 0.08, pointerEvents: 'none' }}>
              <Image src={card.img} alt="" width={160} height={160} style={{ objectFit: 'contain' }} />
            </div>

            <div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 14, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                {card.tag}
              </div>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(245,237,224,0.4)', marginBottom: 14 }}>{card.num}</div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 26, color: 'var(--cream)', marginBottom: 16, lineHeight: 1.15 }}>{card.title}</div>
              <p style={{ fontSize: 14, color: 'rgba(245,237,224,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{card.desc}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: '1px solid rgba(200,168,75,0.15)', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(245,237,224,0.45)' }}>
              <span>{card.meta}</span>
              <span style={{ color: 'var(--gold)' }}>Detail →</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #programs { padding: 100px 40px !important; }
          .programs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #programs { padding: 72px 20px !important; }
          .programs-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .programs-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; margin-bottom: 36px !important; }
          .programs-date { text-align: left !important; padding-bottom: 0 !important; }
          .programs-date > div:first-child { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
