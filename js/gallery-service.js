'use strict'

var gKeywords = { 'happy': 7, 'crazy': 1, 'sarcastic': 5 };

var gImgs = [
    { id: 1, url: 'img/images/1.jpg', keywords: ['happy', 'animal'] },
    { id: 2, url: 'img/images/2.jpg', keywords: ['sad', 'sarcastic', 'animal'] },
    { id: 3, url: 'img/images/3.jpg', keywords: ['funny', 'crazy', 'sad'] },
    { id: 4, url: 'img/images/4.jpg', keywords: ['happy', 'sad'] },
    { id: 5, url: 'img/images/5.jpg', keywords: ['funny', 'crazy', 'sarcastic'] },
    { id: 6, url: 'img/images/6.jpg', keywords: ['funny', 'sad'] },
    { id: 7, url: 'img/images/7.jpg', keywords: ['funny', 'crazy'] },
    { id: 8, url: 'img/images/8.jpg', keywords: ['funny', 'sarcastic', 'animal'] },
    { id: 9, url: 'img/images/9.jpg', keywords: ['happy', 'sarcastic'] },
    { id: 10, url: 'img/images/10.jpg', keywords: ['funny', 'animal'] },
    { id: 11, url: 'img/images/11.jpg', keywords: ['funny', 'sad', 'sad'] },
    { id: 12, url: 'img/images/12.jpg', keywords: ['happy', 'animal'] },
    { id: 13, url: 'img/images/13.jpg', keywords: ['happy', 'crazy', 'sad'] },
    { id: 14, url: 'img/images/14.jpg', keywords: ['funny', 'sad'] },
    { id: 15, url: 'img/images/15.jpg', keywords: ['funny', 'animal'] },
    { id: 16, url: 'img/images/16.jpg', keywords: ['funny', 'sarcastic'] },
    { id: 17, url: 'img/images/17.jpg', keywords: ['happy', 'funny'] },
    { id: 18, url: 'img/images/18.jpg', keywords: ['funny', 'sarcastic', 'animal'] },
];

function getImages(txt) {
    if (!txt) return gImgs;
    return gImgs.filter(image => image.keywords.some(keyword => keyword.includes(txt)))
}

function setSearchWords(txt) {
    if (!gImgs.filter(image => image.keywords.filter(keyword => keyword === txt))) return;
    if (!gKeywords[txt]) gKeywords[txt] = 1;
    else gKeywords[txt]++;
}

function getKeyWords() {
    return gKeywords;
}

function getMems() {
    return loadFromStorage('myMems');
}