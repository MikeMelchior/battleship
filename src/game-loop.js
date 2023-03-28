const index = require('./index');
import * as domStuff from './dom-stuff'

let loop;
let fps = 30;

window.onload = function() {
    setup()
    console.log('loaded');
    loop = setInterval(() => {
        update();
        render();
    }, 1000/fps);
}

const update = () => {

}

const render = () => {

}

// setup

async function setup () {
    let playerOne = index.Player('Player-One');
    let computer = index.Player('Computer', true);
    let playerGame = index.gameBoard();
    let computerGame = index.gameBoard();
    let playerBoard = playerGame.board;
    let computerBoard = computerGame.board;

    await domStuff;
    

        // auto place ships for now
        playerGame.randomlyPlaceShips();
        computerGame.randomlyPlaceShips();

    let firstGrid = document.querySelector('.first-grid');
    domStuff.createBoard(firstGrid, playerBoard)
    
    let secondGrid = document.querySelector('.second-grid');
    domStuff.createBoard(secondGrid, computerBoard)

    let playerCells = document.querySelectorAll('.first-grid .cell')
    domStuff.renderShips(playerCells, playerBoard)

}
    







