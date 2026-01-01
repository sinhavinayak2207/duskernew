'use client';

import React from 'react';
import DonovanHero from '@/components/DonovanHero';
import DonovanProducts from '@/components/DonovanProducts';
import DonovanPlatform from '@/components/DonovanPlatform';
import DonovanFeatures from '@/components/DonovanFeatures';
import DonovanWhyScale from '@/components/DonovanWhyScale';
import DonovanEnvironments from '@/components/DonovanEnvironments';
import DonovanCTA from '@/components/DonovanCTA';

export default function DonovanPage() {
  return (
    <main>
      <DonovanHero />
      <DonovanProducts />
      <DonovanPlatform />
      <DonovanFeatures />
      <DonovanWhyScale />
      <DonovanEnvironments />
      <DonovanCTA />
    </main>
  );
}
