import './reset.css';
import './styles/header.scss';
import './styles/production-house.scss';
import './styles/music-player.scss';
import { initHeader } from './header.js'; // Импортируем функцию
import { initMusic } from './music.js'; // Импортируем функцию


document.addEventListener("DOMContentLoaded", () => {
    const include = document.querySelectorAll("include");
    include.forEach(async (el) => {
        const src = el.getAttribute("src");
        const response = await fetch(src);
        const content = await response.text();
        el.outerHTML = content; // Заменяем тег <include> контентом
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
         
      });
});
});


initHeader(); 
initMusic();  

// Функция для загрузки содержимого HTML
function loadIncludes() {

}

// Функция для инициализации аудиоплееров
// Функция для инициализации аудиоплееров
function initPlayer() {
const playPauseButtons = document.querySelectorAll('.play-pause-button');

playPauseButtons.forEach(button => {
// Теперь мы ищем родительский элемент .music-player__player-song
const audio = button.closest('.music-player__player-song').querySelector('.audio');

if (audio) { // Дополнительная проверка на существование элемента audio
    button.onclick = function() {
        if (audio.paused) {
            audio.play();
            button.src = "./assets/music-img/pause-button.svg"; // Иконка паузы
        } else {
            audio.pause();
            button.src = "./assets/music-img/play-button.svg"; // Иконка воспроизведения
        }
    };
} else {
    console.error("Audio element not found for button: ", button);
}
});
}

// Загружаем содержимое при загрузке страницы
window.onload = loadIncludes;

