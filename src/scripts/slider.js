"use strict";
import ship from "../img/ship.jpg";
const ships = [
  {
    shipName: "Thunder Child",
    className: "tartana",
    class: 7,
    shipHull: 95, // корпус
    speed: 6.5,
    maneuverability: 46,
    beidewind: 8.2, // способность идти против ветра
    hold: 50, // трюм
    team: 10,
    weapons: 2,
    price: 350,
    desc:
      "Впервые тартана появилась в Средиземном море. Изначально это была небольшая рыбачья лодка с треугольным парусом, но хорошие ходовые характеристики сделали ее очень популярным кораблем для каботажных плаваний и торговли между соседними поселениями.",
  },
  {
    shipName: "Panther",
    className: "longboat",
    class: 7,
    shipHull: 200,
    speed: 13.5,
    maneuverability: 72,
    beidewind: 7.5,
    hold: 200,
    team: 17,
    weapons: 8,
    price: 2500,
    desc:
      "Большая лодка, на которую устанавливают малые пушки. Серьёзным кораблем никогда не станет, но для пиратских или контрабандных вылазок широко применяется по всему миру.",
  },
  {
    shipName: "Neptune",
    className: "lugger",
    class: 6,
    shipHull: 700,
    speed: 14.5,
    maneuverability: 62,
    beidewind: 9.5,
    hold: 550,
    team: 57,
    weapons: 12,
    price: 14500,
    desc:
      "Небольшой корабль, созданный для перевозки грузов и охраны небольших конвоев. Несмотря на то, что Вооружение люггера — слабое, а команда — небольшая, он специально сконструирован как для торговли, так и для сражений. Многие капитаны ценят люггер за его скорость и маневренность. Небольшие размеры не позволяют ему совершать дальние морские плавания.",
  },
  {
    shipName: "Gladiator",
    className: "sloop",
    class: 6,
    shipHull: 1000,
    speed: 13.5,
    maneuverability: 36,
    beidewind: 7.85,
    hold: 750,
    team: 66,
    weapons: 16,
    price: 18000,
    desc:
      "Обладая небольшой осадкой и великолепными ходовыми качествами, шлюп представляет собой высокоэффективный разведывательный корабль, пригодный для берегового патрулирования и торговли.",
  },
];
const wrapperSlide = document.querySelector(".slider-wrapper");
const dotsWrapper = document.querySelector(".dot-wrapper");

ships.forEach((item) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("slide");
  wrapper.innerHTML = `
                        <img src =${ship}  alt =${"IMG"} class ="slide-img" >
                        <div class="liner">
                          <div>Name: ${item.shipName}</div>
                          <div>Class: ${item.className}</div>
                          <div>Rang: ${item.class}</div>
                          <div>Ship Hull: ${item.shipHull}</div>
                          <div>Speed: ${item.speed}</div>
                          <div>Maneuverability: ${item.maneuverability}</div>
                        </div>
  `;

  wrapperSlide.append(wrapper);
  let dots = document.createElement("ol");
  dots.innerHTML = "⚪";
  dots.classList.add("dots");
  dotsWrapper.append(dots);
});

let slidePosition = 0;
const slides = document.querySelectorAll(".slide");
slides[0].classList.add("slide--visible");
const totalSlides = slides.length;

//main functions for arrows + updating slidePosition
function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("slide--visible");
    slide.classList.add("slide--hidden");

    document.querySelectorAll(".dots").forEach((item) => {
      item.classList.remove("dot-chosen");
    });
  }

  slides[slidePosition].classList.add("slide--visible");
  dots[slidePosition].classList.add("dot-chosen");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

document.getElementById("next").addEventListener("click", function () {
  moveToNextSlide();
});
document.getElementById("prev").addEventListener("click", function () {
  moveToPrevSlide();
});

const dots = document.querySelectorAll(".dots");
dots[0].classList.add("dot-chosen");
// creating dots logic
dots.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    const target = event.target;

    if (index == 0) {
      slidePosition = 0;
      updateSlidePosition();
      target.classList.add("dot-chosen");
    }
    if (index == 1) {
      slidePosition = 1;
      updateSlidePosition();
      target.classList.add("dot-chosen");
    }
    if (index == 2) {
      slidePosition = 2;
      updateSlidePosition();
      target.classList.add("dot-chosen");
    }
    if (index == 3) {
      slidePosition = 3;
      updateSlidePosition();
      target.classList.add("dot-chosen");
    }
  });
});

let timer; // auto-slider

document.querySelector(".auto-slide").addEventListener("click", () => {
  timer = setInterval(() => {
    moveToNextSlide();
  }, 2000);
});
document.querySelector(".disable-auto-slide").addEventListener("click", () => {
  clearTimeout(timer);
});
