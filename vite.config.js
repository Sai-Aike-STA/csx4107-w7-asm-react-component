import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // The base matches the repository path used by GitHub Pages.
  base: '/csx4107-w7-asm-react-component/',
})
