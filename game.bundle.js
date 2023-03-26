(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["game"],{

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const index = __webpack_require__(/*! ./index */ "./src/index.js")


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

    
    
    // console.log (
    //     playerBoard,
    //     computerBoard
    // )

}


newGame();

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


    return { 
        get board() {
            return board;
        },
        get name() {
            return boardName;
        },
        gamePieces,
        placeShip,
        receiveAttack,
        allShipsSunk,
    }
}

const Player = (name, computer=false) => {

      // 0 - n random number generator
    let rng = (n) => {
        return Math.floor(Math.random() * n)
    }
      // use rng to create random coords
    let randomCoords = () => {
        return [rng(10), rng(10)]
    }
      // function to check move is valid
    let isValid = (coord) => {
        if (board[coord[0]][coord[1]] !== 'M'
            && board[coord[0]][coord[1]] !== 'X'
            && coord[0] < 10
            && coord[1] < 10
            && coord[0] >= 0
            && coord[1] >= 0) return true;
        return false;
    }


    let attack = (board, coord) => {
          // hit flag used to determine if smart move should be made;
        let hit = false; 

        if (!computer) {
            // logic for player attack;
            let coord = prompt('Enter a attack coordinate');
            return coord;
        } 


          // store array of 'smart' moves if computer gets a hit
        let smartMoves = [];
        

        // on a hit, push all adjacent unplayed coordinates into smartMoves Arr;
        let storeSmartMoves = (hitCoord) => {
            let moves = [];
            let y = hitCoord[0];
            let x = hitCoord[1];
            moves.push([y++, x++]);
            moves.push([y++, x--]);
            moves.push([y--, x++]);
            moves.push([y--, x--]);
            moves.forEach(move => {
                if (isValid(move)) {
                    smartMoves.push(move);
                }
            })
        }

          // computer AI logic;
        if (computer) {
            

            //   // if smart moves exist, use them, if not, get random coordinate
            // if (smartMoves.length > 0) {
            //     let randomSmartMove = Math.floor(Math.random() * smartMoves.length);
            //     let smartMove = smartMoves.splice(randomSmartMove, 1);
                
            //     return smartMove;
                

                
            // } else {
                // store a random move in x;
                let x = randomCoords();

                // if 'random' move has already been made, create another pair of randoms coords
                while(board[x[0]][x[1]] === 'X' || board[x[0]][x[1]] === 'M') {
                    x = randomCoords();
                }

                return x;
                
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxjQUFjLG1CQUFPLENBQUMsK0JBQVM7OztBQUcvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKVxuXG5cbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgbGV0IHBsYXllck9uZSA9IGluZGV4LlBsYXllcignUGxheWVyIE9uZScpO1xuICAgIGxldCBjb21wdXRlciA9IGluZGV4LlBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBpbmRleC5nYW1lQm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGluZGV4LmdhbWVCb2FyZCgpO1xuXG4gICAgLy8gICAgLy8gcGxhY2Ugc2hpcHMgYXV0b21hdGljYWxseSBmb3Igbm93XG4gICAgICAgIGxldCBhdXRvUGxhY2UgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgICAgIGxldCBhdXRvQ29vcmQgPSBbMCwgMF1cbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgaW4gaW5kZXguc2hpcHMpIHtcbiAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoaW5kZXguc2hpcHNbc2hpcF0sIGF1dG9Db29yZClcbiAgICAgICAgICAgICAgICBhdXRvQ29vcmRbMF0rK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF1dG9QbGFjZShwbGF5ZXJCb2FyZClcbiAgICAgICAgYXV0b1BsYWNlKGNvbXB1dGVyQm9hcmQpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcblxuXG4gICAgbGV0IGdhbWVIYXNXaW5uZXIgPSB0cnVlO1xuICAgIGxldCBwbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuXG5cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcblxuICAgICAgLy8gbG9naWMgZm9yIGdhbWUgbG9vcCAqKiBzd2l0Y2ggZ2FtZUhhc1dpbm5lciBmbGFnIHRvIGFkanVzdDtcbiAgICB3aGlsZSAoIWdhbWVIYXNXaW5uZXIpIHtcbiAgICAgICAgLy8gcGxheWVyIGF0dGFja1xuICAgICAgICBsZXQgYXR0YWNrID0gUHJvbWlzZS5yZXNvbHZlKHBsYXllck9uZS5hdHRhY2soKSkgXG4gICAgICAgICAgICAudGhlbihjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyByZW1vdmUgc3BhY2VzIGFuZCBjb21tYXNcbiAgICAgICAgICAgICAgICBjb29yZCA9IGNvb3JkLnNwbGl0KCcgJykuam9pbignJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgIC8vIHR1cm4gc3RyaW5ncyBpbnRvIG51bXNcbiAgICAgICAgICAgICAgICBjb29yZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb29yZFtjb29yZC5pbmRleE9mKGVsZW1lbnQpXSA9IHBhcnNlSW50KGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oY29vcmQgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSBnYW1lSGFzV2lubmVyID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgIFxuICAgICAgICAvLyBjaGVjayBpZiB3aW5uZXI7XG5cbiAgICAgICAgLy8gY29tcCBhdHRhY2s7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2lubmVyO1xuICAgICAgICBnYW1lSGFzV2lubmVyID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nIChcbiAgICAvLyAgICAgcGxheWVyQm9hcmQsXG4gICAgLy8gICAgIGNvbXB1dGVyQm9hcmRcbiAgICAvLyApXG5cbn1cblxuXG5uZXdHYW1lKCk7IiwibGV0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgICAgbmFtZTogJ0NhcnJpZXInLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgICBjb2RlOiAnQ2EnLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gICAgICAgIHNpemU6IDQsXG4gICAgICAgIGNvZGU6ICdCYScsXG4gICAgfSxcbiAgICBjcnVpc2VyOiB7XG4gICAgICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ0NyJyxcbiAgICB9LFxuICAgIHN1Ym1hcmluZToge1xuICAgICAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ1N1JyxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICAgICAgc2l6ZTogMixcbiAgICAgICAgY29kZTogJ0RlJyxcbiAgICB9LFxufVxuXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLCBzaXplKSA9PiB7XG4gICAgbGV0IHNoaXBOYW1lID0gbmFtZTtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBsZXQgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBoaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZSA9PT0gaGl0cztcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVCb2FyZCA9IChsZW5ndGg9MTApID0+IHtcblxuICAgIGxldCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKGxlbmd0aCk7XG5cbiAgICAvLyBib2FyZCB3aWxsIGNvbnNpc3Qgb2YgZm9sbG93aW5nIG1hcmtlcnM6IFxuICAgIC8vICcnIEZvciBlbXB0eSBzcXVhcmU7IC8vIE0gZm9yIG1pc3NlZCBzcXVhcmU7XG4gICAgLy8gWCBmb3IgaGl0IC8vIGluZGV4IG9mIGdhbWVQaWVjZXMgYXJyYXkgZm9yIHNoaXBcbiAgICBcbiAgICBsZXQgZ2FtZVBpZWNlcyA9IFtdO1xuXG4gICAgbGV0IHN0b3JlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gc2hpcEZhY3Rvcnkoc2hpcC5uYW1lLCBzaGlwLnNpemUpXG4gICAgICAgIGdhbWVQaWVjZXMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkLCBob3Jpem9udGFsPXRydWUpID0+IHtcbiAgICAgICAgICAvLyBjaGVjayBzaGlwIGlzIGJlaW5nIHBsYWNlcyB3aXRoaW4gYm91bmRhcnkgb2YgYm9hcmRcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgY29vcmRbMV0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiBjb29yZFswXSArIHNoaXAuc2l6ZSA+IGxlbmd0aC0xKSByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcGxhY2Ugc2hpcCB3aXRoaW4gYm9hcmQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgIC8vIGxvb3AgdG8gY2hlY2sgaWYgb3ZlcmxhcHBpbmcgc2hpcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2ldICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzFdOyBpIDwgY29vcmRbMV0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtpXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBmb2xsb3cgc2FtZSBkaXJlY3Rpb25zIGJ1dCB2ZXJ0aWNhbGx5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtjb29yZFsxXV0gIT09ICcnKSByZXR1cm4gbmV3IEVycm9yICgnQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2Nvb3JkWzFdXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgLy8gc3RvcmUgc2hpcCBpbiBnYW1lIHBpZWNlcyBhcnJheVxuICAgICAgICBzdG9yZVNoaXAoc2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgbGV0IGNlbGwgPSBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dO1xuICAgICAgICAgIC8vIGNoZWNrIGJvYXJkIGF0IGFyZ3VtZW50IGNvb3JkIGFuZCByZXR1cm4gY29ycmVzcG9uZGluZyB2YWx1ZTtcbiAgICAgICAgaWYgKGNlbGwgPT09ICcnKSByZXR1cm4gJ00nOyAgLy8gTSBmb3IgbWlzc1xuICAgICAgICBpZiAoY2VsbCAhPT0gJycpIHtcbiAgICAgICAgICAgIGdhbWVQaWVjZXNbY2VsbF0uaGl0KCk7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gJ1gnO1xuICAgICAgICAgICAgcmV0dXJuICdYJyAgLy8gWCBmb3IgaGl0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaztcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBnYW1lUGllY2VzKSB7XG4gICAgICAgICAgICBpZiAocGllY2UuaXNTdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBnYW1lUGllY2VzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICB9XG59XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBjb21wdXRlcj1mYWxzZSkgPT4ge1xuXG4gICAgICAvLyAwIC0gbiByYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IHJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cbiAgICAgIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIG1vdmUgaXMgdmFsaWRcbiAgICBsZXQgaXNWYWxpZCA9IChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ00nXG4gICAgICAgICAgICAmJiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnWCdcbiAgICAgICAgICAgICYmIGNvb3JkWzBdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzBdID49IDBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdID49IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBsZXQgYXR0YWNrID0gKGJvYXJkLCBjb29yZCkgPT4ge1xuICAgICAgICAgIC8vIGhpdCBmbGFnIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHNtYXJ0IG1vdmUgc2hvdWxkIGJlIG1hZGU7XG4gICAgICAgIGxldCBoaXQgPSBmYWxzZTsgXG5cbiAgICAgICAgaWYgKCFjb21wdXRlcikge1xuICAgICAgICAgICAgLy8gbG9naWMgZm9yIHBsYXllciBhdHRhY2s7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBwcm9tcHQoJ0VudGVyIGEgYXR0YWNrIGNvb3JkaW5hdGUnKTtcbiAgICAgICAgICAgIHJldHVybiBjb29yZDtcbiAgICAgICAgfSBcblxuXG4gICAgICAgICAgLy8gc3RvcmUgYXJyYXkgb2YgJ3NtYXJ0JyBtb3ZlcyBpZiBjb21wdXRlciBnZXRzIGEgaGl0XG4gICAgICAgIGxldCBzbWFydE1vdmVzID0gW107XG4gICAgICAgIFxuXG4gICAgICAgIC8vIG9uIGEgaGl0LCBwdXNoIGFsbCBhZGphY2VudCB1bnBsYXllZCBjb29yZGluYXRlcyBpbnRvIHNtYXJ0TW92ZXMgQXJyO1xuICAgICAgICBsZXQgc3RvcmVTbWFydE1vdmVzID0gKGhpdENvb3JkKSA9PiB7XG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCB5ID0gaGl0Q29vcmRbMF07XG4gICAgICAgICAgICBsZXQgeCA9IGhpdENvb3JkWzFdO1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeSsrLCB4KytdKTtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3krKywgeC0tXSk7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5LS0sIHgrK10pO1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeS0tLCB4LS1dKTtcbiAgICAgICAgICAgIG1vdmVzLmZvckVhY2gobW92ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQobW92ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc21hcnRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbXB1dGVyIEFJIGxvZ2ljO1xuICAgICAgICBpZiAoY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyAgIC8vIGlmIHNtYXJ0IG1vdmVzIGV4aXN0LCB1c2UgdGhlbSwgaWYgbm90LCBnZXQgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICAgICAgICAgIC8vIGlmIChzbWFydE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFuZG9tU21hcnRNb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc21hcnRNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gICAgIGxldCBzbWFydE1vdmUgPSBzbWFydE1vdmVzLnNwbGljZShyYW5kb21TbWFydE1vdmUsIDEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBzbWFydE1vdmU7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgYSByYW5kb20gbW92ZSBpbiB4O1xuICAgICAgICAgICAgICAgIGxldCB4ID0gcmFuZG9tQ29vcmRzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAncmFuZG9tJyBtb3ZlIGhhcyBhbHJlYWR5IGJlZW4gbWFkZSwgY3JlYXRlIGFub3RoZXIgcGFpciBvZiByYW5kb21zIGNvb3Jkc1xuICAgICAgICAgICAgICAgIHdoaWxlKGJvYXJkW3hbMF1dW3hbMV1dID09PSAnWCcgfHwgYm9hcmRbeFswXV1beFsxXV0gPT09ICdNJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgdGhlIG1vdmUgaXMgYSBoaXQgc3RvcmUgc21hcnQgbW92ZXM7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGJvYXJkW3hbMF1dW3hbMV1dICE9PSAnJykge1xuICAgICAgICAgICAgLy8gICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBzdG9yZVNtYXJ0TW92ZXMoeCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsIFxuICAgICAgICBhdHRhY2ssXG5cbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2hpcHMsXG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZUJvYXJkLFxuICAgIFBsYXllclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9