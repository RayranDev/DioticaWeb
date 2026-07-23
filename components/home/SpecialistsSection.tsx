import React from 'react';

export default function SpecialistsSection() {
  const specialists = [
    {
      name: 'Dra. Carolina Mendoza',
      role: 'Optómetra Especialista en Refracción & Contactología',
      credentials: 'Reg. Médico Optometría · 14 Años de Experiencia',
      bio: 'Especialista en diagnóstico computarizado, lentes de contacto toricos y control de miopía progresiva.'
    },
    {
      name: 'Dr. Alejandro Silva',
      role: 'Optómetra Especialista en Salud Ocular & Fatiga Digital',
      credentials: 'Reg. Médico Optometría · 10 Años de Experiencia',
      bio: 'Experto en ergonomía visual, síndrome de ojo seco y lentes antirreflejos de alta definición.'
    }
  ];

  return (
    <section id="especialistas" className="bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Equipo Médico</p>
          <h2>Profesionales certificados a cargo de tu visión</h2>
          <p>En Ópticas DIOTICA serás atendido exclusivamente por profesionales titulados y registrados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {specialists.map((doc, i) => (
            <div key={i} className="bg-white p-8 rounded-[var(--radius)] border border-[var(--line)] shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xl font-title">
                  {doc.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-ink)]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[var(--secondary)] mt-0.5">{doc.role}</p>
                  <p className="text-[0.75rem] font-mono text-[var(--muted)] mt-1">{doc.credentials}</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--line)] pt-4 mt-2">
                {doc.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
