export const eventSliderBtns = function (sliderImgs,eventSlider) {
  const eventSliderBtn = document.getElementById("slider__sliderBtns");
  eventSliderBtn.onchange = function (e) {
    
    for (let i = 0; i < sliderImgs.length; i++) {
      if (e.target.dataset.id === sliderImgs[i].dataset.id) {
        sliderImgs[i].style.display = "flex";
      } else {
        sliderImgs[i].style.display = "none";
      }
    }
  };
};
export const eventSliderSideBtns = function (sliderImgs) {
  const sliderItems = document.getElementById("slider__items");
  const sliderRadioBtns = document.getElementsByClassName("slider__radioBtn");

  sliderItems.onclick = function (e) {
    if (e.target.dataset.id === "left") {
        for (let i = 0; i < sliderRadioBtns.length; i++) {
          if (sliderRadioBtns[i].checked === true) {
            if (i - 1 < 0) {
              sliderRadioBtns[sliderRadioBtns.length-1].checked = true;
              for (let j = 0; j < sliderImgs.length; j++) {
                if (sliderRadioBtns[sliderRadioBtns.length-1].dataset.id === sliderImgs[j].dataset.id) {
                  sliderImgs[j].style.display = "flex";
                } else sliderImgs[j].style.display = "none";
              }
              return;
            } else {
              sliderRadioBtns[i - 1].checked = true;
              for (let j = 0; j < sliderImgs.length; j++) {
                if (sliderRadioBtns[i - 1].dataset.id === sliderImgs[j].dataset.id) {
                  sliderImgs[j].style.display = "flex";
                } else sliderImgs[j].style.display = "none";
              }
              return;
            }
          } 
        }
      }
    if (e.target.dataset.id === "right") {
      
      for (let i = 0; i < sliderRadioBtns.length; i++) {
        if (sliderRadioBtns[i].checked === true) {
          if (i + 1 >= sliderRadioBtns.length) {
            sliderRadioBtns[0].checked = true;
            for (let j = 0; j < sliderImgs.length; j++) {
              if (sliderRadioBtns[0].dataset.id === sliderImgs[j].dataset.id) {
                sliderImgs[j].style.display = "flex";
              } else sliderImgs[j].style.display = "none";
            }
            return;
          } else {
            sliderRadioBtns[i + 1].checked = true;
            for (let j = 0; j < sliderImgs.length; j++) {
              if (sliderRadioBtns[i + 1].dataset.id === sliderImgs[j].dataset.id) {
                sliderImgs[j].style.display = "flex";
              } else sliderImgs[j].style.display = "none";
            }
            return;
          }
        } 
      }
    }
  };
};
