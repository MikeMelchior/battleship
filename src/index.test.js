const index = require('./index')


// test shipFactory;
test('returns ship', () => {
    expect(typeof index.shipFactory()).toEqual('object')
})

test('isSunk method working correctly', () => {
    let x = index.shipFactory('', 2);
    x.hit()
    expect(x.isSunk).toBe(false)
    x.hit()
    expect(x.isSunk).toBe(true);
})

test('shipFactory uses ships object correctly', () => {
    let x = index.shipFactory(index.ships.battleship.name,
                                index.ships.battleship.name);
    expect(x.shipName).toBe('Battleship')
})

// test Gameboard 

test('returns board', () => {
    expect(index.gameBoard('ocean', 2).board).toEqual([['', ''], ['', '']]);
})

test('places ship horizontally', () => {
    let pOneOcean = index.gameBoard('ocean', 4) 
    pOneOcean.placeShip(index.ships.submarine, [0, 0]);
    expect(pOneOcean.board).toEqual([
        [ 0,  0,  0, ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ])
})

test('places ship vertically', () => {
    let pOneOcean = index.gameBoard('ocean', 4) 
    pOneOcean.placeShip(index.ships.destroyer, [0, 0], false);
    expect(pOneOcean.board).toEqual([
        [ 0, '', '', ''],
        [ 0, '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ])
})

test('Throws errors if ships overlapping or off board', () => {
    let pOneOcean = index.gameBoard('ocean', 6);
    pOneOcean.placeShip(index.ships.battleship, [0, 0]);
    // throws error if off board (horizontal)
    expect(pOneOcean.placeShip(index.ships.carrier, [3, 3])).toEqual(Error('Please place ship within board'))
    // throws error if ship overlapping (horizontal)
    expect(pOneOcean.placeShip(index.ships.destroyer, [0, 1])).toEqual(Error('Cannot overlap ships'))
    // same tests with vertical 
    expect(pOneOcean.placeShip(index.ships.carrier, [1, 1], false)).toEqual(Error('Please place ship within board'))
    expect(pOneOcean.placeShip(index.ships.destroyer, [0, 0], false)).toEqual(Error('Cannot overlap ships'))

});

test('places multiple ships', () => {
    let pOneOcean = index.gameBoard('ocean', 8);
    pOneOcean.placeShip(index.ships.carrier, [2, 1]);
    pOneOcean.placeShip(index.ships.battleship, [7, 1]);
    pOneOcean.placeShip(index.ships.cruiser, [0, 7], false);
    pOneOcean.placeShip(index.ships.submarine, [4, 1]);
    pOneOcean.placeShip(index.ships.destroyer, [4, 6], false);
    expect(pOneOcean.board).toEqual([
        ['', '', '', '', '', '', '',  2],
        ['', '', '', '', '', '', '',  2],
        ['',  0,  0,  0,  0,  0, '',  2],
        ['', '', '', '', '', '', '', ''],
        ['',  3,  3,  3, '', '',  4, ''],
        ['', '', '', '', '', '',  4, ''],
        ['', '', '', '', '', '', '', ''],
        ['',  1,  1,  1,  1, '', '', '']
    ])
})

test('stores game pieces', () => {
    let pOneOcean = index.gameBoard('ocean', 5);
    pOneOcean.placeShip(index.ships.battleship, [0, 0]);
    expect(pOneOcean.gamePieces[0].shipName).toBe('Battleship');
    pOneOcean.placeShip(index.ships.cruiser, [1, 0]);
    expect(pOneOcean.gamePieces[1].shipName).toBe('Cruiser')
})

test('receives attack', () => {
    let pOneOcean = index.gameBoard('ocean', 8);
    pOneOcean.placeShip(index.ships.carrier, [0, 0])
    pOneOcean.gamePieces[0].hit();
    expect(pOneOcean.gamePieces[0].hits).toBe(1);

})





