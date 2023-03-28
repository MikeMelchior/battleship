(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["dom"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom-stuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseUNBQXlDLGdDQUFnQzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUyxJQUFJLFlBQVk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7QUFDUjs7OztBQUlBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXN0dWZmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG4vLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbi8vIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbi8vIGNvbnN0IGhlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbi8vIGhlYWRUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbi8vIGhlYWRlci5hcHBlbmQoaGVhZFRpdGxlKVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbi8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIG1haW4uY2xhc3NOYW1lID0gJ21haW4nXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4vLyBjb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gZ2FtZUFyZWEuY2xhc3NOYW1lID0gJ2dhbWUtYXJlYSc7XG4vLyBtYWluLmFwcGVuZChnYW1lQXJlYSlcblxuXG4vLyBjb25zdCBuZXdHYW1lV2luZG93ID0gKCkgPT4ge1xuLy8gICAgIC8vIGVudGVyIG5hbWVcbi8vICAgICAvLyBwbGFjZSBzaGlwc1xuLy8gICAgIC8vIHJlc2V0IGJ1dHRvblxuLy8gICAgIC8vIHN0YXJ0IGJ1dHRvblxuLy8gfVxuXG5cbi8vIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9IChib2FyZCwgaW5mb1N0cmluZykgPT4ge1xuLy8gICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBgZ2FtZS1ib2FyZCAke2luZm9TdHJpbmcuc3BsaXQoJyAnKS5qb2luKCctJyl9YDtcblxuLy8gICAgICAgLy8gaW5mbyAvIGJvYXJkIHRpdGxlXG4vLyAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vLyAgICAgaW5mby50ZXh0Q29udGVudCA9IGluZm9TdHJpbmc7XG4vLyAgICAgZWxlbWVudC5hcHBlbmQoaW5mbylcblxuLy8gICAgICAgLy8gdXNlIHJvd0NvdW50IGFuZCBzcXVhcmVDb3VudCB2YXJpYWJsZXMgdG8gZ2l2ZSBlYWNoIHNxdWFyZVxuLy8gICAgICAgLy8gYSAnY29vcmQnIGF0dHJpYnV0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvIGJvYXJkXG4vLyAgICAgbGV0IHJvd0NvdW50ID0gMFxuLy8gICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCkge1xuLy8gICAgICAgICBsZXQgc3F1YXJlQ291bnQgPSAwO1xuLy8gICAgICAgICBsZXQgZ2FtZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBnYW1lUm93LmNsYXNzTmFtZSA9ICdyb3cnXG4vLyAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiByb3cpIHtcbi8vICAgICAgICAgICAgIGxldCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuLy8gICAgICAgICAgICAgZ2FtZVNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2Nvb3JkJywgYCR7cm93Q291bnR9LCAke3NxdWFyZUNvdW50fWApXG4vLyAgICAgICAgICAgICBnYW1lUm93LmFwcGVuZChnYW1lU3F1YXJlKTtcbi8vICAgICAgICAgICAgIHNxdWFyZUNvdW50Kytcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbGVtZW50LmFwcGVuZChnYW1lUm93KVxuLy8gICAgICAgICByb3dDb3VudCsrO1xuLy8gICAgICAgICBzcXVhcmVDb3VudCA9IDA7XG4vLyAgICAgfVxuXG4vLyAgICAgZ2FtZUFyZWEuYXBwZW5kKGVsZW1lbnQpO1xuLy8gfVxuXG5cbi8vIGNvbnN0IHVwZGF0ZUJvYXJkID0gKCkgPT4ge1xuXG4vLyB9XG5cblxuLy8gY29uc3QgcmV0dXJuQ29vcmRzID0gKHNxdWFyZSkgPT57IFxuLy8gICAgIHJldHVybiBzcXVhcmUuZ2V0QXR0cmlidXRlKCdjb29yZCcpO1xuLy8gfVxuXG4vLyBjb25zdCBhZGRBdHRhY2tMaXN0ZW5lciA9IChhdHRhY2tlZSwgYXR0YWNrZXIpID0+IHtcbi8vICAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2F0dGFja2VlfSA+IGRpdiA+IGRpdmApXG4vLyAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4vLyAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgICAgIGxldCBjb29yZHMgPSByZXR1cm5Db29yZHMoc3F1YXJlKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG4vLyB9XG5cblxuXG4vLyBjb25zdCBoaWdobGlnaHRTaGlwcyA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4vLyAgICAgbGV0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXJ9IC5zcXVhcmVgKTtcbi8vICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbi8vICAgICAgICAgbGV0IHkgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdjb29yZCcpWzBdO1xuLy8gICAgICAgICBsZXQgeCA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2Nvb3JkJylbM107XG4vLyAgICAgICAgIGlmIChib2FyZFt5XVt4XSAhPT0gJycpIHtcbi8vICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JheSdcbi8vICAgICAgICAgfSAgICBcbi8vICAgICB9KVxuLy8gfVxuXG5cblxuXG5cblxuLy8gZXhwb3J0IHtcbi8vICAgICBjcmVhdGVHYW1lQm9hcmQsXG4vLyAgICAgaGlnaGxpZ2h0U2hpcHMsXG4vLyAgICAgYWRkQXR0YWNrTGlzdGVuZXJcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=