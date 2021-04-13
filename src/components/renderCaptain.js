export default function setCaptain(elemBoat, captainProf) {
  const captainObj = {
    name: "Ervin",
    class: "100",
    damageKnife: "45",
    age: 21,
    coins: "1 568 872",
    damageGun: 85,
  };

  const myBoat = document.querySelector(".buhta-boat__boat").cloneNode(true);
  myBoat.firstChild.classList.add("my-boat__img");
  myBoat.classList.add("buhta-boat__boat");

  const img = document.createElement("img");
  img.classList.add("my-boat__img");
  img.setAttribute(
    "src",
    "https://sun9-63.userapi.com/s/v1/if1/3Ssesju_gU95WcqBgakClAOWJw5GjmKEhagr4g63s74yJu0AjiJXF9iKVVHy6ZqNJwFuobuT.jpg?size=400x0&quality=96&crop=0,62,675,675&ava=1"
  );
  const cpaObjProps = Object.entries(captainObj);
  captainProf.appendChild(img);
  cpaObjProps.forEach((arr) => {
    let key = arr[0];
    let val = arr[1];

    const prop = document.createElement("p");
    prop.innerHTML = `${key}: ${val}`;
    captainProf.appendChild(prop);
  });

  elemBoat.appendChild(myBoat);
}
