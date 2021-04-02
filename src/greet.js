export function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });
}

/*) 1) Есть компания, которая оригинальным способом ведёт свои счета.
 Каждый раз при записи числа, они перемешивают цифры следующим образом:
 сначала первую цифру сначала числа, потом первую с конца, потом вторую от начала числа, потом вторую с конца и так до тех пор,
 пока длина финального числа не будет равна длине начального числа.
 Напишите функцию solution(myNumber), которая получив целое число, возвращает перевёртыш, например, дано 123456, вернёт 162534.
 Дано 130, вернёт 103. Число может быть от 0 до 100 000 000.
 В решении главное правильность, а не скорость выполнения.*/

//function
function solution(myNumber) {
  let arr =  Array.from(String(myNumber), Number);
  let num = Array.from(String(myNumber), Number);
  let newArr = [];
 

  for (let i = 0; i < Math.ceil(num.length / 2); i++) {    
    newArr.push(...[arr[0]]);
    arr.shift();
    newArr.push(...[arr[arr.length - 1]]);    
    arr.pop();
  }

  newArr.forEach(function(item) {
    if (item === undefined) {
      newArr.pop();
    }
  })
  
  console.log(newArr.join(''));
}

//test
solution(123456789);