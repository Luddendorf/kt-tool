"use sctrict";
// Task 6 
const start = new Date();

let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const end = new Date();

console.log(`data comes in ${end - start} ms`);

const year = start.getFullYear();
const month = start.getMonth();
const weekDay = dayOfWeek();
const hour = start.getHours();
const minute = start.getMinutes();
const second = start.getSeconds();

function dayOfWeek() {
  switch (start.getDay()) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wendsday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
}

console.group(
  `Year ${year}, month ${
    month + 1
  }, day of week is ${weekDay}, ${hour}:${minute}:${second}`
);
