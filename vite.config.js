import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/opt/build/repo/node_modules/styled-components/dist/styled-components.min.js'
      ]
    }
  }
})
