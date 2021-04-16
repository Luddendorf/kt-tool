import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import accordeon from './modules/accordeon';
import tabs from './modules/tabs';
import modal from './modules/modal';
import filter from './modules/filter';
import dropdown from './modules/dropdown';
import validation from './modules/validation';
import fetchTemperature from './modules/fetchTemperature';
import slider from './modules/slider';


document.addEventListener('DOMContentLoaded', ()=>{
  filter();
  dropdown();
  accordeon();
  tabs();
  modal();
  validation();
  fetchTemperature();
  slider();
});
