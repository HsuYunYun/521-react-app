import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/521-react-app/", // 確保這裡對應你的 GitHub repo 名稱
});
