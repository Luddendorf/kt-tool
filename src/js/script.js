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
    
        const findName =  parent.querySelector('.card-name').textContent;
        let ship = ships.filter(item =>  item.shipName === findName);

        modalCardName.textContent = ship[0].shipName;
        cardClassname.textContent = `"${ship[0].className}"`;
        classification.textContent = `class: ${ship[0].classification}`;
        shipHull.textContent = `ship hull: ${ship[0].shipHull}`;
        speed.textContent = `speed: ${ship[0].speed}`;
        maneuverability.textContent = `maneuverability: ${ship[0].maneuverability}`;
        beidewind.textContent = `beidewind: ${ship[0].beidewind}`;
        hold.textContent = `hold: ${ship[0].hold}`;
        team.textContent = `team: ${ship[0].team}`;
        weapons.textContent = `weapons: ${ship[0].weapons}`;
        price.textContent = `price: ${ship[0].price}`;
        cardText.textContent = ship[0].desc;

        openModal();
    })
};


accordion();
renderCards(ships);
modal(ships);
