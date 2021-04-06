function f(arr, str){

  if(arr.length <= 0){
    return "Array is too small"
  }

  switch (str) {
    case "sum":
      const sum = function (arr){
        return arr.reduce((sum, current) => sum + current);
      }
      return sum(arr);

    case "subtraction":
      const subtraction = function (arr){
        return arr.reduce((minus, current) => minus - current);
      }
      return subtraction(arr);

    case "multiplication":
      const multiplication = function (arr){
        return arr.reduce((multiple, current) => multiple * current);
      }
      return multiplication(arr);

    case "division":
      const division = function (arr){
        return arr.reduce((divis, current) => divis / current);
      }
      return division(arr);

    default:
      return  "Please enter one of these lines (sum, subtraction, multiplication, division)"
  }
}

console.log(f([1,2,3,4,5],"sum"));


