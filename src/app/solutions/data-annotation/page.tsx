"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./DataAnnotation.module.css";
import { ImageCarousel } from "@/components/ImageCarousel";
import { FaChartLine, FaRobot, FaDatabase, FaUserCog, FaCheckCircle } from "react-icons/fa";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function DataAnnotation() {
  // Carousel images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1581092160607-ee22731c9c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "Data annotation platform interface"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "Data annotation in action"
    },
    {
      src: "https://images.unsplash.com/photo-1581092335397-9fa341108fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "Advanced annotation tools"
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.div 
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className={styles.title} variants={fadeIn}>
                Data Annotation Solutions
              </motion.h1>
              <motion.p className={styles.subtitle} variants={fadeIn}>
                High-quality, scalable data annotation for machine learning and AI models. Accelerate your development with our expert annotation services.
              </motion.p>
              <motion.div className={styles.heroCta} variants={fadeIn}>
                <Link href="/contact" className={styles.primaryButton}>
                  Get Started
                </Link>
                <Link href="/demo" className={styles.secondaryButton}>
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ImageCarousel images={carouselImages} autoSlide={true} />
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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Powering AI with Quality Data
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Dusker's data annotation solutions combine human expertise with advanced AI assistance to deliver high-quality labeled data for machine learning models across industries.
            </motion.p>
            
            <motion.div 
              className={styles.statsGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>99.8%</span>
                <span className={styles.statLabel}>Annotation Accuracy</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLabel}>Data Types Supported</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>10x</span>
                <span className={styles.statLabel}>Faster Than Traditional Methods</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Global Annotation Workforce</span>
              </motion.div>
            </motion.div>
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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Comprehensive Annotation Capabilities
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our platform supports a wide range of annotation types for various data modalities, ensuring you get exactly what your models need.
            </motion.p>
            
            <motion.div 
              className={styles.featureGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaChartLine />
                </div>
                <h3>Computer Vision Annotation</h3>
                <p>Bounding boxes, polygons, semantic segmentation, and keypoint annotation for images and videos with pixel-perfect precision.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaRobot />
                </div>
                <h3>NLP & Text Annotation</h3>
                <p>Named entity recognition, sentiment analysis, text classification, and relationship extraction for training language models.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaDatabase />
                </div>
                <h3>3D Point Cloud Annotation</h3>
                <p>Precise 3D bounding boxes, semantic segmentation, and instance segmentation for LiDAR and other 3D sensor data.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaUserCog />
                </div>
                <h3>Audio Annotation</h3>
                <p>Transcription, speaker identification, sound event detection, and audio classification for speech and audio processing models.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaCheckCircle />
                </div>
                <h3>Multi-modal Annotation</h3>
                <p>Synchronized annotation across multiple data types for training sophisticated multi-modal AI models.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaDatabase />
                </div>
                <h3>Custom Annotation Workflows</h3>
                <p>Tailored annotation processes designed specifically for your unique data and model requirements.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <motion.div 
            className={styles.howItWorksContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Our Annotation Process
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              A streamlined workflow that combines human expertise with AI assistance for fast, accurate, and consistent annotations.
            </motion.p>
            
            <motion.div 
              className={styles.timeline}
              variants={staggerContainer}
            >
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3>Project Setup & Requirements</h3>
                  <p>We work with you to understand your specific annotation needs, data types, and quality requirements to create a customized annotation plan.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3>AI-Assisted Pre-annotation</h3>
                  <p>Our AI systems perform initial annotations to accelerate the process and provide a starting point for human annotators.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3>Expert Human Annotation</h3>
                  <p>Skilled annotators review, correct, and refine the pre-annotations to ensure accuracy and quality according to your guidelines.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>4</div>
                <div className={styles.timelineContent}>
                  <h3>Quality Assurance</h3>
                  <p>Multiple layers of quality checks, including peer reviews and automated consistency verification, to maintain high annotation standards.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>5</div>
                <div className={styles.timelineContent}>
                  <h3>Delivery & Iteration</h3>
                  <p>Receive annotated data in your preferred format, with continuous feedback loops to refine the process for ongoing projects.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <motion.div 
            className={styles.useCasesContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Industry Applications
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our data annotation solutions power AI development across diverse industries and use cases.
            </motion.p>
            
            <motion.div 
              className={styles.useCaseGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                  alt="Autonomous vehicles" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Autonomous Vehicles</h3>
                  <p>High-precision 3D and 2D annotations for training self-driving car perception systems to identify objects, lanes, and traffic signs.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Healthcare and medical imaging" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Healthcare</h3>
                  <p>Medical image annotation for diagnostic AI, including tumor detection, organ segmentation, and anomaly identification in radiology.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Retail and e-commerce" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Retail & E-commerce</h3>
                  <p>Product categorization, attribute tagging, and visual search capabilities through comprehensive image and text annotation.</p>
                </div>
              </motion.div>
            </motion.div>
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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.ctaTitle} variants={fadeIn}>
              Ready to Supercharge Your AI with Quality Data?
            </motion.h2>
            <motion.p className={styles.ctaDescription} variants={fadeIn}>
              Partner with Dusker for your data annotation needs and experience the perfect balance of speed, quality, and cost-effectiveness.
            </motion.p>
            <motion.div className={styles.ctaButtons} variants={fadeIn}>
             
              <Link href="/contact" className={styles.secondaryButton}>
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
