/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [angular()],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['src/test-setup.ts'],
            include: ['**/*.spec.ts'],
            reporters: ['default'],
            pool: 'vmForks',
            poolOptions: {
                forks: {
                    maxForks: 1,
                    minForks: 1,
                },
            },
            coverage: {
                provider: 'v8'
            }
        },
        define: {
            'import.meta.vitest': mode !== 'production',
        },
    };
});
