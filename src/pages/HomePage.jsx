import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import CompanyIntro from '../components/CompanyIntro';
import KeyNumbers from '../components/KeyNumbers';
import ProductGrid from '../components/ProductGrid';
import WhyKaizel from '../components/WhyKaizel';
import TechVisualization from '../components/TechVisualization';
import SafetySection from '../components/SafetySection';
import ApplicationsSection from '../components/ApplicationsSection';
import LifecycleTimeline from '../components/LifecycleTimeline';
import ProjectsShowcase from '../components/ProjectsShowcase';
import CertificationsGrid from '../components/CertificationsGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import ServiceLocations from '../components/ServiceLocations';
import LeadGenForm from '../components/LeadGenForm';

export default function HomePage({ onOpenQuoteModal, onOpenConfiguratorModal }) {
  return (
    <div className="space-y-0">
      {/* 1. HERO */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenConfiguratorModal={onOpenConfiguratorModal} />

      {/* 2. TRUST / CERTIFICATIONS STRIP */}
      <TrustStrip />

      {/* 3. KAIZEL INTRO */}
      <CompanyIntro />

      {/* 4. KEY NUMBERS */}
      <KeyNumbers />

      {/* 5. PRODUCT SOLUTIONS */}
      <ProductGrid limit={6} />

      {/* 6. WHY KAIZEL */}
      <WhyKaizel />

      {/* 7. TECHNOLOGY */}
      <TechVisualization />

      {/* 8. SAFETY */}
      <SafetySection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 9. APPLICATIONS */}
      <ApplicationsSection />

      {/* 10. INSTALLATION & SERVICE */}
      <LifecycleTimeline />

      {/* 11. PROJECTS */}
      <ProjectsShowcase limit={3} />

      {/* 12. QUALITY / CERTIFICATIONS */}
      <CertificationsGrid />

      {/* 13. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 14. SERVICE LOCATIONS */}
      <ServiceLocations />

      {/* 15. REQUEST A QUOTE / LEAD GEN */}
      <LeadGenForm />
    </div>
  );
}
