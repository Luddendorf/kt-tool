import { ships } from './data';
import renderData from './renderData';

const filter = () => {

  renderData(ships, document.querySelector(".main__cards-wrapper"));

  // функция фильтрации
  const minPrice = document.getElementById('min-price');
  const maxPrice = document.getElementById('max-price');
  const minDur = document.getElementById('min-dur');
  const maxDur = document.getElementById('max-dur');

    const filterHandler = (arr)=>{
  
    document.querySelector('.main__cards-wrapper').innerHTML = '';
  
    const filteredShips = arr.filter(ship => {
  
      if(ship.price < minPrice.value && minPrice.value !== ""){
        return false
      }
      if(ship.price > maxPrice.value && maxPrice.value !== ""){
        return false
      }
      if(ship.shipHull < minDur.value && minDur.value !== ""){
        return false
      }
      if(ship.shipHull > maxDur.value && maxDur.value !== ""){
        return false
      }
  
      return true
    
    });
  
    renderData(filteredShips, document.querySelector('.main__cards-wrapper'));
  }
  
  
  minPrice.addEventListener('change', filterHandler.bind(null, ships));
  maxPrice.addEventListener('change', filterHandler.bind(null, ships));
  minDur.addEventListener('change', filterHandler.bind(null, ships));
  maxDur.addEventListener('change', filterHandler.bind(null, ships));
};

export default filter;