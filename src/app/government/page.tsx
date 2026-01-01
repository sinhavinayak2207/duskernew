import React from 'react';
import GovHero from '@/components/GovHero';
// import GovPartners from '@/components/GovPartners'; // Removed - no partners
import GovModelPerformance from '@/components/GovModelPerformance';
import GovDemos from '@/components/GovDemos';
import GovResources from '@/components/GovResources';

export default function GovernmentPage() {
  return (
    <main>
      <GovHero />
      {/* <GovPartners /> */}{/* Removed - no partners */}
      <GovModelPerformance />
      <GovDemos />
      <GovResources />
    </main>
  );
}
