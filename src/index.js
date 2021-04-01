import './main.css';
import "./sass/main-second.scss";

// 1 Task
const countBtn = document.querySelector('#counts__btn');
const newCount = document.querySelector('#new__count');

const solution = (myNumber) => {
  const arr = myNumber.split('');
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(i < Math.ceil(arr.length / 2) ){
      newArr.push(arr[i]);
      if(arr.length % 2 !== 1)
        newArr.push(arr[arr.length - i -  1]);
      else{
        if(Math.ceil(arr.length / 2) - 1 !== i)
          newArr.push(arr[arr.length - i -  1]);
      }
    }
  }
  newCount.value = newArr.join('');
}

countBtn.addEventListener('click', () => {
  const count = document.querySelector('#counts').value;
  if(count){
    solution(count);
  }
})

//  Task 2

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

// Для просмотра всего массива

const show = document.querySelector('#unsorted');

const showArr = () => {
  console.log(unsorted);
}

show.addEventListener('click', showArr)

//  1 Function

const sortId = document.querySelector('#sortId');
const sortProfile = document.querySelector('#sortProfile');

const sorting = (props) => {
  if(props === "id")
    return unsorted.sort((a, b) => a.id > b.id ? 1 : -1);
  if(props === "profile")
    return unsorted.sort((a, b) => a.profile > b.profile ? 1 : -1)
}


sortId.addEventListener('click', () => {
  sorting("id"),
  showArr();
});
sortProfile.addEventListener('click', () => {
  sorting("profile");
  showArr();
});

// 2 Function

const discount = document.querySelector('#addDiscount');

const addDiscount = () => {
  return unsorted.map(el => {
    return {
      id: el.id,
      type: el.type,
      amount: el.amount,
      discount: Math.round(el.amount * 0.05),
    }
  })
}

discount.addEventListener('click', () => console.log(addDiscount()));

// 3 Function

const remove = document.querySelector('#addRemove');

const addRemove = (arr = [], arrInd = []) => {
  return arr.forEach((el, index) => {
    if(arrInd){
      arrInd.forEach(item => {
        if(index === item){
          arr.splice(index, 1, {remove: true})
        }
      })
    }
  })
}

remove.addEventListener('click', () => {
  addRemove(unsorted, [1,4]);
  showArr();
});

// 3 Task

const postBtn = document.querySelector('#post__btn')
const postList = document.querySelector('#post__list');
const maxLength = 14;

const validation = (text) => {
  if(text.length > maxLength) return false;  // проверка на максимальную длину
  else{
    const arr = text.split(' ').filter(el => el !== ''); // проверка на пробелы
    return arr.join(' ');
  }
}

postBtn.addEventListener('click', () => {
  const post = document.querySelector('#addPost');
  const errorBlock = document.querySelector('.error__block');

  if(post.value.trim().length && !!validation(post.value)){

    if(errorBlock.innerText) errorBlock.innerHTML = ''; // проверка на блок с ошибкой

    post.classList.remove('err');
    const li = document.createElement('li');
    li.innerHTML = validation(post.value); // добавляем валидированное значение
    postList.append(li);
    document.querySelector('#addPost').value = ''; // очищаем строку ввода
  }else{
    post.classList.add('err');
    errorBlock.innerText = 'Error!';
  }
})

