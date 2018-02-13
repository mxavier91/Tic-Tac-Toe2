const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  signUp
}
