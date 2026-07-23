import React from 'react';
import Link from 'next/link';

export default function PromotionsSection() {
  const promos = [
    {
      badge: 'Paquete Chequeo',
      title: 'Examen Completo + Filtro Luz Azul',
      desc: 'Consulta médica optométrica de 45 min con refracción computarizada e inclusión de filtro protector pantallas.',
      price: '$120.000',
      action: 'Reservar Paquete'
    },
    {
      badge: 'Combo Dúo',
      title: 'Montura de Colección + Lentes Antirreflejo',
      desc: 'Elige tu montura en acetato o metal con lentes formulados antirreflejos de alta definición incluidos.',
      price: 'Desde $249.000',
      action: 'Ver Opciones'
    },
    {
      badge: 'Plan Familiar',
      title: '2 Exámenes de Consulta al Precio de 1',
      desc: 'Agenda tu examen óptico junto a un familiar o pareja para realizar su diagnóstico integral en la misma sesión.',
      price: 'Promoción Salud',
      action: 'Agendar Familiar'
    }
  ];

  return (
    <section id="promociones" className="bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="wrap">
        <div className="section-head text-center">
          <p className="eyebrow justify-center">Planes & Promociones</p>
          <h2>Paquetes de Salud Visual Integrales</h2>
          <p>Soluciones diseñadas para proteger la visión de toda la familia con tarifas transparentes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((p, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[var(--radius)] border border-[var(--line)] flex flex-col justify-between shadow-soft">
              <div>
                <span className="text-[0.7rem] font-mono font-bold uppercase bg-[var(--surface)] text-[var(--primary)] px-3 py-1 rounded inline-block mb-3 border border-[var(--line)]">
                  {p.badge}
                </span>
                <h3 className="text-lg font-semibold text-[var(--primary-ink)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div>
                <div className="text-xl font-bold font-mono text-[var(--primary)] mb-4">{p.price}</div>
                <Link href="#agenda" className="btn-primary w-full justify-center text-xs py-2.5">
                  {p.action}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
