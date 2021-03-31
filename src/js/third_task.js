function pruneStr(str, num){

  let newStr = str.split('');

  newStr.length = num;

  for(let i = newStr.length - 1; i >= 0 ;i--) {

    if (newStr[i] !== ' ') {
      newStr.length--;
    } else {
       newStr.length--;
       return newStr.join('');
    }
  }
}

console.log(pruneStr("Andersen We Test P", 14));
