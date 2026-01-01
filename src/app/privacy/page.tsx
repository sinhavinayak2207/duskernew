import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At Dusker, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
          please do not access the site.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you register for an account, 
          use our services, or communicate with us.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information such as name, email address, and company name</li>
          <li>Account credentials</li>
          <li>Payment information</li>
          <li>Communications you send to us</li>
        </ul>
        <p>
          We also automatically collect certain information when you visit, use or navigate our platform.
          This information does not reveal your specific identity but may include device and usage information.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect for various business purposes, including:</p>
        <ul className="list-disc pl-6">
          <li>To provide and maintain our services</li>
          <li>To process your transactions</li>
          <li>To send you service and support messages</li>
          <li>To respond to your comments or questions</li>
          <li>To provide user support</li>
          <li>To improve our website and services</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:privacy@dusker.ai" className="text-blue-600 hover:underline">privacy@dusker.ai</a>
        </p>
      </section>
      
      <div className="text-sm text-gray-500 mt-12">
        Last updated: July 7, 2025
      </div>
    </div>
  );
}
