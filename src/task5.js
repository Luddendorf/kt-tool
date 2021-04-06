/* Делать через композицию. Создать функцию,
которая будет принимать, как аргументы:
тип командной рубки
(‘ultra-dominator’, ‘transport’, ‘meteor-field-passer’),
тип основного отсека (‘standard’, ‘armored’, ‘poor’),
тип двигателя (‘ion-engine’, ‘anti-matter-engine’, ‘plasma-engine’)
, в зависимости от которых будет возвращать объект космического
корабля. Функция-фабрика командных рубок должна возвращать рубки,
 которые берут  общие свойства и их значения у некоего объекта
 (windth, length, height), но также добавлять свои свойства и
 их значения, зависимо от типа (например - ultra-dominator -
 имеет advanced-scanner: ‘Megadeath 50000’),а также методы
 (например, scanForEnemies: function() {}). Должна быть функция-фабрика,
 которая возвращает кастомную рубку - т. е. базовые свойства плюс свойства и методы,
 которые захочет заказчик космический пират.
 Функции-фабрики основного отсека
 и двигателя также используют свойства объектов-заготовок, которые хранят общие
 свойства для основного отсека (weight, teamSize, length), и двигателя
 (power, speed, durability) и добавляют к ним свойства и методы в
 зависимости от типа. Также должна быть функция-фабрика, которая позволит
 заказчику получить корпус с индивидуальными свойствами и методами,
 такая же функция и для двигателей. Сделать функцию, которая, получив
 корабль в результате, будет делать его свойства неизменяемыми. Сделать
 функцию, которая, трансформировав корабль, позволит изменять его
 свойства, но не даст добавлять/удалять существующие. Также основная
 функция, выпускающая корабли, должна быть способна принимать кастомную
 функцию-фабрику как аргумент, которая способна создавать кастомные отсеки.
 Создать функцию-фабрику, которая способна делать кастомные отсеки с какими
 угодно свойствами и методами, которые передаёт заказчик космический пират.
 Создать функцию, которая показывает все свойства корабля и их значения
 заказчику. Создать функцию, которая показывает только свойства корабля.
*/

const typeOfRoomUltraDominator = { room: "ultra-dominator"};
const typeOfRoomTransport = { room: "transport"};
const typeOfRoomMeteorFieldPasser = { room: "meteor-field-passer"};

const typeOfEngineStandard = { engine: "standard"};
const typeOfEngineArmored = { engine: "armored"};
const typeOfEnginePoor = { engine: "poor"};

const sizeRoom = {
  width: this.width,
  length: this.length,
  height: this.height,

  basicInformation: function() {
    return `The width of the spaceship is ${this.width}, length - ${this.length}, height - ${this.height}.`
  },

  scanForEnemies: function() {
    if(this.width <= 300 && this.length <= 400 && this.height <= 250){

      return "This spaceship can be pirate. Beware of it."
    } else if(this.width >= 300 && this.width <= 500 && this.length >= 400 && this.length <= 700 && this.height >= 300 && this.height <= 500){

      return "This spaceship can be military. You have nothing to fear (unless you are a pirate)."
    }else{
      return "This spacecraft can be civil or private."
    }
  }
}

const engineCharacteristics = {
  power: this.power,
  speed: this.speed,
  durability: this.durability,
}

const sizeSpaceshipInformation = (width,length,height) => Object.assign(
  Object.create(sizeRoom),
  {width:width, length: length, height:height}
);

const engineCharacteristicsSpaceshipInformation = (power, speed, durability) => Object.assign(
  Object.create(engineCharacteristics),
  {power:power, speed: speed, durability:durability,}
);

const spaceship = (room, engine, size, engineCharacteristics) => {

  let additionalSpaceshipProperty = {};

  if( Object.values(room)[0] === "ultra-dominator"){
    additionalSpaceshipProperty = {additional: "Megadeath 50000"}
    engineCharacteristics = {power: 4000, speed: 5000, durability: 15}

  } else if(Object.values(room)[0] === "transport"){
    additionalSpaceshipProperty = {additional: "Cargo Hold"}
    engineCharacteristics = {power: 7000, speed: 2000, durability: 10}

  } else if(Object.values(room)[0] === "meteor-field-passer"){
    additionalSpaceshipProperty = {additional: "Rocket complex 3000"}
    engineCharacteristics = {power: 10000, speed: 8000, durability: 20}

  } else {
    additionalSpaceshipProperty = null;
  }
  return Object.assign({}, room, engine, additionalSpaceshipProperty, size, engineCharacteristics);
};

const sizeSpaceship1 = sizeSpaceshipInformation(400,500,500);
const engineCharacteristicsSpaceship1 = engineCharacteristicsSpaceshipInformation();


const Spaceship1 = spaceship(typeOfRoomMeteorFieldPasser, typeOfEngineStandard, sizeSpaceship1, engineCharacteristicsSpaceship1);

console.log(sizeSpaceship1.basicInformation());
console.log(sizeSpaceship1.scanForEnemies());
console.log(Spaceship1);
