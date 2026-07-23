import React from 'react';

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Servicios Clínicos</p>
          <h2>Cuidado integral de tu visión con respaldo profesional</h2>
          <p>Ofrecemos consultas optométricas de alta precisión diagnóstica con tecnología clínica de vanguardia.</p>
        </div>

        <div className="card-grid">
          <div className="medical-card">
            <div className="icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
            <h3>Examen Visual Computarizado</h3>
            <p>Evaluación minuciosa de refracción, enfoque y agudeza visual con diagnóstico preciso sin afán.</p>
          </div>

          <div className="medical-card">
            <div className="icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Control de Fatiga Digital</h3>
            <p>Diagnóstico de síndrome visual por computadora y prescripción de lentes con filtros de luz azul reales.</p>
          </div>

          <div className="medical-card">
            <div className="icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <h3>Topografía Corneal</h3>
            <p>Mapeo detallado de la superficie corneal para la adaptación precisa de lentes de contacto complejos.</p>
          </div>

          <div className="medical-card">
            <div className="icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3>Ortóptica & Terapia Visual</h3>
            <p>Planes de entrenamiento binocular y rehabilitación visual personalizada para mejorar el enfoque muscular.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
