import React from 'react';
import AutoHero from '@/components/AutoHero';
// import AutoPartners from '@/components/AutoPartners'; // Removed - no partners
import AutoDataEngine from '@/components/AutoDataEngine';
import AutoPhases from '@/components/AutoPhases';
import AutoWhyDusker from '@/components/AutoWhyDusker';
// import AutoResources from '@/components/AutoResources'; // Removed - Learn More About the Data Engine section
import AutoFoundationModel from '@/components/AutoFoundationModel';

export default function AutomotivePage() {
  return (
    <main>
      <AutoHero />
      {/* <AutoPartners /> */}{/* Removed - no partners */}
      <AutoDataEngine />
      <AutoPhases />
      <AutoWhyDusker />
      {/* <AutoResources /> */}{/* Removed - Learn More About the Data Engine section */}
      <AutoFoundationModel />
    </main>
  );
}
