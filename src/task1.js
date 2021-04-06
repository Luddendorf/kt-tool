/*Напишите фун-ю, которая принимает 4 аргумента
 - 1-й и 2-й - функции (a, b), 3й, 4й (c, d) -
 объекты. a принимает 3 аргумента - b, c, d.
 Внутри основной функции, b, c, d передаются в  a,
  как аргументы. Нужно, чтобы b применялся объект d,
   к a - c (сделать, чтобы фун-кции как-либо изменяли
   объекты). Результат работы b возвращается в a и
   также используется, как и объект с для формирования
   результат, который возвращает a. Основная функция
   имеетсобственные внутренние переменные и имеет среди
   свойств функцию, которая возвращает результат,
   в котором задействованы и то, что возвращает а,
   и её собственные переменные.
*/

const objectC = {};
const objectD = {};

function mainF(funA, funB, objC, objD){

  const variable1 = "First",
    variable2 = "Task";

  const fromFunA = fA.call(objC ,funB, objC ,objD);

  return{
    showResult: function (){
      return console.log(fromFunA);
    },
    showVariables: function (){
      return console.log(`${variable1} ${variable2}`)
    }
  }


}

function fA(fB, oC, oD){
  oC.make = "Toyota";
  this.model = 'Corolla';
  this.year = 2019;

  fB.call(oD,oD);

  return Object.assign(oC,oD);
}

function fB(oD){
  oD.make = "Honda";
  oD.model = 'Accord';
  this.year = 1998;

  return oD;
}

let result = mainF(fA, fB, objectC ,objectD);

result.showVariables();
result.showResult();
