import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // این خط باعث میشه به شبکه محلی دسترسی داشته باشه
    port: 5173,      // پورت پیش‌فرض
  },
})