export const context = () => {
  let result1 = document.querySelector("#result1__2nd-task");
  let result2 = document.querySelector("#result2__2nd-task");

  // 2-e задание
  const snickersInput = document.getElementById("snickers");

  function sparky() {
    result1.innerHTML = `sparky.call:<br> ${this.value} <br>`;
  }

  // value элемента snickers
  sparky.call(snickersInput);

  const person = {
    nick: "Bob",
    secondName: "Johnson",
  };

  function greeter(surname, name) {
    result2.innerHTML = `greeter.apply: <br> ${this.value} ${surname}  ${name}`;
  }

  // должно появится value элемента snickers + Bob Johnson
  greeter.apply(person, [person.secondName, person.nick]);
};

context();
