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

    let resA = `${c.id} + ${resB.id}`
    console.log('resA = ', resA);

    return resA
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

let arr = [100, 10, 5, 2]
let
    sum = 'sum',
    sub = 'sub',
    mult = 'mult',
    div = 'div';

function fOne(arr, action) {
    switch (action) {
        case 'sum':
            console.log(arr[0] + arr[1]);
            return arr[0] + arr[1];

        case 'sub':
            console.log(arr[0] - arr[1]);
            return arr[0] - arr[1];

        case 'mult':
            console.log(arr[0] - arr[1]);
            return arr[0] * arr[1];

        case 'div':
            console.log('div', arr[0] / arr[1]);
            return arr[0] - arr[1];

        default:
            return null;
    }
}

let summ = fOne.bind(null, arr, sum);
let subb = fOne.bind(null, arr, sub);
let multt = fOne.bind(null, arr, mult);
let divv = fOne.bind(null, arr, div);

divv()



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