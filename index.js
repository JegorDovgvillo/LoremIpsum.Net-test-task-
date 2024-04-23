const comments = [
  {
    review: 'Отзыв 1: Очень хороший сервис, буду рекомендовать друзьям!',
    author: '- Иван Иванов',
  },
  {
    review: 'Отзыв 2: Превосходное качество товаров и оперативная доставка.',
    author: '- Елена Петрова',
  },
  {
    review:
      'Отзыв 3: Очень доволен работой команды, спасибо за отличный сервис!',
    author: '- Александр Сидоров',
  },
];

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slider__slides');
const slideWidth = slider.offsetWidth; // Ширина слайдера

function populateSlides() {
  comments.forEach((comment) => {
    const slide = document.createElement('div');
    slide.classList.add('slider__slides-slide');
    slide.style.width = `${slideWidth}px`; // Установка ширины слайда
    slide.innerHTML = `
      <div class="slider__slides-comment">
        <p>${comment.review}</p>
        <p>${comment.author}</p>
      </div>
    `;
    slides.appendChild(slide);
  });
}

populateSlides();

let slideIndex = 0;

function showSlides() {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % comments.length;
  showSlides();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + comments.length) % comments.length;
  showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.slider__prev-btn')
    .addEventListener('click', prevSlide);
  document
    .querySelector('.slider__next-btn')
    .addEventListener('click', nextSlide);
});

const rangeInput = document.getElementsByClassName('form__range')[0];
const rangeValue = document.getElementsByClassName('form__range-value')[0];

const changeValue = () => {
  const value = rangeInput.value;
  rangeValue.textContent = `${value}%`;
};

rangeInput.addEventListener('input', changeValue);

document.addEventListener('DOMContentLoaded', changeValue);
