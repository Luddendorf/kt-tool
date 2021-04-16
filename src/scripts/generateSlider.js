export const generateSlider = function (dataSlider, slider) {
    const leftCaret = document.createElement('div')
    leftCaret.innerHTML = `<div class='slider__caret' data-id='left'><</div>`
    const rightCaret = document.createElement('div')
    rightCaret.innerHTML = `<div class='slider__caret' data-id='right'>></div>`
    const divSliderItems = document.createElement('div')
    

  dataSlider.forEach(function (num, idx) {
    const divSlider = document.createElement("div");
    divSlider.innerHTML = `
        <div>
            <div ><img src=${num.imgSrc} class='slider__img' data-id='${idx}'></div>
        </div> 
            `;
    divSlider.classList.add("slider__item");
    divSliderItems.append(divSlider);
  });
  const sliderBtns = document.createElement('div')
  sliderBtns.id = 'slider__sliderBtns'
    dataSlider.forEach(function (num, idx) {
        const radioBtn = document.createElement('div')
        radioBtn.innerHTML = `<input type='radio' name="sliderBtn" class='slider__radioBtn' data-id='${idx}'>`
        sliderBtns.append(radioBtn)
    })
    divSliderItems.id ='slider__items'
    divSliderItems.prepend(leftCaret)
    divSliderItems.append(rightCaret)
    slider.append(divSliderItems)
    slider.append(sliderBtns)
};
