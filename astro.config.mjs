import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://zakiac.github.io',
  base: '/mission_better_together', // Ajout de la barre oblique à la fin

  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});

