import ships from "./ships";

export default function setCaptain() {
  const captainObj = {
    name: "Ervin",
    class: "100",
    damageKnife: "45",
    age: 21,
    coins: "1 568 872",
    damageGun: 85,
  };

  const captain = document.querySelector(".captain__profile");
  const boat = document.querySelector(".captain__boat-boat");
  // const boatWrap = document.createElement("div");
  // boatWrap.setAttribute("class", "captain__boat");
  boat.innerHTML = `<img class='boat_elem'
            src="https://images.unsplash.com/photo-1487901155524-307f976ad775?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
            <p class='boat_elem'> Фрегат: ${ships[0].shipName} </p>
            <p class='boat_elem'> Сила: ${ships[0].shipHull} </p>
            <p class='boat_elem'> Класс: ${ships[0].class} </p>
            <p class='boat_elem'> Пушки: ${ships[0].weapons} </p>
            <p class='boat_elem'> Корпус: ${ships[0].shipHull} </p>
            <p class='boat_elem'> Команда: ${ships[0].team} </p>
            <p class='boat_elem'> Трюм: ${ships[0].hold} </p>
            <p class='boat_elem'> Скорость: ${ships[0].speed} </p>
            <p class='boat_elem'> Манёвренность: ${ships[0].beidewind} </p>
            <p class='boat_elem'> Цена: ${ships[0].price} </p>
            `;

  const cpaObjProps = Object.entries(captainObj);
  captain.innerHTML = `<img src="https://media-exp1.licdn.com/dms/image/C4D35AQGDg9j5q4u1pg/profile-framedphoto-shrink_200_200/0/1595661276984?e=1618423200&v=beta&t=iQVV9dHRRKgDOf03_fAgmzHrnfo3qyM7AP0zF2dwnqk" width="190px"/>`;
  cpaObjProps.forEach((arr) => {
    let key = arr[0];
    let val = arr[1];

    const prop = document.createElement("p");
    prop.innerHTML = `${key}: ${val}`;
    captain.appendChild(prop);
  });

  // boat.appendChild(boatWrap);
}
