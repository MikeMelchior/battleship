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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgY29kZTogJ0NhJyxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBzaXplOiA0LFxuICAgICAgICBjb2RlOiAnQmEnLFxuICAgIH0sXG4gICAgY3J1aXNlcjoge1xuICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdDcicsXG4gICAgfSxcbiAgICBzdWJtYXJpbmU6IHtcbiAgICAgICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdTdScsXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIGNvZGU6ICdEZScsXG4gICAgfSxcbn1cblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgc2l6ZSkgPT4ge1xuICAgIGxldCBzaGlwTmFtZSA9IG5hbWU7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgbGV0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cysrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNpemUgPT09IGhpdHM7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSAobGVuZ3RoPTEwKSA9PiB7XG5cbiAgICBsZXQgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZChsZW5ndGgpO1xuXG4gICAgLy8gYm9hcmQgd2lsbCBjb25zaXN0IG9mIGZvbGxvd2luZyBtYXJrZXJzOiBcbiAgICAvLyAnJyBGb3IgZW1wdHkgc3F1YXJlOyAvLyBNIGZvciBtaXNzZWQgc3F1YXJlO1xuICAgIC8vIFggZm9yIGhpdCAvLyBpbmRleCBvZiBnYW1lUGllY2VzIGFycmF5IGZvciBzaGlwXG4gICAgXG4gICAgbGV0IGdhbWVQaWVjZXMgPSBbXTtcblxuICAgIGxldCBzdG9yZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KHNoaXAubmFtZSwgc2hpcC5zaXplKVxuICAgICAgICBnYW1lUGllY2VzLnB1c2gobmV3U2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaG9yaXpvbnRhbD10cnVlKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2sgc2hpcCBpcyBiZWluZyBwbGFjZXMgd2l0aGluIGJvdW5kYXJ5IG9mIGJvYXJkXG4gICAgICAgIGlmIChob3Jpem9udGFsICYmIGNvb3JkWzFdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgY29vcmRbMF0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAvLyBsb29wIHRvIGNoZWNrIGlmIG92ZXJsYXBwaW5nIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtpXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZFswXV1baV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgZm9sbG93IHNhbWUgZGlyZWN0aW9ucyBidXQgdmVydGljYWxseTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bY29vcmRbMV1dICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvciAoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVtjb29yZFsxXV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgIC8vIHN0b3JlIHNoaXAgaW4gZ2FtZSBwaWVjZXMgYXJyYXlcbiAgICAgICAgc3RvcmVTaGlwKHNoaXApO1xuICAgIH1cblxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXTtcbiAgICAgICAgICAvLyBjaGVjayBib2FyZCBhdCBhcmd1bWVudCBjb29yZCBhbmQgcmV0dXJuIGNvcnJlc3BvbmRpbmcgdmFsdWU7XG4gICAgICAgIGlmIChjZWxsID09PSAnJykgcmV0dXJuICdNJzsgIC8vIE0gZm9yIG1pc3NcbiAgICAgICAgaWYgKGNlbGwgIT09ICcnKSB7XG4gICAgICAgICAgICBnYW1lUGllY2VzW2NlbGxdLmhpdCgpO1xuICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9ICdYJztcbiAgICAgICAgICAgIHJldHVybiAnWCcgIC8vIFggZm9yIGhpdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bms7XG4gICAgbGV0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgcGllY2Ugb2YgZ2FtZVBpZWNlcykge1xuICAgICAgICAgICAgaWYgKHBpZWNlLmlzU3VuayA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZVBpZWNlcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgfVxufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgY29tcHV0ZXI9ZmFsc2UpID0+IHtcblxuICAgICAgLy8gMCAtIG4gcmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICBsZXQgcm5nID0gKG4pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pXG4gICAgfVxuICAgICAgLy8gdXNlIHJuZyB0byBjcmVhdGUgcmFuZG9tIGNvb3Jkc1xuICAgIGxldCByYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbcm5nKDEwKSwgcm5nKDEwKV1cbiAgICB9XG4gICAgICAvLyBmdW5jdGlvbiB0byBjaGVjayBtb3ZlIGlzIHZhbGlkXG4gICAgbGV0IGlzVmFsaWQgPSAoY29vcmQpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gIT09ICdNJ1xuICAgICAgICAgICAgJiYgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ1gnXG4gICAgICAgICAgICAmJiBjb29yZFswXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFswXSA+PSAwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA+PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgbGV0IGF0dGFjayA9IChib2FyZCwgY29vcmQpID0+IHtcbiAgICAgICAgICAvLyBoaXQgZmxhZyB1c2VkIHRvIGRldGVybWluZSBpZiBzbWFydCBtb3ZlIHNob3VsZCBiZSBtYWRlO1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7IFxuXG4gICAgICAgIGlmICghY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIC8vIGxvZ2ljIGZvciBwbGF5ZXIgYXR0YWNrO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gcHJvbXB0KCdFbnRlciBhIGF0dGFjayBjb29yZGluYXRlJyk7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgICAgIH0gXG5cblxuICAgICAgICAgIC8vIHN0b3JlIGFycmF5IG9mICdzbWFydCcgbW92ZXMgaWYgY29tcHV0ZXIgZ2V0cyBhIGhpdFxuICAgICAgICBsZXQgc21hcnRNb3ZlcyA9IFtdO1xuICAgICAgICBcblxuICAgICAgICAvLyBvbiBhIGhpdCwgcHVzaCBhbGwgYWRqYWNlbnQgdW5wbGF5ZWQgY29vcmRpbmF0ZXMgaW50byBzbWFydE1vdmVzIEFycjtcbiAgICAgICAgbGV0IHN0b3JlU21hcnRNb3ZlcyA9IChoaXRDb29yZCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vdmVzID0gW107XG4gICAgICAgICAgICBsZXQgeSA9IGhpdENvb3JkWzBdO1xuICAgICAgICAgICAgbGV0IHggPSBoaXRDb29yZFsxXTtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3krKywgeCsrXSk7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt5KyssIHgtLV0pO1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeS0tLCB4KytdKTtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ktLSwgeC0tXSk7XG4gICAgICAgICAgICBtb3Zlcy5mb3JFYWNoKG1vdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKG1vdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNtYXJ0TW92ZXMucHVzaChtb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb21wdXRlciBBSSBsb2dpYztcbiAgICAgICAgaWYgKGNvbXB1dGVyKSB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gICAvLyBpZiBzbWFydCBtb3ZlcyBleGlzdCwgdXNlIHRoZW0sIGlmIG5vdCwgZ2V0IHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgICAgICAvLyBpZiAoc21hcnRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJhbmRvbVNtYXJ0TW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNtYXJ0TW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgc21hcnRNb3ZlID0gc21hcnRNb3Zlcy5zcGxpY2UocmFuZG9tU21hcnRNb3ZlLCAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gc21hcnRNb3ZlO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHN0b3JlIGEgcmFuZG9tIG1vdmUgaW4geDtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHJhbmRvbUNvb3JkcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgJ3JhbmRvbScgbW92ZSBoYXMgYWxyZWFkeSBiZWVuIG1hZGUsIGNyZWF0ZSBhbm90aGVyIHBhaXIgb2YgcmFuZG9tcyBjb29yZHNcbiAgICAgICAgICAgICAgICB3aGlsZShib2FyZFt4WzBdXVt4WzFdXSA9PT0gJ1gnIHx8IGJvYXJkW3hbMF1dW3hbMV1dID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IHJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIC8vIGlmIHRoZSBtb3ZlIGlzIGEgaGl0IHN0b3JlIHNtYXJ0IG1vdmVzO1xuICAgICAgICAgICAgLy8gICAgIGlmIChib2FyZFt4WzBdXVt4WzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RvcmVTbWFydE1vdmVzKHgpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLCBcbiAgICAgICAgYXR0YWNrLFxuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNoaXBzLFxuICAgIHNoaXBGYWN0b3J5LFxuICAgIGdhbWVCb2FyZCxcbiAgICBQbGF5ZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==