import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dm = DM_Sans({
  variable: '--font-dm',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Synestra Fest 2026 — Festival Kopi & Batik Nusantara',
  description:
    'Festival kopi dan batik terbesar di Asia Tenggara. 22–25 Agustus 2026, Benteng Vredeburg, Yogyakarta. The largest coffee and batik festival in Southeast Asia.',
  keywords: ['synestra fest', 'festival kopi', 'festival batik', 'yogyakarta', 'benteng vredeburg', '2026'],
  openGraph: {
    title: 'Synestra Fest 2026',
    description: 'Festival Kopi & Batik Nusantara · 22–25 Agustus 2026 · Yogyakarta',
    images: ['/images/poster-hero.jpg'],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${cormorant.variable} ${dm.variable}`}
    >
      <body className="min-h-screen" style={{ backgroundColor: 'var(--cream-light)' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
