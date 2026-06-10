// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// `site` and `base` are overridable via env vars so the same source deploys to a
// domain root (production) or a subpath (GitHub Pages preview at /HL/) unchanged.
// Local dev/build default to the root path.
export default defineConfig({
  site: process.env.SITE || 'https://odysseyconsultancy.com',
  base: process.env.BASE_PATH || '/',
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
