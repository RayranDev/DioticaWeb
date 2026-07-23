import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ópticas DIOTICA — Ve mejor, vive mejor',
  description: 'Monturas y lentes que combinan salud visual y moda. Agenda tu asesoría visual en Ópticas DIOTICA. Ve mejor, vive mejor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
