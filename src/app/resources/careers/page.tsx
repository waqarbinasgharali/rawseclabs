import Link from 'next/link';
import { ArrowRight, Users, MapPin, Clock, ShieldAlert, Code, AlertTriangle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | RawSecLabs',
  description: 'Join RawSecLabs - senior-led cybersecurity consulting with real technical depth and no junior pass-through.',
};

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Penetration Tester',
      practice: 'Offensive Security',
      location: 'London / Hybrid',
      type: 'Full-time',
      level: 'Senior',
      description: 'Lead penetration testing engagements across web, network, and cloud. Industry-standard methodology following NIST and OWASP frameworks. Senior consultants only, no junior pass-through team.',
      requirements: [
        '3+ years hands-on penetration testing experience',
        'OSCP, OSCE, or equivalent certification',
        'Web application, network, and cloud security expertise',
        'Strong report writing and client communication skills'
      ]
    },
    {
      title: 'Enterprise Cyber Security & Compliance Consultant',
      practice: 'Compliance',
      location: 'London / Hybrid',
      type: 'Full-time',
      level: 'Senior',
      description: 'Deliver PCI DSS compliance mapping and pre-audit assessments across UK, US, and Middle East. Mix of gap assessments, readiness reviews, and technical compliance testing.',
      requirements: [
        'Deep familiarity with the PCI DSS framework and audit requirements',
        '3+ years PCI DSS compliance experience',
        'Experience with retail, fintech, or payment processing',
        'Strong audit and documentation skills'
      ]
    },
    {
      title: 'Senior Incident Response Consultant',
      practice: 'Incident Response',
      location: 'London / On-call',
      type: 'Full-time',
      level: 'Senior',
      description: 'Lead investigations across ransomware, BEC, data exfiltration, and post-breach forensics. Retainer client base plus emergency response.',
      requirements: [
        '5+ years incident response experience',
        'GCIH, GCFA, or equivalent certifications',
        'Hands-on SIEM and EDR tool experience',
        'Strong crisis communication skills'
      ]
    },
    {
      title: 'SOC 2 / ISO 27001 Consultant',
      practice: 'Compliance',
      location: 'London / Hybrid',
      type: 'Full-time',
      level: 'Mid-Senior',
      description: 'Lead SOC 2 and ISO 27001 programmes for SaaS, fintech, and regulated tech firms. Combined-framework delivery, evidence reuse across audits.',
      requirements: [
        '2+ years compliance consulting experience',
        'SOC 2 and ISO 27001 practical implementation',
        'Experience with SaaS and technology companies',
        'Strong project management and client skills'
      ]
    },
    {
      title: 'Mid-Level Penetration Tester',
      practice: 'Offensive Security',
      location: 'Karachi & Islamabad',
      type: 'Full-time',
      level: 'Mid-Level',
      description: 'Join our penetration testing team working across web applications, mobile apps, and network security assessments.',
      requirements: [
        '2+ years penetration testing experience',
        'Web application and mobile security expertise',
        'Network penetration testing and AD experience',
        'Good communication and reporting skills'
      ]
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
              <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Careers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Senior-Led, Technically Rigorous, Real Client Work
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              We hire people who treat cybersecurity as a craft and want to spend their career deepening it. Real client engagements, real technical depth, no junior pass-through.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Send Your CV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Working at RawSecLabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Working at RawSecLabs</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We are a senior-led consulting practice. That means real client engagements, real technical depth, and no junior pass-through. If you want to spend more time doing the work and less time managing handovers, we are the kind of place worth a conversation.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Our team works across financial services, healthcare, SaaS, and regulated sectors worldwide. From London to Karachi, we collaborate as one technical team.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Benefits & The Practical Stuff</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldAlert className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>Competitive compensation tied to experience and impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span>Flexible working arrangements and remote options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>Continuous technical development and training budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-rose-400 mt-0.5" />
                  <span>Collaborative, ego-free technical culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Roles We're Hiring</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We hire continuously across penetration testing, compliance consulting, and incident response. If you don't see your exact role listed but think you'd be a fit, send us your CV.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                        {position.practice}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {position.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{position.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{position.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-slate-200 dark:border-white/10 pt-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How to Apply</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Send your CV to <a href="mailto:info@rawseclabs.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">info@rawseclabs.com</a> with the role title in the subject line. We review every application and respond within a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@rawseclabs.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors"
              >
                <span>Send Your CV</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
              >
                <span>General Inquiries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
