const index = require('./index');
import * as domStuff from './dom-stuff'

































// const vsComputer = () => {

//       // setup
//     let playerOne = index.Player('Player-One');
//     let PC = index.Player('Computer', true);
//     let player = index.gameBoard();
//     let computer = index.gameBoard();
//     let playerBoard = player.board;
//     let computerBoard = computer.board;
    
    
//       // auto random place ships for now;
//     player.randomlyPlaceShips();
//     computer.randomlyPlaceShips();

//       // display boards
//     domStuff.createGameBoard(playerBoard, 'Player-One');
//     domStuff.createGameBoard(computerBoard, 'Computer');

//     console.log(
//         player, 
//         computer
//         )

//       // highlight ships
//     domStuff.highlightShips(playerBoard, 'Player-One');

//       // add event listeners to computer board for attacking;
//     domStuff.addAttackListener('Computer', playerOne)


//     let playerOneTurn = true;
//     let gameHasWinner = false;
//     let gameWinner = null;

//     if (player.allShipsSunk() || computer.allShipsSunk()) {
//         //
//         gameHasWinner = true;
//     } 

//     return {
//         gameHasWinner,
//         playerOneTurn
//     }
// }

// // temporary auto call
// vsComputer();

// const gameLoop = () => {


//     if (!vsComputer.gameHasWinner) {
            
//         // player attack
//         if (vsComputer.playerOneTurn) {
//             console.log('hello')


//         } else if (!playerOneTurn) {

//             // computer attack
//         }
        



//         gameHasWinner = true;

//     }



// }








