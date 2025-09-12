import createMiddleware from 'next-intl/middleware';

import { LANGUAGES } from './constants/languages';

export default createMiddleware({
  locales: LANGUAGES,
  defaultLocale: 'pt',
});

export const config = {
  matcher: ['/', '/(pt|en)/:path*'],
};
