'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Zap,
  Lock
} from 'lucide-react';

const targets = [
  { id: 'web-api', name: 'Web Applications & REST/GraphQL APIs', defaultDays: 6, tag: 'OWASP Top 10' },
  { id: 'cloud', name: 'Cloud Infrastructure (AWS, Azure, GCP)', defaultDays: 5, tag: 'CIS Benchmark' },
  { id: 'network', name: 'Internal & External Network Perimeter', defaultDays: 7, tag: 'CREST Certified' },
  { id: 'web3', name: 'Smart Contracts & Web3 Protocol', defaultDays: 8, tag: 'Formal Verification' },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', defaultDays: 6, tag: 'OWASP MASVS' },
  { id: 'redteam', name: 'Full Adversary Red Team Simulation', defaultDays: 14, tag: 'Threat-Led APT' },
];

const drivers = [
  { id: 'soc2', name: 'SOC 2 Type II Compliance' },
  { id: 'iso', name: 'ISO 27001 Audit Evidence' },
  { id: 'pci', name: 'PCI DSS v4.0 Requirement' },
  { id: 'dora', name: 'EU DORA Digital Resilience' },
  { id: 'launch', name: 'Pre-Production Release Assurance' },
  { id: 'client', name: 'Enterprise Client Vendor Security Review' },
];

const sizes = [
  { id: 'small', name: 'Standard MVP / Single Asset', multiplier: 1 },
  { id: 'medium', name: 'Multi-Tier / Microservices Architecture', multiplier: 1.4 },
  { id: 'large', name: 'Enterprise Multi-Region Environment', multiplier: 2.1 },
];

export default function InteractiveAssessment() {
  console.log('InteractiveAssessment component loaded!');
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const estimatedDays = Math.round(selectedTarget.defaultDays * selectedSize.multiplier);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting assessment form:', { email, target: selectedTarget.name, driver: selectedDriver.name, size: selectedSize.name, estimatedDays });
    if (email) {
      try {
        const response = await fetch('/api/assessment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            target: selectedTarget.name,
            driver: selectedDriver.name,
            size: selectedSize.name,
            estimatedDays,
          }),
        });

        console.log('Response status:', response.status);
        const result = await response.json();
        console.log('Response data:', result);

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.error('Failed to submit form', result);
          alert('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
      }
    }
  };

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-white/5">
      
      {/* Background Accent */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            INTERACTIVE SECURITY SCOPING ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Pentest Scope in 60 Seconds
          </h2>
          <p className="text-base text-slate-400">
            Select your assessment target, compliance requirements, and architecture scope to receive an instant engagement duration estimate and tailored testing blueprint.
          </p>
        </div>

        {/* Scoping Wizard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-white/10 shadow-2xl backdrop-blur-xl">
            
            {/* Step 1: Select Target */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                01. Select Assessment Target
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {targets.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTarget(t)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedTarget.id === t.id
                        ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{t.name}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-cyan-300">
                      {t.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Driver */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                02. Primary Compliance / Business Driver
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {drivers.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDriver(d)}
                    className={`p-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                      selectedDriver.id === d.id
                        ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-950/30'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Scope Scale */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                03. Infrastructure Scale / Asset Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedSize.id === s.id
                        ? 'bg-purple-950/40 border-purple-400 text-white'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1222] to-[#080d19] border border-cyan-500/30 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Tailored Proposal Scope</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedTarget.name}</h3>
              </div>
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Calculator className="w-6 h-6" />
              </div>
            </div>

            {/* Duration Estimation */}
            <div className="py-6 border-b border-white/10 space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-slate-300">Estimated Duration:</span>
                <span className="text-3xl font-extrabold text-cyan-400 font-mono flex items-center gap-1.5">
                  <Clock className="w-6 h-6" />
                  {estimatedDays} - {estimatedDays + 2} Days
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Executed by CREST-aligned senior penetration testers. Includes manual threat validation and proof-of-concept exploit chains.
              </p>
            </div>

            {/* Included Deliverables */}
            <div className="py-6 border-b border-white/10 space-y-3 text-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Standard Inclusions:
              </span>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Executive Summary & Risk Matrix for Auditors / Board</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero False Positive Technical Report with CVSS 3.1</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary Retest of Remediated Findings</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formal Attestation of Compliance Certificate</span>
              </div>
            </div>

            {/* Form / Lead Submission */}
            <div className="pt-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <p className="text-xs text-slate-300 font-medium">
                    Send detailed formal scope and pricing breakdown to your email:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="corporate@company.com"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Receive Scope</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-500" />
                    Strict mutual NDA guaranteed. Zero spam.
                  </p>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-300">Scoping Inquiry Received</h4>
                  <p className="text-xs text-slate-300">
                    A senior RawSecLabs technical director will review your scope for <strong>{selectedTarget.name}</strong> and contact you at <strong>{email}</strong> within 4 business hours.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
