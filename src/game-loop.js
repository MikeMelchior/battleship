const index = require('./index');
import * as domStuff from './dom-stuff'

let loop;
let fps = 30;

window.onload = function() {
    let playerOne = index.Player('Player-One');
    let computer = index.Player('Computer', true);
    let playerOneGame = index.gameBoard();
    let computerGame = index.gameBoard();
    let playerBoard = playerOneGame.board;
    let computerBoard = computerGame.board;
    let playerOneTurn = true;

    

        // auto place ships for now
        playerOneGame.randomlyPlaceShips();
        computerGame.randomlyPlaceShips();

    let firstGrid = document.querySelector('.first-grid');
    domStuff.createBoard(firstGrid, playerBoard)
    
    let secondGrid = document.querySelector('.second-grid');
    domStuff.createBoard(secondGrid, computerBoard)

    let playerCells = document.querySelectorAll('.first-grid .cell')
    domStuff.renderShips(playerCells, playerBoard)

    //temp test
    let targetCells = document.querySelectorAll('.second-grid .cell');
    domStuff.attackListeners(targetCells, playerOne, computerGame);

    console.log(computerBoard)

    // setup()
    console.log('loaded');
    loop = setInterval(() => {
        update();
        render();
    }, 1000);
}

const update = () => {
    let firstGrid = document.querySelector('.first-grid');
    let secondGrid = document.querySelector('.second-grid');
    let playerCells = document.querySelectorAll('.first-grid .cell');
    let targetCells = document.querySelectorAll('.second-grid .cell');

    // console.log(setup.computerBoard)
    // domStuff.updateBoard(targetCells, setup.computerBoard)
}

const render = () => {

}

// setup

// function setup () {
    


//     return {
//         playerOne,
//         computer, 
//         playerOneGame, 
//         computerGame, 
//         playerBoard, 
//         computerBoard,

//         // get playerOne() {
//         //     return playerOne
//         // },
//         // get computer() {
//         //     return computer
//         // },
//         // get playerOneGame() {
//         //     return playerOneGame;
//         // },
//         // get computerGame() {
//         //     return computerGame;
//         // },
//         // get playerBoard() {
//         //     return playerBoard;
//         // },
//         // get computerBoard() {
//         //     return computerBoard;
//         // },
//     }

// }
    







