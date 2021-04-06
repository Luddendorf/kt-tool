import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
    // Here we are using dynamic import
    const { greet } = await
    import ('./greet');
    const response = await greet('John Doe');
}

print();



// 1-e задание 
//f1 = a 
// f2 = b
// obj1 = c
// obj2 = d

function main(f1, f2, obj1, obj2) {
    let str = 'данные основной функции + '
    let resA = f1(f2, obj1, obj2)
    let resMain = str + resA
    console.log('resMain', resMain);
    return resMain

}


function f1(b, c, d) {
    let resB = (d)
    console.log('resB', resB);
    c = {
        id: 'измененный C'
    }
    console.log('c', c);
    let resA = `${c.id} + ${resB.id}`;
    console.log('resA = ', resA);
    return resA;
}

function f2(d) {
    let resB = d = {
        id: 'измененный D'
    }
    return resB
}

const obj1 = {
    id: 'null'
}

const obj2 = {
    id: 'null'
}


let result = main(f1, f2, obj1, obj2)
console.log('result', result);





// 2-e задание 
var snickersInput = document.getElementById('snickers');

function sparky() {
    console.log(this.value);
};

sparky.apply(snickersInput); // должно появится value элемента snickers

const person = {
    nick: 'Bob',
    secondName: 'Johnson'
};

function greeter(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
};

let res = greeter.bind(snickersInput, person.nick, person.secondName)();
// должно появится value элемента snickers + Bob Johnson


// 3-е задание

const path = {
    mile: 0,
    forward() {
        console.log(this.mile);
        this.mile++;
        return this;
    },
    backward() {
        this.mile--;
        return this;
    },
    stayInPlace() {
        this.mile = this.mile;
        return this;
    },
    goToStart() {
        this.mile = 0;
        return this;
    },
    showMile: function() { // показывает текущую милю
        console.log(this.mile);
    }
};

// Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();

//4 задание 

let arr = [5, 10, 1, 2]

const stringTotal = document.getElementById('selectString');
const btnTotal = document.querySelector('#buttonRes');
const areaTotal = document.getElementById('total');
// const value = stringTotal.selectedIndex.value
// console.log(value)
// const indexT = stringTotal.value;
// console.log(indexT)
btnTotal.addEventListener('click', function() {
    const indexT = stringTotal.value;
    // console.log(indexT)
    // const indexT = stringTotal.options[stringTotal.selectedIndex].value
    let totalCount = fOne.bind(null, arr, indexT);
    totalCount();

    // subb();
    // multt();
    // divv();
});

// let
//     sum = 'sum',
//     sub = 'sub',
//     mult = 'mult',
//     div = 'div';


// let subb = fOne.bind(null, arr, value);
// let multt = fOne.bind(null, arr, value);
// let divv = fOne.bind(null, arr, value);


function fOne(arr, indexT) {
    switch (indexT) {
        case 'sum':
            const sumTotal = arr.reduce((total, amount) => total + amount);
            console.log('sum', sumTotal);
            areaTotal.innerHTML = sumTotal
                // return sumTotal;
            break;
        case 'sub':
            const subTotal = arr.reduce((total, amount) => total - amount);
            console.log('sub', subTotal);
            areaTotal.innerHTML = subTotal
                // return subTotal;
            break;
        case 'mult':
            const multTotal = arr.reduce((total, amount) => total * amount);
            console.log('mult', multTotal);
            areaTotal.innerHTML = multTotal
                // return multTotal;
            break;
        case 'div':
            const divTotal = arr.reduce((total, amount) => total / amount);
            console.log('div', divTotal);
            areaTotal.innerHTML = divTotal
                // return divTotal;
            break;

        default:
            return null;
    }
}






//6 задание
const daysT = document.getElementById('days');
const hoursT = document.getElementById('hours');
const minsT = document.getElementById('mins');
const secondsT = document.getElementById('seconds');
const newYear = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const secondsCount = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(secondsCount / 3600 / 24);
    const hours = Math.floor(secondsCount / 3600) % 24;
    const minutes = Math.floor(secondsCount / 60) % 60;
    const seconds = Math.floor(secondsCount) % 60
        // console.log(days, hours, minutes, seconds);



    daysT.innerHTML = days;
    hoursT.innerHTML = hours;
    minsT.innerHTML = minutes;
    secondsT.innerHTML = seconds;

}



countdown();

setInterval(countdown, 1000)