import type { Property } from "@/data/properties";

export const site = {
  name: "Palermo Living",
  url: "https://palermoliving.com.ar",
  // Reemplazar por el número real (formato internacional, sin + ni espacios)
  whatsapp: "5491100000000",
  email: "hola@palermoliving.com.ar",
  instagram: "palermoliving",
};

export function whatsappLink(property?: Property) {
  const text = property
    ? `¡Hola! Me interesa la propiedad de ${property.address} (${property.neighborhood}). ¿Podemos coordinar una visita?`
    : "¡Hola! Estoy buscando propiedad en Palermo y alrededores. ¿Me ayudan?";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
