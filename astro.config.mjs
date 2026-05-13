// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // IMPORTANT : Cette ligne est obligatoire pour que "new URL()" fonctionne
  site: 'https://ultras-sites.com', 

  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});