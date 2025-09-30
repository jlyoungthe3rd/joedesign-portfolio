import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/siteConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Joe Young',
    template: 'Joe Young -- %s',
  },
  description: "Joe Young's Game Design Portfolio",
  icons: { icon: '/favicon.ico' },
  openGraph: {
    siteName: 'Joe Young Portfolio',
    type: 'website',
    url: siteConfig.siteUrl,
    title: 'Joe Young',
    description: "Joe Young's Game Design Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joe Young',
    description: "Joe Young's Game Design Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-4 py-2 rounded z-50'
        >
          Skip to content
        </a>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main id='main-content' className='flex-grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
