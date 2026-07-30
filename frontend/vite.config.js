import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@tensorflow')) {
              return 'vendor-tfjs';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          if (id.includes('src/data/standards/')) {
            if (id.includes('iso27001')) return 'exam-data-iso27001';
            if (id.includes('iso45001')) return 'exam-data-iso45001';
            if (id.includes('iso14001')) return 'exam-data-iso14001';
            if (id.includes('iso9001')) return 'exam-data-iso9001';
            if (id.includes('fssc22000')) return 'exam-data-fssc22000';
            return 'exam-data-other';
          }
        }
      }
    }
  }
})
