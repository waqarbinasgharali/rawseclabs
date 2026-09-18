import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Blog | RawSecLabs',
  description: 'Latest cybersecurity insights, threat analysis, and security best practices from our expert team.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Newspaper className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Security Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Blog
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Latest cybersecurity insights, threat analysis, and security best practices from our expert team.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Subscribe to Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/10 rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-slate-400 mb-6">
              We&apos;re launching our security blog with expert insights, threat analysis, and practical security guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Get Notified
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
