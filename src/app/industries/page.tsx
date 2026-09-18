import { INDUSTRIES } from '@/data/industries';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Secure | Sector-Specific Cybersecurity | RawSecLabs',
  description: 'RawSecLabs delivers sector-specific cybersecurity and compliance across finance, SaaS, healthcare, e-commerce, hospitality, manufacturing, education and the public sector.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <ShieldAlert className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Sector-Specific Cybersecurity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Industries We Secure
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              RawSecLabs delivers sector-specific cybersecurity and compliance across finance, SaaS, healthcare, e-commerce, hospitality, manufacturing, education and the public sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Get Industry-Specific Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    {industry.tagline}
                  </p>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {industry.regulatory.slice(0, 3).map((reg) => (
                      <span
                        key={reg}
                        className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-slate-100 dark:bg-[#0b101d] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our security solutions meet the strictest regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['NIST', 'PCI DSS', 'SOC 2', 'ISO 27001', 'NCSC', 'SWIFT CSP'].map((badge) => (
              <div key={badge} className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{badge}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">Certified</div>
                </div>
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
            Need Industry-Specific Security?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Our team understands the unique challenges and regulatory requirements of your industry. Get a tailored security assessment today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            Schedule Industry Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
