import { ships } from './data';
import renderData from './renderData';

const filter = () => {
  const cardsID = document.getElementById('main__cards-id');
  const lowPrice = document.getElementById("low-price");
  const maxPrice = document.getElementById("max-price");

  renderData(ships, cardsID);

  // функция фильтрации
  const handlerFilter = ()=>{
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

    
  }


  // фильтр по минимальной цене
  lowPrice.addEventListener("blur", () => {
    if(lowPrice.value.trim() !== ''){
      let result = filterPrice(ships, lowPrice, 'min');
      cardsID.innerHTML = '';
      renderData(result, cardsID);
  
      maxPrice.addEventListener("blur", () => {
        filterPrice(result, maxPrice, 'max');
        cardsID.innerHTML = '';
        renderData(filterPrice(result, maxPrice, 'max'), cardsID)
      });
    }
  });

  // фильтр по максимальной цене
  maxPrice.addEventListener("blur", () => {
    if(lowPrice.value.trim() !== ''){
      let result = filterPrice(ships, maxPrice, 'max');
      cardsID.innerHTML = '';
      renderData(result, cardsID);

      lowPrice.addEventListener("blur", () => {
        filterPrice(result, lowPrice, 'min');
        cardsID.innerHTML = '';
        renderData(filterPrice(result, lowPrice, 'min'), cardsID)
      });
    }
  });

  lowPrice.addEventListener("blur", handlerFilter);
  maxPrice.addEventListener("blur", handlerFilter);
};

export default filter;