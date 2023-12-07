// Определение текущего размера окна браузера:
// Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
// Подтверждение закрытия страницы:
// Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.
// Управление историей переходов:
// Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.


// Определение текущего размера окна браузера
const windowWidth = document.getElementById('width');
const windowHeight = document.getElementById('height');

function showSizeWindow() {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;
}

window.addEventListener("load", showSizeWindow);
window.addEventListener("resize", showSizeWindow);

// Подтверждение закрытия страницы

window.addEventListener("beforeunload", e => {
    e.preventDefault();
    e.returnValue = 'Вы уверены, что хотите покинуть эту страницу?';
});

// Управление историей переходов
const forward = document.querySelector('.forward');
const back = document.querySelector('.back');

forward.addEventListener('click', () => {
    window.history.forward();
});
back.addEventListener('click', () => {
    window.history.back();
});