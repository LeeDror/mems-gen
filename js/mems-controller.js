'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx;

function onEditInit(imgIdx) {
    gCtx = gElCanvas.getContext('2d');
    initCurMem(imgIdx);
    renterMem(imgIdx);
    document.getElementById('text1').value = '';
    document.querySelector('.edit-page').style.display = "flex";
    document.querySelector('.gallery-page').style.display = "none";
}

function renterMem() {
    renderImage(getMeme().selectedImgId);
    renderText();
}

function renderText() {
    var meme = getMeme();
    meme.lines.forEach(line => {
        gCtx.lineWidth = '1';
        gCtx.textAlign = line.align;
        gCtx.strokeStyle = line.color1;
        gCtx.fillStyle = line.color2;
        var gTextSize = line.size;
        gCtx.font = `${gTextSize}rem Impact`;
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    });
}


function renderCurLine() {
    var meme = getMeme();
    document.getElementById('text1').value = meme.lines[meme.selectedLineIdx].txt;
}

function onSetChangeLine(dir) {
    setChangeLine(dir);
    renderCurLine();
}

function cleanCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    cleanLines();
    renterMem(getMeme().selectedImgId);
    renderCurLine();
}

function onSaveMem() {
    var myMem = gElCanvas.toDataURL("image/png");
    saveMem(myMem);
}

function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my_mem';
}

/* on set func */

function onSetColor1(value) {
    setColor1(value);
    renterMem();
}

function onSetColor2(value) {
    setColor2(value);
    renterMem();
}

function onSetAlignText(align) {
    setAlign(align);
    renterMem();
}

function onSetFontSize(diff) {
    setSize(diff);
    renterMem();
}

function onSetText(text) {
    setText(text);
    renterMem();
}

// drag
/*
function onMouseDown() {
    document.body.addEventListener("mousedown", function (event) {
        {
            document.body.addEventListener("mousemove", onMouseMove);
            document.body.addEventListener("mouseup", onMouseUp);
        };
    })
}

function onMouseMove(event) {
    var mem = getMeme();
    mem.lines[mem.selectedLineIdx].x = event.clientX;
    mem.lines[mem.selectedLineIdx].y = event.offsetY;   
}

function onMouseUp(event) {
    document.body.removeEventListener("mousemove", onMouseMove);
    document.body.removeEventListener("mouseup", onMouseUp);
    var meme = getMeme();
    renterMem(meme.selectedLineIdx);
}
*/