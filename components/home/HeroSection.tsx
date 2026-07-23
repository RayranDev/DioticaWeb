import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="wrap" id="inicio">
      <div className="hero">
        <div>
          <p className="eyebrow">Salud Visual Especializada · Ópticas DIOTICA</p>
          <h1>
            Precisión diagnóstica y cuidado avanzado para tu <span>salud visual</span>.
          </h1>
          <p className="lead">
            Optometristas certificados, tecnología digital de refracción HD y curaduría de monturas exclusivas. Cuidamos la salud de tus ojos con la atención personalizada que mereces.
          </p>
          
          <div className="hero-ctas">
            <Link href="#agenda" className="btn-primary">
              Agendar Cita Médica
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link href="/tienda" className="btn-secondary">
              Ver Catálogo de Monturas
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-[var(--muted)] font-mono flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-[var(--primary)]">
              <svg className="w-4 h-4 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Optometristas Certificados
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-[var(--primary)]">
              <svg className="w-4 h-4 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Examen Computarizado HD
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-[var(--primary)]">
              <svg className="w-4 h-4 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Garantía Adaptativa 30 Días
            </span>
          </div>
        </div>

        {/* Tarjeta de Ilustración / Diagnóstico Clínico */}
        <div className="hero-medical-card">
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center text-[var(--primary)] font-bold font-title">
                OD
              </div>
              <div>
                <h4 className="text-sm font-semibold">Consulta Óptico-Visual</h4>
                <p className="text-xs text-[var(--muted)]">Atención privada y personalizada</p>
              </div>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded font-mono font-medium">
              Agenda Disponible
            </span>
          </div>

          <div className="space-y-3 text-xs text-[var(--ink)] mb-6">
            <div className="p-3 bg-[var(--surface)] rounded flex justify-between items-center">
              <span>⏱ Duración de Consulta</span>
              <strong className="font-mono text-[var(--primary)]">45 Minutos Clínicos</strong>
            </div>
            <div className="p-3 bg-[var(--surface)] rounded flex justify-between items-center">
              <span>🔬 Examen de Refracción Digital</span>
              <strong className="font-mono text-[var(--primary)]">100% Preciso</strong>
            </div>
            <div className="p-3 bg-[var(--surface)] rounded flex justify-between items-center">
              <span>🛡 Filtro Antirreflejo AR & Luz Azul</span>
              <strong className="font-mono text-[var(--primary)]">Grado Óptico HD</strong>
            </div>
          </div>

          <Link href="#agenda" className="btn-primary w-full justify-center text-xs py-3">
            Reservar Consulta en Ópticas DIOTICA
          </Link>
        </div>
      </div>
    </div>
  );
}
