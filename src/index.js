import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();

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


// Task 1
const sendBtn = document.querySelector('#send_btn');
const newCount = document.querySelector('#flip_number');

const solution = (myNumber) => {
  let str = myNumber.toString();
  let result = "";
	let intRegex = /^\d+$/;
  if(!isNaN(myNumber) && (myNumber >= 0) && (myNumber <= 100000000) && intRegex.test(myNumber)) { //check myNumber
    for(let i = 0; i < str.length; i++) {
      if(i % 2 == 0) {
        result = result + str[Math.floor(i / 2)];
      } else {
        result = result + (str[str.length - Math.floor(i / 2 + 1)]);
      }
    }
		newCount.value = result;
  } else if (myNumber > 100000000){
		newCount.value = "The number must be less than 100k";
	} else if (myNumber < 0 ){
		newCount.value = "The number must be positive";
	} else if (!(intRegex.test(myNumber)) ){
		newCount.value = "The number must be integer";
	} 
}
sendBtn.addEventListener('click', () => {
  const count = document.querySelector('#number').value;
  if(count){
    solution(count);
  }
})

//Task 2
const originalArr = document.querySelector('#unsorted');
// const arrArea = document.querySelector('.array__area');
const showArray = () => {
  console.log(unsorted);
}
originalArr.addEventListener('click', showArray)
// sort by id
const sortId = document.querySelector('#sortId');
const sortingId = () => {
	unsorted.sort((a, b) => a.id > b.id ? 1 : -1);
}
sortId.addEventListener('click', () => {
	sortingId(),
	showArray();
});

//Sort by profile
const sortProfile = document.querySelector('#sortProfile');
const sortingProfile = () => {
	unsorted.sort((a, b) => a.profile > b.profile ? 1 : -1);
}
sortProfile.addEventListener('click', () => {
	sortingProfile(),
	showArray();
});

// Add discount, remove profile
const discount = document.querySelector('#addDiscount');
const addDiscount = () => {
	unsorted.map((i)=>{ delete i.profile && (i.discount = Math.floor(i.amount * 0.05))});
	return unsorted;
}
discount.addEventListener('click', () => {
	addDiscount(),
	showArray();
});

// Add {Removed} for some items
const removed = document.querySelector('#addRemoved');
const arr = [1, 3, 4];
const resultArr = [];
const addRemoved = (unsorted, arr) =>{
	
	for (let i = 0; i < unsorted.length; i++){
		if (arr.includes(i)) {
			resultArr.push({removed: true});
		} else {
			resultArr.push(unsorted[i])
		}
	}
	return resultArr
}

removed.addEventListener('click', () => {
	addRemoved(unsorted, arr)
	console.log(resultArr)
});

//Task 3
const symbolNumbers = document.querySelector('#numberCharacters')
const submitSymbolNumbers = document.querySelector('#submitBtn')
const commentText = document.querySelector('#addComment')
const postBtn = document.querySelector('#sendBtn')
const cutComment = document.querySelector('#cutComment');
let commentLength = 0;

submitSymbolNumbers.addEventListener('click', () => {
	commentLength = symbolNumbers.value
	console.log(commentLength)
})


function makeCutComent(message){
	if(message[commentLength-1] === ' '){
		cutComment.value = message.slice(0,commentLength).trimEnd()
	} else {
		if(message[commentLength] === ' '){
			cutComment.value = message.slice(0,commentLength)
		}else{
		 let indexToSlice = commentLength-1
		 while(indexToSlice != 0){
			 if(message[indexToSlice] === ' ') break
				indexToSlice--
			}
			cutComment.value = message.slice(0, indexToSlice).trimEnd()
		}
	}
//  console.log(cutComment.value)
}

postBtn.addEventListener('click', () => {
	const message = commentText.value;
  if(message) makeCutComent(message)
})
