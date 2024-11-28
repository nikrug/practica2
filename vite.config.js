import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Указываем корень проекта
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'pages/header.html',
        
      },
    },
  },
});