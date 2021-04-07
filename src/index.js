import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();
// 1-е задание 
const c = {
  city: "NewYork",
   population:1000,
};
const d = {
  city: "Moscow",
   population:2000,
};

function a(b, c, d){
  this.population = 3000;
	return `I would love to see ${this.city} with population ${this.population},but i live in ${b(d)}`
}
function b(obj)  {
this.city = "Kazan"
return `${this.city} with this ${this.population}`;
} 
const bindA =  a.bind(c);
const bindB =  b.bind(d);
// Привязал объектры к функциям

function main(a,b,c,d) {
  const greeting = "Hello";
  const goodbye = "Goodbye";
  return `${greeting}, ${a(b,c,d)}. ${goodbye}`;
  }
  // Вызвал уже привязанные фуункциии
  console.log(main(bindA,bindB,c, d));

// 2-e задание 
var snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

sparky.apply(snickersInput); // должно появится value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.secondName, person.nick);
// должно появится value элемента snickers + Bob Johnson


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

// Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile(); 

// 4 задание;
const getResult = (data, operator) => {
  switch (operator) {
    case 'sum':
      return () => data.reduce((acc, e) => (acc + e));

    case 'subtraction':
      return () => data.reduce((acc, e) => acc - e);

    case 'multiplication':
      return () => data.reduce((acc, e) => acc * e);
    
    case 'division':
      return () => data.reduce((acc, e) => acc / e);
    default:
      return 'Please input correct data';
  }
};
// TASK 6
const date = new Date("2021-04-06");
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();