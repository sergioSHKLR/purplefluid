import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/purplefluid/',
  plugins: [react()],
  worker: { format: 'es' },
})
