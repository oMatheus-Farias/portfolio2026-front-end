import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { LANGUAGES } from '@/constants/languages';

const locales = LANGUAGES;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as 'pt' | 'en')) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
