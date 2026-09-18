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
  Globe2,
  Building2,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About RawSecLabs | Global Premium Cyber Security & Penetration Testing Consultancy',
  description: 'About RawSecLabs: an elite technical security consultancy providing high-assurance penetration testing and audit-ready compliance frameworks for global enterprises.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            ABOUT RAWSECLABS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Global Premium Cyber Security & Penetration Testing Consultancy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            An elite technical security consultancy providing high-assurance penetration testing and audit-ready compliance frameworks for global enterprises, trusted by regulated organisations across financial services, healthcare, and the wider public and private sectors.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 relative">
            <div className="absolute top-0 left-0 w-1 h-16 bg-cyan-500 rounded-tl-2xl" />
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-4">Our Mission</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide high-growth enterprises and critical infrastructure with real-world adversary simulations that eliminate vulnerabilities before attackers strike. We deliver actionable security intelligence through manual exploitation, not automated scanning.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 relative">
            <div className="absolute top-0 left-0 w-1 h-16 bg-emerald-500 rounded-tl-2xl" />
            <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the trusted cybersecurity partner for regulated industries worldwide, setting the standard for offensive security excellence through zero false positives, senior-only operators, and compliance-ready deliverables.
            </p>
          </div>
        </div>

        {/* Statistics/Differentiators Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">By the numbers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">What makes RawSecLabs different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-center space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">60+</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Regulated Clients</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Across financial services, retail, SaaS, and regulated sectors
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-center space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">250+</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security Projects</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Delivered since founding, from pentests to compliance audits
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-center space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-rose-600 dark:text-rose-400 font-mono">100%</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Senior Consultants</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                No junior pass-through, no offshore relabel, senior-only delivery
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Award className="w-4 h-4" /> FOUNDER & CEO
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Waqar Asghar
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Waqar leads the firm from London. He still does technical work alongside the consulting team and writes for the RawSecLabs research publication. The combination of practitioner experience and business leadership is the differentiator he wanted RawSecLabs to be built around.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Building2 className="w-4 h-4" /> COMPANY
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Headquarters</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">124 City Road, London, EC1V 2NX, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Global Delivery</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">UK, EU, US, and Middle East engagements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations & Standards Section */}
        <div id="certifications" className="p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Standard of Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Accreditations & Framework Alignment</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              RawSecLabs operators maintain the most rigorous offensive cyber certifications in the industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#090e1b] border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">NIST</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Global Standards</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#090e1b] border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">OffSec OSCP/OSCE</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Offensive Red Teamers</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#090e1b] border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">ISO 27001 & SOC 2</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Auditor-Ready Format</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#090e1b] border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">OWASP & NIST</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">ASVS & SP 800-115</p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">How we work</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Our Core Values</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The principles that shape every engagement, every report, and every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 w-fit">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Security-first mindset</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We prioritise security in everything we touch—our work, our advice, and the way we handle client data. Threat modelling is part of how we think, not an extra service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Independence</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We sell consulting, not software licences. Our recommendations are vendor-neutral and based on what your environment actually needs, not what is profitable for us to resell.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Plain English</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Findings explained without jargon. Reports the board can read. Risk articulated in terms that translate to business decisions, not just technical severity ratings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 w-fit">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Senior consultants only</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every engagement is led by a senior consultant who has done the work before. No junior pass-through, no offshore relabel, no name-bait-and-switch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 w-fit">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Pragmatism over theatre</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Compliance work that produces real improvement, not just audit-ready paperwork. Pentests that find what attackers would find, not noise that fills page count.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 w-fit">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Long client relationships</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Most of our clients return year on year. We optimise for the long relationship, not the transactional engagement, which means giving honest advice even when it loses us a sale.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Partners Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Working with</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Strategic Partners</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We work alongside specialist partners where complementary expertise serves the client better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-center space-y-4">
              <div className="h-12 flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">Zettamight</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized security solutions and advisory services
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-center space-y-4">
              <div className="h-12 flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">Work Generations</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consulting and workforce solutions
              </p>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Globe2 className="w-4 h-4" /> GLOBAL OFFENSIVE REACH
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Protecting Assets in 24+ Jurisdictions
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              From fast-growing YC startups in Silicon Valley to major financial institutions in London and decentralized protocol foundations in Zurich, RawSecLabs operates seamlessly across global time zones under standardized rules of engagement.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400">
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

          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-cyan-500/20 space-y-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Let&apos;s talk about your security programme.
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a 30-minute scoping call with our management team. No obligation, same-day reply.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>Book a scoping call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
              >
                <span>Book on Calendly</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
