'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, Lock } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white dark:bg-[#060911] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-cyan-50 via-slate-50 to-emerald-50 dark:from-cyan-950/40 dark:via-slate-900 dark:to-emerald-950/40 border border-cyan-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-900/10 dark:shadow-cyan-950/50">
          
          {/* Cyber accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 text-xs font-mono font-bold">
              <ShieldAlert className="w-4 h-4" />
              PRIORITIZE YOUR CYBER RESILIENCE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Don’t wait for a data breach to test your defenses.
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              Speak directly with a senior offensive security specialist at <strong>RawSecLabs</strong>. Receive a custom scoped proposal and quotation within 24 hours under mutual NDA.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-extrabold text-sm shadow-xl shadow-cyan-500/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group"
              >
                <span>Schedule Pentest Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/assessment"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-slate-50 dark:hover:bg-white/[0.1] text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch Scope Estimator</span>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Mutual NDA Covered
              </span>
              <span>&bull;</span>
              <span>Senior Security Consultants</span>
              <span>&bull;</span>
              <span>Zero Offshoring</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
