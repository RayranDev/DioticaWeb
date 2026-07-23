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
            <p className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase font-semibold mb-3">
              Ve mejor, vive mejor
            </p>
            <p className="text-sm text-[rgba(255,255,255,0.7)] max-w-xs">
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
              <li><Link href="/#agenda">Examen especializado</Link></li>
              <li><Link href="/#agenda">Control de fatiga visual</Link></li>
              <li><Link href="/#agenda">Lentes de contacto</Link></li>
              <li><Link href="/#agenda">Asesoría de montura</Link></li>
            </ul>
          </div>

          <div>
            <h4>Gestión & Contacto</h4>
            <ul>
              <li><a href="https://wa.me/573208275234" target="_blank" rel="noopener noreferrer">WhatsApp: +57 320 827 5234</a></li>
              <li><span>Citas presenciales previa agenda</span></li>
              <li><Link href="/admin" className="text-[var(--accent)] font-mono font-semibold underline">⚙️ Panel Admin Productos</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} Ópticas DIOTICA — Ve mejor, vive mejor. Todos los derechos reservados.</span>
          <span>El examen óptico especializado requiere agendamiento previo.</span>
        </div>
      </div>
    </footer>
  );
}
