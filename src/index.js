import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";

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
console.log("Unsorted = ", unsorted);
//---------------TASK 1-------------------

const form = document.getElementById("form");

form.onsubmit = function (e) {
  e.preventDefault();
  document.getElementById("answerTask1").innerHTML = solution(
    e.target.num.value
  );
};

function solution(myNumber) {
  return Number(
    `${myNumber}`
      .split("")
      .map(function (num, idx, arr) {
        if (idx < Math.ceil(arr.length / 2)) {
          return arr[idx] !== arr[arr.length - idx - 1]
            ? `${arr[idx]}${arr[arr.length - idx - 1]}`
            : `${arr[idx]}`;
        }
      })
      .join("")
  );
}

//------------------TASK 2-----------------

const obj = document.getElementById("outputObj");

const sorted = document.getElementById("sorted");
const added = document.getElementById("added");
const removed = document.getElementById("removed");

sorted.onclick = function (e) {
  let sortedArr = function () {
    return unsorted
      .sort(function (a, b) {
        if (a.id > b.id) return 1;
        else if (a.id < b.id) return -1;
        else return 0;
      })
      .sort(function (a, b) {
        if (a.profile > b.profile) return 1;
        else if (a.profile < b.profile) return -1;
        else return 0;
      });
  };
  console.log("Sorted by Id & Profyle = ", sortedArr());
  obj.innerHTML = JSON.stringify(sortedArr());
};

added.onclick = function (e) {
  let addArr = unsorted.map(function (n, i, arr) {
    delete n.profile;
    n.discount = (n.amount * 0.05).toFixed(2);
    return n;
  });

  console.log("Added Dicount & delete Profyle = ", addArr);
  obj.innerHTML = JSON.stringify(addArr);
};

removed.onclick = function (e) {
  const removedArr = removeElem(unsorted, [1, 3, 4]);
  console.log(removedArr);
  obj.innerHTML = JSON.stringify(removedArr);
};

function removeElem(mainArr, idxArr) {
  const removedTrue = {
    removed: true,
  };
  for (let i = 0; i < idxArr.length; i++) {
    mainArr.splice(idxArr[i], 1, removedTrue);
  }
  return mainArr;
}
//------------------TASK 3-----------------

const formText = document.getElementById("formtext");

formText.onsubmit = function (e) {
  e.preventDefault();
  document.getElementById("answerTask3").innerHTML = toCut(
    e.target.text.value,
    e.target.len.value
  );
};

function toCut(string, quantity) {
  let answer;
  let spaceArr = [];

  tomakeSpaceArr(string, spaceArr);
  answer = tomakeAnswer(spaceArr, quantity, string, answer);
  console.log(answer, ", length = ", answer.length);
  return answer;
}

function tomakeSpaceArr(string, arr) {
  let spaceIdx = 0;
  for (let i = 0; i < string.length; i++) {
    if (spaceIdx === -1) {
      break;
    } else {
      spaceIdx = string.indexOf(" ", spaceIdx + 1);
      arr.push(spaceIdx);
    }
  }
  arr.pop();
  arr.push(string.length);
}

function tomakeAnswer(spaceArr, quantity, string, answer) {
  for (let i = 0; i < spaceArr.length; i++) {
    if (quantity >= string.length) {
      return (answer = string);
    } else if (quantity <= 0) {
      return (answer = "Слишком малая длина строки");
    }
    if (quantity < spaceArr[i]) {
      if (i === 0) {
        return (answer = "Слишком малая длина строки");
      } else {
        return (answer = string.substring(0, spaceArr[i - 1]));
      }
    }
  }
}
