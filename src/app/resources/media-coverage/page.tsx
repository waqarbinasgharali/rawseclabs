import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Coverage | RawSecLabs',
  description: 'News articles, interviews, and media features about RawSecLabs cybersecurity work.',
};

export default function MediaCoveragePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Newspaper className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Media Coverage</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              RawSecLabs in the Press
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              News articles, interviews, and media features about our cybersecurity work, partnerships, and industry contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
            <div className="flex items-start gap-4">
              <Newspaper className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Media Coverage Coming Soon</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We're gathering our press coverage and media mentions. Our team is actively engaging with industry publications and media outlets to share insights on cybersecurity trends, compliance developments, and emerging threats.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
                >
                  <span>Get Notified of Media Updates</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Media Inquiries</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              For press inquiries, interview requests, or media partnerships, please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@rawseclabs.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
              >
                <Newspaper className="w-4 h-4" />
                <span>info@rawseclabs.com</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
              >
                <span>General Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
