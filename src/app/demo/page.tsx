'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Demo.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Automotive',
  'Government',
  'Retail',
  'Manufacturing',
  'Other'
];

const companySize = [
  '1-50 employees',
  '51-200 employees',
  '201-1000 employees',
  '1000+ employees'
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className={styles.main}>
        <section className={styles.successSection}>
          <motion.div
            className={styles.successContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successTitle}>Thank You!</h1>
            <p className={styles.successMessage}>
              Your demo request has been submitted successfully. Our team will reach out to you within 24 hours.
            </p>
            <a href="/" className={styles.backButton}>
              Back to Home
            </a>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.heroTitle} variants={fadeIn}>
            Book a <span className={styles.gradientText}>Demo</span>
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeIn}>
            See how Dusker can transform your AI development workflow. 
            Schedule a personalized demo with our team.
          </motion.p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="John"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="john@company.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your Company"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobTitle" className={styles.label}>Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your Role"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="industry" className={styles.label}>Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="companySize" className={styles.label}>Company Size</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Size</option>
                    {companySize.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="message" className={styles.label}>Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Describe your AI use case and what you're looking to achieve..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.spinner}></span>
                ) : (
                  <>
                    Request Demo
                    <span className={styles.arrow}>→</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Side Info */}
          <motion.div
            className={styles.sideInfo}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.sideTitle}>What to expect</h3>
            <ul className={styles.expectList}>
              <li>
                <span className={styles.expectIcon}>📞</span>
                <div>
                  <strong>30-minute call</strong>
                  <p>A personalized walkthrough of our platform</p>
                </div>
              </li>
              <li>
                <span className={styles.expectIcon}>🎯</span>
                <div>
                  <strong>Custom solutions</strong>
                  <p>Tailored recommendations for your use case</p>
                </div>
              </li>
              <li>
                <span className={styles.expectIcon}>💡</span>
                <div>
                  <strong>Expert insights</strong>
                  <p>Best practices from our AI specialists</p>
                </div>
              </li>
              <li>
                <span className={styles.expectIcon}>🚀</span>
                <div>
                  <strong>Quick start guide</strong>
                  <p>Get up and running in no time</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
