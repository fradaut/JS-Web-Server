import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vuedoc: resolve(__dirname, 'vuedoc/index.html'),
        minecraft: resolve(__dirname, 'minecraft/index.html'),
        iot: resolve(__dirname, 'IoT/index.html'),
        da: resolve(__dirname, 'dataAnalysis/index.html'),
      }
    }
  }
});
