import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  Lock, 
  Eye, 
  Trash2, 
  Download,
  Mail,
  FileText,
  CheckCircle2,
  Globe2,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | RawSecLabs',
  description: 'RawSecLabs privacy policy compliant with GDPR, UK Data Protection Act, and international data protection regulations.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Lock className="w-3.5 h-3.5" />
            PRIVACY POLICY
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Last updated: September 2026 | Effective date: September 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            RawSecLabs Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.rawseclabs.com) or use our cybersecurity consulting services. This policy complies with the General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and applicable international data protection laws.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-6 rounded-2xl bg-slate-100 dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><a href="#controller" className="hover:text-cyan-600 dark:hover:text-cyan-400">1. Data Controller Information</a></li>
            <li><a href="#collection" className="hover:text-cyan-600 dark:hover:text-cyan-400">2. Information We Collect</a></li>
            <li><a href="#usage" className="hover:text-cyan-600 dark:hover:text-cyan-400">3. How We Use Your Information</a></li>
            <li><a href="#legal-basis" className="hover:text-cyan-600 dark:hover:text-cyan-400">4. Legal Basis for Processing</a></li>
            <li><a href="#disclosure" className="hover:text-cyan-600 dark:hover:text-cyan-400">5. Information Disclosure</a></li>
            <li><a href="#transfers" className="hover:text-cyan-600 dark:hover:text-cyan-400">6. International Data Transfers</a></li>
            <li><a href="#security" className="hover:text-cyan-600 dark:hover:text-cyan-400">7. Data Security</a></li>
            <li><a href="#retention" className="hover:text-cyan-600 dark:hover:text-cyan-400">8. Data Retention</a></li>
            <li><a href="#rights" className="hover:text-cyan-600 dark:hover:text-cyan-400">9. Your Data Protection Rights</a></li>
            <li><a href="#cookies" className="hover:text-cyan-600 dark:hover:text-cyan-400">10. Cookies and Tracking</a></li>
            <li><a href="#children" className="hover:text-cyan-600 dark:hover:text-cyan-400">11. Children's Privacy</a></li>
            <li><a href="#changes" className="hover:text-cyan-600 dark:hover:text-cyan-400">12. Changes to This Policy</a></li>
            <li><a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">13. Contact Us</a></li>
          </ul>
        </div>

        {/* Data Controller */}
        <section id="controller" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
            1. Data Controller Information
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p><strong>Company Name:</strong> RawSecLabs Limited</p>
            <p><strong>Registered Address:</strong> Toronto, Ontario, Canada</p>
            <p><strong>Company Registration:</strong> Registered in Canada</p>
            <p><strong>Data Protection Officer Contact:</strong> info@rawseclabs.com</p>
            <p><strong>General Contact:</strong> contact@rawseclabs.com</p>
          </div>
        </section>

        {/* Information Collection */}
        <section id="collection" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-400" />
            2. Information We Collect
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Personal Data You Provide</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Professional information (job title, company size, industry)</li>
                <li>Communication preferences and marketing consent</li>
                <li>Project scoping information and service requirements</li>
                <li>Payment and billing information (processed through secure payment processors)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automatically Collected Information</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>IP address and geolocation data</li>
                <li>Browser type, operating system, and device information</li>
                <li>Website usage data (pages visited, time spent, click patterns)</li>
                <li>Referring website information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Client Engagement Data</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Technical assessment data and findings (encrypted and securely stored)</li>
                <li>Project documentation and deliverables</li>
                <li>Communication records related to service delivery</li>
                <li>Compliance and audit documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-400" />
            3. How We Use Your Information
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>We use your information for the following purposes:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Service Delivery:</strong> To provide cybersecurity consulting, penetration testing, and compliance services</li>
              <li><strong>Communication:</strong> To respond to enquiries, provide project updates, and deliver service communications</li>
              <li><strong>Billing:</strong> To process payments and issue invoices for services rendered</li>
              <li><strong>Compliance:</strong> To maintain regulatory compliance and audit records</li>
              <li><strong>Security:</strong> To protect our systems, clients, and prevent fraudulent activities</li>
              <li><strong>Marketing:</strong> With your consent, to send relevant security insights and service updates</li>
              <li><strong>Improvement:</strong> To analyse usage patterns and improve our services</li>
              <li><strong>Legal Obligations:</strong> To comply with legal and regulatory requirements</li>
            </ul>
          </div>
        </section>

        {/* Legal Basis */}
        <section id="legal-basis" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
            4. Legal Basis for Processing (GDPR)
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>We process your personal data on the following legal bases under GDPR:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Contract Performance:</strong> Processing necessary for the performance of our service contracts and pre-contractual enquiries
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Legitimate Interests:</strong> For business development, security monitoring, fraud prevention, and service improvement, balanced against your rights
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Legal Obligation:</strong> To comply with legal and regulatory requirements, including tax, accounting, and data protection laws
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Consent:</strong> For marketing communications, newsletter subscriptions, and non-essential cookies (withdrawable at any time)
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Disclosure */}
        <section id="disclosure" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-purple-400" />
            5. Information Disclosure
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>We may share your information with the following categories of third parties:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Service Providers:</strong> Cloud infrastructure providers, payment processors, email service providers, and other third-party services essential to our operations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Professional Advisors:</strong> Legal counsel, accountants, and other professional advisors as necessary
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Regulatory Authorities:</strong> When required by law, court order, or regulatory request
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business
                </div>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We do not sell your personal data to third parties for their marketing purposes. All third-party processors are subject to appropriate data processing agreements and security standards.
            </p>
          </div>
        </section>

        {/* International Transfers */}
        <section id="transfers" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            6. International Data Transfers
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Your information may be transferred to and processed in countries other than the country in which you reside. These transfers may involve countries that do not provide the same level of data protection as your home jurisdiction.
            </p>
            <p>
              When we transfer your data internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions where the destination has been recognised as providing adequate protection</li>
              <li>Binding corporate rules for intra-group transfers</li>
              <li>Other appropriate legal mechanisms under applicable data protection laws</li>
            </ul>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-rose-400" />
            7. Data Security
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Encryption of data at rest and in transit using industry-standard protocols</li>
              <li>Strict access controls and authentication mechanisms</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Secure data storage and processing environments</li>
              <li>Staff training and security awareness programs</li>
              <li>Incident response and business continuity procedures</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Despite our security measures, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal data, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Retention */}
        <section id="retention" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            8. Data Retention
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We retain your personal data only for as long as necessary for the purposes for which it was collected, unless a longer retention period is required or permitted by law.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Enquiry Data:</strong> Retained for 2 years from last contact, or longer if a business relationship is established
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Client Data:</strong> Retained for the duration of the business relationship plus 7 years for legal and tax purposes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Assessment Data:</strong> Retained according to project requirements and client agreements, typically 1-3 years
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <strong>Marketing Data:</strong> Retained until consent is withdrawn or the purpose is no longer served
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Rights */}
        <section id="rights" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-purple-400" />
            9. Your Data Protection Rights
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>Under GDPR and applicable data protection laws, you have the following rights:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Access</strong>
                </div>
                <p className="text-xs">Request access to your personal data and information about how we process it.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Rectification</strong>
                </div>
                <p className="text-xs">Request correction of inaccurate or incomplete personal data.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Erasure</strong>
                </div>
                <p className="text-xs">Request deletion of your personal data (the "right to be forgotten").</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-4 h-4 text-purple-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Portability</strong>
                </div>
                <p className="text-xs">Request transfer of your data to another controller in a structured format.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Restrict</strong>
                </div>
                <p className="text-xs">Request restriction of processing under certain conditions.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <strong className="text-slate-900 dark:text-white">Right to Object</strong>
                </div>
                <p className="text-xs">Object to processing based on legitimate interests or direct marketing.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              To exercise these rights, please contact us at info@rawseclabs.com. We will respond to your request within 30 days, unless extended by law for complex requests.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section id="cookies" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            10. Cookies and Tracking
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities on our website. Cookies are small text files stored on your device that help us provide better functionality and analyse usage patterns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Essential Cookies:</strong> Required for basic website functionality and security. These cannot be disabled.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website to improve performance and user experience.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track marketing campaign effectiveness (with consent).
                </div>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section id="children" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-purple-400" />
            11. Children's Privacy
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information.
            </p>
          </div>
        </section>

        {/* Changes */}
        <section id="changes" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            12. Changes to This Policy
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-8 p-6 rounded-2xl bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-emerald-400" />
            13. Contact Us
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              If you have any questions about this Privacy Policy, our data practices, or your rights, please contact us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span><strong>Email:</strong> info@rawseclabs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                <span><strong>Address:</strong> Toronto, Ontario, Canada</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              If you are located in the European Economic Area, you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>
        </section>

        {/* Additional Resources */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Related Legal Documents</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <FileText className="w-4 h-4" />
              Terms of Service
            </Link>
            <Link href="/roe" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <ShieldAlert className="w-4 h-4" />
              Rules of Engagement
            </Link>
            <Link href="/disclosure" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#090e1b] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 transition-colors">
              <Lock className="w-4 h-4" />
              Responsible Disclosure
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}