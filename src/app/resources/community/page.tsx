"use client";

import React from 'react';
import { motion } from '../../../components/motion';
import Image from 'next/image';
import Link from 'next/link';

const communityEvents = [
  {
    title: "AI Training Summit 2025",
    date: "July 15-17, 2025",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    description: "Join us for the largest gathering of AI training professionals and learn about the latest advancements in data labeling and model training."
  },
  {
    title: "Dusker Developer Conference",
    date: "September 5-7, 2025",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
    description: "Connect with Dusker engineers and fellow developers to explore best practices for implementing AI training pipelines."
  },
  {
    title: "GenAI Hackathon",
    date: "October 12-14, 2025",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    description: "Build innovative solutions using Dusker's GenAI Platform in this 48-hour virtual hackathon with $50,000 in prizes."
  }
];

const communityChannels = [
  {
    name: "Dusker Forum",
    icon: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    description: "Connect with thousands of Dusker users to ask questions and share knowledge.",
    link: "https://forum.dusker.ai"
  },
  {
    name: "Discord Community",
    icon: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
    description: "Join our Discord server for real-time discussions and community support.",
    link: "https://discord.gg/dusker"
  },
  {
    name: "GitHub",
    icon: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1888&auto=format&fit=crop",
    description: "Explore our open-source projects and contribute to the Dusker ecosystem.",
    link: "https://github.com/dusker"
  },
  {
    name: "YouTube Channel",
    icon: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
    description: "Watch tutorials, webinars, and product demos on our official YouTube channel.",
    link: "https://youtube.com/dusker"
  }
];

export default function CommunityPage() {
  return (
    <div className="community-container">
      <motion.div 
        className="community-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="community-hero-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Join the Dusker Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Connect with AI professionals, share knowledge, and build together
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#channels" className="primary-button">Join Now</a>
            <a href="#events" className="secondary-button">Upcoming Events</a>
          </motion.div>
        </div>
      </motion.div>

      <section id="channels" className="community-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Community Channels
        </motion.h2>
        <div className="channels-grid">
          {communityChannels.map((channel, index) => (
            <motion.div 
              key={channel.name}
              className="channel-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="channel-icon">
                <Image 
                  src={channel.icon}
                  alt={channel.name}
                  width={60}
                  height={60}
                  className="icon-image"
                  unoptimized
                />
              </div>
              <h3>{channel.name}</h3>
              <p>{channel.description}</p>
              <a href={channel.link} target="_blank" rel="noopener noreferrer" className="channel-link">
                Join Channel →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="events" className="community-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h2>
        <div className="events-grid">
          {communityEvents.map((event, index) => (
            <motion.div 
              key={event.title}
              className="event-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="event-image">
                <Image 
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="event-img"
                  unoptimized
                />
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">{event.date}</span>
                  <span className="event-location">{event.location}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <a href="#" className="event-link">Learn More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <motion.div 
          className="community-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-content">
            <h2>Become a Dusker Champion</h2>
            <p>
              Join our advocacy program to get exclusive access to beta features, 
              special events, and recognition for your contributions to the community.
            </p>
            <a href="#" className="primary-button">Apply Now</a>
          </div>
          <div className="cta-image">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Dusker Champions"
              width={400}
              height={300}
              className="cta-img"
              unoptimized
            />
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .community-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }
        
        .community-hero {
          background: linear-gradient(135deg, #6a5af9 0%, #f857a6 100%);
          border-radius: 16px;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .community-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
          opacity: 0.1;
          z-index: 0;
        }
        
        .community-hero-content {
          position: relative;
          z-index: 1;
        }
        
        .community-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        
        .community-hero p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }
        
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        .primary-button {
          background: #232344;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .primary-button:hover {
          background: #1a1a33;
          transform: translateY(-2px);
        }
        
        .secondary-button {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .community-section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #232344;
          text-align: center;
        }
        
        .channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .channel-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }
        
        .channel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .channel-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        
        .icon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .channel-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          color: #232344;
        }
        
        .channel-card p {
          color: #64748b;
          margin: 0 0 1.5rem;
          flex-grow: 1;
        }
        
        .channel-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
          margin-top: auto;
        }
        
        .channel-link:hover {
          color: #7c3aed;
        }
        
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .event-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .event-image {
          height: 200px;
          overflow: hidden;
        }
        
        .event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .event-card:hover .event-img {
          transform: scale(1.05);
        }
        
        .event-content {
          padding: 1.5rem;
        }
        
        .event-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .event-date, .event-location {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .event-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.75rem;
          color: #232344;
        }
        
        .event-card p {
          color: #64748b;
          margin: 0 0 1.5rem;
        }
        
        .event-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
        }
        
        .event-link:hover {
          color: #7c3aed;
        }
        
        .community-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #fdf2f8 100%);
          border-radius: 16px;
          overflow: hidden;
          padding: 3rem;
        }
        
        .cta-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .cta-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #232344;
        }
        
        .cta-content p {
          color: #64748b;
          margin: 0 0 2rem;
          font-size: 1.125rem;
          line-height: 1.6;
        }
        
        .cta-image {
          border-radius: 12px;
          overflow: hidden;
        }
        
        .cta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .community-hero {
            padding: 3rem 1.5rem;
          }
          
          .community-hero h1 {
            font-size: 2.25rem;
          }
          
          .events-grid {
            grid-template-columns: 1fr;
          }
          
          .community-cta {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          
          .cta-image {
            order: -1;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
