import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Указываем корень проекта
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/pages/header.html',
        music:'src/pages/music-player.html'
        
      },
    },
  },
});