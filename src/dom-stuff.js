import './styles.css'


const index = require('./index')
const gameLoop = require('./game-loop')


const createBoard = (targetElement, board) => {
    let element = document.createElement('div');
        element.className = 'grid';

      // use coord variable to set an attribute on 
      // individual DOM cells, corresponding to game board    
    let coord = [0, 0];
    for (let rowX of board) {
        let row = document.createElement('div');
        for (let cellX of rowX) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('coordinates', `${coord}`);
            coord[1]++;
            row.appendChild(cell);
        }
        element.append(row);
        coord[0]++;
        coord[1] = 0;
    }
    targetElement.append(element);
}

const renderShips = (nodeList, board) => {
    
    nodeList.forEach(cell => {
        let coordY = cell.getAttribute('coordinates')[0];
        let coordX = cell.getAttribute('coordinates')[2];
        if (board[coordY][coordX] !== '') {
            cell.style.backgroundColor = '#073B3A';
        }
    });
}   

const updateBoard = (nodeList, board) => {
    nodeList.forEach(cell => {
        let coordY = cell.getAttribute('coordinates')[0];
        let coordX = cell.getAttribute('coordinates')[2];
        if (board[coordY][coordX] === 'X') {
            node.syle.backgroundColor = 'red';
        } else if (board[coordY][coordX] === 'M') {
            node.style.backgroundColor = 'cyan'
        }
    })
}

const attackListeners = (nodeList, player, target) => {
    nodeList.forEach( (cell) => {
        cell.addEventListener('click', (e) =>{
            let coordY = cell.getAttribute('coordinates')[0];
            let coordX = cell.getAttribute('coordinates')[2];
            let coord = [coordY, coordX]
            player.attack(coord, target);
            console.log(target)
        })
    })
} 







export {
    createBoard,
    renderShips,
    updateBoard,
    attackListeners,


}






