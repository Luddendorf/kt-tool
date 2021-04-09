import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import accordeon from './modules/accordeon';
import tabs from './modules/tabs';

accordeon();
tabs();

const cardsWrapper = document.querySelector('.main__cards-wrapper');
const modal = document.querySelector('.modal');


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
    "url": "https://get.pxhere.com/photo/sailing-ship-ocean-schooner-1369454.jpg",
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
    "url": "https://i.pinimg.com/originals/0c/90/7d/0c907d591e48948e5ae2573bffc444b4.jpg",
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
    "url": "https://karopka.ru/upload/iblock/63f/photo_15_1395475006.jpg",
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
    "url": "https://i.pinimg.com/736x/de/0a/d4/de0ad454b354d9eeb599c486926d2f74.jpg",
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
    "url": "https://avatars.mds.yandex.net/get-zen_doc/40170/pub_5b0ae3dd799d9dc677bab3d5_5b0af2b87ddde8576ef0f75a/scale_1200",
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
    "url": "https://i.pinimg.com/originals/61/ab/eb/61abeb46de32e7db2fa4eea184c8d36a.jpg",
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
    "url": "https://karopka.ru/upload/iblock/63f/photo_15_1395475006.jpg",
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
    "url": "https://fb.ru/misc/i/gallery/11465/2866895.jpg",
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
    "url": "https://i.pinimg.com/originals/72/62/98/7262985a437e42576e3105eb6a2cb2be.jpg",
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
    "url": "https://i.pinimg.com/originals/d1/10/1a/d1101a814027c9f95d7b675628d60bc7.jpg",
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
    "url": "https://avatars.mds.yandex.net/get-pdb/70729/0794b939-e36c-488c-957d-37fb356baae5/s1200",
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
    "url": "https://www.allmmorpg.ru/wp-content/uploads/2020/11/Opera-Снимок_2020-11-06_225748_s1.pearlcdn.com_.png",
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
    "url": "https://static.wikia.nocookie.net/naval-action/images/5/5b/Rts_heavy_1.jpg/revision/latest?cb=20181226115854&path-prefix=ru",
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
    "url": "https://i.pinimg.com/originals/87/6a/65/876a658cb8bf89c607d0fb12492c6465.jpg",
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
    "url": "https://get.wallhere.com/photo/ship-boat-sailing-ship-vehicle-ghost-ship-Brigantine-sailboat-watercraft-mast-barque-sail-full-rigged-ship-fluyt-frigate-carrack-ship-of-the-line-galleon-caravel-brig-manila-galleon-tall-ship-sloop-of-war-schooner-windjammer-ocean-liner-barquentine-training-ship-203245.jpg",
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
    "url": "https://i.ucrazy.ru/files/pics/2016.12/1482413079_1.jpg",
    "desc": 'Быстрые и маневренные фрегаты нравятся очень многим за свои высокие ходовые качества и огневую мощь. Эскадра фрегатов вполне может разгромить форт и разграбить город.'
  }
];


ships.forEach((card)=>{
  cardsWrapper.insertAdjacentHTML('beforeend', `
  <div class="main__card">
    <a href="#close" title="Закрыть" class="close">X</a>
  <div class="main__card-img">
    <img src="${card.url}" alt="ship">
  </div>
    <ul class="main__list">
      <li class="main__list-item"><span>${card.className}</span>: ${card.shipName}</li>
      <li class="main__list-item"><span>Класс</span>: ${card.class}</li>
      <li class="main__list-item"><span>Пушки</span>: ${card.weapons}</li>
      <li class="main__list-item"><span>Корпус</span>: ${card.shipHull}</li>
      <li class="main__list-item"><span>Трюм</span>: ${card.hold}</li>
      <li class="main__list-item"><span>Скорость</span>: ${card.speed}</li>
      <li class="main__list-item"><span>Манёвренность</span>: ${card.maneuverability}</li>
      <li class="main__list-item"><span>Команда</span>: ${card.team}</li>
      <li class="main__list-item"><span>Цена</span>: ${card.price}</li>
      <li class="main__list-item"><span>Описание</span>: ${card.desc}</li>
    </ul>
  </div>`);
});

cardsWrapper.addEventListener('click', (event)=>{
  let target = event.target;
  target = target.closest('.main__card');
  let list = target.querySelectorAll('.main__list-item');
  let close = target.querySelector('.close');

  modal.style.display = 'flex';
  target.style.transform = 'scale(1.3)';
  list[list.length - 1].style.display = 'block';
  close.style.display = 'block';
  modal.append(target);

  close.addEventListener('click', ()=>{
    modal.removeChild(target);
    modal.style.display = 'none';
  })
})
