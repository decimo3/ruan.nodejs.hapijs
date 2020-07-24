const { validateToken } = require("./auth.JWT")

async function authUser (server, options) {
  return {
    authenticate: function (request, h) {

      result = validateToken(request.headers.authorization)

      console.log(request.headers.authorization)
      if (result) {
        return h.authenticated({ credentials: {user: "OK"} })
      } else {
        return h.unauthenticated("Usuário não autenticado!")
      }
    }
  }
}

module.exports = {
  authUser
}