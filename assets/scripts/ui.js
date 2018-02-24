const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Signed up Failed')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'blue')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Signed in Failure')
  $('#message').css('background-color', 'yellow')
  console.log(data)
}

const changeSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').css('background-color', 'green')
  console.log('change password successfully')
}

const changeFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const deleteSuccess = function () {
  $('#message').text('Signed out Successfully')
  $('#message').css('background-color', 'green')
  console.log('Sign Out Successfully')
}

const deleteFailure = function (error) {
  $('#message').text('Error Signing Out')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const newGameCreated = function (data) {
  $('#message').text('Let\'s do this!!!!!')
  $('#message').css('background-color', 'blue')
  console.log(data)
}

const newGameFailed = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
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
  newGameFailed
}
