'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How does RawSecLabs guarantee zero false positives in penetration reports?',
    a: 'Unlike automated scanning vendors who dump unverified tool outputs into reports, every single finding delivered by RawSecLabs is manually validated and exploited in your environment by certified consultants. We provide step-by-step reproduction proofs-of-concept (PoC) and verified risk metrics so your engineering team never wastes time chasing phantom vulnerabilities.'
  },
  {
    q: 'Are RawSecLabs reports accepted by Big 4 auditors and compliance bodies?',
    a: 'Yes. Our reports are authored in strict alignment with OWASP Top 10 / ASVS, NIST SP 800-115, and PTES frameworks. They contain both a non-technical Executive Summary and formal Attestation of Testing, routinely accepted without friction by SOC 2 Type II assessors, ISO 27001 certification bodies, PCI compliance assessors, and enterprise vendor procurement teams.'
  },
  {
    q: 'What happens if a critical zero-day vulnerability is discovered during testing?',
    a: 'We operate a continuous Emergency Escalation SLA. If our operators uncover a critical vulnerability (such as an unauthenticated remote code execution, active database dump, or credentials exposure), we do not wait for the final report. We alert your designated technical contact within 2-4 hours with mitigation guidance.'
  },
  {
    q: 'Is post-remediation retesting included with your engagements?',
    a: 'Yes. All standard RawSecLabs penetration testing engagements include a complimentary 30-day retest window. Once your engineering team applies the recommended patches, our consultants re-evaluate the target findings and issue an updated Clean Bill of Health report and Attestation of Remediated Security.'
  },
  {
    q: 'How does RawSecLabs protect our confidential architecture and proprietary code?',
    a: 'Every assessment is backed by comprehensive mutual Non-Disclosure Agreements (NDAs). All communication and deliverables are transmitted through encrypted, zero-knowledge channels with optional PGP encryption. Data retention follows strict ISO 27001 data minimization policies.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#050811] relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Security & Engagement Governance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Clear answers on our methodology, compliance acceptance, non-destructive testing, and retesting SLAs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white dark:bg-[#0a0f1d] border-cyan-500/40 shadow-xl shadow-cyan-900/5 dark:shadow-cyan-950/20' 
                    : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-slate-100">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
