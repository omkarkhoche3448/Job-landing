import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'ea04-103-82-43-176.ngrok-free.app',
      '.ngrok-free.app' 
    ]
  }
})
