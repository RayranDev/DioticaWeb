'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactFormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Examen Computarizado');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Ópticas DIOTICA, deseo agendar una consulta médica:\n- Nombre: ${name}\n- Teléfono: ${phone}\n- Servicio: ${service}\n- Fecha deseada: ${date || 'Lo antes posible'}\n- Notas: ${notes || 'Sin observaciones'}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="agenda" className="bg-[var(--surface)] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">Agendamiento Directo</p>
            <h2>Reserva tu examen óptico en Ópticas DIOTICA</h2>
            <p className="text-[var(--muted)] mt-4 leading-relaxed">
              Dedicamos 45 minutos exclusivos a tu consulta en un espacio médico tranquilo, limpio y equipado con tecnología digital de alta precisión.
            </p>

            <div className="mt-8 space-y-4 text-sm font-mono text-[var(--primary)]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Atención clínica sin filas ni demoras</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Asesoría de montura morfológica incluida</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Confirmación inmediata por WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-[var(--radius)] border border-[var(--line)] shadow-soft">
            <h3 className="text-xl font-serif mb-6 text-[var(--primary-ink)]">Solicitar Cita de Salud Visual</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase font-semibold mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. María Fernanda Gómez"
                  className="w-full p-3 bg-[var(--surface)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase font-semibold mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="320 827 5234"
                  className="w-full p-3 bg-[var(--surface)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase font-semibold mb-1">
                  Servicio Requerido
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-3 bg-[var(--surface)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                >
                  <option value="Examen Computarizado">Examen Computarizado Completo</option>
                  <option value="Control Fatiga Digital">Control de Fatiga Digital / Pantallas</option>
                  <option value="Prueba Lentes Contacto">Adaptación Lentes de Contacto</option>
                  <option value="Asesoría Montura">Asesoría de Montura & Cristales</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase font-semibold mb-1">
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 bg-[var(--surface)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-xs text-[var(--primary)] uppercase font-semibold mb-1">
                  Observaciones o Síntomas (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Cansancio en los ojos al trabajar de noche, molestia con luz solar..."
                  className="w-full p-3 bg-[var(--surface)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)] resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-2">
                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-sm">
                  Enviar Solicitud por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
