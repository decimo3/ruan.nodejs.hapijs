const { validateToken } = require("./auth.JWT")

const authUser = function (server, options) {
  return {
    authenticate: function (request, h) {
      result = validateToken(request.headers.authorization)
      if (result) {
        console.log("Usuário autenticado!")
        return h.authenticated({ credentials: {user: "OK"} })
      } else {
        console.log("Tentativa de acesso não autorizado!")
        return h.unauthenticated("Usuário não autenticado!")
      }
    }
  }
}

module.exports = {
  authUser
}