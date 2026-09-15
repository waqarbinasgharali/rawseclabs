import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  FileText, 
  Award, 
  HelpCircle,
  Lock,
  Send,
  Sparkles
} from 'lucide-react';
import { ALL_SERVICES, getServiceBySlug } from '@/data/services';

interface ServicePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({
    category: s.categorySlug,
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { category: categorySlug, slug: serviceSlug } = await params;
  const service = getServiceBySlug(categorySlug, serviceSlug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDesc,
    alternates: {
      canonical: `https://www.rawseclabs.com/services/${categorySlug}/${serviceSlug}`,
    },
    openGraph: {
      title: `${service.name} | RawSecLabs`,
      description: service.shortDesc,
      url: `https://www.rawseclabs.com/services/${categorySlug}/${serviceSlug}`,
      siteName: 'RawSecLabs',
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category: categorySlug, slug: serviceSlug } = await params;
  const service = getServiceBySlug(categorySlug, serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-cyan-400 shrink-0">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href="/services" className="hover:text-cyan-400 shrink-0">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href={`/services/${service.categorySlug}`} className="hover:text-cyan-400 shrink-0">{service.category}</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-cyan-400 font-bold truncate">{service.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <ShieldAlert className="w-3.5 h-3.5" />
              {service.badge} &bull; 100% MANUAL EXPLOITATION
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.h1 || service.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {service.overview}
            </p>

            {/* Quick stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Methodology</span>
                <span className="text-xs font-bold text-white mt-0.5 block">CREST & OWASP ASVS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">False Positives</span>
                <span className="text-xs font-bold text-emerald-400 mt-0.5 block">0% (Guaranteed)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Retesting</span>
                <span className="text-xs font-bold text-cyan-400 mt-0.5 block">Included (30 Days)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                <span>Request Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/assessment"
                className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <span>Launch Scope Estimator</span>
              </Link>
            </div>
          </div>

          {/* Scoping Sidebar Box */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090e1b] border border-white/10 shadow-2xl space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">
              Engagement Snapshot
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Practice Area:</span>
                <span className="text-white font-semibold">{service.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Consultant Level:</span>
                <span className="text-white font-semibold">Senior & Principal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Turnaround:</span>
                <span className="text-white font-semibold">5 - 12 Business Days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Attestation:</span>
                <span className="text-emerald-400 font-semibold">Auditor-Ready Certificate</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Coverage:</span>
                <span className="text-white font-semibold">Global / UK / US / EU</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-cyan-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Confidentiality Guaranteed
              </p>
              <p className="text-[11px] text-slate-400">
                All engagements are protected under mutual Non-Disclosure Agreements and encrypted communications.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Value Grid: Who Needs This & Why It Matters */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Who Needs This */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Target Audience & Triggers
            </h3>
            <p className="text-xs text-slate-400">
              This engagement is tailored for organizations facing the following security requirements:
            </p>
            <ul className="space-y-2.5">
              {service.whoNeedsThis.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Engagement Deliverables
            </h3>
            <p className="text-xs text-slate-400">
              Actionable, audit-grade artifacts delivered upon engagement conclusion:
            </p>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Methodology Workflow Steps */}
        <div className="py-16 border-b border-white/10 space-y-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Standardized Execution</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              RawSecLabs 4-Stage Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((m) => (
              <div key={m.step} className="p-6 rounded-2xl bg-[#090e1b] border border-white/10 space-y-3">
                <span className="text-2xl font-black font-mono text-cyan-400">{m.step}</span>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <div className="py-16 border-b border-white/10 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Common Inquiries</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <h4 className="text-sm font-bold text-slate-200">{faq.question}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Book {service.name} Scope</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Receive a fixed-price proposal with clear testing objectives, timeline guarantees, and free 30-day remediation retesting.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs shadow-xl shadow-cyan-500/30 whitespace-nowrap transition-colors"
          >
            Consult with Lead Specialist
          </Link>
        </div>

      </div>
    </div>
  );
}
