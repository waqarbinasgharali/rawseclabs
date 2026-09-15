'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { 
  PhoneCall, 
  Mail, 
  Lock, 
  Send, 
  CheckCircle2, 
  Key, 
  Clock, 
  ShieldAlert,
  FileCheck
} from 'lucide-react';
import { CATEGORIES } from '@/data/services';

export default function ContactPage() {
  console.log('ContactPage component loaded!');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Penetration Testing',
    deadline: 'Within 2 Weeks',
    message: '',
    ndaRequired: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting contact form:', formData);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
  };

  return (
    <div className="pt-32 pb-24 bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Lock className="w-3.5 h-3.5" />
            CONFIDENTIAL SCOPING & CONSULTATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Schedule a Pentest Consultation
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Speak directly with a senior offensive security specialist at <strong>RawSecLabs</strong> (<a href="https://www.rawseclabs.com" className="text-cyan-400 hover:underline">www.rawseclabs.com</a>). All communications are protected under mutual Non-Disclosure Agreements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#090e1b] border border-white/10 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              Request Scoping Proposal & Quote
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Technologies Ltd"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Direct Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Target Service Area *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e1b] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Target Audit Timeline *</label>
                    <select
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e1b] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Urgent (Within 48h)">Urgent (Within 48h)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Q3/Q4 Planning">Planning Ahead / Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Assessment Scope & Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your environment (e.g. 1 web app with 3 roles, AWS EKS cluster, SOC 2 audit deadline on Oct 1st)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="w-4 h-4 rounded text-cyan-400 bg-white/5 border-white/20 focus:ring-0"
                  />
                  <label htmlFor="nda" className="text-xs text-slate-300 select-none">
                    Send mutual Non-Disclosure Agreement (NDA) prior to technical scoping call
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-extrabold text-xs shadow-xl shadow-cyan-500/25 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  <span>Submit Scoping Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  Your information is encrypted in transit and stored strictly within ISO 27001 compliant secure enclaves.
                </p>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-300">Scoping Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A RawSecLabs Principal Security Consultant will review your scope for <strong>{formData.company}</strong> and reach out via <strong>{formData.email}</strong> within 4 business hours with our standard mutual NDA.
                </p>
              </div>
            )}
          </div>

          {/* Emergency Hotline & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Incident Box */}
            <div id="emergency" className="p-8 rounded-3xl bg-rose-950/30 border border-rose-500/40 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>24/7 ACTIVE BREACH RESPONSE HOTLINE</span>
              </div>
              <h3 className="text-xl font-bold text-white">Suspect an active cyber incident?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you suspect ransomware deployment, unauthorized root compromise, or an ongoing data breach, our emergency digital forensics and containment team deploys under a 1-hour critical SLA.
              </p>
              <div className="p-4 rounded-xl bg-black/40 border border-rose-500/30 space-y-1 font-mono text-xs">
                <span className="text-rose-400 font-bold block">Emergency IR Hotline:</span>
                <span className="text-white text-sm font-extrabold">+44 (0) 20 8123 7990 / +1 (800) 492-7321</span>
                <span className="text-slate-400 block text-[10px] mt-1">Direct Encrypted Dispatch: breach@rawseclabs.com</span>
              </div>
            </div>

            {/* Direct Email & Regional Info */}
            <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/10 space-y-4 text-xs">
              <h4 className="font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
                Direct Channels
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>General Scoping: <strong>contact@rawseclabs.com</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Consulting Hours: <strong>24/7 Worldwide Operations</strong></span>
                </div>
              </div>
            </div>

            {/* PGP Block */}
            <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <Key className="w-4 h-4 text-cyan-400" />
                <span>Secure PGP Public Key</span>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-[10px] text-slate-400 break-all">
                Key ID: 0x9B4A82F15C02E41D<br />
                Fingerprint: 9B4A 82F1 5C02 E41D 77A8 D19C 3E6B 4410 99FE 2026
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
