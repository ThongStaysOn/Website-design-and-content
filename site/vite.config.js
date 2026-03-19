import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
});
