import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  },
  // This step is required to map the port the Docker and the React app
  server: {
    watch: {
      usePolling: true
    },

    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173 // you can replace this port with any port
  }
})
