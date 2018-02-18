let origBoard
const currentPlayerX = 'X'
const currentPlayerO = 'O'
let currentPlayer = currentPlayerX
const grid = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
/*
const isValid = $('#' + event.target.id).is(':empty')
   if (!isValid) {

     return
   }
   */
/*
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
*/

/*
const turnClick = function () {
  const $this = $(this)
  $this.html(currentPlayerX)
  const x = $this.data('x')
  const y = $this.data('y')
  grid[x][y] = currentPlayerX
  console.log(grid)
}
*/
let playerOne = 'X'

const switchPlayer = function (event) {
  if (playerOne === 'X') {
    document.getElementById(event.target.id).innerHTML = 'X'
    playerOne = 'O'
  } else {
    document.getElementById(event.target.id).innerHTML = 'O'
    playerOne = 'X'
  }
  console.log(grid)
}



module.exports = {
  switchPlayer
}
