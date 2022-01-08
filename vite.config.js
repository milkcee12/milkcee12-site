const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
    root: 'public',
    build: {
      outDir: '../dist',
      rollupOptions: {
          input: {
              main: resolve(__dirname, 'public/index.html'),
              projects: resolve(__dirname, 'public/projects/index.html')
          }
      }
    }
  })