/** Preloader */
let
    images = document.images,
    imagesTotal = images.length,
    imagesLoad = 0,
    preloader = document.getElementById('preloader'),
    perc = document.getElementById('load');

for (let i = 0; i < imagesTotal; i++) {
    var image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
};

function image_loaded() {
    imagesLoad++;
    perc.innerHTML = (((100 / imagesTotal) * imagesLoad) << 0) + '%'
    if (imagesLoad >= imagesTotal) {
        setTimeout(function() {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1500);
    }
};