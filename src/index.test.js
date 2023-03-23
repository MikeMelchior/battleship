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

test('ship uses ship object correctly', () => {
    let x = index.shipFactory(index.ships.battleship.name,
                                index.ships.battleship.name);
    expect(x.shipName).toBe('Battleship')
})

// test Gameboard 

test('returns board', () => {
    expect(index.gameBoard('board', 2).board).toEqual([[0, 0], [0, 0]])
})

test.only('places ship', () => {
    let playerOne = index.gameBoard('Player 1 Ocean', 4);
    playerOne.placeShips(index.ships.submarine, [4, 0], [4, 2])

    expect(playerOne.board).toEqual([
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ])
})



