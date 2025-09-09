import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import bodyBackground from '../assets/bodyBackground.png';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        style={{
          backgroundImage: 'url(' + bodyBackground.src + ')',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
        }}
        className={`${geistSans.variable} ${inter.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
