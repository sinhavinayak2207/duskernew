"use client";

import React from 'react';
import { motion } from '../../../components/motion';
import Image from 'next/image';
import Link from 'next/link';

const apiEndpoints = [
  {
    name: 'Data Engine API',
    description: 'Endpoints for data labeling and annotation',
    endpoints: [
      { method: 'GET', path: '/api/v1/datasets', description: 'List all datasets' },
      { method: 'POST', path: '/api/v1/datasets', description: 'Create a new dataset' },
      { method: 'GET', path: '/api/v1/datasets/{id}', description: 'Get dataset details' },
      { method: 'PUT', path: '/api/v1/datasets/{id}', description: 'Update dataset' },
    ]
  },
  {
    name: 'GenAI Platform API',
    description: 'Endpoints for generative AI model management',
    endpoints: [
      { method: 'GET', path: '/api/v1/models', description: 'List all models' },
      { method: 'POST', path: '/api/v1/models/train', description: 'Train a new model' },
      { method: 'GET', path: '/api/v1/models/{id}', description: 'Get model details' },
      { method: 'POST', path: '/api/v1/models/{id}/deploy', description: 'Deploy model' },
    ]
  },
  {
    name: 'Evaluation API',
    description: 'Endpoints for model evaluation and testing',
    endpoints: [
      { method: 'GET', path: '/api/v1/evaluations', description: 'List all evaluations' },
      { method: 'POST', path: '/api/v1/evaluations', description: 'Create a new evaluation' },
      { method: 'GET', path: '/api/v1/evaluations/{id}', description: 'Get evaluation details' },
      { method: 'GET', path: '/api/v1/evaluations/{id}/metrics', description: 'Get evaluation metrics' },
    ]
  },
];

export default function ApiReferencePage() {
  return (
    <div className="api-container">
      <motion.div 
        className="api-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="api-hero-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dusker API Reference
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Complete documentation for the Dusker AI Training Platform API
          </motion.p>
          <motion.div 
            className="search-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input 
              type="text" 
              placeholder="Search API endpoints..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </motion.div>
        </div>
      </motion.div>

      <div className="api-content">
        <motion.div 
          className="api-sidebar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>API Services</h2>
          <ul className="api-nav">
            {apiEndpoints.map((api) => (
              <li key={api.name}>
                <a href={`#${api.name.toLowerCase().replace(/\s+/g, '-')}`}>{api.name}</a>
              </li>
            ))}
          </ul>
          <div className="api-resources">
            <h3>Resources</h3>
            <ul>
              <li><Link href="/resources/docs">Documentation</Link></li>
              <li><Link href="/resources/guides">Implementation Guides</Link></li>
              <li><Link href="/resources/community">Community Support</Link></li>
            </ul>
          </div>
        </motion.div>

        <div className="api-main">
          <motion.div 
            className="api-overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>Overview</h2>
            <p>
              The Dusker API provides programmatic access to Dusker's AI training platform. 
              Use our API to manage datasets, train models, evaluate performance, and deploy 
              AI solutions at scale. All API endpoints use HTTPS and return JSON responses.
            </p>
            <div className="api-code-sample">
              <div className="code-header">
                <span>Example Request</span>
              </div>
              <pre>
                <code>
{`curl -X GET "https://api.dusker.ai/v1/datasets" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </code>
              </pre>
            </div>
          </motion.div>

          <motion.div 
            className="api-authentication"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2>Authentication</h2>
            <p>
              Dusker uses API keys for authentication. You can generate an API key from your 
              dashboard. Include your API key in the Authorization header of all requests.
            </p>
            <div className="api-code-sample">
              <div className="code-header">
                <span>Authentication Header</span>
              </div>
              <pre>
                <code>
{`Authorization: Bearer YOUR_API_KEY`}
                </code>
              </pre>
            </div>
          </motion.div>

          {apiEndpoints.map((api, index) => (
            <motion.div 
              key={api.name}
              id={api.name.toLowerCase().replace(/\s+/g, '-')}
              className="api-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
            >
              <h2>{api.name}</h2>
              <p>{api.description}</p>
              <div className="api-endpoints">
                {api.endpoints.map((endpoint) => (
                  <div key={endpoint.path} className="api-endpoint">
                    <div className="endpoint-header">
                      <span className={`method ${endpoint.method.toLowerCase()}`}>{endpoint.method}</span>
                      <span className="path">{endpoint.path}</span>
                    </div>
                    <div className="endpoint-description">
                      {endpoint.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .api-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }
        
        .api-hero {
          background: linear-gradient(135deg, #6a5af9 0%, #f857a6 100%);
          border-radius: 16px;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .api-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop') center/cover no-repeat;
          opacity: 0.1;
          z-index: 0;
        }
        
        .api-hero-content {
          position: relative;
          z-index: 1;
        }
        
        .api-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        
        .api-hero p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }
        
        .search-container {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
        }
        
        .search-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 8px 0 0 8px;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .search-button {
          background: #232344;
          color: white;
          border: none;
          border-radius: 0 8px 8px 0;
          padding: 0 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .search-button:hover {
          background: #1a1a33;
        }
        
        .api-content {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 3rem;
        }
        
        .api-sidebar {
          position: sticky;
          top: 2rem;
          height: fit-content;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .api-sidebar h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #232344;
        }
        
        .api-sidebar h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: 1.5rem 0 0.75rem;
          color: #232344;
        }
        
        .api-nav, .api-resources ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .api-nav li, .api-resources li {
          margin-bottom: 0.75rem;
        }
        
        .api-nav a, .api-resources a {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: inline-block;
        }
        
        .api-nav a:hover, .api-resources a:hover {
          color: #7c3aed;
        }
        
        .api-main {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .api-overview, .api-authentication, .api-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .api-main h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #232344;
        }
        
        .api-main p {
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 1.5rem;
        }
        
        .api-code-sample {
          background: #232344;
          border-radius: 8px;
          overflow: hidden;
          margin: 1.5rem 0;
        }
        
        .code-header {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #e2e8f0;
        }
        
        pre {
          margin: 0;
          padding: 1rem;
          overflow-x: auto;
        }
        
        code {
          font-family: 'Fira Code', monospace;
          color: #e2e8f0;
          font-size: 0.875rem;
        }
        
        .api-endpoints {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .api-endpoint {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .endpoint-header {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.02);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .method {
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          margin-right: 1rem;
          text-transform: uppercase;
        }
        
        .get {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .post {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        .put {
          background: rgba(249, 115, 22, 0.1);
          color: #f97316;
        }
        
        .delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .path {
          font-family: 'Fira Code', monospace;
          font-size: 0.875rem;
          color: #232344;
        }
        
        .endpoint-description {
          padding: 0.75rem 1rem;
          color: #64748b;
        }
        
        @media (max-width: 768px) {
          .api-hero {
            padding: 3rem 1.5rem;
          }
          
          .api-hero h1 {
            font-size: 2.25rem;
          }
          
          .api-content {
            grid-template-columns: 1fr;
          }
          
          .api-sidebar {
            position: static;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
