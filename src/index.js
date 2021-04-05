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

const objC = {
  name: "Max",
  age: 30
}

const objD = {
  name: "Ivan",
  age: 23
}

function a(b, c, d) {
  this.lastName = 'Denisenko';
  const resultFuncB = b.call(this);

  return [this, resultFuncB];
}

function b() {
  this.lastName = 'Ivanov';
  return this;
}

const funcB = b.bind(objD);
const funcA = a.bind(objC);

function mainFunc(a, b, c, d) {
  const resultFuncA = a.call(this, b, c, d);

  mainFunc.fn = function () { return [resultFuncA, b, c, d] };

  console.log(mainFunc.fn());
}

mainFunc(funcA, funcB, objC, objD);


// 2-e задание 

var snickersInput = document.getElementById('snickers');

sparky.call(snickersInput);

function sparky() {
  console.log(this.value);
}

sparky(); // должно появится value элемента snickers

const person = {
  nick: 'Bob',
  secondName: 'Johnson'
};

greeter.call(snickersInput, person.secondName, person.nick);

function greeter(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}

greeter(person.secondName, person.nick);
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
  stayInPlace() {
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function () { // показывает текущую милю
    console.log(this.mile);
    return this.mile;
  }
};

// Возвращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-e задание

function task4(arr, str) {
  if (str === 'sum') {
    return () => arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  if (str === 'subtraction') {
    return () => arr.reduce((accumulator, currentValue) => accumulator - currentValue);
  }
  if (str === 'multiplication') {
    return () => arr.reduce((accumulator, currentValue) => accumulator * currentValue);
  }
  if (str === 'division') {
    return () => arr.reduce((accumulator, currentValue) => accumulator / currentValue);
  }
}

console.log(task4([1, 2, 3], 'sum'));
console.log(task4([1, 2, 3], 'subtraction'));
console.log(task4([1, 2, 3], 'multiplication'));
console.log(task4([1, 2, 3], 'division'));

// 5-e задание

const ultraDominator = { typeCommandCabin: 'ultra-dominator' };
const transport = { typeCommandCabin: 'transport' };
const meteorFieldPasser = { typeCommandCabin: 'meteor-field-passer' };

const standard = { typeMainCompartment: 'standard' };
const armored = { typeMainCompartment: 'armored' };
const poor = { typeMainCompartment: 'poor' };

const ionEngine = { typeEngine: 'ion-engine' };
const antiMatterEngine = { typeEngine: 'anti-matter-engine' };
const plasmaEngine = { typeEngine: 'plasma-engine' };

const creationSpaceship = (typeCommandCabin, typeMainCompartment, typeEngine) => {
  return Object.assign({}, typeCommandCabin, typeMainCompartment, typeEngine);
};

console.log(creationSpaceship(ultraDominator, standard, ionEngine));

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