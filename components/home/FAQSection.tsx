'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuánto tiempo dura el examen óptico especializado?',
      a: 'Nuestra consulta clínica dura aproximadamente 45 minutos. Nos tomamos el tiempo necesario para evaluar tu salud macular, refracción computarizada, presión intraocular y antecedentes laborales o digitales.'
    },
    {
      q: '¿Tienen garantía los lentes y monturas?',
      a: 'Sí, todas nuestras monturas cuentan con 1 año de garantía por defectos de fábrica y ofrecemos una Garantía Adaptativa de 30 días para tus lentes formulados. Si sientes alguna incomodidad, ajustamos tus lentes sin costo adicional.'
    },
    {
      q: '¿Cuál es la diferencia entre lentes de luz azul y antirreflejo normal?',
      a: 'Los lentes antirreflejo eliminan los reflejos molestos de luces artificiales. El filtro de luz azul (AR Blue Control) añade una capa específica que bloquea la radiación violeta dañina emitida por pantallas de computador, tablets y celulares.'
    },
    {
      q: '¿Se requiere cita previa para el examen visual?',
      a: 'Recomendamos agendar previamente para asegurar que el optometrista dedique los 45 minutos exclusivos a tu consulta sin tiempos de espera.'
    },
    {
      q: '¿Cómo funciona la compra y disponibilidad de monturas?',
      a: 'Puedes explorar nuestro catálogo en línea, filtrar por material o forma de rostro y consultar la disponibilidad inmediata por WhatsApp o agendar una cita para probarlas de manera presencial en nuestra sede.'
    }
  ];

  return (
    <section id="faq">
      <div className="wrap max-w-4xl">
        <div className="section-head text-center">
          <p className="eyebrow justify-center">Resuelve tus Dudas</p>
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas claras sobre nuestra consulta clínica, garantías y proceso de atención.</p>
        </div>

        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  className="faq-button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-mono text-[var(--secondary)]">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
