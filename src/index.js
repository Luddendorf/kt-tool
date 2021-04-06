import './main.css';
import "./sass/main-second.scss";

// 1-e задание

const objC = {name: 'Vlad'};
const objD = {age: 19};

function funcA(funcB, objC, objD){
	objC.name = 'Masha';
	// this.name = 'Masha'; // тоже работает
	return `my name is ${this.name}, age - ${funcB(objD)}`
}

function funcB(objD){
	objD.age = '20';
	// this.age = '20'; // тоже работает
	return this.age;
}

const bindFuncA =  funcA.bind(objC);
const bindFuncB =  funcB.bind(objD);

function funcMain(funcA, funcB, objC, objD){
	const mainVarA = 'Hi';
	return (function mainFuncA(){
		return `${mainVarA}, ${funcA(funcB, objC, objD)}`
	})()
}

console.log(funcMain(bindFuncA,bindFuncB, objC, objD));
console.log('------------------------------');


// 2-e задание
var snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

const bindSparky = sparky.bind(snickersInput);
bindSparky(); // должно появится value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

const bindGreeter = greeter.bind(snickersInput);
bindGreeter(person.secondName, person.nick) // должно появится value элемента snickers + Johnson Bob

console.log('------------------------------');

// 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace(){
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
    return this;
  }
};

// Возращает 1
path.stayInPlace().goToStart().forward().backward().forward().showMile();

console.log('------------------------------');

// 4-е задание

const mathAction = (arr = [], str = '') => {
  switch(str){
    case 'sum':
      return console.log('Sum: ' + arr.reduce((acc, num) => acc += num , 0));
    case 'subtraction':
      return console.log('Subtraction: ' + arr.reduce((acc, num) => acc -= num , 0));
    case 'multiplication':
      return console.log('Multiplication: ' + arr.reduce((acc, num) => acc *= num , 1));
    case 'division':
      return console.log('Division: ' +  arr.reduce((acc, num, index) => {
        if(num === 0) return 'На ноль делить нельзя!';
        if(index === 0) return num;
        else return acc /= num ;
      }, arr[0]));
    default:
      return console.log('Такого значения нет');
  }
}

mathAction([1, 7, -8, 4, -1], 'sum');
mathAction([10, 3, 1, 5, -1], 'subtraction');
mathAction([8, 2, -1, 1], 'multiplication');
mathAction([1, 7, -8, 4, 0], 'division');
mathAction([32, 2, -4, 1], 'division');
mathAction([6, 2, -8, 3, 7], 'asd');

console.log('------------------------------');

// 5-е задание
const cabinObjType = (type, width, length, height) => ({type, width, length, height});

const mainObjType = (type, weight, length, teamSize) => ({type, weight, length, teamSize});

const engineObjType = (type, power, speed, durability) => ({type, power, speed, durability});

const cabinType = cabin => {
  switch(cabin){
    case 'ultra-dominator':
      return cabinObjType(cabin,200,200,200);
    case 'transport':
      return cabinObjType(cabin,100,100,100);
    case 'meteor-field-passer':
      return cabinObjType(cabin,300,300,300);
    default:
      return cabinObjType('transport',100,100,100);;
  }
}

const mainType = main => {
  switch(main){
    case 'standard':
      return mainObjType(main,2000,2000,2000);
    case 'armored':
      return mainObjType(main,3000,3000,3000);
    case 'poor':
      return mainObjType(main,1000,1000,1000);
    default:
      return mainObjType('poor',1000,1000,1000);;
  }
}

const engineType = engine => {
  switch(engine){
    case 'ion-engine':
      return engineObjType(engine,10000,10000,10000);
    case 'anti-matter-engine':
      return engineObjType(engine,20000,20000,20000);
    case 'plasma-engine':
      return engineObjType(engine,30000,30000,30000);
    default:
      return engineObjType('ion-engine',10000,10000,10000);;
  }
}

const spaceship = ({cabin, main, engine}) => {

  const cabinObj = cabinType(cabin);
  const mainObj = mainType(main);
  const engineObj = engineType(engine);

  const newObj = Object.freeze({
    cabin: cabinObj,
    main: mainObj,
    engine: engineObj
  });

  // newObj.cabin = ''; // ошибка выдастся, так как Object.freeze(чтоб в следующей строке не было ошибки, нужно закоментировать эту)
  newObj.cabin.type = ''; // ошибки не будет, так как поверхностная копия

  return newObj;
}

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withСompose = compose(
  spaceship
);

console.log(withСompose({engine: 'plasma-engine'}));


console.log('------------------------------');

// 6-е задание

const data = new Date() ;

const locales = { nu: "latn", ca: "iso8601"};
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
console.log(data.toString());
console.log(data.toDateString());
console.log(data.toLocaleDateString(locales, options));
console.log(data.toLocaleDateString());
console.log(`${data.getFullYear()}/${data.getMonth()}/${data.getDate()}`);

console.log('------------------------------');
