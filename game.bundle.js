(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["game"],{

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ (() => {














































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

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_stuff__WEBPACK_IMPORTED_MODULE_0__);
const index = __webpack_require__(/*! ./index */ "./src/index.js");


































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










/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

let ships = {
    carrier: {
        name: 'Carrier',
        size: 5,
        code: 'Ca',
    },
    battleship: {
        name: 'Battleship',
        size: 4,
        code: 'Ba',
    },
    cruiser: {
        name: 'Cruiser',
        size: 3,
        code: 'Cr',
    },
    submarine: {
        name: 'Submarine',
        size: 3,
        code: 'Su',
    },
    destroyer: {
        name: 'Destroyer',
        size: 2,
        code: 'De',
    },
}

const shipFactory = (name, size) => {
    let shipName = name;
    let hits = 0;

    let hit = () => {
        hits++;
    }

    return {
        get shipName() {
            return shipName;
        },
        get hits() {
            return hits;
        },
        hit,
        get isSunk() {
            return size === hits;
        },
    }
}

const gameBoard = (length=10) => {

    let createBoard = () => {
        let board = [];
        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < length; j++) {
                row.push('');
            }
            board.push(row);
        }
        return board;
    }

    let board = createBoard(length);

    // board will consist of following markers: 
    // '' For empty square; // M for missed square;
    // X for hit // index of gamePieces array for ship
    
    let gamePieces = [];

    let storeShip = (ship) => {
        let newShip = shipFactory(ship.name, ship.size)
        gamePieces.push(newShip);
    }

    let placeShip = (ship, coord, horizontal=true) => {
          // check ship is being places within boundary of board
        if (horizontal && coord[1] + ship.size > length-1) return new Error('Please place ship within board');
        if (!horizontal && coord[0] + ship.size > length-1) return new Error('Please place ship within board');
        
        if (horizontal) {
              // loop to check if overlapping ships
            for (let i = coord[1]; i < coord[1] + ship.size; i++) {
                if (board[coord[0]][i] !== '') return new Error('Cannot overlap ships')
            }
            for (let i = coord[1]; i < coord[1] + ship.size; i++) {
                board[coord[0]][i] = gamePieces.length;
            }
            // else follow same directions but vertically;
        } else {
            for (let i = coord[0]; i < coord[0] + ship.size; i++) {
                if (board[i][coord[1]] !== '') return new Error ('Cannot overlap ships')
            }
            for (let i = coord[0]; i < coord[0] + ship.size; i++) {
                board[i][coord[1]] = gamePieces.length;
            }

        }
          // store ship in game pieces array
        storeShip(ship);
        return true;
    }

    let randomlyPlaceShips = () => {
        for (let ship in ships) {
            placed = false;
            let x = getRandomCoords();
            let y = coinFlip();
            while (!placed)
              // if ship get placed, exit while loop;
            if (placeShip(ships[ship], x, y) == true) {
                placeShip(ships[ship], x, y);
                placed = true;
              // else get new coordinates and boolean and try again;
            } else {
                x = getRandomCoords();
                y = coinFlip();
            }
        }
    }

    let coinFlip = () => {
        if (Math.random() > 0.5) return true;
        return false;
    }

    let receiveAttack = (coord) => {
        let cell = board[coord[0]][coord[1]];
          // check board at argument coord and return corresponding value;
        if (cell === '') return 'M';  // M for miss
        if (cell !== '') {
            gamePieces[cell].hit();
            board[coord[0]][coord[1]] = 'X';
            return 'X'  // X for hit
        }
    }

      // check if all ships have been sunk;
    let allShipsSunk = () => {
        for (let piece of gamePieces) {
            if (piece.isSunk === false) return false;
        }
        return true;
    }

      // function to check move is valid
    let isMoveValid = (coord) => {
        if (board[coord[0]][coord[1]] !== 'M'
            && board[coord[0]][coord[1]] !== 'X'
            && coord[0] < 10
            && coord[1] < 10
            && coord[0] >= 0
            && coord[1] >= 0) return true;
        return false;
    }



    

      // 0 - n random number generator
    let rng = (n) => {
        return Math.floor(Math.random() * n)
    }
      // use rng to create random coords
    let getRandomCoords = () => {
        return [rng(10), rng(10)]
    }

    return { 
        get board() {
            return board;
        },
        gamePieces,
        placeShip,
        receiveAttack,
        allShipsSunk,
        isMoveValid,
        getRandomCoords,
        randomlyPlaceShips
    }
}

const Player = (name, computer=false) => {

    let  attack = (coord) => {
          // hit flag used to determine if smart move should be made;
        let hit = false; 

        if (!computer) {
            console.log('attacked')
            // logic for player attack;
            return coord;
        } 

        //   // store array of 'smart' moves if computer gets a hit
        // let smartMoves = [];
        
        // // on a hit, push all adjacent unplayed coordinates into smartMoves Arr;
        // let storeSmartMoves = (hitCoord) => {
        //     let moves = [];
        //     let y = hitCoord[0];
        //     let x = hitCoord[1];
        //     moves.push([y++, x++]);
        //     moves.push([y++, x--]);
        //     moves.push([y--, x++]);
        //     moves.push([y--, x--]);
        //     moves.forEach(move => {
        //         if (board.isMoveValid(move)) {
        //             smartMoves.push(move);
        //         }
        //     })
        // }

          // computer AI logic;
        if (computer) {
            

            //   // if smart moves exist, use them, if not, get random coordinate
            // if (smartMoves.length > 0) {
            //     let randomSmartMove = Math.floor(Math.random() * smartMoves.length);
            //     let smartMove = smartMoves.splice(randomSmartMove, 1);
                
            //     return smartMove;
                

                
            // } else {
                // store a random move in x;
                // let x = board.getRandomCoords();

                // // if 'random' move has already been made, create another pair of randoms coords
                // while(board[x[0]][x[1]] === 'X' || board[x[0]][x[1]] === 'M') {
                //     x = board.getRandomCoords();
                // }

                // return x;
                
            //     // if the move is a hit store smart moves;
            //     if (board[x[0]][x[1]] !== '') {
            //         hit = true;
            //         storeSmartMoves(x);
            //     }
            // }
        } 
    }

    return {
        name, 
        attack,

    }
}

module.exports = {
    ships,
    shipFactory,
    gameBoard,
    Player
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game-loop.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlDQUF5QyxnQ0FBZ0M7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVMsSUFBSSxZQUFZO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7Ozs7QUFJQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEpBLGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0N2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4vLyBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4vLyBjb25zdCBoZWFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vLyBoZWFkVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG4vLyBoZWFkZXIuYXBwZW5kKGhlYWRUaXRsZSlcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4vLyBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuLy8gY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGdhbWVBcmVhLmNsYXNzTmFtZSA9ICdnYW1lLWFyZWEnO1xuLy8gbWFpbi5hcHBlbmQoZ2FtZUFyZWEpXG5cblxuLy8gY29uc3QgbmV3R2FtZVdpbmRvdyA9ICgpID0+IHtcbi8vICAgICAvLyBlbnRlciBuYW1lXG4vLyAgICAgLy8gcGxhY2Ugc2hpcHNcbi8vICAgICAvLyByZXNldCBidXR0b25cbi8vICAgICAvLyBzdGFydCBidXR0b25cbi8vIH1cblxuXG4vLyBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoYm9hcmQsIGluZm9TdHJpbmcpID0+IHtcbi8vICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYGdhbWUtYm9hcmQgJHtpbmZvU3RyaW5nLnNwbGl0KCcgJykuam9pbignLScpfWA7XG5cbi8vICAgICAgIC8vIGluZm8gLyBib2FyZCB0aXRsZVxuLy8gICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLy8gICAgIGluZm8udGV4dENvbnRlbnQgPSBpbmZvU3RyaW5nO1xuLy8gICAgIGVsZW1lbnQuYXBwZW5kKGluZm8pXG5cbi8vICAgICAgIC8vIHVzZSByb3dDb3VudCBhbmQgc3F1YXJlQ291bnQgdmFyaWFibGVzIHRvIGdpdmUgZWFjaCBzcXVhcmVcbi8vICAgICAgIC8vIGEgJ2Nvb3JkJyBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0byBib2FyZFxuLy8gICAgIGxldCByb3dDb3VudCA9IDBcbi8vICAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpIHtcbi8vICAgICAgICAgbGV0IHNxdWFyZUNvdW50ID0gMDtcbi8vICAgICAgICAgbGV0IGdhbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAgICAgZ2FtZVJvdy5jbGFzc05hbWUgPSAncm93J1xuLy8gICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygcm93KSB7XG4vLyAgICAgICAgICAgICBsZXQgZ2FtZVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICAgICAgZ2FtZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbi8vICAgICAgICAgICAgIGdhbWVTcXVhcmUuc2V0QXR0cmlidXRlKCdjb29yZCcsIGAke3Jvd0NvdW50fSwgJHtzcXVhcmVDb3VudH1gKVxuLy8gICAgICAgICAgICAgZ2FtZVJvdy5hcHBlbmQoZ2FtZVNxdWFyZSk7XG4vLyAgICAgICAgICAgICBzcXVhcmVDb3VudCsrXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxlbWVudC5hcHBlbmQoZ2FtZVJvdylcbi8vICAgICAgICAgcm93Q291bnQrKztcbi8vICAgICAgICAgc3F1YXJlQ291bnQgPSAwO1xuLy8gICAgIH1cblxuLy8gICAgIGdhbWVBcmVhLmFwcGVuZChlbGVtZW50KTtcbi8vIH1cblxuXG4vLyBjb25zdCB1cGRhdGVCb2FyZCA9ICgpID0+IHtcblxuLy8gfVxuXG5cbi8vIGNvbnN0IHJldHVybkNvb3JkcyA9IChzcXVhcmUpID0+eyBcbi8vICAgICByZXR1cm4gc3F1YXJlLmdldEF0dHJpYnV0ZSgnY29vcmQnKTtcbi8vIH1cblxuLy8gY29uc3QgYWRkQXR0YWNrTGlzdGVuZXIgPSAoYXR0YWNrZWUsIGF0dGFja2VyKSA9PiB7XG4vLyAgICAgbGV0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHthdHRhY2tlZX0gPiBkaXYgPiBkaXZgKVxuLy8gICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuLy8gICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgY29vcmRzID0gcmV0dXJuQ29vcmRzKHNxdWFyZSk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuLy8gfVxuXG5cblxuLy8gY29uc3QgaGlnaGxpZ2h0U2hpcHMgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuLy8gICAgIGxldCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyfSAuc3F1YXJlYCk7XG4vLyAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4vLyAgICAgICAgIGxldCB5ID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnY29vcmQnKVswXTtcbi8vICAgICAgICAgbGV0IHggPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdjb29yZCcpWzNdO1xuLy8gICAgICAgICBpZiAoYm9hcmRbeV1beF0gIT09ICcnKSB7XG4vLyAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknXG4vLyAgICAgICAgIH0gICAgXG4vLyAgICAgfSlcbi8vIH1cblxuXG5cblxuXG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgY3JlYXRlR2FtZUJvYXJkLFxuLy8gICAgIGhpZ2hsaWdodFNoaXBzLFxuLy8gICAgIGFkZEF0dGFja0xpc3RlbmVyXG4vLyB9IiwiY29uc3QgaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5pbXBvcnQgKiBhcyBkb21TdHVmZiBmcm9tICcuL2RvbS1zdHVmZidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IHZzQ29tcHV0ZXIgPSAoKSA9PiB7XG5cbi8vICAgICAgIC8vIHNldHVwXG4vLyAgICAgbGV0IHBsYXllck9uZSA9IGluZGV4LlBsYXllcignUGxheWVyLU9uZScpO1xuLy8gICAgIGxldCBQQyA9IGluZGV4LlBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbi8vICAgICBsZXQgcGxheWVyID0gaW5kZXguZ2FtZUJvYXJkKCk7XG4vLyAgICAgbGV0IGNvbXB1dGVyID0gaW5kZXguZ2FtZUJvYXJkKCk7XG4vLyAgICAgbGV0IHBsYXllckJvYXJkID0gcGxheWVyLmJvYXJkO1xuLy8gICAgIGxldCBjb21wdXRlckJvYXJkID0gY29tcHV0ZXIuYm9hcmQ7XG4gICAgXG4gICAgXG4vLyAgICAgICAvLyBhdXRvIHJhbmRvbSBwbGFjZSBzaGlwcyBmb3Igbm93O1xuLy8gICAgIHBsYXllci5yYW5kb21seVBsYWNlU2hpcHMoKTtcbi8vICAgICBjb21wdXRlci5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuLy8gICAgICAgLy8gZGlzcGxheSBib2FyZHNcbi8vICAgICBkb21TdHVmZi5jcmVhdGVHYW1lQm9hcmQocGxheWVyQm9hcmQsICdQbGF5ZXItT25lJyk7XG4vLyAgICAgZG9tU3R1ZmYuY3JlYXRlR2FtZUJvYXJkKGNvbXB1dGVyQm9hcmQsICdDb21wdXRlcicpO1xuXG4vLyAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICAgIHBsYXllciwgXG4vLyAgICAgICAgIGNvbXB1dGVyXG4vLyAgICAgICAgIClcblxuLy8gICAgICAgLy8gaGlnaGxpZ2h0IHNoaXBzXG4vLyAgICAgZG9tU3R1ZmYuaGlnaGxpZ2h0U2hpcHMocGxheWVyQm9hcmQsICdQbGF5ZXItT25lJyk7XG5cbi8vICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gY29tcHV0ZXIgYm9hcmQgZm9yIGF0dGFja2luZztcbi8vICAgICBkb21TdHVmZi5hZGRBdHRhY2tMaXN0ZW5lcignQ29tcHV0ZXInLCBwbGF5ZXJPbmUpXG5cblxuLy8gICAgIGxldCBwbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbi8vICAgICBsZXQgZ2FtZUhhc1dpbm5lciA9IGZhbHNlO1xuLy8gICAgIGxldCBnYW1lV2lubmVyID0gbnVsbDtcblxuLy8gICAgIGlmIChwbGF5ZXIuYWxsU2hpcHNTdW5rKCkgfHwgY29tcHV0ZXIuYWxsU2hpcHNTdW5rKCkpIHtcbi8vICAgICAgICAgLy9cbi8vICAgICAgICAgZ2FtZUhhc1dpbm5lciA9IHRydWU7XG4vLyAgICAgfSBcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGdhbWVIYXNXaW5uZXIsXG4vLyAgICAgICAgIHBsYXllck9uZVR1cm5cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vIHRlbXBvcmFyeSBhdXRvIGNhbGxcbi8vIHZzQ29tcHV0ZXIoKTtcblxuLy8gY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG5cblxuLy8gICAgIGlmICghdnNDb21wdXRlci5nYW1lSGFzV2lubmVyKSB7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgLy8gcGxheWVyIGF0dGFja1xuLy8gICAgICAgICBpZiAodnNDb21wdXRlci5wbGF5ZXJPbmVUdXJuKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuXG5cbi8vICAgICAgICAgfSBlbHNlIGlmICghcGxheWVyT25lVHVybikge1xuXG4vLyAgICAgICAgICAgICAvLyBjb21wdXRlciBhdHRhY2tcbi8vICAgICAgICAgfVxuICAgICAgICBcblxuXG5cbi8vICAgICAgICAgZ2FtZUhhc1dpbm5lciA9IHRydWU7XG5cbi8vICAgICB9XG5cblxuXG4vLyB9XG5cblxuXG5cblxuXG5cblxuIiwibGV0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgICAgbmFtZTogJ0NhcnJpZXInLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgICBjb2RlOiAnQ2EnLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gICAgICAgIHNpemU6IDQsXG4gICAgICAgIGNvZGU6ICdCYScsXG4gICAgfSxcbiAgICBjcnVpc2VyOiB7XG4gICAgICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ0NyJyxcbiAgICB9LFxuICAgIHN1Ym1hcmluZToge1xuICAgICAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ1N1JyxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICAgICAgc2l6ZTogMixcbiAgICAgICAgY29kZTogJ0RlJyxcbiAgICB9LFxufVxuXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLCBzaXplKSA9PiB7XG4gICAgbGV0IHNoaXBOYW1lID0gbmFtZTtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBsZXQgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBoaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZSA9PT0gaGl0cztcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVCb2FyZCA9IChsZW5ndGg9MTApID0+IHtcblxuICAgIGxldCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKGxlbmd0aCk7XG5cbiAgICAvLyBib2FyZCB3aWxsIGNvbnNpc3Qgb2YgZm9sbG93aW5nIG1hcmtlcnM6IFxuICAgIC8vICcnIEZvciBlbXB0eSBzcXVhcmU7IC8vIE0gZm9yIG1pc3NlZCBzcXVhcmU7XG4gICAgLy8gWCBmb3IgaGl0IC8vIGluZGV4IG9mIGdhbWVQaWVjZXMgYXJyYXkgZm9yIHNoaXBcbiAgICBcbiAgICBsZXQgZ2FtZVBpZWNlcyA9IFtdO1xuXG4gICAgbGV0IHN0b3JlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gc2hpcEZhY3Rvcnkoc2hpcC5uYW1lLCBzaGlwLnNpemUpXG4gICAgICAgIGdhbWVQaWVjZXMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkLCBob3Jpem9udGFsPXRydWUpID0+IHtcbiAgICAgICAgICAvLyBjaGVjayBzaGlwIGlzIGJlaW5nIHBsYWNlcyB3aXRoaW4gYm91bmRhcnkgb2YgYm9hcmRcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgY29vcmRbMV0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiBjb29yZFswXSArIHNoaXAuc2l6ZSA+IGxlbmd0aC0xKSByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcGxhY2Ugc2hpcCB3aXRoaW4gYm9hcmQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgIC8vIGxvb3AgdG8gY2hlY2sgaWYgb3ZlcmxhcHBpbmcgc2hpcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2ldICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzFdOyBpIDwgY29vcmRbMV0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtpXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBmb2xsb3cgc2FtZSBkaXJlY3Rpb25zIGJ1dCB2ZXJ0aWNhbGx5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtjb29yZFsxXV0gIT09ICcnKSByZXR1cm4gbmV3IEVycm9yICgnQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2Nvb3JkWzFdXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgICAvLyBzdG9yZSBzaGlwIGluIGdhbWUgcGllY2VzIGFycmF5XG4gICAgICAgIHN0b3JlU2hpcChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbGV0IHkgPSBjb2luRmxpcCgpO1xuICAgICAgICAgICAgd2hpbGUgKCFwbGFjZWQpXG4gICAgICAgICAgICAgIC8vIGlmIHNoaXAgZ2V0IHBsYWNlZCwgZXhpdCB3aGlsZSBsb29wO1xuICAgICAgICAgICAgaWYgKHBsYWNlU2hpcChzaGlwc1tzaGlwXSwgeCwgeSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChzaGlwc1tzaGlwXSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gZWxzZSBnZXQgbmV3IGNvb3JkaW5hdGVzIGFuZCBib29sZWFuIGFuZCB0cnkgYWdhaW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgICAgICB5ID0gY29pbkZsaXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb2luRmxpcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgbGV0IGNlbGwgPSBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dO1xuICAgICAgICAgIC8vIGNoZWNrIGJvYXJkIGF0IGFyZ3VtZW50IGNvb3JkIGFuZCByZXR1cm4gY29ycmVzcG9uZGluZyB2YWx1ZTtcbiAgICAgICAgaWYgKGNlbGwgPT09ICcnKSByZXR1cm4gJ00nOyAgLy8gTSBmb3IgbWlzc1xuICAgICAgICBpZiAoY2VsbCAhPT0gJycpIHtcbiAgICAgICAgICAgIGdhbWVQaWVjZXNbY2VsbF0uaGl0KCk7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gJ1gnO1xuICAgICAgICAgICAgcmV0dXJuICdYJyAgLy8gWCBmb3IgaGl0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaztcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBnYW1lUGllY2VzKSB7XG4gICAgICAgICAgICBpZiAocGllY2UuaXNTdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgbW92ZSBpcyB2YWxpZFxuICAgIGxldCBpc01vdmVWYWxpZCA9IChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ00nXG4gICAgICAgICAgICAmJiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnWCdcbiAgICAgICAgICAgICYmIGNvb3JkWzBdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzBdID49IDBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdID49IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIFxuXG4gICAgICAvLyAwIC0gbiByYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IGdldFJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdhbWVQaWVjZXMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBpc01vdmVWYWxpZCxcbiAgICAgICAgZ2V0UmFuZG9tQ29vcmRzLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHNcbiAgICB9XG59XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBjb21wdXRlcj1mYWxzZSkgPT4ge1xuXG4gICAgbGV0ICBhdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgICAvLyBoaXQgZmxhZyB1c2VkIHRvIGRldGVybWluZSBpZiBzbWFydCBtb3ZlIHNob3VsZCBiZSBtYWRlO1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7IFxuXG4gICAgICAgIGlmICghY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRhY2tlZCcpXG4gICAgICAgICAgICAvLyBsb2dpYyBmb3IgcGxheWVyIGF0dGFjaztcbiAgICAgICAgICAgIHJldHVybiBjb29yZDtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyAgIC8vIHN0b3JlIGFycmF5IG9mICdzbWFydCcgbW92ZXMgaWYgY29tcHV0ZXIgZ2V0cyBhIGhpdFxuICAgICAgICAvLyBsZXQgc21hcnRNb3ZlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gLy8gb24gYSBoaXQsIHB1c2ggYWxsIGFkamFjZW50IHVucGxheWVkIGNvb3JkaW5hdGVzIGludG8gc21hcnRNb3ZlcyBBcnI7XG4gICAgICAgIC8vIGxldCBzdG9yZVNtYXJ0TW92ZXMgPSAoaGl0Q29vcmQpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgICAgICAvLyAgICAgbGV0IHkgPSBoaXRDb29yZFswXTtcbiAgICAgICAgLy8gICAgIGxldCB4ID0gaGl0Q29vcmRbMV07XG4gICAgICAgIC8vICAgICBtb3Zlcy5wdXNoKFt5KyssIHgrK10pO1xuICAgICAgICAvLyAgICAgbW92ZXMucHVzaChbeSsrLCB4LS1dKTtcbiAgICAgICAgLy8gICAgIG1vdmVzLnB1c2goW3ktLSwgeCsrXSk7XG4gICAgICAgIC8vICAgICBtb3Zlcy5wdXNoKFt5LS0sIHgtLV0pO1xuICAgICAgICAvLyAgICAgbW92ZXMuZm9yRWFjaChtb3ZlID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoYm9hcmQuaXNNb3ZlVmFsaWQobW92ZSkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc21hcnRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGNvbXB1dGVyIEFJIGxvZ2ljO1xuICAgICAgICBpZiAoY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyAgIC8vIGlmIHNtYXJ0IG1vdmVzIGV4aXN0LCB1c2UgdGhlbSwgaWYgbm90LCBnZXQgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICAgICAgICAgIC8vIGlmIChzbWFydE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFuZG9tU21hcnRNb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc21hcnRNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gICAgIGxldCBzbWFydE1vdmUgPSBzbWFydE1vdmVzLnNwbGljZShyYW5kb21TbWFydE1vdmUsIDEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBzbWFydE1vdmU7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgYSByYW5kb20gbW92ZSBpbiB4O1xuICAgICAgICAgICAgICAgIC8vIGxldCB4ID0gYm9hcmQuZ2V0UmFuZG9tQ29vcmRzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyAvLyBpZiAncmFuZG9tJyBtb3ZlIGhhcyBhbHJlYWR5IGJlZW4gbWFkZSwgY3JlYXRlIGFub3RoZXIgcGFpciBvZiByYW5kb21zIGNvb3Jkc1xuICAgICAgICAgICAgICAgIC8vIHdoaWxlKGJvYXJkW3hbMF1dW3hbMV1dID09PSAnWCcgfHwgYm9hcmRbeFswXV1beFsxXV0gPT09ICdNJykge1xuICAgICAgICAgICAgICAgIC8vICAgICB4ID0gYm9hcmQuZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgdGhlIG1vdmUgaXMgYSBoaXQgc3RvcmUgc21hcnQgbW92ZXM7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGJvYXJkW3hbMF1dW3hbMV1dICE9PSAnJykge1xuICAgICAgICAgICAgLy8gICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBzdG9yZVNtYXJ0TW92ZXMoeCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsIFxuICAgICAgICBhdHRhY2ssXG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNoaXBzLFxuICAgIHNoaXBGYWN0b3J5LFxuICAgIGdhbWVCb2FyZCxcbiAgICBQbGF5ZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==