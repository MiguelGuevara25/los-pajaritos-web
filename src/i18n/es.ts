export const es = {
  meta: {
    title: "Los Pajaritos — Restaurante campestre de la selva peruana",
    description:
      "Cocina amazónica a la leña en un restaurante campestre de la selva peruana. Mira la carta, conoce el lugar y descubre cómo llegar.",
  },

  brand: {
    name: "Los Pajaritos",
    tagline: "Restaurante campestre de la selva peruana",
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
  },
};
