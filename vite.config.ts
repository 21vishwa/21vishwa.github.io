import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import componentTagger from './some-plugin'; // 👈 Commented out for now

export default defineConfig(({ mode }) => ({
  base: "/21vishwa.github.io/",  // 👈 Important for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(), // 👈 Also commented
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
