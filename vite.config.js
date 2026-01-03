import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPs
    strictPort: true,
    port: 5172,
    hmr: {
      clientPort: 5172 // Force the client to use this port
    }
  }
})