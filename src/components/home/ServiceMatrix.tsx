'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Crosshair, 
  Code2, 
  Cpu, 
  FileCheck, 
  Database, 
  Flame, 
  Award, 
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  'penetration-testing': <ShieldAlert className="w-6 h-6 text-cyan-400" />,
  'red-team-adversary-simulation': <Crosshair className="w-6 h-6 text-rose-400" />,
  'security-reviews-code-audit': <Code2 className="w-6 h-6 text-emerald-400" />,
  'blockchain-web3-security': <Cpu className="w-6 h-6 text-purple-400" />,
  'compliance-audit': <FileCheck className="w-6 h-6 text-blue-400" />,
  'data-protection-resilience': <Database className="w-6 h-6 text-amber-400" />,
  'incident-response-forensics': <Flame className="w-6 h-6 text-red-400" />,
  'advisory-vciso': <Award className="w-6 h-6 text-indigo-400" />,
};

const borderHoverMap: Record<string, string> = {
  'penetration-testing': 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
  'red-team-adversary-simulation': 'hover:border-rose-500/50 hover:shadow-rose-500/10',
  'security-reviews-code-audit': 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  'blockchain-web3-security': 'hover:border-purple-500/50 hover:shadow-purple-500/10',
  'compliance-audit': 'hover:border-blue-500/50 hover:shadow-blue-500/10',
  'data-protection-resilience': 'hover:border-amber-500/50 hover:shadow-amber-500/10',
  'incident-response-forensics': 'hover:border-red-500/50 hover:shadow-red-500/10',
  'advisory-vciso': 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
};

export default function ServiceMatrix() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.slug === activeTab);

  return (
    <section id="categories" className="py-24 bg-slate-50 dark:bg-[#050811] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
      
      {/* Glow background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              CYBERSECURITY ASSURANCE PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Eight Pillars of Defense. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                60+ Specialized Services.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              From elite penetration testing and red teaming to smart contract formal verification and ISO 27001 readiness, RawSecLabs delivers end-to-end cyber resilience.
            </p>
          </div>

          <Link
            href="/services"
            className="self-start md:self-auto px-6 py-3 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 text-sm font-semibold transition-all flex items-center gap-2 group whitespace-nowrap shadow-sm"
          >
            <span>View Complete Directory</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
          </Link>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.06]'
            }`}
          >
            All Practice Areas (8)
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === cat.slug
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.06]'
              }`}
            >
              {cat.name} ({cat.services.length})
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className={`group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#090e1b]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300 ${borderHoverMap[cat.slug] || 'hover:border-cyan-500/50'}`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:bg-slate-100 dark:group-hover:bg-white/[0.08] transition-colors">
                    {iconMap[cat.slug] || <ShieldAlert className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-50 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cat.services.length} Services
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cat.name}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </p>

                {/* Subservices Snippet List */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold">Featured Engagements:</p>
                  {cat.services.slice(0, 3).map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${cat.slug}/${sub.slug}`}
                      className="text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center justify-between py-1 group/item transition-colors"
                    >
                      <span className="truncate pr-2">&bull; {sub.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-600 group-hover/item:text-cyan-400 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                  {cat.services.length > 3 && (
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 italic pt-1">
                      +{cat.services.length - 3} more technical assessments
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                <Link
                  href={`/services/${cat.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] hover:bg-cyan-50 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-200 dark:hover:border-cyan-500/30 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Practice Area</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
