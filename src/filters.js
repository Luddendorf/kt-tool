"use strict";
const openList = document.querySelectorAll(".filter-choises ul");

function closeListChoise() {
  // function that closes every ul li
  openList.forEach((item) => {
    item.childNodes.forEach((item) => {
      item.hidden = true;
    });
  });
}
closeListChoise();

openList.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("anime-li");
    // function that opens an event.target childNodes and closes anothers ul li
    closeListChoise();
    const target = event.target;
    target.childNodes.forEach((item) => {
      item.hidden = false;
    });
  });
});
