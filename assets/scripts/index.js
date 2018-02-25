'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example'

const authEvents = require('./events')
const logic = require('./game-logic')

$(() => {
  $('.cell').on('click', logic.switchPlayer)
  $('.cell').on('click', logic.pushToken)
  $('.cell').on('click', logic.winConditions)
  authEvents.addHandlers()
})
