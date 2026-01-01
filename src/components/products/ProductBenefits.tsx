"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import styles from './ProductBenefits.module.css';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  }[];
}

interface ProductBenefitsProps {
  benefits: Benefit[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductBenefits({ 
  benefits, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductBenefitsProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.benefitsSection}>
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
        
        <motion.div 
          ref={ref}
          className={styles.benefitsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.id}
              className={styles.benefitCard}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(106, 90, 249, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className={styles.benefitIcon}
                style={{ 
                  background: `linear-gradient(135deg, rgba(106, 90, 249, 0.2) 0%, rgba(248, 87, 166, 0.2) 100%)`
                }}
              >
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
              
              {benefit.stats && (
                <div className={styles.statsContainer}>
                  {benefit.stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <motion.span 
                        className={styles.statValue}
                        style={{ 
                          background: gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className={styles.benefitFooter}>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
