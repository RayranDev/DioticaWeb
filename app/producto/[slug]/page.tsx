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
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">Inicio</Link> / <Link href="/tienda">Catálogo</Link> / {currentProduct.title}
      </p>

      <div className="product-layout">
        <div>
          <div
            className={`gallery-main ${isZoomed ? 'zoomed' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
            tabIndex={0}
            role="img"
            aria-label={`Fotografía de la ${currentProduct.title} — imagen de muestra, clic para acercar`}
          >
            {currentProduct.isSample && <SampleBadge label="Imagen de muestra" />}
            <span className="zoom-hint">
              {isZoomed ? 'Clic para alejar' : 'Clic para acercar'}
            </span>
          </div>

          <div className="thumbs" role="list" aria-label="Miniaturas de producto">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`thumb ${activeThumb === idx ? 'active' : ''}`}
                onClick={() => setActiveThumb(idx)}
                tabIndex={0}
                role="listitem"
                aria-label={`Vista ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <p className="eyebrow">{currentProduct.category}</p>
          <h1>{currentProduct.title}</h1>
          <div className="price">
            <span className="from">Precio del producto</span>
            {currentProduct.price}
          </div>
          <p className="desc">{currentProduct.description}</p>

          {currentProduct.colors && currentProduct.colors.length > 0 && (
            <div className="variant-group">
              <h3>Color</h3>
              <div className="swatches" role="group" aria-label="Selecciona un color">
                {currentProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    className="swatch"
                    style={{ background: color.hex }}
                    aria-pressed={activeColor === color.name}
                    aria-label={color.name}
                    onClick={() => setActiveColor(color.name)}
                  />
                ))}
              </div>
            </div>
          )}

          {currentProduct.sizes && currentProduct.sizes.length > 0 && (
            <div className="variant-group">
              <h3>Talla de puente</h3>
              <div className="size-options" role="group" aria-label="Selecciona una talla">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className="size-opt"
                    aria-pressed={activeSize === size}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="ctas">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultar disponibilidad por WhatsApp
            </a>
            <Link href="/#agenda" className="btn-secondary">
              Agendar prueba presencial
            </Link>
          </div>

          <p className="stock-note">
            * Disponibilidad sujeta a inventario físico en Ópticas DIOTICA.
          </p>

          <div className="tabs">
            <div className="flex border-b border-[var(--line)]">
              <button
                className="tab-btn"
                aria-selected={activeTab === 'details'}
                onClick={() => setActiveTab('details')}
              >
                Detalles técnicos
              </button>
              <button
                className="tab-btn"
                aria-selected={activeTab === 'lenses'}
                onClick={() => setActiveTab('lenses')}
              >
                Lentes recomendados
              </button>
              <button
                className="tab-btn"
                aria-selected={activeTab === 'warranty'}
                onClick={() => setActiveTab('warranty')}
              >
                Envíos y Garantía
              </button>
            </div>

            <div className={`tab-panel ${activeTab === 'details' ? 'active' : ''}`}>
              <div className="spec-row">
                <span>Material</span>
                <span className="capitalize">{currentProduct.material} seleccionado</span>
              </div>
              <div className="spec-row">
                <span>Tipo de marco</span>
                <span>Marco completo (Full Rim)</span>
              </div>
              <div className="spec-row">
                <span>Bisagra</span>
                <span>Flex de acero inoxidable</span>
              </div>
              <div className="spec-row">
                <span>Incluye</span>
                <span>Estuche rígido + Paño microfibra</span>
              </div>
            </div>

            <div className={`tab-panel ${activeTab === 'lenses' ? 'active' : ''}`}>
              <p>
                Esta montura admite lentes monofocales, bifocales y progresivos digitalmente tallados. Te recomendamos tratamientos antireflejo AR Blue Control para uso prolongado de pantallas.
              </p>
            </div>

            <div className={`tab-panel ${activeTab === 'warranty' ? 'active' : ''}`}>
              <p>
                Garantía clínica de 30 días para adaptación de fórmula. Envíos asegurados a todo el país o entrega con ajuste directo en Ópticas DIOTICA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="related">
        <h2>También te podría gustar</h2>
        <div className="related-grid">
          {relatedProducts.map((rel) => (
            <ProductCard key={rel.slug} product={rel} />
          ))}
        </div>
      </div>
    </div>
  );
}
