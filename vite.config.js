import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { pageData } from './src/pages-data.js';

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL || '/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      helpers: {
        eq: (a, b) => a === b,
      },
      context(pagePath) {
        return pageData[pagePath] || {};
      },
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        ayudar: resolve(__dirname, 'ayudar.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        blog: resolve(__dirname, 'blog.html'),
        eventos: resolve(__dirname, 'eventos.html'),
        donaciones: resolve(__dirname, 'donaciones.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        fpreguntas: resolve(__dirname, 'fpreguntas.html'),
      },
    },
  },
});