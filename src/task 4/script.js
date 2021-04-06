"use strict";

// Task 4

let arr = [2, 3, 4, 5];
let summ = calc.call(null, arr, "sum");
let sub = calc.call(null, arr, "subtraction");
let multip = calc.call(null, arr, "multiplication");
let dev = calc.call(null, arr, "division");

function calc(array, string) {
  let result;
  if (string == "sum") {
    result = array.reduce(
      (accumulator, calculator) => accumulator + calculator
    );
  } else if (string == "subtraction") {
    result = array.reduce(
      (accumulator, calculator) => accumulator - calculator
    );
  } else if (string == "multiplication") {
    result = array.reduce(
      (accumulator, calculator) => accumulator * calculator
    );
  } else if (string == "division") {
    result = array.reduce(
      (accumulator, calculator) => accumulator / calculator
    );
  }
  return result;
}
console.log(summ, sub, multip, dev); // результаты в консоли 14 -10 120 0.03333333333333333
