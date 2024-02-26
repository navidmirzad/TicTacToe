"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JavaScript kører");
    makeBoardClickable();
}

function makeBoardClickable() {
    document.querySelector("#board")
    .addEventListener("click", boardClicked);
}

function boardClicked(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    console.log(`Clicked on row: ${row} col: ${col}`);
}



