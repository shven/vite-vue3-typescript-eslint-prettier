import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                // This will silence "failed to resolve component" warnings that we get for builtin nuxt components.
                compilerOptions: {
                    isCustomElement: (tag) => tag === 'RouterLink' || tag === 'nuxt-picture'
                }
            }
        }),
        svgLoader(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.vue', './src/**/*.ts']
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
