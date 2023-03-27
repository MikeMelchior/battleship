const index = require('./index');
import * as domStuff from './dom-stuff'


const gameLoop = () => {

      // setup
    let playerOne = index.Player('Player One');
    let PC = index.Player('Computer', true);
    let player = index.gameBoard();
    let computer = index.gameBoard();
    let playerBoard = player.board;
    let computerBoard = computer.board;
    
    

      // auto random place ships for now;
    player.randomlyPlaceShips();
    computer.randomlyPlaceShips();

    



    domStuff.createGameBoard(playerBoard, 'Player 1 Board');
    domStuff.createGameBoard(computerBoard, 'Computer Board');

    console.log(playerBoard)

    domStuff.highlightShips(playerBoard);
    domStuff.getSquaresCoordinates('Computer-Board')


    let gameHasWinner = true;
    let playerOneTurn = true;



    
    
    
    
   

    while (!gameHasWinner) {
    // player attack

    if (playerOneTurn) {
        try {
            let attack = playerOne.attack()
        } catch (e) {
            console.log(e)
        }
        

        // .then(coord => {
        //       // remove spaces and commas
        //     coord = coord.split(' ').join('').split(',');
        //       // turn strings into numbers
        //     coord.forEach(element => {
        //         coord[coord.indexOf(element)] = parseInt(element)
        //     });
        //     return coord;
        // })
        // .then(coord => {
        //     computer.receiveAttack(coord);
        //     if (computer.allShipsSunk()) gameHasWinner = true;
        // })
    }

        
    // check if winner;

    // comp attack;

    // check if winner;
    gameHasWinner = true;

    }
    


      // logic for game loop ** switch gameHasWinner flag to adjust;
    

    
    

    return {
        get player() {
            return player
        },
        get computer() {
            return computer
        }, 
    }

}

// auto call
gameLoop();


// async function game() {
//     let gameOne = newGame();
//     await domStuff;
//     domStuff.createGameBoard(gameOne.computerBoard)

// }

// game()

