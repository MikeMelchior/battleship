












































// import './styles.css'

// const header = document.createElement('header');
// header.className = 'header';
// const headTitle = document.createElement('p');
// headTitle.textContent = 'Battleship';
// header.append(headTitle)
// document.body.appendChild(header)

// const main = document.createElement('div');
// main.className = 'main'
// document.body.appendChild(main);

// const gameArea = document.createElement('div');
// gameArea.className = 'game-area';
// main.append(gameArea)


// const newGameWindow = () => {
//     // enter name
//     // place ships
//     // reset button
//     // start button
// }


// const createGameBoard = (board, infoString) => {
//     let element = document.createElement('div');
//     element.className = `game-board ${infoString.split(' ').join('-')}`;

//       // info / board title
//     let info = document.createElement('p');
//     info.textContent = infoString;
//     element.append(info)

//       // use rowCount and squareCount variables to give each square
//       // a 'coord' attribute that corresponds to board
//     let rowCount = 0
//     for (let row of board) {
//         let squareCount = 0;
//         let gameRow = document.createElement('div');
//         gameRow.className = 'row'
//         for (let square of row) {
//             let gameSquare = document.createElement('div');
//             gameSquare.classList.add('square');
//             gameSquare.setAttribute('coord', `${rowCount}, ${squareCount}`)
//             gameRow.append(gameSquare);
//             squareCount++
//         }
//         element.append(gameRow)
//         rowCount++;
//         squareCount = 0;
//     }

//     gameArea.append(element);
// }


// const updateBoard = () => {

// }


// const returnCoords = (square) =>{ 
//     return square.getAttribute('coord');
// }

// const addAttackListener = (attackee, attacker) => {
//     let squares = document.querySelectorAll(`.${attackee} > div > div`)
//     squares.forEach(square => {
//         square.addEventListener('click', () => {
//             let coords = returnCoords(square);
            
//         })
//     })
// }



// const highlightShips = (board, player) => {
//     let squares = document.querySelectorAll(`.${player} .square`);
//     squares.forEach(square => {
//         let y = square.getAttribute('coord')[0];
//         let x = square.getAttribute('coord')[3];
//         if (board[y][x] !== '') {
//             square.style.backgroundColor = 'gray'
//         }    
//     })
// }






// export {
//     createGameBoard,
//     highlightShips,
//     addAttackListener
// }