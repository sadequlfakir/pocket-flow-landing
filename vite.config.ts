import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(outDir, 'index.html');
      const fallbackPath = path.join(outDir, '404.html');

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  publicDir: 'assets',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
