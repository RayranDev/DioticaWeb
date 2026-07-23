import React from 'react';

export default function ExamsSection() {
  const steps = [
    {
      num: '01',
      title: 'Anamnesis & Historial',
      desc: 'Escuchamos tus síntomas, horas frente a pantallas, antecedentes visuales y necesidades de tu rutina diaria.'
    },
    {
      num: '02',
      title: 'Refracción Computarizada',
      desc: 'Medición objetiva digital de miopía, astigmatismo, hipermetropía o presbicia con equipos de alta resolución.'
    },
    {
      num: '03',
      title: 'Salud Macular & Presión',
      desc: 'Revisión preventiva de estructuras oculares internas, córnea, cristalino y cámara anterior.'
    },
    {
      num: '04',
      title: 'Formulación Personalizada',
      desc: 'Recomendación exacta del diseño de lente, tratamiento antirreflejo y asesoría morfológica de montura.'
    }
  ];

  return (
    <section id="examenes">
      <div className="wrap">
        <div className="section-head text-center">
          <p className="eyebrow justify-center">Exámenes Visuales</p>
          <h2>Un proceso de consulta riguroso y transparente</h2>
          <p>Nuestra consulta de 45 minutos garantiza que recibas la fórmula exacta sin prisas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-[var(--surface)] p-6 rounded-[var(--radius)] border border-[var(--line)] relative">
              <span className="font-mono text-2xl font-bold text-[var(--secondary)] block mb-3 opacity-90">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-[var(--primary-ink)]">{step.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
