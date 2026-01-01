"use client";
import React from "react";

export default function BlogPage() {
  return (
    <main style={{padding: '2.5rem 0', maxWidth: '900px', margin: '0 auto'}}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 900, color: '#5d2e8c', marginBottom: '1.5rem'}}>Dusker Blog</h1>
      <p style={{fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1.2rem'}}>
        Insights, stories, and updates from the Dusker team. Stay tuned for the latest in AI, product news, and company culture!
      </p>
      <div style={{display:'flex',flexDirection:'column',gap:'2.5rem',marginTop:'2.5rem'}}>
        <div style={{background:'#eaf0ff',borderRadius:'1.2rem',padding:'2rem',boxShadow:'0 2px 12px rgba(126,159,255,0.07)'}}>
          <h2 style={{color:'#000000',fontWeight:800}}>How Dusker Powers Enterprise AI</h2>
          <p style={{color:'#000000',margin:'0.7rem 0'}}>Learn how Dusker’s modular platform accelerates model development, evaluation, and deployment for global enterprises.</p>
          <div style={{color:'#000000',fontSize:'0.98rem'}}>June 2025</div>
        </div>
        <div style={{background:'#fbc2eb',borderRadius:'1.2rem',padding:'2rem',boxShadow:'0 2px 12px rgba(126,159,255,0.07)'}}>
          <h2 style={{color:'#000000',fontWeight:800}}>AI Safety: Best Practices in 2025</h2>
          <p style={{color:'#000000',margin:'0.7rem 0'}}>A look at the latest research and tools for building safe, robust, and ethical AI systems.</p>
          <div style={{color:'#000000',fontSize:'0.98rem'}}>May 2025</div>
        </div>
        <div style={{background:'#fff',borderRadius:'1.2rem',padding:'2rem',boxShadow:'0 2px 12px rgba(126,159,255,0.07)'}}>
          <h2 style={{color:'#000000',fontWeight:800}}>Meet the Dusker Team</h2>
          <p style={{color:'#000000',margin:'0.7rem 0'}}>Get to know the people behind Dusker and what drives our mission for better AI.</p>
          <div style={{color:'#000000',fontSize:'0.98rem'}}>April 2025</div>
        </div>
      </div>
    </main>
  );
}
