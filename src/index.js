import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import { omit } from 'lodash';  

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();
// TASK 1
const reverser = (num) => {
  const str = String(num);
	// Это на случай если число меньше трёхзначного, но отрицательные значения не покрывает.
  if (str.length <= 2) {
    return Number(str.split('').reverse().join(''));
  }
  const arr = str.split('');
  const reversedArr = [...arr].reverse();
  const secondArr = [];
  // Проходимся циклом и пушим элементы по порядку в secondArr
  for (let i = 0; i < arr.length; i++) {
    secondArr.push(arr[i]);
    secondArr.push(reversedArr[i]);
  }
  // Делим до длинны оригинального массива, так как сдвоенный массив и приводим к типу число
  const result = Number(secondArr.slice(0, arr.length).join(''));
  return result;
}

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
// TASK 2
const sorting = (data) => {
  const sortedById = data.sort((element,nextElement) => element.id > nextElement.id ? 1 : -1 )
  const sortedByProfile = sortedById.sort((element, nextElement) => element.id > nextElement.id ? 1 : -1);
  return sortedByProfile;
}
const discounter = (data) => {
  const discountEval = (e) => Math.floor(e.amount * 0.05);
  const result = data.map((e) => {
    const  dataWithDiscount = {...e, discount: discountEval(e)};
		// удалил элемент с помощью omit, так как delete оставил бы пустое место
    const dataWithoutProfile = omit(dataWithDiscount,['profile']); 
    return dataWithoutProfile;
  }) 
return result;
}
const replace = (arr, indexArr) => {
	const result = arr.reduce((acc,e,i) => indexArr.includes(i) ?  [...acc, { removed: true}] : [...acc, e]
	,[])
return result;
};
// TASK 3
const commentSlicer = (str, limit) => {
	// guard expression
  if (str === '' || limit <= 0) {
    return ' ';
  }
  if (str.length <= limit) {
    return str;
  }
const sliced = str.slice(0, limit);
  const f = (data) => {
    const result = data.split('');
    const neededIndex = result.lastIndexOf(' ') ;
    const trash = result.splice(neededIndex);
    if (neededIndex < 0) {
      return '';
    }
    return result.join('').trim();
}
return  (str[limit] === ' ' || str[limit-1] === ' ') ? sliced.trim() : f(sliced);
}
// много if но решенее рабочее, даже проверяет на отрицательные значения.
