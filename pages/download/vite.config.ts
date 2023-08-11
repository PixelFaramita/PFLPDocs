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
  },
  build: {
    target: 'esnext', // 或者其他支持顶层 await 的目标版本
  },
})