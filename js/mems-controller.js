'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx;
var gDrag = false;

function onEditInit(imgIdx) {
    gCtx = gElCanvas.getContext('2d');
    initCurMem(imgIdx);
    renderMem(imgIdx);
    document.getElementById('text1').value = '';
    document.querySelector('.edit-page').style.display = "flex";
    document.querySelector('.gallery-page').style.display = "none";
}

function renderMem() {
    renderImage(getMeme().selectedImgId);
    renderText();
}

function renderImage(imgIdx) {
    var elImg = new Image();
    elImg.src = `./img/images/${imgIdx}.jpg`;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText();
    }
}

function renderText() {
    var meme = getMeme();
    meme.lines.forEach(line => {
        gCtx.lineWidth = '1';
        gCtx.textAlign = line.align;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.fillColor;
        gCtx.font = `${line.size}rem ${line.font}`;
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    });
}

function renderCurLine() {
    var meme = getMeme();
    document.getElementById('text1').value = meme.lines[meme.selectedLineIdx].txt;
}

/* buttons */

function ocCleanCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    cleanLines();
    renderMem(getMeme().selectedImgId);
    renderCurLine();
}

function onSaveMem() {
    var myMem = gElCanvas.toDataURL("image/png");
    saveMem(myMem);
}

function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data;
    elLink.download = 'my_mem';
}

function onAddLine() {
    addLine();
    renderCurLine();
}

/* on set func */

function onSetFontFamily(value) {
    setFont(value);
    renderMem();
}

function onSetStrokeColor(value) {
    setStrokeColor(value);
    renderMem();
}

function onSetFillColor(value) {
    setFillColor(value);
    renderMem();
}

function onSetAlignText(align) {
    setAlign(align);
    renderMem();
}

function onSetFontSize(diff) {
    setSize(diff);
    renderMem();
}

function onSetText(text) {
    setText(text);
    renderMem();
}

function onSetChangeLine(diff) {
    setChangeLine(diff);
    renderCurLine();
}

// drag

function onMouseDown(event) {
    event.preventDefault();
    var index = findLineIndex(event.offsetX, event.offsetY, gCtx);
    if (index === -1) return;
    gDrag = true;
}

function onMouseMove(event) {
    if (!gDrag) return;
    updateCurrLine(event.offsetX, event.offsetY);
    renderMem();
}

function onMouseUp() {
    gDrag = false;
}
