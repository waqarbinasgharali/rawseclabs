'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowUpRight, 
  Lock, 
  Mail, 
  Globe, 
  Key, 
  ExternalLink 
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';
import { FOOTER_LINKS } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#04060c] border-t border-white/10 text-slate-400 relative overflow-hidden">
      
      {/* Background cyber grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Trust & Accreditation Bar */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">CREST Aligned</p>
              <p className="text-[11px] text-slate-400">Industry-Standard Pentest</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Lock className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">ISO 27001 & SOC 2</p>
              <p className="text-[11px] text-slate-400">Formal Audit Readiness</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Zero False Positives</p>
              <p className="text-[11px] text-slate-400">100% Manual Exploitation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Key className="w-6 h-6 text-purple-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Strict NDA Coverage</p>
              <p className="text-[11px] text-slate-400">Secure Vaulted Delivery</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-black border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                <ShieldAlert className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white flex items-center">
                  Raw<span className="text-cyan-400">Sec</span><span className="text-slate-400">Labs</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                  Offensive Cyber Defense & Assurance
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              RawSecLabs is an elite offensive cybersecurity firm providing CREST-aligned penetration testing, adversary simulations, smart contract audits, and regulatory compliance advisory worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href="https://www.rawseclabs.com" className="hover:text-cyan-400 transition-colors">
                  www.rawseclabs.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:contact@rawseclabs.com" className="hover:text-cyan-400 transition-colors">
                  contact@rawseclabs.com
                </a>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 font-mono text-[11px] text-slate-400">
                <span className="text-cyan-400 font-semibold block mb-1">PGP Key Fingerprint:</span>
                9B4A 82F1 5C02 E41D 77A8  D19C 3E6B 4410 99FE 2026
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/services/${cat.slug}`}
                    className="hover:text-cyan-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.services.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              Company & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.company.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="hover:text-rose-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">Legal & Governance</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                {FOOTER_LINKS.legal.map((item, idx) => (
                  <Link key={idx} href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">RawSecLabs</strong> (<a href="https://www.rawseclabs.com" className="text-cyan-400 hover:underline">www.rawseclabs.com</a>). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SOC Telemetry Active
            </span>
            <span>All assessments conducted under strict mutual NDA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
