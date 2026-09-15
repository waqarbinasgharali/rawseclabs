export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
  featured: NavItem[];
}

export const MAIN_NAV = [
  { name: 'All Services', href: '/services' },
  { name: 'Security Domains', href: '/#categories' },
  { name: 'Scope Estimator', href: '/assessment' },
  { name: 'About RawSecLabs', href: '/about' },
  { name: 'Contact & Retainer', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { name: 'Web Application Pentest', href: '/services/penetration-testing/web-application-penetration-testing-uk' },
    { name: 'Red Team Assessment', href: '/services/red-team-adversary-simulation/red-team-assessment-services' },
    { name: 'Smart Contract Security', href: '/services/blockchain-web3-security/top-smart-contract-security-services' },
    { name: 'Cloud Pentest (AWS & GCP)', href: '/services/penetration-testing/amazon-web-services-penetration-testing' },
    { name: 'ISO 27001 Certification', href: '/services/compliance-audit/iso-27001-certification-services-in-the-uk' },
    { name: 'PCI DSS QSA Audits', href: '/services/compliance-audit/pci-dss-qsa-company' },
    { name: 'DORA TLPT Pentesting', href: '/services/data-protection-resilience/dora-tlpt-amp-penetration-testing-services' },
    { name: 'Rapid Incident Response', href: '/services/incident-response-forensics/rapid-incident-response-services' },
  ],
  company: [
    { name: 'About RawSecLabs', href: '/about' },
    { name: 'Our Methodology', href: '/about#methodology' },
    { name: 'Certifications & Accreditations', href: '/about#certifications' },
    { name: 'Security Scope Estimator', href: '/assessment' },
    { name: 'Schedule Pentest', href: '/contact' },
    { name: 'Emergency Incident Hotline', href: '/contact#emergency' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Rules of Engagement (RoE)', href: '/roe' },
    { name: 'Responsible Disclosure', href: '/disclosure' },
  ]
};
