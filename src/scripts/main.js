import { shipsInfo } from "./data/dataShips";
import { dataSlider } from "./data/dataSlider";
import { captainData } from "./data/dataCaptain";
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
} from "./data/variables";
import { generateSlider } from "./components/generateSlider";
import { footerInfo } from "./components/setFooterInfo";
import { setCaptainInfo } from "./components/setCaptainInfo";
import { requestToWeatherApi } from "./components/generatefetchWeather";
import { generateShips } from "./components/generateShip";
import { eventSlider } from "./events/eventSlider";
import { eventSliderBtns, eventSliderSideBtns } from "./events/eventSliderBtns";
import { switchToBuhta, switchToCaptain } from "./events/eventSwitchTab.js";
import { dropDownBtn } from "./events/eventDropDownBtn";
import { blurInput } from "./events/eventBlurInput";
import { popupOnImg } from "./events/eventPopupOnImg";
import { formSubmit } from "./events/eventFormSubmit";

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
