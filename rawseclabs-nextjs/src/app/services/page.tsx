'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { CATEGORIES, ALL_SERVICES } from '@/data/services';

export default function ServicesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.categorySlug === selectedCategory;
    const matchesSearch = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            COMPREHENSIVE PRACTICE DIRECTORY
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Offensive Security & Assurance Catalog
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            Explore RawSecLabs’ complete suite of {ALL_SERVICES.length} cybersecurity services spanning penetration testing, adversary simulations, smart contract audits, and regulatory compliance.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., Web App, Smart Contract, SOC 2, DORA, AWS, Forensics)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#090e1b] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 shadow-xl backdrop-blur-xl transition-all"
            />
          </div>

          {/* Categories Pill Bar */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 pt-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 font-bold'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5 hover:bg-white/[0.06]'
              }`}
            >
              All Practices ({ALL_SERVICES.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5 hover:bg-white/[0.06]'
                }`}
              >
                {cat.name} ({cat.services.length})
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-mono">
          <span>SHOWING {filteredServices.length} ASSURANCE ENGAGEMENTS</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-cyan-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#090e1b]/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {service.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/services/${service.categorySlug}/${service.slug}`}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                >
                  <span>Detailed Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="text-[11px] font-medium text-slate-400 hover:text-white"
                >
                  Request Quote &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <ShieldAlert className="w-12 h-12 text-slate-600 mx-auto" />
            <h4 className="text-lg font-bold text-white">No matching services found</h4>
            <p className="text-xs text-slate-400">Try adjusting your search criteria or explore our 8 core practice areas.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
