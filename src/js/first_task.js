function solution(myNumber){
  const numbers = myNumber.toString().split('');
  const arrNumbers = numbers.map(Number);

  let newArr = [];

    if (myNumber % 2 === 0) {

      for(let i = 0; i < arrNumbers.length / 2; i++) {

        newArr.push(arrNumbers[i]);
        newArr.push(arrNumbers[arrNumbers.length - 1 - i]);
      }
      } else {

      for(let i = 0; i < Math.floor(arrNumbers.length / 2); i++) {

        newArr.push(arrNumbers[i]);
        newArr.push(arrNumbers[arrNumbers.length - 1 - i]);
      }

      newArr.push(arrNumbers[Math.floor(arrNumbers.length / 2)])
    }

    newArr = newArr.join('');
    newArr = Number(newArr);

    console.log(typeof newArr);
    console.log(newArr);
}

solution(12345678);
