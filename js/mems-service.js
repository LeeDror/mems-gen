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
            txt: '', size: 2, align: 'center', strokeColor: 'black', fillColor: 'white', font: 'Impact',
            x: (gElCanvas.width / 2), y: (gElCanvas.height / 6)
        },
        {
            txt: '', size: 2, align: 'center', strokeColor: 'black', fillColor: 'white', font: 'Impact',
            x: (gElCanvas.width / 2), y: (gElCanvas.height - (gElCanvas.height / 6))
        }
    ]
}

function saveMem(myMem) {
    gMemes.push(myMem);
    saveToStorage(KEY, gMemes);
}

function cleanLines() {
    gMeme.lines.forEach(line => line.txt = '')
}

function addLine() {
    var linesLength = gMeme.lines.length;
    if (gMeme.lines.length > 5) return;
    gMeme.lines[linesLength] = gMeme.lines[linesLength - 1]
    gMeme.lines[linesLength - 1] = {
        txt: '', size: 2, align: 'center', strokeColor: 'black', fillColor: 'white', font: 'Impact',
        x: (gElCanvas.width / 2), y: (gElCanvas.height / 6 * linesLength)
    }
    gMeme.selectedLineIdx = linesLength - 1;
}

/* drag */

function findLineIndex(x, y, ctx) {
    var index = gMeme.lines.findIndex(line => (
        x > line.x - ctx.measureText(line.txt).width / 2 &&
        x < line.x + ctx.measureText(line.txt).width / 2 &&
        y > line.y - parseInt(ctx.font) / 2 &&
        y < line.y + parseInt(ctx.font) / 2))
    if (index !== -1) gMeme.selectedLineIdx = index;
    return index;
}

function updateCurrLine(x, y) {
    gMeme.lines[gMeme.selectedLineIdx].x = x;
    gMeme.lines[gMeme.selectedLineIdx].y = y;
}

/* get func */

function getMeme() {
    return gMeme;
}

/* set func */

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function setChangeLine(diff) {
    // first line or last line
    if (gMeme.selectedLineIdx === 0 && diff < 0) return;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1 && diff > 0) return;
    gMeme.selectedLineIdx += diff;
}

function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function setAlign(dir) {
    gMeme.lines[gMeme.selectedLineIdx].align = dir;
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color;
}

function setSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}


