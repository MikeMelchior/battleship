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

    // board will consist of following markers: 
    // '' For empty square; // M for missed square;
    // X for hit // index of gamePieces array for ship

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

    let board = createBoard();
    let gamePieces = [];

    let clearBoard = () => {
        board = createBoard()
        gamePieces = [];
    }

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
        let cell = board[parseInt(coord[0])][parseInt(coord[1])];

        console.log('Attacking:', coord, '--->', cell)
          // if board cell is empty add M for miss, if not empty,
          // target game piece in gamePieces array using board cell 
          // hit the corresponding ship and add X to board;
        if (cell === '') return board[coord[0]][coord[1]] = 'M';  // M for miss
        
        if (cell !== '') {
            gamePieces[cell].hit();
            board[coord[0]][coord[1]] = 'X';
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
        clearBoard,
        get gamePieces() {
            return gamePieces;
        },
        placeShip,
        receiveAttack,
        allShipsSunk,
        isMoveValid,
        randomlyPlaceShips
    }
}

const Player = (name, computer=false, playersTurn=false) => {

    let isPlayersTurn = playersTurn;

      // store array of already played moves for 
      // computer to not make duplicate move;
    let movesMade = [];
      // store array of 'smart' moves if computer gets a hit
    let smartMoves = [];

    let storeSmartMoves = (coordinate) => {

        let y = coordinate[0];
        let x = coordinate[1];

        let possibleMoves = [
            [y+1, x],
            [y-1, x],
            [y, x+1], 
            [y, x-1],
        ]
        for (let move of possibleMoves) {
            if (move[0] >= 0 && move[0] < 10
                && move[1] >= 0 && move[1] < 10
                && !moveAlreadyMade(move)
                && !smartMoveExists(move)) {
                smartMoves.push(move);        
            }
        }
    }
      // 0 - n random number generator
    let rng = (n) => {
        return Math.floor(Math.random() * n)
    }
      // use rng to create random coords
    let getRandomCoords = () => {
        return [rng(10), rng(10)]
    }

    let wasHit = (coord, board) => {
        if (board[coord[0]][coord[1]] === 'X') return true;
        return false;
    }

    let smartMoveExists = (coord) => {
        for (let move of smartMoves) {
            if (JSON.stringify(coord) == JSON.stringify(move)) return true;
        }
        return false
    }

    let moveAlreadyMade = (coord) => {
        for (let move of movesMade) {
            if (JSON.stringify(coord) == JSON.stringify(move)) return true
        }
        return false;
    }


    let attack = (coord, targetEnemy) => {

        if (!computer) {
            targetEnemy.receiveAttack(coord);
        } else {
              // if smart moves exist, use one, if not, get random coordinate
            if (smartMoves.length > 0) {
                let randomSmartMove = rng(smartMoves.length);
                let smartMove = smartMoves[randomSmartMove]
                smartMoves.splice(randomSmartMove, 1);
                targetEnemy.receiveAttack(smartMove);

                // if move was hit store smartmoves
                if (wasHit(smartMove, targetEnemy.board)) {
                    storeSmartMoves(smartMove, targetEnemy.board)
                }
                movesMade.push(smartMove);
            } else {
                console.log('random move')
                let randomCoord = getRandomCoords();
                // if 'random' move has already been made, 
                // create another pair of randoms coords 
                // until move hasn't been made
                while (moveAlreadyMade(randomCoord)) {
                    randomCoord = getRandomCoords(); 
                }
                targetEnemy.receiveAttack(randomCoord);
                movesMade.push(randomCoord);
                // if move was hit store smartMoves
                if (wasHit(randomCoord, targetEnemy.board)) {
                    storeSmartMoves(randomCoord, targetEnemy.board)
                }
            }
        }
        console.log(smartMoves)

    }

    return {
        name, 
        attack,
        get isPlayersTurn() {
            return isPlayersTurn;
        },
        set isPlayersTurn(val) {
            return isPlayersTurn = val;
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgY29kZTogJ0NhJyxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBzaXplOiA0LFxuICAgICAgICBjb2RlOiAnQmEnLFxuICAgIH0sXG4gICAgY3J1aXNlcjoge1xuICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdDcicsXG4gICAgfSxcbiAgICBzdWJtYXJpbmU6IHtcbiAgICAgICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdTdScsXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIGNvZGU6ICdEZScsXG4gICAgfSxcbn1cblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgc2l6ZSkgPT4ge1xuICAgIGxldCBzaGlwTmFtZSA9IG5hbWU7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgbGV0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cysrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNpemUgPT09IGhpdHM7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSAobGVuZ3RoPTEwKSA9PiB7XG5cbiAgICAvLyBib2FyZCB3aWxsIGNvbnNpc3Qgb2YgZm9sbG93aW5nIG1hcmtlcnM6IFxuICAgIC8vICcnIEZvciBlbXB0eSBzcXVhcmU7IC8vIE0gZm9yIG1pc3NlZCBzcXVhcmU7XG4gICAgLy8gWCBmb3IgaGl0IC8vIGluZGV4IG9mIGdhbWVQaWVjZXMgYXJyYXkgZm9yIHNoaXBcblxuICAgIGxldCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgbGV0IGdhbWVQaWVjZXMgPSBbXTtcblxuICAgIGxldCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICAgICAgICBib2FyZCA9IGNyZWF0ZUJvYXJkKClcbiAgICAgICAgZ2FtZVBpZWNlcyA9IFtdO1xuICAgIH1cblxuICAgIGxldCBzdG9yZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KHNoaXAubmFtZSwgc2hpcC5zaXplKVxuICAgICAgICBnYW1lUGllY2VzLnB1c2gobmV3U2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaG9yaXpvbnRhbD10cnVlKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2sgc2hpcCBpcyBiZWluZyBwbGFjZXMgd2l0aGluIGJvdW5kYXJ5IG9mIGJvYXJkXG4gICAgICAgIGlmIChob3Jpem9udGFsICYmIGNvb3JkWzFdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgY29vcmRbMF0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAvLyBsb29wIHRvIGNoZWNrIGlmIG92ZXJsYXBwaW5nIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtpXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZFswXV1baV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgZm9sbG93IHNhbWUgZGlyZWN0aW9ucyBidXQgdmVydGljYWxseTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bY29vcmRbMV1dICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvciAoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVtjb29yZFsxXV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgICAgLy8gc3RvcmUgc2hpcCBpbiBnYW1lIHBpZWNlcyBhcnJheVxuICAgICAgICBzdG9yZVNoaXAoc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCByYW5kb21seVBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHggPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIGxldCB5ID0gY29pbkZsaXAoKTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKVxuICAgICAgICAgICAgICAvLyBpZiBzaGlwIGdldCBwbGFjZWQsIGV4aXQgd2hpbGUgbG9vcDtcbiAgICAgICAgICAgIGlmIChwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpO1xuICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIGVsc2UgZ2V0IG5ldyBjb29yZGluYXRlcyBhbmQgYm9vbGVhbiBhbmQgdHJ5IGFnYWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgeSA9IGNvaW5GbGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29pbkZsaXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2tpbmc6JywgY29vcmQsICctLS0+JywgY2VsbClcbiAgICAgICAgICAvLyBpZiBib2FyZCBjZWxsIGlzIGVtcHR5IGFkZCBNIGZvciBtaXNzLCBpZiBub3QgZW1wdHksXG4gICAgICAgICAgLy8gdGFyZ2V0IGdhbWUgcGllY2UgaW4gZ2FtZVBpZWNlcyBhcnJheSB1c2luZyBib2FyZCBjZWxsIFxuICAgICAgICAgIC8vIGhpdCB0aGUgY29ycmVzcG9uZGluZyBzaGlwIGFuZCBhZGQgWCB0byBib2FyZDtcbiAgICAgICAgaWYgKGNlbGwgPT09ICcnKSByZXR1cm4gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9ICdNJzsgIC8vIE0gZm9yIG1pc3NcbiAgICAgICAgXG4gICAgICAgIGlmIChjZWxsICE9PSAnJykge1xuICAgICAgICAgICAgZ2FtZVBpZWNlc1tjZWxsXS5oaXQoKTtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaztcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBnYW1lUGllY2VzKSB7XG4gICAgICAgICAgICBpZiAocGllY2UuaXNTdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgbW92ZSBpcyB2YWxpZFxuICAgIGxldCBpc01vdmVWYWxpZCA9IChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ00nXG4gICAgICAgICAgICAmJiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnWCdcbiAgICAgICAgICAgICYmIGNvb3JkWzBdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzBdID49IDBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdID49IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBcblxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgLy8gdXNlIHJuZyB0byBjcmVhdGUgcmFuZG9tIGNvb3Jkc1xuICAgIGxldCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbcm5nKDEwKSwgcm5nKDEwKV1cbiAgICB9XG4gICAgIFxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJCb2FyZCxcbiAgICAgICAgZ2V0IGdhbWVQaWVjZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVBpZWNlcztcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGlzTW92ZVZhbGlkLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHNcbiAgICB9XG59XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBjb21wdXRlcj1mYWxzZSwgcGxheWVyc1R1cm49ZmFsc2UpID0+IHtcblxuICAgIGxldCBpc1BsYXllcnNUdXJuID0gcGxheWVyc1R1cm47XG5cbiAgICAgIC8vIHN0b3JlIGFycmF5IG9mIGFscmVhZHkgcGxheWVkIG1vdmVzIGZvciBcbiAgICAgIC8vIGNvbXB1dGVyIHRvIG5vdCBtYWtlIGR1cGxpY2F0ZSBtb3ZlO1xuICAgIGxldCBtb3Zlc01hZGUgPSBbXTtcbiAgICAgIC8vIHN0b3JlIGFycmF5IG9mICdzbWFydCcgbW92ZXMgaWYgY29tcHV0ZXIgZ2V0cyBhIGhpdFxuICAgIGxldCBzbWFydE1vdmVzID0gW107XG5cbiAgICBsZXQgc3RvcmVTbWFydE1vdmVzID0gKGNvb3JkaW5hdGUpID0+IHtcblxuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZVsxXTtcblxuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtcbiAgICAgICAgICAgIFt5KzEsIHhdLFxuICAgICAgICAgICAgW3ktMSwgeF0sXG4gICAgICAgICAgICBbeSwgeCsxXSwgXG4gICAgICAgICAgICBbeSwgeC0xXSxcbiAgICAgICAgXVxuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHBvc3NpYmxlTW92ZXMpIHtcbiAgICAgICAgICAgIGlmIChtb3ZlWzBdID49IDAgJiYgbW92ZVswXSA8IDEwXG4gICAgICAgICAgICAgICAgJiYgbW92ZVsxXSA+PSAwICYmIG1vdmVbMV0gPCAxMFxuICAgICAgICAgICAgICAgICYmICFtb3ZlQWxyZWFkeU1hZGUobW92ZSlcbiAgICAgICAgICAgICAgICAmJiAhc21hcnRNb3ZlRXhpc3RzKG1vdmUpKSB7XG4gICAgICAgICAgICAgICAgc21hcnRNb3Zlcy5wdXNoKG1vdmUpOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAvLyAwIC0gbiByYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IGdldFJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cblxuICAgIGxldCB3YXNIaXQgPSAoY29vcmQsIGJvYXJkKSA9PiB7XG4gICAgICAgIGlmIChib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID09PSAnWCcpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNtYXJ0TW92ZUV4aXN0cyA9IChjb29yZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHNtYXJ0TW92ZXMpIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb29yZCkgPT0gSlNPTi5zdHJpbmdpZnkobW92ZSkpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBtb3ZlQWxyZWFkeU1hZGUgPSAoY29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBtb3Zlc01hZGUpIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb29yZCkgPT0gSlNPTi5zdHJpbmdpZnkobW92ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgbGV0IGF0dGFjayA9IChjb29yZCwgdGFyZ2V0RW5lbXkpID0+IHtcblxuICAgICAgICBpZiAoIWNvbXB1dGVyKSB7XG4gICAgICAgICAgICB0YXJnZXRFbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaWYgc21hcnQgbW92ZXMgZXhpc3QsIHVzZSBvbmUsIGlmIG5vdCwgZ2V0IHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgICAgICBpZiAoc21hcnRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVNtYXJ0TW92ZSA9IHJuZyhzbWFydE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHNtYXJ0TW92ZSA9IHNtYXJ0TW92ZXNbcmFuZG9tU21hcnRNb3ZlXVxuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZXMuc3BsaWNlKHJhbmRvbVNtYXJ0TW92ZSwgMSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RW5lbXkucmVjZWl2ZUF0dGFjayhzbWFydE1vdmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgbW92ZSB3YXMgaGl0IHN0b3JlIHNtYXJ0bW92ZXNcbiAgICAgICAgICAgICAgICBpZiAod2FzSGl0KHNtYXJ0TW92ZSwgdGFyZ2V0RW5lbXkuYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlU21hcnRNb3ZlcyhzbWFydE1vdmUsIHRhcmdldEVuZW15LmJvYXJkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb3Zlc01hZGUucHVzaChzbWFydE1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFuZG9tIG1vdmUnKVxuICAgICAgICAgICAgICAgIGxldCByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgICAgIC8vIGlmICdyYW5kb20nIG1vdmUgaGFzIGFscmVhZHkgYmVlbiBtYWRlLCBcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW5vdGhlciBwYWlyIG9mIHJhbmRvbXMgY29vcmRzIFxuICAgICAgICAgICAgICAgIC8vIHVudGlsIG1vdmUgaGFzbid0IGJlZW4gbWFkZVxuICAgICAgICAgICAgICAgIHdoaWxlIChtb3ZlQWxyZWFkeU1hZGUocmFuZG9tQ29vcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmRzKCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFbmVteS5yZWNlaXZlQXR0YWNrKHJhbmRvbUNvb3JkKTtcbiAgICAgICAgICAgICAgICBtb3Zlc01hZGUucHVzaChyYW5kb21Db29yZCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbW92ZSB3YXMgaGl0IHN0b3JlIHNtYXJ0TW92ZXNcbiAgICAgICAgICAgICAgICBpZiAod2FzSGl0KHJhbmRvbUNvb3JkLCB0YXJnZXRFbmVteS5ib2FyZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVTbWFydE1vdmVzKHJhbmRvbUNvb3JkLCB0YXJnZXRFbmVteS5ib2FyZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc21hcnRNb3ZlcylcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsIFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGdldCBpc1BsYXllcnNUdXJuKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUGxheWVyc1R1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBpc1BsYXllcnNUdXJuKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUGxheWVyc1R1cm4gPSB2YWw7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2hpcHMsXG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZUJvYXJkLFxuICAgIFBsYXllclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9