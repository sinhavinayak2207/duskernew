'use client';

import React from 'react';
import EvolutionHero from '@/components/EvolutionHero';
import EvolutionChallenges from '@/components/EvolutionChallenges';
import EvolutionCapabilities from '@/components/EvolutionCapabilities';
import EvolutionExperts from '@/components/EvolutionExperts';
import EvolutionCTA from '@/components/EvolutionCTA';

export default function EvolutionPage() {
  return (
    <main>
      <EvolutionHero />
      <EvolutionChallenges />
      <EvolutionCapabilities />
      <EvolutionExperts />
      <EvolutionCTA />
    </main>
  );
}
