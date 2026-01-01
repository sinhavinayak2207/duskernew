'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

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

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Get in touch via email',
    value: 'info@duskerservices.in',
    href: 'mailto:info@duskerservices.in'
  },
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Chat with our team',
    value: 'Available 9am-6pm IST',
    href: '#'
  },
  {
    icon: '📍',
    title: 'Office',
    description: 'Visit our headquarters',
    value: 'India',
    href: '#'
  }
];

const inquiryTypes = [
  'General Inquiry',
  'Sales',
  'Technical Support',
  'Partnership',
  'Careers',
  'Press & Media'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
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
            <h1 className={styles.successTitle}>Message Sent!</h1>
            <p className={styles.successMessage}>
              Thank you for reaching out. Our team will get back to you within 24 hours.
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
            Get in <span className={styles.gradientText}>Touch</span>
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeIn}>
            Have a question or want to learn more about Dusker? 
            We're here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className={styles.methodsSection}>
        <motion.div
          className={styles.methodsGrid}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className={styles.methodCard}
              variants={fadeIn}
            >
              <div className={styles.methodIcon}>{method.icon}</div>
              <h3 className={styles.methodTitle}>{method.title}</h3>
              <p className={styles.methodDesc}>{method.description}</p>
              <span className={styles.methodValue}>{method.value}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <motion.div
            className={styles.formHeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.formTitle}>Send us a message</h2>
            <p className={styles.formSubtitle}>Fill out the form below and we'll get back to you as soon as possible.</p>
          </motion.div>

          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="inquiryType" className={styles.label}>Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="message" className={styles.label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
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
                    Send Message
                    <span className={styles.arrow}>→</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
