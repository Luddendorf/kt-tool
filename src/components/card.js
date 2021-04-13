export default function createCard(obj) {
  let boat = document.createElement("div");
  boat.classList.add("buhta-boat__boat");
  boat.innerHTML = `<img class='boat_elem'
            src="https://images.unsplash.com/photo-1487901155524-307f976ad775?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80">
            <p class='boat_elem'> Фрегат: ${obj.shipName} </p>
            <p class='boat_elem'> Сила: ${obj.shipHull} </p>
            <p class='boat_elem'> Класс: ${obj.class} </p>
            <p class='boat_elem'> Пушки: ${obj.weapons} </p>
            <p class='boat_elem'> Корпус: ${obj.shipHull} </p>
            <p class='boat_elem'> Команда: ${obj.team} </p>
            <p class='boat_elem'> Трюм: ${obj.hold} </p>
            <p class='boat_elem'> Скорость: ${obj.speed} </p>
            <p class='boat_elem'> Манёвренность: ${obj.beidewind} </p>
            <p class='boat_elem'> Цена: ${obj.price} </p>
            <p class='boat_elem desc'> Описание: ${obj.desc} </p>
            `;

  return boat;
}
