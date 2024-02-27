"use strict";

window.addEventListener("load", start);

// *************** CONTROLLER ***************

let currentplayer = 1;

function reload() {
    window.location.reload();
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", reload);

function start() {
    console.log("JavaScript kører");
    displayBoard();
    makeBoardClickable();
}

function selectCell(row, col) {
    if (readFromCell(row, col) === 0) {
        writeToCell(row, col, currentplayer);
        displayBoard();
        nextTurn();
        return true;
    } else {
        console.log(("That field is occupied!"));
        return false; 
    }
}

function nextTurn() {
    if (currentplayer === 1) {
        currentplayer = 2;
        computerTurn();
    } else if (currentplayer === 2) {
        currentplayer = 1;
        playerTurn();
    }
}

function playerTurn() {

}



function computerTurn() {
    const availableCells = [];
    if (readFromCell(0, 0) === 0) availableCells.push([0, 0]);
    if (readFromCell(0, 1) === 0) availableCells.push([0, 1]);
    if (readFromCell(0, 2) === 0) availableCells.push([0, 2]);
    if (readFromCell(1, 0) === 0) availableCells.push([1, 0]);
    if (readFromCell(1, 1) === 0) availableCells.push([1, 1]);
    if (readFromCell(1, 2) === 0) availableCells.push([1, 2]);
    if (readFromCell(2, 0) === 0) availableCells.push([2, 0]);
    if (readFromCell(2, 1) === 0) availableCells.push([2, 1]);
    if (readFromCell(2, 2) === 0) availableCells.push([2, 2]);

    if (availableCells.length === 0) {
        console.log("Game over! No available cells left");
    } else {
        const index = Math.floor(Math.random() * availableCells.length);
        const [row, col] = availableCells[index];
        selectCell(row, col);
    }
}


// *************** VIEW *********************

function makeBoardClickable() {
    document.querySelector("#board")
    .addEventListener("click", boardClicked);
}

function boardClicked(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    console.log(`Clicked on row: ${row} col: ${col}`);
    selectCell(row, col);
}

function displayBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const value = readFromCell(row, col);
            const cell = document
            .querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.textContent = value;

            switch(value) {
                case 0: cell.textContent = " "; break;
                case 1: cell.textContent = "X"; break;
                case 2: cell.textContent = "O"; break;
            }

        }
    }
}

// ****************** MODEL *********************

const model = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];



function writeToCell(row, col, value) {
    model[row][col] = value;
}

function readFromCell(row, col) {
    return model[row][col];
}
