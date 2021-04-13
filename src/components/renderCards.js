import createCard from "./card";

export default function renderShips(obj, wrapEl) {
  const ships = obj;

  const shipsElems = ships.map((ship) => createCard(ship));
  shipsElems.forEach((ship) => wrapEl.appendChild(ship));
}
