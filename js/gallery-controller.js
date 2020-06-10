'use strict'



function onInit() {
    renderImages();
    document.querySelector('.edit-page').style.display = "none";
    document.querySelector('.gallery-page').style.display = "block";
}

function onSearch(txt) {
    // setSearchWords();
    renderImages(txt);
}

function renderImages(txt) {
    var images = getImages(txt);
    var strHtmls = images.map(function (image) {
        return `<img src="${image.url}" alt="" onclick="onEditInit(${image.id})">`
    })
    document.querySelector('.images-gallery').innerHTML = strHtmls.join('');
}
