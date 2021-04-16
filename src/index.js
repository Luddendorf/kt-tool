import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import { ships } from './tabs';
import {} from './checkbox';
import {} from './preloader';
import {} from './temperature';
import {} from './carousel';

async function print() {
    // Here we are using dynamic import
    const { greet } = await
    import ('./greet');
    const response = await greet('John Doe');
    // console.log(response);
}
print();


// const arrFilters = arrFilter;
const arrShip = ships;
// console.log(arrFilters);

function fOne(e, arr) {
    const target = e.currentTarget.getAttribute("data");
    let result = arr.filter((item) => item.shipName === target);
    let renderShip = `
    <img height="190px" class="center" src="${result[0].photo}">
    <p>Фрегат: ${result[0].shipName}</p>
    <p>Название класса: ${result[0].className}</p>
    <p>Класс: ${result[0].class}</p>
    <p>Корпус: ${result[0].shipHull}</p>
    <p>Скорость: ${result[0].speed}</p>
    <p>Манёвренность: ${result[0].maneuverability}</p>
    <p>Курс относительно ветра: ${result[0].beidewind}</p>
    <p>Трюм: ${result[0].hold}</p>
    <p>Команда: ${result[0].team}</p>
    <p>Пушки: ${result[0].weapons}</p>
    <p>Цена: ${result[0].price}</p>
    <p>Описание: ${result[0].desc}</p>`
    var container = document.getElementById('modal1');
    var container2 = document.querySelector('.modal');
    container.style.pointerEvents = 'auto';
    container.style.opacity = 1;
    let div = document.createElement('div');
    div.innerHTML = renderShip;
    container2.appendChild(div);
}

const tabShip = document.querySelector('.shipItemStyle');
const tabShips = document.querySelectorAll('.shipItemStyle');
// console.log(tabShips);
for (let i = 0; i < tabShips.length; i++) {
    tabShips[i].addEventListener('click', (e) => fOne(e, arrShip));
};
const mod = document.getElementById('mod');
mod.addEventListener('click', function() {
    document.querySelector('.modal').innerHTML = '';
    if (document.getElementById('modal1').style.opacity = 1) {
        document.getElementById('modal1').style.opacity = 0;
        document.getElementById('modal1').style.pointerEvents = 'none';
    } else {
        document.getElementById('modal1').style.opacity = 1;
    };
});




/*  renderMyShips  */
const tabMyShip = document.querySelector('#myShip');
let divMyShips = document.createElement('div');
let renderMyShips = `

<div class='shipItemStyle'>
<h1>Мой корабль</h1>
<img height="190px" class="center" src="${ships[15].photo}">
<p>Фрегат: ${ships[15].shipName}</p>
<p>Класс: ${ships[15].class}</p>
<p>Пушки: ${ships[15].shipName}</p>
<p>Корпус: ${ships[15].weapons}</p>
<p>Команда: ${ships[15].team}</p>
<p>Трюм: ${ships[15].hold}</p>
<p>Скорость: ${ships[15].speed}</p>
<p>Манёвренность: ${ships[15].maneuverability}</p>
</div>
`;
divMyShips.innerHTML = renderMyShips;
tabMyShip.appendChild(divMyShips);

/** renderMyCapitan */


/** capitan */
const capitan = {
    name: 'Владимир',
    class: '98',
    damageSable: '35',
    age: '29',
    money: '1 565 872',
    damagePistols: '80',
    photo: 'https://bumper-stickers.ru/61583-thickbox_default/multyashnyj-pirat.jpg',
}


const tabMyCapitan = document.querySelector('#myShip');
let divMyCapitan = document.createElement('div');
divMyCapitan.classList.add('divMyCap');
let renderMyCapitan = `

<div class='shipItemStyle myCapitan'>
<h1 class='h1_myCapitan'>Мой капитан</h1>
<div class='img_myCapitan'>
<img height="135px" class="center" src="${capitan.photo}">
</div>
<div class='div_myCapitan_one'>
<p>Имя:: ${capitan.name}</p>
<p>Класс: ${capitan.class}</p>
<p>Урон саблей: ${capitan.damageSable}</p>
</div>
<div class='div_myCapitan_two'>
<p>Возраст: ${capitan.age}</p>
<p>Дублонов: ${capitan.money}</p>
<p>Урон пистолеты: ${capitan.damagePistols}</p>
</div>
</div>
`;
divMyCapitan.innerHTML = renderMyCapitan;
tabMyCapitan.appendChild(divMyCapitan);


const form = {
    name: null,
    col: null,
    class: null,
    price: null,
};

const submitButton = document.querySelector('.submit');
const nameForm = document.querySelector('.name');
const colForm = document.querySelector('.col');
const classForm = document.querySelector('.class');
const priceForm = document.querySelector('.price');

submitButton.addEventListener('click', function(e) {
    var nameF = nameForm.value;
    var colF = colForm.value;
    var classF = classForm.value;
    var priceF = priceForm.value;
    click(nameF, colF, classF, priceF, nameForm, colForm, classForm, priceForm);
})

function click(name, col, classes, price, namForm, coForm, claForm, prForm) {
    var success = false;
    var a = /^([a-zа-яё]+|\d+)$/i;
    if (name.match(a)) {
        success = true;
        // alert('Имя верное'); // красная // добавляю зеленый цвет инпуту
        namForm.classList.remove('false');
        namForm.classList.add('true');
    } else {
        // alert('Имя не верное'); // красная
        success = false;
        namForm.classList.remove('true');
        namForm.classList.add('false');
    };
    if (success) {
        console.log('Проверка пройдена');
        form.name = name;
        form.col = col;
        form.class = classes;
        form.price = price;
    } else {
        console.log('Проверка не пройдена');
    };
};



/** Hidden filter !== one */
export function delFilter() {
    let divFilterOne = document.querySelector('.one'),
        divFilterTwo = document.querySelector('.two'),
        divFilterTree = document.querySelector('.tree'),
        tabTwo = document.querySelector('.tab_two'),
        tabTree = document.querySelector('.tab_tree'),
        tabFour = document.querySelector('.tab_four'),
        tabFive = document.querySelector('.tab_five'),
        filterDiv = document.querySelector('.min-max-flex')

    if (tabTwo.classList.contains('active')) {
        filterDiv.classList.add('hide')
    } else if (tabTree.classList.contains('active')) {
        filterDiv.classList.add('hide')
    } else if (tabFour.classList.contains('active')) {
        filterDiv.classList.add('hide')
    } else if (tabFive.classList.contains('active')) {
        filterDiv.classList.add('hide')
    } else {
        filterDiv.classList.remove('hide')
    }
}