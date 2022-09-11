import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Components/',
  modules: {
    localConvention: "camelCase",
    generateScopedName: "[name]__[local]__[hash:base64:5]",
  }
});
