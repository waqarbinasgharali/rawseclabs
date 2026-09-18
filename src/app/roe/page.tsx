import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Clock,
  Target,
  Lock,
  Users,
  Globe2,
  MapPin,
  Calendar,
  Ban
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rules of Engagement (RoE) | RawSecLabs',
  description: 'Standardized Rules of Engagement framework for penetration testing and security assessments by RawSecLabs.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/roe',
  },
};

export default function RulesOfEngagementPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            RULES OF ENGAGEMENT
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Rules of Engagement
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            The framework that defines what is permitted during RawSecLabs security assessments. These rules protect both the tester and the client, ensuring assessments are conducted legally, ethically, and effectively.
          </p>
        </div>

        {/* Legal Notice */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Legal Authorization Required</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                A penetration test without written authorization is, legally speaking, unauthorised access. The only thing separating a contracted tester from an attacker is a signed document that says who may test what, when, and how far they may go. Every RawSecLabs engagement begins with a signed Rules of Engagement document.
              </p>
            </div>
          </div>
        </div>

        {/* What is RoE */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            What is a Rules of Engagement Document?
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              A Rules of Engagement (RoE) document is the written agreement between a penetration tester and the organisation being tested. It defines the boundaries of the test before any testing begins: which targets and techniques are in scope, which are explicitly out of scope, the testing window, and the constraints the tester must respect.
            </p>
            <p>
              Critically, it contains the authorisation — sometimes called the "get-out-of-jail" statement — in which the system owner formally permits the testing activity. That signature is what makes a penetration test lawful rather than an intrusion.
            </p>
          </div>
        </div>

        {/* Core Components */}
        <div className="mb-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Framework Structure</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Core Components of Our RoE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Scope Definition</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear identification of in-scope assets (IP ranges, domains, applications) and explicit out-of-scope exclusions to prevent unauthorised testing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 w-fit">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Testing Window</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Specific dates, times, and time zones when testing is permitted, with clear start and end boundaries to avoid business disruption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 w-fit">
                <Ban className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Prohibited Activities</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Explicit list of techniques that are not allowed (DoS, social engineering, physical access) unless separately authorised.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 w-fit">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Emergency Contacts</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                24/7 contact information for both client and RawSecLabs teams to handle unexpected situations immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed RoE Framework */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            Standard RawSecLabs RoE Framework
          </h2>

          <div className="space-y-6">
            {/* Authorization */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                1. Authorization
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Authorized Tester:</strong> RawSecLabs Limited and designated consultants</p>
                <p><strong>Client Authorization:</strong> Written authorisation from authorised signatory</p>
                <p><strong>Legal Basis:</strong> Contractual authorisation for security testing</p>
                <p><strong>Scope Owner:</strong> Designated client representative with authority over tested assets</p>
              </div>
            </div>

            {/* Testing Scope */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                2. Testing Scope
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>In-Scope Assets:</strong> Specifically listed IP ranges, domains, applications, and systems</p>
                <p><strong>Out-of-Scope Assets:</strong> Explicitly excluded systems, third-party services, production databases</p>
                <p><strong>Testing Types:</strong> Defined test methods (black-box, grey-box, white-box)</p>
                <p><strong>Attack Vectors:</strong> Permitted techniques and prohibited methodologies</p>
              </div>
            </div>

            {/* Temporal Boundaries */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400" />
                3. Temporal Boundaries
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Testing Period:</strong> Start date and end date for the engagement</p>
                <p><strong>Testing Hours:</strong> Permitted testing hours (e.g., 09:00-17:00 GMT)</p>
                <p><strong>Testing Days:</strong> Business days only vs. 24/7 testing permitted</p>
                <p><strong>Time Zone:</strong> All times in specified time zone (typically GMT or client local time)</p>
              </div>
            </div>

            {/* Safety Controls */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                4. Safety Controls
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Stop Conditions:</strong> Immediate testing stop if system impact detected</p>
                <p><strong>Rate Limiting:</strong> Maximum request rates to avoid service disruption</p>
                <p><strong>Production Impact:</strong> Non-destructive testing unless explicitly authorised</p>
                <p><strong>Data Handling:</strong> No access to, modification, or exfiltration of production data</p>
              </div>
            </div>

            {/* Communication */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                5. Communication Protocol
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Primary Contact:</strong> Client technical lead for operational coordination</p>
                <p><strong>Emergency Contact:</strong> 24/7 contact for critical issues</p>
                <p><strong>Reporting:</strong> Critical findings reported immediately, non-critical in final report</p>
                <p><strong>Escalation:</strong> Defined escalation path for disputes or issues</p>
              </div>
            </div>

            {/* Data Handling */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                6. Data Handling & Confidentiality
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Test Data:</strong> Use of test data only, no production data access</p>
                <p><strong>Findings Storage:</strong> Encrypted storage of all test data and findings</p>
                <p><strong>Report Distribution:</strong> Limited to authorised recipients only</p>
                <p><strong>Data Retention:</strong> Defined retention period for test data and reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explicit Approvals */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            Activities Requiring Explicit Approval
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>The following high-risk activities require separate, explicit written approval and are not included in standard RoE:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-400 mt-0.5" />
                <span><strong>Social Engineering:</strong> Phishing, vishing, or physical security testing</span>
              </li>
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-400 mt-0.5" />
                <span><strong>Physical Access:</strong> On-site testing or physical security assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-400 mt-0.5" />
                <span><strong>Denial of Service:</strong> Any testing that could cause service disruption</span>
              </li>
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-400 mt-0.5" />
                <span><strong>Production Data Access:</strong> Access to or modification of live production data</span>
              </li>
              <li className="flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-400 mt-0.5" />
                <span><strong>Destructive Testing:</strong> Any testing that could cause data loss or system damage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology Alignment */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            Methodology Alignment
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Our RoE framework aligns with industry-standard methodologies and frameworks:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white">PTES</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Penetration Testing Execution Standard</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white">OWASP</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Web Security Testing Guide</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white">OSSTMM</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Open Source Security Testing Methodology</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Industry Standard</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Standard Ethical Hacking Methodologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Responsibilities */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            Client Responsibilities
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Provide accurate and complete scope information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Ensure proper backup of critical systems before testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Designate technical contacts for coordination</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Notify relevant stakeholders about testing activities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Provide necessary access credentials for grey/white-box testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Review and sign the RoE document before testing begins</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Ready to Define Your Rules of Engagement?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            Every engagement begins with a scoping call to define your RoE. Book a 30-minute consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition-colors"
          >
            <span>Book Scoping Call</span>
            <ShieldAlert className="w-4 h-4" />
          </Link>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Related Legal Documents</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <ShieldAlert className="w-4 h-4" />
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <FileText className="w-4 h-4" />
              Terms of Service
            </Link>
            <Link href="/disclosure" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <Lock className="w-4 h-4" />
              Responsible Disclosure
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}