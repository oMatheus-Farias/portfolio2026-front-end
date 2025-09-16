'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { STORAGE_KEYS } from '@/constants/storageKeys';

import moonIcon from '../assets/moonIcon.webp';
import sunIcon from '../assets/sunIcon.webp';
import { ActionButton } from './ActionButton';

export function ModeToggle() {
  const [themeSeted, setThemeSeted] = useState<string>('light');
  const { setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (storedTheme) {
      setThemeSeted(storedTheme);
    }
  }, []);

  function handleSetTheme(theme: string) {
    setThemeSeted(theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  return (
    <ActionButton
      type="button"
      aria-label="Trocar tema"
      hoverMessage="Trocar tema"
      onClick={() => {
        if (themeSeted === 'dark') {
          handleSetTheme('light');
          setTheme('light');
        } else {
          handleSetTheme('dark');
          setTheme('dark');
        }
      }}
    >
      <div className="relative h-4 w-4">
        <Image
          src={themeSeted === 'dark' ? sunIcon : moonIcon}
          sizes="16px"
          alt="Trocar tema"
          fill
        />
      </div>
    </ActionButton>
  );
}
