"use strict";
const topBar = document.querySelectorAll(".top-bar nav");
const lonelyBayTab = document.querySelector("#lonely-bay");
const myShipTab = document.querySelector("#my-ship");
const lonelyBayPage = document.querySelector(".lonely-bay");
const myShipPage = document.querySelector(".my-ship");

function clickOnTab() {
  myShipPage.hidden = true;
  topBar.forEach((item) => {
    item.childNodes.forEach((item) => {
      item.addEventListener("click", (event) => {
        const target = event.target;
        if (target == lonelyBayTab) {
          lonelyBayPage.style.display = "flex";
          myShipPage.style.display = "none";
          lonelyBayTab.parentElement.classList.add("chosen");
          myShipTab.parentElement.classList.remove("chosen");
        } else {
          myShipPage.style.display = "flex";
          lonelyBayPage.style.display = "none";
          lonelyBayTab.parentElement.classList.remove("chosen");
          myShipTab.parentElement.classList.add("chosen");
        }
      });
    });
  });
}

clickOnTab();
