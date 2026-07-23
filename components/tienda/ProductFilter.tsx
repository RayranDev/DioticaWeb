'use client';

import React from 'react';

export interface FilterState {
  genero: string[];
  rostro: string[];
  material: string[];
  precio: string[];
}

interface ProductFilterProps {
  filters: FilterState;
  onFilterChange: (category: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
}

export default function ProductFilter({
  filters,
  onFilterChange,
  onClearFilters
}: ProductFilterProps) {
  return (
    <aside className="filters" aria-label="Filtros de catálogo">
      <div className="filter-group">
        <h3>Género</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.genero.includes('mujer')}
            onChange={() => onFilterChange('genero', 'mujer')}
          />{' '}
          Mujer
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.genero.includes('hombre')}
            onChange={() => onFilterChange('genero', 'hombre')}
          />{' '}
          Hombre
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.genero.includes('unisex')}
            onChange={() => onFilterChange('genero', 'unisex')}
          />{' '}
          Unisex
        </label>
      </div>

      <div className="filter-group">
        <h3>Forma de rostro</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.rostro.includes('redondo')}
            onChange={() => onFilterChange('rostro', 'redondo')}
          />{' '}
          Redondo
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.rostro.includes('cuadrado')}
            onChange={() => onFilterChange('rostro', 'cuadrado')}
          />{' '}
          Cuadrado
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.rostro.includes('ovalado')}
            onChange={() => onFilterChange('rostro', 'ovalado')}
          />{' '}
          Ovalado
        </label>
      </div>

      <div className="filter-group">
        <h3>Material</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.material.includes('acetato')}
            onChange={() => onFilterChange('material', 'acetato')}
          />{' '}
          Acetato
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.material.includes('metal')}
            onChange={() => onFilterChange('material', 'metal')}
          />{' '}
          Metal
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.material.includes('titanio')}
            onChange={() => onFilterChange('material', 'titanio')}
          />{' '}
          Titanio
        </label>
      </div>

      <div className="filter-group">
        <h3>Precio</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.precio.includes('bajo')}
            onChange={() => onFilterChange('precio', 'bajo')}
          />{' '}
          Hasta $250.000
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.precio.includes('medio')}
            onChange={() => onFilterChange('precio', 'medio')}
          />{' '}
          $250.000–$350.000
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.precio.includes('alto')}
            onChange={() => onFilterChange('precio', 'alto')}
          />{' '}
          Más de $350.000
        </label>
      </div>

      <button className="clear-filters" onClick={onClearFilters}>
        Limpiar filtros
      </button>
    </aside>
  );
}
