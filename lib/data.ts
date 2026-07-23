export interface Product {
  slug: string;
  title: string;
  category: string;
  price: string;
  genero: 'mujer' | 'hombre' | 'unisex';
  rostro: string[];
  material: 'acetato' | 'metal' | 'titanio';
  precioRango: 'bajo' | 'medio' | 'alto';
  description: string;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  isSample: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  isSample: boolean;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  isSample: boolean;
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    slug: 'montura-meridiano',
    title: 'Montura Meridiano',
    category: 'Acetato · Unisex',
    price: '$249.000',
    genero: 'unisex',
    rostro: ['ovalado', 'redondo'],
    material: 'acetato',
    precioRango: 'bajo',
    description: 'Montura de acetato con puente bajo, pensada para rostros ovalados y redondos. Marco medio, ideal tanto para lectura como para uso diario con luz azul.',
    colors: [
      { name: 'Carey oscuro', hex: '#2c2620' },
      { name: 'Verde petróleo', hex: '#0E3B36' },
      { name: 'Bronce translúcido', hex: '#C79A56' }
    ],
    sizes: ['Estrecho — 16mm', 'Medio — 18mm', 'Ancho — 20mm'],
    isSample: true
  },
  {
    slug: 'montura-solsticio',
    title: 'Montura Solsticio',
    category: 'Metal · Mujer',
    price: '$319.000',
    genero: 'mujer',
    rostro: ['cuadrado'],
    material: 'metal',
    precioRango: 'medio',
    description: 'Montura metálica ligera de líneas finas, perfecta para suavizar facciones cuadradas.',
    colors: [
      { name: 'Dorado mate', hex: '#C79A56' },
      { name: 'Negro azabache', hex: '#10201C' }
    ],
    sizes: ['Medio — 18mm'],
    isSample: true
  },
  {
    slug: 'montura-orbita',
    title: 'Montura Órbita',
    category: 'Titanio · Hombre',
    price: '$389.000',
    genero: 'hombre',
    rostro: ['ovalado'],
    material: 'titanio',
    precioRango: 'alto',
    description: 'Estructura ultraligera de titanio con acabado mate de alta durabilidad.',
    colors: [
      { name: 'Gris titanio', hex: '#4A5568' },
      { name: 'Negro sutil', hex: '#0A2B27' }
    ],
    sizes: ['Medio — 18mm', 'Ancho — 20mm'],
    isSample: true
  },
  {
    slug: 'montura-prisma',
    title: 'Montura Prisma',
    category: 'Acetato · Mujer',
    price: '$279.000',
    genero: 'mujer',
    rostro: ['redondo', 'ovalado'],
    material: 'acetato',
    precioRango: 'medio',
    description: 'Geometría suave con acetato traslúcido y bisagras reforzadas.',
    colors: [
      { name: 'Cuarzo rosa', hex: '#D4A373' },
      { name: 'Transparente', hex: '#E4E0D2' }
    ],
    sizes: ['Estrecho — 16mm', 'Medio — 18mm'],
    isSample: true
  },
  {
    slug: 'montura-penumbra',
    title: 'Montura Penumbra',
    category: 'Metal · Unisex',
    price: '$229.000',
    genero: 'unisex',
    rostro: ['cuadrado', 'ovalado'],
    material: 'metal',
    precioRango: 'bajo',
    description: 'Diseño clásico atemporal en aleación metálica resistente.',
    colors: [
      { name: 'Plata satinada', hex: '#CBD5E1' },
      { name: 'Negro mate', hex: '#10201C' }
    ],
    sizes: ['Medio — 18mm'],
    isSample: true
  },
  {
    slug: 'montura-zenit',
    title: 'Montura Zenit',
    category: 'Titanio · Hombre',
    price: '$419.000',
    genero: 'hombre',
    rostro: ['redondo'],
    material: 'titanio',
    precioRango: 'alto',
    description: 'Ingeniería de máxima ligereza con almohadillas ergonómicas de silicona.',
    colors: [
      { name: 'Azul noche', hex: '#0E3B36' },
      { name: 'Grafito', hex: '#334155' }
    ],
    sizes: ['Medio — 18mm', 'Ancho — 20mm'],
    isSample: true
  }
];

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Por primera vez siento que unas gafas no me disfrazan. Me asesoraron pensando en la forma de mi rostro y en las horas que paso frente al computador.",
    author: "Camila R.",
    role: "Diseñadora UI · Paciente de Ópticas DIOTICA",
    isSample: true
  },
  {
    id: 2,
    quote: "El examen no fue de 5 minutos como en las cadenas. Me explicaron la fatiga visual que tenía y me ayudaron a elegir la montura exacta.",
    author: "Jorge M.",
    role: "Arquitecto · Paciente de Ópticas DIOTICA",
    isSample: true
  },
  {
    id: 3,
    quote: "Atención personalizada de verdad. No intentaron venderme lo más caro, sino lo que mejor se adaptaba a mi formulación y estilo.",
    author: "Elena V.",
    role: "Docente · Paciente de Ópticas DIOTICA",
    isSample: true
  }
];

export const SAMPLE_STATS: StatItem[] = [
  { number: 12, suffix: '+', label: 'Años de experiencia *', isSample: true },
  { number: 4800, suffix: '+', label: 'Pacientes asesorados *', isSample: true },
  { number: 60, suffix: '+', label: 'Monturas en rotación *', isSample: true },
  { number: 4.9, suffix: '/5', label: 'Calificación promedio *', isSample: true }
];
