import CreateBoat from "./CreateBoat";

export default function CollectBoats(obj, wrapEl) {
  const ships = obj;

  const shipsElems = ships.map((ship) => CreateBoat(ship));
  shipsElems.forEach((ship) => wrapEl.appendChild(ship));
}
