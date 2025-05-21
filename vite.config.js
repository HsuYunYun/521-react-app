// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/521-react-app/' // ← 必須正確設定，GitHub Pages 才找得到資源
})
