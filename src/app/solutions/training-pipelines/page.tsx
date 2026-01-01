"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './TrainingPipelines.module.css';
import Link from 'next/link';
import ImageCarousel from '@/components/products/ImageCarousel';

export default function TrainingPipelinesPage() {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Carousel images
  const carouselImages = [
    {

      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "AI Training Pipeline visualization"
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      alt: "Training pipeline architecture diagram"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "AI training dashboard interface"
    },
    {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      alt: "Model training results visualization"
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <motion.h1 
                className={styles.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                AI Training Pipelines
              </motion.h1>
              <motion.p 
                className={styles.subtitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                End-to-end solutions for building, optimizing, and scaling your AI model training workflows
              </motion.p>
              <motion.div 
                className={styles.heroCta}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link href="/contact" className={styles.primaryButton}>
                  Get Started
                </Link>
                <Link href="/demo" className={styles.secondaryButton}>
                  Request Demo
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ImageCarousel 
                images={carouselImages}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <motion.div 
            className={styles.overviewContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              Streamline Your AI Development
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.sectionDescription}>
              Dusker's AI Training Pipelines provide a comprehensive solution for organizations looking to build, 
              optimize, and scale their machine learning workflows. Our end-to-end platform handles everything from 
              data preparation to model deployment, allowing your team to focus on innovation rather than infrastructure.
            </motion.p>
            
            <div className={styles.statsGrid}>
              <motion.div variants={fadeIn} className={styles.statCard}>
                <span className={styles.statValue}>60%</span>
                <span className={styles.statLabel}>Faster time to production</span>
              </motion.div>
              <motion.div variants={fadeIn} className={styles.statCard}>
                <span className={styles.statValue}>3x</span>
                <span className={styles.statLabel}>Improvement in model quality</span>
              </motion.div>
              <motion.div variants={fadeIn} className={styles.statCard}>
                <span className={styles.statValue}>40%</span>
                <span className={styles.statLabel}>Reduction in compute costs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <motion.div 
            className={styles.featuresContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              Key Features
            </motion.h2>
            
            <div className={styles.featureGrid}>
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3>Automated Data Processing</h3>
                <p>Streamline data preparation with automated cleaning, augmentation, and feature engineering workflows.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Distributed Training</h3>
                <p>Scale your training across multiple GPUs and nodes with our optimized distributed training framework.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3>Experiment Tracking</h3>
                <p>Track, compare, and visualize all your experiments in one centralized dashboard.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3>Hyperparameter Optimization</h3>
                <p>Find optimal model configurations automatically with advanced hyperparameter tuning.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>🛠️</div>
                <h3>Model Versioning</h3>
                <p>Maintain complete version control of your models, datasets, and training configurations.</p>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.featureCard}>
                <div className={styles.featureIcon}>📈</div>
                <h3>Performance Monitoring</h3>
                <p>Monitor model performance in production with real-time metrics and alerts.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
     
      {/* Use Cases Section */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <motion.div 
            className={styles.useCasesContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              Use Cases
            </motion.h2>
            
            <div className={styles.useCaseGrid}>
              <motion.div variants={fadeIn} className={styles.useCaseCard}>
                <img 
                  src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2070&auto=format&fit=crop" 
                  alt="Natural Language Processing" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Natural Language Processing</h3>
                  <p>Train and deploy state-of-the-art language models for text classification, sentiment analysis, and more.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.useCaseCard}>
                <img 
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Computer Vision" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Computer Vision</h3>
                  <p>Build and optimize computer vision models for object detection, image classification, and segmentation.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.useCaseCard}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Recommender Systems" 
                  className={styles.useCaseImage}
                />
                
              </motion.div>
              
              <motion.div variants={fadeIn} className={styles.useCaseCard}>
                <img 
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Time Series Forecasting" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Time Series Forecasting</h3>
                  <p>Create accurate forecasting models for financial markets, demand planning, and predictive maintenance.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className={styles.ctaTitle}>
              Ready to Transform Your AI Development?
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.ctaDescription}>
              Get started with Dusker's AI Training Pipelines today and accelerate your path to production-ready AI.
            </motion.p>
            <motion.div variants={fadeIn} className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Contact Sales
              </Link>
              <Link href="/demo" className={styles.secondaryButton}>
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
