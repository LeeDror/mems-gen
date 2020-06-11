'use strict'

function onInit() {
    renderImages();
    document.querySelector('.edit-page').style.display = "none";
    document.querySelector('.gallery-page').style.display = "block";
    document.querySelector('.my-mems').style.display = "none";
}

function onSearch(txt) {
    setSearchWords(txt);
    renderImages(txt);
}

function renderImages(txt) {
    var images = getImages(txt);
    var strHtmls = images.map(function (image) {
        return `<img src="${image.url}" alt="" onclick="onEditInit(${image.id})">`
    })
    document.querySelector('.images-gallery').innerHTML = strHtmls.join('');
}

function renderMyMems() {
    var myMems = getMems();
    document.querySelector('.gallery-page').style.display = "none";
    document.querySelector('.edit-page').style.display = "none";
    var strHtmls = myMems.map(function (mem) {
        return `<img src="${mem}">`
    })
    document.querySelector('.my-mems').innerHTML = strHtmls.join('');
    document.querySelector('.my-mems').style.display = "flex";
}