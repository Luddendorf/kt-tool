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
var snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

sparky.apply(snickersInput);


const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

let b = greeter.bind(snickersInput, person.secondName, person.nick);

b();


// 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
  },
  backward() {
    this.mile--;
  },
  stayInPlace(){
  	this.mile = this.mile;
  },
  goToStart() {
  	this.mile = 0;
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
  }
};

// // Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();