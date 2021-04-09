import { ships } from "./ships";

export const detailedInformation = () => {
  const cards = document.querySelectorAll('.card');
  const cardModalContainer = document.querySelector('.card__modal');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const ship = ships.find( ship => card.firstElementChild.alt === ship.shipName);
      if(ship){
        cardModalContainer.innerHTML = '';
        cardModalContainer.classList.remove('none');
        cardModalContainer.append(cardModal(ship));
        modalEvent();
      };
    })
  })
}

const cardModal = ({shipName,className,shipHull,speed,maneuverability,beidewind,hold,weapons,price,desc}) => {
  const modal = document.createElement('div');
  modal.className = 'card__modal--modal';
  modal.innerHTML = `
    <span class="card__modal--close">
      <i class="fas fa-times"></i>
    </span>
    <img src="http://pngimg.com/uploads/ship/ship_PNG5416.png" alt="${shipName}">
    <div class="border">Name: ${shipName}</div>
    <div>Class name: ${className}</div>
    <div>ShipHull: ${shipHull}</div>
    <div>Speed: ${speed}</div>
    <div>Maneuverability: ${maneuverability}</div>
    <div>Beidewind: ${beidewind}</div>
    <div>Hold: ${hold}</div>
    <div>Weapons: ${weapons}</div>
    <div>Price: ${price} $</div>
    <div>Description: ${desc}</div>
  `;
  return modal;
}


const modalEvent = () => {
  const modalClose = document.querySelector('.card__modal--close');
  const modal = document.querySelector('.card__modal');

  modalClose.addEventListener('click', () => {
    modal.classList.add('none');
  })

  window.addEventListener('click', (e) => {
    if(e.target.className === 'card__modal'){
      modal.classList.add('none');
    }
  })
}
