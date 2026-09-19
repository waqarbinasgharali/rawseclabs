import { INDUSTRIES } from '@/data/industries';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found | RawSecLabs',
    };
  }

  return {
    title: `${industry.name} Cybersecurity Services | RawSecLabs`,
    description: `${industry.description} RawSecLabs provides specialized cybersecurity solutions for ${industry.name.toLowerCase()}.`,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      {/* Breadcrumb */}
      <div className="bg-slate-100 dark:bg-[#0b101d] border-b border-slate-200 dark:border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <Link href="/industries" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Industries
            </Link>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-cyan-600 dark:text-cyan-400">{industry.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{industry.icon}</div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Cybersecurity Services for {industry.name}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {industry.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {industry.regulatory.map((reg) => (
                  <span
                    key={reg}
                    className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium"
                  >
                    {reg}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Get Industry Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://calendly.com/rawseclabs-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Link>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Request {industry.name} Security Assessment
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Get a tailored security assessment for your {industry.name.toLowerCase()} organisation.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Security Needs*
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                    placeholder="Describe your security requirements..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Request Assessment
                </button>
                
                <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                  All information submitted is kept strictly confidential under our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-100 dark:bg-[#0b101d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {industry.name} Security Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Comprehensive security solutions tailored for {industry.name.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {service}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Professional security assessment and testing for {industry.name.toLowerCase()} environments.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'NIST', value: 'Aligned' },
              { label: 'SWIFT CSP', value: 'Global' },
              { label: 'PCI DSS Support', value: 'Mapping' },
              { label: 'ISO 27001', value: 'Auditors' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Secure Your {industry.name} Organisation?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Get a comprehensive security assessment tailored to your industry&apos;s specific requirements and regulatory compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {/* <Phone className="w-5 h-5" /> */}
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/rawseclabs-info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
