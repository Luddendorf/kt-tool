import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";
import {convertNumber} from './convertNumber'
import {customSort, task2ex2, task2ex3} from './task2'
import {formatCommet} from './formatCommet'

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

const handleConvert = () => {
  const number = document.getElementById('inputNumber').value
  const re = new RegExp('^\\d*$')
  if(!re.test(number)){
    alert("Input must be a number.")
    return
  }
  const convertedNumber = convertNumber(number)
  document.getElementById('outputNumber').value = convertedNumber
}

const handleClear = () => {
  document.getElementById('inputNumber').value = ''
  document.getElementById('outputNumber').value = ''
}

const handleSort = () => {
  unsorted.sort(customSort)
  console.log(unsorted);
}

const handleTask2Ex2B = () => {
  const newArray = task2ex2(unsorted)
  console.log(newArray)
}

const handleTask2Ex3B = () => {
  const indexes = [1,3,4,10]
  task2ex3(unsorted, indexes)
  console.log(unsorted)
}

const handleFormat = () => {
  const comment = document.getElementById('commentBefore').value
  const k = document.getElementById('k').value

  const newComment =  formatCommet(comment, k)

  document.getElementById('commentAfter').value = `"${newComment}"`
}

document.getElementById('convertB').addEventListener('click', handleConvert)
document.getElementById('clearB').addEventListener('click', handleClear)
document.getElementById('sortB').addEventListener('click', handleSort)
document.getElementById('task2Ex2B').addEventListener('click', handleTask2Ex2B)
document.getElementById('task2Ex3B').addEventListener('click', handleTask2Ex3B)
document.getElementById('formatB').addEventListener('click', handleFormat)
