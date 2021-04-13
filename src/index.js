import "./sass/main.scss";
import ships from "./components/ships";
import setCaptain from "./components/renderCaptain";
import filterShips from "./components/filterShips";
import menuTabsSwipe from "./components/tabs";
import sideBarMenu from "./components/dropDown";
import modalWindow from "./components/modalWindow";
import validator from "./components/validator";

const captain = document.querySelector(".captain__profile");
const captainBoat = document.querySelector(".captain__boat");

document.addEventListener("DOMContentLoaded", () => {
  filterShips();
  setCaptain(captainBoat, captain);
  menuTabsSwipe();
  sideBarMenu();
  modalWindow();
  validator()
});
