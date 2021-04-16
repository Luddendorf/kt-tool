const topBar = document.querySelectorAll(".top__topbar-item");
const lonelyBayTab = document.querySelector("#list");
const myShipTab = document.querySelector("#mine");
const lonelyBayPage = document.querySelector(".list");
const myShipPage = document.querySelector(".mine");
const playBlock = document.querySelector(".manage_play");

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
          playBlock.style.display = "block";
        } else {
          myShipPage.style.display = "flex";
          lonelyBayPage.style.display = "none";
          lonelyBayTab.parentElement.classList.remove("chosen");
          myShipTab.parentElement.classList.add("chosen");
          playBlock.style.display = "none";
        }
      });
    });
  });
}

clickOnTab();