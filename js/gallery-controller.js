'use strict'

function onInit() {
    renderImages();
    renderSearchWord();
    document.querySelector('.edit-page').style.display = "none";
    document.querySelector('.gallery-page').style.display = "block";
    document.querySelector('.my-mems').style.display = "none";
}

function onSearch(txt) {
    renderImages(txt);
    renderSearchWord();
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
    document.querySelector('.my-mems').style.display = "grid";
}

function renderSearchWord() {
    var keyWords = getKeyWords();
    var strHtml = '';
    for (var word in keyWords) {
        strHtml += `<div class="size-${keyWords[word]}" onclick="searchWord('${word}')">${word}</div>`;
        var elWord = document.querySelector(`.size-${keyWords[word]}`)
        if (elWord) elWord.style.fontSize = `${keyWords[word]}rem`;
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