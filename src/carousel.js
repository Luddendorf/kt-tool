let imageArray = [
    'https://cdn.pixabay.com/photo/2017/02/09/12/43/ocean-2051859_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/03/10/21/23/pirate-667763_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/18/09/32/black-1602436_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/23/19/34/storm-3254676_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/10/29/12/37/pirates-2899637_960_720.jpg'
];

imageArray.forEach(value => {
    let carousel = document.createElement("img");
    carousel.setAttribute('src', value);
    carousel.setAttribute('width', '100%');
    carousel.setAttribute('height', '100%');
    carousel.setAttribute('class', 'slide');
    document.querySelector('.slider').appendChild(carousel);
});

document.querySelector('.slide').classList.add('active')
let dotsDiv = document.querySelector('.dots');
let dotsDivCreate = '';
for (let i = 0; i < imageArray.length; i++) {
    dotsDivCreate += `
    <span class='dot'></span>
    `;
};
dotsDiv.innerHTML = dotsDivCreate;
document.querySelector('.dot').classList.add('active')

let first = document.querySelector('.slide');
const prev = document.querySelector('.arrowL'),
    next = document.querySelector('.arrowR'),
    dots = document.querySelectorAll('.dot'),
    slides = document.querySelectorAll('.slide');
let index = 0;

const activeSlide = n => {
    for (let allslide of slides) {
        allslide.classList.remove('active');
    };
    slides[n].classList.add('active');
};

const CurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('active');
    };
    dots[n].classList.add('active');
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        CurrentSlide(index);
    } else {
        index++;
        CurrentSlide(index);
    };
    stop();
    checkedOff();
};

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        CurrentSlide(index);
    } else {
        index--;
        CurrentSlide(index);
    };
    stop();
    checkedOff();
};

const checkedOff = function() {
    let Switched = document.querySelector('.switch');
    Switched.checked = false;
};

dots.forEach((item, dot) => {
    item.addEventListener('click', () => {
        index = dot;
        CurrentSlide(index);
        stop();
        checkedOff();
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
let add;

function start() {
    add = setInterval(function() {
        if (index == slides.length - 1) {
            index = 0;
            CurrentSlide(index);
        } else {
            index++;
            CurrentSlide(index);
        };
    }, 1500);
};

function stop() {
    clearInterval(add);
};

document.addEventListener('change', function(e) {
    let chk = e.target
    if (chk.tagName === 'INPUT' && chk.type === 'checkbox' && chk.checked === true) {
        start();
    } else {
        stop();
    };
});