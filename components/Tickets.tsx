'use client';
import { useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    eyebrow: 'Pilih Pengalamanmu',
    heading: 'Rasakan',
    headingEm: 'Synestra',
    sub: 'Empat hari yang akan diingat seumur hidup.',
    tiers: [
      {
        tier: 'General', num: '01', price: '10K', currency: 'Rp', period: '/ hari · per orang',
        benefits: ['Akses pameran batik & kopi', 'Area jajanan & pasar Synestra', 'Stage pertunjukan umum', 'Booklet program festival'],
        cta: 'Beli Tiket', featured: false,
      },
      {
        tier: '4-Day Pass', num: '02', price: '20K', currency: 'Rp', period: '4 hari · per orang',
        benefits: ['Akses penuh 4 hari festival', 'Welcome kit edisi terbatas', '1 cupping session gratis', 'Priority entry & line', '10% diskon di marketplace'],
        cta: 'Beli Tiket', featured: true, badge: 'Terpopuler',
      },
      {
        tier: 'VIP Patron', num: '03', price: '100K', currency: 'Rp', period: '/ 4 hari full · all-access',
        benefits: ['All-access + semua workshop', 'Meja lounge khusus VIP', 'Goodie box eksklusif (batik & kopi)', 'Meet & greet artis dan barista', 'Private tour Vredeburg'],
        cta: 'Beli Tiket', featured: false,
      },
    ],
  },
  en: {
    eyebrow: 'Choose Your Experience',
    heading: 'Experience',
    headingEm: 'Synestra',
    sub: 'Four days you will remember for a lifetime.',
    tiers: [
      {
        tier: 'General', num: '01', price: '10K', currency: 'IDR', period: '/ day · per person',
        benefits: ['Batik & coffee exhibition access', 'Food area & Synestra market', 'Main performance stage', 'Festival programme booklet'],
        cta: 'Buy Ticket', featured: false,
      },
      {
        tier: '4-Day Pass', num: '02', price: '20K', currency: 'IDR', period: '4 days · per person',
        benefits: ['Full 4-day festival access', 'Limited edition welcome kit', '1 free cupping session', 'Priority entry & line', '10% marketplace discount'],
        cta: 'Buy Ticket', featured: true, badge: 'Most Popular',
      },
      {
        tier: 'VIP Patron', num: '03', price: '100K', currency: 'IDR', period: '/ 4 days · all-access',
        benefits: ['All-access + all workshops', 'Private VIP lounge table', 'Exclusive goodie box (batik & coffee)', 'Meet & greet artists & baristas', 'Private Vredeburg tour'],
        cta: 'Buy Ticket', featured: false,
      },
    ],
  },
};

export default function Tickets() {
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
      id="tickets"
      ref={sectionRef}
      style={{ background: 'var(--navy-deep)', padding: '140px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}
    >
      {/* Radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,75,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* BG leaves */}
      <div style={{ position: 'absolute', top: 80, right: -80, width: 320, opacity: 0.07, transform: 'rotate(20deg)', pointerEvents: 'none' }}>
        <img src="/images/elements/daun_kopi.webp" alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: -80, width: 280, opacity: 0.07, transform: 'rotate(-30deg) scaleX(-1)', pointerEvents: 'none' }}>
        <img src="/images/elements/daun_kopi_bunga.webp" alt="" style={{ width: '100%' }} />
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: 64 }}>
        <div className="section-eyebrow center reveal" style={{ color: 'var(--gold)', justifyContent: 'center' }}>{t.eyebrow}</div>
        <h2 className="reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(44px, 4.6vw, 64px)', color: 'var(--cream)', marginBottom: 12, lineHeight: 1.05 }}>
          {t.heading} <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>{t.headingEm}</em>
        </h2>
        <p className="reveal" style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 22, color: 'var(--warm-tan)' }}>{t.sub}</p>
      </div>

      {/* Cards */}
      <div className="tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {t.tiers.map((tier) => (
          <div
            key={tier.num}
            className="reveal"
            style={{
              border: `1px solid ${tier.featured ? 'var(--gold)' : 'rgba(200,168,75,0.2)'}`,
              borderRadius: 14,
              padding: '44px 36px 36px',
              background: tier.featured ? 'linear-gradient(180deg, rgba(200,168,75,0.1), rgba(200,168,75,0.02))' : 'rgba(255,255,255,0.03)',
              position: 'relative',
              transition: 'all .4s cubic-bezier(.22,1,.36,1)',
              cursor: 'default',
              textAlign: 'left',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = 'translateY(-6px)';
              el.style.borderColor = tier.featured ? 'var(--gold)' : 'rgba(200,168,75,0.45)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = '';
              el.style.borderColor = tier.featured ? 'var(--gold)' : 'rgba(200,168,75,0.2)';
            }}
          >
            {tier.featured && tier.badge && (
              <div style={{ position: 'absolute', top: -1, right: 32, background: 'var(--gold)', color: 'var(--navy-deep)', fontSize: 9, letterSpacing: '0.18em', fontWeight: 600, padding: '6px 14px', borderRadius: '0 0 8px 8px', textTransform: 'uppercase' }}>{tier.badge}</div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,237,224,0.55)' }}>{tier.tier}</div>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(245,237,224,0.35)' }}>{tier.num}</div>
            </div>

            <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid rgba(200,168,75,0.12)' }}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 48, color: 'var(--cream)', lineHeight: 1, marginBottom: 6, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 18, color: 'var(--gold)', fontWeight: 400 }}>{tier.currency}</span>
                {tier.price}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,237,224,0.4)', letterSpacing: '0.08em' }}>{tier.period}</div>
            </div>

            <ul style={{ fontSize: 13, color: 'rgba(245,237,224,0.7)', lineHeight: 1.85, listStyle: 'none', marginBottom: 28, textAlign: 'left' }}>
              {tier.benefits.map(b => (
                <li key={b} style={{ paddingLeft: 22, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 11, width: 12, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#"
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: tier.featured ? 'var(--red)' : 'transparent',
                border: `1px solid ${tier.featured ? 'var(--red)' : 'rgba(200,168,75,0.4)'}`,
                color: 'var(--cream)',
                fontSize: 12, letterSpacing: '0.12em',
                padding: '14px 18px', borderRadius: 8,
                textDecoration: 'none',
                transition: 'all .3s',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'var(--cream)';
                el.style.color = 'var(--navy-deep)';
                el.style.borderColor = 'var(--cream)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = tier.featured ? 'var(--red)' : 'transparent';
                el.style.color = 'var(--cream)';
                el.style.borderColor = tier.featured ? 'var(--red)' : 'rgba(200,168,75,0.4)';
              }}
            >
              <span>{tier.cta}</span>
              <span style={{ transition: 'transform .3s' }}>→</span>
            </a>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #tickets { padding: 100px 40px !important; }
          .tickets-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
        }
        @media (max-width: 640px) {
          #tickets { padding: 72px 20px !important; }
          .tickets-grid { grid-template-columns: 1fr !important; max-width: 100% !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
