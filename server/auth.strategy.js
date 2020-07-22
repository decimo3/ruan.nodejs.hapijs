const { validateToken } = require("./auth.JWT")

async function auth (server, options) {
  return {
    authenticate: (request, h) => {

      result = await validateToken(request.headers.authorization)

      console.log(request.headers.authorization)
      if (request.headers.authorization) {
        return h.authenticated({ credentials: "OK" })
      } else {
        // return h.unauthenticated()
        throw new Error("Usuário não autenticado!")
      }
    }
  }
}

module.exports = {
  auth
}