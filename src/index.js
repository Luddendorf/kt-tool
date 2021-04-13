import "./sass/main.scss";
import ships from "./components/ships";
import setCaptain from "./components/renderCaptain";
import filterShips from "./components/filterShips";
import menuTabsSwipe from "./components/tabs";
import sideBarMenu from "./components/dropDown";
import modalWindow from "./components/modalWindow";
import validator from "./components/validator";
import getData from "./components/API";

document.addEventListener("DOMContentLoaded", () => {
  filterShips();
  setCaptain();
  menuTabsSwipe();
  sideBarMenu();
  modalWindow();
  validator();
  getData();
});
