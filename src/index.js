import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";
import nav from "./scripts/nav";
import menu from "./scripts/submenu";
import ships from "./src/shipsData";
import createCard from "./scripts/createCard";
// import modal from "./scripts/showModalCard";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
  console.log(response);
}

print();

document.addEventListener("DOMContentLoaded", () => {
  const shipsDOM = ships.map((ship) => createCard(ship));
  const shipsBlock = document.querySelector(".ships");
  for (let ship of shipsDOM) {
    shipsBlock.append(ship);
  }
});
