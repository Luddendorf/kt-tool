import renderShips from "./renderCards";
import ships from "./ships";

export default function filterShips() {
  const shipsSection = document.querySelector(".buhta-boat__wrapper");
  const minPrice = document.querySelector("#min_price");
  const maxPrice = document.querySelector("#max_price");
  const minStrenght = document.querySelector("#min_strenght");
  const maxStrenght = document.querySelector("#max_strenght");

  renderShips(ships, shipsSection);

  const onBlurFilter = (wrapElem) => {
    wrapElem.innerHTML = "";
    const filteredShips = ships.filter((ship) => {
      if (minPrice.value !== "" && ship.price < minPrice.value) {
        return false;
      }
      if (maxPrice.value !== "" && ship.price > maxPrice.value) {
        return false;
      }

      if (minStrenght.value !== "" && ship.shipHull < minStrenght.value) {
        return false;
      }

      if (maxStrenght.value !== "" && ship.shipHull > maxStrenght.value) {
        return false;
      }
      return true;
    });
    console.log(filteredShips);
    renderShips(filteredShips, wrapElem);
  };

  document
    .getElementById("min_price")
    .addEventListener("blur", () => onBlurFilter(shipsSection));

  document
    .getElementById("max_price")
    .addEventListener("blur", () => onBlurFilter(shipsSection));
  document
    .getElementById("min_strenght")
    .addEventListener("blur", () => onBlurFilter(shipsSection));
  document
    .getElementById("max_strenght")
    .addEventListener("blur", () => onBlurFilter(shipsSection));
}
