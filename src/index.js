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

sparky.apply(snickersInput); // должно появится value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

let get = greeter.bind(snickersInput, person.nick, person.secondName)();
// должно появится value элемента snickers + Bob Johnson


// 3-е задание
const path = {
  mile: 0,
  forward() {
      console.log(this.mile);
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
  }
};

// Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 6-е задание

let date = new Date();
console.log(date); // показывает текущие дату и время

let year = date.getFullYear();
console.log(year);  // показывает текущий год

let month = date.getMonth();
console.log(month); // показывает текущий месяц

let day = date.getDate();
console.log(day); // показывает текущий день