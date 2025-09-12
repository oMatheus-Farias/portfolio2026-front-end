import './globals.css';

import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import { IntlProviderWrapper } from '@/lib/intlProviderWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matheus Neves',
  description: 'Portfólio de Matheus Neves - Desenvolvedor Full-stack',
};

export default async function RootLayout(props: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const { children, params } = props;
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${inter.className} pattern-bg antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <IntlProviderWrapper locale={locale}>{children}</IntlProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
