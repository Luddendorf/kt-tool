import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
}

print();

// 2-e задание
var snickersInput = document.getElementById("snickers");
const btn = document.querySelector("button");

const person = {
  nick: "Bob",
  secondName: "Johnson",
};

function sparky() {
  console.log(this.value);
}

function greeter(surname, name) {
  console.log(this.value + ", " + surname + " " + name);
}

btn.addEventListener("click", (event) => {
  snickersInput.value = snickersInput.value;

  let snickers = sparky.call(snickersInput); // должно появится value элемента snickers
  let snickersTwo = greeter.call(snickersInput, person.nick, person.secondName); // должно появится value элемента snickers + Bob Johnson
});

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


