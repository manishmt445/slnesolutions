import React from 'react';
import { Hero } from '../components/home/Hero';
import { CompanyStats } from '../components/home/CompanyStats';
import { AboutSection } from '../components/home/AboutSection';
import { VisionMission } from '../components/home/VisionMission';
import { ServicesSection } from '../components/home/ServicesSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CoreValuesSection } from '../components/home/CoreValuesSection';
import { CtaBanner } from '../components/home/CtaBanner';
import { ContactSection } from '../components/home/ContactSection';

interface HomePageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <main className="overflow-hidden">
      {/* Section 2: Hero Banner */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section 3: Company Statistics */}
      <CompanyStats />

      {/* Section 4: About Our Company */}
      <AboutSection />

      {/* Section 5: Vision and Mission */}
      <VisionMission />

      {/* Section 6: Our Services */}
      <ServicesSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section 7: Our Industries */}
      <IndustriesSection />

      {/* Section 8: Why Choose Us */}
      <WhyChooseUsSection />

      {/* Section 9: Core Values */}
      <CoreValuesSection />

      {/* Section 10: Contact Call to Action */}
      <CtaBanner onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section 11: Contact Us */}
      <ContactSection />
    </main>
  );
};
