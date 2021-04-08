'use strict';

import ships from './ships';

const accordion = () => {
    const leftMenu = document.querySelector('.left-menu');
    const leftMenuItems = document.querySelectorAll('.left-menu-item');

    const open = (button, dropDown) => {
        closeAllDrops();
        dropDown.style.height = `${dropDown.scrollHeight}px`;
        button.classList.add('active');
        dropDown.classList.add('active');
    };

    const close = (button, dropDown) => {
        button.classList.remove('active');
        dropDown.classList.remove('active');
        dropDown.style.height = '';
    };

    const closeAllDrops = (button, dropDown) => {
        leftMenuItems.forEach((elem) => {
            if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                close(elem.children[0], elem.children[1]);
            }
        })
    };

    leftMenu.addEventListener('click', (event) => {
        console.log(event.target);
        const target = event.target;
        if (target.classList.contains('left-menu-item-button')) {
            const parent = target.closest('.left-menu-item');
            const description = parent.querySelector('.left-menu-description');

            description.classList.contains('active') ?
                close(target, description) :
                    open(target, description);
        }
    })

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.left-menu')) {
            closeAllDrops();
        }
    })
};

    const renderCards = (cards) => {
            const cardsList = document.querySelector('.cards-list');
            const createCardItem = (card) => {
                const { shipName, 
                    className, 
                    classification, 
                    shipHull, 
                    speed, 
                    maneuverability, 
                    beidewind,
                    hold,
                    team,
                    weapons,
                    price,
                    desc } = card;
                const liItem = document.createElement('li');
        
                liItem.innerHTML = `
                    <article class="card-item">
                        <img
                            src="https://i.pinimg.com/originals/9a/5d/c8/9a5dc8195d864b6ce7d87b599b58e191.jpg"
                            alt="ship"
                            height="250px"
                            width="200px"
                            class="card-image"
                        />
                        <h1 class="card-name">${shipName}</h1>
                        <h1 class="card-classname">"${className}"</h1>
                        <span class="card-description">class: ${classification}</span>
                        <span class="card-description">ship hull: ${shipHull}</span>
                        <span class="card-description">speed: ${speed}</span>
                        <span class="card-description">maneuverability: ${maneuverability}</span>
                        <span class="card-description">beidewind: ${beidewind}</span>
                        <span class="card-description">hold: ${hold}</span>
                        <span class="card-description">team: ${team}</span>
                        <span class="card-description">weapons: ${weapons}</span>
                        <span class="card-description">price: ${price}</span>
                        <p class="card-text">${desc}</p>
                    </article>
                `;
                liItem.classList.add('ship-cards');
                return liItem;
            };

        cards.forEach(item => {
            cardsList.append(createCardItem(item));
        })
    }
    
/* 
const createCards = (cards) => {
    console.log(cards);
    cards.forEach(item => {
        
    })

}; */

accordion();
renderCards(ships);
