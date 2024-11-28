import './reset.css';
import './styles/header.scss';
import { initHeader } from './header.js'; // Импортируем функцию

document.addEventListener("DOMContentLoaded", () => {
    const include = document.querySelectorAll("include");
    include.forEach(async (el) => {
        const src = el.getAttribute("src");
        const response = await fetch(src);
        const content = await response.text();
        el.outerHTML = content; // Заменяем тег <include> контентом
        initHeader();    });
});