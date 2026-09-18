'use client';

import React from 'react';
import { ShieldCheck, Target, Award, Clock, Users, Flame } from 'lucide-react';

const stats = [
  {
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    value: '10,000+',
    label: 'Vulnerabilities Discovered',
    desc: 'Critical and high-severity issues identified before breach'
  },
  {
    icon: <Award className="w-5 h-5 text-emerald-400" />,
    value: '100%',
    label: 'Manual Verification',
    desc: 'Zero automated noise or false positive guarantees'
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-400" />,
    value: '< 4 Hours',
    label: 'Critical Alert SLA',
    desc: 'Immediate emergency notification for high-risk findings'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
    value: '99.8%',
    label: 'Auditor Acceptance',
    desc: 'Unquestioned acceptance by Big 4 auditors, SOC 2 & ISO'
  }
];

export default function StatsTicker() {
  return (
    <section className="py-16 bg-white dark:bg-[#04060c] border-y border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  {item.icon}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  METRIC 0{idx + 1}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
