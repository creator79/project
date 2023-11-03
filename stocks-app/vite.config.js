import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';
// import dotenv from 'dotenv';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],

define:{
  'process.env.VITE_KEY':JSON.stringify(process.env.VITE_KEY)
},
test: {
  globals: true,
  environment: 'jsdom',
 },
})
