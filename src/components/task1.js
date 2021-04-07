const obj1 = {
  name: "Jordan",
};
const obj2 = {
  secondName: "Micheal",
};
const resultBlock = document.querySelector("#result__1");

function funcA(funcB, obj1, obj2) {
  obj1.name = "Ervin";
  const secondName = funcB(obj2);

  return `full name: ${this.name} ${secondName}`;
}

const boundA = funcA.bind(obj1);

function funcB(obj2) {
  obj2.secondName = "Abliamitov";
  return this.secondName;
}

const boundB = funcB.bind(obj2);

export function MainFunction(a, b, c, d) {
  const mainData = {
    src: "Main",
    data: [
      { id: 1, post: "post 1" },
      { id: 2, post: "post 2" },
    ],
  };

  const resFuncA = function resA() {
    return a(b, c, d);
  };
  resultBlock.innerHTML = `result of a function: ${resFuncA()} <br>
  main function data:<br> ${JSON.stringify(mainData)}`;
  return `result of a function: ${resFuncA()}
  main function data: ${JSON.stringify(mainData, null, 3)}`;
}

console.log(MainFunction(boundA, boundB, obj1, obj2));
