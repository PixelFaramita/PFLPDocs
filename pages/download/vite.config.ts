import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/download/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/release': {
        target: 'https://d.mcpf.live',
        changeOrigin: true
      },
      '/update': {
        target: 'https://d.mcpf.live',
        changeOrigin: true
      }
    }
  }
})