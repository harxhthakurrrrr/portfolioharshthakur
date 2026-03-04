// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Yeh line add karo ya confirm karo ki '/' hai (subfolder nahi deploy kar rahe to)
})