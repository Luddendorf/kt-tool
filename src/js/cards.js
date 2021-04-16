const ships = [
    {
      shipName: "Thunder Child",
      className: "tartana",
      class: 7,
      shipHull: 95, // корпус
      speed: 6.5,
      maneuverability: 46,
      beidewind: 8.2, // способность идти против ветра
      hold: 50, // трюм
      team: 10,
      advanced: "chest",
      weapons: 2,
      price: 350,
      desc:
        "Впервые тартана появилась в Средиземном море. Изначально это была небольшая рыбачья лодка с треугольным парусом, но хорошие ходовые характеристики сделали ее очень популярным кораблем для каботажных плаваний и торговли между соседними поселениями.",
    },
    {
      shipName: "Panther",
      className: "longboat",
      class: 7,
      shipHull: 200,
      speed: 13.5,
      maneuverability: 72,
      beidewind: 7.5,
      hold: 200,
      team: 17,
      advanced: "chest",
      weapons: 8,
      price: 2500,
      desc:
        "Большая лодка, на которую устанавливают малые пушки. Серьёзным кораблем никогда не станет, но для пиратских или контрабандных вылазок широко применяется по всему миру.",
    },
    {
      shipName: "Neptune",
      className: "lugger",
      class: 6,
      shipHull: 700,
      speed: 14.5,
      maneuverability: 62,
      beidewind: 9.5,
      advanced: "jewellery",
      hold: 550,
      team: 57,
      weapons: 12,
      price: 14500,
      desc:
        "Небольшой корабль, созданный для перевозки грузов и охраны небольших конвоев. Несмотря на то, что Вооружение люггера — слабое, а команда — небольшая, он специально сконструирован как для торговли, так и для сражений. Многие капитаны ценят люггер за его скорость и маневренность. Небольшие размеры не позволяют ему совершать дальние морские плавания.",
    },
    {
      shipName: "Gladiator",
      className: "sloop",
      class: 6,
      shipHull: 1000,
      speed: 13.5,
      maneuverability: 36,
      beidewind: 7.85,
      advanced: "jewellery",
      hold: 750,
      team: 66,
      weapons: 16,
      price: 18000,
      desc:
        "Обладая небольшой осадкой и великолепными ходовыми качествами, шлюп представляет собой высокоэффективный разведывательный корабль, пригодный для берегового патрулирования и торговли.",
    },
    {
      shipName: "Viperous",
      className: "barque",
      class: 5,
      shipHull: 1500,
      speed: 9.5,
      maneuverability: 26,
      beidewind: 3.5,
      hold: 1900,
      advanced: "jewellery",
      team: 80,
      weapons: 16,
      price: 30500,
      desc:
        "Корабль, приспособленный для дальних плаваний. Обладая вместительным трюмом и достаточной огневой мощью, барк считается одним из лучших кораблей в своем классе. Однако, большие размеры не позволяют ему развивать высокую скорость и быстро маневрировать, поэтому барк проигрывает по ходовым характеристикам более легким кораблям его класса.",
    },
    {
      shipName: "Sea Tiger",
      className: "schooner",
      class: 5,
      shipHull: 1400,
      speed: 12.5,
      maneuverability: 32,
      advanced: "skull",
      beidewind: 7.5,
      hold: 1400,
      team: 105,
      weapons: 20,
      price: 32500,
      desc:
        "Хорошие ходовые качества этого корабля, вкупе с вместительным трюмом, сделали шхуну одним из самых привлекательных кораблей в качестве торгового судна у торговцев средней руки, которые не могут позволить себе приобрести флейт.",
    },
    {
      shipName: "Medusa",
      className: "caravel",
      class: 5,
      shipHull: 2300,
      speed: 9.5,
      maneuverability: 28,
      beidewind: 3.5,
      hold: 3000,
      advanced: "chest",
      team: 57,
      weapons: 175,
      price: 38500,
      desc:
        "Необычная форма палубы каравеллы позволяет легко опознать этот корабль с большого расстояния по его очертаниям. Каравеллы выгодно использовать для перевозки больших грузов, тем более что в качестве боевых кораблей они проявили себя неважно.",
    },
    {
      shipName: "Seagull",
      className: "barquentine",
      class: 4,
      shipHull: 2300,
      speed: 10.5,
      maneuverability: 38,
      beidewind: 9.5,
      hold: 2500,
      advanced: "chest",
      team: 195,
      weapons: 16,
      price: 33500,
      desc:
        "Когда испанские негоцианты поняли, что становятся легкой добычей пиратов в Карибском море, они стали массово переоборудовать свои галеоны в баркентины. Благодаря смешанному парусному вооружению баркентина может достаточно быстро двигаться в любом направлении. И хоть трансатлантическое путешествие длиться несколько дольше, зато баркентина наверняка уйдет от пиратов.",
    },
    {
      shipName: "Conqueror",
      className: "brigantine",
      class: 4,
      shipHull: 2100,
      speed: 16.5,
      maneuverability: 52,
      beidewind: 8.5,
      hold: 1200,
      team: 105,
      advanced: "chest",
      weapons: 20,
      price: 32500,
      desc:
        "Легендарный тип парусных судов. Быстроходная и маневренная, как ласточка, бригантина парит над бескрайними просторами морей и океанов.",
    },
    {
      shipName: "Flower",
      className: "flutes",
      class: 4,
      shipHull: 3100,
      speed: 12.5,
      maneuverability: 36,
      beidewind: 4.5,
      hold: 3200,
      team: 165,
      weapons: 18,
      price: 50000,
      desc:
        "Корабль достаточно прочный и большой для дальних плаваний, однако использовать его в военных целях неразумно. Флейт хорош в качестве торгового корабля, так как по размеру трюма и прочности корпуса соперника флейту в его классе найти трудно.",
    },
    {
      shipName: "Viking",
      className: "brig",
      class: 4,
      shipHull: 2700,
      speed: 14.5,
      advenced: "skull",
      maneuverability: 44,
      beidewind: 3.5,
      hold: 2000,
      team: 177,
      weapons: 16,
      price: 50000,
      desc:
        "Бриг часто используется как торговое судно, но ещё чаще — как военный корабль. Высокая скорость и маневренность делают его одним из самых гармоничных судов.",
    },
    {
      shipName: "Warlock",
      className: "galleon",
      class: 4,
      shipHull: 3500,
      speed: 10.5,
      maneuverability: 31,
      beidewind: 3.2,
      advanced: "jewellery",
      hold: 3600,
      team: 366,
      weapons: 20,
      price: 53500,
      desc:
        "Галеон, несомненно, — самый знаменитый тип корабля в истории. Близкий родственник каравеллы, галеон — неуклюжий и надежный корабль, служивший морякам на протяжении двухсот лет. Легкая добыча для настоящего пирата.",
    },
    {
      shipName: "Leviathan",
      className: "corvette",
      class: 3,
      shipHull: 3200,
      speed: 15.5,
      maneuverability: 58,
      beidewind: 4.6,
      hold: 2600,
      advanced: "chest",
      team: 202,
      weapons: 32,
      price: 73500,
      desc:
        "Корвет был спроектирован как судно, имеющее мощное вооружение, но при этом максимально быстрое и легкое. Как следствие, корветы обладают слабым корпусом, но способны догнать более легкие суда и вести успешный бой с более тяжелыми. Как правило, корвет использовался в качестве патрульного судна, а также как вспомогательный военный корабль.",
    },
    {
      shipName: "Leviathan",
      className: "heavy galleon",
      class: 3,
      shipHull: 5500,
      speed: 7.5,
      maneuverability: 23,
      beidewind: 2.6,
      hold: 5000,
      team: 448,
      weapons: 36,
      price: 100000,
      desc:
        "Это мощный военный корабль. Орудия большого калибра, прочный корпус и многочисленная команда обеспечивают надежную защиту любому грузу.",
    },
    {
      shipName: "Nightingale",
      className: "pinnace",
      class: 3,
      shipHull: 3600,
      speed: 12.5,
      maneuverability: 32,
      advanced: "chest",
      beidewind: 5.7,
      hold: 3600,
      team: 241,
      weapons: 18,
      price: 62500,
      desc:
        "Достаточно велик и крепок для дальних морских плаваний, вместимость его трюма позволяет перевозить большое количество груза, а вооружение достаточно сильно. Тем не менее, в бою ему очень не хватает маневренности и скорости настоящего военного корабля.",
    },
    {
      shipName: "Sea Wolf",
      className: "corvette",
      class: 2,
      shipHull: 5000,
      speed: 15.5,
      maneuverability: 37,
      beidewind: 3.9,
      advanced: "jewellery",
      hold: 3200,
      team: 323,
      weapons: 46,
      price: 150000,
      desc:
        "Быстрые и маневренные фрегаты нравятся очень многим за свои высокие ходовые качества и огневую мощь. Эскадра фрегатов вполне может разгромить форт и разграбить город.",
    },
  ];
  
  const lonelyBayField = document.querySelector(".list-card");
  const mainDescr = document.querySelector("#list");
  const overlay = document.querySelector(".menu__overlay");
  const prevSlide = document.querySelector(".fa-chevron-left");
  const nextSlide = document.querySelector(".fa-chevron-right");
  const picSelect = document.querySelector("input[type=image]");
  const selectItems = document.querySelectorAll(".dropdown-items");
  const skull = document.querySelector("#skull");
  const chest = document.querySelector("#chest");
  const jewellery = document.querySelector("#jewellery");

  
  let currentMaxPrice = document.querySelector("#maxprice");
  let currentMinPrice = document.querySelector("#minprice");
  let currentMaxDurab = document.querySelector("#maxstrength");
  let currentMinDurab = document.querySelector("#minstrength");
  let cards = lonelyBayField.childNodes;
  

//Filters 
  function filterInputs() {
    lonelyBayField.innerHTML = "";
    let count = 0;
    ships.forEach(function(item) {
      if (item.price <= currentMaxPrice.value &&
        item.price >= currentMinPrice.value &&
        item.hold <= currentMaxDurab.value &&
        item.hold >= currentMinDurab.value) {
          count++;
          createCards(count);
      };
  });
}

const inputs = document.querySelectorAll("input[type=text]");
  inputs.forEach((item) => {
    item.addEventListener("blur", filterInputs);
  });

//Сreate cards
function createCards(item) {
    let card = document.createElement("div");
    lonelyBayField.append(card);
    card.classList.add("card");
    card.innerHTML = `
                          <img src = "./assets/blackflag.png" width="100" height="100" alt =${"IMG"} class ="ship-img" >
                          <div>Name: ${item.shipName}</div>
                          <div>Class: ${item.className}</div>
                          <div>Rang: ${item.class}</div>
                          <div>Ship Hull: ${item.shipHull}</div>
                          <div>Speed: ${item.speed}</div>
                          <div>Maneuverability: ${item.maneuverability}</div>
                      
                        `;
    return card;
  };

  //Slider
  function slider() {
    lonelyBayField.scrollBy({
      top: 0,
      left: 222,
      behavior: 'smooth'
    }); 
  }

  function sliderAutoplay() {
    setInterval(slider, 2000);
  };

  sliderAutoplay();

 nextSlide.addEventListener('click', slider);


 prevSlide.addEventListener('click', function() {
  lonelyBayField.scrollBy({
    top: 0,
    left: -222,
    behavior: 'smooth'
  }); 
 }) 
 
//Reset filters  
  function beforeFilter() {
    ships.map((item) => {
      if (
        currentMaxPrice.value == 0 &&
        currentMinPrice.value == 0 &&
        currentMaxDurab.value == 0 &&
        currentMinDurab.value == 0
      ) {
        createCards(item);
      }
    });
  }
  
beforeFilter(); 

//Modal
 cards.forEach((item) => {
    item.addEventListener("click", function () {
      overlay.append(item);
      item.insertAdjacentHTML("afterbegin", `<i class="fas fa-times"></i>`); 
      item.style.transform = "scale(1.1)";
      item.style.opacity = "1";
      item.style.zIndex = "2";
      overlay.style.zIndex = "1";
    });
 });


overlay.addEventListener("click", close);
  
function close() {
    overlay.innerHTML = "";
    overlay.style.zIndex = "-1";
  }

//Select
picSelect.addEventListener('click', function(event) {
  event.preventDefault();
  if (document.querySelector("#myDropdown").style.display === "none") {
    document.querySelector("#myDropdown").style.display = "block";
  } else {
    document.querySelector("#myDropdown").style.display = "none";
  } 
});

const skullVar = ships.filter(item => {
  item.advanced == "skull";
});

skull.addEventListener('click', createCards(skullVar));

const chestVar = ships.filter(item => {
  item.advanced == "chest";
});

chest.addEventListener('click', createCards(chestVar));

const jewVar = ships.filter(item => {
  item.advanced == "jewellery";
});

jewellery.addEventListener('click', createCards(jewVar));

