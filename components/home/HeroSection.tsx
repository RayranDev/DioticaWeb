import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="wrap" id="inicio">
      <div className="hero">
        <div>
          <p className="eyebrow">Salud visual + diseño consciente</p>
          <h1>
            Donde la salud visual y el estilo se <em>enfocan</em>.
          </h1>
          <p className="lead">
            Monturas seleccionadas por optometristas, lentes con protección real y una consulta pensada para escucharte — no para afanarte.
          </p>
          <div className="hero-ctas">
            <Link href="#agenda" className="btn-primary">
              Agenda tu asesoría
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/tienda" className="btn-secondary">
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="lens-mark" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <defs>
              <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C79A56" stopOpacity="0.28"/>
                <stop offset="60%" stopColor="#0E3B36" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#F1F3ED" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0E3B36"/>
                <stop offset="50%" stopColor="#C79A56"/>
                <stop offset="100%" stopColor="#0E3B36"/>
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="170" fill="url(#lensGlow)"/>
            <circle cx="200" cy="200" r="140" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="6 8" className="ring"/>
            <circle cx="200" cy="200" r="95" stroke="#0E3B36" strokeWidth="2.5" opacity="0.85"/>
            <circle cx="200" cy="200" r="40" stroke="#C79A56" strokeWidth="1.5"/>
            <circle cx="200" cy="200" r="4" fill="#0E3B36"/>
            <line x1="200" y1="30" x2="200" y2="70" stroke="#0E3B36" strokeWidth="1.5" opacity="0.5"/>
            <line x1="200" y1="330" x2="200" y2="370" stroke="#0E3B36" strokeWidth="1.5" opacity="0.5"/>
            <line x1="30" y1="200" x2="70" y2="200" stroke="#0E3B36" strokeWidth="1.5" opacity="0.5"/>
            <line x1="330" y1="200" x2="370" y2="200" stroke="#0E3B36" strokeWidth="1.5" opacity="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
