import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
}

print();

// ===========================Первое задание===========================
// функция проверки переменной на тип
const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let number = 123512;

function solution(num) {
  const result = [];
	// проверяем число на валидность
  if (isNumber(num) && (num > 0) && (num < 1000000) ) {
		// получаем массив из числа
    num = num.toString().split("");

		// проходимся по массиву, кладём элементы в result
    for (let i = 0; i < num.length; i++) {
      result.push(num.splice(0, 1), num.splice(num.length - 1, 1));
    }

		// если в num остались элементы, конкатенируем с result, получаем строку из массива
    return result.concat(num).join("");
  } else{
    return 'некорректные данные';
  }
}

console.log('первое задание: ', solution(number));

// ===========================Второе задание===========================

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

// 2.1 сортируем, сначала по id, затем по profile
const sorted = (obj) =>{
	return obj
					.sort(function(a, b){
						if(a.id > b.id) return 1
						else return -1;
					})
					.sort(function(a, b){
						if(a.profile > b.profile) return 1
						else return -1;
					});
}
console.log('2.1 : ', sorted(unsorted));

//2.2 удаляем profile, добавляем discount, discount округляем
const addDiscount = (obj) => {
	obj.map((item)=>{ delete item.profile && (item.discount = Math.floor(item.amount * 0.05))})
	return obj;
}
console.log('2.2 : ', addDiscount(unsorted));

const arr = [0, 2, 3];

const filtered = (obj, array) =>{
	return obj.map((item, index) => {
		// проходимся по array, если элемент совпадает с индексом элемента obj, меняем item, если нет, оставляем как есть
		for (let i = 0; i < array.length; i++){
			if(index === array[i]){
				return item = {removed: true};
			}
		}
		return item;
	});
}

console.log('2.3 : ', filtered(unsorted, arr));

// ===========================Третье задание===========================

const message = "Andersen We Test Programmers";

function filterComment(msg, k) {
	// отрезаем от переменной строку длинной k символов
  let result = msg.slice(0, k);
	// если в result не хватает символов даже на первое слово
	if(result.length < msg.split(" ")[0].length){
		return 'слишком маленькое K'
	}
	// проверяем, содержится ли последнее слово из result в строке msg, если да, то убираем пробелы
  else if (msg.split(" ").includes(result.split(" ")[result.split(" ").length - 1])){
    return result.trim();
  } else {
		//если нет, ищем последний пробел в result, отрезаем всё что идёт после него, убираем пробелы
    for (let i = 0; i < result.length; i++) {
      if (i === result.lastIndexOf(" ")) {
        return result.slice(0, i).trim();
      }
    }
  }
}

console.log('третье задание: ', filterComment(message, 14));


