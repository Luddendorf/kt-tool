

const filter = () => {
  const cardsWrapper = document.querySelector(".main__cards-wrapper");
  const lowPrice = document.getElementById("low-price");
  const maxPrice = document.getElementById("max-price");
  // фильтр по минимальной цене
  lowPrice.addEventListener("blur", () => {
    cardsWrapper.innerHTML = null;
    ships.filter((card) => {
      if (card.price > lowPrice.value) {
        return cardsWrapper.insertAdjacentHTML(
          "beforeend",
          `
      <div class="main__card">
        <a href="#close" title="Закрыть" class="close">X</a>
      <div class="main__card-img">
        <img src="${card.url}" alt="ship">
      </div>
        <ul class="main__list">
          <li class="main__list-item"><span>${card.className}</span>: ${card.shipName}</li>
          <li class="main__list-item"><span>Класс</span>: ${card.class}</li>
          <li class="main__list-item"><span>Пушки</span>: ${card.weapons}</li>
          <li class="main__list-item"><span>Корпус</span>: ${card.shipHull}</li>
          <li class="main__list-item"><span>Трюм</span>: ${card.hold}</li>
          <li class="main__list-item"><span>Скорость</span>: ${card.speed}</li>
          <li class="main__list-item"><span>Манёвренность</span>: ${card.maneuverability}</li>
          <li class="main__list-item"><span>Команда</span>: ${card.team}</li>
          <li class="main__list-item"><span>Цена</span>: ${card.price}</li>
          <li class="main__list-item"><span>Описание</span>: ${card.desc}</li>
        </ul>
      </div>`
        );
      }
    });
  });

  // фильтр по максимальной цене
  maxPrice.addEventListener("blur", () => {
    cardsWrapper.innerHTML = null;
    ships.filter((card) => {
      if (card.price < maxPrice.value) {
        return cardsWrapper.insertAdjacentHTML(
          "beforeend",
          `
      <div class="main__card">
        <a href="#close" title="Закрыть" class="close">X</a>
      <div class="main__card-img">
        <img src="${card.url}" alt="ship">
      </div>
        <ul class="main__list">
          <li class="main__list-item"><span>${card.className}</span>: ${card.shipName}</li>
          <li class="main__list-item"><span>Класс</span>: ${card.class}</li>
          <li class="main__list-item"><span>Пушки</span>: ${card.weapons}</li>
          <li class="main__list-item"><span>Корпус</span>: ${card.shipHull}</li>
          <li class="main__list-item"><span>Трюм</span>: ${card.hold}</li>
          <li class="main__list-item"><span>Скорость</span>: ${card.speed}</li>
          <li class="main__list-item"><span>Манёвренность</span>: ${card.maneuverability}</li>
          <li class="main__list-item"><span>Команда</span>: ${card.team}</li>
          <li class="main__list-item"><span>Цена</span>: ${card.price}</li>
          <li class="main__list-item"><span>Описание</span>: ${card.desc}</li>
        </ul>
      </div>`
        );
      }
    });
  });
};

export default filter;