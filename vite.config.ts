import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  // Utiliser './' permet au site de fonctionner peu importe le dossier où il est
  base: './', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Définit le raccourci @ pour pointer vers la racine du projet
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // Garde le rafraîchissement automatique actif pendant que tu travailles
    hmr: true,
  },
  build: {
    // S'assure que le dossier de sortie s'appelle bien 'dist'
    outDir: 'dist',
  }
});