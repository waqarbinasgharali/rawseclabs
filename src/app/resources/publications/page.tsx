import Link from 'next/link';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications | RawSecLabs',
  description: 'Books, research papers, and security publications from RawSecLabs team.',
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Publications</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Books & Research Papers
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Published research, books, and security papers from our consulting team covering offensive security, compliance, and emerging threat landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Research */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Our Research</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Our research focuses on practical security challenges that affect organisations across industries. We publish findings on vulnerabilities, attack vectors, and defense strategies to advance the cybersecurity community.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Publications are added regularly as our team completes research projects and security assessments. Check back for new insights and technical papers.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Publications Coming Soon</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We're preparing our research publications and whitepapers. Our team is currently working on several papers covering penetration testing methodologies, compliance frameworks, and emerging security threats.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
                >
                  <span>Get Notified of New Publications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
