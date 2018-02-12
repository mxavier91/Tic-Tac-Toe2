let origBoard
const playerOne = 'O'
const playerTwo = 'X'
const tokens = ['X', 'O', 'X', 'O', 'X', 'O', 'X']
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

const startGame = function () {
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
  }
}
startGame()

const turnClick = function (square) {
  turn(square.target.id)
}

const turn = function (squareId) {
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === 'X') {
      document.getElementById(squareId).innerText = playerOne
    } else {
      document.getElementById(squareId).innerText = playerTwo
    }
  }
}

module.exports = {
  turnClick
}
