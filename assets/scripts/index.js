'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const game = {
  board: ['', '', '', '', '', '', '', '', ''],
  playerOne: {
    id: '',
    piece: ['x', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o']
  },
  playerTwo: {
    id: '',
    piece: ['x', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o']
  }
}

const switchPlayer = function () {
  const piece = this.piece
  prevent.Default()
  for (i = 0; i < piece.length; i++) {
    if (game.playerOne[i] === 'x') {
      console.log('you are X')
    } else {
      console.log('you are O')
    }
  }
}
