import Slider from "../animation/Slider";

const buhtaBtn = document.querySelector(".buhta__btn");
const boatsBtn = document.querySelector(".boats__btn");
const galleryBtn = document.querySelector(".gallery__btn");
const buhtaCards = document.querySelector(".cards__buhta");
const boatsCards = document.querySelector(".cards__boats");
const gallery = document.querySelector(".cards__gallery");
const tabs = document.querySelectorAll(".header__btn-block");

export default function menuTabsSwipe() {
  function changeMainScreen(show, hide, hide2) {
    show.style.display = "flex";
    hide.style.display = "none";
    hide2.style.display = "none";
  }

  // buhtaBtn.addEventListener("click", () => {
  //   changeMainScreen(buhtaCards, boatsCards, gallery);
  // });

  // boatsBtn.addEventListener("click", () => {
  //   changeMainScreen(boatsCards, buhtaCards, gallery);
  // });

  Array.from(tabs).forEach((tab) => {
    tab.addEventListener("click", function (e) {
      const curTargetClass = e.currentTarget.className;
      if (curTargetClass === "header__btn-block buhta__btn") {
        changeMainScreen(buhtaCards, boatsCards, gallery);
      }
      if (curTargetClass === "header__btn-block boats__btn") {
        changeMainScreen(boatsCards, buhtaCards, gallery);
      }
      if (curTargetClass === "header__btn-block gallery__btn") {
        changeMainScreen(gallery, boatsCards, buhtaCards);
        Slider();
      }
    });
  });
}
