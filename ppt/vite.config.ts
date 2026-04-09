import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'reveal.js/dist/reveal.css': path.resolve(__dirname, 'node_modules/reveal.js/dist/reveal.css'),
      'reveal.js/dist/theme/black.css': path.resolve(__dirname, 'node_modules/reveal.js/dist/theme/black.css'),
    },
  },
})
