'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DevelopersEval.module.css';

const codeSnippets = [
  {
    lang: 'Python',
    code: `from dusker import Evaluator

evaluator = Evaluator(api_key="...")
results = evaluator.run(
    model="gpt-4",
    suite="accuracy"
)
print(results.score)`
  },
  {
    lang: 'JavaScript',
    code: `import { Dusker } from '@dusker/sdk';

const client = new Dusker({ apiKey: '...' });
const results = await client.evaluate({
  model: 'gpt-4',
  suite: 'accuracy'
});
console.log(results.score);`
  },
  {
    lang: 'CLI',
    code: `$ dusker evaluate \\
    --model gpt-4 \\
    --suite accuracy \\
    --output results.json

✓ Evaluation complete
  Score: 94.2%`
  }
];

const apis = [
  { method: 'POST', endpoint: '/evaluate', desc: 'Run evaluation' },
  { method: 'GET', endpoint: '/results/:id', desc: 'Get results' },
  { method: 'GET', endpoint: '/benchmarks', desc: 'List benchmarks' },
  { method: 'POST', endpoint: '/compare', desc: 'Compare models' }
];

export default function DevelopersEvaluationPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={styles.main}>
      {/* Hero with Terminal */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.span 
            className={styles.tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            For Developers
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ship Better
            <span className={styles.highlight}> AI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Developer-first evaluation tools. Test, benchmark, and iterate
            faster with comprehensive APIs and SDKs.
          </motion.p>
          
          <motion.div
            className={styles.heroBtns}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/demo" className={styles.primaryBtn}>Get API Key →</a>
            <a href="/docs" className={styles.secondaryBtn}>Read Docs</a>
          </motion.div>
        </div>
        
        {/* Animated Terminal */}
        <motion.div 
          className={styles.terminal}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span></span><span></span><span></span>
            </div>
            <span className={styles.terminalTitle}>terminal</span>
          </div>
          <div className={styles.terminalBody}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className={styles.prompt}>$</span> npm install @dusker/sdk
            </motion.div>
            <motion.div
              className={styles.terminalOutput}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              ✓ Installed @dusker/sdk@2.0.0
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <span className={styles.prompt}>$</span> dusker init
            </motion.div>
            <motion.div
              className={styles.terminalSuccess}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              ✓ Project initialized
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Code Tabs */}
      <section className={styles.codeSection}>
        <h2 className={styles.sectionTitle}>Quick Start</h2>
        
        <div className={styles.codeTabs}>
          {codeSnippets.map((snippet, index) => (
            <button
              key={index}
              className={`${styles.codeTab} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {snippet.lang}
            </button>
          ))}
        </div>
        
        <motion.div 
          className={styles.codeBlock}
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <pre>{codeSnippets[activeTab].code}</pre>
        </motion.div>
      </section>

      {/* API Reference */}
      <section className={styles.apiSection}>
        <h2 className={styles.sectionTitle}>API Reference</h2>
        
        <div className={styles.apiList}>
          {apis.map((api, index) => (
            <motion.div
              key={index}
              className={styles.apiItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className={`${styles.apiMethod} ${styles[api.method.toLowerCase()]}`}>
                {api.method}
              </span>
              <code className={styles.apiEndpoint}>{api.endpoint}</code>
              <span className={styles.apiDesc}>{api.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Pills */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresPills}>
          {['Python SDK', 'JavaScript SDK', 'REST API', 'GraphQL', 'Webhooks', 'CI/CD'].map((feature, i) => (
            <motion.span
              key={i}
              className={styles.featurePill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Start Building Today</h2>
          <p>Free tier available. No credit card required.</p>
          <a href="/demo" className={styles.ctaBtn}>Get Started →</a>
        </motion.div>
      </section>
    </main>
  );
}
