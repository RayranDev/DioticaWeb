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
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
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
  }, [filters, products]);

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Catálogo</p>
          <h1>Encuentra la montura que sí es tuya.</h1>
          <p>
            Filtra por lo que buscas. Gestiona tu catálogo en vivo fácilmente desde el Panel Admin sin tocar bases de datos.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="shop-layout">
          <ProductFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
}
