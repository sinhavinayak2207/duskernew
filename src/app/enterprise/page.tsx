'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './Enterprise.module.css';

const solutions = [
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Automate claims processing and underwriting with AI agents that learn from your best analysts.',
    color: '#a8c7fa'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Streamline patient data analysis and clinical documentation with intelligent automation.',
    color: '#c5a8fa'
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Transform financial analysis and risk assessment with AI-powered insights.',
    color: '#faa8d4'
  },
  {
    id: 'legal',
    title: 'Legal',
    description: 'Accelerate contract review and legal research with advanced document intelligence.',
    color: '#a8fad4'
  }
];

const capabilities = [
  {
    icon: '🏆',
    title: 'AI Native Expertise',
    description: 'Founded to accelerate AI adoption. Our Data Engine powers nearly every leading AI model.'
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description: 'Enterprise-grade infrastructure serving the world\'s most demanding AI workloads.'
  },
  {
    icon: '🔬',
    title: 'Frontier Research',
    description: 'SEAL evaluates the latest LLMs and performs cutting-edge research to solve enterprise challenges.'
  }
];

const stats = [
  { value: '400+', label: 'Enterprise Customers' },
  { value: '10B+', label: 'Data Points Processed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Countries Served' }
];

export default function EnterprisePage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className={styles.main}>
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className={styles.heroSection}
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gridOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DUSKER FOR ENTERPRISE
          </motion.div>
          
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Agentic Solutions
            <br />
            <span className={styles.titleGradient}>for Enterprise</span>
          </motion.h1>
          
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build, deploy, and scale AI agents that transform your business operations.
            Powered by the world's most advanced AI infrastructure.
          </motion.p>
          
          <motion.div
            className={styles.heroCTA}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/demo" className={styles.primaryBtn}>
              Book a Demo
              <span className={styles.btnArrow}>→</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Ticker */}
      <section className={styles.statsSection}>
        <div className={styles.statsTicker}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Solutions Showcase */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <h2 className={styles.sectionTitle}>Industry Solutions</h2>
          <p className={styles.sectionSubtitle}>
            AI agents tailored for your industry's unique challenges
          </p>
        </div>
        
        <div className={styles.solutionsContainer}>
          <div className={styles.solutionsTabs}>
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                className={`${styles.solutionTab} ${activeSolution === index ? styles.activeTab : ''}`}
                onClick={() => setActiveSolution(index)}
                style={{ '--accent-color': solution.color } as React.CSSProperties}
              >
                <span className={styles.tabIndicator}></span>
                <span className={styles.tabTitle}>{solution.title}</span>
              </button>
            ))}
          </div>
          
          <motion.div
            className={styles.solutionContent}
            key={activeSolution}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className={styles.solutionVisual}
              style={{ '--accent-color': solutions[activeSolution].color } as React.CSSProperties}
            >
              <div className={styles.visualCircle}></div>
              <div className={styles.visualRing}></div>
              <div className={styles.visualDots}>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.visualDot}
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-60px)`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.solutionText}>
              <h3 className={styles.solutionTitle}>{solutions[activeSolution].title}</h3>
              <p className={styles.solutionDesc}>{solutions[activeSolution].description}</p>
              <a href="/demo" className={styles.solutionLink}>
                Learn more <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities with Animated Icons */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className={styles.capabilityItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.capabilityIcon}>
                <span>{cap.icon}</span>
                <div className={styles.iconGlow}></div>
              </div>
              <h3 className={styles.capabilityTitle}>{cap.title}</h3>
              <p className={styles.capabilityDesc}>{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platform Features - Horizontal Scroll */}
      <section className={styles.platformSection}>
        <div className={styles.platformHeader}>
          <h2 className={styles.sectionTitle}>Dusker GenAI Platform</h2>
          <p className={styles.sectionSubtitle}>
            A comprehensive platform to build, evaluate, and control advanced AI agents
          </p>
        </div>
        
        <div className={styles.platformFeatures}>
          <div className={styles.featureTrack}>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>01</div>
              <h4>Build</h4>
              <p>Create AI agents that reason over your data and take action with tools</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>02</div>
              <h4>Evaluate</h4>
              <p>Test and validate agent performance with comprehensive evaluation suites</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>03</div>
              <h4>Control</h4>
              <p>Monitor and manage agents with enterprise-grade governance</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>04</div>
              <h4>Improve</h4>
              <p>Continuously enhance from human-agent interactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>Ready to Transform Your Enterprise?</h2>
          <p className={styles.ctaSubtitle}>
            Join 400+ enterprises already building with Dusker
          </p>
          <a href="/demo" className={styles.ctaBtn}>
            Get Started
            <span>→</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
