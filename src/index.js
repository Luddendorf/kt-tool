import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";
import img from "../src/src/img/unnamed.png";
import nav from "./scripts/nav";
import menu from "./scripts/submenu";
import burgerMenu from "./scripts/burger";
import ships from "./src/shipsData";
import showCards from "./scripts/showCards";
import filterCards from "./scripts/filterCards";
import form from "./scripts/validateForm";
import getWeather from "./scripts/getWeather";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
  console.log(response);
}

print();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".footer__img").src = img;
  const inputs = document.querySelectorAll("input");
  const resetBtn = document.querySelector(".filters__reset");

  for (let input of inputs) {
    input.addEventListener("blur", function () {
      filterCards(ships);
    });
  }

  resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".filters").reset();
    showCards(ships);
  });

  showCards(ships);
  getWeather();
});
