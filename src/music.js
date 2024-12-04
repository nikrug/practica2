export function initMusic() {
    // Получаем элементы
            const filter = document.querySelector(".filter");
            const openButtons = document.querySelectorAll(".filter__open");
            const closeButton = document.querySelectorAll(".filter__close");
            
    
            // Открываем модальное окно при нажатии на кнопку
            openButtons.forEach(button => {
                button.addEventListener("click", () => {
                    filter.classList.add("filter__show"); // Добавляем класс, чтобы показать модал
                });
            });
    
            closeButton.forEach(button=> {
                button.addEventListener("click",()=>{
                 filter.classList.remove("filter__show");
                })
            });

// Функция для инициализации аудиоплееров

}


export function changeColor(event) {
    const target = event.target; // Получаем элемент, на который кликнули

    // Проверяем, является ли элемент <path>
    if (target.tagName === 'path') {
        const currentFill = target.getAttribute('fill');

        // Если fill не установлен, меняем цвет
        if (currentFill === 'none' || currentFill === '') {
            target.setAttribute('fill', 'blue'); // Меняем цвет на красный
            target.setAttribute('stroke', 'blue'); // Меняем цвет на красный
        } else {
            target.setAttribute('fill', 'none'); // Меняем обратно на прозрачный
            target.setAttribute('stroke', '#4C526A'); // Меняем цвет на красный
        }
    }
}




      




    