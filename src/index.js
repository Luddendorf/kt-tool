import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";


const burger = document.querySelector('.header__burger');
const modalBurger = document.querySelector('.menu__burger');

burger.addEventListener('click', () => {
  modalBurger.classList.toggle('hide');
})
window.addEventListener('load', () => {
  modalBurger.classList.add('hide');
})
window.addEventListener('resize', (e) => {
  if(document.body.offsetWidth > 567){
    modalBurger.classList.add('hide');
  }
})
