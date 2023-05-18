import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@views': resolve(__dirname, './src/views'),
      '@public': resolve(__dirname, './public'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/views/index/index.html'),
        vuedoc: resolve(__dirname, 'src/views/vuedoc/index.html'),
        minecraft: resolve(__dirname, 'src/views/minecraft/index.html'),
        // iot: resolve(__dirname, 'IoT/index.html'),
        da: resolve(__dirname, 'src/views/dataAnalysis/index.html'),
      }
    }
  }
});
