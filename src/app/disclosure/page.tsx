import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  Mail, 
  CheckCircle2, 
  AlertTriangle, 
  Lock,
  Clock,
  Award,
  Globe2,
  Bug,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Responsible Disclosure Policy | RawSecLabs',
  description: 'RawSecLabs responsible disclosure policy for security researchers to report vulnerabilities in our systems and services.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/disclosure',
  },
};

export default function ResponsibleDisclosurePage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            RESPONSIBLE DISCLOSURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Vulnerability Disclosure Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            We value the work of security researchers in helping us keep our systems secure. This policy outlines how to responsibly report vulnerabilities in RawSecLabs systems and services.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                The security of our systems and user data is RawSecLabs' top priority. We appreciate the work of security researchers acting in good faith to identify and report potential vulnerabilities in our systems.
              </p>
              <p>
                This Responsible Disclosure Policy ("Policy") provides guidelines for security researchers to report vulnerabilities to us in a coordinated and responsible manner. By following this policy, researchers help us protect our users and maintain the security of our services.
              </p>
            </div>
          </div>
        </div>

        {/* What We Cover */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-cyan-400" />
            What This Policy Covers
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>This policy covers all internet-facing information systems, applications, or websites owned, operated, or controlled by RawSecLabs, including:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>rawseclabs.com</strong> and all subdomains</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Web applications and APIs hosted on our domains</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Client portals and assessment delivery platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>Mobile applications published by RawSecLabs</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              This policy does not cover third-party services, systems not owned by RawSecLabs, or vulnerabilities in client systems we assess as part of our services.
            </p>
          </div>
        </div>

        {/* Vulnerability Types */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Bug className="w-5 h-5 text-emerald-400" />
            Vulnerability Types We're Interested In
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>We are interested in technical vulnerabilities that could impact the security or privacy of our users, including but not limited to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Injection Attacks</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">SQL injection, command injection, LDAP injection</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Cross-Site Scripting (XSS)</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Reflected, stored, and DOM-based XSS</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Authentication Issues</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Weak authentication, session management flaws</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Authorization Bypass</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Privilege escalation, access control bypass</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Sensitive Data Exposure</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Data leakage, insecure data storage</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Configuration Issues</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Security misconfigurations, exposed services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safe Harbor */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-400" />
            Safe Harbor
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              If you follow this policy in good faith, RawSecLabs commits to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span><strong>Not pursue legal action</strong> against you for security research conducted in accordance with this policy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span><strong>Work with you</strong> to understand and resolve the issue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span><strong>Recognise your contribution</strong> if you request public acknowledgement</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Submit */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            How to Submit a Report
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>To submit a vulnerability report, please email us at:</p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
              <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400">contact@rawseclabs.com</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              For encrypted communication, you can use our PGP key:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">PGP Key Fingerprint:</span>
              9B4A 82F1 5C02 E41D 77A8  D19C 3E6B 4410 99FE 2026
            </div>
          </div>
        </div>

        {/* Report Requirements */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-400" />
            Report Requirements
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>To help us investigate and resolve issues quickly, please include the following information in your report:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Description:</strong> A clear description of the vulnerability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Steps to Reproduce:</strong> Detailed steps to reproduce the issue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Impact:</strong> Assessment of the potential impact</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Evidence:</strong> Screenshots, logs, or proof-of-concept code (if safe)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Contact Info:</strong> How we can reach you for follow-up</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-400" />
            Guidelines for Researchers
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Do:</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Report vulnerabilities through the designated channel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Provide sufficient information for us to reproduce the issue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Allow us reasonable time to investigate and respond</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Test only on systems covered by this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Use non-destructive testing methods</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Don't:</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                  <span>Access, modify, or delete data that is not your own</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                  <span>Use denial of service attacks or cause service disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                  <span>Access user accounts or data without authorisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                  <span>Disclose vulnerabilities publicly before we address them</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                  <span>Use social engineering or physical security testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            What to Expect From Us
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">48 hours</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Initial response acknowledging receipt</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">7 days</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Detailed assessment and next steps</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 text-center">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">Variable</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Remediation timeline based on severity</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We will keep you informed of our progress and notify you when the issue has been resolved. For high-severity issues, we will work on an accelerated timeline.
            </p>
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            Recognition
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We value the security research community and want to recognise valid contributions. If you discover a qualifying vulnerability and follow this policy, we offer:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Public acknowledgement</strong> in our security advisories (with your permission)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>Credit in security advisories</strong> and release notes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><strong>RawSecLabs swag</strong> for significant contributions</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We do not currently offer monetary bug bounties, but we recognise valuable contributions through acknowledgement and credit.
            </p>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Important Legal Notice</h3>
              <p>
                This policy is not a guarantee that we will not take legal action if you violate the law or our terms of service. Research must be conducted in good faith and within the bounds of this policy to qualify for safe harbor protection.
              </p>
              <p>
                If you are unsure whether your testing activity is permitted, please contact us first at contact@rawseclabs.com before proceeding.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Ready to Report a Vulnerability?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            Send your report to our security team. We appreciate your help in keeping our systems secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:contact@rawseclabs.com"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contact@rawseclabs.com</span>
            </a>
            <a
              href="mailto:contact@rawseclabs.com"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs hover:border-cyan-500/30 transition-colors"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>General Inquiries</span>
            </a>
          </div>
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
            <Link href="/roe" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <Lock className="w-4 h-4" />
              Rules of Engagement
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}