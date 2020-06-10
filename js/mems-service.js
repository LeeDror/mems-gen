'use strict'

var gElCanvas = document.getElementById('my-canvas');

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        { txt: '', size: 2, align: 'center', color1: 'black', color2: 'white', x: (gElCanvas.width / 2), y: (gElCanvas.height / 6) },
        { txt: '', size: 2, align: 'center', color1: 'black', color2: 'white', x: (gElCanvas.width / 2), y: (gElCanvas.height - (gElCanvas.height / 6)) }
    ]
}

function renderImage(imgIdx) {
    gMeme.selectedImgId = imgIdx;
    var elImg = new Image();
    elImg.src = `./img/images/${imgIdx}.jpg`;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    }
}


/* set func */

function setChangeLine(dir) {
    if (dir === 'up') gMeme.selectedLineIdx--;
    else gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0;
    if (gMeme.selectedLineIdx > 1) gMeme.selectedLineIdx = 1;
}

function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function setAlign(dir) {
    gMeme.lines[gMeme.selectedLineIdx].align = dir;
}

function setColor1(color) {
    gMeme.lines[gMeme.selectedLineIdx].color1 = color;
}

function setColor2(color) {
    gMeme.lines[gMeme.selectedLineIdx].color2 = color;
}

function setSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

/* get func */

function getLines() {
    return gMeme.lines;
}

function getColor1() {
    return gMeme.lines[gMeme.selectedLineIdx].color1;
}

function getColor2() {
    return gMeme.lines[gMeme.selectedLineIdx].color2;
}

function getAlign() {
    return gMeme.lines[gMeme.selectedLineIdx].align;
}

function getSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}

function getLoc() {
    return { x: gMeme.lines[gMeme.selectedLineIdx].x, y: gMeme.lines[gMeme.selectedLineIdx].y };
}