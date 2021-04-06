// import './main.css';
// import styles from './index.module.css';
// import "./sass/main-second.scss";
//
// async function print() {
//   // Here we are using dynamic import
//   const { greet } = await import('./greet');
//   const response = await greet('John Doe');
// }
//
// print();
//
//
// // 2-e задание
// const snickersInput = document.getElementById('snickers');
//
// function sparky() {
//   console.log(this.value);
// }
//
// sparky.call(snickersInput); // должно появится value элемента snickers
//
// const person = {
//   nick: 'Bob',
//   secondName: 'Johnson',
// };
//
// function greeter(surname, name) {
//   console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// greeter.call(snickersInput, person.secondName, person.nick);
// // должно появится value элемента snickers + Bob Johnson
//
//
// // 3-е задание
// const path = {
//   mile: 0,
//   forward() {
//     this.mile++;
//     return this;
//   },
//   backward() {
//     this.mile--;
//     return this;
//   },
//   stayInPlace(){
//     this.mile = this.mile;
//     return this;
//   },
//   goToStart() {
//     this.mile = 0;
//     return this;
//   },
//   showMile: function() { // показывает текущую милю
//     console.log(this.mile);
//     return this;
//   }
// };
//
// // Возращает 1
// path.stayInPlace().goToStart().forward().backward().forward().showMile();
