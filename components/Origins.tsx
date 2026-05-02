'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const origins = [
  { name: 'Gayo',    region_id: 'Aceh, Sumatera',     region_en: 'Aceh, Sumatra',       coord: "04°40'N · 96°51'E",  flavor_id: 'Earthy, full body, rendah asam — seperti hujan di hutan tropis.', flavor_en: 'Earthy, full body, low acidity — like rain in a tropical forest.', alt: '1,200–1,700 mdpl', proc: 'Wet hull',     notes: 'Cedar, dark cocoa',    img: '/images/elements/awan_06_coklat_besar.webp' },
  { name: 'Toraja',  region_id: 'Sulawesi Selatan',   region_en: 'South Sulawesi',      coord: "02°48'S · 119°52'E", flavor_id: 'Spicy, fruity, aftertaste panjang — rempah dari dataran tinggi Sapan.', flavor_en: 'Spicy, fruity, long aftertaste — spices from the Sapan highlands.', alt: '1,400–1,900 mdpl', proc: 'Giling basah', notes: 'Cardamom, plum',   img: '/images/elements/toraja_rumah_gunung.webp' },
  { name: 'Java',    region_id: 'Jawa Timur',         region_en: 'East Java',           coord: "07°30'S · 110°45'E", flavor_id: 'Medium body, herbal, klasik — warisan kebun Belanda yang masih bernyawa.', flavor_en: 'Medium body, herbal, classic — a living Dutch plantation legacy.', alt: '900–1,500 mdpl',   proc: 'Washed',       notes: 'Cedar, herbs',        img: '/images/elements/daun_kopi.webp' },
  { name: 'Bali',    region_id: 'Kintamani',          region_en: 'Kintamani',           coord: "08°40'S · 115°12'E", flavor_id: 'Clean, nutty, sedikit manis — kopi yang ditanam berdampingan dengan jeruk.', flavor_en: 'Clean, nutty, slightly sweet — coffee grown alongside citrus.', alt: '900–1,500 mdpl',   proc: 'Washed',       notes: 'Almond, citrus',      img: '/images/elements/biji_kopi_merah.webp' },
  { name: 'Flores',  region_id: 'Bajawa, NTT',        region_en: 'Bajawa, NTT',         coord: "08°34'S · 121°00'E", flavor_id: 'Floral, cokelat, kompleks — ditanam di tanah vulkanik Inerie.', flavor_en: 'Floral, chocolate, complex — grown on volcanic Inerie soil.', alt: '1,200–1,700 mdpl', proc: 'Full washed',  notes: 'Jasmine, chocolate',  img: '/images/elements/petani_biji_kopi.webp' },
  { name: 'Sumbawa', region_id: 'Tambora, NTB',       region_en: 'Tambora, NTB',        coord: "08°30'S · 117°23'E", flavor_id: 'Bold, dark chocolate, earthy — kopi muda yang tumbuh di tanah letusan.', flavor_en: 'Bold, dark chocolate, earthy — young coffee grown on volcanic earth.', alt: '1,000–1,400 mdpl', proc: 'Natural',     notes: 'Dark cocoa, tobacco', img: '/images/elements/laut_kapal_pulau.webp' },
];

const copy = {
  id: { eyebrow: 'Peta Kopi Nusantara', heading1: 'Dari', heading1em: 'Nusantara', heading2: 'Untuk Dunia', sub: 'Enam origin kopi terbaik Indonesia, masing-masing membawa karakter indera yang unik. Klik atau hover untuk menjelajah.', tag: 'Sedang Dijelajahi', altLabel: 'Altitude', procLabel: 'Process', notesLabel: 'Tasting Notes' },
  en: { eyebrow: 'Coffee Origins Map', heading1: 'From', heading1em: 'Nusantara', heading2: 'For the World', sub: 'Six of Indonesia\'s finest coffee origins, each carrying a unique sensory character. Click or hover to explore.', tag: 'Now Exploring', altLabel: 'Altitude', procLabel: 'Process', notesLabel: 'Tasting Notes' },
};

export default function Origins() {
  const { lang } = useLang();
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '-40px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectOrigin = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 200);
  };

  const o = origins[active];

  return (
    <section
      id="origins"
      ref={sectionRef}
      style={{ background: 'var(--cream-light)', padding: '130px 80px', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG decoration */}
      <div style={{ position: 'absolute', bottom: -30, left: -100, width: 500, opacity: 0.06, pointerEvents: 'none' }}>
        <Image src="/images/elements/laut_kapal_pulau.webp" alt="" width={500} height={300} style={{ objectFit: 'contain' }} />
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 80, position: 'relative', zIndex: 2 }}>
        <div className="section-eyebrow center reveal">{t.eyebrow}</div>
        <h2 className="reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(44px, 4.6vw, 64px)', fontStyle: 'italic', fontWeight: 700, color: 'var(--navy)', marginBottom: 16, lineHeight: 1.05 }}>
          {t.heading1} <em style={{ color: 'var(--red)' }}>{t.heading1em}</em>,<br />{t.heading2}
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: 'rgba(30,42,74,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>{t.sub}</p>
      </div>

      {/* Stage: feature + chip grid */}
      <div
        className="reveal origins-stage"
        style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', maxWidth: 1280, margin: '0 auto', gap: 48, position: 'relative', zIndex: 2 }}
      >
        {/* Feature card */}
        <div style={{ position: 'relative', background: 'rgba(255,255,255,0.6)', border: '1px solid var(--border)', borderRadius: 16, padding: '48px 44px', minHeight: 520, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          {/* Art image */}
          <div style={{ position: 'absolute', top: -40, right: -40, width: '60%', opacity: fading ? 0 : 0.45, pointerEvents: 'none', transition: 'opacity .6s', aspectRatio: '1/1' }}>
            <Image src={o.img} alt="" fill style={{ objectFit: 'contain' }} sizes="40vw" />
          </div>

          {/* Batik deco */}
          <div style={{ position: 'absolute', bottom: -60, left: -40, width: 240, opacity: 0.25, pointerEvents: 'none', mixBlendMode: 'multiply' }}>
            <Image src="/images/elements/batik_scurve_2.webp" alt="" width={240} height={240} style={{ objectFit: 'contain' }} />
          </div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2, transition: 'opacity .3s', opacity: fading ? 0 : 1 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--warm-tan)', marginBottom: 16 }}>{t.tag}</div>
            <div className="origin-name" style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 900, fontSize: 72, lineHeight: 0.95, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 8 }}>{o.name}</div>
            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 22, color: 'var(--red)', marginBottom: 24 }}>{lang === 'id' ? o.region_id : o.region_en}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--warm-tan)', marginBottom: 32 }}>{o.coord}</div>
            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(30,42,74,0.8)', lineHeight: 1.6, maxWidth: 340 }}>{lang === 'id' ? o.flavor_id : o.flavor_en}</div>
          </div>

          {/* Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, paddingTop: 24, borderTop: '1px solid var(--border)', position: 'relative', zIndex: 2, transition: 'opacity .3s', opacity: fading ? 0 : 1 }}>
            {[
              { label: t.altLabel, val: o.alt },
              { label: t.procLabel, val: o.proc },
              { label: t.notesLabel, val: o.notes },
            ].map(m => (
              <div key={m.label}>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(30,42,74,0.5)', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 16, color: 'var(--navy)' }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chip grid */}
        <div className="origins-chip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, alignContent: 'start' }}>
          {origins.map((orig, i) => (
            <div
              key={orig.name}
              className={`origin-chip${active === i ? ' active' : ''}`}
              onClick={() => selectOrigin(i)}
              onMouseEnter={() => selectOrigin(i)}
              style={{
                position: 'relative',
                background: active === i ? 'var(--navy)' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${active === i ? 'var(--navy)' : 'var(--border)'}`,
                borderRadius: 12, padding: '24px 22px',
                cursor: 'pointer', overflow: 'hidden',
                transition: 'background .3s, border-color .3s, transform .3s',
              }}
              onMouseLeave={e => { if (active !== i) (e.currentTarget as HTMLDivElement).style.transform = ''; }}
            >
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 700, fontSize: 20, color: active === i ? 'var(--cream)' : 'var(--navy)', marginBottom: 4, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                {orig.name}
                <span style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 12, color: active === i ? 'rgba(245,237,224,0.6)' : 'var(--warm-tan)', opacity: 0.7 }}>{String(i+1).padStart(2,'0')} / 06</span>
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', color: active === i ? 'rgba(245,237,224,0.6)' : 'rgba(30,42,74,0.6)', marginBottom: 10 }}>{orig.coord}</div>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 13, color: active === i ? 'rgba(245,237,224,0.7)' : 'rgba(30,42,74,0.7)', lineHeight: 1.5 }}>{lang === 'id' ? orig.flavor_id.split(' — ')[0] : orig.flavor_en.split(' — ')[0]}</div>
              <div style={{ position: 'absolute', bottom: 16, right: 18, fontSize: 18, color: 'var(--gold)', opacity: active === i ? 1 : 0, transform: active === i ? 'translateX(0)' : 'translateX(-6px)', transition: 'opacity .3s, transform .3s' }}>→</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #origins { padding: 100px 40px !important; }
          .origins-stage { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #origins { padding: 72px 20px !important; }
          .origins-stage { gap: 28px !important; }
          .origin-name { font-size: clamp(40px, 12vw, 64px) !important; }
          .origins-chip-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .origin-chip { padding: 16px 14px !important; }
        }
      `}</style>
    </section>
  );
}
