import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            testTimeout: 10000, // Increase the timeout to 10 seconds
            exclude: ['node_modules/**'],
            globals: true,
            coverage: {
                provider: 'istanbul', // 'istanbul' or 'v8'
                all: true,
                include: ['src/components/**/*.vue', 'src/ts/**/*.ts'],
                exclude: ['src/components/Styleguide/*.vue']
            }
        }
    })
);
