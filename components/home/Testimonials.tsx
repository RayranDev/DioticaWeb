'use client';

import React, { useState, useEffect } from 'react';
import { SAMPLE_TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = SAMPLE_TESTIMONIALS.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section id="testimonios">
      <div className="wrap">
        <div className="section-head text-center mx-auto">
          <p className="eyebrow justify-center">Testimonios</p>
          <h2>Lo que dicen nuestros pacientes</h2>
        </div>

        <div
          className="testi-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="testi-track">
            {SAMPLE_TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className={`testi-slide ${idx === current ? 'active' : ''}`}
                aria-hidden={idx !== current}
              >
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <cite>
                  {item.author} — {item.role}
                </cite>
              </div>
            ))}
          </div>

          <div className="testi-controls">
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Testimonio anterior"
            >
              ←
            </button>
            <div className="testi-dots">
              {SAMPLE_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  aria-current={idx === current ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Testimonio siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
