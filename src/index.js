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

const gameBoard = (name, length) => {
    let boardName = name;

    let createBoard = () => {
        let board = [];
        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < length; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    }

    let board = createBoard(length);

    // 0 For empty square;
    // 1 for missed square;
    // 2 for hit
    // Ca for carrier;
    // Ba for battleship;
    // Cr for cruiser;
    // De for destroyer;
    // S for submarine;

    let placeShips = (ship, coordOne, coordTwo) => {

        let horizontal = false;
        if (coordOne[0] == coordTwo[0]) horizontal = true;

        if (horizontal) {
           for (let i=coordOne[0]; i<coordTwo[0] + ship.size; i++) {
            console.log(coordOne[0])
            board[coordOne[0]][coordOne[1]] = 1;
            coordOne[0]++
           }
           console.log(board)

        } else {
            
        }

    }

    return { 
        get board() {
            return board;
        },
        get name() {
            return boardName;
        },
        placeShips
    }
}


module.exports = {
    ships,
    shipFactory,
    gameBoard,
}
