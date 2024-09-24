import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    strictPort: true,
    port: 3000, // adjust the port if necessary
  },
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
  },
});
