let origBoard
<<<<<<< HEAD
const playerOne = 'O'
const playerTwo = 'X'
=======
let currentPlayer = 1
>>>>>>> gameLogic
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
<<<<<<< HEAD
=======
  [0, 3, 6],
>>>>>>> gameLogic
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

origBoard = Array.from(Array(9).keys())

const cells = $('.cell')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const startGame = function () {
  document.querySelector('table').style.display = 'block'
  origBoard = Array.from(Array(9).keys())
}
=======
origBoard = Array.from(Array(9).keys())


>>>>>>> gameboard

startGame()

const turnClick = function () {
  console.log('FINALLY!!!!')
}
=======
=======
for (let i = 0; i < cells.length; i++) {
  cells[i].innerText = ''
}

>>>>>>> gameLogic
origBoard = Array.from(Array(9).keys())

const turn = event.target.id

const turnClick = function () {
  for (let i = 0; i < 10; i++) {
    if (currentPlayer === 1) {
      currentPlayer = 2
      return $('#cells').show()
    } else {
      currentPlayer = 1
      return
    }
  }
}

<<<<<<< HEAD
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
>>>>>>> gameLogic

=======
>>>>>>> gameLogic
module.exports = {
  turnClick
}
