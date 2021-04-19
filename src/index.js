import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import tabs from "./modules/tabs";
import filter from './modules/filter';
import validateForm  from './modules/form';
import popUp  from './modules/popUp';
import weather from './modules/weather';
import dropDownGallery from "./modules/dropDownGallery";
import slider from "./modules/slider";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
  console.log(response);
}

print();

document.addEventListener('DOMContentLoaded', () => {
  tabs();
  filter();
  validateForm();
  popUp();
  weather();
  dropDownGallery();
  slider();
   });


