'use client';

import React, { useState } from 'react';
import styles from './AgenticSolutionsSlider.module.css';

const solutions = [
  {
    category: 'Public Sector',
    title: 'Agentic Solutions for Defense and Intelligence',
    description: 'Orchestrate agent workflows for decision advantage.',
    image: '/images/donovan.png',
    link: '/agentic-warfare'
  },
  {
    category: 'Enterprise',
    title: 'Agentic Solutions for Enterprise AI Transformation',
    description: 'Deploy reliable AI agents that learn to improve outcomes.',
    image: '/images/gen-ai.png',
    link: '/enterprise/agentic-solutions'
  }
];

export default function AgenticSolutionsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.label}>APPLY AI</div>
          <h2 className={styles.title}>Agentic Solutions</h2>
          <p className={styles.subtitle}>
            Transform your data and expertise into agentic solutions that continuously improve with human interaction.
          </p>
        </div>

        {/* Slider */}
        <div className={styles.sliderContainer}>
          <div className={styles.slider} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {solutions.map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                className={styles.slide}
              >
                <div className={styles.slideContent}>
                  <p className={styles.slideCategory}>{solution.category.toUpperCase()}</p>
                  <h3 className={styles.slideTitle}>{solution.title}</h3>
                  <p className={styles.slideDescription}>{solution.description}</p>
                  <div className={styles.slideImage}>
                    <div className={styles.imagePlaceholder}>
                      {solution.category}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className={styles.dotsContainer}>
            {solutions.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
