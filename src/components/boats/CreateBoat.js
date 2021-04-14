export default function CreateBoat(obj) {
  let boat = document.createElement("div");
  boat.classList.add("buhta-boat__boat");
  boat.innerHTML = `<img class='boat_elem'
            src="https://images.unsplash.com/photo-1487901155524-307f976ad775?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80">
            <p class='boat_elem'> Frigate: ${obj.shipName} </p>
            <p class='boat_elem'> Strenght: ${obj.shipHull} </p>
            <p class='boat_elem'> Class: ${obj.class} </p>
            <p class='boat_elem'> Cannons: ${obj.weapons} </p>
            <p class='boat_elem'> Shell: ${obj.shipHull} </p>
            <p class='boat_elem'> Team: ${obj.team} </p>
            <p class='boat_elem'> Hold: ${obj.hold} </p>
            <p class='boat_elem'> Speed: ${obj.speed} </p>
            <p class='boat_elem'> Maneuverability: ${obj.beidewind} </p>
            <p class='boat_elem'> Price: ${obj.price} </p>
            <p class='boat_elem desc'> Description:<br> ${obj.desc} </p>
            `;

  return boat;
}
