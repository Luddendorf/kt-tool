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

const sortID = (arr) => {
	return arr.sort((a,b) => a.id > b.id ? 1 : -1);
};

const sortProf = (arr) => {
	return arr.sort((a,b) => a.profile > b.profile ? 1 : -1);
};

const addDiscount = (arr) => {
	arr.forEach(item => {
		item.discount = item.amount*5/100;
		delete item.profile;
	})

	return arr;
};

const remove = (arr, indexes) => {
	for (let i = 0; indexes.length > i; i++) {
		arr.splice(indexes[i], 1, { removed: true });
	}

	return arr;
};