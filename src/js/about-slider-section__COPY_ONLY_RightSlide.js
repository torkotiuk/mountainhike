const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// manually slides
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// automatically slides v-1
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// });

// automatically slides v-2 (more understanding)
// arrange slides one to another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  // move to the next slide
  track.style.transform = 'translateX(-' + amountToMove + ')';
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
});
