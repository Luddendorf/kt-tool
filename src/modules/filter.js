import ships from "./shipsData";
import shipCard from "./shipCard";

export default () => {
  let tab1 = document.getElementById('home');
  const minPrice = document.getElementById("min-price");
  const maxPrice = document.getElementById("max-price");
  const inputsFilter = document.querySelectorAll('input[type="number"]');
  
  inputsFilter.forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value === "") {
        return shipCard(ships,tab1);; 
      }
      if (!input.value.match(/^[0-9]+$/g)) {
        input.classList.add('error')
      } else {
        input.classList.remove('error') ;
      }
    });
  });
 // сделал валидацию, фильтр не получается  
 return  shipCard(ships, tab1);
}   