import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import renderData from './modules/renderData';
import accordeon from './modules/accordeon';
import tabs from './modules/tabs';
import modal from './modules/modal';
import filter from './modules/filter';
import validation from './modules/validation';


document.addEventListener('DOMContentLoaded', ()=>{
  filter();
  accordeon();
  tabs();
  modal();
  validation();
});
