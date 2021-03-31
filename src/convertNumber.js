export function convertNumber(number){
  let result = ''
  for(let i = 0; i < number.length / 2; i++){
    result += number[i]
    if(i != number.length -1 - i){
      result += number[number.length -1 - i]
    }
  }

  return result
}



// 1234567
