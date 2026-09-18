export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  services: string[];
  regulatory: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'financial-services',
    slug: 'financial-services',
    name: 'Financial Services',
    tagline: 'Banks, Fintech, PSPs & Crypto',
    description: 'Financial services remains the most cyber-targeted sector in the UK and globally. Banks, building societies, fintechs, payment service providers, and crypto-asset firms operate under intense regulatory scrutiny. RawSecLabs provides specialized cybersecurity for financial institutions.',
    icon: '🏦',
    services: [
      'Regulatory & Threat Landscape Assessment',
      'Compliance Foundation',
      'Penetration Testing Programme',
      'Threat-Led Testing',
      'Operational Resilience Testing',
      'Cloud Security Assessment'
    ],
    regulatory: ['FCA', 'PRA', 'Bank of England', 'SWIFT CSP', 'PCI DSS']
  },
  {
    id: 'public-sector',
    slug: 'public-sector',
    name: 'Public Sector',
    tagline: 'Government & Public Services',
    description: 'Public sector organisations face unique cyber threats while protecting critical infrastructure and citizen data. RawSecLabs provides comprehensive security solutions for government entities.',
    icon: '🏛️',
    services: [
      'NCSC CAF Assessment',
      'Public Sector Security Audits',
      'Incident Response Planning',
      'Supply Chain Security',
      'Data Protection Compliance'
    ],
    regulatory: ['NCSC', 'NIS Directive', 'GDPR', 'Cyber Essentials']
  },
  {
    id: 'ecommerce-retail',
    slug: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    tagline: 'Online Retail & Marketplaces',
    description: 'E-commerce platforms face constant threats from payment fraud, data breaches, and customer account takeovers. RawSecLabs provides specialized security for online retailers.',
    icon: '🛒',
    services: [
      'Payment Security Testing',
      'E-commerce Platform Security',
      'Customer Data Protection',
      'Fraud Detection Systems',
      'API Security Testing'
    ],
    regulatory: ['PCI DSS', 'GDPR', 'PSD2', 'SOX']
  },
  {
    id: 'education-research',
    slug: 'education-research',
    name: 'Education & Research',
    tagline: 'Universities & Research Institutions',
    description: 'Educational institutions handle sensitive research data and personal information while managing open campus networks. RawSecLabs provides security solutions for educational institutions.',
    icon: '🎓',
    services: [
      'Research Data Protection',
      'Campus Network Security',
      'Student Information System Security',
      'Academic Platform Audits',
      'Phishing & Awareness Training'
    ],
    regulatory: ['GDPR', 'FERPA', 'NCSC Guidelines']
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Hospitals & Medical Services',
    description: 'Healthcare organisations protect sensitive patient data and critical medical systems from sophisticated cyber threats. RawSecLabs provides specialized security for healthcare providers.',
    icon: '🏥',
    services: [
      'Medical Device Security',
      'Patient Data Protection',
      'HIPAA/GDPR Compliance',
      'Hospital Network Security',
      'Healthcare Application Security'
    ],
    regulatory: ['HIPAA', 'GDPR', 'NIST', 'ISO 27001']
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality',
    tagline: 'Hotels & Travel Services',
    description: 'Hospitality sector processes vast amounts of customer payment and personal data across diverse digital platforms. RawSecLabs provides security solutions for hospitality businesses.',
    icon: '🏨',
    services: [
      'Payment System Security',
      'Guest Data Protection',
      'Property Management System Security',
      'IoT Device Security',
      'Loyalty Program Security'
    ],
    regulatory: ['PCI DSS', 'GDPR', 'CCPA']
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    tagline: 'Industrial & Manufacturing',
    description: 'Manufacturing and industrial organisations face threats to operational technology and intellectual property. RawSecLabs provides specialized security for industrial operations.',
    icon: '🏭',
    services: [
      'OT/ICS Security',
      'Industrial Control System Testing',
      'Supply Chain Security',
      'Intellectual Property Protection',
      'Smart Factory Security'
    ],
    regulatory: ['NIST', 'IEC 62443', 'ISO 27001']
  },
  {
    id: 'saas-technology',
    slug: 'saas-technology',
    name: 'SaaS & Technology',
    tagline: 'Software Companies & Tech Startups',
    description: 'SaaS companies and technology firms require continuous security testing to protect customer data and maintain trust. RawSecLabs provides specialized security for technology companies.',
    icon: '💻',
    services: [
      'SaaS Security Testing',
      'Cloud Infrastructure Security',
      'API Security Assessment',
      'DevSecOps Integration',
      'Continuous Security Monitoring'
    ],
    regulatory: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA']
  }
];
