'use client';

import React, { useState } from 'react';
import styles from './EnterpriseFullStack.module.css';

const features = [
  {
    title: 'Fine-Tuning and RLHF',
    description: 'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.',
    image: '/images/rlhf.png'
  },
  {
    title: 'Foundation Models',
    description: 'Dusker partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.',
    image: '/images/foundation-models.png'
  },
  {
    title: 'Enterprise Data',
    description: "Dusker's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    image: '/images/data-engine.png'
  }
];

export default function EnterpriseFullStack() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.label}>AI FOR THE ENTERPRISE</div>
          <h2 className={styles.title}>Full-Stack AI Solutions</h2>
          <p className={styles.subtitle}>
            Outcomes delivered with world-class data, models, agents, and deployment.
          </p>
          <a href="/demo" className={styles.ctaButton}>
            Book a Demo <span className={styles.arrow}>→</span>
          </a>
        </div>

        {/* Interactive Section */}
        <div className={styles.interactiveSection}>
          {/* Desktop: Left side - Feature list */}
          <div className={styles.featureList}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${activeIndex === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop: Right side - Image display */}
          <div className={styles.imageDisplay}>
            <div className={styles.imageWrapper}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${styles.imageSlide} ${activeIndex === index ? styles.activeSlide : ''}`}
                >
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderContent}>
                      {feature.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Providers Section - Removed: no partners */}
        {/* <div className={styles.providersSection}>
          <p className={styles.providersLabel}>GENERATIVE AI PROVIDERS WE PARTNER WITH:</p>
          <div className={styles.providersGrid}>
            <div className={styles.providerCard}>
              <span className={styles.providerIcon}>🔷</span>
              <span className={styles.providerName}>Adept</span>
            </div>
            <div className={styles.providerCard}>
              <span className={styles.providerIcon}>🔵</span>
              <span className={styles.providerName}>Meta</span>
            </div>
            <div className={styles.providerCard}>
              <span className={styles.providerIcon}>🟣</span>
              <span className={styles.providerName}>cohere</span>
            </div>
            <div className={styles.providerCard}>
              <span className={styles.providerIcon}>🟠</span>
              <span className={styles.providerName}>ANTHROPIC</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
