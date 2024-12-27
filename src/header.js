export function initHeader() {
// Получаем элементы
        const modal = document.querySelector(".modal");
        const openButtons = document.querySelectorAll(".click-open-modal");
        const closeButton = document.querySelectorAll(".modal__close");


        // Открываем модальное окно при нажатии на кнопку
        openButtons.forEach(button => {
            button.addEventListener("click", () => {
                modal.classList.add("modal__show-modal"); // Добавляем класс, чтобы показать модал
            });
        });

        closeButton.forEach(button=> {
            button.addEventListener("click",()=>{
             modal.classList.remove("modal__show-modal");
            })
        })
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("modal__show-modal"); // Убираем класс, чтобы скрыть модал
            }
        });

        const dropdown = document.querySelector(".dropdown-content");
        const dropdownButtons = document.querySelectorAll('.open-dropdown');
        const closeButtons = document.querySelector(".dropdown-button");
        const menuShow = document.querySelector('.menu')

    dropdownButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Если меню уже открыто
            if (menuShow.classList.contains("show-menu")) {
                closeButtons.classList.remove("dropdown-button-close");
                menuShow.classList.remove("show-menu");
                dropdown.classList.remove("show-dropdown"); // Закрываем выпадающее меню
            } else {
                closeButtons.classList.add("dropdown-button-close");
                menuShow.classList.add("show-menu");
                dropdown.classList.add("show-dropdown"); // Показываем выпадающее меню
            }
        });
    });


}

        