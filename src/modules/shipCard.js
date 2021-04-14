export default (arr, el) => {
  arr.forEach((card) => {
      el.insertAdjacentHTML(
          "beforeend",
          `
<div class="main-card">
  <div class="main-card-img">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8kW9_5Lz9S5zfg3dpkfpjXJ38A-jMwOXig&usqp=CAU" alt="ship" class="img">
</div>
  <ul class="main-list">
    <li class="main-list-item"><span>${card.className}</span>: ${card.shipName}</li>
    <li class="main-list-item"><span>Класс</span>: ${card.class}</li>
    <li class="main-list-item"><span>Пушки</span>: ${card.weapons}</li>
    <li class="main-list-item"><span>Корпус</span>: ${card.shipHull}</li>
    <li class="main-list-item"><span>Трюм</span>: ${card.hold}</li>
    <li class="main-list-item"><span>Скорость</span>: ${card.speed}</li>
    <li class="main-list-item"><span>Манёвренность</span>: ${card.maneuverability}</li>
    <li class="main-list-item"><span>Команда</span>: ${card.team}</li>
    <li class="main-list-item"><span>Цена</span>: ${card.price}</li>
    </ul>
</div>`
      );
  });
};
