let origBoard
const currentPlayerX = 'X'
const currentPlayerO = 'O'
let currentPlayer = currentPlayerX
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

origBoard = Array.from(Array(9).keys())

const cells = $('.cell')

for (let i = 0; i < cells.length; i++) {
  cells[i].innerText = ''
}
/*
const isValid = $('#' + event.target.id).is(':empty')
   if (!isValid) {

     return
   }
*/
origBoard = Array.from(Array(9).keys())

const turnClick = function (event) {
  if (currentPlayer === currentPlayerX) {
    currentPlayer = currentPlayerO
    $('#' + event.target.id).html(currentPlayerX)
    return console.log(event.target.id)
  } else {
    currentPlayer = currentPlayerX
    $('#' + event.target.id).html(currentPlayerO)
    return console.log(event.target.id)
  }
}

module.exports = {
  turnClick
}
