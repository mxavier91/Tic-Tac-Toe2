const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'red')
  console.log(data)
}

const signInSuccess = function (data) {
  debugger
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'blue')
  console.log(data)
}

const signInFailure = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'yellow')
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
