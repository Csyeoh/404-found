import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPs
    strictPort: true,
    port: 5173, 
    hmr: {
      clientPort: 5173 // Force the client to use this port
    }
  }
})