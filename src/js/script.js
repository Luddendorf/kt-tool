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

const renderCards = (ships) => {
    const createCard = (cards) => {
        cards.forEach(item => {
            
        })
    };
};

accordion();
renderCards(ships);
