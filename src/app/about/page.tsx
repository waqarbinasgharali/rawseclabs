import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  Award, 
  CheckCircle2, 
  Lock, 
  Target, 
  Users, 
  ArrowRight,
  Globe2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About RawSecLabs',
  description: 'Learn about RawSecLabs: our CREST-aligned offensive security methodology, senior-only operators, and relentless focus on eliminating zero-day risks.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            ABOUT RAWSECLABS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Offensive Security Built by Practitioners, Not Scanners.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            <strong>RawSecLabs</strong> (<a href="https://www.rawseclabs.com" className="text-cyan-400 hover:underline">www.rawseclabs.com</a>) was founded with an uncompromising mission: to provide high-growth enterprises and critical infrastructure with real-world adversary simulations that eliminate vulnerabilities before attackers strike.
          </p>
        </div>

        {/* Guiding Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-[#090e1b] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Manual Exploitation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated scanners produce endless false positives and miss complex business logic flaws. Every finding in a RawSecLabs report is manually verified, chained, and exploited with a reproducible proof of concept.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090e1b] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Senior Operators Only</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never offshore your assessments or assign junior analysts to learn on your perimeter. Engagements are directly led and executed by CREST, OSCP, and OSCE-certified offensive specialists with over a decade of tier-1 experience.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090e1b] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 w-fit">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Frictionless Compliance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our reports are accepted on day one by Big 4 auditors, enterprise vendor risk committees, and cyber insurers. We include executive attestations, CVSS 3.1 matrices, and free 30-day remediation retesting.
            </p>
          </div>

        </div>

        {/* Accreditations & Standards Section */}
        <div id="certifications" className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Standard of Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Accreditations & Framework Alignment</h2>
            <p className="text-xs text-slate-400">
              RawSecLabs operators maintain the most rigorous offensive cyber certifications in the industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-xl bg-[#090e1b] border border-white/5 space-y-1">
              <span className="text-base font-extrabold text-white font-mono">CREST</span>
              <p className="text-[11px] text-slate-400">Accredited Standards</p>
            </div>
            <div className="p-5 rounded-xl bg-[#090e1b] border border-white/5 space-y-1">
              <span className="text-base font-extrabold text-white font-mono">OffSec OSCP/OSCE</span>
              <p className="text-[11px] text-slate-400">Offensive Red Teamers</p>
            </div>
            <div className="p-5 rounded-xl bg-[#090e1b] border border-white/5 space-y-1">
              <span className="text-base font-extrabold text-white font-mono">ISO 27001 & SOC 2</span>
              <p className="text-[11px] text-slate-400">Auditor-Ready Format</p>
            </div>
            <div className="p-5 rounded-xl bg-[#090e1b] border border-white/5 space-y-1">
              <span className="text-base font-extrabold text-white font-mono">OWASP & NIST</span>
              <p className="text-[11px] text-slate-400">ASVS & SP 800-115</p>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Globe2 className="w-4 h-4" /> GLOBAL OFFENSIVE REACH
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Protecting Assets in 24+ Jurisdictions
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              From fast-growing YC startups in Silicon Valley to major financial institutions in London and decentralized protocol foundations in Zurich, RawSecLabs operates seamlessly across global time zones under standardized rules of engagement.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>UK & European Union Compliance (GDPR, DORA, Cyber Essentials)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>US Enterprise & Federal Standards (NIST, NY DFS 500, SOC 2)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Web3 & Smart Contract Security (Ethereum, Solana, Cosmos, Polygon)</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#090e1b] border border-cyan-500/20 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Ready to collaborate?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you need an immediate penetration test for an upcoming audit deadline, an objective-based red team simulation, or smart contract formal verification, our leadership team is ready to scope your engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Schedule a Scoping Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
