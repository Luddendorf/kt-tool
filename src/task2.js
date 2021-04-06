// 2-e задание
const snickersInput = document.getElementById('snickers');

function sparky() {
  console.log(this.value);
}

sparky.call(snickersInput); // должно появится value элемента snickers

const person = {
  nick: 'Bob',
  secondName: 'Johnson',
};

function greeter(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.secondName, person.nick);
// должно появится value элемента snickers + Bob Johnson

