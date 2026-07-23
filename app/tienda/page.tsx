'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ProductFilter, { FilterState } from '@/components/tienda/ProductFilter';
import ProductGrid from '@/components/tienda/ProductGrid';
import { SAMPLE_PRODUCTS, Product } from '@/lib/data';

const initialFilters: FilterState = {
  genero: [],
  rostro: [],
  material: [],
  precio: [],
};

export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch((err) => console.error('Error loading products from API:', err));
  }, []);

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const currentCategory = prev[category];
      const exists = currentCategory.includes(value);
      const nextCategory = exists
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];
      return { ...prev, [category]: nextCategory };
    });
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setSearchTerm('');
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search term filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCat && !matchesDesc) {
          return false;
        }
      }

      // Category filters
      if (filters.genero.length > 0 && !filters.genero.includes(product.genero)) {
        return false;
      }
      if (
        filters.rostro.length > 0 &&
        !product.rostro.some((r) => filters.rostro.includes(r))
      ) {
        return false;
      }
      if (
        filters.material.length > 0 &&
        !filters.material.includes(product.material)
      ) {
        return false;
      }
      if (
        filters.precio.length > 0 &&
        !filters.precio.includes(product.precioRango)
      ) {
        return false;
      }
      return true;
    });
  }, [filters, products, searchTerm]);

  return (
    <>
      {/* Medical Catalog Hero Header */}
      <div className="bg-[var(--surface)] border-b border-[var(--line)] py-12">
        <div className="wrap">
          <p className="eyebrow">Catálogo Clínico & Morfológico</p>
          <h1 className="text-3xl sm:text-4xl font-title font-semibold text-[var(--primary-ink)] mb-3">
            Encuentra la montura perfecta para tu rostro.
          </h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl leading-relaxed mb-6">
            Monturas seleccionadas por optometristas en acetato italiano, metal fino y titanio ultraligero con garantía adaptativa de 30 días.
          </p>

          {/* Search Bar Input */}
          <div className="max-w-md relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por modelo, material (ej. Titanio, Carey)..."
              className="w-full p-3.5 pl-11 bg-white border border-[var(--line)] rounded-[var(--radius)] text-sm focus:outline-none focus:border-[var(--primary)] shadow-soft"
            />
            <svg
              className="w-5 h-5 absolute left-3.5 top-3.5 text-[var(--muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="wrap py-10">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="btn-secondary w-full justify-between text-xs py-3"
          >
            <span>🔍 {mobileFilterOpen ? 'Ocultar Filtros' : 'Mostrar Filtros de Catálogo'}</span>
            <span className="font-mono bg-[var(--primary)] text-white px-2 py-0.5 rounded text-[0.7rem]">
              {filteredProducts.length} resultados
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar de Filtros (Desktop & Mobile Collapsible) */}
          <div className={`lg:col-span-3 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <ProductFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              productCount={filteredProducts.length}
            />
          </div>

          {/* Grid de Productos */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
              searchTerm={searchTerm}
              onClearSearch={handleClearFilters}
            />
          </div>
        </div>
      </div>
    </>
  );
}
