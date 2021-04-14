'use strict';

import ships from './ships';

const accordion = () => {
    const leftMenu = document.querySelector('.left-menu');
    const leftMenuItems = document.querySelectorAll('.left-menu-item');

    const open = (button, dropDown) => {
        closeAllDrops();
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
        const target = event.target;
        if (target.classList.contains('left-menu-item-button')) {
            const parent = target.closest('.left-menu-item');
            const description = parent.querySelector('.left-menu-description');

            description.classList.contains('active') ?
                close(target, description) :
                    open(target, description);
        }
    });

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.left-menu')) {
            closeAllDrops();
        }
    });
};
const renderCards = (cards) => {
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
            price} = card;
        const liItem = document.createElement('li');

        liItem.innerHTML = `
                    <article class="card-item">
                        <img
                            src="https://i.pinimg.com/originals/9a/5d/c8/9a5dc8195d864b6ce7d87b599b58e191.jpg"
                            alt="ship"
                            height="200px"
                            width="150px"
                            class="card-image"
                        />
                        <h1 class="card-name">${shipName}</h1>
                        <h1 class="card-classname">"${className}"</h1>
                        <span class="card-description">class: ${classification}</span>
                        <span class="card-description ship-hull">ship hull: ${shipHull}</span>
                        <span class="card-description speed">speed: ${speed}</span>
                        <span class="card-description maneuverability">maneuverability: ${maneuverability}</span>
                        <span class="card-description beidewind">beidewind: ${beidewind}</span>
                        <span class="card-description hold">hold: ${hold}</span>
                        <span class="card-description team">team: ${team}</span>
                        <span class="card-description weapons">weapons: ${weapons}</span>
                        <span class="card-description price">price: ${price}</span>
                    </article>
                `;
        liItem.classList.add('ship-cards');
        return liItem;
    };

    var docFrag = document.createDocumentFragment();
    cards.forEach(item => {
        docFrag.appendChild(createCardItem(item));
    });

    const cardsList = document.querySelector('.cards-list');
    cardsList.appendChild(docFrag);
};

const onBlurFilter = () => {

    const maxPrice = document.querySelector('.max-price').value;
    const minPrice = document.querySelector('.min-price').value;
    const maxShipHull = document.querySelector('.max-ship-hull').value;
    const minShipHull = document.querySelector('.min-ship-hull').value;

    console.log(maxShipHull);
    console.log(minShipHull);

    const filteredShips = ships.filter(item => 
        (item.price < maxPrice && item.price > minPrice) &&
        (item.shipHull < maxShipHull && item.shipHull > minShipHull) 
    );

    const cardList = document.querySelector('.cards-list');
    cardList.innerHTML = '';
    renderCards(filteredShips);
};

const modal = () => {
    const cardsList = document.querySelector('.cards-list');
    const modal = document.querySelector('.modal');
    const modalCardName = modal.querySelector('.modal-card-name');
    const cardClassname = modal.querySelector('.modal-card-classname');
    const classification = modal.querySelector('.classification');
    const shipHull = modal.querySelector('.ship-hull');
    const speed = modal.querySelector('.speed');
    const maneuverability = modal.querySelector('.maneuverability');
    const beidewind = modal.querySelector('.beidewind');
    const hold = modal.querySelector('.hold');
    const team = modal.querySelector('.team');
    const weapons = modal.querySelector('.weapons');
    const price = modal.querySelector('.price');
    const cardText = modal.querySelector('.modal-card-text');
    
    const openModal = () => {
        modal.classList.add('open');
        document.addEventListener('keydown', escapePress);
    };

    const closeModal = () => {
        modal.classList.remove('open');
        document.removeEventListener('keydown', escapePress);
    };

    
    const escapePress = event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    };

    modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('modal-close') || target === modal) {
            closeModal();
        }
    })



    cardsList.addEventListener('click', event => {
        const target = event.target;
        const parent = target.closest('.card-item');
        if (parent) {
            const findName =  parent.querySelector('.card-name').textContent;
            let ship = ships.find(item =>  item.shipName === findName);

            modalCardName.textContent = ship.shipName;
            cardClassname.textContent = `"${ship.className}"`;
            classification.textContent = `class: ${ship.classification}`;
            shipHull.textContent = `ship hull: ${ship.shipHull}`;
            speed.textContent = `speed: ${ship.speed}`;
            maneuverability.textContent = `maneuverability: ${ship.maneuverability}`;
            beidewind.textContent = `beidewind: ${ship.beidewind}`;
            hold.textContent = `hold: ${ship.hold}`;
            team.textContent = `team: ${ship.team}`;
            weapons.textContent = `weapons: ${ship.weapons}`;
            price.textContent = `price: ${ship.price}`;
            cardText.textContent = ship.desc;

            openModal();
        }
        
    });
};

const transition = () => {
    const bayLink = document.querySelector('.bay-link');
    const shipLink = document.querySelector('.ship-link');
    const cards = document.querySelector('.cards');
    const myShip = document.querySelector('.my-ship');

    const changePage = () => {
        cards.classList.toggle('hidden');
        myShip.classList.toggle('hidden');
    };

    shipLink.addEventListener('click', () => {
        changePage();
    })

    bayLink.addEventListener('click', () => {
        changePage();
    })
};

const filter = () => {
    document.querySelectorAll("#filter-input").forEach(item => {
        item.addEventListener('blur', onBlurFilter);
    });
    
    document.querySelector('.reset-button').addEventListener('click', () => {
        const cardList = document.querySelector('.cards-list')
        cardList.innerHTML = '';
        renderCards(ships)
    });
}


accordion();
filter();
renderCards(ships);
modal();
transition();