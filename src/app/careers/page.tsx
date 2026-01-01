"use client";
import React from "react";

export default function CareersPage() {
  return (
    <main style={{padding: '2.5rem 0', maxWidth: '900px', margin: '0 auto'}}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 900, color: '#5d2e8c', marginBottom: '1.5rem'}}>Careers at Dusker</h1>
      <p style={{fontSize: '1.15rem', color: '#ffffff', marginBottom: '1.2rem'}}>
        Join our mission to shape the future of AI. Dusker is a remote-friendly, globally distributed team of innovators, engineers, and creators.
      </p>
      <h2 style={{fontSize: '1.6rem', fontWeight: 700, color: '#7e9fff', margin: '2rem 0 1rem'}}>Open Positions</h2>
      <ul style={{marginBottom: '1.5rem', fontSize: '1.08rem', color: '#ffffff'}}>
        <li><b>Senior ML Engineer</b> – Remote, Full-time</li>
        <li><b>Frontend Developer</b> – Remote, Full-time</li>
        <li><b>Product Designer</b> – Remote, Full-time</li>
        <li><b>Technical Writer</b> – Remote, Contract</li>
      </ul>
      <h2 style={{fontSize: '1.6rem', fontWeight: 700, color: '#7e9fff', margin: '2rem 0 1rem'}}>Why Dusker?</h2>
      <ul style={{marginBottom: '1.5rem', fontSize: '1.08rem', color: '#ffffff'}}>
        <li>Flexible remote work and generous PTO</li>
        <li>Cutting-edge AI projects</li>
        <li>Collaborative, diverse team culture</li>
        <li>Learning and growth opportunities</li>
        <li>Competitive compensation & equity</li>
      </ul>
      <h2 style={{fontSize: '1.6rem', fontWeight: 700, color: '#7e9fff', margin: '2rem 0 1rem'}}>How to Apply</h2>
      <p style={{color: '#ffffff'}}>Email your resume and a short intro to <a href="mailto:careers@dusker.in" style={{color:'#5d2e8c'}}>careers@dusker.in</a> — we look forward to meeting you!</p>
    </main>
  );
}
