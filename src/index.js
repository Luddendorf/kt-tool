import './main.css';
import "./sass/main-second.scss";
import { allShips } from './scripts/allShips';
import { filterShips } from './scripts/filterShips';
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
