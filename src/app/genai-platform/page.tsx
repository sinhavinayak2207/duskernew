'use client';

import React from 'react';
import GenAIPlatformHero from '@/components/GenAIPlatformHero';
import GenAIPlatformFeatures from '@/components/GenAIPlatformFeatures';
import GenAIPlatformCapabilities from '@/components/GenAIPlatformCapabilities';
import GenAIPlatformTestimonials from '@/components/GenAIPlatformTestimonials';
import GenAIPlatformCTA from '@/components/GenAIPlatformCTA';

export default function GenAIPlatformPage() {
  return (
    <main>
      <GenAIPlatformHero />
      <GenAIPlatformFeatures />
      <GenAIPlatformCapabilities />
      <GenAIPlatformTestimonials />
      <GenAIPlatformCTA />
    </main>
  );
}
