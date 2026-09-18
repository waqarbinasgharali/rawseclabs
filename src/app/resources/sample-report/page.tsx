import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, ShieldAlert, Download, Eye, Lock, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sample Report | RawSecLabs',
  description: 'See exactly what you receive with RawSecLabs penetration testing and security assessment deliverables.',
};

export default function SampleReportPage() {
  const deliverables = [
    {
      title: 'Executive Summary',
      description: 'Board-ready summary of key findings, risk levels, and business impact for C-suite stakeholders.',
      icon: FileText,
      features: ['Risk prioritisation matrix', 'Business impact analysis', 'Executive recommendations', 'Compliance status overview']
    },
    {
      title: 'Technical Findings Report',
      description: 'Detailed technical findings with CVSS scoring, exploitation evidence, and step-by-step reproduction.',
      icon: ShieldAlert,
      features: ['CVSS v3.1 scoring', 'Proof-of-concept exploitation', 'Screen captures and logs', 'Affected asset inventory']
    },
    {
      title: 'Remediation Guidance',
      description: 'Actionable remediation steps with code examples, configuration fixes, and priority timelines.',
      icon: CheckCircle,
      features: ['Step-by-step remediation', 'Code-level examples', 'Configuration guidance', 'Verification procedures']
    },
    {
      title: 'Compliance Mapping',
      description: 'Formal mapping of findings to relevant compliance frameworks for audit evidence.',
      icon: Lock,
      features: ['ISO 27001 controls', 'SOC 2 criteria', 'PCI DSS requirements', 'NIST CSF alignment']
    },
    {
      title: 'Live Debrief Session',
      description: 'Interactive walkthrough of findings with your technical team for immediate understanding.',
      icon: Eye,
      features: ['Technical Q&A', 'Exploitation demonstration', 'Remediation discussion', 'Knowledge transfer']
    },
    {
      title: 'Retest Verification',
      description: 'Verification of remediated critical and high findings with updated report status.',
      icon: AlertTriangle,
      features: ['Critical finding retest', 'Updated risk status', 'Remediation confirmation', 'Final sign-off']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060911]">
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#060911]">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Sample Report</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              See Exactly What You Receive
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Review our comprehensive security assessment deliverables. Our reports are designed for boards, auditors, and technical teams—no follow-up questions required.
            </p>
          </div>
        </div>
      </section>

      {/* Report Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Standard Deliverables</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Every engagement includes these core deliverables, formatted for immediate use by your stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 w-fit mb-4">
                  <deliverable.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{deliverable.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{deliverable.description}</p>
                
                <ul className="space-y-2">
                  {deliverable.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Format */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Report Format & Standards</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Industry-Standard Format:</strong> Reports follow OWASP, NIST, and PTES penetration testing standards for industry acceptance.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">CVSS v3.1 Scoring:</strong> All findings include Common Vulnerability Scoring System for consistent risk assessment.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Audit-Ready Evidence:</strong> Formal documentation suitable for ISO 27001, SOC 2, and PCI DSS auditors.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rose-400 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Secure Delivery:</strong> Reports delivered via encrypted channels with strict access controls.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report Structure */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Report Structure</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our reports follow a logical structure designed for different stakeholder needs.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Executive Summary', audience: 'C-Suite & Board', desc: 'High-level risk overview, business impact, and strategic recommendations' },
              { step: '02', title: 'Methodology & Scope', audience: 'Technical Leads', desc: 'Testing approach, scope boundaries, and methodology alignment' },
              { step: '03', title: 'Findings Summary', audience: 'All Stakeholders', desc: 'Prioritised findings matrix with severity levels and quick reference' },
              { step: '04', title: 'Detailed Technical Findings', audience: 'Technical Teams', desc: 'Comprehensive findings with exploitation evidence and technical details' },
              { step: '05', title: 'Remediation Guidance', audience: 'Development Teams', desc: 'Step-by-step remediation with code examples and verification steps' },
              { step: '06', title: 'Compliance Mapping', audience: 'Compliance Teams', desc: 'Formal mapping to relevant frameworks and regulatory requirements' },
              { step: '07', title: 'Appendices', audience: 'Technical Teams', desc: 'Technical details, tool outputs, and supporting documentation' }
            ].map((section, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5 flex items-start gap-4">
                <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400 font-mono">{section.step}</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{section.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{section.desc}</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                    <span>•</span>
                    <span>{section.audience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Sample */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Request a Sample Report</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contact us to receive a sample penetration testing report tailored to your industry and assessment type. See the quality and depth of our deliverables before committing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Request Sample Report</span>
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
              >
                <span>Get Assessment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
