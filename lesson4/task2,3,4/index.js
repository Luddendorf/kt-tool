// 2-e задание 
var snickersInput = document.getElementById('snickers')

function sparky() {
	console.log(this.value);
}

sparky.call(snickersInput); // должно появится value элемента snickers

const person = {
	nick: 'Bob',
	secondName: 'Johnson'
};

function greeter(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

greeter.call(snickersInput, person.secondName, person.nick);
// должно появится value элемента snickers + Bob Johnson


// 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace(){
  	this.mile = this.mile;
    return this;
  },
  goToStart() {
  	this.mile = 0;
    return this;
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
    return this;
  }
};

// Возращает 1 
path.stayInPlace().goToStart().forward().backward().forward().showMile();

//4-ое задание

function four(arr, str) {
  switch(str) {
    case 'sum':
      return () => arr.reduce((accumulator, currentValue) => accumulator + currentValue);
      break;
    case 'subtraction':
      return () => arr.reduce((accumulator, currentValue) => accumulator - currentValue);
      break;
    case 'multiplication':
      return () => arr.reduce((accumulator, currentValue) => accumulator * currentValue);
      break;
    case 'division':
      return () => arr.reduce((accumulator, currentValue) => accumulator / currentValue);
      break;
    default: 
      console.log('There is no such option');
      break;
  }   
};


console.log(four([1, 2, 3, 4, 5], 'sum'));
console.log(four([1, 2, 3, 4, 5], 'subtraction'));
console.log(four([1, 2, 3, 4, 5], 'multiplication'));
console.log(four([1, 2, 3, 4, 5 ], 'division'));
