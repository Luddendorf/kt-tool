"use sctrict";

// Task 1

function Main(fn1, fn2, obj1, obj2) {
  console.log(`His name is ${this.name} and he is ${this.age} years old.`);
}

let Arnold = { name: "Arnold", age: 25 };
let Harry = { name: "Harry", age: 34 };

function first(fn, obj1, obj2) {
  console.log(`This function gives ${obj1.name} and ${obj2.name} new property`);
  obj1.newFn = fn;
  obj2.newFn = fn;
}

function second() {
  console.log(Arnold, Harry);
}
let fn1 = Main.call(Arnold, first(second, Arnold, Harry));
let fn2 = Main.apply(Harry, first(second, Harry, Arnold));
let fn3 = first.bind(null, second());
