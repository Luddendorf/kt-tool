import './main.css';
import "./sass/main-second.scss";
import { allShips } from './scripts/allShips';
import { filterShips } from './scripts/filterShips';
import { gallery, miniBtns, nextSlide, prevSlide, startAutoPlay } from './scripts/gallery';
import { header } from './scripts/header';
import { mainMenu } from './scripts/mainMenu';
import { validateCaptainForm } from './scripts/validateCaptainForm';
import { weather } from './scripts/weather';

mainMenu();
header();
allShips();
filterShips();
validateCaptainForm();
weather();
gallery();
nextSlide();
prevSlide();
miniBtns();

window.addEventListener('resize', () => {
  const galleryBlock = document.querySelector('.gallery');
  galleryBlock.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'gallery__cards';
  galleryBlock.append(div);

  gallery();
  nextSlide();
  prevSlide();
  miniBtns();
})
// startAutoPlay();
