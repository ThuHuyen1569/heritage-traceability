import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Đường dẫn tương đối giúp bản build chạy đúng cả ở custom domain
  // và tại https://<username>.github.io/<repository>/.
  base: './',
  plugins: [react(), tailwindcss()],
})
