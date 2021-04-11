"use strict";
import ship from "../img/ship.jpg";
import capt from "../img/papay.jpg";

const myProfile = {
  capitansName: "Capitan Neo",
  capitansClass: "99",
  capitansSwordDamage: "99",
  capitansAge: "69",
  capitansMoney: "999 999 999",
  capitansGunDamage: "99",
  shipName: "Sea Tiger",
  className: "schooner",
  class: 5,
  shipHull: 1400,
  speed: 12.5,
  maneuverability: 32,
  beidewind: 7.5,
  hold: 1400,
  team: 105,
  weapons: 20,
  price: 32500,
  desc:
    "Хорошие ходовые качества этого корабля, вкупе с вместительным трюмом, сделали шхуну одним из самых привлекательных кораблей в качестве торгового судна у торговцев средней руки, которые не могут позволить себе приобрести флейт.",
};

const myShipPage = document.querySelector(".my-ship");
const card = document.querySelector("#card");
const capitan = document.querySelector("#capitan");
card.classList.add("card");
capitan.classList.add("card");
card.innerHTML = `
                        <img src =${capt}  alt =${"IMG"} class ="ship-img" >
                        <div>Name: ${myProfile.shipName}</div>
                        <div>Class: ${myProfile.className}</div>
                        <div>Rang: ${myProfile.class}</div>
                        <div>Ship Hull: ${myProfile.shipHull}</div>
                        <div>Speed: ${myProfile.speed}</div>
                        <div>Maneuverability: ${myProfile.maneuverability}</div>

                      `;
capitan.innerHTML = `
                        <img src =${ship}  alt =${"IMG"} class ="ship-img" >
                        <div>Name: ${myProfile.capitansName}</div>
                        <div>Class: ${myProfile.capitansClass}</div>
                        <div>Age: ${myProfile.capitansAge}</div>
                        <div>Sword damage: ${
                          myProfile.capitansSwordDamage
                        }</div>
                        <div>Gun damage: ${myProfile.capitansGunDamage}</div>
                        <div>Speed: ${myProfile.capitansMoney}</div>

`;

const form = document.forms.sendForm;
const formName = form.elements.name;
const formQuantity = form.elements.quantity;
const formClass = form.elements.class;
const formPrice = form.elements.price;

const sendBtn = document.querySelector("#button-form");
sendBtn.addEventListener("click", () => {
  let obj = {
    name: formName.value,
    quantity: formQuantity.value,
    class: formClass.value,
    price: formPrice.value,
  };
  console.log(obj);
});
