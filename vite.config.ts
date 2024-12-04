/// <reference types="vitest" />
import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
    plugins: [angular()],
    test: {
        globals: true,
        setupFiles: ['src/test-setup.ts'],
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        reporters: ['default'],
    },
    define: {
        'import.meta.vitest': mode !== 'production',
    },
}));
