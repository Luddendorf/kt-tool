import { allShips } from "./allShips";
import { ships } from "./ships";

export const filterShips = () => {

  let minPrice = document.querySelector('#min__price');
  let maxPrice = document.querySelector('#max__price');
  let minStrength = document.querySelector('#min__strength');
  let maxStrength = document.querySelector('#max__strength');

  const validateFilters = () => {
    let newArr = ships;
    const validateMinPrice = /^\d+$/g.test(minPrice.value);
    const validateMaxPrice = /^\d+$/g.test(maxPrice.value);
    const validateMinStrength = /^\d+$/g.test(minStrength.value);
    const validateMaxStrength = /^\d+$/g.test(maxStrength.value);

    if(validateMinPrice)
      newArr = newArr.filter(ship => minPrice.value < ship.price);
    if(validateMaxPrice)
      newArr = newArr.filter(ship => maxPrice.value > ship.price);
    if(validateMinStrength)
      newArr = newArr.filter(ship => minStrength.value < ship.shipHull)
    if(validateMaxStrength)
      newArr = newArr.filter(ship => maxStrength.value > ship.shipHull)

    return newArr;
  };

  minPrice.addEventListener('blur', () => {
    const validate = validateFilters();
    allShips(validate);
  });

  maxPrice.addEventListener('blur', () => {
    const validate = validateFilters();
    allShips(validate);
  });

  minStrength.addEventListener('blur', () => {
    const validate = validateFilters();
    allShips(validate);
  });

  maxStrength.addEventListener('blur', () => {
    const validate = validateFilters();
    allShips(validate);
  });

}
