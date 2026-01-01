'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GovDemos.module.css';

const videos = [
  {
    id: '2ue1nyuhry',
    title: 'Data Exploration with Data Engine',
    thumbnail: 'https://site-assets.plasmic.app/32ba91c39ed7553288132081ecbc56e9.png',
    description: ''
  },
  {
    id: 'aircraft-detection',
    title: 'Aircraft Detection and Model Evaluation',
    thumbnail: 'https://site-assets.plasmic.app/1373c290a63881e62f9b62df0f706862.png',
    description: ''
  },
  {
    id: 'prelabel',
    title: 'Accelerate Annotations with Prelabel',
    thumbnail: 'https://site-assets.plasmic.app/35b8cf28358ba220733f731a61bb0a9e.png',
    description: ''
  }
];

export default function GovDemos() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  }, [activeVideo, isPlaying]);

  const handleVideoClick = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>Demos</div>
          <h2 className={styles.title}>Public Sector Data Engine Demos</h2>
        </motion.div>

        <div className={styles.videoGallery}>
          {/* Main Video Player */}
          <motion.div
            className={styles.mainVideoWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.videoPlayer}>
              <div className={styles.videoContainer}>
                {!isPlaying ? (
                  <div className={styles.thumbnailWrapper} onClick={() => setIsPlaying(true)}>
                    <Image
                      src={videos[activeVideo].thumbnail}
                      alt={videos[activeVideo].title}
                      fill
                      className={styles.thumbnail}
                      sizes="100vw"
                    />
                    <div className={styles.playButton}>
                      <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                        <path fill="#FFF" d="M48.79 26.129l-33-19.508C13.104 5.035 9 6.574 9 10.492V49.5c0 3.516 3.816 5.637 6.79 3.871l33-19.5c2.94-1.734 2.952-6.008 0-7.742zm0 0"></path>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    preload="auto"
                    playsInline
                    controls
                    className={styles.video}
                    poster={videos[activeVideo].thumbnail}
                  >
                    <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.webm" type="video/webm" />
                    <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </motion.div>

          {/* Video Thumbnails Carousel */}
          <div className={styles.thumbnailsWrapper}>
            <div className={styles.thumbnailsScroll}>
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className={`${styles.thumbnailCard} ${activeVideo === index ? styles.active : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => handleVideoClick(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.thumbnailImageWrapper}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={384}
                      height={235}
                      className={styles.thumbnailImage}
                    />
                  </div>
                  <div className={styles.thumbnailContent}>
                    <h4 className={styles.thumbnailTitle}>{video.title}</h4>
                    {video.description && (
                      <p className={styles.thumbnailDescription}>{video.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className={styles.mobileDots}>
            {videos.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeVideo === index ? styles.activeDot : ''}`}
                onClick={() => handleVideoClick(index)}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
