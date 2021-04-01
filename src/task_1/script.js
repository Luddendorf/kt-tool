function arrayReverseInOne(number) {
  let array = String(number).split("");
  let arrPartOne = 0;
  let arrPartTwo = 0;
  //splitting array into two parts
  if (array.length % 2 == 0) {
    //if array without %
    arrPartOne = array.slice(0, array.length / 2);
    arrPartTwo = array.splice(array.length / 2, array.length / 2).reverse();
  } else {
    //if array with %
    arrPartOne = array.slice(0, array.length - 1);
    arrPartTwo = array.splice(array.length / 2 + 1, array.length - 1).reverse();
  }

  let finalArray = [];
  //pushing values into final array from each splitted arrays
  for (let i = 0; i < array.length; i++) {
    finalArray.push(arrPartOne[i], arrPartTwo[i]);
  }
  //converting into String
  let result = finalArray.join("");
  //converting into Number
  let finalNumber = Number(result);
  console.log(finalNumber);
}
arrayReverseInOne(123456);
