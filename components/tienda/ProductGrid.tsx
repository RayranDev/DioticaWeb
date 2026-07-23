import React from 'react';
import { Product } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div>
      <div className="results-bar">
        <span>{products.length} monturas</span>
        <span>Datos de muestra — se reemplazan por el catálogo real</span>
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No encontramos coincidencias</h3>
          <p>Intenta ajustar o limpiar los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
}
