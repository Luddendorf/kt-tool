import { ships } from './data';
import renderData from './renderData';

const filter = () => {
  const cardsWrapper = document.querySelector(".main__cards-wrapper");
  const lowPrice = document.getElementById("low-price");
  const maxPrice = document.getElementById("max-price");
  const lowDur = document.getElementById("low-dur");
  const maxDur = document.getElementById("max-dur");

  renderData(ships, cardsWrapper);

  // функция фильтрации
  const filterHandler = ()=>{
    
  }
  const filterPrice = (arr, el, operation)=>{
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
      let result = filterPrice(ships, lowPrice, 'min');
      cardsWrapper.innerHTML = '';
      renderData(result, cardsWrapper);
  
      maxPrice.addEventListener("blur", () => {
        filterPrice(result, maxPrice, 'max');
        cardsWrapper.innerHTML = '';
        renderData(filterPrice(result, maxPrice, 'max'), cardsWrapper)
      });
    }
  });

  // фильтр по максимальной цене
  maxPrice.addEventListener("blur", () => {
    if(lowPrice.value.trim() !== ''){
      let result = filterPrice(ships, maxPrice, 'max');
      cardsWrapper.innerHTML = '';
      renderData(result, cardsWrapper);

      lowPrice.addEventListener("blur", () => {
        filterPrice(result, lowPrice, 'min');
        cardsWrapper.innerHTML = '';
        renderData(filterPrice(result, lowPrice, 'min'), cardsWrapper)
      });
    }
  });

  lowPrice.addEventListener("blur", filterHandler);
  maxPrice.addEventListener("blur", filterHandler);
  lowDur.addEventListener("blur", filterHandler);
  maxDur.addEventListener("blur", filterHandler);
};

export default filter;