import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
}

print();

// 1-е задание
function A(b, c, d) {
  c.addProp = "from funcA";
  return { funcA: c, funcB: b(d) };
}
function B(d) {
  d.addProp = "from funcB";
  return d;
}

function task1(funcA, funcB, objC, objD) {
  let num = 69;
  let str = "from main func";
  let result;
  function toResult() {
    return {
      num: num,
      str: str,
      funcA: funcA(funcB, objC, objD),
      funcB: funcB(objD),
    };
  }
  return toResult();
}
console.log('task1 =',task1(A, B, { propC: "objC" }, { propD: "objD" }));

// 2-e задание
console.log("--------------------------------");
var snickersInput = document.getElementById("snickers");
function sparky() {
  console.log("task2_1 =", this.value);
}
sparky.call(snickersInput); // должно появится value элемента snickers

const person = {
  nick: "Bob",
  secondName: "Johnson",
};

function greeter(surname, name) {
  console.log("task2_2 =", this.value + ", " + surname + " " + name);
}

greeter.call(snickersInput, person.nick, person.secondName);
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
    console.log("task3 =", this.mile);
  },
};

// Возращает 1
console.log("--------------------------------");
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-е задание

function operationsWithArr(arr, str) {
  //‘sum’, ‘subtraction’, ‘multiplication’, ‘division’
  let resultFunc;
  switch (str) {
    case "sum":
      resultFunc = function (arr) {
        return arr.reduce(function (prev, cur) {
          return prev + cur;
        });
      };
      break;

    case "subtraction":
      resultFunc = function (arr) {
        return arr.reduce(function (prev, cur) {
          return prev - cur;
        });
      };
      break;

    case "multiplication":
      resultFunc = function (arr) {
        return arr.reduce(function (prev, cur) {
          return prev * cur;
        });
      };
      break;

    case "division":
      resultFunc = function (arr) {
        return arr.reduce(function (prev, cur) {
          return prev / cur;
        });
      };
      break;
  }

  return resultFunc(arr);
}
console.log("--------------------------------");
console.log("task4 [1,2,3,4,5]");
console.log("task4 sum =", operationsWithArr([1, 2, 3, 4, 5], "sum"));
console.log(
  "task4 subtraction =",
  operationsWithArr([1, 2, 3, 4, 5], "subtraction")
);
console.log(
  "task4 multiplication =",
  operationsWithArr([1, 2, 3, 4, 5], "multiplication")
);
console.log("task4 division =", operationsWithArr([1, 2, 3, 4, 5], "division"));

// 5-е задание
console.log("--------------------------------");
console.log('task5 = В разработке =)')
// const ultraDominator = { commandCabin: 'ultra-dominator' };
// const transport = { commandCabin: 'transport' };
// const meteorFieldPasser = { commandCabin: 'meteor-field-passer' };
// const standard = { mainСompartment: 'standard'} ;
// const armored = { mainСompartment: 'armored' };
// const poor = { mainСompartment: 'poor' };
// const ionEngine = { engine: 'ion-engine' };
// const antiMatterEngine = { engine: 'anti-matter-engine' };
// const plasmaEngine = { engine: 'plasma-engine' };

// const createShip = (commandCabin, mainСompartment, engine) => {
//   return Object.assign({}, commandCabin, mainСompartment, engine);
// };

// console.log(createShip(transport, armored, antiMatterEngine));

// 6-e задание

function getDateProp(date) {
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();
  let month = date.getMonth();
  const year = date.getFullYear();
  switch (month) {
    case 0:
      month = "январь";
      break;
    case 1:
      month = "февраль";
      break;
    case 2:
      month = "март";
      break;
    case 3:
      month = "апрель";
      break;
    case 4:
      month = "май";
      break;
    case 5:
      month = "июнь";
      break;
    case 6:
      month = "июль";
      break;
    case 7:
      month = "август";
      break;
    case 8:
      month = "сентябрь";
      break;
    case 9:
      month = "октябрь";
      break;
    case 10:
      month = "ноябрь";
      break;
    case 11:
      month = "декабрь";
      break;
  }
  return `task6 = сейчас ${year} год ,месяц ${month}, ${hour} часов, ${min} минут и ${sec} секунд`;
}
console.log("--------------------------------");
console.log(getDateProp(new Date()));
