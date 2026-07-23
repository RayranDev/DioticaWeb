import React from 'react';

export default function WhySection() {
  return (
    <section id="nosotros">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Nuestra diferencia</p>
          <h2>Salud primero. Estilo siempre.</h2>
          <p>No somos una tienda de gafas en serie. Combinamos la precisión diagnóstica con la curaduría de monturas.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3" />
              <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
            <h3>Examen clínico sin afán</h3>
            <p>45 minutos dedicados a tu refracción, salud macular y fatiga digital. Nada de revisiones exprés.</p>
          </div>

          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
            </svg>
            <h3>Asesoría morfológica</h3>
            <p>Analizamos la forma de tu rostro, tono de piel y estilo de vida para sugerirte marcos que sí te favorezcan.</p>
          </div>

          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
            </svg>
            <h3>Lentes de grado óptico</h3>
            <p>Tratamientos antirreflejo premium, filtros de luz azul reales y diseños progresivos de alta definición.</p>
          </div>

          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <h3>Garantía de adaptación</h3>
            <p>Si en 30 días sientes incomodidad con tus formulados, ajustamos tus lentes sin costo adicional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
