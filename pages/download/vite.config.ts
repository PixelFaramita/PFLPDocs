import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { prefix } from './path'
//#region fix ts import for equal-vue
import { readFile, writeFileSync } from 'node:fs'
readFile('./node_modules/equal-vue/package.json', (err, data) => {
  if (err) throw err
  const pkg = JSON.parse(data.toString())
  pkg.exports = {
    '.': {
      import: './dist/equal-vue.es.js',
      require: './dist/equal-vue.umd.js',
      types: './dist/index.d.ts'
    },
    './dist/theme/dark': './dist/theme/dark',
    './dist/theme/light': './dist/theme/light',
    './dist/theme/full': {
      import: './dist/theme/full',
      require: './dist/theme/full',
      types: './dist/theme/full.ts'
    }
  }
  writeFileSync('./node_modules/equal-vue/package.json', JSON.stringify(pkg, null, 2))
})
//#endregion
export default defineConfig({
  base: prefix + 'download/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
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
