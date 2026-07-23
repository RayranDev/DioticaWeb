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
  productCount?: number;
}

export default function ProductFilter({
  filters,
  onFilterChange,
  onClearFilters,
  productCount
}: ProductFilterProps) {
  const activeTotal =
    filters.genero.length +
    filters.rostro.length +
    filters.material.length +
    filters.precio.length;

  return (
    <aside className="filters bg-white p-6 rounded-[12px] border border-[var(--line)] shadow-soft font-sans">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--line)]">
        <div>
          <h3 className="text-base font-title font-semibold text-[var(--primary-ink)]">
            Filtros de Catálogo
          </h3>
          {activeTotal > 0 && (
            <span className="text-xs font-mono text-[var(--secondary)] font-medium">
              {activeTotal} {activeTotal === 1 ? 'filtro activo' : 'filtros activos'}
            </span>
          )}
        </div>

        {activeTotal > 0 && (
          <button
            onClick={onClearFilters}
            className="text-xs font-mono text-rose-600 hover:underline bg-rose-50 px-2.5 py-1 rounded border border-rose-200"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Grupo: Género */}
      <div className="filter-group mb-6">
        <h4 className="font-title text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
          Género & Estilo
        </h4>
        <div className="space-y-2">
          {[
            { id: 'mujer', label: 'Mujer' },
            { id: 'hombre', label: 'Hombre' },
            { id: 'unisex', label: 'Unisex' }
          ].map((item) => {
            const isChecked = filters.genero.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-sky-50 border-[var(--secondary)] font-semibold text-[var(--primary)]'
                    : 'bg-[var(--surface)] border-slate-200 hover:border-slate-300 text-[var(--ink)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onFilterChange('genero', item.id)}
                    className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--secondary)] accent-[var(--primary)]"
                  />
                  <span>{item.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Grupo: Forma de Rostro */}
      <div className="filter-group mb-6">
        <h4 className="font-title text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
          Forma de Rostro
        </h4>
        <div className="space-y-2">
          {[
            { id: 'ovalado', label: 'Ovalado' },
            { id: 'redondo', label: 'Redondo' },
            { id: 'cuadrado', label: 'Cuadrado' }
          ].map((item) => {
            const isChecked = filters.rostro.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-sky-50 border-[var(--secondary)] font-semibold text-[var(--primary)]'
                    : 'bg-[var(--surface)] border-slate-200 hover:border-slate-300 text-[var(--ink)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onFilterChange('rostro', item.id)}
                    className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--secondary)] accent-[var(--primary)]"
                  />
                  <span>{item.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Grupo: Material */}
      <div className="filter-group mb-6">
        <h4 className="font-title text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
          Material de Montura
        </h4>
        <div className="space-y-2">
          {[
            { id: 'acetato', label: 'Acetato Italiano' },
            { id: 'metal', label: 'Metal Delgado' },
            { id: 'titanio', label: 'Titanio Ultraligero' }
          ].map((item) => {
            const isChecked = filters.material.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-sky-50 border-[var(--secondary)] font-semibold text-[var(--primary)]'
                    : 'bg-[var(--surface)] border-slate-200 hover:border-slate-300 text-[var(--ink)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onFilterChange('material', item.id)}
                    className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--secondary)] accent-[var(--primary)]"
                  />
                  <span>{item.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Grupo: Rango de Precio */}
      <div className="filter-group">
        <h4 className="font-title text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
          Rango de Precio
        </h4>
        <div className="space-y-2">
          {[
            { id: 'bajo', label: 'Hasta $250.000' },
            { id: 'medio', label: '$250.000 – $350.000' },
            { id: 'alto', label: 'Más de $350.000' }
          ].map((item) => {
            const isChecked = filters.precio.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-sky-50 border-[var(--secondary)] font-semibold text-[var(--primary)]'
                    : 'bg-[var(--surface)] border-slate-200 hover:border-slate-300 text-[var(--ink)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onFilterChange('precio', item.id)}
                    className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--secondary)] accent-[var(--primary)]"
                  />
                  <span>{item.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
