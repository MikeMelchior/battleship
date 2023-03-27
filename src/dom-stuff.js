const index = require('./index')

import './styles.css'

const header = document.createElement('header');
header.className = 'header';
const headTitle = document.createElement('p');
headTitle.textContent = 'Battleship';
header.append(headTitle)
document.body.appendChild(header)

const main = document.createElement('div');
main.className = 'main'
document.body.appendChild(main);

const gameArea = document.createElement('div');
gameArea.className = 'game-area';
main.append(gameArea)


const newGameWindow = () => {
    // enter name
    // place ships
    // reset button
    // start button
}


const createGameBoard = (board, infoString) => {
    let element = document.createElement('div');
    element.className = `game-board ${infoString.split(' ').join('-')}`;

      // info / board title
    let info = document.createElement('p');
    info.textContent = infoString;
    element.append(info)

      // use rowCount and squareCount variables to give each square
      // a 'coord' attribute that corresponds to board
    let rowCount = 0
    for (let row of board) {
        let squareCount = 0;
        let gameRow = document.createElement('div');
        gameRow.className = 'row'
        for (let square of row) {
            let gameSquare = document.createElement('div');
            gameSquare.classList.add('square');
            gameSquare.setAttribute('coord', `${rowCount}, ${squareCount}`)
            gameRow.append(gameSquare);
            squareCount++
        }
        element.append(gameRow)
        rowCount++;
        squareCount = 0;
    }

    gameArea.append(element);
}

const getSquaresCoordinates = (board) => {
    let squares = document.querySelectorAll(`.${board} > div > div`)
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            console.log(e.target.attributes[0].nodeValue)
            return e.target.attributes[0].nodeValue;
        })
    })
}

const highlightShips = (board) => {
    let squares = document.querySelectorAll('.Player-1-Board .square');
    squares.forEach(square => {
        let y = square.attributes[1].nodeValue[0];
        let x = square.attributes[1].nodeValue[3];
        if (board[y][x] !== '') {
            square.style.backgroundColor = 'gray'
        }    
    })

}



export {
    createGameBoard,
    highlightShips,
    getSquaresCoordinates
}