'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe 
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';
import { FOOTER_LINKS } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#04060c] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 relative overflow-hidden">
      
      {/* Background cyber grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <Image 
                src="/logos/logos.png" 
                alt="RawSecLabs" 
                width={60} 
                height={60}
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white flex items-center">
                  Raw<span className="text-cyan-600 dark:text-cyan-400">Sec</span><span className="text-slate-500 dark:text-slate-400">Labs</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-mono">
                  Offensive Cyber Defense & Assurance
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              RawSecLabs is an elite offensive cybersecurity firm providing industry-standard penetration testing, adversary simulations, smart contract audits, and regulatory compliance advisory worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <a href="https://www.rawseclabs.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  www.rawseclabs.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <a href="mailto:contact@rawseclabs.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  contact@rawseclabs.com
                </a>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">PGP Key Fingerprint:</span>
                9B4A 82F1 5C02 E41D 77A8  D19C 3E6B 4410 99FE 2026
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.services.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Compliance Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/compliance-audit/iso-27001-certification-services-in-the-uk" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  ISO 27001 Certification
                </Link>
              </li>
              <li>
                <Link href="/services/compliance-audit/pci-dss-compliance-mapping-pre-audit-assessment" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  PCI DSS Compliance Support
                </Link>
              </li>
              <li>
                <Link href="/services/compliance-audit/soc-2-compliance-pentest" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  SOC 2 Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/data-protection-resilience/dora-tlpt-amp-penetration-testing-services" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  DORA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400" />
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/resources/publications" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/resources/media-coverage" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link href="/resources/research-lab" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Research Lab
                </Link>
              </li>
              <li>
                <Link href="/resources/sample-report" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link href="/resources/careers" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/services/${cat.slug}`}
                    className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Company Details Section */}
        <div className="py-12 border-t border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Contact Details</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+44 20 7193 9000</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:contact@rawseclabs.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    contact@rawseclabs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">United Kingdom</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>124 City Road, London, EC1V 2NX, United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">United States</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>New York, NY, United States</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">United Arab Emirates</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Logos Row */}
        <div className="py-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-xs">
            {FOOTER_LINKS.legal.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Commented out logos - muted due to permission issues
          <div className="flex flex-wrap justify-end gap-6 items-center">
            <Image 
              src="/logos/footer logos/crest.png" 
              alt="CREST" 
              width={100} 
              height={50}
              className="h-10 w-auto object-contain"
            />
            <Image 
              src="/logos/footer logos/iso27001.webp" 
              alt="ISO 27001" 
              width={100} 
              height={50}
              className="h-10 w-auto object-contain"
            />
            <Image 
              src="/logos/footer logos/pci.webp" 
              alt="PCI DSS" 
              width={100} 
              height={50}
              className="h-10 w-auto object-contain"
            />
            <Image 
              src="/logos/footer logos/ukas.webp" 
              alt="UKAS" 
              width={100} 
              height={50}
              className="h-10 w-auto object-contain"
            />
            <Image 
              src="/logos/footer logos/cyber-essentials.webp" 
              alt="Cyber Essentials" 
              width={100} 
              height={50}
              className="h-10 w-auto object-contain"
            />
          </div>
          */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; 2026 RawSecLabs. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500">
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
