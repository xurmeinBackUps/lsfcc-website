import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import 'vuetify/styles'
import vue from '@vitejs/plugin-vue'
import vuetify from './plugins/vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
