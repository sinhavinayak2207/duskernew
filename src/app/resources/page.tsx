"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Resources.module.css';
import Link from 'next/link';

export default function ResourcesPage() {
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

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Resources & Insights
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Explore our collection of guides, case studies, webinars, and research papers to help you succeed with AI training and evaluation.
            </motion.p>
            <motion.div 
              className={styles.searchContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <input 
                type="text" 
                placeholder="Search resources..." 
                className={styles.searchInput} 
              />
              <span className={styles.searchIcon}>🔍</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <motion.section 
        className={styles.categories}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.h2 variants={fadeIn} className={styles.sectionTitle}>Browse by Category</motion.h2>
          <div className={styles.categoriesGrid}>
            <motion.a href="/resources/guides" variants={fadeIn} className={styles.categoryCard}>
              <img src="/images/guides-category.jpg" alt="Guides & Tutorials" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Guides & Tutorials</h3>
                <p className={styles.categoryDescription}>
                  Step-by-step instructions and best practices for AI training and evaluation.
                </p>
                <div className={styles.categoryMeta}>
                  <span className={styles.categoryCount}>
                    <span className={styles.categoryIcon}>📄</span> 24 resources
                  </span>
                </div>
              </div>
            </motion.a>
            
            <motion.a href="/resources/case-studies" variants={fadeIn} className={styles.categoryCard}>
              <img src="/images/case-studies-category.jpg" alt="Case Studies" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Case Studies</h3>
                <p className={styles.categoryDescription}>
                  Real-world examples of how organizations are using Dusker to solve complex AI challenges.
                </p>
                <div className={styles.categoryMeta}>
                  <span className={styles.categoryCount}>
                    <span className={styles.categoryIcon}>📊</span> 16 resources
                  </span>
                </div>
              </div>
            </motion.a>
            
            <motion.a href="/resources/webinars" variants={fadeIn} className={styles.categoryCard}>
              <img src="/images/webinars-category.jpg" alt="Webinars & Events" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Webinars & Events</h3>
                <p className={styles.categoryDescription}>
                  Live and on-demand presentations from AI experts and industry leaders.
                </p>
                <div className={styles.categoryMeta}>
                  <span className={styles.categoryCount}>
                    <span className={styles.categoryIcon}>🎥</span> 12 resources
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Featured Resources Section */}
      <motion.section 
        className={styles.featured}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.h2 variants={fadeIn} className={styles.sectionTitle}>Featured Resources</motion.h2>
          <div className={styles.featuredGrid}>
            <motion.div variants={fadeIn} className={styles.resourceCard}>
              <img src="/images/resource-1.jpg" alt="AI Training Best Practices" className={styles.resourceImage} />
              <div className={styles.resourceContent}>
                <span className={styles.resourceType}>Guide</span>
                <h3 className={styles.resourceTitle}>AI Training Best Practices: 2025 Edition</h3>
                <p className={styles.resourceDescription}>
                  Learn the latest techniques and methodologies for training high-performance AI models efficiently and effectively.
                </p>
                <div className={styles.resourceMeta}>
                  <span className={styles.resourceDate}>
                    <span className={styles.resourceDateIcon}>📅</span> June 15, 2025
                  </span>
                  <a href="/resources/guides/ai-training-best-practices" className={styles.resourceLink}>
                    Read More <span className={styles.resourceLinkIcon}>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.resourceCard}>
              <img src="/images/resource-2.jpg" alt="Model Evaluation Framework" className={styles.resourceImage} />
              <div className={styles.resourceContent}>
                <span className={styles.resourceType}>Whitepaper</span>
                <h3 className={styles.resourceTitle}>The Comprehensive Model Evaluation Framework</h3>
                <p className={styles.resourceDescription}>
                  A detailed guide to evaluating AI models for accuracy, fairness, robustness, and production readiness.
                </p>
                <div className={styles.resourceMeta}>
                  <span className={styles.resourceDate}>
                    <span className={styles.resourceDateIcon}>📅</span> May 22, 2025
                  </span>
                  <a href="/resources/whitepapers/model-evaluation-framework" className={styles.resourceLink}>
                    Read More <span className={styles.resourceLinkIcon}>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.resourceCard}>
              <img src="/images/resource-3.jpg" alt="Healthcare AI Case Study" className={styles.resourceImage} />
              <div className={styles.resourceContent}>
                <span className={styles.resourceType}>Case Study</span>
                <h3 className={styles.resourceTitle}>How MedTech Inc. Improved Diagnostic Accuracy by 37%</h3>
                <p className={styles.resourceDescription}>
                  Learn how a leading healthcare provider used Dusker's training pipelines to enhance their diagnostic AI systems.
                </p>
                <div className={styles.resourceMeta}>
                  <span className={styles.resourceDate}>
                    <span className={styles.resourceDateIcon}>📅</span> April 8, 2025
                  </span>
                  <a href="/resources/case-studies/medtech-diagnostic-accuracy" className={styles.resourceLink}>
                    Read More <span className={styles.resourceLinkIcon}>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Latest Blog Posts Section */}
      <motion.section 
        className={styles.latestPosts}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.h2 variants={fadeIn} className={styles.sectionTitle}>Latest from Our Blog</motion.h2>
          <div className={styles.postsGrid}>
            <motion.article variants={fadeIn} className={styles.postCard}>
              <img src="/images/blog-1.jpg" alt="AI Regulations" className={styles.postImage} />
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>Industry News</span>
                  <span className={styles.postDate}>June 20, 2025</span>
                </div>
                <h3 className={styles.postTitle}>Navigating the New AI Regulations: What You Need to Know</h3>
                <p className={styles.postExcerpt}>
                  With new AI regulations coming into effect, learn what these changes mean for your organization and how to ensure compliance.
                </p>
                <div className={styles.postAuthor}>
                  <img src="/images/author-1.jpg" alt="Sarah Chen" className={styles.postAuthorAvatar} />
                  <span className={styles.postAuthorName}>Sarah Chen</span>
                </div>
              </div>
            </motion.article>
            
            <motion.article variants={fadeIn} className={styles.postCard}>
              <img src="/images/blog-2.jpg" alt="Generative AI" className={styles.postImage} />
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>Technical</span>
                  <span className={styles.postDate}>June 12, 2025</span>
                </div>
                <h3 className={styles.postTitle}>Optimizing Training Data for Generative AI Models</h3>
                <p className={styles.postExcerpt}>
                  Discover techniques for preparing and curating high-quality training data to improve the performance of generative AI models.
                </p>
                <div className={styles.postAuthor}>
                  <img src="/images/author-2.jpg" alt="David Park" className={styles.postAuthorAvatar} />
                  <span className={styles.postAuthorName}>David Park</span>
                </div>
              </div>
            </motion.article>
            
            <motion.article variants={fadeIn} className={styles.postCard}>
              <img src="/images/blog-3.jpg" alt="Bias in AI" className={styles.postImage} />
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>Research</span>
                  <span className={styles.postDate}>June 5, 2025</span>
                </div>
                <h3 className={styles.postTitle}>Addressing Bias in AI: A Comprehensive Approach</h3>
                <p className={styles.postExcerpt}>
                  Explore methodologies for identifying and mitigating bias in AI systems to ensure fair and equitable outcomes.
                </p>
                <div className={styles.postAuthor}>
                  <img src="/images/author-3.jpg" alt="Maya Johnson" className={styles.postAuthorAvatar} />
                  <span className={styles.postAuthorName}>Maya Johnson</span>
                </div>
              </div>
            </motion.article>
            
            <motion.article variants={fadeIn} className={styles.postCard}>
              <img src="/images/blog-4.jpg" alt="MLOps" className={styles.postImage} />
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>Best Practices</span>
                  <span className={styles.postDate}>May 29, 2025</span>
                </div>
                <h3 className={styles.postTitle}>Building Effective MLOps Pipelines for Enterprise AI</h3>
                <p className={styles.postExcerpt}>
                  Learn how to implement robust MLOps practices to streamline AI development, deployment, and monitoring.
                </p>
                <div className={styles.postAuthor}>
                  <img src="/images/author-4.jpg" alt="James Wilson" className={styles.postAuthorAvatar} />
                  <span className={styles.postAuthorName}>James Wilson</span>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className={styles.newsletter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter to receive the latest insights, resources, and updates on AI training and evaluation.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={styles.newsletterInput} 
                required 
              />
              <button type="submit" className={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
