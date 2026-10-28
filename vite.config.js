
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ruta base para GitHub Pages
  base: '/Iesco-Forms/',

  build: {
    // Dos paginas: la landing y el modo presentacion
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        presentacion: resolve(import.meta.dirname, 'presentacion.html'),
      },
    },
  },
})
