import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
        <p className="mb-4">
          These Terms of Service constitute a legally binding agreement made between you and Dusker, 
          concerning your access to and use of our website and services.
        </p>
        <p>
          You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. 
          If you do not agree with all of these terms, you are prohibited from using the site and services.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
        <p className="mb-4">
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
          functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
          (collectively, the "Content") and the trademarks, service marks, and logos contained therein 
          (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and 
          trademark laws and various other intellectual property rights.
        </p>
        <p>
          The Content and Marks are provided on the Site "AS IS" for your information and personal use only. 
          Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks 
          may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, 
          translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose 
          whatsoever, without our express prior written permission.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Representations</h2>
        <p className="mb-4">By using the Site, you represent and warrant that:</p>
        <ul className="list-disc pl-6">
          <li>All registration information you submit will be true, accurate, current, and complete</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
          <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
          <li>You are not a minor in the jurisdiction in which you reside</li>
          <li>You will not access the Site through automated or non-human means</li>
          <li>You will not use the Site for any illegal or unauthorized purpose</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have questions or concerns about these Terms of Service, please contact us at:
          <br />
          <a href="mailto:legal@dusker.ai" className="text-blue-600 hover:underline">legal@dusker.ai</a>
        </p>
      </section>
      
      <div className="text-sm text-gray-500 mt-12">
        Last updated: July 7, 2025
      </div>
    </div>
  );
}
