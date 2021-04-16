import picturesData from "../src/picturesData";

export default function createSlider() {
  const slider = document.querySelector(".slider");
  const nextBtn = slider.querySelector(".slider__next-btn");
  const prevBtn = slider.querySelector(".slider__prev-btn");
  const dots = document.querySelector(".slider__dots");
  const switchBtn = document.querySelector("#switch");
  let slideIndex = 0;
  let timer;
  let autoPlay = true;

  switchBtn.addEventListener("click", () => {
    if (switchBtn.checked) {
      clearInterval(timer);
      autoPlay = false;
    } else {
      autoPlay = true;
      activeSlide(slideIndex);
    }
  });

  for (let picture of picturesData) {
    const sliderItem = `
      <div class="slider__item">
        <img src=${picture} alt="">
      </div>
    `;
    const sliderDot = `
      <span class="slider__dots__item"></span>
    `;
    slider.insertAdjacentHTML("afterbegin", sliderItem);
    dots.insertAdjacentHTML("afterbegin", sliderDot);
  }

  const dotItems = dots.querySelectorAll(".slider__dots__item");

  activeSlide(slideIndex);

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", previousSlide);

  function nextSlide() {
    activeSlide((slideIndex += 1));
  }

  function previousSlide() {
    activeSlide((slideIndex -= 1));
  }

  function activeSlide(n) {
    clearInterval(timer);
    const slides = slider.querySelectorAll(".slider__item");

    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    for (let slide of slides) {
      slide.classList.remove("slider__item-active");
    }
    slides[slideIndex].classList.add("slider__item-active");
    activeDot(slideIndex);
    if (autoPlay) timer = setInterval(nextSlide, 3500);
  }

  function activeDot(n) {
    for (let dot of dotItems) {
      dot.classList.remove("slider__dots__item-active");
    }
    dotItems[n].classList.add("slider__dots__item-active");
  }

  dotItems.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideIndex = index;
      activeSlide(slideIndex);
    });
  });
}
