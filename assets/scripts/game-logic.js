const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const authEvents = require('./events')

const currentPlayerX = 'X'
const currentPlayerO = 'O'
let currentPlayer = currentPlayerX
const gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const switchPlayer = function (event) {
  if (currentPlayer === 'X' && gameBoard[event.target.id] === ' ') {
    document.getElementById(event.target.id).innerHTML = 'X'
    currentPlayer = currentPlayerO
  } else if (currentPlayer === 'O' && gameBoard[event.target.id] === ' ') {
    document.getElementById(event.target.id).innerHTML = 'O'
    currentPlayer = currentPlayerX
  }
}

const pushToken = function (event) {
  if (currentPlayer === 'O') {
    gameBoard[event.target.id] = 'X'
  } else if (currentPlayer === 'X') {
    gameBoard[event.target.id] = 'O'
  }
}

const winConditions = function () {
  if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    console.log('O is the WINNER!!!!!')
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    console.log('O is the WINNER!!!!!')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    console.log('O is the WINNER!!!!')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    console.log('O is the WINNER!!!!!')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard === 'O') {
    console.log('O is the WINNER!!!!')
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    console.log('O is the WINNER!!!!')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    console.log('O is the WINNER!!!!')
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    console.log('O is the WINNER!!!!')
  } else if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('X is the WINNER!!!!!')
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    console.log('X is the WINNER!!!!!')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    console.log('X is the WINNER!!!!')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    console.log('X is the WINNER!!!!!')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard === 'X') {
    console.log('X is the WINNER!!!!')
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    console.log('X is the WINNER!!!!')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    console.log('X is the WINNER!!!!')
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    console.log('X is the WINNER!!!!')
  } else {
    console.log('We have a DRAW')
  }
}

module.exports = {
  switchPlayer,
  pushToken,
  winConditions
}
