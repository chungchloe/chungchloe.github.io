import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  //base: process.env.VITE_BASE || '/',
  //base: '/chungchloe.github.io',
});
