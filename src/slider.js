const prev = document.querySelector('#btn-prev')
const next = document.querySelector('#btn-next')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
const startBtn = document.querySelector('.startBtn')

let index = 0;

const activeSlide = n => {
  // console.log(n)
  for(let slide of slides){
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}
const activeDot = n => {
  for(let dot of dots){
    dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}

const prepareSlide = ind => {
  activeSlide(ind)
  activeDot(ind)  
}

const nextSlide = () => {
  startBtn.classList.add('paused')
  if(index === slides.length - 1){
    index = 0;
    prepareSlide(index)
  } else {
    index++;
    prepareSlide(index)
  }
}

const prevSlide = () => {
  startBtn.classList.add('paused')
  if(index === 0){
    index = slides.length - 1
    activeSlide(index)    
  } else {
    index--;
    activeSlide(index)
  }
}
dots.forEach((item, indexDot) =>{
  item.addEventListener('click', () =>{
    index = indexDot;
    prepareSlide(index)
  } )
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

let autoPlay = setInterval(nextSlide, 2000);


function autoPlayCheck () {
  if (startBtn.classList.contains('paused')) {
    startBtn.classList.remove('paused')
    clearInterval(autoPlay)
  } else {
  startBtn.classList.add('paused')
  setInterval(nextSlide, 2000)
  }
}

startBtn.addEventListener('click', autoPlayCheck)
  
    
  
  
  

