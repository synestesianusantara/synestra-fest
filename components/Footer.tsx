'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useLang } from './LanguageContext';

const copy = {
  id: {
    tagline: ['From ', <span key="t" style={{ color: 'var(--red)', fontWeight: 700 }}>Tokyo</span>, ' to ', <span key="j" style={{ color: 'var(--red)', fontWeight: 700 }}>Jogja</span>, '. From ', <span key="n" style={{ color: 'var(--red)', fontWeight: 700 }}>Nusantara</span>, ' to the World.'],
    brand: 'Festival kopi dan batik terbesar di Asia Tenggara. Empat hari pengalaman lintas indera, di jantung kota Yogyakarta.',
    nav: { title: 'Navigasi', links: [{ label: 'Tentang', href: '#about' }, { label: 'Origin', href: '#origins' }, { label: 'Program', href: '#programs' }, { label: 'Venue', href: '#venue' }, { label: 'Tiket', href: '#tickets' }] },
    contact: { title: 'Kontak', links: [{ label: 'Instagram', href: '#' }, { label: 'Press Kit', href: '#' }, { label: 'Sponsorship', href: '#' }, { label: 'hello@synestrafest.id', href: 'mailto:hello@synestrafest.id' }] },
    newsletter: { title: 'Newsletter', desc: 'Kabar terbaru, drop tiket, dan undangan eksklusif.', placeholder: 'email@kamu.com', cta: 'Daftar', success: 'Terkirim ✓' },
    copy: '© 2026 Synestra Fest · All rights reserved',
  },
  en: {
    tagline: ['From ', <span key="t" style={{ color: 'var(--red)', fontWeight: 700 }}>Tokyo</span>, ' to ', <span key="j" style={{ color: 'var(--red)', fontWeight: 700 }}>Jogja</span>, '. From ', <span key="n" style={{ color: 'var(--red)', fontWeight: 700 }}>Nusantara</span>, ' to the World.'],
    brand: 'The largest coffee and batik festival in Southeast Asia. Four days of cross-sensory experience, in the heart of Yogyakarta.',
    nav: { title: 'Navigation', links: [{ label: 'About', href: '#about' }, { label: 'Origins', href: '#origins' }, { label: 'Program', href: '#programs' }, { label: 'Venue', href: '#venue' }, { label: 'Tickets', href: '#tickets' }] },
    contact: { title: 'Contact', links: [{ label: 'Instagram', href: '#' }, { label: 'Press Kit', href: '#' }, { label: 'Sponsorship', href: '#' }, { label: 'hello@synestrafest.id', href: 'mailto:hello@synestrafest.id' }] },
    newsletter: { title: 'Newsletter', desc: 'Latest news, ticket drops, and exclusive invitations.', placeholder: 'your@email.com', cta: 'Subscribe', success: 'Sent ✓' },
    copy: '© 2026 Synestra Fest · All rights reserved',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = copy[lang];
  const [sent, setSent] = useState(false);

  return (
    <footer style={{ background: 'var(--navy-deep)', padding: '80px 80px 32px', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Deco */}
      <div style={{ position: 'absolute', top: 0, right: -200, width: 600, opacity: 0.04, pointerEvents: 'none', transform: 'rotate(180deg)' }}>
        <Image src="/images/elements/batik_scurve_full.webp" alt="" width={600} height={600} style={{ objectFit: 'contain' }} />
      </div>

      {/* Tagline bar */}
      <div className="footer-tagline-bar" style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48, position: 'relative', zIndex: 2 }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(200,168,75,0.3)', flexShrink: 0, minWidth: 20 }} />
        <div style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: 26, letterSpacing: '0.04em', color: 'rgba(245,237,224,0.85)', textAlign: 'center' }}>
          {t.tagline}
        </div>
        <div style={{ flex: 1, height: 1, background: 'rgba(200,168,75,0.3)', flexShrink: 0, minWidth: 20 }} />
      </div>

      {/* 4-col grid */}
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 48, marginBottom: 56, position: 'relative', zIndex: 2 }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <Image src="/images/logo.png" alt="Synestra Fest" width={42} height={42} style={{ objectFit: 'contain' }} />
            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 26, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.1 }}>Synestra<br />Fest</div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(245,237,224,0.5)', lineHeight: 1.7, maxWidth: 280 }}>{t.brand}</p>
        </div>

        {/* Nav */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18, opacity: 0.85 }}>{t.nav.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {t.nav.links.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: 13, color: 'rgba(245,237,224,0.55)', textDecoration: 'none', transition: 'color .25s, padding-left .25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '6px'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,237,224,0.55)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '0'; }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18, opacity: 0.85 }}>{t.contact.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {t.contact.links.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: 13, color: 'rgba(245,237,224,0.55)', textDecoration: 'none', transition: 'color .25s, padding-left .25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '6px'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,237,224,0.55)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '0'; }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18, opacity: 0.85 }}>{t.newsletter.title}</div>
          <p style={{ fontSize: 13, color: 'rgba(245,237,224,0.55)', lineHeight: 1.7 }}>{t.newsletter.desc}</p>
          <form
            onSubmit={e => { e.preventDefault(); setSent(true); }}
            style={{ display: 'flex', marginTop: 14, border: '1px solid rgba(200,168,75,0.25)', borderRadius: 8, overflow: 'hidden', transition: 'border-color .3s' }}
            onFocus={() => {}} // handled by CSS :focus-within in parent
          >
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              required
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '10px 12px', color: 'var(--cream)', fontSize: 12, fontFamily: 'var(--sans)' }}
            />
            <button
              type="submit"
              style={{ background: 'var(--red)', color: '#fff', border: 'none', padding: '10px 16px', fontSize: 11, letterSpacing: '0.1em', cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'background .25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--red-deep)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--red)'; }}
            >
              {sent ? t.newsletter.success : t.newsletter.cta}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(200,168,75,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(245,237,224,0.35)', position: 'relative', zIndex: 2 }}>
        <div>{t.copy}</div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          {["06°10'S 106°49'E", "07°48'S 110°22'E", "01°16'N 127°38'E"].map((c, i) => (
            <span key={c}>
              {i > 0 && <span style={{ color: 'rgba(245,237,224,0.18)', marginRight: 14 }}>|</span>}
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer { padding: 60px 40px 32px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          footer { padding: 56px 20px 28px !important; }
          .footer-tagline-bar { gap: 12px !important; margin-bottom: 36px !important; }
          .footer-tagline-bar > div:nth-child(2) { font-size: 18px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 36px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .footer-bottom > div:last-child { display: none !important; }
        }
      `}</style>
    </footer>
  );
}
