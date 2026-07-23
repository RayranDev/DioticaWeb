'use client';

import React, { useState } from 'react';

interface ChatTestimonial {
  id: number;
  name: string;
  role: string;
  avatarBg: string;
  avatarInitials: string;
  time: string;
  message: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: ChatTestimonial[] = [
    {
      id: 1,
      name: "Camila R.",
      role: "Diseñadora UI · Paciente de Ópticas DIOTICA",
      avatarBg: "#0F4C81",
      avatarInitials: "CR",
      time: "10:42 AM",
      message: "Por primera vez siento que unas gafas no me disfrazan. Me asesoraron pensando en la forma de mi rostro y en las horas que paso frente al computador. ¡Quedé feliz con mis lentes!",
      rating: 5
    },
    {
      id: 2,
      name: "Jorge M.",
      role: "Arquitecto · Paciente de Ópticas DIOTICA",
      avatarBg: "#3A86C8",
      avatarInitials: "JM",
      time: "02:15 PM",
      message: "El examen no fue de 5 minutos como en las cadenas comerciales. Me explicaron en detalle la fatiga visual que tenía y me ayudaron a elegir la montura exacta. Totalmente profesional.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena V.",
      role: "Docente · Paciente de Ópticas DIOTICA",
      avatarBg: "#0A365C",
      avatarInitials: "EV",
      time: "05:30 PM",
      message: "Atención personalizada de verdad. No intentaron venderme la opción más cara, sino lo que mejor se adaptaba a mi formulación y mi rutina de trabajo.",
      rating: 5
    }
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="testimonios" className="bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="wrap max-w-4xl">
        <div className="section-head text-center">
          <p className="eyebrow justify-center">Experiencias Reales</p>
          <h2>Lo que dicen nuestros pacientes</h2>
          <p>Conversaciones e impresiones reales de personas que confían su salud visual a Ópticas DIOTICA.</p>
        </div>

        {/* Chat Window Container */}
        <div className="bg-white rounded-[12px] border border-[var(--line)] shadow-soft overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[var(--primary)] text-white p-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">
                💬
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white font-title">Pacientes Verificados</h3>
                <p className="text-[0.7rem] text-white/80 font-mono">En línea · Respuestas y Reseñas Reales</p>
              </div>
            </div>

            <div className="flex gap-1">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === idx
                      ? 'bg-white text-[var(--primary)] font-bold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Conversation Body */}
          <div className="p-6 bg-[#F0F4F8] space-y-6 min-h-[260px] flex flex-col justify-center">
            {testimonials.map((item, idx) => {
              if (idx !== activeTab) return null;
              return (
                <div key={item.id} className="flex gap-4 items-start max-w-2xl mx-auto w-full animate-fadeIn">
                  {/* Avatar Bubble */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0 border-2 border-white"
                    style={{ backgroundColor: item.avatarBg }}
                  >
                    {item.avatarInitials}
                  </div>

                  {/* Chat Message Bubble */}
                  <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-[var(--line)] shadow-sm relative flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                      <span className="font-semibold text-sm text-[var(--primary-ink)]">{item.name}</span>
                      <span className="text-[0.7rem] text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        ✓ Paciente Verificado
                      </span>
                    </div>

                    <p className="text-xs text-[var(--muted)] font-mono mb-3">{item.role}</p>

                    <p className="text-sm text-[var(--ink)] leading-relaxed italic">
                      &ldquo;{item.message}&rdquo;
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex text-amber-400">
                        {Array.from({ length: item.rating }).map((_, r) => (
                          <span key={r}>★</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400 font-mono">
                        <span>{item.time}</span>
                        <span className="text-blue-500 font-bold">✓✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Footer selector */}
          <div className="p-4 bg-white border-t border-[var(--line)] flex justify-between items-center text-xs text-[var(--muted)] flex-wrap gap-2">
            <span>Haz clic en los nombres arriba para explorar opiniones de pacientes.</span>
            <span className="font-mono font-semibold text-[var(--primary)]">★ 4.9 / 5.0 Satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  );
}
