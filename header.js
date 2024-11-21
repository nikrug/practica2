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
        const dropdownCloseButtons = document.querySelectorAll('.close-dropdown');
        const showButtons = document.querySelector('.dropdown-button');
        const showCloseButtons = document.querySelector('.close-button');

    dropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
        dropdown.classList.add("show-dropdown"); // Показываем выпадающее меню
        showButtons.classList.add("dropdown-button-hidden"); // Скрываем кнопки "Open Dropdown"
        showCloseButtons.classList.add("show-close"); // Показываем кнопки "Close"
         });
    });

dropdownCloseButtons.forEach(button => {
    button.addEventListener("click", () => {
        dropdown.classList.remove("show-dropdown"); // Скрываем выпадающее меню
        showButtons.classList.remove("dropdown-button-hidden"); // показываем кнопки "Open Dropdown"
        showCloseButtons.classList.remove("show-close"); // скрываем кнопки "Close"
    });

});




        