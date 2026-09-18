import Link from 'next/link';
import { ArrowRight, Search, AlertTriangle, ShieldAlert, Bug } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Lab | RawSecLabs',
  description: 'Expert insights on penetration testing, PCI DSS, Web3 security & emerging threats from RawSecLabs research team.',
};

export default function ResearchLabPage() {
  const findings = [
    {
      title: 'Google Chrome 109.0.5414.74',
      type: 'Browser Security',
      severity: 'High',
      description: 'Security vulnerability identified in Google Chrome browser with potential for remote code execution.',
      status: 'Disclosed'
    },
    {
      title: 'Turtl Note Application',
      type: 'Application Security',
      severity: 'Medium',
      description: 'Security assessment revealing vulnerabilities in the Turtl Note application version 0.',
      status: 'Disclosed'
    },
    {
      title: 'WordPress Infocus Theme',
      type: 'CMS Security',
      severity: 'High',
      description: 'Multiple security vulnerabilities identified in the WordPress Infocus theme including XSS and CSRF issues.',
      status: 'Disclosed'
    },
    {
      title: 'phpMyRecipes 1.x.x',
      type: 'Web Application',
      severity: 'Critical',
      description: 'Multiple vulnerabilities including XSS, CSRF, and SQL injection in phpMyRecipes application.',
      status: 'Disclosed'
    },
    {
      title: 'TimThumb Finder 1.0 Beta',
      type: 'Tool Security',
      severity: 'Medium',
      description: 'Security analysis of TimThumb Finder tool revealing potential security issues.',
      status: 'Disclosed'
    },
    {
      title: 'Laravel Security Framework',
      type: 'Framework Security',
      severity: 'Medium',
      description: 'Security assessment of Laravel framework identifying potential security configurations.',
      status: 'Disclosed'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Research Lab</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Expert Insights on Penetration Testing, PCI DSS, Web3 Security & Emerging Threats
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Our research lab is a core element of our work, dedicated to advancing security through collaboration with the wider security research community.
            </p>
          </div>
        </div>
      </section>

      {/* About Research Lab */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Our Research Lab</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We focus on everyday technologies that affect large numbers of people, with recent attention on mobile communication and payment systems. Our mission is to address vulnerabilities before they can be exploited, and where this is not possible, to openly discuss flaws to raise awareness.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              The lab operates as an open collective of like-minded innovators. If you are interested in our projects or wish to collaborate, we encourage you to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Security Research Findings</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              In the following section you will find a list of some of our findings and security research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {findings.map((finding, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bug className="w-5 h-5 text-cyan-400" />
                    <span className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {finding.type}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                    finding.severity === 'Critical' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400' :
                    finding.severity === 'High' ? 'bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400' :
                    'bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {finding.severity}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{finding.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{finding.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <ShieldAlert className="w-3 h-3" />
                    <span>{finding.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Research Areas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Browser Security</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Safari, Edge, DuckDuckGo, and other major platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Mobile Security</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">iOS and Android application security research</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bug className="w-5 h-5 text-rose-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Web Application Security</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">CMS frameworks, plugins, and custom applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Payment Systems</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">E-commerce and fintech security research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Research Collaboration</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              If you are interested in our projects or wish to collaborate, we encourage you to reach out. Our lab operates as an open collective of like-minded innovators.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
            >
              <span>Discuss Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
