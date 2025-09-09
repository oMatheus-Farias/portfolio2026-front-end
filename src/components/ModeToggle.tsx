'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import moonIcon from '../assets/moonIcon.png';
import sunIcon from '../assets/sunIcon.png';
import { ActionButton } from './ActionButton';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <ActionButton
      type="button"
      aria-label="Trocar tema"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <div className="relative h-4 w-4">
        <Image src={theme === 'dark' ? sunIcon : moonIcon} sizes="16px" alt="Trocar tema" fill />
      </div>
    </ActionButton>
  );
}
