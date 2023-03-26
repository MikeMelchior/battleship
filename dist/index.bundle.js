(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

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

const gameBoard = (type, length=10) => {

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
    
    let hit = false;

      // 0 - num random number generator
    let rng = (num) => {
        return Math.floor(Math.random() * num)
    }
      // use rng to create random coords
    let randomCoords = () => {
        return [rng(10), rng(10)]
    }

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
            return;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgICAgIHNpemU6IDUsXG4gICAgICAgIGNvZGU6ICdDYScsXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICAgIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgY29kZTogJ0JhJyxcbiAgICB9LFxuICAgIGNydWlzZXI6IHtcbiAgICAgICAgbmFtZTogJ0NydWlzZXInLFxuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb2RlOiAnQ3InLFxuICAgIH0sXG4gICAgc3VibWFyaW5lOiB7XG4gICAgICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb2RlOiAnU3UnLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICAgICAgICBzaXplOiAyLFxuICAgICAgICBjb2RlOiAnRGUnLFxuICAgIH0sXG59XG5cbmNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUsIHNpemUpID0+IHtcbiAgICBsZXQgc2hpcE5hbWUgPSBuYW1lO1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIGxldCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMrKztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgc2hpcE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcE5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdCxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaXplID09PSBoaXRzO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuY29uc3QgZ2FtZUJvYXJkID0gKHR5cGUsIGxlbmd0aD0xMCkgPT4ge1xuXG4gICAgbGV0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQobGVuZ3RoKTtcblxuICAgIC8vIGJvYXJkIHdpbGwgY29uc2lzdCBvZiBmb2xsb3dpbmcgbWFya2VyczogXG4gICAgLy8gJycgRm9yIGVtcHR5IHNxdWFyZTsgLy8gTSBmb3IgbWlzc2VkIHNxdWFyZTtcbiAgICAvLyBYIGZvciBoaXQgLy8gaW5kZXggb2YgZ2FtZVBpZWNlcyBhcnJheSBmb3Igc2hpcFxuICAgIFxuICAgIGxldCBnYW1lUGllY2VzID0gW107XG5cbiAgICBsZXQgc3RvcmVTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShzaGlwLm5hbWUsIHNoaXAuc2l6ZSlcbiAgICAgICAgZ2FtZVBpZWNlcy5wdXNoKG5ld1NoaXApO1xuICAgIH1cblxuICAgIGxldCBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmQsIGhvcml6b250YWw9dHJ1ZSkgPT4ge1xuICAgICAgICAgIC8vIGNoZWNrIHNoaXAgaXMgYmVpbmcgcGxhY2VzIHdpdGhpbiBib3VuZGFyeSBvZiBib2FyZFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiBjb29yZFsxXSArIHNoaXAuc2l6ZSA+IGxlbmd0aC0xKSByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcGxhY2Ugc2hpcCB3aXRoaW4gYm9hcmQnKTtcbiAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIGNvb3JkWzBdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgLy8gbG9vcCB0byBjaGVjayBpZiBvdmVybGFwcGluZyBzaGlwc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzFdOyBpIDwgY29vcmRbMV0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtjb29yZFswXV1baV0gIT09ICcnKSByZXR1cm4gbmV3IEVycm9yKCdDYW5ub3Qgb3ZlcmxhcCBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2ldID0gZ2FtZVBpZWNlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIGZvbGxvdyBzYW1lIGRpcmVjdGlvbnMgYnV0IHZlcnRpY2FsbHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMF07IGkgPCBjb29yZFswXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2Nvb3JkWzFdXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IgKCdDYW5ub3Qgb3ZlcmxhcCBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMF07IGkgPCBjb29yZFswXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bY29vcmRbMV1dID0gZ2FtZVBpZWNlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAvLyBzdG9yZSBzaGlwIGluIGdhbWUgcGllY2VzIGFycmF5XG4gICAgICAgIHN0b3JlU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgICAgICBsZXQgY2VsbCA9IGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG4gICAgICAgICAgLy8gY2hlY2sgYm9hcmQgYXQgYXJndW1lbnQgY29vcmQgYW5kIHJldHVybiBjb3JyZXNwb25kaW5nIHZhbHVlO1xuICAgICAgICBpZiAoY2VsbCA9PT0gJycpIHJldHVybiAnTSc7ICAvLyBNIGZvciBtaXNzXG4gICAgICAgIGlmIChjZWxsICE9PSAnJykge1xuICAgICAgICAgICAgZ2FtZVBpZWNlc1tjZWxsXS5oaXQoKTtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAnWCc7XG4gICAgICAgICAgICByZXR1cm4gJ1gnICAvLyBYIGZvciBoaXRcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rO1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHBpZWNlIG9mIGdhbWVQaWVjZXMpIHtcbiAgICAgICAgICAgIGlmIChwaWVjZS5pc1N1bmsgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZE5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdhbWVQaWVjZXMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGNvbXB1dGVyPWZhbHNlKSA9PiB7XG4gICAgXG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuXG4gICAgICAvLyAwIC0gbnVtIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG4gICAgbGV0IHJuZyA9IChudW0pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG4gICAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IHJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cblxuICAgIGxldCBpc1ZhbGlkID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGlmIChib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnTSdcbiAgICAgICAgICAgICYmIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gIT09ICdYJ1xuICAgICAgICAgICAgJiYgY29vcmRbMF0gPCAxMFxuICAgICAgICAgICAgJiYgY29vcmRbMV0gPCAxMFxuICAgICAgICAgICAgJiYgY29vcmRbMF0gPj0gMFxuICAgICAgICAgICAgJiYgY29vcmRbMV0gPj0gMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGxldCBhdHRhY2sgPSAoYm9hcmQsIGNvb3JkKSA9PiB7XG4gICAgICAgICAgLy8gaGl0IGZsYWcgdXNlZCB0byBkZXRlcm1pbmUgaWYgc21hcnQgbW92ZSBzaG91bGQgYmUgbWFkZTtcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlOyBcblxuICAgICAgICBpZiAoIWNvbXB1dGVyKSB7XG4gICAgICAgICAgICAvLyBsb2dpYyBmb3IgcGxheWVyIGF0dGFjaztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuXG4gICAgICAgICAgLy8gc3RvcmUgYXJyYXkgb2YgJ3NtYXJ0JyBtb3ZlcyBpZiBjb21wdXRlciBnZXRzIGEgaGl0XG4gICAgICAgIGxldCBzbWFydE1vdmVzID0gW107XG4gICAgICAgIFxuXG4gICAgICAgIC8vIG9uIGEgaGl0LCBwdXNoIGFsbCBhZGphY2VudCB1bnBsYXllZCBjb29yZGluYXRlcyBpbnRvIHNtYXJ0TW92ZXMgQXJyO1xuICAgICAgICBsZXQgc3RvcmVTbWFydE1vdmVzID0gKGhpdENvb3JkKSA9PiB7XG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCB5ID0gaGl0Q29vcmRbMF07XG4gICAgICAgICAgICBsZXQgeCA9IGhpdENvb3JkWzFdO1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeSsrLCB4KytdKTtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3krKywgeC0tXSk7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5LS0sIHgrK10pO1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeS0tLCB4LS1dKTtcbiAgICAgICAgICAgIG1vdmVzLmZvckVhY2gobW92ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQobW92ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc21hcnRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbXB1dGVyIEFJIGxvZ2ljO1xuICAgICAgICBpZiAoY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyAgIC8vIGlmIHNtYXJ0IG1vdmVzIGV4aXN0LCB1c2UgdGhlbSwgaWYgbm90LCBnZXQgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICAgICAgICAgIC8vIGlmIChzbWFydE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFuZG9tU21hcnRNb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc21hcnRNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gICAgIGxldCBzbWFydE1vdmUgPSBzbWFydE1vdmVzLnNwbGljZShyYW5kb21TbWFydE1vdmUsIDEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBzbWFydE1vdmU7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgYSByYW5kb20gbW92ZSBpbiB4O1xuICAgICAgICAgICAgICAgIGxldCB4ID0gcmFuZG9tQ29vcmRzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAncmFuZG9tJyBtb3ZlIGhhcyBhbHJlYWR5IGJlZW4gbWFkZSwgY3JlYXRlIGFub3RoZXIgcGFpciBvZiByYW5kb21zIGNvb3Jkc1xuICAgICAgICAgICAgICAgIHdoaWxlKGJvYXJkW3hbMF1dW3hbMV1dID09PSAnWCcgfHwgYm9hcmRbeFswXV1beFsxXV0gPT09ICdNJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgdGhlIG1vdmUgaXMgYSBoaXQgc3RvcmUgc21hcnQgbW92ZXM7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGJvYXJkW3hbMF1dW3hbMV1dICE9PSAnJykge1xuICAgICAgICAgICAgLy8gICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBzdG9yZVNtYXJ0TW92ZXMoeCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsIFxuICAgICAgICBhdHRhY2ssXG5cbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2hpcHMsXG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZUJvYXJkLFxuICAgIFBsYXllclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9