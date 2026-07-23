export const WA_PHONE = "573208275234";

export const WA_MESSAGES = {
  inicio: "Hola, vengo del sitio web de Ópticas DIOTICA, quiero más información",
  tienda: "Hola, vi el catálogo en la web y quiero preguntar por una montura",
  testimonios: "Hola, vengo del sitio web de Ópticas DIOTICA, quiero más información",
  agenda: "Hola, quiero agendar una asesoría visual en Ópticas DIOTICA",
  contacto: "Hola, tengo una pregunta antes de comprar en Ópticas DIOTICA"
};

export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(productName: string, color?: string, size?: string): string {
  let msg = `Hola, vi la ${productName} en el sitio web de Ópticas DIOTICA y quiero consultar disponibilidad.`;
  if (color || size) {
    msg += ` (Opciones: ${color ? `Color: ${color}` : ''}${color && size ? ', ' : ''}${size ? `Talla: ${size}` : ''})`;
  }
  return getWhatsAppUrl(msg);
}
