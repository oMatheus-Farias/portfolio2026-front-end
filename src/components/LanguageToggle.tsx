'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { STORAGE_KEYS } from '@/constants/storageKeys';
import { usePathname, useRouter } from '@/navigation';

import brIcon from '../assets/brIcon.webp';
import usIcon from '../assets/usIcon.webp';
import { ActionButton } from './ActionButton';

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>('pt');
  const buttonText = locale === 'pt' ? 'Trocar para inglês' : 'Switch to Portuguese';

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (stored) {
      setLocale(stored);
    }
  }, []);

  function toggleLanguage(locale: string) {
    router.push(pathname, { locale });
    setLocale(locale);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, locale);
  }

  return (
    <ActionButton
      type="button"
      aria-label="Trocar idioma"
      hoverMessage={buttonText}
      onClick={() => toggleLanguage(locale === 'pt' ? 'en' : 'pt')}
    >
      <div className="relative h-5 w-5">
        <Image
          src={locale === 'pt' ? usIcon.src : brIcon.src}
          alt="Trocar idioma"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      </div>
    </ActionButton>
  );
}
