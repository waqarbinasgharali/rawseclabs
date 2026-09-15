'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShieldAlert, 
  Crosshair, 
  Code2, 
  Cpu, 
  FileCheck, 
  Database, 
  Flame, 
  Award, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  PhoneCall,
  Terminal
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';

const categoryIcons: Record<string, React.ReactNode> = {
  'penetration-testing': <ShieldAlert className="w-5 h-5 text-cyan-400" />,
  'red-team-adversary-simulation': <Crosshair className="w-5 h-5 text-rose-400" />,
  'security-reviews-code-audit': <Code2 className="w-5 h-5 text-emerald-400" />,
  'blockchain-web3-security': <Cpu className="w-5 h-5 text-purple-400" />,
  'compliance-audit': <FileCheck className="w-5 h-5 text-blue-400" />,
  'data-protection-resilience': <Database className="w-5 h-5 text-amber-400" />,
  'incident-response-forensics': <Flame className="w-5 h-5 text-red-400" />,
  'advisory-vciso': <Award className="w-5 h-5 text-indigo-400" />,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060911]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3' 
          : 'bg-[#060911]/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-black border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
              <ShieldAlert className="w-6 h-6 text-cyan-400 transition-transform group-hover:scale-110 duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
                Raw<span className="text-cyan-400">Sec</span><span className="text-slate-400">Labs</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                Offensive Cyber Defense
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Services Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                  servicesOpen || pathname.startsWith('/services') 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-menu Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full -left-20 w-[840px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#0b101d] border border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                          <Terminal className="w-4 h-4" /> Comprehensive Cyber Assurance
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">Explore our 58+ offensive & defensive security capabilities</p>
                      </div>
                      <Link 
                        href="/services" 
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
                      >
                        View All Services 
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/services/${cat.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-colors">
                            {categoryIcons[cat.slug] || <ShieldAlert className="w-5 h-5 text-cyan-400" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 flex items-center justify-between">
                              <span className="truncate">{cat.name}</span>
                              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">
                                {cat.services.length}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {cat.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom banner in mega menu */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between bg-cyan-950/20 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>CREST-Aligned &bull; Zero False Positives Guarantee &bull; NDA Guaranteed</span>
                      </div>
                      <Link 
                        href="/assessment" 
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 transition-colors"
                      >
                        Launch Scope Estimator
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/services" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/services' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Directory
            </Link>

            <Link 
              href="/assessment" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/assessment' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Scope Estimator
            </Link>

            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/about' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/contact' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#emergency"
              className="px-3 py-2 text-xs font-semibold text-rose-300 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/30 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>24/7 Incident Triage</span>
            </Link>

            <Link
              href="/contact"
              className="relative group px-4 py-2 text-xs font-bold text-black rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:scale-105" />
              <span className="relative flex items-center gap-1.5">
                Schedule Pentest
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#060911] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              All Services (58+)
            </Link>
            <Link
              href="/assessment"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Scope Estimator Tool
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              About RawSecLabs
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Contact & Scoping
            </Link>
          </div>

          {/* Categories in mobile */}
          <div className="pt-2 border-t border-white/10">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Practice Areas</p>
            <div className="grid grid-cols-1 gap-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.slug}`}
                  className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">{cat.services.length}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact#emergency"
              className="w-full text-center py-2.5 px-4 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>24/7 Emergency Incident Hotline</span>
            </Link>
            <Link
              href="/contact"
              className="w-full text-center py-2.5 px-4 rounded-lg bg-cyan-500 text-black font-bold text-xs shadow-lg shadow-cyan-500/20"
            >
              Schedule Pentest Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
