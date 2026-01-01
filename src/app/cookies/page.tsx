import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is 
          stored in your web browser and allows the Service or a third-party to recognize you and make your 
          next visit easier and more useful to you.
        </p>
        <p>
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer 
          or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Dusker Uses Cookies</h2>
        <p className="mb-4">When you use and access our Service, we may place a number of cookie files in your web browser.</p>
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>To enable certain functions of the Service</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>To enable advertisements delivery, including behavioral advertising</li>
        </ul>
        <p>
          We use both session and persistent cookies on the Service and we use different types of cookies to run the Service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Essential cookies</h3>
          <p>These cookies are essential to provide you with services available through our website and to enable you to use certain features. Without these cookies, the services you ask for cannot be provided.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Functionality cookies</h3>
          <p>These cookies allow our website to remember choices you make when you use our website, such as remembering your language preferences. The purpose of these cookies is to provide you with a more personal experience.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Analytics cookies</h3>
          <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Choices Regarding Cookies</h2>
        <p className="mb-4">
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
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
