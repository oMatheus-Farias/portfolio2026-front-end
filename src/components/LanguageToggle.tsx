'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { STORAGE_KEYS } from '@/constants/storageKeys';

import brIcon from '../assets/brIcon.png';
import usIcon from '../assets/usIcon.png';
import { ActionButton } from './ActionButton';

export function LanguageToggle() {
  const [locale, setLocale] = useState<string>('pt');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (stored) {
      setLocale(stored);
    }
  }, []);

  function toggleLanguage(locale: string) {
    setLocale(locale);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, locale);
  }

  // Frases de exemplo
  const buttonText = locale === 'pt' ? 'Trocar para inglês' : 'Switch to Portuguese';

  return (
    <div>
      <ActionButton type="button" aria-label="Trocar idioma" hoverMessage={buttonText} onClick={() => toggleLanguage(locale === 'pt' ? 'en' : 'pt')}>
        <div className="relative h-5 w-5">
          <Image src={locale === 'pt' ? usIcon.src : brIcon.src} alt="Trocar idioma" width={20} height={20} className="h-5 w-5" />
        </div>
      </ActionButton>
    </div>
  );
}
