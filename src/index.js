import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

async function print() {
	// Here we are using dynamic import
	const { greet } = await import('./greet');
	const response = await greet('John Doe');
}

print();

function task1() {
	const enteredValue = document.getElementById('enteredValue');
	const resultValue = document.getElementById('resultValue');
	const btn = document.getElementById('btn1');

	btn.addEventListener('click', solution);

	function solution(ev) {
		ev.preventDefault();

		const myNumberStr = String(enteredValue.value);
		const myNumberArr = myNumberStr.split('');
		const myNumberArrReverse = [];
		const newArr = [];

		myNumberArr.forEach((elem) => {
			myNumberArrReverse.unshift(elem);
		});

		for (let i = 0; i < myNumberArr.length; i++) {
			newArr.push(myNumberArr[i]);
			newArr.push(myNumberArrReverse[i]);
		}

		const result = newArr.slice(0, myNumberArr.length).join('');

		resultValue.innerHTML = result;
	}
}

task1();

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

function task2() {

	function sort() {

		unsorted.sort((a, b) => {
			if (a.id > b.id) return 1;
			if (a.id < b.id) return -1;
			if (a.id === b.id) return 0;
		}).sort((a, b) => {
			if (a.profile > b.profile) return 1;
			if (a.profile < b.profile) return -1;
			if (a.profile === b.profile) return 0;
		});
	}

	sort();

	function addDiscount() {

		unsorted.map((elem) => {
			elem.discount = Math.round(elem.amount * 0.05);
			delete elem.profile;
		});

		return unsorted;
	}

	addDiscount();

	function replacementElements(array, arrayIndex) {

		const result = [];

		for (let i = 0; i < array.length; i++) {
			if (arrayIndex.includes(i)) {
				result.push({ removed: true });
			} else {
				result.push(array[i]);
			}
		}

		return result;
	}

	replacementElements(unsorted, [1, 3, 4]);
}

task2();


function task3() {

	const comment = document.getElementById('comment');
	const valueLength = document.getElementById('valueLength');
	const resultComment = document.getElementById('resultComment');
	const btn = document.getElementById('btn2');

	comment.innerHTML = 'Andersen We Test Programmers';

	btn.addEventListener('click', trimComment);

	function trimComment(ev) {
		ev.preventDefault();

		const k = +valueLength.value;
		const commentVal = comment.value.trim();

		const commentValArr = commentVal.split(' ');
		const trimStr = commentVal.slice(0, k).trim();
		const trimStrArr = trimStr.split(' ')

		if (trimStrArr[trimStrArr.length - 1].length < commentValArr[trimStrArr.length - 1].length) {
			trimStrArr.pop();
		}

		const result = trimStrArr.join(' ');

		resultComment.innerHTML = result;
	}
}

task3();
