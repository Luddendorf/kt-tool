import "./sass/main.scss";
import RenderCaptain from "./components/captain/RenderCaptain";
import RenderBoats from "./components/boats/RenderBoats";
import menuTabsSwipe from "./components/header/tabs";
import sideBarMenu from "./components/leftMenu/dropDown";
import getWeatherData from "./components/captain/getWeatherData";
import Preloader from "./assets/preloader/Preloader";
import HamburgerMenu from "./components/leftMenu/hamburgerMenu";

document.addEventListener("DOMContentLoaded", () => {
  //imitation of preloader, waiting while quries will be ready
  Preloader();
  HamburgerMenu();
  setTimeout(function () {
    RenderBoats();
    RenderCaptain();
    menuTabsSwipe();
    sideBarMenu();
    getWeatherData();
  }, 1500);
});
