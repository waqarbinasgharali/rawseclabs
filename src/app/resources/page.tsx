import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Newspaper, Search, CheckCircle, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Resources | RawSecLabs',
  description: 'Whitepapers, case studies, guides, and tools to help you strengthen your cybersecurity posture.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Security Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Resources
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Whitepapers, case studies, guides, and tools to help you strengthen your cybersecurity posture.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Request Custom Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FileText, title: 'Publications', desc: 'Books and research papers from our team', href: '/resources/publications' },
              { icon: Newspaper, title: 'Media Coverage', desc: 'RawSecLabs in the press', href: '/resources/media-coverage' },
              { icon: Search, title: 'Research Lab', desc: 'CVEs and original vulnerability research', href: '/resources/research-lab' },
              { icon: CheckCircle, title: 'Sample Report', desc: 'See exactly what you receive', href: '/resources/sample-report' },
              { icon: Users, title: 'Careers', desc: 'Join the team', href: '/resources/careers' }
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {resource.desc}
                </p>
                
                <div className="flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
