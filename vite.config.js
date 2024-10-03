import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//modificado para dist en hostinger
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})