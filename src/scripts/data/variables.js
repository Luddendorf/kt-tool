export const ships = document.getElementById("ships");
export const buhtaBtn = document.getElementById("buhta");
export const myShipBtn = document.getElementById("my-ship");
export const myShip = document.getElementById("captain");
export const captain = document.getElementById("captain__ship__info");
export const shipCards = document.getElementsByClassName("ships__card");
export const filterBtn = document.getElementById("aside__filter__event");
export const min_price = document.getElementById("min_price");
export const max_price = document.getElementById("max_price");
export const min_strength = document.getElementById("min_strength");
export const max_strength = document.getElementById("max_strength");
export const asideFilters = document.getElementsByClassName(
  "aside__filter__event"
);
export const arrShips = function (collection) {
  const arr = Array.from(collection);
  return arr[arr.length - 1];
};
export const form = document.getElementById("form");
export const url =
  "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=v1LAl9TFunhRS6Xr0wUkbYuATS7Ok1xV";
export const footerDivInfo = document.getElementById("footer__div__info");
export const slider = document.getElementById("slider");
export const sliderImgs = document.getElementsByClassName("slider__img");
export const sliderRadioBtn = document.getElementsByClassName(
  "slider__radioBtn"
);
