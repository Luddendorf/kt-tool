"use strict";
const topBar = document.querySelectorAll(".top-bar nav");
const lonelyBayTab = document.querySelector("#lonely-bay");
const myShipTab = document.querySelector("#my-ship");
const shipGaletyTab = document.querySelector("#ship-galery");
const lonelyBayPage = document.querySelector(".lonely-bay");
const myShipPage = document.querySelector(".my-ship");
const shipGaleryPage = document.querySelector(".ship-galery");

function clickOnTab() {
  myShipPage.hidden = true;
  topBar.forEach((item) => {
    item.childNodes.forEach((item) => {
      item.addEventListener("click", (event) => {
        const target = event.target;
        if (target == lonelyBayTab) {
          lonelyBayPage.style.display = "flex";
          myShipPage.style.display = "none";
          shipGaleryPage.style.display = "none";
          lonelyBayTab.parentElement.classList.add("chosen");
          myShipTab.parentElement.classList.remove("chosen");
          shipGaletyTab.parentElement.classList.remove("chosen");
        } else if (target == myShipTab) {
          myShipPage.style.display = "flex";
          lonelyBayPage.style.display = "none";
          shipGaleryPage.style.display = "none";
          myShipTab.parentElement.classList.add("chosen");
          lonelyBayTab.parentElement.classList.remove("chosen");
          shipGaletyTab.parentElement.classList.remove("chosen");
        } else if (target == shipGaletyTab) {
          shipGaleryPage.style.display = "flex";
          myShipPage.style.display = "none";
          lonelyBayPage.style.display = "none";
          shipGaletyTab.parentElement.classList.add("chosen");
          lonelyBayTab.parentElement.classList.remove("chosen");
          myShipTab.parentElement.classList.remove("chosen");
        }
      });
    });
  });
}

clickOnTab();
