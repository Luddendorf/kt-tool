export const generateShips = function (shipsInfo,ships){
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
}
