import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
  console.log(response);
}

print();

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

//cards

const cards = document.querySelector('.tabcontent-wrapper');

function renderShips(arr, elem) {

  arr.forEach((obj) => {

    const cardsItem = document.createElement('div');

    cardsItem.innerHTML = `
    <div class='cardsItem' > 
    <img height="190px" class="center" src="https://stihi.ru/pics/2019/10/05/4506.jpg">
    <p> Фрегат: ${obj.shipName} </p>
    <p> Название класса: ${obj.className} </p>
    <p> Класс: ${obj.class} </p>
    <p> Пушки: ${obj.weapons} шт.</p>
    <p> Корпус: ${obj.shipHull} </p>
    <p> Команда: ${obj.team} чел.</p>
    <p> Трюм: ${obj.hold} </p>
    <p> Скорость: ${obj.speed} узлов</p>
    <p> Курс относительно ветра: ${obj.beidewind} </p>
    <p> Манёвренность: ${obj.maneuverability} </p>
    <p> Описание: ${obj.desc} </p>
    <p> Цена: ${obj.price} $</p>
    </div>
    `;

    elem.appendChild(cardsItem);
  });
}

renderShips(ships, cards);

//отображение моего корабля

const myShip = document.querySelector('.my-ship');

myShip.innerHTML = `
  <div class='cardsItem' > 
  <img height="190px" class="center" src="https://stihi.ru/pics/2019/10/05/4506.jpg">
  <p> Фрегат: ${ships[0].shipName} </p>
  <p> Название класса: ${ships[0].className} </p>
  <p> Класс: ${ships[0].class} </p>
  <p> Пушки: ${ships[0].weapons} шт.</p>
  <p> Корпус: ${ships[0].shipHull} </p>
  <p> Команда: ${ships[0].team} чел.</p>
  <p> Трюм: ${ships[0].hold} </p>
  <p> Скорость: ${ships[0].speed} узлов</p>
  <p> Курс относительно ветра: ${ships[0].beidewind} </p>
  <p> Манёвренность: ${ships[0].maneuverability} </p>
  <p> Описание: ${ships[0].desc} </p>
  <p> Цена: ${ships[0].price} $</p>
  </div>
  `;

//sidebar-accordeon

(function () {
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function (ev) {

      const panel = ev.target.nextElementSibling;
      const panelArr = document.getElementsByClassName("panel");

      if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
        acc[i].classList.remove("active");

      } else {

        for (let i = 0; i < panelArr.length; i++) {
          panelArr[i].style.maxHeight = null;
          acc[i].classList.remove("active");
        }

        acc[i].classList.add("active")
        panel.style.maxHeight = panel.scrollHeight + "px";

      }

    });
  }
})();

//main-content-tabs вкладки

(function () {
  const tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tablinks.length; i++) {

    tablinks[i].addEventListener("click", function (ev) {

      const tabcontent = document.getElementsByClassName("tabcontent");

      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      const tablinks = document.getElementsByClassName("tablinks");
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      if (ev.path[0].innerText === 'Бухта Одинокого острова') {
        document.getElementById('tab1').style.display = "block";
      } else if (ev.path[0].innerText === 'Мой корабль') {
        document.getElementById('tab2').style.display = "block";
      } else {
        document.getElementById('tab3').style.display = "block";
      }

      ev.currentTarget.className += " active";
    });
  }

  document.getElementById("defaultOpen").click();
})();

//валидация min-max

const sortingFilter = document.querySelector('.sorting');
const inputsFilter = sortingFilter.querySelectorAll('input[type="text"]');

inputsFilter.forEach((input) => {
  input.addEventListener('input', () => {
    if (!input.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)) {
      input.style.outline = '2px solid red';
    } else {
      input.style.outline = null;
    }
  });
});

//получение данных с формы и валидация 

const form = {
  name: null,
  quantity: null,
  class: null,
  price: null,
};

const submitButton = document.querySelector('.submit');
const shipName = document.getElementById('ship-name');
const shipQuantity = document.getElementById('ship-quantity');
const shipClass = document.getElementById('ship-class');
const shipPrice = document.getElementById('ship-price');

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  const shipNameVal = shipName.value;
  const shipQuantityVal = shipQuantity.value;
  const shipClassVal = shipClass.value;
  const shipPriceVal = shipPrice.value;

  form.name = shipNameVal;
  form.quantity = shipQuantityVal;
  form.class = shipClassVal;
  form.price = shipPriceVal;

});

shipClass.addEventListener('input', () => {
  if (!shipClass.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)) {
    shipClass.style.outline = '2px solid red';
  } else {
    shipClass.style.outline = null;
  }
});

shipName.addEventListener('input', () => {
  if (shipName.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)) {
    shipName.style.outline = '2px solid red';
  } else {
    shipName.style.outline = null;
  }
});

shipQuantity.addEventListener('input', () => {
  if (!shipQuantity.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)) {
    shipQuantity.style.outline = '2px solid red';
  } else {
    shipClass.style.outline = null;
  }
});

shipPrice.addEventListener('input', () => {
  if (!shipPrice.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)) {
    shipPrice.style.outline = '2px solid red';
  } else {
    shipPrice.style.outline = null;
  }
});

//фильтрация по цене

const tabcontentWrapper = document.querySelector(".tabcontent-wrapper");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");

const filterMinMaxPrice = (arr, el, operation) => {
  return arr.filter((item) => {
    if (operation === 'min') {
      if (item.price > el.value) {
        return item;
      }
    } else if (operation === 'max') {
      if (item.price < el.value) {
        return item;
      } else if (el.value == '') {
        return item;
      }
    }
  })
}

minPrice.addEventListener("blur", () => {
  if (minPrice.value.trim() !== '') {
    let result = filterMinMaxPrice(ships, minPrice, 'min');
    tabcontentWrapper.innerHTML = '';
    renderShips(result, tabcontentWrapper);

    maxPrice.addEventListener("blur", () => {
      filterMinMaxPrice(result, maxPrice, 'max');
      tabcontentWrapper.innerHTML = '';
      renderShips(filterMinMaxPrice(result, maxPrice, 'max'), tabcontentWrapper)
    });
  }
});

maxPrice.addEventListener("blur", () => {
  if (minPrice.value.trim() !== '') {
    let result = filterMinMaxPrice(ships, maxPrice, 'max');
    tabcontentWrapper.innerHTML = '';
    renderShips(result, tabcontentWrapper);

    minPrice.addEventListener("blur", () => {
      filterMinMaxPrice(result, minPrice, 'min');
      tabcontentWrapper.innerHTML = '';
      renderShips(filterMinMaxPrice(result, minPrice, 'min'), tabcontentWrapper)
    });
  }
});

//фильтрация по прочности

const minStrength = document.getElementById("min-strength");
const maxStrength = document.getElementById("max-strength");

const filterMinMaxStrength = (arr, el, operation) => {
  return arr.filter((item) => {
    if (operation === 'min') {
      if (item.shipHull > el.value) {
        return item;
      }
    } else if (operation === 'max') {
      if (item.shipHull < el.value) {
        return item;
      } else if (el.value == '') {
        return item;
      }
    }
  })
}

minStrength.addEventListener("blur", () => {
  if (minStrength.value.trim() !== '') {
    let result = filterMinMaxStrength(ships, minStrength, 'min');
    tabcontentWrapper.innerHTML = '';
    renderShips(result, tabcontentWrapper);

    maxStrength.addEventListener("blur", () => {
      filterMinMaxStrength(result, maxStrength, 'max');
      tabcontentWrapper.innerHTML = '';
      renderShips(filterMinMaxStrength(result, maxStrength, 'max'), tabcontentWrapper)
    });
  }
});

maxStrength.addEventListener("blur", () => {
  if (minStrength.value.trim() !== '') {
    let result = filterMinMaxStrength(ships, maxStrength, 'max');
    tabcontentWrapper.innerHTML = '';
    renderShips(result, tabcontentWrapper);

    minStrength.addEventListener("blur", () => {
      filterMinMaxStrength(result, minStrength, 'min');
      tabcontentWrapper.innerHTML = '';
      renderShips(filterMinMaxStrength(result, minStrength, 'min'), tabcontentWrapper)
    });
  }
});

//температура

let resultArr = []

fetch('https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=yHQqk4RKMIJKK6JD43QoM6JochyNKmA3')
  .then(data => data.json())
  .then(temperature => {
    const currentArray = temperature.data.timelines[0].intervals;
    currentArray.map((item) => {
      const reg = /[T][1][2]/;

      if (item.startTime.match(reg)) {
        resultArr.push(item);
      } else {
        return null;
      }
    });

    renderTemp();

    resultArr.forEach(element => {
      const table = document.querySelector('#tempTable');
      const tempTr = document.createElement('tr');

      const tempContent = `
            <td class='date'>
            ${element.startTime.substr(0, 10)}
            </td>
            <td class='temp'>
            ${toCelsius(element.values.temperature)}\xB0C
            </td>
            `
      tempTr.innerHTML = tempContent;
      table.appendChild(tempTr);
    });
  })
  .catch(err => {
    const divTemp = document.querySelector('#temperatura');
    const h1Temp = document.createElement('p');
    const errContent = `
        Ошибка 429 ${err}
        `
    h1Temp.innerHTML = errContent;
    divTemp.prepend(h1Temp);
  });

function renderTemp() {
  const divTemp = document.querySelector('#temperatura');
  const h1Temp = document.createElement('h1');
  const h1Content = `
    <h1 class='h1_temp'>
    Прогноз погоды для отважного капитана Максима Денисенко!
    </h1>
    `
  h1Temp.innerHTML = h1Content;
  divTemp.prepend(h1Temp);
}

function toCelsius(graduses) {
  const temp = graduses;
  const cel = (temp - 32) * 5 / 9;
  const message = `${cel}`;
  return message.substr(0, 5);
};

//slider

const arrImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Achille_mp3h9307.jpg/400px-Achille_mp3h9307.jpg",
  "http://russkiymir.ru/upload/iblock/4c1/4c1007df0e7ab36e233d0f0ab1c66316.jpg",
  "https://yachtrus.com/wp-content/uploads/2018/07/resolution-1.jpg"]

const slideshowContainer = document.querySelector('.slideshow-container');

function renderItem(arr, elem) {

  arr.forEach((src) => {

    const item = document.createElement('div');
    item.classList.add("mySlides");
    item.classList.add("fade");

    item.innerHTML = `
    <img src=${src}>
    `;
    elem.appendChild(item);
  });
}
renderItem(arrImages, slideshowContainer);

const dots = document.querySelector('.dots');

function renderDots(arr, elem) {

  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement('span');
    span.classList.add("dot");

    elem.appendChild(span);
  }
}

renderDots(arrImages, dots);

let slideIndex = 1;
showSlides(slideIndex);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dot = document.querySelectorAll(".dot");

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener('click', () => {
    showSlides(slideIndex = i + 1);
  })
}

prev.addEventListener('click', () => {
  showSlides(slideIndex += -1);
})

next.addEventListener('click', () => {
  showSlides(slideIndex += 1);
})

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideInterval = setInterval(() => { next.click() }, 2000);

let playing = true;
const pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(() => { next.click() }, 2000);
}

pauseButton.addEventListener('click', () => {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
});