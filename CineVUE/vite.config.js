import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    host: 'localhost', 
    port: 5173, 
    proxy: {
      '/api/': {
        target: 'http://localhost:3000',
        secure: false,        // Permette connessioni anche se non sono HTTPS (utile in dev)
        changeOrigin: false,  // Mantiene l'host originale nella richiesta

        // Modifica il path della richiesta: rimuove il prefisso `/api`
        // Esempio: `/api/film` → `/film`
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  // Alias per i percorsi, così puoi usare `@` al posto di scrivere `../../src/...`
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
