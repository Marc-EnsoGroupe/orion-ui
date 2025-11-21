const { defineConfig } = require('vite');
const { resolve } = require('path');
const vue = require('@vitejs/plugin-vue');
const babel = require('vite-plugin-babel').default;

module.exports = defineConfig({
  plugins: [
    vue(),
    babel({
      filter: /\.tsx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [['@babel/plugin-proposal-decorators', { version: '2023-01' }]],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: 'packages', replacement: resolve(__dirname, '../../packages') },
      { find: 'utils', replacement: resolve(__dirname, '../../utils') },
      { find: 'lib', replacement: resolve(__dirname, '../../lib') },
      { find: 'assets', replacement: resolve(__dirname, '../../assets') },
      { find: 'devtool', replacement: resolve(__dirname, '../../devtool') },
      { find: 'lang', replacement: resolve(__dirname, '../../lang') },
      { find: 'services', replacement: resolve(__dirname, '../../services') },

    ],
  },
});