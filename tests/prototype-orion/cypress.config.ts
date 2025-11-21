import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfigPath: 'vite.config.cjs',
    },
    specPattern: 'cypress/components/**/*.cy.ts',
  },
});