const store = require('./store')
const logic = require('./game-logic')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  $('#sign-up').val('')
}

const signUpFailure = function () {
  $('#message').text('Signed up Failure')
  $('#message').css('background-color', 'red')
  $('#sign-up').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'blue')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Signed in Error')
  $('#message').css('background-color', 'yellow')
}

const changeSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').css('background-color', 'green')
}

const changeFailure = function () {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
}

const deleteSuccess = function () {
  $('#message').text('Signed out Successfully')
  $('#message').css('background-color', 'green')
}

const deleteFailure = function () {
  $('#message').text('Error Signing Out')
  $('#message').css('background-color', 'red')
}

const newGameCreated = function (data) {
  $('#message').text('Let\'s do this!!!!!')
  $('#message').css('background-color', 'blue')
  store.game = data.game
}

const newGameFailed = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
}

const updateSuccess = function (data) {
  $('#message').text('Good move')
  $('#message').css('background-color', 'blue')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeSuccess,
  changeFailure,
  deleteSuccess,
  deleteFailure,
  newGameCreated,
  newGameFailed,
  updateSuccess
}
