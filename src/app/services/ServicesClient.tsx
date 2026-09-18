'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Search, 
  ArrowRight, 
  Layers,
  Award,
  Globe,
  Users,
  Zap,
  Clock,
  Shield
} from 'lucide-react';
import { CATEGORIES, ALL_SERVICES } from '@/data/services';

export default function ServicesClient() {
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Complete Security Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Cybersecurity Services
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Explore RawSecLabs&apos; complete suite of {ALL_SERVICES.length} cybersecurity services spanning penetration testing, adversary simulations, smart contract audits, and regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
              >
                Use Scope Estimator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-[#0b101d] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: 'Global Coverage', value: 'Worldwide' },
              { icon: Users, label: 'Expert Team', value: 'Industry Certified' },
              { icon: Shield, label: 'Zero False Positives', value: 'Guaranteed' },
              { icon: Clock, label: 'Rapid Response', value: '24/7 Available' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-slate-50 dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Practice Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Specialized cybersecurity services across 8 core practice areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/services/${category.slug}`}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Layers className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {category.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                      {category.services.length} Services
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Directory */}
      <section className="py-20 bg-slate-100 dark:bg-[#0b101d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              SERVICE DIRECTORY
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Explore All {ALL_SERVICES.length} Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Comprehensive security solutions tailored to your organization&apos;s needs
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
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 shadow-xl backdrop-blur-xl transition-all"
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
                All ({ALL_SERVICES.length})
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
            <span>SHOWING {filteredServices.length} SERVICES</span>
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
                className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#090e1b]/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
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

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/services/${service.categorySlug}/${service.slug}`}
                    className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4">
              <ShieldAlert className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">No matching services found</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Try adjusting your search criteria or explore our 8 core practice areas.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose RawSecLabs
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Industry-leading security expertise with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'NIST Aligned',
                description: 'Our team follows NIST frameworks ensuring industry-standard testing methodologies and best practices.'
              },
              {
                icon: Zap,
                title: 'Zero False Positives',
                description: 'Manual testing by senior experts eliminates false positives, providing accurate actionable results.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Senior security professionals with deep expertise across all major platforms and frameworks.'
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
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
            Ready to Secure Your Organization?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Get a comprehensive security assessment tailored to your specific requirements and regulatory compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Schedule Security Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
            >
              Use Scope Estimator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
