import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rawseclabs.com'),
  title: {
    default: 'RawSecLabs | CREST-Aligned Penetration Testing & Cybersecurity Assurance',
    template: '%s | RawSecLabs'
  },
  description: 'RawSecLabs is an elite cybersecurity firm providing CREST-aligned penetration testing, adversary simulations, smart contract audits, and compliance advisory.',
  keywords: [
    'RawSecLabs',
    'penetration testing',
    'adversary simulation',
    'red team',
    'smart contract security',
    'CREST accredited pentest',
    'SOC 2 compliance pentest',
    'ISO 27001 audit evidence',
    'web application pentest UK US',
    'cloud pentest AWS GCP'
  ],
  authors: [{ name: 'RawSecLabs', url: 'https://www.rawseclabs.com' }],
  creator: 'RawSecLabs',
  publisher: 'RawSecLabs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'RawSecLabs | Elite Penetration Testing & Cybersecurity Assurance',
    description: 'CREST-aligned penetration testing, adversary simulations, and enterprise security audits with zero false positives.',
    url: 'https://www.rawseclabs.com',
    siteName: 'RawSecLabs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RawSecLabs | Offensive Security & Adversary Simulation',
    description: 'CREST-aligned penetration testing, adversary simulations, and enterprise security audits with zero false positives.',
    creator: '@rawseclabs',
  },
  alternates: {
    canonical: 'https://www.rawseclabs.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#060911] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
