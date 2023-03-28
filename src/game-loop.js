const index = require('./index');
import * as domStuff from './dom-stuff'

let checkStatus;

const newGame = () => {
    let playerOne = index.Player('Player-One', false, true);
    let computer = index.Player('Computer', true);
    let playerOneGame = index.gameBoard();
    let computerGame = index.gameBoard();
    let playerBoard = playerOneGame.board;
    let computerBoard = computerGame.board;

    


        // auto place ships for now
        playerOneGame.randomlyPlaceShips();
        computerGame.randomlyPlaceShips();




      // create player game board
    let firstGrid = document.querySelector('.first-grid');
    domStuff.createBoard(firstGrid, playerBoard)
    
      // create computer game board
    let secondGrid = document.querySelector('.second-grid');
    domStuff.createBoard(secondGrid, computerBoard)

      // render ships on player one
    let playerCells = document.querySelectorAll('.first-grid .cell')
    domStuff.renderShips(playerCells, playerBoard)

      //add listeners
    let targetCells = document.querySelectorAll('.second-grid .cell');
    domStuff.addListeners(targetCells, playerOne, computerGame);

    checkStatus = setInterval(() => {
        if (!playerOne.isPlayersTurn) {
            computer.attack(null, playerOneGame)
            domStuff.updateBoard(playerCells, playerBoard)
            playerOne.isPlayersTurn = true;
        }
    }, 1300)

    
}

window.onload = newGame();







