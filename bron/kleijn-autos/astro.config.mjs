// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demomodus: de site draait als submap van de verzamelrepo op GitHub Pages.
export default defineConfig({
  site: 'https://jarinijhoff.github.io',
  base: '/nextup/kleijn-autos',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
