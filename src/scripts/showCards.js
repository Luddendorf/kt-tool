import createCard from "./createCard";

export default function showCards(ships) {
  const shipsBlock = document.querySelector(".ships");

  while (shipsBlock.firstChild) {
    shipsBlock.removeChild(shipsBlock.firstChild);
  }

  const shipsDOM = ships.map((ship) => createCard(ship));
  for (let ship of shipsDOM) {
    shipsBlock.append(ship);
  }
}
