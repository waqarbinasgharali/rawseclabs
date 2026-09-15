import React from 'react';
import type { Metadata } from 'next';
import InteractiveAssessment from '@/components/home/InteractiveAssessment';
import FaqSection from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'Pentest Scope Estimator & Assessment Calculator',
  description: 'Calculate your penetration testing duration, methodology, deliverables, and compliance timeline in 60 seconds with RawSecLabs.',
  alternates: {
    canonical: 'https://www.rawseclabs.com/assessment',
  },
};

export default function AssessmentPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#060911]">
      <InteractiveAssessment />
      <FaqSection />
    </div>
  );
}
