'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'id' | 'en';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LangContextType>({
  lang: 'id',
  toggle: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');

  useEffect(() => {
    const saved = localStorage.getItem('sf-lang') as Lang | null;
    if (saved === 'en' || saved === 'id') setLang(saved);
  }, []);

  const toggle = () => {
    setLang(l => {
      const next = l === 'id' ? 'en' : 'id';
      localStorage.setItem('sf-lang', next);
      return next;
    });
  };

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('sf-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
