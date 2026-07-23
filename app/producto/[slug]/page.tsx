'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SAMPLE_PRODUCTS, Product } from '@/lib/data';
import SampleBadge from '@/components/ui/SampleBadge';
import ProductCard from '@/components/ui/ProductCard';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>(SAMPLE_PRODUCTS);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllProducts(data);
          const found = data.find((p: Product) => p.slug === params.slug);
          if (found) setProduct(found);
          else setProduct(data[0]);
        }
      })
      .catch(() => {
        const found = SAMPLE_PRODUCTS.find((p) => p.slug === params.slug) || SAMPLE_PRODUCTS[0];
        setProduct(found);
      });
  }, [params.slug]);

  const currentProduct = product || SAMPLE_PRODUCTS.find((p) => p.slug === params.slug) || SAMPLE_PRODUCTS[0];

  const [activeColor, setActiveColor] = useState<string>('');
  const [activeSize, setActiveSize] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'details' | 'lenses' | 'warranty'>('details');

  useEffect(() => {
    if (currentProduct) {
      if (currentProduct.colors && currentProduct.colors.length > 0) {
        setActiveColor(currentProduct.colors[0].name);
      }
      if (currentProduct.sizes && currentProduct.sizes.length > 0) {
        setActiveSize(currentProduct.sizes[0]);
      }
    }
  }, [currentProduct]);

  const waUrl = getProductWhatsAppUrl(currentProduct.title, activeColor, activeSize);
  const relatedProducts = allProducts.filter((p) => p.slug !== currentProduct.slug).slice(0, 4);

  return (
    <div className="wrap py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] mb-8">
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/tienda" className="hover:text-[var(--primary)] transition-colors">Catálogo</Link>
        <span>/</span>
        <span className="text-[var(--primary)] font-semibold">{currentProduct.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Galería Showcase */}
        <div className="lg:col-span-6">
          <div
            className={`relative overflow-hidden rounded-[12px] border border-[var(--line)] bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50 aspect-[4/3] cursor-zoom-in shadow-soft transition-transform duration-300 ${
              isZoomed ? 'scale-105 shadow-hover' : ''
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {currentProduct.isSample && <SampleBadge label="Muestra Óptica" />}

            {/* Silhouette Graphic */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <svg viewBox="0 0 200 100" className="w-full h-auto text-[var(--primary)] opacity-90 drop-shadow-lg">
                <path
                  d="M 30,35 C 30,20 75,20 75,35 C 75,55 30,55 30,35 Z M 125,35 C 125,20 170,20 170,35 C 170,55 125,55 125,35 Z M 75,35 C 85,28 115,28 125,35 M 10,38 L 30,35 M 170,35 L 190,38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M 32,35 C 32,23 73,23 73,35 C 73,52 32,52 32,35 Z" fill="rgba(58, 134, 200, 0.15)" />
                <path d="M 127,35 C 127,23 168,23 168,35 C 168,52 127,52 127,35 Z" fill="rgba(58, 134, 200, 0.15)" />
              </svg>
            </div>

            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[var(--primary)] font-mono text-[0.7rem] px-3 py-1 rounded shadow-sm border border-[var(--line)]">
              {isZoomed ? '🔍 Clic para alejar' : '🔍 Clic para acercar'}
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveThumb(idx)}
                className={`w-20 aspect-[4/3] rounded-lg border bg-slate-50 transition-all flex items-center justify-center text-xs font-mono ${
                  activeThumb === idx
                    ? 'border-[var(--primary)] ring-2 ring-[var(--secondary)]/30 font-bold text-[var(--primary)]'
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                Vista {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Ficha e Información de Producto */}
        <div className="lg:col-span-6">
          <span className="text-xs font-mono uppercase font-semibold text-[var(--secondary)] tracking-widest block mb-2">
            {currentProduct.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-title font-semibold text-[var(--primary-ink)] mb-3">
            {currentProduct.title}
          </h1>

          <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--line)] mb-6 flex items-center justify-between">
            <div>
              <span className="text-[0.7rem] font-mono text-[var(--muted)] uppercase block">Precio Estimado</span>
              <span className="font-mono text-2xl font-bold text-[var(--primary)]">{currentProduct.price}</span>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200">
              ✓ Garantía de Adaptación
            </span>
          </div>

          <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
            {currentProduct.description}
          </p>

          {/* Opciones de Color */}
          {currentProduct.colors && currentProduct.colors.length > 0 && (
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase font-semibold text-[var(--primary)] mb-2">
                Color Disponible: <span className="font-bold text-[var(--ink)]">{activeColor}</span>
              </label>
              <div className="flex gap-3">
                {currentProduct.colors.map((color) => {
                  const isSelected = activeColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(color.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-transform flex items-center justify-center ${
                        isSelected
                          ? 'border-[var(--primary)] scale-110 shadow-md'
                          : 'border-slate-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {isSelected && <span className="text-white text-xs font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Opciones de Talla */}
          {currentProduct.sizes && currentProduct.sizes.length > 0 && (
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase font-semibold text-[var(--primary)] mb-2">
                Talla de Puente:
              </label>
              <div className="flex gap-2 flex-wrap">
                {currentProduct.sizes.map((size) => {
                  const isSelected = activeSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`px-3.5 py-2 text-xs font-mono rounded border transition-colors ${
                        isSelected
                          ? 'bg-[var(--primary)] text-white border-[var(--primary)] font-semibold'
                          : 'bg-white text-[var(--ink)] border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Botones de Conversión */}
          <div className="flex flex-col gap-3 mb-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm py-3.5"
            >
              Consultar Disponibilidad por WhatsApp
            </a>
            <Link href="/#agenda" className="btn-secondary justify-center text-sm py-3.5">
              Agendar Prueba Presencial en Clínica
            </Link>
          </div>

          <p className="text-xs font-mono text-[var(--muted)]">
            * Disponibilidad sujeta a inventario físico en sede de Ópticas DIOTICA.
          </p>

          {/* Pestañas Informativas */}
          <div className="mt-8 pt-6 border-t border-[var(--line)]">
            <div className="flex border-b border-[var(--line)] mb-4">
              <button
                className={`py-2 px-4 text-xs font-mono font-semibold border-b-2 transition-colors ${
                  activeTab === 'details'
                    ? 'border-[var(--primary)] text-[var(--primary)]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Especificaciones
              </button>
              <button
                className={`py-2 px-4 text-xs font-mono font-semibold border-b-2 transition-colors ${
                  activeTab === 'lenses'
                    ? 'border-[var(--primary)] text-[var(--primary)]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
                onClick={() => setActiveTab('lenses')}
              >
                Lentes Recomendados
              </button>
              <button
                className={`py-2 px-4 text-xs font-mono font-semibold border-b-2 transition-colors ${
                  activeTab === 'warranty'
                    ? 'border-[var(--primary)] text-[var(--primary)]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
                onClick={() => setActiveTab('warranty')}
              >
                Garantía Clínica
              </button>
            </div>

            {activeTab === 'details' && (
              <div className="space-y-2 text-xs font-mono text-[var(--ink)]">
                <div className="flex justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="text-[var(--muted)]">Material</span>
                  <span className="capitalize font-semibold">{currentProduct.material} Seleccionado</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="text-[var(--muted)]">Diseño de Marco</span>
                  <span className="font-semibold">Full Rim (Marco Completo)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="text-[var(--muted)]">Tipo de Bisagra</span>
                  <span className="font-semibold">Flex Acero Inoxidable</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="text-[var(--muted)]">Incluye</span>
                  <span className="font-semibold">Estuche Rígido + Paño Microfibra</span>
                </div>
              </div>
            )}

            {activeTab === 'lenses' && (
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Esta montura admite lentes monofocales, bifocales y progresivos de tallado digital HD. Recomendamos tratamientos AR Blue Control para la protección contra luz azul de pantallas.
              </p>
            )}

            {activeTab === 'warranty' && (
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Garantía clínica de 30 días para la adaptación de tu formulación y 1 año de garantía en montura por defectos de fabricación.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Monturas Relacionadas */}
      <div className="pt-12 border-t border-[var(--line)]">
        <h2 className="text-xl font-title font-semibold text-[var(--primary-ink)] mb-6">
          Otras monturas que te podrían gustar
        </h2>
        <div className="product-grid">
          {relatedProducts.map((rel) => (
            <ProductCard key={rel.slug} product={rel} />
          ))}
        </div>
      </div>
    </div>
  );
}
