'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLang } from './LanguageContext';

const links = {
  id: [
    { label: 'Tentang', href: '#about' },
    { label: 'Origin',  href: '#origins' },
    { label: 'Program', href: '#programs' },
    { label: 'Venue',   href: '#venue' },
    { label: 'Tiket',   href: '#tickets' },
  ],
  en: [
    { label: 'About',   href: '#about' },
    { label: 'Origins', href: '#origins' },
    { label: 'Program', href: '#programs' },
    { label: 'Venue',   href: '#venue' },
    { label: 'Tickets', href: '#tickets' },
  ],
};

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [hidden, setHidden]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const cur = window.scrollY;
      setScrolled(cur > 30);
      setHidden(cur > 200 && cur > last);
      last = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = links[lang];

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(245,237,224,0.92)' : 'rgba(245,237,224,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 68,
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform .4s cubic-bezier(.22,1,.36,1)',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <Image src="/images/logo.png" alt="Synestra Fest" width={38} height={38} style={{ objectFit: 'contain' }} />
        <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.18em', color: 'var(--navy)', lineHeight: 1.3 }}>
          SYNESTRA<br />FEST
        </div>
      </a>

      {/* Desktop links */}
      <div className="nav-desktop-links" style={{ gap: 36, display: 'flex' }}>
        {navLinks.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="nav-link-item"
            style={{ fontSize: 13, letterSpacing: '0.06em', color: 'var(--navy)', textDecoration: 'none', opacity: 0.75, transition: 'opacity .2s, color .2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--red)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--navy)'; }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        {/* Lang toggle */}
        <div style={{ fontSize: 11, letterSpacing: '0.15em', userSelect: 'none' }}>
          {(['id','en'] as const).map((l, i) => (
            <span key={l}>
              {i > 0 && <span style={{ color: 'var(--navy)', opacity: 0.4 }}> | </span>}
              <span
                onClick={() => setLang(l)}
                style={{ cursor: 'pointer', fontWeight: lang === l ? 500 : 400, color: lang === l ? 'var(--red)' : 'var(--navy)', opacity: lang === l ? 1 : 0.5, transition: 'all .2s' }}
              >
                {l.toUpperCase()}
              </span>
            </span>
          ))}
        </div>

        {/* CTA — hidden on mobile (available inside mobile overlay) */}
        <a
          href="#tickets"
          className="nav-cta"
          style={{ background: 'var(--red)', color: '#fff', fontSize: 12, letterSpacing: '0.1em', fontWeight: 500, padding: '11px 22px', borderRadius: 100, textDecoration: 'none', transition: 'background .25s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red-deep)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'; }}
        >
          {lang === 'id' ? 'Beli Tiket' : 'Buy Tickets'}
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4, display: 'none' }}
        >
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--navy)' }} />)}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(245,237,224,0.98)', backdropFilter: 'blur(20px)', zIndex: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, padding: 48 }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 24, right: 28, background: 'none', border: 'none', fontSize: 32, cursor: 'pointer', color: 'var(--navy)' }}>×</button>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 38, fontStyle: 'italic', color: 'var(--navy)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="#tickets" onClick={() => setMobileOpen(false)} style={{ background: 'var(--red)', color: '#fff', padding: '14px 40px', borderRadius: 100, fontWeight: 500, textDecoration: 'none', marginTop: 8 }}>
            {lang === 'id' ? 'Beli Tiket' : 'Buy Tickets'}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          nav { padding: 0 20px !important; }
          .nav-desktop-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .nav-desktop-links { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
