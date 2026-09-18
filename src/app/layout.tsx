import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rawseclabs.com'),
  title: {
    default: 'RawSecLabs | Advanced Penetration Testing & Bespoke Cybersecurity Assurance',
    template: '%s | RawSecLabs'
  },
  description: 'Expert penetration testing and technical security assessments tailored for enterprises and compliance requirements.',
  keywords: [
    'RawSecLabs',
    'penetration testing',
    'adversary simulation',
    'red team',
    'smart contract security',
    'Global penetration testing',
    'professional red teaming',
    'industry standard pentest',
    'corporate cyber security audit',
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
    description: 'Advanced penetration testing, adversary simulations, and enterprise security audits with zero false positives.',
    url: 'https://www.rawseclabs.com',
    siteName: 'RawSecLabs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RawSecLabs | Offensive Security & Adversary Simulation',
    description: 'Advanced penetration testing, adversary simulations, and enterprise security audits with zero false positives.',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#060911] dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
