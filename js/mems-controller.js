'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx;

function onEditInit(imgIdx) {
    gCtx = gElCanvas.getContext('2d');
    renderImage(imgIdx);

    document.querySelector('.edit-page').style.display = "flex";
    document.querySelector('.gallery-page').style.display = "none";
}

function cleanCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderImage(imgIdx);
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme'
}

function setText2(text, x = 5, y = 5) {
    gCtx.lineWidth = '1';
    gCtx.textAlign = getAlign();
    gCtx.strokeStyle = getColor1();
    gCtx.fillStyle = getColor2();
    var gTextSize = getSize();
    gCtx.font = `${gTextSize}rem Impact`;
    var { x, y } = getLoc();
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function renterMem() {
    renderText();
    gCtx = gElCanvas.getContext('2d');
}

function renderText() {
    var lines = getLines();
    lines.forEach(line => {
        setText2(line.txt);
    });
}

function onSetChangeLine(dir) {
    setChangeLine(dir);
}

/* on set func */

function onSetColor1(value) {
    setColor1(value);
}

function onSetColor2(value) {
    setColor2(value);
}

function onSetAlignText(align) {
    setAlign(align);
}

function onSetFontSize(diff) {
    setSize(diff);
}

function onSetText(text) {
    setText(text);
}