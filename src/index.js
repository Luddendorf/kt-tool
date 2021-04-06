import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import { greet } from './greet';

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();

//1-е задание
const c = {
  value: 'cValue',
}

const d = {
  value: 'dValue',
}

function b(){
  this.value = 'value chnged in d'
  return this.value
}

const bindedB = b.bind(d)

function a(b, c ,d){
  this.value = 'value chnged in c'
  const bRetVal = b()
  const result = Object.assign({}, {dValue: bRetVal}, {cValue: this.value})
  return result
}

const bindedA = a.bind(c)

function task1(a, b, c, d){
  const myVar = "task1's variable"
  task1.getResult = () => {
    return Object.assign({}, {myVar: myVar}, a(b,c,d))
  }
}

task1(bindedA, bindedB, c, d)
console.log(task1.getResult());

// 2-e задание
var snickersInput = document.getElementById('snickers');

function sparky() {
	console.log(this.value);
}

sparky.call(snickersInput); // должно появится value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.nick, person.secondName);
// должно появится value элемента snickers + Bob Johnson


// // 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this
  },
  backward() {
    this.mile--;
    return this
  },
  stayInPlace(){
  	this.mile = this.mile;
    return this
  },
  goToStart() {
  	this.mile = 0;
    return this
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
    return this.mile
  }
};

// Возращает 1
path.stayInPlace().goToStart().forward().backward().forward().showMile();

// 4-е задание
function task4(operation, numbers){
  switch(operation){
    case 'sum':
      return function(){
        return numbers.reduce((prev, curr)=>prev+curr)
      }
    case 'substraction':
      return function(){
        return numbers.reduce((prev, curr)=>prev-curr)
      }
    case 'multiplication':
      return function(){
        return numbers.reduce((prev, curr)=>prev*curr)
      }
    case 'division':
      return function(){
        return numbers.reduce((prev, curr)=>prev/curr)
      }
    default:
      throw new Error('wrong operation')
  }
}

const sum = task4('sum',[1,2,3,4,5])
console.log(sum());

const substraction = task4('substraction',[1,2,3,4,5])
console.log(substraction());

const multiplication = task4('multiplication',[1,2,3,4,5])
console.log(multiplication());

const division = task4('division',[1,2,3,4,5])
console.log(division());

// 5-е задание
const rubkaFactory = (type) => {
  const baseRubka = {
    widht: 200,
    height: 200,
    length: 200
  }

  switch(type){
    case 'ultra-dominator':
      return Object.assign({}, baseRubka, {
        advancedScanner: 'Megadeath 50000',
        scanForEnemies: function() {console.log('scan for enemies');}
      })
    case 'transport':
      return Object.assign({}, baseRubka, {
        supperScanner: 'supperScanner 2000',
        signal: function() {console.log('signal Zzz');}
      })
    case 'meteor-field-passer':
      return Object.assign({}, baseRubka, {
        meteorGun: 'super Gun MMX',
        releaseGun: function() {console.log('BOOM');}
      })
    default:
      return Object.assign({}, baseRubka)
  }
}

const otsekFactory = (type) => {
  const baseOtsek = {
    weight: 300,
    teamSize: 20,
    length: 100
  }

  switch(type){
    case 'standard':
      return Object.assign({}, baseOtsek, {
        music: 'music',
        turnOnMusic: function(){console.log('music on')}
      })
      case 'armored':
      return Object.assign({}, baseOtsek, {
        armor: 400,
        activateShiend: function(){console.log('shield on')}
      })
      case 'poor':
      return Object.assign({}, baseOtsek, {
        food: 'none',
        askForFood: function(){console.log('food pls')}
      })
      default:
        return Object.assign({}, baseOtsek)
  }
}

const baseMotorFactory = () => {
  return {
    power:100,
    speed:1000,
    durability:11
  }
}

const ionEngineFactory = (base) => {
  return Object.assign({}, base, {
    ionWeapon: 'red-cat 1000X',
    ionShoot: function() {console.log('ion Shoot')}
  })
}

const plasmaEngineFactory = (base) => {
  return Object.assign({}, base, {
    plasma: 'best plasma',
    plasmaFill: function() {console.log('plasma fill')}
  })
}

const antiMatterEngineFactory = (base) => {
  return Object.assign({}, base, {
    matterDevice: 'USFB2634382',
    releasePlasma: function() {console.log('plasma In')}
  })
}

const motorFactory = (type) => {
  const baseMotor = baseMotorFactory()

  switch(type){
    case 'ion-engine':
      return Object.assign({}, ionEngineFactory(baseMotor))
    case 'anti-matter-engine':
      return Object.assign({}, plasmaEngineFactory(baseMotor))
    case 'plasma-engine':
      return Object.assign({}, antiMatterEngineFactory(baseMotor))
    default:
      return baseMotor
  }
}

const customRubkaFactory = (rubka, customProps) => {
  return Object.assign(rubka, customProps)
}

const customOtsekFactory = (otsek, customProps) => {
  return Object.assign(otsek, customProps)
}

const customMotorFactory = (motor, customProps) => {
  return Object.assign(motor, customProps)
}

function task5(rubka, otsek, motor){
  return Object.assign(
    {},
    {motor: motorFactory(motor)},
    {otsek: otsekFactory(otsek)},
    {rubka: rubkaFactory(rubka)}
    )
}

function freezeTank(tank){
  return Object.freeze(tank)
}

function sealTank(tank){
  return Object.seal(tank)
}

const tank = task5('transport', 'armored', 'ion-engine')
console.log(tank)
const customRubka = customRubkaFactory(tank.rubka, {big:'yes'})
tank.rubka = customRubka
const customMotor = customMotorFactory(tank.motor, {good:'yes'})
tank.motor = customMotor
const customOtsek = customOtsekFactory(tank.otsek, {red:'yes'})
tank.otsek = customOtsek
console.log(tank)

freezeTank(tank)
delete tank.motor //error

sealTank(tank)
delete tank.motor
tank.motor = 'motor'




//6-е задание
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date('2022-12-12'));
console.log(new Date(2022,11,12,12,12,12));
console.log(Date(Date.parse('2020-05-05')));
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getTime());

