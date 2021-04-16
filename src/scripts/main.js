import { shipsInfo } from "./dataShips.js";
import { dataSlider } from "./dataSlider";
import { generateSlider } from "./generateSlider";
import { eventSlider } from "./eventSlider";
import { eventSliderBtns, eventSliderSideBtns } from "./eventSliderBtns";

import { generateShips } from "./generateShip.js";
import { switchToBuhta, switchToCaptain } from "./eventSwitchTab.js";
import { dropDownBtn } from "./eventDropDownBtn";
import { blurInput } from "./eventBlurInput";
import { popupOnImg } from "./eventPopupOnImg";
import { formSubmit } from "./eventFormSubmit";
import {
  ships,
  buhtaBtn,
  myShipBtn,
  myShip,
  captain,
  shipCards,
  filterBtn,
  min_price,
  max_price,
  min_strength,
  max_strength,
  asideFilters,
  arrShips,
  url,
  form,
  footerDivInfo,
  slider,
  sliderImgs,
  sliderRadioBtn,
} from "./variables";
import { setCaptainInfo } from "./setCaptainInfo";
import { requestToWeatherApi } from "./fetchWeather";
import { captainData } from "./dataCaptain";
import { footerInfo } from "./footerInfo";
async function print() {
  // Here we are using dynamic import
  const { greet } = await import("../greet");
  const response = await greet("John Doe");
  console.log(response);
}
print();

export const loadScript = function () {
  generateSlider(dataSlider, slider);
  eventSlider(sliderImgs, sliderRadioBtn);
  eventSliderBtns(sliderImgs);
  eventSliderSideBtns(sliderImgs);
  generateShips(shipsInfo, ships);
  switchToBuhta(myShipBtn, buhtaBtn, myShip, ships, slider);
  switchToCaptain(myShipBtn, buhtaBtn, myShip, ships, slider);
  dropDownBtn(filterBtn);
  blurInput(
    asideFilters,
    min_price,
    max_price,
    min_strength,
    max_strength,
    shipsInfo,
    ships
  );
  popupOnImg(ships);
  formSubmit(form);

  captain.prepend(arrShips(shipCards));
  setCaptainInfo(captainData);
  requestToWeatherApi(url);
  footerInfo(captainData, footerDivInfo, shipsInfo);
};
