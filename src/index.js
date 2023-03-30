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
