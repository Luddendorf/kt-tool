export const popupOnImg = function(ships){
    ships.onclick = function (e) {
    if (e.target.classList.contains("ships__card")) {
      e.target.classList.toggle("position-center");
    } else if (e.target.parentNode.classList.contains("ships__card")) {
      e.target.parentNode.classList.toggle("position-center");
    } else return;
  };
}
