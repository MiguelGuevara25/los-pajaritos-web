export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Dish = {
  name: string;
  description: string;
  image: SiteImage;
  /** Precio en soles. Solo se muestra si `menu.showPrices` es true. */
  price?: number;
};

export type MenuItem = { name: string; description?: string; price?: number };
export type MenuCategory = { name: string; items: MenuItem[] };

export type Amenity = { label: string; confirmed: boolean };

export type Review = {
  quote: string;
  author: string;
  source: string;
  url?: string;
  /** true = texto de ejemplo; se etiqueta en pantalla hasta tener reseñas reales. */
  placeholder?: boolean;
};

export type SiteContent = {
  meta: { title: string; description: string };
  brand: { name: string; tagline: string };
  nav: { id: string; label: string }[];
  ui: {
    menuOpen: string;
    menuClose: string;
    skipToContent: string;
    languageLabel: string;
    mainNavLabel: string;
    placeholderReview: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: SiteImage;
    /** Encuadre vertical para móvil, para que el recorte conserve el local. */
    mobileImage: SiteImage;
    primaryCta: string;
    secondaryCta: string;
  };
  kitchen: {
    eyebrow: string;
    title: string;
    intro: string;
    featured: Dish[];
  };
  menu: {
    showPrices: boolean;
    currency: string;
    /** Si el cliente entrega la carta en PDF, coloca aquí su URL. */
    pdfUrl?: string | undefined;
    pdfLabel: string;
    openLabel: string;
    closeLabel: string;
    title: string;
    note: string;
    categories: MenuCategory[];
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    signature: string;
    image: SiteImage;
  };
  place: {
    eyebrow: string;
    title: string;
    intro: string;
    main: SiteImage & { caption: string };
    secondary: (SiteImage & { caption: string })[];
    amenitiesTitle: string;
    amenities: Amenity[];
  };
  reviews: {
    enabled: boolean;
    eyebrow: string;
    title: string;
    items: Review[];
  };
  visit: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    address: string[];
    referenceLabel: string;
    reference: string;
    hoursLabel: string;
    hours: { days: string; time: string }[];
    attentionLabel: string;
    attention: string;
    directionsTitle: string;
    directions: string[];
    mapsCta: string;
    whatsappCta: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    mapsUrl: string;
    socials: {
      network: "instagram" | "facebook" | "tiktok";
      label: string;
      url: string;
    }[];
  };
  footer: {
    sectionsTitle: string;
    contactTitle: string;
    followTitle: string;
    rights: string;
    backToTop: string;
    infoDev: string;
  };
};
