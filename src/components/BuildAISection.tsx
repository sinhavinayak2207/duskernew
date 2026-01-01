'use client';

import React, { useEffect, useState } from 'react';
import styles from './BuildAISection.module.css';

const qaData = [
  { q: 'Why is human feedback necessary for accurate LLM responses?', a: 'LLMs are not always truthful or aligned with human preferences.' },
  { q: 'What is the role of RLHF in AI training?', a: 'RLHF helps models learn from human preferences to generate better outputs.' },
  { q: 'How does fine-tuning improve AI models?', a: 'Fine-tuning adapts pre-trained models to specific tasks using domain data.' },
  { q: 'What are the benefits of using generative AI?', a: 'Generative AI can create content, automate tasks, and enhance creativity.' },
  { q: 'How do you ensure AI model safety?', a: 'Through rigorous testing, red teaming, and continuous monitoring.' },
  { q: 'What is prompt engineering?', a: 'The practice of crafting inputs to get desired outputs from AI models.' },
  { q: 'Why is data quality important for AI?', a: 'High-quality data leads to more accurate and reliable model predictions.' },
  { q: 'What is transfer learning?', a: 'Using knowledge from one task to improve performance on another task.' },
  { q: 'How do you prevent AI bias?', a: 'By using diverse datasets and implementing fairness checks.' },
  { q: 'What is the difference between GPT-3 and GPT-4?', a: 'GPT-4 has improved reasoning, larger context, and better accuracy.' },
  { q: 'How does reinforcement learning work?', a: 'Agents learn by receiving rewards or penalties for their actions.' },
  { q: 'What are embeddings in AI?', a: 'Vector representations that capture semantic meaning of data.' },
  { q: 'Why use attention mechanisms?', a: 'They help models focus on relevant parts of input data.' },
  { q: 'What is zero-shot learning?', a: 'Models performing tasks without specific training examples.' },
  { q: 'How do you evaluate AI model performance?', a: 'Using metrics like accuracy, precision, recall, and F1 score.' },
  { q: 'What is the purpose of tokenization?', a: 'Breaking text into smaller units for model processing.' },
  { q: 'How does batch normalization help?', a: 'It stabilizes and speeds up neural network training.' },
  { q: 'What are transformer models?', a: 'Neural networks using self-attention for sequence processing.' },
  { q: 'Why is model interpretability important?', a: 'It builds trust and helps identify potential issues.' },
  { q: 'What is few-shot learning?', a: 'Learning from just a few examples of a new task.' },
  { q: 'How do you handle overfitting?', a: 'Through regularization, dropout, and cross-validation.' },
  { q: 'What is the role of activation functions?', a: 'They introduce non-linearity into neural networks.' },
  { q: 'How does gradient descent work?', a: 'It iteratively adjusts weights to minimize loss functions.' },
  { q: 'What are GANs used for?', a: 'Generating realistic synthetic data like images and text.' },
  { q: 'Why use ensemble methods?', a: 'Combining models often produces better predictions.' },
  { q: 'What is model compression?', a: 'Reducing model size while maintaining performance.' },
  { q: 'How do you deploy AI models?', a: 'Through APIs, edge devices, or cloud platforms.' },
  { q: 'What is continual learning?', a: 'Models learning new tasks without forgetting old ones.' },
  { q: 'Why is explainable AI important?', a: 'It helps users understand how AI makes decisions.' },
  { q: 'What are diffusion models?', a: 'Generative models that create data by reversing noise.' },
  { q: 'How does data augmentation help?', a: 'It increases training data diversity and model robustness.' },
  { q: 'What is multi-modal learning?', a: 'Processing and combining different types of data.' },
  { q: 'Why use pre-trained models?', a: 'They save time and resources while providing strong baselines.' },
  { q: 'What is model drift?', a: 'When model performance degrades over time due to data changes.' },
  { q: 'How do you optimize inference speed?', a: 'Through quantization, pruning, and hardware acceleration.' },
  { q: 'What are foundation models?', a: 'Large pre-trained models adaptable to many tasks.' },
  { q: 'Why is version control important for AI?', a: 'It tracks model changes and enables reproducibility.' },
  { q: 'What is federated learning?', a: 'Training models across decentralized devices without sharing data.' },
  { q: 'How do you handle imbalanced datasets?', a: 'Using resampling, weighted loss, or synthetic data.' },
  { q: 'What is model calibration?', a: 'Ensuring predicted probabilities match actual outcomes.' },
  { q: 'Why use cross-validation?', a: 'To assess model performance on different data splits.' },
  { q: 'What are language model hallucinations?', a: 'When models generate false or nonsensical information.' },
  { q: 'How does curriculum learning work?', a: 'Training models on progressively harder examples.' },
  { q: 'What is neural architecture search?', a: 'Automatically finding optimal network structures.' },
  { q: 'Why is data privacy important in AI?', a: 'To protect sensitive information and comply with regulations.' },
  { q: 'What are retrieval-augmented models?', a: 'Models that fetch relevant information to improve responses.' },
  { q: 'How do you measure AI fairness?', a: 'By analyzing outcomes across different demographic groups.' },
  { q: 'What is model distillation?', a: 'Transferring knowledge from large models to smaller ones.' },
  { q: 'Why use synthetic data?', a: 'To supplement real data and protect privacy.' },
  { q: 'What is active learning?', a: 'Strategically selecting which data to label for training.' },
  { q: 'How do you prevent prompt injection?', a: 'Through input validation and output filtering.' },
  { q: 'What are mixture of experts models?', a: 'Networks with specialized sub-models for different inputs.' },
  { q: 'Why is model monitoring important?', a: 'To detect performance issues and ensure reliability.' },
  { q: 'What is chain-of-thought prompting?', a: 'Guiding models to show reasoning steps in responses.' },
  { q: 'How do you scale AI systems?', a: 'Through distributed computing and efficient architectures.' },
  { q: 'What is the AI alignment problem?', a: 'Ensuring AI systems act according to human values.' },
  { q: 'Why use contrastive learning?', a: 'To learn representations by comparing similar and different examples.' },
  { q: 'What are agentic AI systems?', a: 'AI that can plan, act, and learn autonomously.' },
  { q: 'How do you test AI systems?', a: 'Through unit tests, integration tests, and adversarial testing.' },
  { q: 'What is model governance?', a: 'Policies and processes for responsible AI development and deployment.' }
];

export default function BuildAISection() {
  const [currentQAIndex, setCurrentQAIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  
  const currentQA = qaData[currentQAIndex];

  // Type the question
  useEffect(() => {
    setTypedText('');
    setShowResponse(false);
    setIsThinking(false);
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentQA.q.length) {
        setTypedText(currentQA.q.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Start thinking after question is typed
        setTimeout(() => {
          setIsThinking(true);
          // Show response after thinking
          setTimeout(() => {
            setIsThinking(false);
            setShowResponse(true);
          }, 1500); // 1.5 seconds thinking time
        }, 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentQAIndex, currentQA.q]);

  // Cycle through questions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQAIndex((prev) => (prev + 1) % qaData.length);
    }, 8000); // Change question every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.buildAISection}>
      <p className={styles.buildLabel}>BUILD AI</p>
      <h2 className={styles.buildTitle}>Powering Frontier AI</h2>
      <p className={styles.buildSubtitle}>Next Generation AI powered by world-class data.</p>

      <div className={styles.buildContent}>
        <div className={styles.aiDemoContainer}>
          <div className={styles.demoWindow}>
            <div className={styles.windowHeader}>
              <div className={styles.windowDots}>
                <span className={`${styles.dot} ${styles.red}`}></span>
                <span className={`${styles.dot} ${styles.yellow}`}></span>
                <span className={`${styles.dot} ${styles.green}`}></span>
              </div>
              <div className={styles.windowTitle}>AI Text Generator</div>
            </div>
            <div className={styles.demoContent}>
              <div className={styles.userQuery}>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User" 
                  className={styles.userAvatar}
                />
                <div className={styles.queryText}>{typedText}</div>
              </div>
              {isThinking && (
                <div className={styles.thinkingContainer}>
                  <div className={styles.thinkingBubble}>
                    <div className={styles.thinkingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              {showResponse && (
                <div className={styles.responseContainer}>
                  <div className={styles.aiResponse}>
                    <div className={styles.responseText}>
                      {currentQA.a}
                    </div>
                    <img 
                      src="/static/images/icons/llm-1.png" 
                      alt="AI" 
                      className={styles.aiAvatar}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="' + styles.aiAvatarFallback + '">🤖</span>');
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.generativeInfo}>
          <h3 className={styles.infoTitle}>Generative AI</h3>
          <p className={styles.infoSubtitle}>Powering the next generation of Generative AI</p>
          <p className={styles.infoDescription}>
            Dusker Generative AI Data Engine powers many of the most advanced LLMs and generative 
            models in the world through world-class RLHF, data generation, model evaluation, safety, 
            and alignment.
          </p>
          <div className={styles.infoButtons}>
            <button className={styles.btnDemo}>Book a Demo →</button>
            <button className={styles.btnBuild}>Build AI →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
