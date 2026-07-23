'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const isTienda = pathname === '/tienda';
  const isAdmin = pathname.startsWith('/admin');

  return (
    <header>
      <div className="nav wrap py-3">
        <Link href="/" className="logo flex items-center gap-3 group">
          {!logoError ? (
            <div className="flex flex-col">
              <Image
                src="/logo.png"
                alt="Ópticas DIOTICA — Ve mejor, vive mejor"
                width={240}
                height={70}
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={() => setLogoError(true)}
                priority
              />
              <span className="text-[0.62rem] font-mono tracking-widest text-[var(--accent)] uppercase font-semibold mt-0.5">
                Ve mejor, vive mejor
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[var(--primary)]">
                Ópticas <span className="text-[var(--accent)]">DIOTICA</span>
              </span>
              <span className="text-[0.65rem] tracking-widest uppercase text-[var(--accent)] font-mono font-semibold">
                Ve mejor, vive mejor
              </span>
            </div>
          )}
        </Link>
        
        <nav aria-label="Navegación principal" className="mobile-nav-desktop">
          <ul>
            <li>
              <Link href="/tienda" className={isTienda ? 'active' : ''}>
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/#nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/#testimonios">Testimonios</Link>
            </li>
            <li>
              <Link href="/#agenda">Agenda tu asesoría</Link>
            </li>
            <li>
              <Link href="/admin" className={`px-2.5 py-1 rounded bg-[var(--surface)] text-xs font-mono border border-[var(--line)] ${isAdmin ? 'font-bold text-[var(--primary)] border-[var(--primary)]' : ''}`}>
                ⚙️ Admin
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/#agenda" className="nav-cta hidden md:inline-block">
          Agenda tu asesoría
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay md:hidden">
          <Link href="/tienda" onClick={() => setMobileMenuOpen(false)}>
            Catálogo
          </Link>
          <Link href="/#nosotros" onClick={() => setMobileMenuOpen(false)}>
            Nosotros
          </Link>
          <Link href="/#testimonios" onClick={() => setMobileMenuOpen(false)}>
            Testimonios
          </Link>
          <Link href="/#agenda" onClick={() => setMobileMenuOpen(false)}>
            Agenda tu asesoría
          </Link>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono text-[var(--primary)] font-bold">
            ⚙️ Panel de Administración
          </Link>
          <Link href="/#agenda" className="nav-cta text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
            Agenda tu asesoría
          </Link>
        </div>
      )}
    </header>
  );
}
