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

origBoard = Array.from(Array(9).keys())

const cells = $('.cell')

for (let i = 0; i < cells.length; i++) {
  cells[i].innerText = ''
}

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

module.exports = {
  turnClick
}
