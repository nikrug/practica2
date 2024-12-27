import './reset.css';
import './styles/header.scss';
import './styles/production-house.scss';
import './styles/music-player.scss';
import './styles/brouse-by-category.scss';
import './styles/why-us.scss';
import './styles/download-sound.scss';
import './styles/experiens.scss';
import './styles/footer.scss';
import { initHeader } from './header.js'; 
import { initMusic } from './music.js'; 
import { initPlayer } from './music.js';

document.addEventListener("DOMContentLoaded", () => {
    const include = document.querySelectorAll("include");
    include.forEach(async (el) => {
        const src = el.getAttribute("src");
        const response = await fetch(src);
        const content = await response.text();
        el.outerHTML = content; 
        initHeader(); 
        initMusic(); 
    });

    const includes = document.querySelectorAll('.include');

    includes.forEach(include => {
      const src = include.getAttribute('data-src');
      fetch(src)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Ошибка при загрузке: ' + response.status);
              }
              return response.text();
          })
          .then(html => {
              include.innerHTML = html; // Вставляем загруженный HTML
              initPlayer(); // Инициализируем плеер после загрузки
              initHeader();
          })
          .catch(error => {
              console.error('Ошибка загрузки:', error);
          });
    });
});

// Инициализация заголовка и музыки
initHeader(); 
initMusic();  
