import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: ".",
  assetsInclude: ['**/*.gif', '**/*.GIF'],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // external: ['@fortawesome/fontawesome-svg-core'],
    },
  },
})
