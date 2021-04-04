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
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace(){
  	this.mile = this.mile;
    return this;
  },
  goToStart() {
  	this.mile = 0;
    return this;
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
  }
};

// // Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();


const arr = [1, 4, 5];

function calc(arr, operation){
  switch(operation){
    case 'sum':
      return (function(){
        return arr.reduce((sum, item) => sum += item, 0) 
      })();
    case 'multiply':
      return (function(){
        return arr.reduce((mult, item) => mult * item)
      })();
    case 'divide':
      return (function(){
        return arr.reduce((divide, item) => divide / item)
      })();
    case 'subtract':
      return (function(){
        return arr.reduce((sub, item) => sub - item)
      })();
    default:
      return 'wrong operation';
  }
}

console.log(calc(arr, 'divide'));