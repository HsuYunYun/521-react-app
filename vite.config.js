import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/521-react-app/'  // <- 根據 GitHub Repo 名稱設定
})
