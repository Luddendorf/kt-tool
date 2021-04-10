// import './main.css';
// import styles from './index.module.css';
// import "./sass/main-second.scss";
//
// import './0.jpg';
// import './1.jpg';
// import './2.jpg';
// import './3.jpg';
// import './4.jpg';
// import './5.jpg';
// import './6.jpg';
// import './7.jpg';
// import './8.jpg';
// import './9.jpg';
// import './10.jpg';
// import './11.jpg';
// import './12.jpg';
// import './13.jpg';



// async function print() {
//   // Here we are using dynamic import
//   const { greet } = await import('./greet');
//   const response = await greet('John Doe');
//   console.log(response);
// }
//
// print();

const ships = [
  {
    "shipName": 'Thunder Child',
    "className": 'tartana',
    "class": 7,
    "shipHull": 95, // корпус
    "speed": 6.5,
    "maneuverability": 46,
    "beidewind": 8.2, // способность идти против ветра
    "hold": 50,  // трюм
    "team": 10,
    "weapons": 2,
    "price": 350,
    "desc": 'Впервые тартана появилась в Средиземном море. Изначально это была небольшая рыбачья лодка с треугольным парусом, но хорошие ходовые характеристики сделали ее очень популярным кораблем для каботажных плаваний и торговли между соседними поселениями.'
  },
  {
    "shipName": 'Panther',
    "className": 'longboat',
    "class": 7,
    "shipHull": 200,
    "speed": 13.5,
    "maneuverability": 72,
    "beidewind": 7.5,
    "hold": 200,
    "team": 17,
    "weapons": 8,
    "price": 2500,
    "desc": 'Большая лодка, на которую устанавливают малые пушки. Серьёзным кораблем никогда не станет, но для пиратских или контрабандных вылазок широко применяется по всему миру.'
  },
  {
    "shipName": 'Neptune',
    "className": 'lugger',
    "class": 6,
    "shipHull": 700,
    "speed": 14.5,
    "maneuverability": 62,
    "beidewind": 9.5,
    "hold": 550,
    "team": 57,
    "weapons": 12,
    "price": 14500,
    "desc": 'Небольшой корабль, созданный для перевозки грузов и охраны небольших конвоев. Несмотря на то, что Вооружение люггера — слабое, а команда — небольшая, он специально сконструирован как для торговли, так и для сражений. Многие капитаны ценят люггер за его скорость и маневренность. Небольшие размеры не позволяют ему совершать дальние морские плавания.'
  },
  {
    "shipName": 'Gladiator',
    "className": 'sloop',
    "class": 6,
    "shipHull": 1000,
    "speed": 13.5,
    "maneuverability": 36,
    "beidewind": 7.85,
    "hold": 750,
    "team": 66,
    "weapons": 16,
    "price": 18000,
    "desc": 'Обладая небольшой осадкой и великолепными ходовыми качествами, шлюп представляет собой высокоэффективный разведывательный корабль, пригодный для берегового патрулирования и торговли.'
  },
  {
    "shipName": 'Viperous',
    "className": 'barque',
    "class": 5,
    "shipHull": 1500,
    "speed": 9.5,
    "maneuverability": 26,
    "beidewind": 3.5,
    "hold": 1900,
    "team": 80,
    "weapons": 16,
    "price": 30500,
    "desc": 'Корабль, приспособленный для дальних плаваний. Обладая вместительным трюмом и достаточной огневой мощью, барк считается одним из лучших кораблей в своем классе. Однако, большие размеры не позволяют ему развивать высокую скорость и быстро маневрировать, поэтому барк проигрывает по ходовым характеристикам более легким кораблям его класса.'
  },
  {
    "shipName": 'Sea Tiger',
    "className": 'schooner',
    "class": 5,
    "shipHull": 1400,
    "speed": 12.5,
    "maneuverability": 32,
    "beidewind": 7.5,
    "hold": 1400,
    "team": 105,
    "weapons": 20,
    "price": 32500,
    "desc": 'Хорошие ходовые качества этого корабля, вкупе с вместительным трюмом, сделали шхуну одним из самых привлекательных кораблей в качестве торгового судна у торговцев средней руки, которые не могут позволить себе приобрести флейт.'
  },
    {
    "shipName": 'Medusa',
    "className": 'caravel',
    "class": 5,
    "shipHull": 2300,
    "speed": 9.5,
    "maneuverability": 28,
    "beidewind": 3.5,
    "hold": 3000,
    "team": 57,
    "weapons": 175,
    "price": 38500,
    "desc": 'Необычная форма палубы каравеллы позволяет легко опознать этот корабль с большого расстояния по его очертаниям. Каравеллы выгодно использовать для перевозки больших грузов, тем более что в качестве боевых кораблей они проявили себя неважно.'
  },
  {
    "shipName": 'Seagull',
    "className": 'barquentine',
    "class": 4,
    "shipHull": 2300,
    "speed": 10.5,
    "maneuverability": 38,
    "beidewind": 9.5,
    "hold": 2500,
    "team": 195,
    "weapons": 16,
    "price": 33500,
    "desc": 'Когда испанские негоцианты поняли, что становятся легкой добычей пиратов в Карибском море, они стали массово переоборудовать свои галеоны в баркентины. Благодаря смешанному парусному вооружению баркентина может достаточно быстро двигаться в любом направлении. И хоть трансатлантическое путешествие длиться несколько дольше, зато баркентина наверняка уйдет от пиратов.'
  },
  {
    "shipName": 'Conqueror',
    "className": 'brigantine',
    "class": 4,
    "shipHull": 2100,
    "speed": 16.5,
    "maneuverability": 52,
    "beidewind": 8.5,
    "hold": 1200,
    "team": 105,
    "weapons": 20,
    "price": 32500,
    "desc": 'Легендарный тип парусных судов. Быстроходная и маневренная, как ласточка, бригантина парит над бескрайними просторами морей и океанов.'
  },
  {
    "shipName": 'Flower',
    "className": 'flutes',
    "class": 4,
    "shipHull": 3100,
    "speed": 12.5,
    "maneuverability": 36,
    "beidewind": 4.5,
    "hold": 3200,
    "team": 165,
    "weapons": 18,
    "price": 50000,
    "desc": 'Корабль достаточно прочный и большой для дальних плаваний, однако использовать его в военных целях неразумно. Флейт хорош в качестве торгового корабля, так как по размеру трюма и прочности корпуса соперника флейту в его классе найти трудно.'
  },
  {
    "shipName": 'Viking',
    "className": 'brig',
    "class": 4,
    "shipHull": 2700,
    "speed": 14.5,
    "maneuverability": 44,
    "beidewind": 3.5,
    "hold": 2000,
    "team": 177,
    "weapons": 16,
    "price": 50000,
    "desc": 'Бриг часто используется как торговое судно, но ещё чаще — как военный корабль. Высокая скорость и маневренность делают его одним из самых гармоничных судов.'
  },
  {
    "shipName": 'Warlock',
    "className": 'galleon',
    "class": 4,
    "shipHull": 3500,
    "speed": 10.5,
    "maneuverability": 31,
    "beidewind": 3.2,
    "hold": 3600,
    "team": 366,
    "weapons": 20,
    "price": 53500,
    "desc": 'Галеон, несомненно, — самый знаменитый тип корабля в истории. Близкий родственник каравеллы, галеон — неуклюжий и надежный корабль, служивший морякам на протяжении двухсот лет. Легкая добыча для настоящего пирата.'
  },
  {
    "shipName": 'Leviathan',
    "className": 'corvette',
    "class": 3,
    "shipHull": 3200,
    "speed": 15.5,
    "maneuverability": 58,
    "beidewind": 4.6,
    "hold": 2600,
    "team": 202,
    "weapons": 32,
    "price": 73500,
    "desc": 'Корвет был спроектирован как судно, имеющее мощное вооружение, но при этом максимально быстрое и легкое. Как следствие, корветы обладают слабым корпусом, но способны догнать более легкие суда и вести успешный бой с более тяжелыми. Как правило, корвет использовался в качестве патрульного судна, а также как вспомогательный военный корабль.'
  },
  {
    "shipName": 'Leviathan',
    "className": 'heavy galleon',
    "class": 3,
    "shipHull": 5500,
    "speed": 7.5,
    "maneuverability": 23,
    "beidewind": 2.6,
    "hold": 5000,
    "team": 448,
    "weapons": 36,
    "price": 100000,
    "desc": 'Это мощный военный корабль. Орудия большого калибра, прочный корпус и многочисленная команда обеспечивают надежную защиту любому грузу.'
  },
  {
    "shipName": 'Nightingale',
    "className": 'pinnace',
    "class": 3,
    "shipHull": 3600,
    "speed": 12.5,
    "maneuverability": 32,
    "beidewind": 5.7,
    "hold": 3600,
    "team": 241,
    "weapons": 18,
    "price": 62500,
    "desc": 'Достаточно велик и крепок для дальних морских плаваний, вместимость его трюма позволяет перевозить большое количество груза, а вооружение достаточно сильно. Тем не менее, в бою ему очень не хватает маневренности и скорости настоящего военного корабля.'
  },
  {
    "shipName": 'Sea Wolf',
    "className": 'corvette',
    "class": 2,
    "shipHull": 5000,
    "speed": 15.5,
    "maneuverability": 37,
    "beidewind": 3.9,
    "hold": 3200,
    "team": 323,
    "weapons": 46,
    "price": 150000,
    "desc": 'Быстрые и маневренные фрегаты нравятся очень многим за свои высокие ходовые качества и огневую мощь. Эскадра фрегатов вполне может разгромить форт и разграбить город.'
  }
];

const horizontalMenuFirst = document.querySelector('#horizontal-menu-first');
const horizontalMenuSecond = document.querySelector("#horizontal-menu-second");

const shipsMenu = document.getElementById("all-ships");
const myShipMenu = document.getElementById("my-ship");

const sail = document.getElementById("sail");
const repairs = document.getElementById("repairs");
const cannons = document.getElementById("cannons");
const command = document.getElementById("command");

const sailAttribute = document.getElementById("sail-attribute");
const repairsAttribute = document.getElementById("repairs-attribute");
const cannonsAttribute = document.getElementById("cannons-attribute");
const commandAttribute = document.getElementById("command-attribute");

const layer = document.getElementById('layer');
const chooseShip = document.getElementById("choose-ship");
const DeskShip = document.getElementById('desk-ship');

const regularName = /^[A-Z][a-z]+$/;
const regularClass = /^[1-7]$/;
const regularSize = /^[1-9]$|^[1][0-6]$/;
const regularPrice =/^[1-9][0-9]{3,5}$|^[4-9][0-9]{,2}|^[3][5-9][0-9]$/;

const nameUser = document.getElementById("name-form");
const classShip = document.getElementById("class-form");
const sizeShip = document.getElementById("size-form");
const priceShip = document.getElementById("price-form");

const shipForm = document.getElementById("my-ship-form");

const formButton = document.getElementById("form-button");

const minPriceInput = document.getElementById("min-price-input");
const maxPriceInput = document.getElementById("max-price-input");
const maxShipHullInput = document.getElementById("max-ship-hull-input");
const minShipHullInput = document.getElementById("min-ship-hull-input");

const minPriceDiv = document.getElementById("min-price-div");
const maxPriceDiv = document.getElementById("max-price-div");
const maxShipHullDiv = document.getElementById("max-ship-hull-div");
const minShipHullDiv = document.getElementById("min-ship-hull-div");

const regularPriceMaxMin =/^[1-9][0-9]{3,5}$|^[4-9][0-9]{,2}$|^[3][5-9][0-9]$/;
const regularShipHullMaxMin =/^[9][5-9]$|^[1-4][0-9]{2,4}$|^[5][0]{3}$/;

const maxPrice = document.getElementById("max-price-input");
const minPrice = document.getElementById("min-price-input");
const minShipHull = document.getElementById("min-ship-hull-input");
const maxShipHull = document.getElementById("max-ship-hull-input");

let forTest = false;

let lengthsMax = [];
let lengthsMin = [];
let lengthsMinHull = [];
let lengthsMaxHull = [];

horizontalMenuFirst.addEventListener('click',handlerHeader1);
horizontalMenuSecond.addEventListener('click',handlerHeader2);

sail.addEventListener('click',sailHeader);
repairs.addEventListener('click',repairsHeader);
cannons.addEventListener('click',cannonsHeader);
command.addEventListener('click',commandHeader);

formButton.addEventListener('click',writeOrder);

layer.addEventListener('click', (e) => {
  if (e.target === layer) {
    chooseShip.innerHTML = '';
    layer.style.display = 'none';
  }
});

nameUser.onblur = function() {
  testForm(nameUser,regularName);
};

classShip.onblur = function() {
  testForm(classShip,regularClass);
};

sizeShip.onblur = function() {
  testForm(sizeShip,regularSize);
};

priceShip.onblur = function() {
  testForm(priceShip,regularPrice);
};

minPriceInput.onblur = function() {
  sortByMinPrice(ships);
  let sortNum2 = sortPrice();
  testFormMaxMin(minPriceInput, minPriceDiv,regularPriceMaxMin);
  shipsMenu.innerHTML = '';
  for(let i = 0; i < sortNum2.length; i++) {
    informationForShip(sortNum2[i])
  }
};

maxPriceInput.onblur = function() {
    sortByMaxPrice(ships);
    let sortNum = sortPrice();
    testFormMaxMin(maxPriceInput, maxPriceDiv, regularPriceMaxMin);
    shipsMenu.innerHTML = '';
    for (let i = 0; i < sortNum.length; i++) {
      informationForShip(sortNum[i])
    }
};

minShipHullInput.onblur = function() {
  sortByMinShipHull(ships);
  let sortHull = sortShipHull()
  testFormMaxMin(minShipHullInput, minShipHullDiv,regularShipHullMaxMin);
  shipsMenu.innerHTML = '';
  for(let i = 0; i < sortHull.length; i++) {
    informationForShip(sortHull[i])
  }
};

maxShipHullInput.onblur = function() {
  sortByMaxShipHull(ships);
  let sortHull2 = sortShipHull()
  testFormMaxMin(maxShipHullInput, maxShipHullDiv,regularShipHullMaxMin);
  shipsMenu.innerHTML = '';
  for(let i = 0; i < sortHull2.length; i++) {
    informationForShip(sortHull2[i])
  }
};


function startShip() {
  for(let i = 0; i < ships.length; i++) {
    informationForShip(i);
  }
}

startShip();

function Order(name, shipClass, size, price) {
  this.name = name;
  this.shipClass = shipClass;
  this.size = size;
  this.price = price;
}

function informationForShip(num){

  const createShip = document.createElement('div');
  createShip.setAttribute('id',`${num}-ship`);
  createShip.setAttribute('class',`for__ship`);
  shipsMenu.append(createShip);

  const test = document.getElementById(`${num}-ship`);

  const shipImag = document.createElement('div');

  shipImag.setAttribute('class',`${test.className}__image`);
  shipImag.style.backgroundImage = `url(\"images/${num}.jpg\")`;
  test.append(shipImag);

  for(let i = 1; i <= 8; i++){
    const shipInformation = document.createElement('p');

    test.append(shipInformation);
    switch(i){
      case 1:
        shipInformation.innerText = `Фрегат: ${ships[num].shipName}`;
        break;
      case 2:
        shipInformation.innerText = `Класс: ${ships[num].class}`;
        break;
      case 3:
        shipInformation.innerText = `Пушки: ${ships[num].weapons}`;
        break;
      case 4:
        shipInformation.innerText = `Корпус: ${ships[num].shipHull}`;
        break;
      case 5:
        shipInformation.innerText = `Команда: ${ships[num].team}`;
        break;
      case 6:
        shipInformation.innerText = `Трюм: ${ships[num].hold}`;
        break;
      case 7:
        shipInformation.innerText = `Скорость: ${ships[num].speed}`;
        break;
      case 8:
        shipInformation.innerText = `Манёвренность: ${ships[num].maneuverability}`;
        break;
    }
  }

  test.addEventListener('click', () => {
    listenerPopUpWindow(num);
  });
}

function testForm(nameForm, regular){
  if (!nameForm.value.match(regular)) {
    shipForm.style.borderColor = "red";
    forTest = true;
  }
  else{
    forTest = false;
    shipForm.style.borderColor = "black";
  }
}

function writeOrder() {
  if(forTest === false) {
    new Order(nameUser.value, classShip.value, sizeShip.value, priceShip.value);
    shipForm.reset();
  }
}

function testFormMaxMin(nameInput, nameDiv, regular){
  if (!nameInput.value.match(regular)) {
    nameDiv.style.borderColor = "red";
  }
  else{
    nameDiv.style.borderColor = "black";
  }
}

function listenerPopUpWindow(number){

  const shipImag2 = document.createElement('div');

  shipImag2.setAttribute('class',`layer__ship__image`);
  shipImag2.style.backgroundImage = `url(\"images/${number}.jpg\")`;
  chooseShip.append(shipImag2);

  for(let i = 1; i <= 8; i++){
    const shipInformation = document.createElement('p');

    chooseShip.append(shipInformation);
    switch(i){
      case 1:
        shipInformation.innerText = `Фрегат: ${ships[number].shipName}`;
        break;
      case 2:
        shipInformation.innerText = `Класс: ${ships[number].class}`;
        break;
      case 3:
        shipInformation.innerText = `Пушки: ${ships[number].weapons}`;
        break;
      case 4:
        shipInformation.innerText = `Корпус: ${ships[number].shipHull}`;
        break;
      case 5:
        shipInformation.innerText = `Команда: ${ships[number].team}`;
        break;
      case 6:
        shipInformation.innerText = `Трюм: ${ships[number].hold}`;
        break;
      case 7:
        shipInformation.innerText = `Скорость: ${ships[number].speed}`;
        break;
      case 8:
        shipInformation.innerText = `Манёвренность: ${ships[number].maneuverability}`;
        break;
    }
  }
  DeskShip.innerText = `${ships[number].desc}`;
  layer.style.display = 'block';
}

function handlerHeader1() {
  horizontalMenuFirst.classList.add("new__horizontal__menu__for__items");
  horizontalMenuSecond.classList.remove("new__horizontal__menu__for__items");
  shipsMenu.removeAttribute("style");
  myShipMenu.style.display = "none"
}

function handlerHeader2() {
  horizontalMenuSecond.classList.add("new__horizontal__menu__for__items");
  horizontalMenuFirst.classList.remove("new__horizontal__menu__for__items");
  shipsMenu.style.display = "none";
  myShipMenu.removeAttribute("style");
}

function sailHeader() {
  sailAttribute.classList.add("sidebar__choice__attribute");
  sailAttribute.classList.remove("sidebar__choice__attribute__none");
  repairsAttribute.classList.add("sidebar__choice__attribute__none");
  cannonsAttribute.classList.add("sidebar__choice__attribute__none");
  commandAttribute.classList.add("sidebar__choice__attribute__none");
}

function repairsHeader() {
  repairsAttribute.classList.add("sidebar__choice__attribute");
  repairsAttribute.classList.remove("sidebar__choice__attribute__none");
  sailAttribute.classList.add("sidebar__choice__attribute__none");
  cannonsAttribute.classList.add("sidebar__choice__attribute__none");
  commandAttribute.classList.add("sidebar__choice__attribute__none");
}

function cannonsHeader() {
  cannonsAttribute.classList.add("sidebar__choice__attribute");
  cannonsAttribute.classList.remove("sidebar__choice__attribute__none");
  sailAttribute.classList.add("sidebar__choice__attribute__none");
  repairsAttribute.classList.add("sidebar__choice__attribute__none");
  commandAttribute.classList.add("sidebar__choice__attribute__none");
}

function commandHeader() {
  commandAttribute.classList.add("sidebar__choice__attribute");
  commandAttribute.classList.remove("sidebar__choice__attribute__none");
  sailAttribute.classList.add("sidebar__choice__attribute__none");
  repairsAttribute.classList.add("sidebar__choice__attribute__none");
  cannonsAttribute.classList.add("sidebar__choice__attribute__none");
}

function sortPrice() {
  let sort = [].concat(lengthsMax,lengthsMin);

  let result = [];

if(lengthsMax.length !== 0 && lengthsMin.length !== 0) {
  for(let i = 0; i <sort.length;i++) {
    for(let j = i + 1; j < sort.length;j++){
      if(sort[i] === sort[j]){
        result.push(sort[i]);
      }
    }
  }
}

  if(lengthsMax.length === 0 && lengthsMin.length !== 0) {
    result = lengthsMin;
  }

  if(lengthsMax.length !== 0 && lengthsMin.length === 0) {
    result = lengthsMax;
  }
  return result;
}


function sortShipHull() {
  let sort2 = [].concat(lengthsMaxHull,lengthsMinHull);

  let result2 = [];

  if(lengthsMaxHull.length !== 0 && lengthsMinHull.length !== 0) {
    for(let i = 0; i <sort2.length;i++) {
      for(let j = i + 1; j < sort2.length;j++){
        if(sort2[i] === sort2[j]){
          result2.push(sort2[i]);
        }
      }
    }
  }

  if(lengthsMaxHull.length === 0 && lengthsMinHull.length !== 0) {
    result2 = lengthsMinHull;
  }

  if(lengthsMaxHull.length !== 0 && lengthsMinHull.length === 0) {
    result2 = lengthsMaxHull;
  }
  return result2;
}

function sortByMaxPrice(arr) {

  let valueInput = Number(maxPrice.value)

  lengthsMax = [];

  for(let i =0; i < arr.length;i++){
    if(arr[i].price <= valueInput){
      lengthsMax.push(i);
    }
  }

  return lengthsMax;
}

function sortByMinPrice(arr) {

  let valueInput = Number(minPrice.value)

  lengthsMin = [];

  for(let i =0; i < arr.length;i++){
    if(arr[i].price >= valueInput){
      lengthsMin.push(i);
    }
  }

  return lengthsMin;
}

function sortByMinShipHull(arr) {

  let valueInput = Number(minShipHull.value)

  lengthsMinHull = [];

  for(let i =0; i < arr.length;i++){
    if(arr[i].shipHull >= valueInput){
      lengthsMinHull.push(i);
    }
  }

  return lengthsMinHull;
}

function sortByMaxShipHull(arr) {
  let valueInput = Number(maxShipHull.value)
  lengthsMaxHull = [];

  for(let i =0; i < arr.length;i++){
    if(arr[i].shipHull <= valueInput){
      lengthsMaxHull.push(i);
    }
  }

  return lengthsMaxHull;
}
