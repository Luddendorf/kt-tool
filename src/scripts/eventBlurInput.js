export const blurInput = function (asideFilters,min_price,max_price,min_strength,max_strength,shipsInfo,ships) {
  for (let i = 0; i < asideFilters.length; i++) {
    asideFilters[i].onblur = function (e) {
      if (!e.target.value) return;

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
};
