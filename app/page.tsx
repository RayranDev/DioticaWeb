'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import WhySection from '@/components/home/WhySection';
import StatsSection from '@/components/home/StatsSection';
import SnellenDivider from '@/components/home/SnellenDivider';
import Testimonials from '@/components/home/Testimonials';
import ProductCard from '@/components/ui/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/data';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = SAMPLE_PRODUCTS.filter((p) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'acetato') return p.material === 'acetato';
    if (activeCategory === 'metal') return p.material === 'metal';
    if (activeCategory === 'titanio') return p.material === 'titanio';
    return true;
  }).slice(0, 4);

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhySection />
      <StatsSection />

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Colecciones destacadas</p>
            <h2>Monturas pensadas para durar y favorecer.</h2>
            <p>Modelos de muestra de nuestro catálogo en rotación constante.</p>
          </div>

          <div className="filter-row" role="group" aria-label="Filtro rápido de catálogo">
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'todos'}
              onClick={() => setActiveCategory('todos')}
            >
              Todos
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'acetato'}
              onClick={() => setActiveCategory('acetato')}
            >
              Acetato
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'metal'}
              onClick={() => setActiveCategory('metal')}
            >
              Metal
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'titanio'}
              onClick={() => setActiveCategory('titanio')}
            >
              Titanio
            </button>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/tienda" className="btn-secondary">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <SnellenDivider />
      <Testimonials />

      <section className="cta-band" id="agenda">
        <div className="wrap">
          <p className="eyebrow justify-center">¿Listo para ver con claridad?</p>
          <h2>Reserva tu examen óptico y asesoría de montura</h2>
          <p className="max-w-xl mx-auto">
            Atención en consulta privada sin filas ni afanes. Te escuchamos y formulamos la solución exacta para tu visión.
          </p>
          <div className="hero-ctas">
            <a
              id="ctaAgendaWA"
              href={getWhatsAppUrl(WA_MESSAGES.agenda)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar por WhatsApp
            </a>
            <Link href="/tienda" className="btn-secondary">
              Explorar monturas primero
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
