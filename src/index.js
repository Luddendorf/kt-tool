import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();
// 1-e задание
console.log('1-e задание');

const objC = {

};

const objD = {

};


function funcA(){

};

function funcB(){

};


//2-e задание
console.log('2-e задание');
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

let greeterSneakers = greeter.bind(snickersInput, person.secondName, person.nick);

greeterSneakers();


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
console.log('3-e задание');
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-е задание
const arr = [1, 4, 5];

function calc(arr, operation){
  switch(operation){
    case 'sum':
      return (function(){
        return arr.reduce((sum, item) => sum + item) 
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
console.log('4-e задание');
console.log(calc(arr, 'sum'));