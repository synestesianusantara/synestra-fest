'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from './LanguageContext';

const coffeeRegions = [
  { id: 'gayo',    name: 'Gayo, Aceh',   coord: '04°40\'N 96°51\'E',  x: 18,  y: 30, char_id: 'Full body, earthy, rendah asam',      char_en: 'Full body, earthy, low acidity' },
  { id: 'toraja',  name: 'Toraja',        coord: '02°48\'S 119°52\'E', x: 67,  y: 55, char_id: 'Spicy, fruity, aftertaste panjang',  char_en: 'Spicy, fruity, long aftertaste' },
  { id: 'java',    name: 'Java',          coord: '07°30\'S 110°45\'E', x: 54,  y: 68, char_id: 'Medium body, herbal, klasik',         char_en: 'Medium body, herbal, classic' },
  { id: 'bali',    name: 'Bali',          coord: '08°40\'S 115°12\'E', x: 63,  y: 73, char_id: 'Clean, nutty, sedikit manis',        char_en: 'Clean, nutty, slightly sweet' },
  { id: 'flores',  name: 'Flores',        coord: '08°34\'S 121°00\'E', x: 73,  y: 73, char_id: 'Floral, cokelat, kompleks',          char_en: 'Floral, chocolate, complex' },
  { id: 'sumbawa', name: 'Sumbawa',       coord: '08°30\'S 117°23\'E', x: 68,  y: 73, char_id: 'Bold, dark chocolate, earthy',       char_en: 'Bold, dark chocolate, earthy' },
];

const heading = {
  id: { eyebrow: 'Peta Kopi', title: 'Kopi Nusantara', sub: 'Dari Sabang sampai Merauke — 6 origin terbaik Indonesia' },
  en: { eyebrow: 'Coffee Map', title: 'Nusantara Coffee', sub: 'From Sabang to Merauke — 6 of Indonesia\'s finest origins' },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function NusantaraMap() {
  const { lang } = useLang();
  const t = heading[lang];
  const [active, setActive] = useState<string | null>(null);

  const activeRegion = coffeeRegions.find(r => r.id === active);

  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: 'var(--cream-light)' }}
      id="peta"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[3.5px] uppercase mb-3" style={{ color: 'var(--warm-tan)' }}>
          {t.eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-playfair font-bold text-4xl md:text-5xl mb-3" style={{ color: 'var(--navy)' }}>
          {t.title}
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="font-cormorant italic text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.sub}
        </motion.p>
      </motion.div>

      {/* Map container */}
      <div className="relative max-w-3xl mx-auto">
        {/* SVG stylised Indonesia outline */}
        <svg
          viewBox="0 0 100 100"
          className="w-full"
          style={{ filter: 'drop-shadow(0 4px 24px rgba(30,42,74,0.08))' }}
        >
          {/* Background */}
          <rect width="100" height="100" rx="8" fill="var(--cream)" opacity="0.7" />

          {/* Very simplified Indonesia shape — indicative only */}
          {/* Sumatra */}
          <ellipse cx="22" cy="38" rx="14" ry="6" fill="var(--warm-tan)" opacity="0.25" transform="rotate(-20 22 38)" />
          {/* Java */}
          <ellipse cx="54" cy="68" rx="12" ry="3.5" fill="var(--warm-tan)" opacity="0.25" transform="rotate(-5 54 68)" />
          {/* Kalimantan */}
          <ellipse cx="53" cy="45" rx="10" ry="9" fill="var(--warm-tan)" opacity="0.2" />
          {/* Sulawesi */}
          <ellipse cx="67" cy="52" rx="5" ry="8" fill="var(--warm-tan)" opacity="0.2" transform="rotate(15 67 52)" />
          {/* Bali-Flores-Sumbawa strip */}
          <ellipse cx="68" cy="72" rx="8" ry="2.5" fill="var(--warm-tan)" opacity="0.22" />
          {/* Papua */}
          <ellipse cx="88" cy="52" rx="9" ry="7" fill="var(--warm-tan)" opacity="0.18" />

          {/* Equator line */}
          <line x1="2" y1="42" x2="98" y2="42" stroke="rgba(30,42,74,0.08)" strokeWidth="0.4" strokeDasharray="2 2" />
          <text x="3" y="40.5" fontSize="2.5" fill="rgba(30,42,74,0.25)" fontFamily="monospace">0°</text>

          {/* Coffee origin dots */}
          {coffeeRegions.map((r, i) => (
            <g key={r.id} style={{ cursor: 'pointer' }} onClick={() => setActive(active === r.id ? null : r.id)}>
              {/* Pulse ring */}
              <circle
                cx={r.x} cy={r.y} r="4.5"
                fill="none"
                stroke={active === r.id ? 'var(--red-accent)' : 'rgba(192,57,43,0.35)'}
                strokeWidth="0.8"
                style={{ animation: `pulseDot 2s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
              />
              {/* Solid dot */}
              <circle
                cx={r.x} cy={r.y} r="2.2"
                fill={active === r.id ? 'var(--red-accent)' : 'var(--coffee-brown)'}
                stroke="var(--cream)" strokeWidth="0.6"
                style={{ transition: 'fill 0.2s' }}
              />
              {/* Label */}
              <text
                x={r.x} y={r.y - 5}
                fontSize="2.8"
                textAnchor="middle"
                fill="var(--navy)"
                fontFamily="var(--font-playfair)"
                style={{ pointerEvents: 'none', opacity: active === r.id ? 1 : 0.7 }}
              >
                {r.name.split(',')[0]}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip / Info card */}
        <AnimatePresence>
          {activeRegion && (
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 rounded border px-5 py-4 shadow-lg"
              style={{
                backgroundColor: 'var(--navy)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <p className="text-xs tracking-[2px] uppercase mb-1" style={{ color: 'var(--warm-tan)' }}>
                {activeRegion.coord}
              </p>
              <p className="font-playfair text-lg font-bold mb-1" style={{ color: 'var(--cream)' }}>
                {activeRegion.name}
              </p>
              <p className="font-cormorant italic text-sm" style={{ color: 'var(--text-on-dark-muted)' }}>
                {lang === 'id' ? activeRegion.char_id : activeRegion.char_en}
              </p>
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-xs"
                style={{ color: 'var(--text-on-dark-muted)' }}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend chips */}
      <div className="flex flex-wrap justify-center gap-3 mt-16">
        {coffeeRegions.map((r, i) => (
          <motion.button
            key={r.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setActive(active === r.id ? null : r.id)}
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider rounded-full border transition-all duration-200"
            style={{
              borderColor: active === r.id ? 'var(--red-accent)' : 'var(--border-subtle)',
              backgroundColor: active === r.id ? 'rgba(192,57,43,0.08)' : 'transparent',
              color: active === r.id ? 'var(--red-accent)' : 'var(--text-muted)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: active === r.id ? 'var(--red-accent)' : 'var(--coffee-brown)' }}
            />
            {r.name}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
