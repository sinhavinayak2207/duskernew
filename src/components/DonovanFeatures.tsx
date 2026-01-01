'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DonovanFeatures.module.css';

const stages = [
  {
    id: 'ingest',
    title: 'Ingest Data',
    icon: '📥',
    color: '#7E9FFF',
    description: 'Seamlessly connect and process data from multiple sources including documents, databases, and real-time feeds.'
  },
  {
    id: 'rag',
    title: 'Agentic RAG',
    icon: '🔍',
    color: '#FF69B4',
    description: 'Advanced retrieval-augmented generation that autonomously searches, synthesizes, and reasons over your data.'
  },
  {
    id: 'generate',
    title: 'Generate',
    icon: '✨',
    color: '#FFD700',
    description: 'Create mission-critical outputs including reports, briefings, and actionable intelligence summaries.'
  }
];

const dataInputs = [
  { icon: '📄', label: 'Documents' },
  { icon: '🗄️', label: 'Databases' },
  { icon: '📡', label: 'Real-time Feeds' },
  { icon: '🛰️', label: 'Satellite Data' }
];

const outputs = [
  { icon: '📊', label: 'Intelligence Reports' },
  { icon: '📋', label: 'Strategic Briefings' },
  { icon: '🎯', label: 'Threat Assessments' },
  { icon: '📈', label: 'Analytics Dashboards' }
];

// AI Generated responses based on different scenarios
const aiResponses = [
  {
    prompt: "Analyzing satellite imagery from sector 7...",
    response: "ANALYSIS COMPLETE: Detected 3 new infrastructure developments in the monitored region. Movement patterns indicate increased activity levels. Confidence: 94.2%"
  },
  {
    prompt: "Processing intelligence reports from field agents...",
    response: "SYNTHESIS COMPLETE: Cross-referenced 47 reports. Key findings: Supply chain disruption detected in eastern corridor. Recommended action: Deploy additional surveillance assets."
  },
  {
    prompt: "Generating threat assessment for Operation Shield...",
    response: "THREAT LEVEL: MODERATE. Primary concerns: Cyber intrusion attempts increased 23% this week. Mitigation strategies have been compiled and prioritized by risk score."
  },
  {
    prompt: "Compiling strategic briefing for command...",
    response: "BRIEFING READY: Executive summary prepared with 5 key action items. Resource allocation recommendations included. Timeline: Next 72 hours critical."
  }
];

export default function DonovanFeatures() {
  const [activeStage, setActiveStage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);
  const [phase, setPhase] = useState<'prompt' | 'thinking' | 'response' | 'pause'>('prompt');
  const charIndexRef = useRef(0);

  useEffect(() => {
    const currentResponse = aiResponses[responseIndex];
    let interval: NodeJS.Timeout;

    if (phase === 'prompt') {
      // Type out the prompt
      charIndexRef.current = 0;
      interval = setInterval(() => {
        if (charIndexRef.current <= currentResponse.prompt.length) {
          setDisplayText(currentResponse.prompt.slice(0, charIndexRef.current));
          charIndexRef.current++;
        } else {
          clearInterval(interval);
          setPhase('thinking');
        }
      }, 40);
    } else if (phase === 'thinking') {
      // Show thinking animation briefly
      setDisplayText(currentResponse.prompt + '\n\n⏳ Processing...');
      const timeout = setTimeout(() => {
        setPhase('response');
        charIndexRef.current = 0;
      }, 1200);
      return () => clearTimeout(timeout);
    } else if (phase === 'response') {
      // Type out the response
      const fullText = currentResponse.prompt + '\n\n' + currentResponse.response;
      const startIndex = currentResponse.prompt.length + 2;
      charIndexRef.current = startIndex;
      
      interval = setInterval(() => {
        if (charIndexRef.current <= fullText.length) {
          setDisplayText(fullText.slice(0, charIndexRef.current));
          charIndexRef.current++;
        } else {
          clearInterval(interval);
          setPhase('pause');
        }
      }, 25);
    } else if (phase === 'pause') {
      // Pause before next cycle
      const timeout = setTimeout(() => {
        setResponseIndex((prev) => (prev + 1) % aiResponses.length);
        setPhase('prompt');
        setDisplayText('');
      }, 3000);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [phase, responseIndex]);

  return (
    <section className={styles.section}>
      {/* Animated Data Streams Background */}
      <div className={styles.dataStreams}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.dataStream}
            style={{ left: `${10 + i * 12}%` }}
            animate={{
              y: ['-100%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>HOW IT WORKS</div>
          <h2 className={styles.title}>
            From Data to <span className={styles.highlight}>Decisions</span>
          </h2>
        </motion.div>

        {/* Main Flow Visualization */}
        <div className={styles.flowContainer}>
          {/* Data Input Section */}
          <motion.div 
            className={styles.inputSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📥</span>
              <h3 className={styles.sectionTitle}>Data Input</h3>
            </div>
            <div className={styles.inputCards}>
              {dataInputs.map((input, i) => (
                <motion.div
                  key={input.label}
                  className={styles.inputCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <span className={styles.inputIcon}>{input.icon}</span>
                  <span className={styles.inputLabel}>{input.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Processing Pipeline */}
          <div className={styles.pipelineSection}>
            {/* Flow Arrow from Input */}
            <motion.div 
              className={styles.flowArrow}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.arrowLine} />
              <div className={styles.arrowHead}>→</div>
            </motion.div>

            {/* Processing Stages */}
            <div className={styles.stagesContainer}>
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`${styles.stageNode} ${activeStage === index ? styles.activeStage : ''}`}
                  style={{ '--stage-color': stage.color } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                  onClick={() => setActiveStage(index)}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className={styles.nodeGlow}
                    style={{ background: stage.color }}
                    animate={{
                      scale: activeStage === index ? [1, 1.5, 1] : 1,
                      opacity: activeStage === index ? [0.3, 0.6, 0.3] : 0.2
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className={styles.nodeIcon}>{stage.icon}</div>
                  <motion.div 
                    className={styles.nodeRing}
                    style={{ borderColor: stage.color }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className={styles.nodeLabel}>{stage.title}</div>
                  
                  {/* Stage Description - appears below active node */}
                  <AnimatePresence>
                    {activeStage === index && (
                      <motion.div
                        className={styles.stageInfo}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{ borderColor: stage.color }}
                      >
                        <p>{stage.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Connection lines between stages */}
              <svg className={styles.stageConnections} viewBox="0 0 400 60">
                <motion.line
                  x1="60" y1="30" x2="170" y2="30"
                  stroke="url(#stageGrad1)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.line
                  x1="230" y1="30" x2="340" y2="30"
                  stroke="url(#stageGrad2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <defs>
                  <linearGradient id="stageGrad1">
                    <stop offset="0%" stopColor="#7E9FFF" />
                    <stop offset="100%" stopColor="#FF69B4" />
                  </linearGradient>
                  <linearGradient id="stageGrad2">
                    <stop offset="0%" stopColor="#FF69B4" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Flow Arrow to Output */}
            <motion.div 
              className={styles.flowArrow}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.arrowLine} />
              <div className={styles.arrowHead}>→</div>
            </motion.div>
          </div>

          {/* Output Section */}
          <motion.div 
            className={styles.outputSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🤖</span>
              <h3 className={styles.sectionTitle}>AI Output</h3>
            </div>
            
            {/* AI Text Generator */}
            <div className={styles.typingArea}>
              <div className={styles.terminalHeader}>
                <span className={styles.terminalDot} style={{ background: '#FF6B6B' }} />
                <span className={styles.terminalDot} style={{ background: '#FFD93D' }} />
                <span className={styles.terminalDot} style={{ background: '#6BCB77' }} />
                <span className={styles.terminalTitle}>DUSKER AI Terminal</span>
              </div>
              <div className={styles.terminalContent}>
                <div className={styles.typingText}>
                  {displayText.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('ANALYSIS') || line.startsWith('SYNTHESIS') || line.startsWith('THREAT') || line.startsWith('BRIEFING') ? styles.responseText : styles.promptText}>
                      {line}
                    </div>
                  ))}
                  <motion.span 
                    className={styles.cursor}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >▊</motion.span>
                </div>
              </div>
            </div>

            {/* Output Cards */}
            <div className={styles.outputCards}>
              {outputs.map((output, i) => (
                <motion.div
                  key={output.label}
                  className={styles.outputCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <span className={styles.outputIcon}>{output.icon}</span>
                  <span className={styles.outputLabel}>{output.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stage Selector */}
        <div className={styles.stageSelector}>
          {stages.map((stage, i) => (
            <motion.button
              key={stage.id}
              className={`${styles.selectorBtn} ${activeStage === i ? styles.activeBtn : ''}`}
              onClick={() => setActiveStage(i)}
              style={{ '--btn-color': stage.color } as React.CSSProperties}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.btnIcon}>{stage.icon}</span>
              <span className={styles.btnText}>{stage.title}</span>
              {activeStage === i && (
                <motion.div 
                  className={styles.btnIndicator}
                  layoutId="stageIndicator"
                  style={{ background: stage.color }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
