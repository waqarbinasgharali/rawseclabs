import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Gavel,
  Clock,
  CreditCard,
  Users,
  Globe2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | RawSecLabs',
  description: 'Terms of Service governing the use of RawSecLabs website, cybersecurity services, and client engagements.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Gavel className="w-3.5 h-3.5" />
            TERMS OF SERVICE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Last updated: September 2026 | Effective date: September 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of the RawSecLabs website (www.rawseclabs.com) and our cybersecurity consulting services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Important Notice</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                For professional cybersecurity services, including penetration testing, compliance audits, and advisory services, a separate Statement of Work (SOW) or Master Services Agreement (MSA) will be executed. Those agreements, together with these Terms for website usage, govern our relationship. In case of conflict, the service-specific agreement shall prevail for service-related matters.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-6 rounded-2xl bg-slate-100 dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><a href="#acceptance" className="hover:text-cyan-600 dark:hover:text-cyan-400">1. Acceptance of Terms</a></li>
            <li><a href="#changes" className="hover:text-cyan-600 dark:hover:text-cyan-400">2. Changes to Terms</a></li>
            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400">3. Description of Services</a></li>
            <li><a href="#user-obligations" className="hover:text-cyan-600 dark:hover:text-cyan-400">4. User Obligations</a></li>
            <li><a href="#acceptable-use" className="hover:text-cyan-600 dark:hover:text-cyan-400">5. Acceptable Use Policy</a></li>
            <li><a href="#intellectual-property" className="hover:text-cyan-600 dark:hover:text-cyan-400">6. Intellectual Property</a></li>
            <li><a href="#confidentiality" className="hover:text-cyan-600 dark:hover:text-cyan-400">7. Confidentiality</a></li>
            <li><a href="#fees-payment" className="hover:text-cyan-600 dark:hover:text-cyan-400">8. Fees and Payment</a></li>
            <li><a href="#termination" className="hover:text-cyan-600 dark:hover:text-cyan-400">9. Termination</a></li>
            <li><a href="#disclaimer" className="hover:text-cyan-600 dark:hover:text-cyan-400">10. Disclaimer of Warranties</a></li>
            <li><a href="#limitation" className="hover:text-cyan-600 dark:hover:text-cyan-400">11. Limitation of Liability</a></li>
            <li><a href="#indemnification" className="hover:text-cyan-600 dark:hover:text-cyan-400">12. Indemnification</a></li>
            <li><a href="#governing-law" className="hover:text-cyan-600 dark:hover:text-cyan-400">13. Governing Law and Jurisdiction</a></li>
            <li><a href="#dispute-resolution" className="hover:text-cyan-600 dark:hover:text-cyan-400">14. Dispute Resolution</a></li>
            <li><a href="#general" className="hover:text-cyan-600 dark:hover:text-cyan-400">15. General Provisions</a></li>
          </ul>
        </div>

        {/* Acceptance */}
        <section id="acceptance" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            1. Acceptance of Terms
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our services on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.
            </p>
          </div>
        </section>

        {/* Changes */}
        <section id="changes" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            2. Changes to Terms
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our website and services after such changes constitutes acceptance of the modified Terms.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            3. Description of Services
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              RawSecLabs provides the following services:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Penetration Testing:</strong> Web application, network, API, cloud, and mobile security assessments
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Adversary Simulation:</strong> Red team exercises and threat emulation services
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Blockchain & Web3 Security:</strong> Smart contract audits and protocol security assessments
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Compliance & Audit:</strong> ISO 27001, PCI DSS, SOC 2, DORA, and regulatory compliance services
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Incident Response:</strong> Rapid response to security incidents and forensic investigations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Security Advisory:</strong> Strategic consulting and security program development
                </div>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Specific deliverables, scope, timelines, and fees for professional services are governed by separate Statements of Work or Master Services Agreement.
            </p>
          </div>
        </section>

        {/* User Obligations */}
        <section id="user-obligations" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            4. User Obligations
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>As a user of our services, you agree to:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Provide accurate, complete, and current information during engagement scoping</li>
              <li>Obtain all necessary authorisations for testing of systems you do not own</li>
              <li>Maintain appropriate backup procedures before testing begins</li>
              <li>Designate appropriate technical contacts for coordination during testing</li>
              <li>Notify us immediately of any unintended consequences during testing</li>
              <li>Pay all fees in accordance with agreed payment terms</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>
        </section>

        {/* Acceptable Use */}
        <section id="acceptable-use" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            5. Acceptable Use Policy
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>You may not use our services to:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Test systems without explicit written authorisation from the system owner</li>
              <li>Conduct denial of service attacks or any testing that could cause service disruption</li>
              <li>Access, modify, or destroy data beyond the agreed scope</li>
              <li>Use our services for any illegal or unauthorised purpose</li>
              <li>Violate any applicable local, state, national, or international law</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorised access to our systems or third-party systems</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Violation of this Acceptable Use Policy may result in immediate termination of services and reporting to appropriate authorities.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual-property" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            6. Intellectual Property
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Our Intellectual Property</h3>
              <p>
                All content, materials, tools, methodologies, and deliverables provided by RawSecLabs, including but not limited to our website, reports, documentation, software, and proprietary methodologies, remain our exclusive intellectual property unless otherwise agreed in writing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Client Intellectual Property</h3>
              <p>
                You retain all rights to your systems, data, and intellectual property. Our services do not transfer ownership of your intellectual property to us. Deliverables are licensed to you for internal business use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Deliverable License</h3>
              <p>
                Upon full payment, we grant you a non-exclusive, non-transferable license to use the deliverables for your internal business purposes. You may not redistribute, resell, or use deliverables to provide competing services without our written consent.
              </p>
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section id="confidentiality" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-400" />
            7. Confidentiality
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Both parties agree to maintain the confidentiality of all non-public information disclosed during the course of our engagement. This includes, but is not limited to, technical information, business processes, security findings, and any other proprietary information.
            </p>
            <p>
              Our standard engagement includes a mutual Non-Disclosure Agreement (NDA). Specific confidentiality obligations are detailed in the service-specific agreement. We implement appropriate technical and organisational measures to protect your confidential information.
            </p>
          </div>
        </section>

        {/* Fees and Payment */}
        <section id="fees-payment" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-rose-400" />
            8. Fees and Payment
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fees</h3>
              <p>
                Service fees are specified in the Statement of Work or quotation provided. Fees are typically quoted in GBP, USD, or EUR as agreed. Fees may be fixed-price, time-and-materials, or retainer-based depending on the service type.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Payment Terms</h3>
              <p>
                Standard payment terms are 30 days from invoice date. For new clients, we may require advance payment or milestone-based billing. Late payments may incur interest at the statutory maximum rate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Additional Costs</h3>
              <p>
                Additional costs may include travel expenses, third-party tool licensing, and out-of-scope work. These will be agreed upon in advance and documented in the SOW.
              </p>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section id="termination" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-400" />
            9. Termination
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Either party may terminate the engagement with written notice. Termination provisions, including notice periods and termination fees, are specified in the service-specific agreement.
            </p>
            <p>
              Upon termination, you shall pay all fees for work performed and expenses incurred. We will return or destroy your confidential information as agreed. Survival clauses, including confidentiality, intellectual property, and limitation of liability, shall continue after termination.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            10. Disclaimer of Warranties
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
              <li>ACCURACY, COMPLETENESS, OR RELIABILITY OF SERVICES</li>
              <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
              <li>SECURITY OF INFORMATION TRANSMITTED TO US</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Security testing cannot guarantee absolute security. Our services assess security posture at a point in time and do not guarantee protection against all threats.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section id="limitation" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-400" />
            11. Limitation of Liability
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RAWSECLABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS INTERRUPTION, OR OTHER LOSSES, ARISING FROM OR RELATING TO OUR SERVICES.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM SHALL BE LIMITED TO THE FEES PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM. THIS LIMITATION APPLIES TO THE MAXIMUM EXTENT PERMITTED BY LAW AND MAY NOT APPLY IN CERTAIN JURISDICTIONS.
            </p>
          </div>
        </section>

        {/* Indemnification */}
        <section id="indemnification" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-cyan-400" />
            12. Indemnification
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              You agree to indemnify, defend, and hold harmless RawSecLabs, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any unauthorised testing activities</li>
            </ul>
          </div>
        </section>

        {/* Governing Law */}
        <section id="governing-law" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            13. Governing Law and Jurisdiction
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section id="dispute-resolution" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
            14. Dispute Resolution
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              In the event of a dispute, we encourage good faith negotiation to resolve the issue. If negotiation fails, disputes may be resolved through mediation or arbitration as specified in the service-specific agreement. Litigation shall be a last resort.
            </p>
          </div>
        </section>

        {/* General Provisions */}
        <section id="general" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            15. General Provisions
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Entire Agreement:</strong> These Terms, together with any service-specific agreements, constitute the entire agreement between us.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Severability:</strong> If any provision is found invalid, the remaining provisions shall continue in full force.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Assignment:</strong> You may not assign your rights under these Terms without our written consent.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Questions About These Terms?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            If you have questions about these Terms of Service, please contact our legal team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition-colors"
          >
            <span>Contact Legal Team</span>
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
            <Link href="/roe" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <FileText className="w-4 h-4" />
              Rules of Engagement
            </Link>
            <Link href="/disclosure" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <ShieldAlert className="w-4 h-4" />
              Responsible Disclosure
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}