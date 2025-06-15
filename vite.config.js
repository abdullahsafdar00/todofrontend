import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../todofrontend/dist', // optional: customize if needed
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/tasks': 'http://localhost:3000', // 👈 this proxies API calls in dev
    },
  },
})