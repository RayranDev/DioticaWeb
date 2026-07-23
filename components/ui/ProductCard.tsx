import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';
import SampleBadge from './SampleBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link className="product-card group" href={`/producto/${product.slug}`}>
      <div className="product-media relative overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50 border-b border-[var(--line)]">
        {product.isSample && <SampleBadge label="Muestra Óptica" />}

        {/* Dynamic Frame Graphic Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <svg viewBox="0 0 200 100" className="w-full h-auto text-[var(--primary)] opacity-85 drop-shadow-md">
            {/* Glasses Frame Silhouette */}
            <path
              d="M 30,35 C 30,20 75,20 75,35 C 75,55 30,55 30,35 Z M 125,35 C 125,20 170,20 170,35 C 170,55 125,55 125,35 Z M 75,35 C 85,28 115,28 125,35 M 10,38 L 30,35 M 170,35 L 190,38"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Lenses fill */}
            <path d="M 32,35 C 32,23 73,23 73,35 C 73,52 32,52 32,35 Z" fill="rgba(58, 134, 200, 0.12)" />
            <path d="M 127,35 C 127,23 168,23 168,35 C 168,52 127,52 127,35 Z" fill="rgba(58, 134, 200, 0.12)" />
          </svg>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
          <span className="bg-white text-[var(--primary)] text-xs font-mono font-bold px-3 py-1 rounded shadow-sm">
            Ver Ficha Técnica →
          </span>
        </div>
      </div>

      <div className="product-body p-5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[0.72rem] font-mono text-[var(--secondary)] font-semibold uppercase tracking-wider">
            {product.material}
          </span>
          <span className="text-[0.72rem] font-mono text-[var(--muted)] capitalize">
            {product.genero}
          </span>
        </div>

        <h3 className="text-base font-semibold text-[var(--primary-ink)] group-hover:text-[var(--secondary)] transition-colors mb-1 font-title">
          {product.title}
        </h3>

        <p className="text-xs text-[var(--muted)] line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Swatches dots if available */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border border-slate-300 shadow-inner inline-block"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        )}

        <div className="product-price pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[0.68rem] block text-[var(--muted)] font-mono uppercase">Precio Estimado</span>
            <span className="font-mono text-base font-bold text-[var(--primary)]">{product.price}</span>
          </div>

          <span className="text-xs font-semibold text-[var(--secondary)] bg-sky-50 group-hover:bg-[var(--primary)] group-hover:text-white px-3 py-1.5 rounded transition-colors">
            Consultar
          </span>
        </div>
      </div>
    </Link>
  );
}
