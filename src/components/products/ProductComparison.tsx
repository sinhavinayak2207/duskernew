"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProductComparison.module.css';

interface PlanFeature {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface ProductComparisonProps {
  title: string;
  subtitle: string;
  features?: PlanFeature[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  description?: string;
  gradient?: string;
}

export default function ProductComparison({ 
  title, 
  subtitle, 
  features,
  comparisonTable,
  description,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductComparisonProps) {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | 'enterprise'>('pro');
  
  const plans = [
    { id: 'basic', name: 'Basic' },
    { id: 'pro', name: 'Professional' },
    { id: 'enterprise', name: 'Enterprise' },
  ];

  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 
            className={styles.title}
            style={{ 
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </h2>
        </motion.div>
        
        <div className={styles.comparisonContainer}>
          <div className={styles.planSelector}>
            {plans.map((plan) => (
              <motion.button 
                key={plan.id}
                className={`${styles.planButton} ${selectedPlan === plan.id ? styles.activePlan : ''}`}
                onClick={() => setSelectedPlan(plan.id as 'basic' | 'pro' | 'enterprise')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span className={styles.planName}>{plan.name}</span>

                {selectedPlan === plan.id && (
                  <motion.div 
                    className={styles.activePlanIndicator}
                    layoutId="planIndicator"
                    style={{ background: gradient }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <div className={styles.contentContainer}>
            {description && (
              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {description}
              </motion.p>
            )}
            
            {features && (
              <motion.div 
                className={styles.featuresTable}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={styles.tableHeader}>
                  <div className={styles.featureNameHeader}>Feature</div>
                  <div className={styles.planColumnHeader}>
                    {plans.map((plan) => (
                      <div 
                        key={plan.id} 
                        className={`${styles.planColumn} ${selectedPlan === plan.id ? styles.highlightedColumn : ''}`}
                      >
                        {plan.name}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.tableBody}>
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className={styles.tableRow}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                    >
                      <div className={styles.featureName}>{feature.name}</div>
                      <div className={styles.featureValues}>
                        <div className={`${styles.featureValue} ${selectedPlan === 'basic' ? styles.highlightedValue : ''}`}>
                          {renderFeatureValue(feature.basic)}
                        </div>
                        <div className={`${styles.featureValue} ${selectedPlan === 'pro' ? styles.highlightedValue : ''}`}>
                          {renderFeatureValue(feature.pro)}
                        </div>
                        <div className={`${styles.featureValue} ${selectedPlan === 'enterprise' ? styles.highlightedValue : ''}`}>
                          {renderFeatureValue(feature.enterprise)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {comparisonTable && (
              <motion.div
                className={styles.comparisonTable}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={styles.tableHeader}>
                  {comparisonTable.headers.map((header, index) => (
                    <div key={index} className={styles.comparisonHeaderCell}>
                      {header}
                    </div>
                  ))}
                </div>
                
                <div className={styles.tableBody}>
                  {comparisonTable.rows.map((row, rowIndex) => (
                    <motion.div 
                      key={rowIndex}
                      className={styles.tableRow}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (rowIndex * 0.05), duration: 0.5 }}
                    >
                      {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={styles.comparisonCell}>
                          {cell}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          {features && (
            <div className={styles.ctaContainer}>
              <motion.button 
                className={styles.ctaButton}
                style={{ background: gradient }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get Started with {plans.find(p => p.id === selectedPlan)?.name}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              <p className={styles.ctaDescription}>
                Not sure which plan is right for you? <span className={styles.ctaText}>Contact our sales team</span> for a personalized demo.
              </p>
            </div>
          )}
          
          {comparisonTable && (
            <div className={styles.ctaContainer}>
              <motion.button 
                className={styles.ctaButton}
                style={{ background: gradient }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              <p className={styles.ctaDescription}>
                Want to see a detailed comparison? <span className={styles.ctaText}>Request our full feature comparison</span>.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}

function renderFeatureValue(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value ? (
      <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg className={styles.crossIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  
  return value;
}
