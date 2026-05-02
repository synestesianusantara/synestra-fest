'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    eyebrow: 'Tentang Synestra',
    heading1: 'Ketika Rasa',
    heading2: 'Menjadi',
    heading2em: 'Visual',
    body1: 'Synestra lahir dari perpaduan Synesthesia dan Nusantara. Festival ini bukan sekadar pameran — ini adalah pengalaman lintas indera yang mempertemukan industri kopi Indonesia yang dinamis dengan kekayaan wastra batik sebagai warisan budaya bangsa.',
    body2: 'Empat hari, satu kota, ribuan cerita rasa. Dari pagi yang dimulai dengan aroma roasting, hingga malam yang ditutup dengan tarian dan musik tradisi.',
    quote: '"From Tokyo to Jogja.\nFrom Nusantara to the World."',
    cards: [
      { num: '01', title: 'Kopi · Indera Rasa', desc: 'Rasa dan aroma dari enam origin terbaik Nusantara — Gayo, Toraja, Java, Bali, Flores, Sumbawa. Setiap tegukan adalah perjalanan geografis.', tags: ['Cupping', 'Roasting', 'Brewing'], img: '/images/elements/biji_kopi_merah.webp', type: 'kopi' },
      { num: '02', title: 'Batik · Indera Visual', desc: 'Visual dan warna dari 30+ motif daerah — dari pesisir ke pedalaman. Warisan yang hidup dan terus bercerita lewat setiap helai kain.', tags: ['Pameran', 'Workshop', 'Showcase'], img: '/images/elements/batik_kotak_02_parang_biru.webp', type: 'batik' },
      { num: '03', title: 'Synesthesia · Indera yang Bertemu', desc: 'Kolaborasi seniman, barista, dan perajin batik untuk menciptakan pengalaman lintas-indera — di mana cangkir berbicara dalam bahasa kain.', tags: ['Live Art', 'Music', 'Tasting'], img: null, type: 'synesthesia' },
    ],
  },
  en: {
    eyebrow: 'About Synestra',
    heading1: 'When Taste',
    heading2: 'Becomes',
    heading2em: 'Visual',
    body1: 'Synestra is born from the fusion of Synesthesia and Nusantara. This festival is not merely an exhibition — it is a cross-sensory experience that brings together Indonesia\'s dynamic coffee industry with the rich heritage of batik as a national cultural treasure.',
    body2: 'Four days, one city, thousands of flavour stories. From mornings that begin with the aroma of roasting, to evenings closed with traditional dance and music.',
    quote: '"From Tokyo to Jogja.\nFrom Nusantara to the World."',
    cards: [
      { num: '01', title: 'Coffee · Sense of Taste', desc: 'Flavours and aromas from six of Nusantara\'s finest origins — Gayo, Toraja, Java, Bali, Flores, Sumbawa. Every sip is a geographical journey.', tags: ['Cupping', 'Roasting', 'Brewing'], img: '/images/elements/biji_kopi_merah.webp', type: 'kopi' },
      { num: '02', title: 'Batik · Sense of Sight', desc: 'Visuals and colours from 30+ regional motifs — from the coast to the heartland. A living heritage that continues to speak through every thread.', tags: ['Exhibition', 'Workshop', 'Showcase'], img: '/images/elements/batik_kotak_02_parang_biru.webp', type: 'batik' },
      { num: '03', title: 'Synesthesia · Senses United', desc: 'Collaboration between artists, baristas, and batik craftspeople to create a cross-sensory experience — where the cup speaks the language of cloth.', tags: ['Live Art', 'Music', 'Tasting'], img: null, type: 'synesthesia' },
    ],
  },
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--cream)',
        padding: '140px 80px 120px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 100,
        alignItems: 'start',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deco */}
      <div style={{ position: 'absolute', right: -100, top: -80, width: 300, opacity: 0.1, pointerEvents: 'none', transform: 'rotate(15deg)' }}>
        <Image src="/images/elements/batik_kotak_01_kawung_biru.webp" alt="" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Left: text */}
      <div>
        <div className="section-eyebrow reveal">{t.eyebrow}</div>

        <h2 className="reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(40px, 4vw, 56px)', fontStyle: 'italic', fontWeight: 700, lineHeight: 1.05, color: 'var(--navy)', marginBottom: 28 }}>
          {t.heading1}<br />{t.heading2} <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>{t.heading2em}</em>
        </h2>

        <p className="reveal" style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(30,42,74,0.72)', marginBottom: 28, maxWidth: 520 }}>{t.body1}</p>
        <p className="reveal" style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(30,42,74,0.72)', marginBottom: 28, maxWidth: 520 }}>{t.body2}</p>

        <p className="reveal" style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 22, color: 'var(--red)', lineHeight: 1.45, paddingLeft: 20, borderLeft: '2px solid var(--red)', maxWidth: 480, whiteSpace: 'pre-line' }}>
          {t.quote}
        </p>
      </div>

      {/* Right: cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 40 }}>
        {t.cards.map((card) => (
          <div
            key={card.num}
            className="reveal"
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(8px)',
              borderRadius: 14,
              padding: '32px 36px',
              border: `1px solid var(--border)`,
              borderLeft: `3px solid ${card.type === 'kopi' ? 'var(--coffee)' : card.type === 'batik' ? 'var(--batik-blue)' : 'var(--gold)'}`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s, border-color .3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) translateX(2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 60px rgba(30,42,74,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
          >
            {/* Bg image on hover */}
            {card.img && (
              <div style={{ position: 'absolute', top: '-30%', right: '-15%', width: 200, height: 200, opacity: 0, transition: 'opacity .5s', pointerEvents: 'none' }}
                className="card-bg-img">
                <Image src={card.img} alt="" fill style={{ objectFit: 'contain' }} />
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 42, color: 'var(--warm-tan)', opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{card.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 700, marginBottom: 10, color: 'var(--navy)' }}>{card.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(30,42,74,0.7)' }}>{card.desc}</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {card.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, letterSpacing: '0.12em', padding: '4px 10px', border: '1px solid var(--border-strong)', borderRadius: 100, color: 'var(--navy)', opacity: 0.7 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about { grid-template-columns: 1fr !important; gap: 60px !important; padding: 100px 40px !important; }
        }
      `}</style>
    </section>
  );
}
