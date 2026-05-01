import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goTeacher/',
  server: {
    proxy: {
      '/compile': {
        target: 'https://go.dev/_/compile',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/compile/, '')
      }
    }
  }
});
