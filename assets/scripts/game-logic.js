let origBoard
const playerOne = 'O'
const playerTwo = 'X'
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = $('.cell')

const startGame = function () {
  origBoard = Array.from(Array(9).keys())
}

startGame()

const turnClick = function () {
  console.log('FINALLY!!!!')
}

module.exports = {
  turnClick
}
