'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 };


var gImgs = [
    { id: 1, url: 'img/images/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/images/2.jpg', keywords: ['sad'] },
    { id: 3, url: 'img/images/3.jpg', keywords: ['funny'] },
    { id: 4, url: 'img/images/4.jpg', keywords: ['funny'] },
    { id: 5, url: 'img/images/5.jpg', keywords: ['funny'] },
    { id: 6, url: 'img/images/6.jpg', keywords: ['funny'] },
    { id: 7, url: 'img/images/7.jpg', keywords: ['funny'] },
    { id: 8, url: 'img/images/8.jpg', keywords: ['funny'] },
    { id: 9, url: 'img/images/9.jpg', keywords: ['funny'] },
    { id: 10, url: 'img/images/10.jpg', keywords: ['funny'] },
    { id: 11, url: 'img/images/11.jpg', keywords: ['funny'] },
    { id: 12, url: 'img/images/12.jpg', keywords: ['funny'] },
    { id: 13, url: 'img/images/13.jpg', keywords: ['funny'] },
    { id: 14, url: 'img/images/14.jpg', keywords: ['funny'] },
    { id: 15, url: 'img/images/15.jpg', keywords: ['funny'] },
    { id: 16, url: 'img/images/16.jpg', keywords: ['funny'] },
    { id: 17, url: 'img/images/17.jpg', keywords: ['funny'] },
    { id: 18, url: 'img/images/18.jpg', keywords: ['funny'] },
];


function getImages(txt) {
    if (!txt) return gImgs;
    return gImgs.filter(image => image.keywords.some(keyword => keyword.search(txt)));
}
