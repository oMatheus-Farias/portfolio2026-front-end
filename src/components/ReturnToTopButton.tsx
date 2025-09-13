'use client';

import { CircleArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ReturnToTopButton() {
  const t = useTranslations('Home');

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={handleScrollToTop}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#848484] transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 hover:text-[#252525] hover:shadow-md/5 lg:rounded-lg lg:text-base dark:text-[#D5D5D5] dark:hover:bg-[#4a4a4a]"
    >
      <CircleArrowUp className="h-4 w-4" />
      {t('returnToTopButtonText')}
    </button>
  );
}
