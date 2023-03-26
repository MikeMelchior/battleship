const index = require('./index')
const gameLoop = require('./game-loop')
// require('./styles.css');

import './styles.css'

const main = document.createElement('div');
main.className = 'main'
document.body.appendChild(main);

const gameArea = document.createElement('div');
gameArea.className = 'game-area';
main.append(gameArea)



const createGameBoard = (board) => {
    let element = document.createElement('div');
    element.className = 'game-board';

    let rowCount = 0
    for (let row of board) {
        let squareCount = 0;
        let gameRow = document.createElement('div');
        gameRow.className = 'row'
        for (let square of row) {
            let gameSquare = document.createElement('div');
            gameSquare.className = `${rowCount}, ${squareCount}`;
            gameSquare.addEventListener('click', (e) => {
                console.log(e.target.className)
            }) 
            gameRow.append(gameSquare);
            squareCount++
        }
        element.append(gameRow)
        rowCount++;
        squareCount = 0;
    }

    gameArea.append(element);
}




export {
    createGameBoard
}