// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // false: la raíz "/" será español y "/en" será inglés
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
