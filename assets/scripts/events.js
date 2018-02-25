const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const logic = require('./game-logic')
const store = require('./store')

const onSignUp = function (event) {
  console.log(this)
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log(this)
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is ', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').val('')
  document.querySelector('table').style.display = 'block'
  document.querySelector('#sign-in').style.display = 'none'
  document.querySelector('#sign-up').style.display = 'none'
  document.querySelector('#delete').style.display = 'block'
  document.querySelector('#change-password').style.display = 'block'
}

const onSignOut = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
  console.log(data)
  document.querySelector('table').style.display = 'none'
  document.querySelector('#sign-in').style.display = 'block'
  document.querySelector('#sign-up').style.display = 'block'
  document.querySelector('#delete').style.display = 'none'
  document.querySelector('#change-password').style.display = 'none'
}

const onChangePassword = function (event) {
  console.log(event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
  console.log(data)
}

const onNewGame = function (event) {
  console.log(this)
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameCreated)
    .catch(ui.newGameFailed)
  console.log(data)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updateGame(store.game)
  console.log(store.game)
}
/*
const updateBoard = function () {
  event.preventDefault()
  const data = {
    'game': {
      'cell': {
        'index': logic.gameBoard[event.target.id],
        'value': logic.switchPlayer
      },
      'over': false
    }
  }
  api.updateGame(data)
  console.log(updateBoard)
}
*/

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#delete').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('submit', onNewGame)
  $('#update-game').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers

}
