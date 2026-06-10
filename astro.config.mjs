// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://odysseyconsultancy.com',
  // Inline ALL stylesheets into each page's HTML. This is the key to the hard
  // requirement that a built page renders correctly when opened directly from the
  // filesystem (file://) — there is no external stylesheet that can silently fail.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
