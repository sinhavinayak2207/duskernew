'use client';

import React from 'react';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Fine-Tuning and RLHF',
      description: 'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.',
    },
    {
      title: 'Foundation Models',
      description: 'Dusker partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.',
    },
    {
      title: 'Enterprise Data',
      description: "Dusker's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem} style={{ animationDelay: `${index * 0.1}s` }}>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
