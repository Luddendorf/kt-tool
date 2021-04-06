import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";
import showTime from "./tasks/date";
import resultMyFuncWork from "./tasks/firstTask";
import calc from "./tasks/calculate";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
}

print();

// 6-е задание

showTime();

//1-задание

console.log(resultMyFuncWork);

// 2-e задание

var snickersInput = document.getElementById("snickers");

function sparky() {
  console.log(this.value);
}

sparky.call(snickersInput); // должно появится value элемента snickers

const person = {
  nick: "Bob",
  secondName: "Johnson",
};

function greeter(surname, name) {
  console.log(this.value + ", " + surname + " " + name);
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
  stayInPlace() {
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function () {
    // показывает текущую милю
    console.log(this.mile);
  },
};

// Возращает 1
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-е задание

console.log(calc([2, 2, 3], "multiplication")());
