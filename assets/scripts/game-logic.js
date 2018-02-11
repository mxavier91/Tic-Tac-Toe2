let origBoard
const playerOne = 'X'
const playerTwo = 'O'
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
    cells[i].addEventListner('click', turnClick)
  }
}

const turnClick = function (square) {
  console.log(square.target.id)
}

module.exports = {
  turnClick
}
