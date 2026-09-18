'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Activity
} from 'lucide-react';

const telemetryEvents = [
  { type: 'PENTEST' as const, msg: 'Zero-day auth bypass identified in API Gateway (PoC verified)' },
  { type: 'RED-TEAM' as const, msg: 'Adversary simulation: lateral movement detected & contained' },
  { type: 'WEB3' as const, msg: 'Smart contract formal verification: reentrancy guard certified' },
  { type: 'COMPLIANCE' as const, msg: 'SOC 2 Type II penetration evidence exported for auditor' },
  { type: 'INCIDENT' as const, msg: '24/7 Emergency triage team deployed: ransomware vector neutralized' },
];

export default function HeroSection() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % telemetryEvents.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeTimer);
  }, []);

  const getDynamicTimestamp = (index: number) => {
    const time = new Date(currentTime);
    time.setSeconds(time.getSeconds() - (telemetryEvents.length - 1 - index) * 7);
    return time.toLocaleTimeString('en-GB', { hour12: false });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-[#060911]">
      
      {/* Background Grids & Radial Glows */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] radial-glow pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-cyan-200 dark:border-cyan-500/30 text-xs text-slate-600 dark:text-slate-300 shadow-xl shadow-cyan-900/5 dark:shadow-cyan-950/40 backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="font-mono text-cyan-600 dark:text-cyan-300 font-semibold">RawSecLabs Threat Telemetry</span>
            <span className="text-slate-300 dark:text-slate-500">&bull;</span>
            <span className="hidden sm:inline">Elite Security Consultants &bull; Global Elite Pentester</span>
            <Link href="/assessment" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 font-semibold ml-1 group">
              Estimate Scope <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Elite Offensive Security. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Adversary Simulation.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            <strong>RawSecLabs</strong> protects high-growth tech firms, fintechs, and enterprises worldwide. We simulate real-world cyberattacks, audit smart contracts, and ensure effortless compliance with zero false positives.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Schedule Pentest Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 font-semibold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
            >
              <span>Explore All 60+ Services</span>
              <ShieldAlert className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Rigorous, Threat-Led Testing Methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>100% Manual Exploitation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>ISO 27001 & SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Strict Mutual NDA Coverage</span>
            </div>
          </div>
        </div>

        {/* Live Threat Terminal Simulation */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-900 dark:bg-[#090d18]/90 shadow-2xl shadow-slate-900/20 dark:shadow-black/80 overflow-hidden backdrop-blur-2xl">
            
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  rawseclabs-soc-terminal: ~ telemetry.live
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] text-emerald-400 font-bold">STREAM ACTIVE</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs space-y-3">
              <div className="text-slate-500">{`// Real-time offensive operations telemetry & security verification`}</div>
              
              {telemetryEvents.map((evt, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-3 p-2.5 rounded-lg transition-all duration-300 ${
                    idx === activeEvent 
                      ? 'bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 shadow-lg shadow-cyan-950/50' 
                      : 'opacity-40 text-slate-400'
                  }`}
                >
                  <span className="text-slate-500 shrink-0">[{mounted ? getDynamicTimestamp(idx) : '--:--:--'}]</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider shrink-0 ${
                    evt.type === 'PENTEST' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                    evt.type === 'RED-TEAM' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                    evt.type === 'WEB3' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                    evt.type === 'COMPLIANCE' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {evt.type}
                  </span>
                  <span className="flex-1 truncate">{evt.msg}</span>
                  {idx === activeEvent && (
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse shrink-0" />
                  )}
                </div>
              ))}

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Operator Status: <strong>Expert Tier-1 Red Teamers On-Duty</strong>
                </span>
                <span className="text-emerald-400">Target Resolution: 100% Deterministic</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
