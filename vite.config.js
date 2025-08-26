// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 최소 안전 구성 - 추가 설정은 이 상태에서 천천히 붙여라
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
})
