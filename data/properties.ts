// Datos de ejemplo para el MVP. Todo es ficticio pero realista
// (precios a octubre 2026). Para pasar a un CMS o a una base de datos,
// mantener este mismo tipo `Property` y reemplazar los getters del final.

export type Operation = "alquiler" | "venta";

export type Neighborhood =
  | "Palermo"
  | "Palermo Viejo"
  | "Palermo Soho"
  | "Recoleta"
  | "Belgrano";

export interface Accented {
  /** Parte en tipografía sans */
  lead: string;
  /** Parte destacada en serif itálica */
  accent: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export interface Property {
  slug: string;
  operation: Operation;
  propertyType: "Departamento" | "PH" | "Semipiso" | "Piso";
  neighborhood: Neighborhood;
  address: string;
  featured?: boolean;
  /** Color de acento propio de la landing */
  accent: string;

  // Card
  cardTitle: string;
  highlights: { emoji: string; label: string }[];

  // Hero
  headline: Accented;
  subtitle: string;
  heroImage: Photo;

  // Números
  priceUsd: number;
  expensasArs: number;
  availability: string;
  totalM2: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  floor: string;
  floorNote: string;
  orientation: string;
  orientationNote: string;
  yearBuilt: number;

  // Storytelling
  reasonsTitle: Accented;
  reasons: { emoji: string; title: string; body: string }[];
  marquee: string[];
  feature: {
    eyebrow: string;
    title: Accented;
    body: string;
    bullets: string[];
    image: Photo;
  };
  gallery: Photo[];
  surfaces: { label: string; m2: number }[];
  spaces: { name: string; detail: string }[];
  amenitiesTitle: Accented;
  amenitiesIntro: string;
  amenities: { emoji: string; name: string; detail: string }[];
  location: {
    intro: string;
    mapQuery: string;
    pois: { emoji: string; name: string; distance: string }[];
  };
  perks: string[];
  priceNote: string;
}

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  // ───────────────────────────────────────────── 1
  {
    slug: "cabrera-3900-palermo-viejo",
    operation: "alquiler",
    propertyType: "Departamento",
    neighborhood: "Palermo Viejo",
    address: "Cabrera al 3900",
    featured: true,
    accent: "#3F5A45",
    cardTitle: "2 ambientes con vista a pulmón de manzana",
    highlights: [
      { emoji: "☀️", label: "Orientación norte" },
      { emoji: "🏊", label: "Pileta" },
      { emoji: "🌳", label: "Vista verde" },
    ],
    headline: { lead: "Sol, silencio y verde en el", accent: "corazón de Palermo." },
    subtitle:
      "2 ambientes en piso 8, orientación norte, con vista abierta a un pulmón de manzana arbolado. Edificio con pileta, gimnasio, sauna y parrilla. Se aceptan mascotas.",
    heroImage: { src: img("photo-1502672260266-1c1ef2d93688"), alt: "Living luminoso con ventanal" },
    priceUsd: 1100,
    expensasArs: 316000,
    availability: "Disponible desde noviembre 2026",
    totalM2: 48.3,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    floor: "8º",
    floorNote: "de 9 + terraza",
    orientation: "Norte",
    orientationNote: "Sol todo el día",
    yearBuilt: 2011,
    reasonsTitle: { lead: "Un refugio urbano,", accent: "diseñado para vivir bien." },
    reasons: [
      {
        emoji: "☀️",
        title: "Sol todo el día",
        body: "Orientación norte, la mejor de Buenos Aires: sol en invierno y luz natural de la mañana a la tarde, sin el calor del oeste en verano.",
      },
      {
        emoji: "🌳",
        title: "Silencio y verde",
        body: "Contrafrente con vista abierta a un pulmón de manzana arbolado. Te olvidás de que estás a dos cuadras de la avenida.",
      },
      {
        emoji: "🏙️",
        title: "La altura justa",
        body: "Piso 8 de 9: vista despejada y máxima luz, con un piso y la terraza arriba que aíslan del calor del techo.",
      },
      {
        emoji: "🪵",
        title: "Madera maciza de verdad",
        body: "Entablonado de grapia en todos los ambientes. Cálido al pie y nada que ver con un piso flotante.",
      },
    ],
    marquee: ["Sol", "Silencio", "Verde", "Madera", "Pileta", "Sauna", "Parrilla", "Palermo Viejo"],
    feature: {
      eyebrow: "Living-comedor",
      title: { lead: "La luz entra", accent: "de punta a punta." },
      body: "Un living-comedor continuo, con cocina americana integrada y barra, que termina en un ventanal de piso a techo hacia el balcón. La madera y el sol del norte hacen el resto.",
      bullets: [
        "Cocina integrada con barra de desayuno",
        "Balcón al contrafrente con baranda de vidrio",
        "Cortinas blackout a medida en todos los ambientes",
      ],
      image: { src: img("photo-1522708323590-d24dbb6b0267"), alt: "Living-comedor integrado" },
    },
    gallery: [
      { src: img("photo-1502672260266-1c1ef2d93688"), alt: "Living con ventanal", caption: "Living con ventanal al norte" },
      { src: img("photo-1556911220-bff31c812dba"), alt: "Cocina integrada", caption: "Cocina americana con barra" },
      { src: img("photo-1505691938895-1758d7feb511"), alt: "Dormitorio", caption: "Dormitorio con placard completo" },
      { src: img("photo-1552321554-5fefe8c9ef14"), alt: "Baño", caption: "Baño con ventana y bañera" },
      { src: img("photo-1571896349842-33c89424de2d"), alt: "Pileta en terraza", caption: "Pileta y solarium en la terraza" },
      { src: img("photo-1534438327276-14e5300c3a48"), alt: "Gimnasio del edificio", caption: "Gimnasio equipado" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 45.37 },
      { label: "Balcón (norte)", m2: 2.93 },
      { label: "Total", m2: 48.3 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "Amplio, con salida al balcón y aire acondicionado" },
      { name: "Cocina integrada", detail: "Americana, con barra, horno y anafe eléctrico" },
      { name: "Dormitorio", detail: "Luminoso, con placard, cajonera y aire acondicionado" },
      { name: "Baño", detail: "Completo, con bañera, gran espejo y ventana" },
      { name: "Balcón", detail: "Al contrafrente, mirando al pulmón de manzana" },
    ],
    amenitiesTitle: { lead: "Edificio", accent: "full amenities." },
    amenitiesIntro: "Construcción moderna y asentada, con servicios que se disfrutan todo el año.",
    amenities: [
      { emoji: "🏊", name: "Pileta y solarium", detail: "En la terraza, con reposeras y vista abierta." },
      { emoji: "🏋️", name: "Gimnasio", detail: "Cinta, elíptico, bicis fijas, banco y pesas." },
      { emoji: "🧖", name: "Sauna seco", detail: "Para cerrar el día como corresponde." },
      { emoji: "🔥", name: "SUM con parrilla", detail: "Mesa, sillas y heladera para los asados." },
      { emoji: "🧺", name: "Laundry", detail: "Lavarropas y secarropas en el edificio." },
    ],
    location: {
      intro: "Residencial y tranquilo, con conectividad total. Arbolado, caminable y con todo a mano.",
      mapQuery: "Cabrera 3900, Palermo, Buenos Aires",
      pois: [
        { emoji: "☕", name: "6 cafés de especialidad", distance: "En la cuadra" },
        { emoji: "🏋️", name: "3 gimnasios", distance: "A 1 cuadra" },
        { emoji: "🧘", name: "Yoga y pilates", distance: "En la cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A la vuelta" },
        { emoji: "🌳", name: "Plaza Palermo Viejo", distance: "A 4 cuadras" },
        { emoji: "🚇", name: "Subte D · Scalabrini Ortiz", distance: "A 6 cuadras" },
      ],
    },
    perks: ["🐾 Se aceptan mascotas", "🤝 Trato directo con el dueño", "📄 Contrato por 1 año"],
    priceNote: "Precio por contrato de un año. Expensas: promedio de los últimos 3 meses.",
  },

  // ───────────────────────────────────────────── 2
  {
    slug: "thames-1600-ph-palermo-soho",
    operation: "venta",
    propertyType: "PH",
    neighborhood: "Palermo Soho",
    address: "Thames al 1600",
    featured: true,
    accent: "#9A5B3C",
    cardTitle: "PH reciclado de 3 ambientes con terraza propia",
    highlights: [
      { emoji: "🌿", label: "Terraza propia 32 m²" },
      { emoji: "🧱", label: "Ladrillo a la vista" },
      { emoji: "🚪", label: "Sin expensas altas" },
    ],
    headline: { lead: "Tu casa en Soho,", accent: "con cielo propio." },
    subtitle:
      "PH al frente, reciclado a nuevo, con terraza privada de 32 m² y parrilla. Techos de 3,8 m, ladrillo a la vista y la vida de Plaza Armenia a tres cuadras.",
    heroImage: { src: img("photo-1600210492486-724fe5c67fb0"), alt: "Living de PH reciclado con techos altos" },
    priceUsd: 235000,
    expensasArs: 45000,
    availability: "Escritura inmediata",
    totalM2: 98,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    floor: "1º",
    floorNote: "por escalera, solo 3 unidades",
    orientation: "Este",
    orientationNote: "Sol de mañana",
    yearBuilt: 1940,
    reasonsTitle: { lead: "El encanto de un PH,", accent: "sin ningún pero." },
    reasons: [
      {
        emoji: "🌿",
        title: "Una terraza que es otro ambiente",
        body: "32 m² propios con parrilla, deck y espacio para huerta. Desayunos al sol, asados sin pedir el SUM.",
      },
      {
        emoji: "📐",
        title: "Techos de 3,8 metros",
        body: "La amplitud de las casas de antes: aire, luz y una sensación de espacio que ningún edificio nuevo te da.",
      },
      {
        emoji: "🛠️",
        title: "Reciclado a nuevo, de verdad",
        body: "Instalación eléctrica, sanitaria y de gas renovadas en 2024. Comprás y te mudás: no hay nada que hacer.",
      },
      {
        emoji: "💸",
        title: "Expensas mínimas",
        body: "Solo 3 unidades y sin amenities que mantener. Lo que ahorrás por mes se nota.",
      },
    ],
    marquee: ["Terraza", "Parrilla", "Techos altos", "Ladrillo", "Reciclado", "Plaza Armenia", "Palermo Soho"],
    feature: {
      eyebrow: "Planta social",
      title: { lead: "Todo pasa", accent: "alrededor de la cocina." },
      body: "Cocina abierta con isla de granito y mesada de 3 metros, integrada al living-comedor. Ventanales de hierro restaurados llenan el espacio de luz de mañana.",
      bullets: [
        "Isla de granito negro con banquetas",
        "Calefacción por losa radiante",
        "Carpinterías de hierro originales restauradas",
      ],
      image: { src: img("photo-1556909114-f6e7ad7d3136"), alt: "Cocina abierta con isla" },
    },
    gallery: [
      { src: img("photo-1600210492486-724fe5c67fb0"), alt: "Living", caption: "Living con doble altura visual" },
      { src: img("photo-1556909114-f6e7ad7d3136"), alt: "Cocina", caption: "Cocina con isla de granito" },
      { src: img("photo-1600596542815-ffad4c1539a9"), alt: "Terraza", caption: "Terraza propia con parrilla" },
      { src: img("photo-1617806118233-18e1de247200"), alt: "Dormitorio principal", caption: "Dormitorio principal en suite" },
      { src: img("photo-1620626011761-996317b8d101"), alt: "Baño", caption: "Baño reciclado en microcemento" },
      { src: img("photo-1513694203232-719a280e022f"), alt: "Estudio", caption: "Segundo dormitorio o estudio" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 66 },
      { label: "Terraza propia", m2: 32 },
      { label: "Total", m2: 98 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "Techos de 3,8 m y ventanales al patio de luz" },
      { name: "Cocina abierta", detail: "Con isla, horno empotrado y lavavajillas" },
      { name: "Dormitorio principal", detail: "En suite, con vestidor" },
      { name: "Segundo dormitorio", detail: "Ideal como cuarto o estudio" },
      { name: "Baño completo + toilette", detail: "Reciclados en microcemento" },
      { name: "Terraza", detail: "Deck, parrilla y lavadero cubierto" },
    ],
    amenitiesTitle: { lead: "Sin amenities,", accent: "con todo lo que importa." },
    amenitiesIntro: "En un PH el lujo está puertas adentro. Esto es lo que viene con la casa.",
    amenities: [
      { emoji: "🔥", name: "Parrilla propia", detail: "En la terraza, con mesada y bacha." },
      { emoji: "♨️", name: "Losa radiante", detail: "Calefacción pareja en toda la casa." },
      { emoji: "❄️", name: "Aire frío/calor", detail: "Split inverter en living y dormitorios." },
      { emoji: "🧺", name: "Lavadero cubierto", detail: "Con conexión para lavarropas y secarropas." },
    ],
    location: {
      intro: "En la cuadra más linda de Soho: árboles, diseño y gastronomía, pero lejos del ruido de la noche.",
      mapQuery: "Thames 1600, Palermo Soho, Buenos Aires",
      pois: [
        { emoji: "🌳", name: "Plaza Armenia", distance: "A 3 cuadras" },
        { emoji: "☕", name: "Cafés de especialidad", distance: "En la cuadra" },
        { emoji: "🍷", name: "Polo gastronómico de Soho", distance: "A 2 cuadras" },
        { emoji: "🛒", name: "Supermercado", distance: "A 1 cuadra" },
        { emoji: "🏫", name: "Colegios", distance: "A 5 cuadras" },
        { emoji: "🚇", name: "Subte D · Plaza Italia", distance: "A 10 cuadras" },
      ],
    },
    perks: ["🏠 Apto crédito hipotecario", "📜 Escritura inmediata", "🧾 Expensas mínimas"],
    priceNote: "Precio de venta. Gastos de escritura a cargo del comprador.",
  },

  // ───────────────────────────────────────────── 3
  {
    slug: "fitz-roy-1900-palermo-hollywood",
    operation: "alquiler",
    propertyType: "Departamento",
    neighborhood: "Palermo",
    address: "Fitz Roy al 1900, Palermo Hollywood",
    accent: "#2F4A5F",
    cardTitle: "3 ambientes con balcón aterrazado y cowork",
    highlights: [
      { emoji: "🌇", label: "Balcón aterrazado" },
      { emoji: "💻", label: "Cowork en el edificio" },
      { emoji: "🏊", label: "Pileta" },
    ],
    headline: { lead: "Trabajá, viví y descansá", accent: "sin salir de Palermo." },
    subtitle:
      "3 ambientes en edificio 2022 con cowork, pileta y gimnasio. Balcón aterrazado de 14 m² con vista abierta al skyline de Hollywood.",
    heroImage: { src: img("photo-1600607687939-ce8a6c25118c"), alt: "Living moderno con balcón" },
    priceUsd: 1650,
    expensasArs: 410000,
    availability: "Disponible ya",
    totalM2: 78,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    floor: "6º",
    floorNote: "de 10, con 2 ascensores",
    orientation: "Noreste",
    orientationNote: "Luz pareja todo el día",
    yearBuilt: 2022,
    reasonsTitle: { lead: "Pensado para", accent: "cómo vivimos hoy." },
    reasons: [
      {
        emoji: "💻",
        title: "Cowork a un ascensor",
        body: "Salas silenciosas, buena conexión y café en el edificio. Home office sin trabajar desde la cama.",
      },
      {
        emoji: "🌇",
        title: "Un balcón que se usa",
        body: "14 m² aterrazados con lugar para mesa y plantas. Atardeceres sobre los techos de Hollywood.",
      },
      {
        emoji: "🛏️",
        title: "Dos dormitorios en suite",
        body: "Cada dormitorio con su baño. Ideal para compartir o para tener el cuarto de invitados que siempre quisiste.",
      },
      {
        emoji: "🔇",
        title: "Doble vidrio DVH",
        body: "Aberturas de aluminio con DVH en todo el departamento. La ciudad queda afuera.",
      },
    ],
    marquee: ["Cowork", "Balcón", "Pileta", "Gimnasio", "DVH", "Suite", "Palermo Hollywood"],
    feature: {
      eyebrow: "Living-comedor",
      title: { lead: "Un living que", accent: "se abre al afuera." },
      body: "El living se continúa en el balcón aterrazado a través de un frente vidriado de 4 metros. Cocina semi-integrada con desayunador y lavadero independiente.",
      bullets: [
        "Frente vidriado corredizo de 4 m",
        "Cocina con anafe a inducción y horno eléctrico",
        "Lavadero independiente",
      ],
      image: { src: img("photo-1600566753190-17f0baa2a6c3"), alt: "Cocina moderna semi integrada" },
    },
    gallery: [
      { src: img("photo-1600607687939-ce8a6c25118c"), alt: "Living", caption: "Living con salida al balcón" },
      { src: img("photo-1600566753190-17f0baa2a6c3"), alt: "Cocina", caption: "Cocina semi-integrada" },
      { src: img("photo-1631049307264-da0ec9d70304"), alt: "Dormitorio", caption: "Suite principal" },
      { src: img("photo-1584622650111-993a426fbf0a"), alt: "Baño", caption: "Baño en suite" },
      { src: img("photo-1545324418-cc1a3fa10c00"), alt: "Edificio", caption: "Fachada del edificio" },
      { src: img("photo-1576941089067-2de3c901e126"), alt: "Pileta", caption: "Pileta en la terraza" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 64 },
      { label: "Balcón aterrazado", m2: 14 },
      { label: "Total", m2: 78 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "Integrado al balcón por frente vidriado" },
      { name: "Cocina", detail: "Semi-integrada, con desayunador" },
      { name: "Suite principal", detail: "Con vestidor y baño completo" },
      { name: "Segunda suite", detail: "Con placard y baño con ducha" },
      { name: "Balcón aterrazado", detail: "14 m² al noreste" },
    ],
    amenitiesTitle: { lead: "Amenities que", accent: "vas a usar de verdad." },
    amenitiesIntro: "Edificio 2022 con seguridad 24 h y espacios comunes de primer nivel.",
    amenities: [
      { emoji: "💻", name: "Cowork", detail: "Salas de reunión y puestos con Wi-Fi de fibra." },
      { emoji: "🏊", name: "Pileta descubierta", detail: "Con solarium y duchas." },
      { emoji: "🏋️", name: "Gimnasio", detail: "Equipado y con vista a la terraza." },
      { emoji: "🛡️", name: "Seguridad 24 h", detail: "Vigilancia y control de acceso." },
      { emoji: "🚲", name: "Bicicletero", detail: "Cubierto y con anclajes." },
    ],
    location: {
      intro: "Hollywood en estado puro: productoras, restaurantes de autor y la vida de barrio de siempre.",
      mapQuery: "Fitz Roy 1900, Palermo Hollywood, Buenos Aires",
      pois: [
        { emoji: "🍽️", name: "Restaurantes de autor", distance: "En la cuadra" },
        { emoji: "☕", name: "Cafés", distance: "A 1 cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A 2 cuadras" },
        { emoji: "🏋️", name: "Gimnasio de cadena", distance: "A 3 cuadras" },
        { emoji: "🚆", name: "Tren San Martín · Palermo", distance: "A 5 cuadras" },
        { emoji: "🌳", name: "Bosques de Palermo", distance: "A 10 minutos en bici" },
      ],
    },
    perks: ["🐾 Se aceptan mascotas", "🛋️ Opción amoblado", "📄 Contrato por 1 año"],
    priceNote: "Precio por contrato de un año. Expensas: promedio de los últimos 3 meses.",
  },

  // ───────────────────────────────────────────── 4
  {
    slug: "arenales-1400-recoleta",
    operation: "venta",
    propertyType: "Piso",
    neighborhood: "Recoleta",
    address: "Arenales al 1400",
    featured: true,
    accent: "#6B5B3E",
    cardTitle: "Piso francés de 4 ambientes con balcón corrido",
    highlights: [
      { emoji: "🏛️", label: "Edificio de época" },
      { emoji: "🪵", label: "Roble de Eslavonia" },
      { emoji: "🛗", label: "Palier privado" },
    ],
    headline: { lead: "La elegancia de otra época,", accent: "lista para hoy." },
    subtitle:
      "Piso exclusivo en edificio francés de 1928. Palier privado, techos de 3,4 m con molduras originales, roble de Eslavonia en espina de pez y balcón corrido al frente.",
    heroImage: { src: img("photo-1616594039964-ae9021a400a0"), alt: "Salón de piso francés con molduras" },
    priceUsd: 395000,
    expensasArs: 520000,
    availability: "Escritura inmediata",
    totalM2: 162,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    floor: "4º",
    floorNote: "piso exclusivo",
    orientation: "Norte",
    orientationNote: "Balcón corrido al frente",
    yearBuilt: 1928,
    reasonsTitle: { lead: "Un clásico de Recoleta,", accent: "como ya no se construye." },
    reasons: [
      {
        emoji: "🛗",
        title: "Un piso, una familia",
        body: "Ascensor con palier privado: se abren las puertas y estás en tu casa. Privacidad absoluta.",
      },
      {
        emoji: "🪵",
        title: "Materiales nobles",
        body: "Roble de Eslavonia en espina de pez, molduras de yeso, boiserie y puertas de doble hoja originales.",
      },
      {
        emoji: "🌤️",
        title: "Balcón corrido al norte",
        body: "Tres ventanales franceses al frente con balcón corrido. Sol todo el día en living y comedor.",
      },
      {
        emoji: "🧭",
        title: "Planta clásica bien resuelta",
        body: "Recepción, zona íntima y servicios bien separados. Dependencia apta escritorio.",
      },
    ],
    marquee: ["Recoleta", "1928", "Molduras", "Espina de pez", "Palier privado", "Balcón", "Norte"],
    feature: {
      eyebrow: "Recepción",
      title: { lead: "Living y comedor", accent: "en enfilada." },
      body: "Salón de recepción de 42 m² con living y comedor en enfilada, chimenea de mármol funcionando y tres puertas-ventana hacia el balcón corrido.",
      bullets: [
        "Chimenea de mármol de Carrara en funcionamiento",
        "Techos de 3,4 m con molduras originales",
        "Calefacción central por radiadores",
      ],
      image: { src: img("photo-1567767292278-a4f21aa2d36e"), alt: "Comedor clásico" },
    },
    gallery: [
      { src: img("photo-1616594039964-ae9021a400a0"), alt: "Salón", caption: "Salón de recepción" },
      { src: img("photo-1567767292278-a4f21aa2d36e"), alt: "Comedor", caption: "Comedor en enfilada" },
      { src: img("photo-1484154218962-a197022b5858"), alt: "Cocina", caption: "Cocina con office" },
      { src: img("photo-1522771739844-6a9f6d5f14af"), alt: "Dormitorio", caption: "Dormitorio principal" },
      { src: img("photo-1552321554-5fefe8c9ef14"), alt: "Baño", caption: "Baño principal con ventana" },
      { src: img("photo-1449844908441-8829872d2607"), alt: "Fachada", caption: "Fachada francesa de 1928" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 154 },
      { label: "Balcón corrido", m2: 8 },
      { label: "Total", m2: 162 },
    ],
    spaces: [
      { name: "Salón de recepción", detail: "Living y comedor en enfilada, con chimenea" },
      { name: "Cocina con office", detail: "Amplia, con despensa y lavadero" },
      { name: "Dormitorio principal", detail: "En suite, con vestidor" },
      { name: "Dos dormitorios", detail: "Con placares de madera originales" },
      { name: "Dependencia", detail: "Apta escritorio o cuarto de invitados" },
      { name: "Balcón corrido", detail: "Al frente, orientación norte" },
    ],
    amenitiesTitle: { lead: "Un edificio", accent: "con portería y tradición." },
    amenitiesIntro: "Pocos departamentos, encargado de toda la vida y espacios comunes impecables.",
    amenities: [
      { emoji: "🛎️", name: "Portería", detail: "Encargado con vivienda en el edificio." },
      { emoji: "🛗", name: "Ascensor con palier privado", detail: "Más ascensor de servicio." },
      { emoji: "♨️", name: "Calefacción central", detail: "Por radiadores en todos los ambientes." },
      { emoji: "🚗", name: "Cochera opcional", detail: "Fija, cubierta, a media cuadra." },
    ],
    location: {
      intro: "En el corazón de Recoleta, entre plazas, embajadas y algunas de las mejores librerías de la ciudad.",
      mapQuery: "Arenales 1400, Recoleta, Buenos Aires",
      pois: [
        { emoji: "🌳", name: "Plaza Vicente López", distance: "A 4 cuadras" },
        { emoji: "☕", name: "Cafés clásicos", distance: "En la cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A 2 cuadras" },
        { emoji: "🏫", name: "Colegios bilingües", distance: "A 5 cuadras" },
        { emoji: "🏥", name: "Sanatorios", distance: "A 6 cuadras" },
        { emoji: "🚇", name: "Subte D · Tribunales", distance: "A 7 cuadras" },
      ],
    },
    perks: ["📜 Escritura inmediata", "🚗 Cochera opcional", "🏛️ Edificio patrimonial"],
    priceNote: "Precio de venta. Cochera opcional con valor adicional.",
  },

  // ───────────────────────────────────────────── 5
  {
    slug: "vicente-lopez-1900-recoleta",
    operation: "alquiler",
    propertyType: "Departamento",
    neighborhood: "Recoleta",
    address: "Vicente López al 1900",
    accent: "#5B4A6B",
    cardTitle: "Monoambiente premium frente a Plaza Francia",
    highlights: [
      { emoji: "🌳", label: "A metros de Plaza Francia" },
      { emoji: "🏊", label: "Pileta climatizada" },
      { emoji: "🛋️", label: "Amoblado" },
    ],
    headline: { lead: "Chico en metros,", accent: "enorme en ubicación." },
    subtitle:
      "Monoambiente amoblado y equipado, piso 11 con vista despejada. Edificio con pileta climatizada y laundry, a metros de Plaza Francia y el Centro Cultural Recoleta.",
    heroImage: { src: img("photo-1560448204-e02f11c3d0e2"), alt: "Monoambiente moderno y luminoso" },
    priceUsd: 780,
    expensasArs: 215000,
    availability: "Disponible desde diciembre 2026",
    totalM2: 38,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    floor: "11º",
    floorNote: "de 14",
    orientation: "Noroeste",
    orientationNote: "Atardeceres sobre la ciudad",
    yearBuilt: 2015,
    reasonsTitle: { lead: "Todo lo que necesitás,", accent: "nada que te sobre." },
    reasons: [
      {
        emoji: "🧳",
        title: "Llegás con la valija",
        body: "Amoblado y equipado: cama queen, sofá, vajilla, smart TV y Wi-Fi. Listo para vivir desde el día uno.",
      },
      {
        emoji: "🌳",
        title: "La mejor esquina de Recoleta",
        body: "Plaza Francia, el Cementerio, el Centro Cultural y la feria de los fines de semana, a pasos.",
      },
      {
        emoji: "🏊",
        title: "Pileta climatizada todo el año",
        body: "Cubierta y climatizada. Nadás en julio mientras afuera hace 5 grados.",
      },
      {
        emoji: "🌆",
        title: "Piso 11, vista despejada",
        body: "Sin edificios enfrente. Atardeceres sobre los techos de Recoleta desde el sillón.",
      },
    ],
    marquee: ["Recoleta", "Plaza Francia", "Amoblado", "Pileta climatizada", "Piso 11", "Vista"],
    feature: {
      eyebrow: "El ambiente",
      title: { lead: "Cada metro", accent: "está pensado." },
      body: "Un ambiente bien proporcionado con zona de dormir separada por biblioteca, kitchenette completa y un ventanal de 3 metros con la ciudad de fondo.",
      bullets: [
        "Biblioteca divisoria entre estar y dormitorio",
        "Kitchenette con heladera, microondas y anafe",
        "Placard de piso a techo",
      ],
      image: { src: img("photo-1586023492125-27b2c045efd7"), alt: "Estar del monoambiente" },
    },
    gallery: [
      { src: img("photo-1560448204-e02f11c3d0e2"), alt: "Ambiente principal", caption: "Ambiente principal" },
      { src: img("photo-1586023492125-27b2c045efd7"), alt: "Estar", caption: "Zona de estar" },
      { src: img("photo-1540518614846-7eded433c457"), alt: "Dormitorio", caption: "Sector dormitorio" },
      { src: img("photo-1584622650111-993a426fbf0a"), alt: "Baño", caption: "Baño completo" },
      { src: img("photo-1571896349842-33c89424de2d"), alt: "Pileta", caption: "Pileta climatizada" },
      { src: img("photo-1545324418-cc1a3fa10c00"), alt: "Edificio", caption: "Edificio 2015" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 35 },
      { label: "Balcón francés", m2: 3 },
      { label: "Total", m2: 38 },
    ],
    spaces: [
      { name: "Estar", detail: "Con sofá cama y smart TV" },
      { name: "Sector dormitorio", detail: "Cama queen separada por biblioteca" },
      { name: "Kitchenette", detail: "Completa y equipada" },
      { name: "Baño", detail: "Con ducha y mampara de vidrio" },
    ],
    amenitiesTitle: { lead: "Servicios de", accent: "edificio premium." },
    amenitiesIntro: "Edificio 2015 con seguridad 24 h y servicios pensados para el día a día.",
    amenities: [
      { emoji: "🏊", name: "Pileta climatizada", detail: "Cubierta, abierta todo el año." },
      { emoji: "🧺", name: "Laundry", detail: "Lavarropas y secarropas por ficha." },
      { emoji: "🛡️", name: "Seguridad 24 h", detail: "Recepción con personal permanente." },
      { emoji: "📦", name: "Recepción de paquetes", detail: "Tu delivery siempre llega." },
    ],
    location: {
      intro: "Recoleta cultural: museos, plazas y cafés históricos en un radio de cinco cuadras.",
      mapQuery: "Vicente López 1900, Recoleta, Buenos Aires",
      pois: [
        { emoji: "🌳", name: "Plaza Francia", distance: "A 2 cuadras" },
        { emoji: "🎨", name: "Centro Cultural Recoleta", distance: "A 3 cuadras" },
        { emoji: "🏛️", name: "Museo Nacional de Bellas Artes", distance: "A 6 cuadras" },
        { emoji: "☕", name: "Cafés históricos", distance: "En la cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A 1 cuadra" },
        { emoji: "🛍️", name: "Recoleta Mall", distance: "A 3 cuadras" },
      ],
    },
    perks: ["🛋️ Amoblado y equipado", "🧾 Wi-Fi incluido", "📄 Contrato por 1 año"],
    priceNote: "Precio por contrato de un año, amoblado. Expensas: promedio de los últimos 3 meses.",
  },

  // ───────────────────────────────────────────── 6
  {
    slug: "mendoza-2000-belgrano",
    operation: "venta",
    propertyType: "Semipiso",
    neighborhood: "Belgrano",
    address: "Mendoza al 2000",
    accent: "#3E5C5A",
    cardTitle: "Semipiso de 4 ambientes con cochera, frente a las Barrancas",
    highlights: [
      { emoji: "🌳", label: "Vista a las Barrancas" },
      { emoji: "🚗", label: "Cochera fija" },
      { emoji: "🏊", label: "Pileta climatizada" },
    ],
    headline: { lead: "Espacio para la familia,", accent: "verde en cada ventana." },
    subtitle:
      "Semipiso de 4 ambientes con vista a las Barrancas de Belgrano. Tres dormitorios, dos cocheras opcionales y un edificio con pileta climatizada y SUM.",
    heroImage: { src: img("photo-1600585154340-be6161a56a0c"), alt: "Semipiso amplio y luminoso" },
    priceUsd: 345000,
    expensasArs: 380000,
    availability: "Escritura en 60 días",
    totalM2: 138,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 3,
    floor: "9º",
    floorNote: "de 12, semipiso",
    orientation: "Norte",
    orientationNote: "Frente a las Barrancas",
    yearBuilt: 2008,
    reasonsTitle: { lead: "Belgrano en su versión", accent: "más tranquila." },
    reasons: [
      {
        emoji: "🌳",
        title: "Las Barrancas como patio",
        body: "Vista abierta a uno de los parques más lindos de la ciudad. Para chicos, perros y domingos largos.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Pensado para crecer",
        body: "Tres dormitorios, dos baños completos y toilette. Zona social y zona íntima bien separadas.",
      },
      {
        emoji: "🚗",
        title: "Cochera fija incluida",
        body: "Cubierta y con fácil maniobra. Opción de una segunda unidad en el mismo edificio.",
      },
      {
        emoji: "🔒",
        title: "Seguridad y portería",
        body: "Encargado permanente y vigilancia nocturna. Tranquilidad de verdad.",
      },
    ],
    marquee: ["Belgrano", "Barrancas", "Familia", "Cochera", "Pileta climatizada", "Semipiso", "Norte"],
    feature: {
      eyebrow: "Planta social",
      title: { lead: "Un living", accent: "entre los árboles." },
      body: "Living-comedor de 38 m² en L con balcón corrido al norte. Desde el piso 9, las copas de los árboles de las Barrancas llenan la ventana.",
      bullets: [
        "Balcón corrido de 9 metros al norte",
        "Cocina independiente con lavadero",
        "Calefacción por losa radiante",
      ],
      image: { src: img("photo-1493809842364-78817add7ffb"), alt: "Living con balcón" },
    },
    gallery: [
      { src: img("photo-1600585154340-be6161a56a0c"), alt: "Living", caption: "Living en L con balcón" },
      { src: img("photo-1493809842364-78817add7ffb"), alt: "Comedor", caption: "Comedor diario" },
      { src: img("photo-1484154218962-a197022b5858"), alt: "Cocina", caption: "Cocina independiente" },
      { src: img("photo-1505691938895-1758d7feb511"), alt: "Dormitorio principal", caption: "Suite principal" },
      { src: img("photo-1620626011761-996317b8d101"), alt: "Baño", caption: "Baño en suite" },
      { src: img("photo-1576941089067-2de3c901e126"), alt: "Pileta", caption: "Pileta del edificio" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 126 },
      { label: "Balcón corrido", m2: 12 },
      { label: "Total", m2: 138 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "En L, con balcón corrido al norte" },
      { name: "Cocina", detail: "Independiente, con comedor diario y lavadero" },
      { name: "Suite principal", detail: "Con vestidor y baño con hidromasaje" },
      { name: "Dos dormitorios", detail: "Con placares, comparten baño" },
      { name: "Toilette", detail: "En la zona social" },
      { name: "Balcón", detail: "Corrido, 9 metros de frente" },
    ],
    amenitiesTitle: { lead: "Un edificio", accent: "para toda la familia." },
    amenitiesIntro: "Pocas unidades por piso y amenities que se disfrutan todo el año.",
    amenities: [
      { emoji: "🏊", name: "Pileta climatizada", detail: "Cubierta, con solarium." },
      { emoji: "🏋️", name: "Gimnasio", detail: "Con vestuarios." },
      { emoji: "🎉", name: "SUM con parrilla", detail: "Para cumpleaños y reuniones." },
      { emoji: "🧸", name: "Sala de juegos", detail: "Para los más chicos." },
      { emoji: "🚗", name: "Cocheras", detail: "Fija incluida, opción de segunda." },
    ],
    location: {
      intro: "Entre las Barrancas y el Barrio Chino, con colegios, el tren y la avenida Cabildo a mano.",
      mapQuery: "Mendoza 2000, Belgrano, Buenos Aires",
      pois: [
        { emoji: "🌳", name: "Barrancas de Belgrano", distance: "Enfrente" },
        { emoji: "🥟", name: "Barrio Chino", distance: "A 2 cuadras" },
        { emoji: "🚆", name: "Tren Mitre · Belgrano C", distance: "A 3 cuadras" },
        { emoji: "🏫", name: "Colegios", distance: "A 4 cuadras" },
        { emoji: "🛒", name: "Supermercado", distance: "A 1 cuadra" },
        { emoji: "🚇", name: "Subte D · Juramento", distance: "A 7 cuadras" },
      ],
    },
    perks: ["🚗 Cochera fija incluida", "🏠 Apto crédito hipotecario", "📜 Escritura en 60 días"],
    priceNote: "Precio de venta con cochera incluida. Segunda cochera opcional.",
  },

  // ───────────────────────────────────────────── 7
  {
    slug: "cuba-2200-belgrano",
    operation: "alquiler",
    propertyType: "Departamento",
    neighborhood: "Belgrano",
    address: "Cuba al 2200",
    accent: "#4A5D3A",
    cardTitle: "2 ambientes a estrenar con balcón al frente",
    highlights: [
      { emoji: "✨", label: "A estrenar" },
      { emoji: "🌤️", label: "Balcón al frente" },
      { emoji: "🧺", label: "Laundry" },
    ],
    headline: { lead: "Estrená tu casa en", accent: "el mejor Belgrano." },
    subtitle:
      "2 ambientes a estrenar en edificio boutique, con balcón al frente y cocina integrada. A una cuadra de Juramento y de todo lo que necesitás.",
    heroImage: { src: img("photo-1507089947368-19c1da9775ae"), alt: "Living a estrenar con balcón" },
    priceUsd: 950,
    expensasArs: 240000,
    availability: "Disponible ya",
    totalM2: 54,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    floor: "3º",
    floorNote: "de 7, edificio boutique",
    orientation: "Este",
    orientationNote: "Sol de mañana",
    yearBuilt: 2026,
    reasonsTitle: { lead: "Primero en vivirlo,", accent: "el único en estrenarlo." },
    reasons: [
      {
        emoji: "✨",
        title: "Todo nuevo, todo tuyo",
        body: "Nadie vivió acá antes. Artefactos, griferías y pisos sin uso, con garantía de la constructora.",
      },
      {
        emoji: "🏡",
        title: "Edificio boutique",
        body: "Solo 14 unidades. Silencioso, con pocos vecinos y espacios comunes que se mantienen impecables.",
      },
      {
        emoji: "🌤️",
        title: "Balcón al frente",
        body: "Con vista a los árboles de una calle tranquila y sol de mañana para el café.",
      },
      {
        emoji: "📍",
        title: "Belgrano a pie",
        body: "Juramento, el subte D, Cabildo y el Barrio Chino, todo a menos de diez minutos caminando.",
      },
    ],
    marquee: ["A estrenar", "Boutique", "Balcón", "Belgrano", "Subte D", "Laundry"],
    feature: {
      eyebrow: "Living-comedor",
      title: { lead: "Luz de mañana,", accent: "café en el balcón." },
      body: "Living-comedor con cocina integrada en L, mesada de cuarzo y salida al balcón al frente. Porcelanato símil madera en todo el departamento.",
      bullets: [
        "Mesada de cuarzo blanco",
        "Preinstalación de aire acondicionado",
        "Porcelanato símil madera de 20 × 120",
      ],
      image: { src: img("photo-1556911220-bff31c812dba"), alt: "Cocina integrada a estrenar" },
    },
    gallery: [
      { src: img("photo-1507089947368-19c1da9775ae"), alt: "Living", caption: "Living con balcón" },
      { src: img("photo-1556911220-bff31c812dba"), alt: "Cocina", caption: "Cocina en L integrada" },
      { src: img("photo-1522771739844-6a9f6d5f14af"), alt: "Dormitorio", caption: "Dormitorio con placard" },
      { src: img("photo-1620626011761-996317b8d101"), alt: "Baño", caption: "Baño a estrenar" },
      { src: img("photo-1512917774080-9991f1c4c750"), alt: "Edificio", caption: "Edificio boutique 2026" },
      { src: img("photo-1513694203232-719a280e022f"), alt: "Detalle", caption: "Terminaciones de calidad" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 49 },
      { label: "Balcón", m2: 5 },
      { label: "Total", m2: 54 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "Con salida al balcón al frente" },
      { name: "Cocina integrada", detail: "En L, con mesada de cuarzo" },
      { name: "Dormitorio", detail: "Con placard completo" },
      { name: "Baño", detail: "Completo, con receptáculo de ducha" },
      { name: "Balcón", detail: "Al frente, orientación este" },
    ],
    amenitiesTitle: { lead: "Lo justo,", accent: "bien resuelto." },
    amenitiesIntro: "Un edificio boutique con lo que de verdad se usa.",
    amenities: [
      { emoji: "🧺", name: "Laundry", detail: "En planta baja." },
      { emoji: "🌿", name: "Terraza común", detail: "Con parrilla y solarium." },
      { emoji: "🚲", name: "Bicicletero", detail: "Cubierto." },
      { emoji: "🔐", name: "Acceso con control", detail: "Portero visor y cerradura digital." },
    ],
    location: {
      intro: "Belgrano centro, pero en una calle arbolada y tranquila. Todo se resuelve caminando.",
      mapQuery: "Cuba 2200, Belgrano, Buenos Aires",
      pois: [
        { emoji: "🚇", name: "Subte D · Juramento", distance: "A 2 cuadras" },
        { emoji: "🛍️", name: "Av. Cabildo", distance: "A 3 cuadras" },
        { emoji: "🌳", name: "Plaza Manuel Belgrano", distance: "A 3 cuadras" },
        { emoji: "☕", name: "Cafés", distance: "En la cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A 1 cuadra" },
        { emoji: "🏋️", name: "Gimnasios", distance: "A 2 cuadras" },
      ],
    },
    perks: ["✨ A estrenar", "🐾 Se aceptan mascotas", "📄 Contrato por 1 año"],
    priceNote: "Precio por contrato de un año. Expensas estimadas por la administración.",
  },

  // ───────────────────────────────────────────── 8
  {
    slug: "las-heras-4100-palermo-botanico",
    operation: "venta",
    propertyType: "Departamento",
    neighborhood: "Palermo",
    address: "Av. Las Heras al 4100, Botánico",
    accent: "#2E5440",
    cardTitle: "3 ambientes frente al Jardín Botánico",
    highlights: [
      { emoji: "🌳", label: "Frente al Botánico" },
      { emoji: "🏊", label: "Pileta" },
      { emoji: "☀️", label: "Orientación norte" },
    ],
    headline: { lead: "Despertate frente al", accent: "Jardín Botánico." },
    subtitle:
      "3 ambientes en piso alto, con vista directa al Jardín Botánico. Balcón al frente, cochera y un edificio con pileta, gimnasio y seguridad 24 h.",
    heroImage: { src: img("photo-1600596542815-ffad4c1539a9"), alt: "Departamento con vista verde" },
    priceUsd: 298000,
    expensasArs: 340000,
    availability: "Escritura inmediata",
    totalM2: 92,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    floor: "12º",
    floorNote: "de 15",
    orientation: "Norte",
    orientationNote: "Vista al Botánico",
    yearBuilt: 2014,
    reasonsTitle: { lead: "Una vista que", accent: "no se va a tapar nunca." },
    reasons: [
      {
        emoji: "🌳",
        title: "Un parque como vecino",
        body: "Enfrente tenés 7 hectáreas de jardín. La vista está protegida: nadie va a construir delante.",
      },
      {
        emoji: "☀️",
        title: "Piso 12 al norte",
        body: "Sol todo el día y la copa de los árboles a la altura de la ventana. Luz natural de sobra.",
      },
      {
        emoji: "🚗",
        title: "Cochera incluida",
        body: "Fija y cubierta, en un barrio donde estacionar es un lujo.",
      },
      {
        emoji: "📈",
        title: "Valor que se sostiene",
        body: "Las unidades con vista al Botánico son de las más buscadas de Palermo. Una compra que protege tu capital.",
      },
    ],
    marquee: ["Botánico", "Vista", "Norte", "Piso 12", "Pileta", "Cochera", "Palermo"],
    feature: {
      eyebrow: "Living-comedor",
      title: { lead: "El verde", accent: "es parte del living." },
      body: "Living-comedor con ventanal de piso a techo y balcón al frente. Del otro lado del vidrio, solo árboles y cielo.",
      bullets: [
        "Ventanal de piso a techo con DVH",
        "Balcón al frente con vista al Botánico",
        "Cocina semi-integrada con lavadero",
      ],
      image: { src: img("photo-1600210492486-724fe5c67fb0"), alt: "Living con ventanal" },
    },
    gallery: [
      { src: img("photo-1600596542815-ffad4c1539a9"), alt: "Vista", caption: "Vista al Jardín Botánico" },
      { src: img("photo-1600210492486-724fe5c67fb0"), alt: "Living", caption: "Living con ventanal" },
      { src: img("photo-1600566753190-17f0baa2a6c3"), alt: "Cocina", caption: "Cocina semi-integrada" },
      { src: img("photo-1631049307264-da0ec9d70304"), alt: "Dormitorio", caption: "Suite principal" },
      { src: img("photo-1552321554-5fefe8c9ef14"), alt: "Baño", caption: "Baño en suite" },
      { src: img("photo-1540497077202-7c8a3999166f"), alt: "Gimnasio", caption: "Gimnasio del edificio" },
    ],
    surfaces: [
      { label: "Cubierta", m2: 84 },
      { label: "Balcón", m2: 8 },
      { label: "Total", m2: 92 },
    ],
    spaces: [
      { name: "Living-comedor", detail: "Con ventanal y balcón al Botánico" },
      { name: "Cocina", detail: "Semi-integrada, con lavadero" },
      { name: "Suite principal", detail: "Con vestidor y vista al verde" },
      { name: "Segundo dormitorio", detail: "Con placard, apto escritorio" },
      { name: "Baño completo", detail: "Más baño en suite" },
      { name: "Cochera", detail: "Fija y cubierta" },
    ],
    amenitiesTitle: { lead: "Amenities", accent: "a la altura de la vista." },
    amenitiesIntro: "Edificio de categoría, con seguridad permanente y espacios comunes cuidados.",
    amenities: [
      { emoji: "🏊", name: "Pileta", detail: "Descubierta, con solarium." },
      { emoji: "🏋️", name: "Gimnasio", detail: "Equipado, con vestuarios." },
      { emoji: "🔥", name: "SUM con parrilla", detail: "En planta baja con jardín." },
      { emoji: "🛡️", name: "Seguridad 24 h", detail: "Con control de acceso." },
      { emoji: "🧺", name: "Laundry", detail: "En el edificio." },
    ],
    location: {
      intro: "Palermo Botánico: el barrio más verde de la ciudad, entre Plaza Italia y los Bosques.",
      mapQuery: "Avenida Las Heras 4100, Palermo, Buenos Aires",
      pois: [
        { emoji: "🌳", name: "Jardín Botánico", distance: "Enfrente" },
        { emoji: "🌸", name: "Jardín Japonés", distance: "A 8 cuadras" },
        { emoji: "🚇", name: "Subte D · Plaza Italia", distance: "A 3 cuadras" },
        { emoji: "☕", name: "Cafés", distance: "En la cuadra" },
        { emoji: "🛒", name: "Supermercado", distance: "A 1 cuadra" },
        { emoji: "🛍️", name: "Alto Palermo", distance: "A 10 cuadras" },
      ],
    },
    perks: ["🚗 Cochera incluida", "🏠 Apto crédito hipotecario", "📜 Escritura inmediata"],
    priceNote: "Precio de venta con cochera incluida.",
  },
];

// ───────────────────────────────────────────── Getters

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);

export const getRelated = (current: Property, limit = 3) =>
  properties
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => score(b, current) - score(a, current))
    .slice(0, limit);

function score(p: Property, ref: Property) {
  return (
    (p.neighborhood === ref.neighborhood ? 2 : 0) +
    (p.operation === ref.operation ? 1 : 0) +
    (p.featured ? 0.5 : 0)
  );
}

export const neighborhoods: Neighborhood[] = [
  "Palermo",
  "Palermo Viejo",
  "Palermo Soho",
  "Recoleta",
  "Belgrano",
];
