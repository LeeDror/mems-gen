'use strict'
const KEY = 'myMems';
var gMemes = [];
var gElCanvas = document.getElementById('my-canvas');
var gMeme = {};

function initCurMem(imgIdx) {
    gMeme.selectedImgId = imgIdx;
    gMeme.selectedLineIdx = 0;
    gMeme.lines = [
        {
            txt: '', size: 2, align: 'center', color1: 'black', color2: 'white',
            x: (gElCanvas.width / 2), y: (gElCanvas.height / 6)
        },
        {
            txt: '', size: 2, align: 'center', color1: 'black', color2: 'white',
            x: (gElCanvas.width / 2), y: (gElCanvas.height - (gElCanvas.height / 6))
        }
    ]
}

function renderImage(imgIdx) {
    var elImg = new Image();
    elImg.src = `./img/images/${imgIdx}.jpg`;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText();
    }
}

function saveMem(myMem) {
    gMemes.push(myMem);
    saveToStorage(KEY, gMemes);
}

function cleanLines() {
    gMeme.lines.forEach(line => line.txt = '')
}

/* get func */

function getMeme() {
    return gMeme;
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

