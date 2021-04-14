"use strict";
const dropdownmenuIMG = document.querySelector(".dropdownmenu img");
const dropdownlist = document.querySelector(".dropdownlist");
const treasureHeader = document.querySelector(".dropdownlist h2");
const treasures = document.querySelector(".treasures");
const list = ["Gold", "Silver", "Seashell", "Agate", "Pearl", "Carnelian"];

list.forEach((item) => {
  let p = document.createElement("p");
  p.classList.add("list-of-treasure");
  p.innerHTML = `
        <p>${item}</p>
    `;
  treasures.append(p);
});

let listOfTreasure = document.querySelectorAll(".list-of-treasure");
listOfTreasure.forEach((item) => {
  item.addEventListener("click", (event) => {
    treasures.childNodes.forEach((item) => {
      item.style.color = "black";
    });
    item.style.color = "red";
  });
});

function show(target, className) {
  target.classList.toggle(className);
}

dropdownmenuIMG.addEventListener("click", () => {
  show(dropdownlist, "hide");
});
treasureHeader.addEventListener('click', ()=>{
    show(treasures, "hide")
})