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

const objC = {
  name: 'Victor',
  lastname: 'Ivanov',
  age: 22,
  profession: 'doctor',
};

const objD = {
  type: 'cat',
  name: 'bars',
  age: 3,
};

function taskOne (funcA, funcB, objC, objD) {
 funcA.call(this, funcB, objC, objD);
};

function funcA (funcB, objC, objD) {
  this.name = 'Alex';
  this.lastname = 'Seleznev',
  this.profession = 'teacher';

  return this;

};

function funcB (objD) {
  this.type = 'dog';
  this.age = 5;
  return this;
}


let a = funcA.bind(objC);
let b = funcB.bind(objD);

console.log(b());
console.log(a()); // пока что не до конца разобрался с этим заданием


// 2-e задание 
var snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

sparky.apply(snickersInput); // должно появиться value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.secondName, person.nick);
// должно появиться value элемента snickers + Bob Johnson


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

// Возвращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();


// 4-е задание

const taskFour = (n, str) => {
  switch(str) {
    case 'sum': 
      return n.reduce((a,b) => a + b);
    case 'subtraction':
      return n.reduce((a,b) => a - b);
    case 'multiplication':
      return n.reduce((a,b) => a * b);
    case 'division':
      return n.reduce((a,b) => a / b);
    default:
      console.log('Unknown value');
  }
};

// 5-е задание

const ultraDominator = { commandCabin: 'ultra-dominator' };
const transport = { commandCabin: 'transport' };
const meteorFieldPasser = { commandCabin: 'meteor-field-passer' };
const standard = { mainСompartment: 'standard'} ;
const armored = { mainСompartment: 'armored' };
const poor = { mainСompartment: 'poor' };
const ionEngine = { engine: 'ion-engine' };
const antiMatterEngine = { engine: 'anti-matter-engine' };
const plasmaEngine = { engine: 'plasma-engine' };

const createShip = (commandCabin, mainСompartment, engine) => {
  return Object.assign({}, commandCabin, mainСompartment, engine);
};

console.log(createShip(transport, armored, antiMatterEngine));

// 6-е задание

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTimezoneOffset());

let past = new Date();
past.setFullYear(2020);
past.setMonth(0);
past.setHours(11, 59, 59);
console.log(past);

