export const eventSlider = function (sliderImgs,sliderRadioBtn) {
  const length = sliderImgs.length;
  sliderImgs[0].style.display = "flex";
  sliderRadioBtn[0].checked = true;
  let count = 1;

  const runInterval = function () {
    if (count >= length) count = 0;
    for (let i = 0; i < length; i++) {
      if (i === count) {
        sliderImgs[i].style.display = "flex";
      } else {
        sliderImgs[i].style.display = "none";
      }
    }
    sliderRadioBtn[count].checked = true;
    count++;
  };
  setTimeout(function run() {
    runInterval();
    setTimeout(run, 5000);
  }, 5000);
};
