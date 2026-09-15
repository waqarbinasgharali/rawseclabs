import HeroSection from '@/components/home/HeroSection';
import StatsTicker from '@/components/home/StatsTicker';
import ServiceMatrix from '@/components/home/ServiceMatrix';
import InteractiveAssessment from '@/components/home/InteractiveAssessment';
import FaqSection from '@/components/home/FaqSection';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsTicker />
      <ServiceMatrix />
      <InteractiveAssessment />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
