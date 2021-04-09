import { detailedInformation } from './detailedInformation';
import { ships } from './ships';

const createShip = ({shipName,className,team,price,shipHull}) => {
  const newShip = document.createElement('div');
  newShip.className = 'card'
  newShip.innerHTML = `
      <img src="http://pngimg.com/uploads/ship/ship_PNG5416.png" alt="${shipName}">
      <div class="card__shipName">Name: ${shipName}</div>
      <div class="card__className">Class name: ${className}</div>
      <div class="card__team">shipHull: ${shipHull}</div>
      <div class="card__team">Team: ${team}</div>
      <div class="card__price">Price: ${price} $</div>
  `;
  return newShip;
}

export const allShips = (newArr = ships) => {
  const pageAllShips = document.  querySelector('.all__ships');
  pageAllShips.innerHTML = ''
  newArr.forEach(ship => {
    pageAllShips.append(createShip(ship));
  })
  detailedInformation();
}

