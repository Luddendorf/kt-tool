const buhtaBtn = document.querySelector(".buhta__btn");
const boatsBtn = document.querySelector(".boats__btn");
const buhtaCards = document.querySelector(".cards__buhta");
const boatsCards = document.querySelector(".cards__boats");

export default function menuTabsSwipe() {
  function changeMainScreen(show, hide) {
    show.style.display = "flex";
    hide.style.display = "none";
  }

  buhtaBtn.addEventListener("click", () => {
    changeMainScreen(buhtaCards, boatsCards);
  });

  boatsBtn.addEventListener("click", () => {
    changeMainScreen(boatsCards, buhtaCards);
  });
}