'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SAMPLE_STATS } from '@/lib/data';

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(SAMPLE_STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const duration = 1400;

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);

            setCounts(
              SAMPLE_STATS.map((stat) => {
                if (stat.number < 10) {
                  return parseFloat((stat.number * progress).toFixed(1));
                }
                return Math.floor(stat.number * progress);
              })
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="wrap">
        {SAMPLE_STATS.map((stat, i) => (
          <div key={i}>
            <div className="stat-num">
              {counts[i]}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
