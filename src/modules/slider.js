export default () => {
const sectionCont = document.querySelector('#dots-cont');
// Наверно имелось ввиду в задании количество кнопок, от количество картинок
// Но условие кнопки из массива я выполнил
const imgCount = [1,2,3];
for (let i = 0; i < imgCount.length; i++) {
    const span = document.createElement("span");
     span.classList.add("dot");
     sectionCont.appendChild(span);
}
const slides =[...document.getElementsByClassName('mySlides')];
const dots = [...document.getElementsByClassName('dot')];
const prevIcon = document.querySelector('.prev');
const nextIcon = document.querySelector('.next');

let currentSlide = 0;
slides[currentSlide].classList.add('show');
dots[currentSlide].classList.add('current');

const resetShow = () => {
  slides.forEach((slide) => slide.classList.remove('show'));
  dots.forEach((dot) => dot.classList.remove('current'));
}

const goBackASlide = () => {
  resetShow();
  if (currentSlide === 0) {
    currentSlide = slides.length-1;    
    slides[currentSlide].classList.add('show');
    dots[currentSlide].classList.add('current');
    return;
  } 
  currentSlide -= 1;
  slides[currentSlide].classList.add('show');
  dots[currentSlide].classList.add('current');
}

const goFwdASlide = () => {
  resetShow();
  if (currentSlide === slides.length-1) {
    currentSlide = 0;    
    slides[currentSlide].classList.add('show');
    dots[currentSlide].classList.add('current');
    return;
  } 
  currentSlide += 1;
  slides[currentSlide].classList.add('show');
  dots[currentSlide].classList.add('current');
}

const advanceWDots = (e) => {
  resetShow();
  currentSlide = [...dots].indexOf(e.target); 
  if (currentSlide === undefined) {
    return;
  }
  slides[currentSlide].classList.add('show');
  dots[currentSlide].classList.add('current');
}


prevIcon.addEventListener('click', goBackASlide);
nextIcon.addEventListener('click', goFwdASlide);
dots.forEach((e) =>e.addEventListener('click', advanceWDots));


const autoPlay = document.getElementById('auto-switch');
let play;

autoPlay.addEventListener('click', () => {
  
  autoPlay.checked ? 
    play = setInterval(goFwdASlide, 4000)
  :
    clearInterval(play)
})
}