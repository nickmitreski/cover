import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    force: true
  },
  clearScreen: false,
  build: {
    sourcemap: true,
    // Clean the output directory before build
    emptyOutDir: true,
  },
})
