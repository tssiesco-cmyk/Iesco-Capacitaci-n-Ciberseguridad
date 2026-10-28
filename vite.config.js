
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ruta correcta del repositorio de GitHub
  base: '/Iesco-Capacitaci-n-Ciberseguridad/',

  build: {
    // Pagina principal y modo presentacion
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        presentacion: resolve(import.meta.dirname, 'presentacion.html'),
      },
    },
  },
})
