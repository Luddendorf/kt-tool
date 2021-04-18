let buttonImg = document.querySelector('.dropbtn');
let imgChange = document.querySelector('.imgChange');
let contentMenu = document.getElementById("myDropdown");

let arrContent = ['Сокровища', 'Cундук', 'Хрустальный череп', 'Ожерелье']
let menuContent = document.createElement("a");
for (let index = 0; index < arrContent.length; index++) {
    menuContent += `
    <a href=''>${arrContent[index]}</a>
    `
}
contentMenu.innerHTML = menuContent

const toggle = function() {
    contentMenu.classList.toggle('show');
};

const removeClass = function() {
    contentMenu.setAttribute('style', '');
};

contentMenu.addEventListener('click', function(e) {
    let targetHref = e.target;
    this.style.background = 'orange';
    e.preventDefault();
});


buttonImg.addEventListener('click', function(e) {
    e.stopPropagation();
    toggle();

});

document.addEventListener('click', function(e) {
    const target = e.target;
    const menu = target == contentMenu || contentMenu.contains(target);
    const btn = target == buttonImg;
    const activeMenu = contentMenu.classList.contains('show');
    if (!menu && !btn && activeMenu) {
        toggle();
        removeClass();
    };
});