
const unsorted = [
  {
    id: 'c744e61d-18ab-4df1-9bf2-281bd7fcf02e',
    profile: 'ordinary',
    type: 'company',
    amount: 59237
  },
  {
    id: '8d7a1980-c9ec-4103-aac6-0a6a4d9890cb',
    profile: 'privileged',
    type: 'company',
    amount: 70832
  },
  {
    id: '5cf215d3-c931-4939-9c86-f906319c13ea',
    profile: 'foreign',
    type: 'subsidiary',
    amount: 17341
  },
  {
    id: '5b0d93c5-99f0-41ff-bdfb-9ec754745d68',
    profile: 'foreign',
    type: 'store',
    amount: 60391
  },
  {
    id: '4b5e78df-7872-4c10-b25c-97284dbb2177',
    profile: 'ordinary',
    type: 'store',
    amount: 45972
  }
];

////////////////////////

// function f1(arr){
//   sortById(arr);
//   sortByProfile(arr);
// }
//
// function sortById(arr){
//   arr.sort((a, b) => a.id > b.id ? 1 : -1);
// }
//
// function sortByProfile(arr){
//   arr.sort((a, b) => a.profile > b.profile ? 1 : -1);
// }
//
// f1(unsorted);
//
// console.log(unsorted);


/////////////////////////

// function f2(arr){
//
//  arr.map(item => item.discount = item.amount * 0.05);
//  return arr.map(item => delete item.profile);
// }
//
// f2(unsorted)
//
// console.log(unsorted);

/////////////////////////

function f3(arr){

  const newObj = {
    removed: true
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > unsorted.length) {
      return console.log("Error")
    }
  }

  for(let i = 0; i < arr.length; i++) {
    unsorted.splice(arr[i], 1, newObj);
  }
  return unsorted;
}

f3([1,3,4]);

console.log(unsorted);


