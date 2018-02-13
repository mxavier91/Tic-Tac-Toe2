const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
<<<<<<< HEAD
    url: config.apiOrigins.production + '/sign-up',
=======
    url: config.apiOrigin + '/sign-up',
>>>>>>> gameLogic
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

<<<<<<< HEAD
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
=======
module.exports = {
  signUp
>>>>>>> gameLogic
}
