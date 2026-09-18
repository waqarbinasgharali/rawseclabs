import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  Scale, 
  FileText, 
  CheckCircle2, 
  Building2,
  Globe2,
  Lock,
  Users,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal & Governance | RawSecLabs',
  description: 'RawSecLabs legal framework, governance policies, and compliance standards for cybersecurity services.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/legal-governance',
  },
};

export default function LegalGovernancePage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Scale className="w-3.5 h-3.5" />
            LEGAL & GOVERNANCE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Legal Framework & Governance
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            RawSecLabs operates under a comprehensive legal and governance framework aligned with international cybersecurity standards, regulatory requirements, and industry best practices.
          </p>
        </div>

        {/* Governance Framework */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Our Framework</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Governance Structure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 w-fit">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Corporate Governance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                RawSecLabs Limited is registered in the United Kingdom at 124 City Road, London, EC1V 2NX. The company operates under UK company law and maintains appropriate corporate governance structures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 w-fit">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Security Governance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Our security governance framework aligns with NIST Cybersecurity Framework, ISO 27001, and industry best practices for offensive security service providers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Data Governance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Data handling practices governed by GDPR, UK Data Protection Act 2018, and applicable international data protection regulations with robust data classification and access controls.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Compliance Alignment</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Regulatory & Industry Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                International Standards
              </h3>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>ISO 27001:2022</strong> - Information Security Management System certified by UKAS-accredited body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>ISO 9001:2015</strong> - Quality Management System for consistent service delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Industry Frameworks</strong> - All operations align with globally recognized penetration testing best practices (OSSTMM, OWASP, and NIST).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>PCI DSS Standards</strong> - Technical testing maps directly to the PCI Security Standards Council controls to facilitate client compliance.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-emerald-400" />
                Regional Compliance
              </h3>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>UK GDPR & Data Protection Act 2018</strong> - Full compliance for UK data processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>EU GDPR</strong> - Compliance for EU data subjects with appropriate data transfer mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>DORA</strong> - Digital Operational Resilience Act compliance for financial sector clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>NIST CSF & SP 800-115</strong> - US federal standards alignment for American clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Policies */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Key Documents</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Legal Policies & Agreements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/privacy" className="group p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    How we collect, use, and protect your personal data in compliance with GDPR and other data protection regulations.
                  </p>
                  <div className="flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    <span>View policy</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/terms" className="group p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    Terms governing the use of our website, services, and engagement conditions for professional security assessments.
                  </p>
                  <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>View terms</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/roe" className="group p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-rose-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    Rules of Engagement (RoE)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    Standardized rules of engagement framework for penetration testing and security assessments.
                  </p>
                  <div className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 font-medium">
                    <span>View RoE</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/disclosure" className="group p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Responsible Disclosure
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    Policy for security researchers to responsibly report vulnerabilities in our systems and services.
                  </p>
                  <div className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 font-medium">
                    <span>View policy</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Security & Data Protection */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Security Commitments</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Data Protection & Security</h2>
          </div>

          <div className="p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Data Protection Principles</h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Lawful, fair, and transparent processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Purpose limitation and data minimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Accuracy and data quality maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Storage limitation and retention policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Integrity and confidentiality by design</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Security Measures</h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>End-to-end encryption for sensitive data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Strict access controls and authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Comprehensive incident response procedures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Staff security training and awareness programs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                RawSecLabs maintains appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including pseudonymisation and encryption of personal data, the ability to ensure the ongoing confidentiality, integrity, availability, and resilience of processing systems and services, the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident, and a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Legal & Governance Inquiries</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                For questions about our legal framework, compliance, or governance practices, please contact our legal team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Contact Legal Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}