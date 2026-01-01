import React from "react";
import styles from "./AnimatedSection.module.css";

interface AnimatedSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function AnimatedSection({ title, children }: AnimatedSectionProps) {
  return (
    <section className={styles.animatedSection}>
      <h1 className={styles.animatedTitle}>{title}</h1>
      <div className={styles.animatedContent}>{children}</div>
      <div className={styles.bgAnimation}>
        <span className={styles.circle1}></span>
        <span className={styles.circle2}></span>
        <span className={styles.circle3}></span>
      </div>
    </section>
  );
}
