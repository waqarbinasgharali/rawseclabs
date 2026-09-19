'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Terminal,
  CheckCircle,
  Users
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';
import { INDUSTRIES } from '@/data/industries';
import { BookOpen, FileText, Newspaper, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

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
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
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
    const timer = setTimeout(() => {
      setIsOpen(false);
      setServicesOpen(false);
      setIndustriesOpen(false);
      setResourcesOpen(false);
    }, 0);
    return () => clearTimeout(timer);
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
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <Image 
                src="/logos/logos.png" 
                alt="RawSecLabs Logo" 
                width={48} 
                height={48} 
                className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-300"
              />
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
              <div className="flex items-center gap-1.5">
                <Link 
                  href="/services"
                  className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                    servicesOpen || pathname.startsWith('/services') 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Services</span>
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''} text-slate-300`} />
              </div>

              {/* Mega-menu Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full -left-20 w-[840px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-slate-200/50 dark:shadow-black/80 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                          <Terminal className="w-4 h-4" /> Comprehensive Cyber Assurance
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Explore our 60+ offensive & defensive security capabilities</p>
                      </div>
                      <Link 
                        href="/services" 
                        className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 group"
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
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.04] border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-950/30 transition-colors">
                            {categoryIcons[cat.slug] || <ShieldAlert className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 flex items-center justify-between">
                              <span className="truncate">{cat.name}</span>
                              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                {cat.services.length}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {cat.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom banner in mega menu */}
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between bg-cyan-50 dark:bg-cyan-950/20 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Enterprise Grade &bull; Zero False Positives Guarantee &bull; Strict NDA</span>
                      </div>
                      <Link 
                        href="/assessment" 
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                      >
                        Launch Scope Estimator
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <div className="flex items-center gap-1.5">
                <Link 
                  href="/industries"
                  className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                    industriesOpen || pathname.startsWith('/industries') 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Industries</span>
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''} text-slate-300`} />
              </div>

              {/* Industries Mega-menu Dropdown */}
              {industriesOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-slate-200/50 dark:shadow-black/80 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4" /> Sector-Specific Security
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Industry-focused cybersecurity solutions</p>
                      </div>
                      <Link 
                        href="/industries" 
                        className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 group"
                      >
                        View All Industries 
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.id}
                          href={`/industries/${industry.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.04] border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all group"
                        >
                          <div className="text-2xl">{industry.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                              {industry.name}
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {industry.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom banner in industries mega menu */}
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between bg-cyan-50 dark:bg-cyan-950/20 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Regulatory Compliance &bull; Industry Expertise &bull; Tailored Solutions</span>
                      </div>
                      <Link 
                        href="/contact" 
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
                      >
                        Get Industry Assessment
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/assessment" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/assessment' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Scope Estimator
            </Link>

            <Link 
              href="/rsl-signals" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/rsl-signals' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              RSL Signals
            </Link>

            {/* Resources Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <div className="flex items-center gap-1.5">
                <Link 
                  href="/resources"
                  className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                    resourcesOpen || pathname.startsWith('/resources') 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Resources</span>
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''} text-slate-300`} />
              </div>

              {/* Resources Mega-menu Dropdown */}
              {resourcesOpen && (
                <div className="absolute top-full -left-10 w-[640px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-slate-200/50 dark:shadow-black/80 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> Resource Library
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Knowledge base and company information</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: BookOpen, title: 'About Us', desc: 'Who we are and how we work', href: '/about' },
                        { icon: FileText, title: 'Publications', desc: 'Books and research papers from our team', href: '/resources/publications' },
                        { icon: Newspaper, title: 'Media Coverage', desc: 'RawSecLabs in the press', href: '/resources/media-coverage' },
                        { icon: Search, title: 'Research Lab', desc: 'CVEs and original vulnerability research', href: '/resources/research-lab' },
                        { icon: CheckCircle, title: 'Sample Report', desc: 'See exactly what you receive', href: '/resources/sample-report' },
                        { icon: Users, title: 'Careers', desc: 'Join the team', href: '/resources/careers' }
                      ].map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.04] border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-950/30 transition-colors">
                            <resource.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                              {resource.title}
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {resource.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

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

            <div className="pl-2 border-l border-white/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
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
        <div className="lg:hidden bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              All Services (60+)
            </Link>
            <Link
              href="/industries"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Industries
            </Link>
            <Link
              href="/assessment"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Scope Estimator Tool
            </Link>
            <Link
              href="/rsl-signals"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              RSL Signals
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Contact & Scoping
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="/contact#emergency"
              className="w-full text-center py-2.5 px-4 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-2"
            >
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
