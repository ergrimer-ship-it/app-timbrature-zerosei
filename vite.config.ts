import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path per GitHub Pages
  // URL finale: https://ergrimer-ship-it.github.io/app-timbrature-zerosei/
  base: '/app-timbrature-zerosei/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'App Timbrature Zerosei',
        short_name: 'Timbrature',
        description: "Un'applicazione per i dipendenti per timbrare l'inizio e la fine del turno e visualizzare le ore lavorate su un calendario.",
        theme_color: '#1f2937',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/app-timbrature-zerosei/',
        scope: '/app-timbrature-zerosei/',
        icons: [
          {
            src: '/app-timbrature-zerosei/icons/icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/app-timbrature-zerosei/icons/icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})