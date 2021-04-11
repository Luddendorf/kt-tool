import showCards from "./showCards";

export default function filterCards(ships) {
  const priceMin = document.querySelector("#min-price").value,
    priceMax = document.querySelector("#max-price").value,
    hullMin = document.querySelector("#min-hull").value,
    hullMax = document.querySelector("#max-hull").value;

  showCards(
    ships.filter(
      (ship) =>
        (!priceMin || priceMin <= ship.price) &&
        (!priceMax || priceMax >= ship.price) &&
        (!hullMin || hullMin <= ship.shipHull) &&
        (!hullMax || hullMax >= ship.shipHull)
    )
  );
}
