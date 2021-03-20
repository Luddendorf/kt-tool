import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

// const h1 = document.querySelector('h1');
// h1.classList.add(styles.h1);

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
  console.log(response);
}

print();

let res = document.querySelector('.seasons').firstElementChild.innerHTML = 'MOUSE';



