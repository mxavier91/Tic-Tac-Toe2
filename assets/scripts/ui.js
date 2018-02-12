const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'red')
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
