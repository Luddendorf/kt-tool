import showModalCard from "./showModalCard";
import createModalCard from "./createModalCard";
import getRandomPicture from "./getRandomPicture";
import picturesData from "../src/picturesData";

const createCard = (ship) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <img
          class="card__img"
          src=${getRandomPicture(picturesData)}
        />
        <div class="card__wrapper">
          <h3>Фрегат "${ship.shipName}"</h3>
          <p>Класс: ${ship.class}</p>
          <p>Пушки: ${ship.weapons}</p>
          <p>Прочность корпуса: ${ship.shipHull}</p>
          <p>Команда: ${ship.team}</p>
          <p>Трюм: ${ship.hold}</p>
          <p>Скорость: ${ship.speed}</p>
          <p>Манёвренность: ${ship.beidewind}</p>
          <p style="color: red">Цена: ${ship.price}</p>
        </div>
        `;

  card.addEventListener("click", function (event) {
    showModalCard(createModalCard(ship, event));
  });

  return card;
};

export default createCard;
