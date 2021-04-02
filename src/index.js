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

/**  функцию, которая будет сортировать элементы сначала по id, потом по profile;

**/
function sortByProfile(arr){
	return arr
	.sort((a,b)=> a.id.toUpperCase > b.id.toUpperCase ? 1 : -1)
	.sort(function(a, b){
		return	a.profile.toUpperCase() > b.profile.toUpperCase() ? 1 : -1;
	})
}

// console.log(sortByProfile(unsorted));

/** 
2) функцию, которая будет возвращать массив, в котором каждый элемент также имеет свойство ‘discount’,
 значение которого рассчитывается, как 5% от amount данного элемента, а свойства profile не будет вообще;
 **/

 function discount(arr){
	 return arr.map(item=> {
		 delete item.profile;
		 return {...item,  discount: ((item.amount / 100) * 5).toFixed(2) }
	 })
 }

//  console.log(discount(unsorted));
 /** 
3) функцию, которая будет принимать, как аргументы исходный массив и массив индексов (например, [1, 3, 4]),
в результате она будет заменять элементы исходного массива на объект типа { removed: true }. 
**/

function remove(arr,indexArr){
	return	arr.map((item, key) => {
			if(indexArr.includes(key)){
				return {removed: true}
			}
			return item;	
		})
}

console.log(remove(unsorted, [1,3,4]));