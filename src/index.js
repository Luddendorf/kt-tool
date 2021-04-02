import './main.css';
import styles from './index.module.css';
import "./sass/main-second.scss";

const btnRevers = document.querySelector('#btnRevers');
const btnSort = document.querySelector('#sort');
const btnDiscount = document.querySelector('#discount');
const btnRemoved = document.querySelector('#removed');
const areaComment = document.querySelector('#comment');
const sliceButton = document.querySelector('#slice');
const kSimvol = document.querySelector('#k');
const areaOut = document.querySelector('#commentOut');
const textInput = document.querySelector('#textInput');
const textOutput = document.querySelector('#textOutput');

sliceButton.addEventListener('click', function() {
    const com = areaComment.value;
    const kol = kSimvol.value;
    com.trim()
    funcSlice(com, kol);
});

// const text = 'Andersen We Test '
// const k = 14


function funcSlice(comment, k) {

    let result = '';
    if (comment.length > k) {
        const arrCom = comment.slice(0, k).split(' ');
        console.log('arrCom', arrCom)
        const commentSplit = comment.split(' ');
        console.log('commentSplit', commentSplit)
            //Проверяю последний эллемент исходной строки с последним элементом обрезанной
        let x = commentSplit.indexOf(arrCom[arrCom.length - 1])
        x > 0 ? null : arrCom.splice(-1, 1);
        console.log('x', x);
        console.log('arrCom', arrCom);
        const newStr = arrCom.join(' ')
        console.log('newStr', newStr);
        console.log('newStr', newStr.length);
        result = newStr
    } else {
        result = comment;
    }
    console.log(result);
    areaOut.value = result;
};


btnSort.addEventListener('click', function() {
    sort(arr)
    arr.map((item) => {
        console.log(item);

    })
    writeResult();
});
btnDiscount.addEventListener('click', function() {

    addField(arr)
    writeResultDiscount();
});


btnRemoved.addEventListener('click', function() {
    func(arr, arrIndex);
    writeResult();
});
// sorted.addEventListener('click', sort);
// console.log(btn);
function writeResult() {
    document.write(`<h1>RESULT</h1>`);
    let aaa = arr.forEach(arr => {
        document.write(`<li><b>ID = ${arr.id} </b><span> PROFILE = ${arr.profile}</span>  TYPE = ${arr.type} AMOUNT = ${arr.amount}`);

    });
    document.write(`<p></p><button onclick="location.reload()">Назад</button>`)
}

function writeResultDiscount() {
    document.write(`<h1>RESULT</h1>`);
    let aaa = arr.forEach(arr => {
        document.write(`<li>ID = ${arr.id} <span>PROFILE = ${arr.profile}</span> TYPE = ${arr.type} AMOUNT = ${arr.amount}` + `<strong> DISCOUNT = `, Math.trunc(`${arr.discount}`) + ` (5%) </strong>`);

    });
    document.write(`<p></p><button onclick="location.reload()">Назад</button>`)
}



// function taskNumbers(e) {
//     const writingNumbers = document.querySelector('#ttt').value;
//     e.preventDefault();
//     console.log('writingNumbers', writingNumbers);
//     console.log('click');
// }


const arr = [{
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


function sort(arr) {
    arr.sort(function(a, b) {
        return a.id > b.id ? 1 : -1
    });
    arr.sort(function(a, b) {
        return a.profile > b.profile ? 1 : -1
    });
}

function addField(arr) {
    arr.map((item) => {
        let x = 0.05 * item.amount
        item.discount = x
        delete item.profile
            // console.log(item);
    })
}




const arrIndex = [1, 3, 4];

function func(arr, arrIndex) {
    arr.map((item, index) => {
        for (let i = 0; i < arrIndex.length; i++) {
            // if (item.id === arrIndex[i]) {
            if (index === arrIndex[i]) {
                // console.log('index', index);
                // console.log('arrIndex[i]', arrIndex[i]);
                delete item.id
                delete item.amount
                delete item.profile
                delete item.type
                if (item.hasOwnProperty('discount')) {
                    delete item.discount
                }
                item.removed = 'true'

            }
        }

        // console.log(item);
    })

}

// function finish() {
//     console.log('Не сортированный', arr);
//     sort(arr)
//     console.log('Сортированный', arr);
//     addField(arr);
//     console.log('С полем', arr);
//     func(arr, arrIndex);
//     console.log('-0 и -5', arr);
// }

// finish();

// !!1 Задание
// sort(arr)
// arr.map((item) => {
//     console.log(item);
// })


//!! 2 Задание
// addField(arr)


//!! 3 Задание
// func(arr, arrIndex)