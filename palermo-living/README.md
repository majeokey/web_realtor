# Palermo Living — MVP

Portal inmobiliario donde cada propiedad tiene su propia landing de alta conversión.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Geist + Instrument Serif (servidas localmente, sin depender de Google Fonts en el build).

## Correr

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploy en Vercel sin configuración extra: todas las páginas se generan estáticas (SSG).

## Estructura

```
app/
  page.tsx                     Home: hero + filtros + grid + "Cómo trabajamos" + CTA
  propiedades/[slug]/page.tsx  Landing de cada propiedad (SSG + metadata OG + JSON-LD)
  not-found.tsx                404 "Esta propiedad ya voló"
components/
  PropertyCard.tsx             Card del listado
  PropertyExplorer.tsx         Filtros (operación, ambientes, barrio, precio, orden)
  ShareButton.tsx              Web Share API con fallback a copiar link
  SafeImage.tsx                next/image con placeholder si la foto falla
  detail/                      Secciones de la landing:
    DetailNav · Hero · KeyFacts · LoveReasons · Marquee · Feature · Gallery (lightbox)
    Spaces · Amenities · Location (Google Maps embed) · Pricing · FinalCta
    Related · StickyPriceBar
data/properties.ts             8 propiedades de ejemplo + tipos + getters
lib/site.ts                    Nombre, WhatsApp, email, IG  ← editar acá
lib/format.ts                  Formato USD / ARS / m²
```

## Personalizar

- **WhatsApp:** cambiar `site.whatsapp` en `lib/site.ts`. El mensaje se arma solo con la dirección de cada propiedad.
- **Agregar una propiedad:** sumar un objeto a `data/properties.ts`. El tipo `Property` obliga a completar todas las secciones de la landing.
- **Color de cada landing:** campo `accent` de la propiedad (botones, numeración, banda de amenities, CTA final).
- **Títulos con serif itálica:** los campos `{ lead, accent }` separan la parte sans de la parte en itálica.
- **Fotos:** hoy apuntan a Unsplash. Para producción, subirlas a `/public` o a un storage y cambiar los `src`; si usás otro dominio, agregarlo en `next.config.ts` → `images.remotePatterns`.

## Filtros

Operación y barrio se reflejan en la URL (`/?operacion=venta&barrio=Recoleta`), así una búsqueda se puede compartir. El filtro de precio se habilita al elegir alquiler o venta porque las escalas son distintas.

## Próximos pasos sugeridos

- Pasar `data/properties.ts` a un CMS (Sanity, Payload) o a Postgres manteniendo el tipo `Property`.
- Formulario de contacto con registro de leads (además de WhatsApp).
- Analytics de clics en "Consultar" por propiedad para medir conversión.
- OG image dinámica por propiedad con `next/og`.
