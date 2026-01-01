"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./ModelEvaluation.module.css";
import { ImageCarousel } from "@/components/ImageCarousel";
import { 
  FaChartBar, 
  FaRobot, 
  FaShieldAlt, 
  FaSearchPlus, 
  FaChartLine, 
  FaCogs,
  FaUserCheck,
  FaDatabase,
  FaCode
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

export default function ModelEvaluation() {
  // Carousel images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "AI model evaluation dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      alt: "Performance metrics visualization"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "Team analyzing model results"
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
                Model Evaluation Solutions
              </motion.h1>
              <motion.p className={styles.subtitle} variants={fadeIn}>
                Comprehensive evaluation frameworks to measure, benchmark, and improve your AI models with confidence and transparency.
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
              Evaluate AI with Confidence
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Dusker's model evaluation platform provides comprehensive tools and methodologies to assess AI model performance, safety, and fairness across all stages of development.
            </motion.p>
            
            <motion.div 
              className={styles.statsGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>200+</span>
                <span className={styles.statLabel}>Evaluation Metrics</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Average Performance Improvement</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>85%</span>
                <span className={styles.statLabel}>Reduction in Bias Issues</span>
              </motion.div>
              <motion.div className={styles.statCard} variants={fadeIn}>
                <span className={styles.statValue}>5x</span>
                <span className={styles.statLabel}>Faster Time to Production</span>
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
              Comprehensive Evaluation Platform
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our end-to-end evaluation solutions cover all aspects of model assessment, from technical performance to ethical considerations.
            </motion.p>
            
            <motion.div 
              className={styles.featureGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaChartBar />
                </div>
                <h3>Performance Metrics</h3>
                <p>Comprehensive suite of accuracy, precision, recall, F1-score, and custom metrics tailored to your specific use case.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaShieldAlt />
                </div>
                <h3>Fairness & Bias Detection</h3>
                <p>Identify and mitigate biases across demographic groups and sensitive attributes with our advanced fairness assessment tools.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaRobot />
                </div>
                <h3>Robustness Testing</h3>
                <p>Stress-test your models against adversarial attacks, edge cases, and distribution shifts to ensure reliable performance.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaSearchPlus />
                </div>
                <h3>Explainability Tools</h3>
                <p>Gain insights into model decisions with feature importance, SHAP values, and other interpretability techniques.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaChartLine />
                </div>
                <h3>Continuous Monitoring</h3>
                <p>Track model performance over time, detect drift, and receive alerts when metrics fall below thresholds.</p>
              </motion.div>
              
              <motion.div className={styles.featureCard} variants={fadeIn}>
                <div className={styles.featureIcon}>
                  <FaCogs />
                </div>
                <h3>Automated Evaluation Pipelines</h3>
                <p>Streamline evaluation workflows with CI/CD integration and automated reporting for efficient model development.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Evaluation Methods Section */}
      <section className={styles.evaluationMethods}>
        <div className={styles.container}>
          <motion.div 
            className={styles.evaluationMethodsContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Evaluation Methodologies
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our platform supports diverse evaluation approaches to provide a holistic view of model quality and performance.
            </motion.p>
            
            <motion.div 
              className={styles.methodsGrid}
              variants={staggerContainer}
            >
              <motion.div className={styles.methodCard} variants={fadeIn}>
                <div className={styles.methodIcon}>
                  <FaDatabase />
                </div>
                <h3>Benchmark Testing</h3>
                <p>Evaluate models against industry-standard datasets and benchmarks to compare performance with state-of-the-art solutions.</p>
                <div className={styles.methodMetrics}>
                  <h4>Key Metrics:</h4>
                  <ul className={styles.metricsList}>
                    <li>Leaderboard rankings</li>
                    <li>Performance percentiles</li>
                    <li>Comparative analysis</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div className={styles.methodCard} variants={fadeIn}>
                <div className={styles.methodIcon}>
                  <FaUserCheck />
                </div>
                <h3>Human Evaluation</h3>
                <p>Combine quantitative metrics with qualitative human assessment to evaluate subjective aspects of model performance.</p>
                <div className={styles.methodMetrics}>
                  <h4>Key Metrics:</h4>
                  <ul className={styles.metricsList}>
                    <li>Expert ratings</li>
                    <li>User satisfaction scores</li>
                    <li>Preference testing</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div className={styles.methodCard} variants={fadeIn}>
                <div className={styles.methodIcon}>
                  <FaCode />
                </div>
                <h3>Behavioral Testing</h3>
                <p>Test models with carefully designed test cases that probe specific capabilities, limitations, and failure modes.</p>
                <div className={styles.methodMetrics}>
                  <h4>Key Metrics:</h4>
                  <ul className={styles.metricsList}>
                    <li>Invariance tests</li>
                    <li>Directional expectation tests</li>
                    <li>Minimum functionality tests</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={styles.workflow}>
        <div className={styles.container}>
          <motion.div 
            className={styles.workflowContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeIn}>
              Evaluation Workflow
            </motion.h2>
            <motion.p className={styles.sectionDescription} variants={fadeIn}>
              Our structured approach ensures comprehensive model assessment throughout the AI development lifecycle.
            </motion.p>
            
            <motion.div 
              className={styles.timeline}
              variants={staggerContainer}
            >
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3>Requirements Analysis</h3>
                  <p>Define evaluation criteria, metrics, and thresholds based on your specific use case and business requirements.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3>Test Data Preparation</h3>
                  <p>Create diverse, representative test datasets that cover edge cases, rare scenarios, and potential biases.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3>Multi-dimensional Evaluation</h3>
                  <p>Assess model performance across technical metrics, fairness, robustness, and domain-specific requirements.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>4</div>
                <div className={styles.timelineContent}>
                  <h3>Analysis & Insights</h3>
                  <p>Generate detailed reports with visualizations and actionable insights to guide model improvements.</p>
                </div>
              </motion.div>
              
              <motion.div className={styles.timelineItem} variants={fadeIn}>
                <div className={styles.timelineNumber}>5</div>
                <div className={styles.timelineContent}>
                  <h3>Continuous Monitoring</h3>
                  <p>Implement ongoing evaluation in production to detect drift, degradation, or emerging issues over time.</p>
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
              Ready to Elevate Your AI Evaluation?
            </motion.h2>
            <motion.p className={styles.ctaDescription} variants={fadeIn}>
              Partner with Dusker to implement comprehensive evaluation strategies that build trust, improve performance, and accelerate your AI development.
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
