import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Features': path.resolve(__dirname, './src/features'),
      '@Store': path.resolve(__dirname, './src/config/store'),
      '@Api': path.resolve(__dirname, './src/config/api'),
      '@Router': path.resolve(__dirname, './src/config/router'),
      '@Layouts': path.resolve(__dirname, './src/shared/layouts'),
      '@Errors': path.resolve(__dirname, './src/shared/errors'),
    },
  },
});
