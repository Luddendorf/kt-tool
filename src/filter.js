import { ships } from './tabs'

const minPrice = document.querySelector('.priceMin');
const maxPrice = document.querySelector('.priceMax');
let contentShip = ''
    // console.log(ships)
let form = document.forms[0];

const allShip = ships
let arrMin = []
let arrMax = []
var maxValue = 0
var minValue = 0

form.min.onblur = function(event) {
    let priceFilter
    let allFilter
    if (arrMax.length > 0) {
        priceFilter = ships.filter((total => total.price >= form.min.value));
        arrMin = priceFilter;
        minValue = form.min.value;
        allFilter = [...arrMin, ...arrMax];
        allFilter = delRepeat(allFilter)
        console.log('down dell', allFilter);
        priceFilter = allFilter.filter((total => total.price >= minValue && total.price <= maxValue));
        console.log('priceFilter in if', priceFilter);
    } else {
        priceFilter = ships.filter((total => total.price >= form.min.value));
        arrMin = priceFilter;
        minValue = form.min.value;
        console.log('priceFilter in else', priceFilter);
    }
    const div = document.querySelector('#ships');
    arrMin = priceFilter;
    div.innerHTML = '';
    div.innerHTML = renderDiv(priceFilter, contentShip);
    minValue = form.min.value;

    console.log('maxValue', maxValue)
    console.log('minValue', minValue)
    console.log('arrMin', arrMin);
    console.log('arrMax', arrMax);
    console.log('allFilter', allFilter)
};
form.max.onblur = function(event) {
    console.log('arrmin in blur', arrMin);
    let priceFilter, allFilter;
    if (arrMin.length > 0 && form.max.value) {
        console.log('arrmin in if', arrMin);
        priceFilter = ships.filter((total => total.price <= form.max.value));
        arrMax = priceFilter;
        maxValue = form.max.value;
        allFilter = [...arrMin, ...arrMax];
        allFilter = delRepeat(allFilter)
        priceFilter = allFilter.filter((total => total.price >= minValue && total.price <= maxValue));

    } else {
        if (form.max.value === '' && arrMin.length < 0) {
            priceFilter = ships.filter((total => total.price >= form.max.value));
            arrMax = [];
            maxValue = form.max.value;
        } else {
            console.log(form.max.value);
            priceFilter = ships.filter((total => total.price >= form.min.value));
            console.log('priceFilter', priceFilter);
            arrMax = [];
            maxValue = form.max.value;
        }
        // if (form.max.value < 0 || form.max.value === 0 || form.max.value === null) {
        //     priceFilter = ships.filter((total => total.price >= form.max.value));
        //     console.log('ifff', priceFilter);
        // }

    }
    const div = document.querySelector('#ships');
    div.innerHTML = '';
    div.innerHTML = renderDiv(priceFilter, contentShip);
};



function callModal(ship) {
    console.log('ship');
}


export let renderDiv = (object, content) => {
    var filter = object
        // console.log('filter', filter)
    filter.forEach(function(obj, index) {
        content += `
        <div class='shipItemStyle' onclick='callModal()'> 
        <img height="190px" class="center" src="${obj.photo}">
        <p> Фрегат ${obj.shipName} </p>
        <p> Класс ${obj.class} </p>
        <p> Пушки ${obj.weapons} </p>
        <p> Корпус ${obj.shipHull} </p>
        <p> Команда ${obj.team} </p>
        <p> Трюм ${obj.hold} </p>
        <p> Скорость ${obj.speed} </p>
        <p> Манёвренность ${obj.beidewind} </p>
        <p> Цена ${obj.price} </p>
        </div>
        `
    });
    return content
}

function delRepeat(arr2) {
    let arr = arr2.reduce((result, item) => {
        return result.includes(item) ? result : [...result, item];
    }, []);
    return arr;
}




// console.log(maxPrice.value)