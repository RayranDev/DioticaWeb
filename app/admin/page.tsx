'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authUsername, setAuthUsername] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Products state
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form state
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [genero, setGenero] = useState<'mujer' | 'hombre' | 'unisex'>('unisex');
  const [material, setMaterial] = useState<'acetato' | 'metal' | 'titanio'>('acetato');
  const [rostro, setRostro] = useState<string>('ovalado, redondo');
  const [precioRango, setPrecioRango] = useState<'bajo' | 'medio' | 'alto'>('medio');
  const [description, setDescription] = useState('');
  const [isSample, setIsSample] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('diotica_admin_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
      fetchProducts();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    // Credenciales de acceso por defecto
    if (authUsername.trim().toLowerCase() === 'admin' && authPassword === 'diotica2026') {
      setIsAuthenticated(true);
      localStorage.setItem('diotica_admin_auth', 'true');
      fetchProducts();
    } else {
      setAuthError('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('diotica_admin_auth');
    setAuthUsername('');
    setAuthPassword('');
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setSlug(product.slug);
    setTitle(product.title);
    setPrice(product.price);
    setGenero(product.genero);
    setMaterial(product.material);
    setRostro(product.rostro.join(', '));
    setPrecioRango(product.precioRango);
    setDescription(product.description);
    setIsSample(product.isSample);
    setMessage({ type: 'success', text: `Cargado "${product.title}" para editar.` });
  };

  const handleResetForm = () => {
    setSlug('');
    setTitle('');
    setPrice('');
    setGenero('unisex');
    setMaterial('acetato');
    setRostro('ovalado, redondo');
    setPrecioRango('medio');
    setDescription('');
    setIsSample(false);
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          title,
          price,
          genero,
          material,
          rostro,
          precioRango,
          description,
          isSample,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Error al guardar el producto.');
      }

      setMessage({ type: 'success', text: `¡Producto "${title}" guardado correctamente!` });
      handleResetForm();
      fetchProducts();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error al guardar.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (targetSlug: string, targetTitle: string) => {
    if (!confirm(`¿Seguro que deseas eliminar "${targetTitle}"?`)) return;

    try {
      const res = await fetch(`/api/products?slug=${targetSlug}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      setMessage({ type: 'success', text: `Producto "${targetTitle}" eliminado.` });
      fetchProducts();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error al eliminar.';
      setMessage({ type: 'error', text: errorMessage });
    }
  };

  // PANTALLA DE LOGIN SI NO ESTÁ AUTENTICADO
  if (!isAuthenticated) {
    return (
      <div className="wrap min-h-[70vh] flex items-center justify-center py-16">
        <div className="w-full max-w-md bg-[var(--surface)] p-8 rounded border border-[var(--line)] shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest block mb-1">
              Ópticas DIOTICA
            </span>
            <h1 className="text-2xl font-serif">Acceso Administrativo</h1>
            <p className="text-xs text-[var(--muted)] mt-1 font-mono">
              Ingresa tus credenciales para gestionar productos.
            </p>
          </div>

          {authError && (
            <div className="bg-red-800 text-white p-3 rounded text-xs font-mono mb-4 text-center">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4 text-sm">
            <div>
              <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                Usuario
              </label>
              <input
                type="text"
                required
                value={authUsername}
                onChange={(e) => setAuthUsername(e.target.value)}
                placeholder="Ej. admin"
                className="w-full p-3 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)] font-mono"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)] font-mono"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center py-3 text-sm mt-2"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[var(--line)] text-center text-xs font-mono text-[var(--muted)]">
            <p>Credenciales por defecto para pruebas:</p>
            <p className="mt-1 font-bold text-[var(--primary-ink)]">
              Usuario: <code className="bg-[var(--paper)] px-1 py-0.5 rounded">admin</code> | Clave: <code className="bg-[var(--paper)] px-1 py-0.5 rounded">diotica2026</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // PANTALLA DASHBOARD ADMIN AUTENTICADO
  return (
    <div className="wrap py-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--line)] flex-wrap gap-4">
        <div>
          <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block">
            Ópticas DIOTICA — Panel de Gestión
          </span>
          <h1 className="text-3xl font-serif">Administrador de Catálogo</h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            Crea, edita o elimina monturas en tiempo real sin modificar código ni bases de datos complejas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/tienda" className="btn-secondary text-sm">
            ← Ver Tienda
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-2 text-xs font-mono bg-red-800 text-white rounded hover:bg-red-900"
          >
            🔒 Cerrar Sesión
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`p-4 mb-6 rounded text-sm font-mono ${
            message.type === 'success'
              ? 'bg-[var(--primary)] text-white'
              : 'bg-red-800 text-white'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Formulario de producto */}
        <div className="lg:col-span-5 bg-[var(--surface)] p-6 rounded border border-[var(--line)]">
          <h2 className="text-xl font-serif mb-4 pb-2 border-b border-[var(--line)]">
            {slug ? 'Editar Producto' : 'Agregar Nuevo Producto'}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
            <div>
              <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                Nombre de la Montura *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej. Montura Aviador Titanio"
                className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                  Precio *
                </label>
                <input
                  type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="$299.000"
                  className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                  Género
                </label>
                <select
                  value={genero}
                  onChange={(e) => setGenero(e.target.value as 'mujer' | 'hombre' | 'unisex')}
                  className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                >
                  <option value="unisex">Unisex</option>
                  <option value="mujer">Mujer</option>
                  <option value="hombre">Hombre</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                  Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value as 'acetato' | 'metal' | 'titanio')}
                  className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                >
                  <option value="acetato">Acetato</option>
                  <option value="metal">Metal</option>
                  <option value="titanio">Titanio</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                  Rango de Precio
                </label>
                <select
                  value={precioRango}
                  onChange={(e) => setPrecioRango(e.target.value as 'bajo' | 'medio' | 'alto')}
                  className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
                >
                  <option value="bajo">Bajo (hasta $250k)</option>
                  <option value="medio">Medio ($250k–$350k)</option>
                  <option value="alto">Alto (&gt; $350k)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                Formas de Rostro (separadas por coma)
              </label>
              <input
                type="text"
                value={rostro}
                onChange={(e) => setRostro(e.target.value)}
                placeholder="redondo, ovalado, cuadrado"
                className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--primary)] uppercase mb-1 font-semibold">
                Descripción
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción concisa de la montura y ajuste recomendado..."
                className="w-full p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded focus:outline-none focus:border-[var(--primary)] resize-none"
              />
            </div>

            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="isSample"
                checked={isSample}
                onChange={(e) => setIsSample(e.target.checked)}
                className="w-4 h-4 accent-[var(--primary)]"
              />
              <label htmlFor="isSample" className="font-mono text-xs text-[var(--muted)]">
                Marcar como producto de Muestra
              </label>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary flex-1 justify-center py-2.5 text-sm"
              >
                {saving ? 'Guardando...' : slug ? 'Guardar Cambios' : 'Crear Producto'}
              </button>
              {slug && (
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn-secondary py-2.5 text-xs"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Lista de productos actuales */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-serif">
              Catálogo Actual ({products.length})
            </h2>
            <button
              onClick={fetchProducts}
              className="text-xs font-mono text-[var(--primary)] underline"
            >
              🔄 Actualizar Lista
            </button>
          </div>

          {loading ? (
            <p className="text-sm text-[var(--muted)] font-mono">Cargando catálogo...</p>
          ) : (
            <div className="flex flex-col gap-3">
              {products.map((prod) => (
                <div
                  key={prod.slug}
                  className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded flex justify-between items-center gap-4 flex-wrap"
                >
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base">{prod.title}</h3>
                      {prod.isSample && (
                        <span className="text-[0.6rem] font-mono uppercase bg-[var(--primary)] text-white px-2 py-0.5 rounded">
                          Muestra
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-1 font-mono">
                      {prod.category} — <strong className="text-[var(--primary-ink)]">{prod.price}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/producto/${prod.slug}`}
                      className="text-xs font-mono px-3 py-1.5 border border-[var(--line)] rounded hover:bg-[var(--surface)]"
                      target="_blank"
                    >
                      👁️ Ver
                    </Link>
                    <button
                      onClick={() => handleEdit(prod)}
                      className="text-xs font-mono px-3 py-1.5 bg-[var(--primary)] text-white rounded"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(prod.slug, prod.title)}
                      className="text-xs font-mono px-3 py-1.5 bg-red-700 text-white rounded hover:bg-red-800"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
