import React from 'react';
import GenAIHero from '@/components/GenAIHero';
// import GenAIPartners from '@/components/GenAIPartners'; // Removed - no partners
import GenAIProductOverview from '@/components/GenAIProductOverview';
import GenAIImproveModels from '@/components/GenAIImproveModels';
import GenAIKeyFeatures from '@/components/GenAIKeyFeatures';
import GenAIRLHF from '@/components/GenAIRLHF';
// import GenAIDemos from '@/components/GenAIDemos'; // Removed - demos section
// import GenAICaseStudies from '@/components/GenAICaseStudies'; // Removed - resources section
import GenAIFinalCTA from '@/components/GenAIFinalCTA';

export default function GenerativeAIPage() {
  return (
    <main>
      <GenAIHero />
      {/* <GenAIPartners /> */}{/* Removed - no partners */}
      <GenAIProductOverview />
      <GenAIImproveModels />
      <GenAIKeyFeatures />
      <GenAIRLHF />
      {/* <GenAIDemos /> */}{/* Removed - demos section */}
      {/* <GenAICaseStudies /> */}{/* Removed - resources section */}
      <GenAIFinalCTA />
    </main>
  );
}
