import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";
import { shipsInfo } from "./scripts/ships.js";
async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
  console.log(response);
}
print();
const ships = document.getElementById("ships");

shipsInfo.forEach(function (ship, idx) {
  const divShip = document.createElement("div");
  divShip.innerHTML = `
        <p class="close">x</p>
        <div class="img-ship"></div>
        <p>${ship.className}: "${ship.shipName}"</p>
        <p>Класс: ${ship.class}</p>
        <p>Оружие: ${ship.weapons}</p>
        <p>Корпус: ${ship.shipHull}</p>
        <p>Команда: ${ship.team}</p>
        <p>Трюм: ${ship.hold}</p>
        <p>Скорость: ${ship.speed}</p>
        <p>Маневренность: ${ship.maneuverability}</p>
        <p>Цена: ${ship.price}</p>
        </div>`;
  divShip.classList.add("ships__card");
  ships.append(divShip);
});

const buhtaBtn = document.getElementById("buhta");
const myShipBtn = document.getElementById("my-ship");

const myShip = document.getElementById("captain");
buhtaBtn.onclick = function (e) {
  myShip.style.display = "none";
  myShipBtn.style.color = "white";
  ships.style.display = "flex";
  buhtaBtn.style.color = "grey";
};
myShipBtn.onclick = function (e) {
  ships.style.display = "none";
  buhtaBtn.style.color = "white";
  myShip.style.display = "flex";
  myShipBtn.style.color = "grey";
};

const captain = document.getElementById("captain__ship__info");
const shipCards = document.getElementsByClassName("ships__card");
const arrShips = Array.from(shipCards);
captain.prepend(arrShips[0]);

const filterBtn = document.getElementById("aside__filter__event");

filterBtn.onclick = function (e) {
  const childrenArr = Array.from(e.currentTarget.children);
  for (let i = 0; i < childrenArr.length; i++) {
    console.log("for", e.currentTarget.tagName);
    if (e.currentTarget.children[i].lastElementChild.tagName == "UL") {
      e.currentTarget.children[i].lastElementChild.removeAttribute("class");
      e.currentTarget.children[i].lastElementChild.classList.add("displayNone");
    }
  }
  console.log(
    e.target.nextElementSibling.nextElementSibling.nextElementSibling
  );
  if (
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.tagName ==
    "UL"
  ) {
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.removeAttribute(
      "class"
    );
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "display-flex"
    );
  }
};
const min_price = document.getElementById("min_price");
const max_price = document.getElementById("max_price");
const min_strength = document.getElementById("min_strength");
const max_strength = document.getElementById("max_strength");

const asideFilters = document.getElementsByClassName("aside__filter__event");
console.log("asideFilters = ", asideFilters.length);
for (let i = 0; i < asideFilters.length; i++) {
  asideFilters[i].onblur = function (e) {
    let minPrice;
    let maxPrice;
    let minStrength;
    let maxStrength;

    switch (e.target.id) {
      case "min_price":
        minPrice = e.target.value;
        maxPrice = max_price.value ? max_price.value : Infinity;
        minStrength = min_strength.value ? min_strength.value : 0;
        maxStrength = max_strength.value ? max_strength.value : Infinity;
        break;
      case "max_price":
        maxPrice = e.target.value;
        minPrice = min_price.value ? min_price.value : 0;
        minStrength = min_strength.value ? min_strength.value : 0;
        maxStrength = max_strength.value ? max_strength.value : Infinity;
        break;
      case "min_strength":
        minStrength = e.target.value;
        maxPrice = max_price.value ? max_price.value : Infinity;
        minPrice = min_price.value ? min_price.value : 0;
        maxStrength = max_strength.value ? max_strength.value : Infinity;
        break;
      case "max_strength":
        maxStrength = e.target.value;
        maxPrice = max_price.value ? max_price.value : Infinity;
        minStrength = min_strength.value ? min_strength.value : 0;
        minPrice = min_price.value ? min_price.value : 0;
        break;
    }

    const filterShips = shipsInfo.filter((ship, idx) => {
      return (
        maxStrength >= ship.shipHull &&
        minStrength <= ship.shipHull &&
        maxPrice >= ship.price &&
        minPrice <= ship.price
      );
    });
    console.log("filterShips = ", filterShips);
    ships.innerHTML = "";
    filterShips.forEach(function (ship, idx) {
      const divShip = document.createElement("div");
      divShip.innerHTML = `
      <p class="close">x</p>
        <div class="img-ship"></div>
        <p>${ship.className}: "${ship.shipName}"</p>
        <p>Класс: ${ship.class}</p>
        <p>Оружие: ${ship.weapons}</p>
        <p>Корпус: ${ship.shipHull}</p>
        <p>Команда: ${ship.team}</p>
        <p>Трюм: ${ship.hold}</p>
        <p>Скорость: ${ship.speed}</p>
        <p>Маневренность: ${ship.maneuverability}</p>
        <p>Цена: ${ship.price}</p>
        </div>
        `;
      divShip.classList.add("ships__card");
      ships.append(divShip);
    });
  };
}

ships.onclick = function (e) {
  if (e.target.classList.contains("ships__card")) {
    e.target.classList.toggle("position-center");
  } else if (e.target.parentNode.classList.contains("ships__card")) {
    e.target.parentNode.classList.toggle("position-center");
  } else return;
};
const form = document.getElementById("form");
form.onsubmit = function (e) {
  e.preventDefault();
  let result = {
    name: form.name.value,
    class: form.class.value,
    quantity: form.quantity.value,
    price: form.price.value,
  };
  alert(JSON.stringify(result));
  form.name.value = "";
  form.class.value = "";
  form.quantity.value = "";
  form.price.value = "";
};
