import heroLocal from "../assets/hero-local.webp";
import heroLocalMobile from "../assets/hero-local-mobile.webp";
import platoJuane from "../assets/plato-juane.webp";
import platoTacacho from "../assets/plato-tacacho.webp";
import platoPatarashca from "../assets/plato-patarashca.webp";
import platoInchicapi from "../assets/plato-inchicapi.webp";
import historiaFundadores from "../assets/historia-fundadores.webp";
import lugarComedor from "../assets/lugar-comedor.webp";
import lugarJardin from "../assets/lugar-jardin.webp";
import lugarEntrada from "../assets/lugar-entrada.webp";
import type { SiteContent } from "../types/index.type";

export const es: SiteContent = {
  meta: {
    title: "Los Pajaritos — Restaurante campestre en Tambopata",
    description:
      "Cocina amazónica a la leña en un restaurante campestre en Tambopata. Mira la carta, conoce el lugar y descubre cómo llegar.",
  },

  brand: {
    name: "Los Pajaritos",
    tagline: "Restaurante campestre en Tambopata",
  },

  nav: [
    { id: "carta", label: "Carta" },
    { id: "historia", label: "Historia" },
    { id: "lugar", label: "El lugar" },
    { id: "visitanos", label: "Visítanos" },
  ],

  ui: {
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    languageLabel: "Idioma",
    mainNavLabel: "Principal",
    placeholderReview: "Texto de ejemplo",
  },

  hero: {
    eyebrow: "Selva peruana",
    title: "Los Pajaritos",
    subtitle: "Restaurante campestre en Tambopata",
    image: {
      src: heroLocal.src,
      alt: "Comedor techado con hojas de palmera, rodeado de jardín y bosque, al atardecer",
      width: heroLocal.width,
      height: heroLocal.height,
    },
    mobileImage: {
      src: heroLocalMobile.src,
      alt: "Comedor techado con hojas de palmera, rodeado de jardín y bosque, al atardecer",
      width: heroLocalMobile.width,
      height: heroLocalMobile.height,
    },
    primaryCta: "Ver la carta",
    secondaryCta: "Cómo llegar",
  },
  kitchen: {
    eyebrow: "Nuestra cocina",
    title: "Sabores de la selva, cocinados con calma",
    intro:
      "Hoja de bijao, fogón de leña y productos de la chacra y del río. Estos son los platos que más piden quienes nos visitan.", // PENDIENTE: validar con el cliente
    featured: [
      {
        name: "Juane de gallina",
        description:
          "Arroz con palillo y gallina de corral, envuelto en hoja de bijao y cocido a fuego lento.",
        image: {
          src: platoJuane.src,
          alt: "Juane abierto sobre hoja de bijao, con arroz amarillo, gallina, aceituna y huevo",
          width: platoJuane.width,
          height: platoJuane.height,
        },
      },
      {
        name: "Tacacho con cecina",
        description:
          "Plátano verde asado y majado con chicharrón, acompañado de cecina ahumada.",
        image: {
          src: platoTacacho.src,
          alt: "Bola de tacacho con chicharrón junto a lonjas de cecina en plato de barro",
          width: platoTacacho.width,
          height: platoTacacho.height,
        },
      },
      {
        name: "Patarashca de pescado",
        description:
          "Pescado de río a la brasa en hoja de bijao, con tomate, cebolla y sacha culantro.",
        image: {
          src: platoPatarashca.src,
          alt: "Pescado asado envuelto en hojas de bijao abiertas, con tomate y cebolla",
          width: platoPatarashca.width,
          height: platoPatarashca.height,
        },
      },
      {
        name: "Inchicapi",
        description:
          "Sopa espesa de gallina con maní molido, maíz, yuca y sacha culantro.",
        image: {
          src: platoInchicapi.src,
          alt: "Sopa cremosa de gallina con maíz y yuca en cuenco de barro",
          width: platoInchicapi.width,
          height: platoInchicapi.height,
        },
      },
    ],
  },
  menu: {
    showPrices: false, // PENDIENTE: el cliente debe autorizar los precios
    currency: "S/",
    pdfUrl: undefined,
    pdfLabel: "Descargar carta en PDF",
    openLabel: "Ver carta completa",
    closeLabel: "Ocultar carta completa",
    title: "Carta completa",
    note: "La carta puede variar según la temporada y la pesca del día.",
    // PENDIENTE: reemplazar con la carta real del restaurante
    categories: [
      {
        name: "Para empezar",
        items: [
          {
            name: "Tacacho con chicharrón",
            description: "Plátano asado y majado",
          },
          {
            name: "Chonta en ensalada",
            description: "Palmito fresco, limón y cebolla",
          },
          { name: "Yuca frita con ají de cocona" },
        ],
      },
      {
        name: "Platos de fondo",
        items: [
          { name: "Juane de gallina", description: "En hoja de bijao" },
          {
            name: "Tacacho con cecina",
            description: "Cecina ahumada de la casa",
          },
          {
            name: "Patarashca de pescado",
            description: "Pescado de río a la brasa",
          },
          { name: "Cecina con plátano y ensalada" },
          { name: "Gallina de corral al horno de barro" },
        ],
      },
      {
        name: "Sopas",
        items: [
          { name: "Inchicapi", description: "Gallina, maní y maíz" },
          { name: "Caldo de gallina regional" },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { name: "Refresco de cocona" },
          { name: "Refresco de aguaje" },
          { name: "Chicha de maíz morado" },
          { name: "Café de la zona" },
        ],
      },
      {
        name: "Postres",
        items: [
          { name: "Plátano maduro al horno con miel" },
          { name: "Dulce de cocona" },
        ],
      },
    ],
  },
  story: {
    eyebrow: "Nuestra historia",
    title: "Una mesa que empezó en el patio de casa",
    // PENDIENTE: reemplazar con la historia real y los nombres del equipo
    paragraphs: [
      "Los Pajaritos nació como un almuerzo de domingo para la familia y los vecinos, bajo los árboles donde cada mañana llegan las aves que le dan nombre.",
      "Con los años, el patio se volvió comedor. La cocina sigue a cargo de la familia: recetas aprendidas en casa, leña del monte y productos que llegan de chacras cercanas.",
    ],
    signature: "La familia de Los Pajaritos",
    image: {
      src: historiaFundadores.src,
      alt: "Pareja de cocineros con mandil, sonriendo junto al fogón de leña de la cocina",
      width: historiaFundadores.width,
      height: historiaFundadores.height,
    },
  },
  place: {
    eyebrow: "El lugar",
    title: "Comer al aire libre, entre árboles",
    intro:
      "Un comedor techado con hojas de palmera, mesas en el jardín y una entrada entre plantas. Así te recibimos.",
    main: {
      src: lugarComedor.src,
      alt: "Comedor de madera bajo techo de palmera, abierto hacia el jardín y el bosque",
      width: lugarComedor.width,
      height: lugarComedor.height,
      caption: "El comedor",
    },
    secondary: [
      {
        src: lugarJardin.src,
        alt: "Mesas de madera sobre el césped, a la sombra de árboles grandes",
        width: lugarJardin.width,
        height: lugarJardin.height,
        caption: "Mesas en el jardín",
      },
      {
        src: lugarEntrada.src,
        alt: "Portón de madera y sendero de tierra que lleva al comedor",
        width: lugarEntrada.width,
        height: lugarEntrada.height,
        caption: "La entrada",
      },
    ],
    amenitiesTitle: "Para tu visita",
    // Solo se muestran los servicios con confirmed: true. PENDIENTE: confirmar con el cliente.
    amenities: [
      { label: "Estacionamiento", confirmed: false },
      { label: "Área para niños", confirmed: false },
      { label: "Espacios techados", confirmed: false },
      { label: "Atención a grupos", confirmed: false },
    ],
  },
  reviews: {
    enabled: true,
    eyebrow: "Lo que dicen quienes nos visitan",
    title: "Reseñas",
    // PENDIENTE: reemplazar por 2–3 reseñas reales con su fuente (Google, TripAdvisor, Facebook)
    items: [
      {
        quote:
          "Aquí irá una reseña breve y real de un visitante, copiada tal como fue publicada.",
        author: "Nombre del visitante",
        source: "Google",
        placeholder: true,
      },
      {
        quote:
          "Segunda reseña real: idealmente sobre la comida, la atención o el ambiente del lugar.",
        author: "Nombre del visitante",
        source: "TripAdvisor",
        placeholder: true,
      },
    ],
  },

  visit: {
    eyebrow: "Visítanos",
    title: "Cómo llegar a Los Pajaritos",
    addressLabel: "Dirección",
    // PENDIENTE: dirección exacta
    address: [
      "Carretera principal, km 00",
      "Distrito, provincia · Región, Perú",
    ],
    referenceLabel: "Referencia",
    reference:
      "Ingreso por el portón de madera, a la derecha de la carretera, después del puente.", // PENDIENTE
    hoursLabel: "Horario",
    // PENDIENTE: horarios reales
    hours: [
      { days: "Martes a viernes", time: "12:00 – 17:00" },
      { days: "Sábados, domingos y feriados", time: "11:00 – 18:00" },
      { days: "Lunes", time: "Cerrado" },
    ],
    attentionLabel: "Atención",
    attention:
      "Por orden de llegada. Si vienes en grupo, escríbenos antes por WhatsApp.", // PENDIENTE
    directionsTitle: "Indicaciones",
    // PENDIENTE: indicaciones reales desde la ciudad más cercana
    directions: [
      "Desde la plaza principal de la ciudad, toma la carretera en dirección al pueblo vecino.",
      "Avanza unos 20 minutos en auto o mototaxi hasta pasar el puente.",
      "A unos 300 metros verás el portón de madera a mano derecha. Ese es el ingreso.",
    ],
    mapsCta: "Abrir en Google Maps",
    whatsappCta: "Reservar por WhatsApp",
  },

  contact: {
    whatsappNumber: "51900000000", // PENDIENTE: número real con código de país, sin espacios
    whatsappDisplay: "+51 900 000 000",
    whatsappMessage: "Hola, quisiera reservar una mesa en Los Pajaritos.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Los+Pajaritos+restaurante+campestre", // PENDIENTE: enlace exacto
    // PENDIENTE: URLs de las redes oficiales. Las que queden vacías no se muestran.
    socials: [
      {
        network: "facebook",
        label: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        network: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },

  footer: {
    sectionsTitle: "Secciones",
    contactTitle: "Contacto",
    followTitle: "Síguenos",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
    infoDev: "Diseñado y desarrollado por",
  },
};
