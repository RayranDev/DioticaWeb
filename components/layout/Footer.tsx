import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="logo block mb-3">
              <Image
                src="/logo.png"
                alt="Ópticas DIOTICA — Ve mejor, vive mejor"
                width={260}
                height={75}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase font-bold mb-3">
              Ve mejor, vive mejor
            </p>
            <p className="text-sm text-[rgba(255,255,255,0.7)] max-w-xs leading-relaxed">
              Donde la salud visual y el estilo se enfocan. Asesoría personalizada y consulta óptico-visual especializada en Ópticas DIOTICA.
            </p>
          </div>

          <div>
            <h4>Colecciones</h4>
            <ul>
              <li><Link href="/tienda">Monturas en Acetato</Link></li>
              <li><Link href="/tienda">Monturas en Metal</Link></li>
              <li><Link href="/tienda">Titanio Ultraligero</Link></li>
              <li><Link href="/tienda">Lentes Filtro Luz Azul</Link></li>
            </ul>
          </div>

          <div>
            <h4>Salud Visual</h4>
            <ul>
              <li><Link href="/#servicios">Examen computarizado</Link></li>
              <li><Link href="/#examenes">Diagnóstico clínico</Link></li>
              <li><Link href="/#lentes-contacto">Lentes de contacto</Link></li>
              <li><Link href="/#promociones">Planes de salud visual</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacto & Citas</h4>
            <ul>
              <li><a href="https://wa.me/573208275234" target="_blank" rel="noopener noreferrer">WhatsApp: +57 320 827 5234</a></li>
              <li><span>Citas presenciales previa agenda</span></li>
              <li><span>Atención: Lun – Sáb 9:00am – 6:00pm</span></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-[rgba(255,255,255,0.12)]">
          <span>&copy; {new Date().getFullYear()} Ópticas DIOTICA — Ve mejor, vive mejor. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4 text-xs">
            <span>Consulta clínica previa cita.</span>
            <Link href="/admin" className="opacity-40 hover:opacity-100 transition-opacity font-mono text-[0.7rem] text-white">
              ⚙️ Acceso Portal Interno
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
