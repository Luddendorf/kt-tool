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


// 2-e задание 
var snickersInput = document.getElementById('snickers');

function sparky() {
    console.log(this.value);
}

sparky.apply(snickersInput); // должно появится value элемента snickers

const person = {
    nick: 'Bob',
    secondName: 'Johnson'
};

function greeter(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

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

function f1(arr, action) {
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

let summ = f1.bind(null, arr, sum)
let subb = f1.bind(null, arr, sub)
let multt = f1.bind(null, arr, mult)
let divv = f1.bind(null, arr, div)

divv()