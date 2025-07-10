import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/public-assets/', // 👈 Set the correct base path for GitHub Pages
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});
