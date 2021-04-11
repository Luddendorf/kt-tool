import { ships } from './data';
import renderData from './renderData';

const filter = () => {
  const cardsWrapper = document.querySelector(".main__cards-wrapper");
  const lowPrice = document.getElementById("low-price");
  const maxPrice = document.getElementById("max-price");

  renderData(ships, cardsWrapper);

  // функция фильтрации
  const filterMinMAx = (arr, el, operation)=>{
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

  // фильтр по минимальной цене
  lowPrice.addEventListener("blur", () => {
    if(lowPrice.value.trim() !== ''){
      let result = filterMinMAx(ships, lowPrice, 'min');
      cardsWrapper.innerHTML = '';
      renderData(result, cardsWrapper);
  
      maxPrice.addEventListener("blur", () => {
        filterMinMAx(result, maxPrice, 'max');
        cardsWrapper.innerHTML = '';
        renderData(filterMinMAx(result, maxPrice, 'max'), cardsWrapper)
      });
    }
  });

  // фильтр по максимальной цене
  maxPrice.addEventListener("blur", () => {
    if(lowPrice.value.trim() !== ''){
      let result = filterMinMAx(ships, maxPrice, 'max');
      cardsWrapper.innerHTML = '';
      renderData(result, cardsWrapper);

      lowPrice.addEventListener("blur", () => {
        filterMinMAx(result, lowPrice, 'min');
        cardsWrapper.innerHTML = '';
        renderData(filterMinMAx(result, lowPrice, 'min'), cardsWrapper)
      });
    }
  });
};

export default filter;