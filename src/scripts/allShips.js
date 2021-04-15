import { detailedInformation } from './detailedInformation';
import { ships } from './ships';

export const createShip = ({shipName,className,team,price,shipHull}, card , index) => {
  const newShip = document.createElement('div');
  newShip.className = card;
  newShip.dataset.id = index;
  newShip.innerHTML = `
      <img src="http://pngimg.com/uploads/ship/ship_PNG5403.png" alt="${shipName}">
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
  newArr.forEach((ship, index) => {
    pageAllShips.append(createShip(ship, 'card', index));
  })
  detailedInformation();
}

