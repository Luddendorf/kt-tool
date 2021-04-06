import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();


// 2-e задание 
let snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

sparky.call(snickersInput); 

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.nick, person.secondName);



// 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace() {
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function() { // показывает текущую милю
   console.log(this.mile);
   return this.mile;
  }
};

// Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-е задание

function arrHandler(arr, str) {
  if (str === 'sum') return (() => arr.reduce((accumulator,  currentValue) => accumulator + currentValue));
  if (str === 'subtraction') return (() => arr.reduce((accumulator, currentValue) => accumulator - currentValue));
  if (str === 'multiplication') return (() => arr.reduce((accumulator, currentValue) => accumulator * currentValue));
  if (str === 'division') return (() => arr.reduce((accumulator, currentValue) => accumulator / currentValue));
}

console.log(arrHandler([1, 2, 3, 4, 5], 'sum')());            //15
console.log(arrHandler([1, 2, 3, 4, 5], 'subtraction')());    //-13
console.log(arrHandler([1, 2, 3, 4, 5], 'multiplication')()); //120
console.log(arrHandler([1, 2, 3, 4, 5], 'division')());       //0.008333333333333333

// 6-e задание

let time = new Date();
let year = time.getFullYear();
let month = time.getMonth();
let day = time.getHours();
let hours = time.getHours();
let minutes = time.getMinutes();
let second = time.getSeconds();
let timestamp = time.getTime();

console.log(time);
console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(second);
console.log(timestamp);