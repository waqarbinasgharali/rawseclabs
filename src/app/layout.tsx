import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rawseclabs.com'),
  title: {
    default: 'High-Assurance Penetration Testing & Cybersecurity | RawSecLabs',
    template: '%s | RawSecLabs'
  },
  description: 'Enterprise-grade penetration testing, red teaming, and technical compliance mapping tailored for global organizations. Threat-led assessments aligned with NIST, OWASP, and international frameworks.',
  keywords: [
    'RawSecLabs',
    'global penetration testing services',
    'enterprise cybersecurity assurance',
    'threat led red teaming',
    'nist aligned pentest',
    'owasp web application security',
    'soc 2 audit readiness',
    'dora compliance testing',
    'infrastructure vulnerability assessment',
    'adversary simulation',
    'smart contract security',
    'blockchain security',
    'cloud security assessment',
    'penetration testing Toronto',
    'cybersecurity Canada'
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
    title: 'High-Assurance Penetration Testing & Global Cybersecurity Solutions',
    description: 'Enterprise-grade penetration testing, red teaming, and compliance mapping aligned with NIST and OWASP frameworks.',
    url: 'https://www.rawseclabs.com',
    siteName: 'RawSecLabs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/logos.png',
        width: 1200,
        height: 630,
        alt: 'RawSecLabs - High Assurance Penetration Testing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Assurance Penetration Testing & Global Cybersecurity Solutions',
    description: 'Enterprise-grade penetration testing and compliance mapping aligned with NIST and OWASP frameworks.',
    images: ['/logos/logos.png'],
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
        <link rel="icon" href="/logos/logos.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logos/logos.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RawSecLabs",
              "url": "https://www.rawseclabs.com",
              "logo": "https://www.rawseclabs.com/logos/logos.png",
              "description": "Enterprise-grade penetration testing, red teaming, and technical compliance mapping for global organizations.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "Canada"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@rawseclabs.com",
                "contactType": "customer service",
                "areaServed": "Global"
              },
              "sameAs": [
                "https://www.linkedin.com/company/rawseclabs",
                "https://twitter.com/rawseclabs"
              ]
            })
          }}
        />
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
