import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define:{
    'process.env':process.env
  },
  server:{
    proxy:{
      '/api':{
        target:'https://devshop-bzbj.onrender.com',
        changeOrigin:true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
