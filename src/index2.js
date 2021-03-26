// window.addEventListener('details', function (event) {
//     alert(`Получено ${event.data} из ${event.origin}`);
// });

// var strGET = window.location.search;
// console.log(strGET);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#formC");

    let name = document.querySelector('#name')
    let details = document.querySelector('#details')
    console.log(name);
    console.log(details);

    let nameLoc = localStorage.getItem('name', name)
    let detailsLoc = localStorage.getItem('details', details)


    function sbr(str, params) {
        if (str.includes('отД-')) {
            let x = str.slice(4, str.length)
            params.value = 'отР-' + x
        } else {
            params.value = 'отР-' + str
        }
    }

    sbr(nameLoc, name);
    sbr(detailsLoc, details);

    name.value = 'отР-' + nameLoc
    details.value = 'отР-' + detailsLoc
    form.onsubmit = function(e) {
        e.preventDefault();
        localStorage.setItem('name', name.value)
        localStorage.setItem('details', details.value)
        document.location.href = "./index.html"
    };

    // var params = window
    //    .location
    //    .search
    //    .replace('?', '')
    //    .split('&')
    //    .reduce(
    //       function (p, e) {
    //          var a = e.split('=');
    //          p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    //          return p;
    //       },
    //       {}
    //    );
    // console.log(window.location);
    // console.log(params['details']);
    // console.log(params['name']);
    // localStorage.setItem('name', params['name'])
}, false);