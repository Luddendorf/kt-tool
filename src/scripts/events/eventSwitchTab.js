export const switchToBuhta =function(myShipBtn,buhtaBtn,myShip,ships,slider){
    buhtaBtn.onclick = function (e) {
      slider.style.display='flex'
    myShip.style.display = "none";
    myShipBtn.style.color = "white";
    ships.style.display = "flex";
    buhtaBtn.style.color = "grey";
  };
} 
  export const switchToCaptain = function(myShipBtn,buhtaBtn,myShip,ships,slider){
      myShipBtn.onclick = function (e) {
        slider.style.display='none'
    ships.style.display = "none";
    buhtaBtn.style.color = "white";
    myShip.style.display = "flex";
    myShipBtn.style.color = "grey";
  };
  }