import { es } from "./es";

export const en = {
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
  },
} as const;
