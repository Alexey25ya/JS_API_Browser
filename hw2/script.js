// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;
const dots = document.querySelectorAll('li');
console.log(dots);
// Обработчики событий для кнопок

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
dotsClick();


// Функция предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция слайда в соответствии с кликом на навигационные кнопки
function dotsClick() {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
            updateSlider();
        })
    });
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}





