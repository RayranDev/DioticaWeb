import { NextResponse } from 'next/server';
import { getProductsFile, saveProductsFile } from '@/lib/serverData';
import { Product } from '@/lib/data';

export async function GET() {
  const products = getProductsFile();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const products = getProductsFile();

    if (!body.title || !body.price) {
      return NextResponse.json(
        { error: 'Título y precio son obligatorios.' },
        { status: 400 }
      );
    }

    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const existingIndex = products.findIndex((p) => p.slug === slug);

    const newProduct: Product = {
      slug,
      title: body.title,
      category: body.category || `${body.material || 'Acetato'} · ${body.genero || 'Unisex'}`,
      price: body.price.startsWith('$') ? body.price : `$${body.price}`,
      genero: body.genero || 'unisex',
      rostro: Array.isArray(body.rostro) ? body.rostro : (body.rostro ? body.rostro.split(',').map((s: string) => s.trim()) : ['ovalado']),
      material: body.material || 'acetato',
      precioRango: body.precioRango || 'medio',
      description: body.description || '',
      colors: body.colors || [{ name: 'Por defecto', hex: '#0E3B36' }],
      sizes: body.sizes || ['Medio — 18mm'],
      isSample: body.isSample !== undefined ? body.isSample : false
    };

    if (existingIndex >= 0) {
      products[existingIndex] = newProduct;
    } else {
      products.unshift(newProduct);
    }

    saveProductsFile(products);
    return NextResponse.json({ success: true, product: newProduct });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Error interno al guardar producto.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug no especificado' }, { status: 400 });
    }

    const products = getProductsFile();
    const filtered = products.filter((p) => p.slug !== slug);

    saveProductsFile(filtered);
    return NextResponse.json({ success: true, count: filtered.length });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Error al eliminar producto.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
