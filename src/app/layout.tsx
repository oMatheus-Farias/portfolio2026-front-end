import './globals.css';

import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import lightBodyBackground from '../assets/lightBodyBackground.webp';

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
    <html lang="pt-br">
      <body
        style={{
          backgroundImage: 'url(' + lightBodyBackground.src + ')',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
        }}
        className={`${geistSans.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
