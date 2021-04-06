const obj = {
  name: null,
  modified: false,
};

const obj1 = { ...obj };
const obj2 = { ...obj };

function myFunc(funcA, funcB, objC, objD) {
  let count = 0;
  const arr = funcA(funcB, objC, objD);
  (function () {
    return arr.map((obj) => (obj.id = ++count));
  })();
  return arr;
}

function funcA(funcB, objC, objD) {
  objC.name = "Maksim";
  objC.modified = true;
  return [objC, funcB(objD)];
}

function funcB(obj) {
  obj.name = "Ivan";
  obj.modified = true;
  return obj;
}

const resultMyFuncWork = myFunc(funcA, funcB, obj1, obj2);

export default resultMyFuncWork;
