import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
}

print();

// Функция solution(myNumber) -------------------------

const solution = (myNumber) => {
  const str = myNumber.toString();
  let counter = str.length - 1;
  let res = "";
  for (let i = 0; i <= counter; i++) {
    if (i === counter) {
      res += `${str[i]}`;
    } else {
      res += `${str[i]}${str[counter]}`;
    }
    counter--;
  }
  return +res;
};

console.log(solution(123456));

// Работа с unsorted -------------------------

const unsorted = [
  {
    id: "c744e61d-18ab-4df1-9bf2-281bd7fcf02e",
    profile: "ordinary",
    type: "company",
    amount: 59237,
  },
  {
    id: "8d7a1980-c9ec-4103-aac6-0a6a4d9890cb",
    profile: "privileged",
    type: "company",
    amount: 70832,
  },
  {
    id: "5cf215d3-c931-4939-9c86-f906319c13ea",
    profile: "foreign",
    type: "subsidiary",
    amount: 17341,
  },
  {
    id: "5b0d93c5-99f0-41ff-bdfb-9ec754745d68",
    profile: "foreign",
    type: "store",
    amount: 60391,
  },
  {
    id: "4b5e78df-7872-4c10-b25c-97284dbb2177",
    profile: "ordinary",
    type: "store",
    amount: 45972,
  },
];

const sortArray = (arr) => {
  return arr
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .sort((a, b) => (a.profile > b.profile ? 1 : -1));
};

const addDiscount = (arr) => {
  return arr.map((item) => {
    const obj = item;
    obj.discount = (item.amount * 5) / 100;
    delete obj.profile;
    return obj;
  });
};

const changeArray = (sourceArray, arrayOfIndices) => {
  return sourceArray.map((element, index) => {
    return arrayOfIndices.includes(index)
      ? (element = { removed: true })
      : element;
  });
};

console.log(sortArray(unsorted));
console.log(addDiscount(unsorted));
console.log(changeArray(unsorted, [0, 3]));

// Работа со строкой -------------------------

const trimString = (string, k) => {
  let result;
  if (string[k] !== " ") {
    for (let i = k; i !== 0; i--) {
      if (string[i] === " ") {
        result = string.slice(0, i);
        break;
      }
    }
  } else {
    result = string.slice(0, k);
  }
  return result ? result.trim() : "";
};

console.log(trimString("Andersen We Test Programmers", 14));
