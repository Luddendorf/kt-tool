import { createShip } from './allShips';
import { ships } from './ships';

export const nextSlide = () => {
  const rightArrow = document.querySelectorAll('.fa-chevron-right');
  const container = document.querySelector('.container');
  const gallery = document.querySelector('.gallery__cards');
  const radio = document.querySelectorAll('.radio__btns--item');

  rightArrow.forEach(arrow => {
    arrow.addEventListener('click', (e) =>  {
      if(e.currentTarget.parentElement.dataset.id <= 15){
        radio.forEach(item =>
          e.currentTarget.parentElement.dataset.id === item.dataset.num
          ? item.classList.add('active')
          : item.classList.remove('active')
        );
        gallery.style.transform = `translate(-${container.clientWidth * e.currentTarget.parentElement.dataset.id}px)`;
      }
      else{
        gallery.style.transform = `translate(0)`;
        radio[radio.length - 1].classList.remove('active');
        radio[0].classList.add('active');
      }
    })
  })
}

export const prevSlide = () => {
  const leftArrow = document.querySelectorAll('.fa-chevron-left');
  const container = document.querySelector('.container');
  const gallery = document.querySelector('.gallery__cards');
  const radio = document.querySelectorAll('.radio__btns--item');

  leftArrow.forEach(arrow => {
    arrow.addEventListener('click', (e) =>  {
      radio.forEach(item =>
        e.currentTarget.parentElement.dataset.id - 2  == item.dataset.num
        ? item.classList.add('active')
        : item.classList.remove('active')
      );
      if(e.currentTarget.parentElement.dataset.id == 1)
        radio[0].classList.add('active');
      gallery.style.transform = `translate(-${container.clientWidth * (e.currentTarget.parentElement.dataset.id - 2)}px)`;
    })
  })
}

export const miniBtns = () => {
  const radio = document.querySelectorAll('.radio__btns--item');
  const container = document.querySelector('.container');
  const gallery = document.querySelector('.gallery__cards');

  radio.forEach(el => {
    el.addEventListener('click', (e) => {
      radio.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
      gallery.style.transform = `translate(-${container.clientWidth * e.target.dataset.num}px)`;
    })
  })
}

export const startAutoPlay = () => {
  const start = document.querySelector('.add__auto');
  const end = document.querySelector('.remove__auto');
  let time = null;

  start.addEventListener('click', () => {
    console.log(time);
    time = setInterval(() => nextSlide(), 1000);
  });
  end.addEventListener('click', () => {
    clearInterval(time);
  });
}

const toggleAnchor = () => {
  const anchor = document.querySelector('.anchor');
  const anchorBurger = document.querySelector('.anchor__burger');
  const anchorItems = document.querySelectorAll('.anchor__list--item');

  anchor.addEventListener('click', () => {
    anchorBurger.classList.toggle("outside");
  })

  anchorItems.forEach(item => {
    item.addEventListener('click', () => {
      anchorItems.forEach(el =>  el.classList.remove('active'))
      item.classList.add('active');
    })
  })
}

const anchor = () => {
  const div = document.createElement('div');
  div.className = 'anchor';
  div.innerHTML = '<img src="https://pngimg.com/uploads/anchor/anchor_PNG7.png" alt="anchor">';

  return div;
}

export const gallery = () => {
  const gallery = document.querySelector('.gallery__cards');
  gallery.style.width = '50000px';
  const container = document.querySelector('.container');

  const div = document.createElement('div');
  div.className = 'radio__btns';
  gallery.after(div);


  ships.forEach((ship,index) => gallery.append(createShip(ship, 'gallery__cards--card', index + 1)));
  const cards = document.querySelectorAll('.gallery__cards--card');

  const radio = document.querySelector('.radio__btns');
  radio.style.width = container.clientWidth + 'px';

  const div2 = document.createElement('div');
  div2.className = 'auto__btns';
  div2.style.width = container.clientWidth + 'px';

  const addAuto = document.createElement('button');
  const removeAuto = document.createElement('button');
  const divAuto = document.createElement('div');
  addAuto.className = 'add__auto';
  addAuto.textContent = 'Start';
  removeAuto.className = 'remove__auto';
  removeAuto.textContent = 'Stop';
  divAuto.textContent = 'Не доделан Auto play';
  div2.append(removeAuto);
  div2.append(addAuto);
  div2.append(divAuto);
  radio.after(div2);

  cards.forEach((card, index) => {
    const btn = document.createElement('div');
    btn.className = 'radio__btns--item';
    btn.dataset.num = index;
    radio.append(btn)

    card.style.width = container.clientWidth + 'px';

    const addRightArrow = document.createElement('i');
    addRightArrow.className = 'fas fa-chevron-right';
    const addLeftArrow = document.createElement('i');
    addLeftArrow.className = 'fas fa-chevron-left'
    card.append(addRightArrow);
    card.append(addLeftArrow);
  })
  radio.firstElementChild.classList.add('active');
  gallery.parentElement.append(anchor());
  toggleAnchor();
}
