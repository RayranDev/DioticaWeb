import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';
import SampleBadge from './SampleBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link className="product-card" href={`/producto/${product.slug}`}>
      <div className="product-media">
        {product.isSample && <SampleBadge label="Muestra" />}
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        <p className="cat">{product.category}</p>
        <div className="product-price">
          <span>{product.price}</span>
          <span className="text-[0.75rem] text-[var(--primary)] underline">Ver detalle</span>
        </div>
      </div>
    </Link>
  );
}
