import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        header: './src/pages/header.html',
        production: './src/pages/production-house.html',
        music: './src/pages/music-player.html',
        song: './src/pages/music-player-song.html',
        category: './src/pages/brouse-by-category.html',
        whyus: './src/pages/why-us.html',
        download: './src/pages/download-sound.html',
        experiens: './src/pages/experiens.html',
        footer: './src/pages/footer.html',
      },
    },
  },
  plugins: [
    createHtmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: './assets', // Укажите вашу папку с изображениями
          dest: 'assets', // Папка назначения в папке dist
        },
      ],
    }),
  ],
});