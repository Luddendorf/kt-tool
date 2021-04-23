const slider = () => {
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.getElementById("slider-btn-prev");
  const nextBtn = document.getElementById("slider-btn-next");
  const pagination = document.querySelector(".pagination");
  const stopBtn = document.getElementById("stop");
  const playBtn = document.getElementById("play");

  let counter = 0;
  let intervalId;
  let autoPlayFlag = false;

  const createPagination = () => {
    for (let i = 0; i < carouselImages.length; i++) {
      const li = document.createElement("li");
      li.classList.add("pagination-item");
      pagination.insertAdjacentElement("beforeend", li);
      if (i === counter) {
        li.classList.add("is-active");
      }
    }
  };
  createPagination();

  const paginationBullets = document.querySelectorAll(".pagination-item");
  
  const stepSize = carouselImages[0].clientWidth || 640;
  console.log(stepSize);
  carouselSlide.style.transform = `translateX(${-stepSize * counter}px)`;

  paginationBullets.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
      paginationBullets[counter].classList.remove("is-active");
      let target = event.target;
      counter = index;
      carouselSlide.classList.add("transform-animation");
      carouselSlide.style.transform = `translateX(${-stepSize * counter}px)`;
      if (dot === target) {
        dot.classList.add("is-active");
      }
    });
  });

  const prevDot = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextDot = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const prevSlider = () => {
    if (counter <= 0) {
      counter = carouselImages.length;
    }
    carouselSlide.classList.add("transform-animation");
    counter--;
    carouselSlide.style.transform = `translateX(${-stepSize * counter}px)`;
  };

  const nextSlider = () => {
    if (counter >= carouselImages.length - 1) {
      counter = -1;
    }
    carouselSlide.classList.add("transform-animation");
    counter++;
    carouselSlide.style.transform = `translateX(${-stepSize * counter}px)`;
  };

  nextBtn.addEventListener("click", () => {
    nextSlider();
    nextDot(paginationBullets, counter, "is-active");
    paginationBullets.forEach((dot, index) => {
      if (counter !== index) {
        dot.classList.remove("is-active");
      }
    });
    if (!autoPlayFlag) {
      autoPlay();
    }
  });

  prevBtn.addEventListener("click", () => {
    prevSlider();
    prevDot(paginationBullets, counter, "is-active");
    paginationBullets.forEach((dot, index) => {
      if (counter === index) {
        dot.classList.add("is-active");
      } else {
        dot.classList.remove("is-active");
      }
    });
    if (!autoPlayFlag) {
      autoPlay();
    }
  });

  const autoPlay = (time = 3000) => {
    intervalId = setInterval(() => {
      nextSlider();
      nextDot(paginationBullets, counter, "is-active");
      paginationBullets.forEach((dot, index) => {
        if (counter !== index) {
          dot.classList.remove("is-active");
        }
      });
    }, time);
    autoPlayFlag = true;
  };

  autoPlay();

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    autoPlayFlag = false;
  });

  playBtn.addEventListener("click", () => {
    autoPlay(3000);
    autoPlayFlag = true;
  });
};

export default slider;
