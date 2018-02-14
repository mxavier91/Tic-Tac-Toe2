let origBoard
let currentPlayer = 1
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = $('.cell')

for (let i = 0; i < cells.length; i++) {
  cells[i].innerText = ''
}

origBoard = Array.from(Array(9).keys())

const turnClick = function () {
  for (let i = 0; i < 10; i++) {
    if (currentPlayer === 1) {
      currentPlayer = 2
      return console.log('X')
    } else {
      currentPlayer = 1
      return console.log('O')
    }
  }
}
/*
const cells = $('.cell')

const startGame = function () {
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
  }
}

startGame()
*/

module.exports = {
  turnClick
}
