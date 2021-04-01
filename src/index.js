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
