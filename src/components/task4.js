const result = document.querySelector("#result__task4");
const SUM = "SUM";
const SUBSTRACTION = "SUBSTRACTION";
const MULTIPLICATION = "MULTIPLICATION";
const DIVISION = "DIVISION";

export function calculations(arr, action) {
  if (arr.length > 1) {
    let res = arr[0];
    let params = arr.slice(1);
    switch (action) {
      case SUM:
        params.forEach((item) => (res += item));
        break;
      case SUBSTRACTION:
        params.forEach((item) => (res -= item));
        break;
      case MULTIPLICATION:
        params.forEach((item) => (res *= item));
        break;
      case DIVISION:
        params.forEach((item) => (res /= item));
        break;
      default:
        return null;
    }
    return Math.round(res);
  }
  return res;
}

const sum = calculations.bind(null, [1, 2, 3, 4, 5], SUM);
const substract = calculations.bind(null, [1, 2, 3, 4, 5], SUBSTRACTION);
const mult = calculations.bind(null, [1, 2, 3, 4, 5], MULTIPLICATION);
const div = calculations.bind(null, [1, 2, 3, 4, 5], DIVISION);

result.innerHTML = `params: [1, 2, 3, 4, 5] <br> sum: ${sum()}, substraction: ${substract()}, multipliaction: ${mult()}, division: ${div()}`;

console.log(
  `sum: ${sum()}, substraction: ${substract()}, multipliaction: ${mult()}, division: ${div()}`
);
