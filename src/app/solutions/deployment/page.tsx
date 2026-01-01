"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Deployment.module.css";
import { ImageCarousel } from "@/components/ImageCarousel";
import { 
  FaRocket, 
  FaCloud, 
  FaShieldAlt, 
  FaCogs, 
  FaChartLine, 
  FaServer,
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt
} from "react-icons/fa";

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

export default function Deployment() {
  // Carousel images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      alt: "AI deployment dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "Cloud infrastructure"
    },
    {
      src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "AI deployment team"
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
                AI Deployment Solutions
              </motion.h1>
              <motion.p className={styles.subtitle} variants={fadeIn}>
                Seamlessly deploy, scale, and manage AI models in production with our enterprise-grade deployment platform and expert services.
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
              Bridge the Gap from Development to Production
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Dusker's deployment solutions transform the way organizations operationalize AI, making it faster, more reliable, and more cost-effective to bring models to production.
            </motion.p>
            
            <motion.div 
              className={styles.statsGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>90%</span>
                <span className={styles.statLabel}>Faster Deployment Time</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>99.9%</span>
                <span className={styles.statLabel}>Production Uptime</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>40%</span>
                <span className={styles.statLabel}>Lower Infrastructure Costs</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>1000+</span>
                <span className={styles.statLabel}>Models Deployed</span>
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
              Comprehensive Deployment Platform
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our end-to-end platform handles every aspect of AI deployment, from containerization to monitoring and beyond.
            </motion.p>
            
            <motion.div 
              className={styles.featureGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaRocket />
                </div>
                <h3>One-Click Deployment</h3>
                <p>Deploy models to production with a single click through our intuitive interface or API, eliminating complex DevOps workflows.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaCloud />
                </div>
                <h3>Multi-Cloud Support</h3>
                <p>Deploy to AWS, Azure, GCP, or your on-premises infrastructure with consistent tooling and management capabilities.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaShieldAlt />
                </div>
                <h3>Enterprise Security</h3>
                <p>SOC 2 compliant platform with encryption, access controls, and security best practices built into every layer.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaCogs />
                </div>
                <h3>Automated Scaling</h3>
                <p>Intelligent auto-scaling based on traffic patterns ensures optimal performance and cost efficiency at any load.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaChartLine />
                </div>
                <h3>Performance Monitoring</h3>
                <p>Real-time dashboards and alerts for model performance, latency, throughput, and infrastructure metrics.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaServer />
                </div>
                <h3>Version Control</h3>
                <p>Comprehensive model versioning with rollback capabilities, A/B testing, and shadow deployment for risk-free updates.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className={styles.deploymentOptions}>
        <div className={styles.container}>
          <motion.div 
            className={styles.deploymentOptionsContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Flexible Deployment Options
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Choose the deployment approach that best fits your organization's needs, infrastructure, and security requirements.
            </motion.p>
            
            <motion.div 
              className={styles.optionsGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.optionCard} variants={fadeIn}>
                <div className={styles.optionIcon}>
                  <FaCloud />
                </div>
                <h3>Managed Cloud</h3>
                <p>Let us handle your entire AI infrastructure on our secure, scalable cloud platform with 24/7 monitoring and support.</p>
                <div className={styles.optionFeatures}>
                  <h4>Key Benefits:</h4>
                  <ul className={styles.featuresList}>
                    <li>Zero infrastructure management</li>
                    <li>Automatic scaling and optimization</li>
                    <li>99.9% uptime SLA</li>
                    <li>Pay-as-you-go pricing</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div className={styles.optionCard} variants={fadeIn}>
                <div className={styles.optionIcon}>
                  <FaGlobe />
                </div>
                <h3>Your Cloud</h3>
                <p>Deploy our platform in your existing cloud environment (AWS, Azure, GCP) while maintaining full control over your infrastructure.</p>
                <div className={styles.optionFeatures}>
                  <h4>Key Benefits:</h4>
                  <ul className={styles.featuresList}>
                    <li>Leverage existing cloud investments</li>
                    <li>Meet data residency requirements</li>
                    <li>Integrate with your cloud services</li>
                    <li>Custom security configurations</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div className={styles.optionCard} variants={fadeIn}>
                <div className={styles.optionIcon}>
                  <FaServer />
                </div>
                <h3>On-Premises</h3>
                <p>Deploy our platform within your own data centers for maximum control, security, and compliance with strict data policies.</p>
                <div className={styles.optionFeatures}>
                  <h4>Key Benefits:</h4>
                  <ul className={styles.featuresList}>
                    <li>Complete data isolation</li>
                    <li>Compliance with strict regulations</li>
                    <li>Integration with existing systems</li>
                    <li>Air-gapped deployment options</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <motion.div 
            className={styles.processContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Deployment Process
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our streamlined process takes your models from development to production quickly and reliably.
            </motion.p>
            
            <motion.div 
              className={styles.timeline}
              variants={staggerContainer}
            >
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3>Model Packaging</h3>
                  <p>We package your trained models with all dependencies into standardized containers that can run consistently across any environment.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3>Infrastructure Setup</h3>
                  <p>Our platform automatically provisions and configures the optimal infrastructure based on your model's requirements and expected load.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3>Deployment & Testing</h3>
                  <p>We deploy your model with comprehensive testing to ensure it performs as expected in the production environment.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>4</div>
                <div className={styles.timelineContent}>
                  <h3>Monitoring Setup</h3>
                  <p>We implement comprehensive monitoring for model performance, infrastructure health, and business KPIs with customizable alerts.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>5</div>
                <div className={styles.timelineContent}>
                  <h3>Ongoing Optimization</h3>
                  <p>Our platform continuously optimizes your deployment for performance, cost, and reliability based on real-world usage patterns.</p>
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
              Deployment Scenarios
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our platform supports diverse deployment scenarios across industries and use cases.
            </motion.p>
            
            <motion.div 
              className={styles.useCaseGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="API deployment" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>API Deployment</h3>
                  <p>Deploy models as scalable REST APIs for seamless integration with applications, websites, and services with low-latency requirements.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80" 
                  alt="Edge deployment" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Edge Deployment</h3>
                  <p>Deploy optimized models to edge devices for offline processing, reduced latency, and privacy-sensitive applications in IoT and mobile scenarios.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.useCaseCard} variants={fadeIn}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Batch processing" 
                  className={styles.useCaseImage}
                />
                <div className={styles.useCaseInfo}>
                  <h3>Batch Processing</h3>
                  <p>Deploy models for high-throughput batch processing of large datasets with optimized resource utilization and scheduling capabilities.</p>
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
              Ready to Deploy AI with Confidence?
            </motion.h2>
            <motion.p className={styles.ctaDescription} variants={fadeIn}>
              Partner with Dusker to streamline your AI deployment and unlock the full value of your models in production.
            </motion.p>
            <motion.div className={styles.ctaButtons} variants={fadeIn}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule a Consultation
              </Link>
              <Link href="/resources" className={styles.secondaryButton}>
                Explore Resources
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
