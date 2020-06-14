'use strict'

function onInit() {
    renderImages();
    renderSearchWord();
    document.querySelector('.edit-page').style.display = "none";
    document.querySelector('.gallery-page').style.display = "block";
    document.querySelector('.my-mems').style.display = "none";
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
    var strHtmls = myMems.map(function (memURL) {
        return `<img src="${memURL}">`
    })
    document.querySelector('.my-mems').innerHTML = strHtmls.join('');
    document.querySelector('.my-mems').style.display = "grid";
}

function onSearch(txt) {
    renderImages(txt);
    setSearchWords(txt);
    renderSearchWord();
}

function renderSearchWord() {
    var keyWords = getKeyWords();
    var strHtml = '';
    for (var word in keyWords) {
        var fontSize = (keyWords[word] < 10) ? keyWords[word] * 0.3 : 4;
        strHtml += `<div onclick="searchWord('${word}')" style="font-size:${fontSize}rem">${word}</div>`;
    }
    document.querySelector('.search-words').innerHTML = strHtml;
}

function searchWord(word) {
    document.getElementById('search').value = word;
    onSearch(word);
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

/* nav */

function onGalleryNav() {
    onInit();
    toggleMenu();
}

function onMemNav() {
    renderMyMems();
    toggleMenu();
}