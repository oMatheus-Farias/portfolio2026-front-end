import { createNavigation } from 'next-intl/navigation';

import { LANGUAGES } from './constants/languages';

export const locales = LANGUAGES;
export const defaultLocale = 'pt';

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales, defaultLocale });
