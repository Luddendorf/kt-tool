function createModalCard(ship, event) {
  const img = event.target.children[0];
  const modalShipCard = document.createElement("div");
  modalShipCard.classList.add("modal__overlay-card");
  modalShipCard.insertAdjacentHTML(
    "afterbegin",
    `
    <h3 class="modal__overlay-card-title">Фрегат "${ship.shipName}"</h3>
    <div class="modal__overlay-card-wrapper">
      <img
          src=${img.src}
        />
        <div class="modal__overlay-card-list">
          <p>Класс: ${ship.class}</p>
          <p>Пушки: ${ship.weapons}</p>
          <p>Прочность корпуса: ${ship.shipHull}</p>
          <p>Команда: ${ship.team}</p>
          <p>Трюм: ${ship.hold}</p>
          <p>Скорость: ${ship.speed}</p>
          <p>Манёвренность: ${ship.beidewind}</p>
          <p>Цена: ${ship.price}</p>
        </div>
    </div>
    <p class="modal__overlay-card-desq">${ship.desc}</p>
  `
  );
  return modalShipCard;
}

export default createModalCard;
