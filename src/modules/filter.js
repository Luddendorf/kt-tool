import { ships } from './data';
import renderData from './renderData';

const filter = () => {
  const cardsWrapper = document.querySelector(".main__cards-wrapper");
  const lowPrice = document.getElementById("low-price");
  const maxPrice = document.getElementById("max-price");

  renderData(ships, cardsWrapper);

  const filterShips = (arr, el, operation)=>{
    return arr.filter((item)=>{
      if(operation === 'min'){
        if(item.price > el.value){
          return item;
        }
      } else if(operation === 'max'){
        if(item.price < el.value){
          return item;
        } else if(el.value == ''){
          return item;
        }
      }
    })
  }

  lowPrice.addEventListener("blur", () => {
    let result = filterShips(ships, lowPrice, 'min');
    cardsWrapper.innerHTML = '';
    renderData(result, cardsWrapper);

    maxPrice.addEventListener("blur", () => {
      filterShips(result, maxPrice, 'max');
      cardsWrapper.innerHTML = '';
      renderData(filterShips(result, maxPrice, 'max'), cardsWrapper)
    });
  });


  maxPrice.addEventListener("blur", () => {
    let result = filterShips(ships, maxPrice, 'max');
    cardsWrapper.innerHTML = '';
    renderData(result, cardsWrapper);

    lowPrice.addEventListener("blur", () => {
      filterShips(result, lowPrice, 'min');
      cardsWrapper.innerHTML = '';
      renderData(filterShips(result, lowPrice, 'min'), cardsWrapper)
    });
  });
};

export default filter;