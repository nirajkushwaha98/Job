import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The regular Vite build uses ES modules. Browsers commonly block module
// execution for file:// URLs, which leaves a blank page when index.html is
// double-clicked. Build one self-contained IIFE instead, then emit a plain
// script tag so the production page works both from disk and a web server.
const fileSystemBuild = {
  name: 'file-system-build',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(html) {
      return html.replace('type="module" crossorigin', 'defer');
    },
  },
};

export default defineConfig({
  base: './',
  plugins: [react(), fileSystemBuild],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'assets/app.js',
      },
    },
  },
});
