import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
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
        index: resolve(__dirname, 'src/views/index/index.html'),
        vuedoc: resolve(__dirname, 'src/views/vuedoc/index.html'),
        minecraft: resolve(__dirname, 'src/views/minecraft/index.html'),
        IoT: resolve(__dirname, 'src/views/IoT/index.html'),
        dataAnalysis: resolve(__dirname, 'src/views/dataAnalysis/index.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
});
