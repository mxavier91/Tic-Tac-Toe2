<<<<<<< HEAD
const store = require('./store')

=======
>>>>>>> gameLogic
const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

<<<<<<< HEAD
const signUpFailure = function (error) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'red')
  console.log(error)
=======
const signUpFailure = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'red')
  console.log(data)
>>>>>>> gameLogic
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'blue')
  console.log(data)
<<<<<<< HEAD
  store.user = data.user
=======
>>>>>>> gameLogic
}

const signInFailure = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'yellow')
  console.log(data)
}

<<<<<<< HEAD
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

=======
>>>>>>> gameLogic
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
<<<<<<< HEAD
  signInFailure,
  changeSuccess,
  changeFailure,
  deleteSuccess,
  deleteFailure
=======
  signInFailure
>>>>>>> gameLogic
}
