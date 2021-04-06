const obj1 = {
  name: "Ervin",
  age: 21,
  sex: "male",
  citizenship: null,
};
const obj2 = {
  name: "Micheal",
  secondName: "Jordan",
  age: 23,
  sex: "male",
  citizenship: null,
};

// export function MainFunction(a, b, c, d) {
//   const resFuncA = a.apply(this, [b, c, d]);
//   console.log(`result funcA: ${resFuncA} <br> ${b} <br> ${c} <br> ${d}`);
// }

// function funcA(funcB, obj1, obj2) {
//   this.citizenship = "ukrainian";

//   const resFuncB = funcB.apply(this);

//   return {
//     funcA: this,
//     funcB: resFuncB,
//   };
// }

// function funcB() {
//   this.citizenship = "american";
//   return this;
// }

// console.log(MainFunction(funcA, funcB, obj1, obj2));
