'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesSection from '@/components/home/ServicesSection';
import ExamsSection from '@/components/home/ExamsSection';
import SpecialistsSection from '@/components/home/SpecialistsSection';
import ContactLensesSection from '@/components/home/ContactLensesSection';
import PromotionsSection from '@/components/home/PromotionsSection';
import FAQSection from '@/components/home/FAQSection';
import ContactFormSection from '@/components/home/ContactFormSection';
import Testimonials from '@/components/home/Testimonials';
import ProductCard from '@/components/ui/ProductCard';
import { SAMPLE_PRODUCTS, Product } from '@/lib/data';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProducts = products.filter((p) => {
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
      <ServicesSection />
      <ExamsSection />
      <SpecialistsSection />

      {/* Catálogo de Monturas */}
      <section id="monturas">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Catálogo de Monturas</p>
            <h2>Diseño morfológico y materiales seleccionados</h2>
            <p>Curaduría de marcos resistentes, livianos e hipoalergénicos con garantía adaptativa.</p>
          </div>

          <div className="flex gap-2 flex-wrap mb-8" role="group" aria-label="Filtro rápido de catálogo">
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'todos'}
              onClick={() => setActiveCategory('todos')}
            >
              Todas las Monturas
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'acetato'}
              onClick={() => setActiveCategory('acetato')}
            >
              Acetato Italiano
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'metal'}
              onClick={() => setActiveCategory('metal')}
            >
              Metal Delgado
            </button>
            <button
              className="filter-chip"
              aria-pressed={activeCategory === 'titanio'}
              onClick={() => setActiveCategory('titanio')}
            >
              Titanio Ultraligero
            </button>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/tienda" className="btn-secondary">
              Explorar Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      <ContactLensesSection />
      <PromotionsSection />
      <Testimonials />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
