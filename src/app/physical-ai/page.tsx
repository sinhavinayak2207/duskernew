import React from 'react';
import PhysicalAIHero from '@/components/PhysicalAIHero';
// import PhysicalAIPartners from '@/components/PhysicalAIPartners'; // Removed - no partners
import PhysicalAIProductOverview from '@/components/PhysicalAIProductOverview';
// import PhysicalAITestimonials from '@/components/PhysicalAITestimonials'; // Removed - logo navigation
import PhysicalAIUseCase from '@/components/PhysicalAIUseCase';
// import PhysicalAIKeyFeatures from '@/components/PhysicalAIKeyFeatures'; // Removed - Growing Embodiment Portfolio section
import PhysicalAIAnnotations from '@/components/PhysicalAIAnnotations';
import PhysicalAIDifference from '@/components/PhysicalAIDifference';
import PhysicalAIFinalCTA from '@/components/PhysicalAIFinalCTA';

export default function PhysicalAIPage() {
  return (
    <main>
      <PhysicalAIHero />
      {/* <PhysicalAIPartners /> */}{/* Removed - no partners */}
      <PhysicalAIProductOverview />
      {/* <PhysicalAITestimonials /> */}{/* Removed - logo navigation */}
      <PhysicalAIUseCase />
      {/* <PhysicalAIKeyFeatures /> */}{/* Removed - Growing Embodiment Portfolio section */}
      <PhysicalAIAnnotations />
      <PhysicalAIDifference />
      <PhysicalAIFinalCTA />
    </main>
  );
}
