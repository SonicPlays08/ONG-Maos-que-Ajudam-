import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    appType: 'mpa',

    build: {
        rolldownOptions: {
            input: {
                index: resolve(import.meta.dirname, 'index.html'),
                projetos: resolve(import.meta.dirname, 'projetos.html'),
                cadastro: resolve(import.meta.dirname, 'cadastro.html')
            }
        }
    }
});