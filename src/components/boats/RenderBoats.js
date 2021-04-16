import CollectBoats from "./CollectBoats";
import ships from "../state/shipsData";
import modalWindow from "../animation/modalWindow";

export default function RenderBoats() {
  const shipsSection = document.querySelector(".buhta-boat__wrapper");
  const minPrice = document.querySelector("#min_price");
  const maxPrice = document.querySelector("#max_price");
  const minStrenght = document.querySelector("#min_strenght");
  const maxStrenght = document.querySelector("#max_strenght");

  CollectBoats(ships, shipsSection);
  modalWindow();

  // getting filtered array of boats

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
    CollectBoats(filteredShips, wrapElem);
  };

  // setting blur event throw looping all filter inputs
  const validate = document.querySelector(".input_validate");
  const inputWrapper = document.querySelector(".filter");
  const filterInputs = document.querySelectorAll(".filter__input");
  Array.from(filterInputs).forEach((input) => {
    input.addEventListener("blur", (e) => {
      const targetVal = e.target.value;
      if (targetVal === "") {
        return;
      } else if (targetVal <= 0) {
        validate.style.display = "block";
        validate.innerHTML = `incorrect value! <br>
        must be number > 0`;
        inputWrapper.style.display = "none";
        setTimeout(function () {
          input.value = "";
          validate.style.display = "none";
          inputWrapper.style.display = "grid";
        }, 2500);
        return;
      }
      onBlurFilter(shipsSection);
      modalWindow();
    });
  });
}
