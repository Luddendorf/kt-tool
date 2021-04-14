import "./sass/main.scss";
import RenderCaptain from "./components/captain/RenderCaptain";
import RenderBoats from "./components/boats/RenderBoats";
import menuTabsSwipe from "./components/header/tabs";
import sideBarMenu from "./components/leftMenu/dropDown";
import validator from "./assets/validate/validator";
import getWeatherData from "./components/captain/getWeatherData";
import Preloader from "./assets/preloader/Preloader";

document.addEventListener("DOMContentLoaded", () => {
  //imitation of preloader, waiting while quries will be ready
  Preloader();
  setTimeout(function () {
    RenderBoats();
    RenderCaptain();
    menuTabsSwipe();
    sideBarMenu();
    validator();
    getWeatherData();
  }, 1500);
});
