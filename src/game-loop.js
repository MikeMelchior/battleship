const index = require('./index');
import * as domStuff from './dom-stuff'


const newGame = () => {

      // setup
    let playerOne = index.Player('Player One');
    let computer = index.Player('Computer', true);
    let playerBoard = index.gameBoard();
    let computerBoard = index.gameBoard();

    //    // place ships automatically for now
        let autoPlace = (board) => {
            let autoCoord = [0, 0]
            for (let ship in index.ships) {
                board.placeShip(index.ships[ship], autoCoord)
                autoCoord[0]++
            }
        }
        autoPlace(playerBoard)
        autoPlace(computerBoard);
    // ----------------------------------------
    


    let gameHasWinner = true;
    let playerOneTurn = true;



    
    
    
    
    

      // logic for game loop ** switch gameHasWinner flag to adjust;
    while (!gameHasWinner) {
        // player attack
        let attack = Promise.resolve(playerOne.attack()) 
            .then(coord => {
                  // remove spaces and commas
                coord = coord.split(' ').join('').split(',');
                  // turn strings into nums
                coord.forEach(element => {
                    coord[coord.indexOf(element)] = parseInt(element)
                });
                return coord;
            })
        .then(coord => {
            computerBoard.receiveAttack(coord);
            if (computerBoard.allShipsSunk()) gameHasWinner = true;
        })
         
        // check if winner;

        // comp attack;

        // check if winner;
        gameHasWinner = true;

    }

    
    

    return {
        get playerBoard() {
            return playerBoard
        },
        get computerBoard() {
            return computerBoard
        }
    }

}



async function game() {
    let gameOne = newGame();
    await domStuff;
    domStuff.createGameBoard(gameOne.computerBoard.board)

}

game()


export {
    newGame
}