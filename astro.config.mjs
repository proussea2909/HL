// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Inline ALL stylesheets into the HTML <head>. This guarantees a built page
  // renders fully styled even when opened directly from the filesystem (file://),
  // where absolute asset paths to an external stylesheet would otherwise fail.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
