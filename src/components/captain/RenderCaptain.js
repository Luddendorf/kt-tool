import ships from "../state/shipsData";
import captainImg from "../../assets/imgs/captain.jpg";
import CaptainForm from './CaptainForm'

export default function RenderCaptain() {
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
            <p class='boat_elem'> Frigate: ${ships[0].shipName} </p>
            <p class='boat_elem'> Strenght: ${ships[0].shipHull} </p>
            <p class='boat_elem'> Class: ${ships[0].class} </p>
            <p class='boat_elem'> Cannons: ${ships[0].weapons} </p>
            <p class='boat_elem'> Shell: ${ships[0].shipHull} </p>
            <p class='boat_elem'> Team: ${ships[0].team} </p>
            <p class='boat_elem'> Hold: ${ships[0].hold} </p>
            <p class='boat_elem'> Speed: ${ships[0].speed} </p>
            <p class='boat_elem'> Maneuverability: ${ships[0].beidewind} </p>
            <p class='boat_elem'> Price: ${ships[0].price} </p>
            `;

  const cpaObjProps = Object.entries(captainObj);
  captain.innerHTML = `<img src=${captainImg} width="190px"/>`;
  cpaObjProps.forEach((arr) => {
    let key = arr[0];
    let val = arr[1];

    const prop = document.createElement("p");
    prop.innerHTML = `${key}: ${val}`;
    captain.appendChild(prop);
  });

  CaptainForm()
}