import showModalCard from "./showModalCard";
import createModalCard from "./createModalCard";

const createCard = (ship) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <img
          class="card__img"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/BlackPearl.jpg"
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

  card.addEventListener("click", function () {
    showModalCard(createModalCard(ship));
  });

  return card;
};

export default createCard;
