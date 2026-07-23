import React from 'react';
import { Product } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

interface ProductGridProps {
  products: Product[];
  searchTerm?: string;
  onClearSearch?: () => void;
}

export default function ProductGrid({ products, searchTerm, onClearSearch }: ProductGridProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-[var(--line)] flex-wrap gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[var(--primary)] text-sm">
            {products.length} {products.length === 1 ? 'montura disponible' : 'monturas disponibles'}
          </span>
          {searchTerm && (
            <span className="bg-sky-100 text-[var(--primary)] px-2.5 py-0.5 rounded font-medium">
              Búsqueda: &ldquo;{searchTerm}&rdquo;
            </span>
          )}
        </div>

        <span className="text-[var(--muted)]">
          * Catálogo en vivo de Ópticas DIOTICA — Sujeto a disponibilidad en sede
        </span>
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-[12px] border border-[var(--line)] text-center shadow-soft my-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4 text-2xl">
            👓
          </div>
          <h3 className="text-xl font-title font-semibold text-[var(--primary-ink)] mb-2">
            No encontramos monturas con los filtros seleccionados
          </h3>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto mb-6">
            Intenta desactivar algunos filtros o borrar el término de búsqueda para ver más opciones disponibles en catálogo.
          </p>
          {onClearSearch && (
            <button
              onClick={onClearSearch}
              className="btn-primary text-xs py-2.5"
            >
              Restablecer Filtros
            </button>
          )}
        </div>
      )}
    </div>
  );
}
