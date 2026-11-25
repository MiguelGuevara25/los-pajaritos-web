import type { SiteContent } from "../types/index.type";
import { es } from "./es";

export const en: SiteContent = {
  meta: {
    title: "Los Pajaritos — Countryside restaurant in Tambopata",
    description:
      "Wood-fired Amazonian cooking at a countryside restaurant in Tambopata. See the menu, get to know the place and find out how to get here.",
  },

  brand: {
    name: "Los Pajaritos",
    tagline: "Countryside restaurant in Tambopata",
  },

  nav: [
    { id: "carta", label: "Menu" },
    { id: "historia", label: "Our story" },
    { id: "lugar", label: "The place" },
    { id: "visitanos", label: "Visit us" },
  ],

  ui: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    skipToContent: "Skip to content",
    languageLabel: "Language",
    mainNavLabel: "Main",
    placeholderReview: "Sample text",
  },

  hero: {
    ...es.hero,
    eyebrow: "Peruvian jungle",
    subtitle: "Countryside restaurant in Tambopata",
    image: {
      ...es.hero.image,
      alt: "Palm-thatched dining hall surrounded by garden and forest at sunset",
    },
    mobileImage: {
      ...es.hero.mobileImage,
      alt: "Palm-thatched dining hall surrounded by garden and forest at sunset",
    },
    primaryCta: "See the menu",
    secondaryCta: "How to get here",
  },

  kitchen: {
    eyebrow: "Our kitchen",
    title: "Flavours of the jungle, cooked slowly",
    intro:
      "Bijao leaves, a wood-fired stove and produce from nearby farms and the river. These are the dishes our guests ask for most.",
    featured: [
      {
        ...es.kitchen.featured[0]!,
        description:
          "Turmeric rice and free-range hen, wrapped in bijao leaf and slow-cooked.",
        image: {
          ...es.kitchen.featured[0]!.image,
          alt: "Juane opened on a bijao leaf, with yellow rice, hen, olive and egg",
        },
      },
      {
        ...es.kitchen.featured[1]!,
        description:
          "Roasted green plantain mashed with pork crackling, served with smoked cured pork.",
        image: {
          ...es.kitchen.featured[1]!.image,
          alt: "Ball of tacacho with crackling next to slices of cecina on a clay plate",
        },
      },
      {
        ...es.kitchen.featured[2]!,
        description:
          "River fish grilled in bijao leaf with tomato, onion and sacha culantro.",
        image: {
          ...es.kitchen.featured[2]!.image,
          alt: "Grilled fish in opened bijao leaves, with tomato and onion",
        },
      },
      {
        ...es.kitchen.featured[3]!,
        description:
          "Thick hen soup with ground peanuts, corn, cassava and sacha culantro.",
        image: {
          ...es.kitchen.featured[3]!.image,
          alt: "Creamy hen soup with corn and cassava in a clay bowl",
        },
      },
    ],
  },

  menu: {
    ...es.menu,
    pdfLabel: "Download menu (PDF)",
    openLabel: "See full menu",
    closeLabel: "Hide full menu",
    title: "Full menu",
    note: "The menu may change with the season and the day's catch.",
    categories: [
      {
        name: "Starters",
        items: [
          {
            name: "Tacacho con chicharrón",
            description: "Roasted, mashed plantain",
          },
          {
            name: "Chonta salad",
            description: "Fresh palm heart, lime and onion",
          },
          { name: "Fried cassava with cocona chili sauce" },
        ],
      },
      {
        name: "Main courses",
        items: [
          { name: "Juane de gallina", description: "Wrapped in bijao leaf" },
          {
            name: "Tacacho con cecina",
            description: "House-smoked cured pork",
          },
          {
            name: "Patarashca de pescado",
            description: "River fish on the grill",
          },
          { name: "Cecina with plantain and salad" },
          { name: "Free-range hen from the clay oven" },
        ],
      },
      {
        name: "Soups",
        items: [
          { name: "Inchicapi", description: "Hen, peanuts and corn" },
          { name: "Regional hen broth" },
        ],
      },
      {
        name: "Drinks",
        items: [
          { name: "Cocona juice" },
          { name: "Aguaje juice" },
          { name: "Purple corn chicha" },
          { name: "Local coffee" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Baked ripe plantain with honey" },
          { name: "Cocona preserve" },
        ],
      },
    ],
  },

  story: {
    eyebrow: "Our story",
    title: "A table that started in the family backyard",
    paragraphs: [
      "Los Pajaritos began as a Sunday lunch for family and neighbours, under the trees where the birds that gave it its name arrive every morning.",
      "Over the years the backyard became a dining room. The family still runs the kitchen: recipes learned at home, firewood from the forest and produce from nearby farms.",
    ],
    signature: "The Los Pajaritos family",
    image: {
      ...es.story.image,
      alt: "Two cooks in aprons smiling next to the wood-fired stove",
    },
  },

  place: {
    eyebrow: "The place",
    title: "Eating outdoors, among the trees",
    intro:
      "A palm-thatched dining room, tables in the garden and an entrance among the plants. This is how we welcome you.",
    main: {
      ...es.place.main,
      alt: "Wooden dining room under a palm roof, open to the garden and forest",
      caption: "The dining room",
    },
    secondary: [
      {
        ...es.place.secondary[0]!,
        alt: "Wooden tables on the lawn, in the shade of large trees",
        caption: "Tables in the garden",
      },
      {
        ...es.place.secondary[1]!,
        alt: "Wooden gate and dirt path leading to the dining room",
        caption: "The entrance",
      },
    ],
    amenitiesTitle: "For your visit",
    amenities: [
      { label: "Parking", confirmed: es.place.amenities[0]!.confirmed },
      { label: "Kids' area", confirmed: es.place.amenities[1]!.confirmed },
      { label: "Covered areas", confirmed: es.place.amenities[2]!.confirmed },
      { label: "Groups welcome", confirmed: es.place.amenities[3]!.confirmed },
    ],
  },

  reviews: {
    ...es.reviews,
    eyebrow: "What our guests say",
    title: "Reviews",
    // Reviews are shown in their original language once real ones are added.
    items: [
      {
        ...es.reviews.items[0]!,
        quote:
          "A short, real review from a guest will go here, copied exactly as it was published.",
        author: "Guest name",
      },
      {
        ...es.reviews.items[1]!,
        quote:
          "A second real review: ideally about the food, the service or the atmosphere.",
        author: "Guest name",
      },
    ],
  },

  visit: {
    eyebrow: "Visit us",
    title: "How to get to Los Pajaritos",
    addressLabel: "Address",
    address: es.visit.address,
    referenceLabel: "Landmark",
    reference:
      "Enter through the wooden gate on the right side of the road, just after the bridge.",
    hoursLabel: "Opening hours",
    hours: [
      { days: "Tuesday to Friday", time: "12:00 – 17:00" },
      { days: "Saturdays, Sundays and holidays", time: "11:00 – 18:00" },
      { days: "Monday", time: "Closed" },
    ],
    attentionLabel: "Seating",
    attention:
      "First come, first served. If you're coming as a group, message us on WhatsApp beforehand.",
    directionsTitle: "Directions",
    directions: [
      "From the town's main square, take the road towards the neighbouring village.",
      "Drive or take a mototaxi for about 20 minutes until you cross the bridge.",
      "About 300 metres further on you'll see the wooden gate on your right. That's the entrance.",
    ],
    mapsCta: "Open in Google Maps",
    whatsappCta: "Book on WhatsApp",
  },

  contact: {
    ...es.contact,
    whatsappMessage: "Hello, I'd like to book a table at Los Pajaritos.",
  },

  footer: {
    sectionsTitle: "Sections",
    contactTitle: "Contact",
    followTitle: "Follow us",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    infoDev: "Designed and developed by",
  },
};
