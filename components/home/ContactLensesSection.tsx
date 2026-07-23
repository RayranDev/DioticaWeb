import React from 'react';
import Link from 'next/link';

export default function ContactLensesSection() {
  const lensTypes = [
    { title: 'Lentes Diarios Desechables', desc: 'Máxima higiene y comodidad sin necesidad de líquidos de mantenimiento.' },
    { title: 'Lentes Tóricos para Astigmatismo', desc: 'Estabilidad de eje visual precisa para una corrección sin borrosidad.' },
    { title: 'Lentes Multifocales / Progresivos', desc: 'Visión nítida continua de cerca, distancia intermedia y lejos.' },
    { title: 'Lentes Rígidos Gas Permeables', desc: 'Para queratocono o graduaciones córneas especiales de alta precisión.' }
  ];

  return (
    <section id="lentes-contacto">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contactología Especializada</p>
            <h2>Adaptación experta de Lentes de Contacto</h2>
            <p className="text-[var(--muted)] mt-4 mb-6 leading-relaxed">
              No todos los ojos son iguales. Realizamos pruebas de curvatura corneal y tolerancia lagrimal para recomendarte la solución ideal para tu estilo de vida.
            </p>
            <Link href="#agenda" className="btn-primary">
              Agendar Prueba de Lentes
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lensTypes.map((item, idx) => (
              <div key={idx} className="bg-[var(--surface)] p-6 rounded-[var(--radius)] border border-[var(--line)]">
                <h3 className="text-base font-semibold text-[var(--primary-ink)] mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
