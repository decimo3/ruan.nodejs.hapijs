const JWT = require('jsonwebtoken')

async function generateToken(data) {
  return new Promise((resolve, reject) => {
    const expiration = Math.floor((Date.now() / 1000) + process.env.EXPIRATION)
    JWT.sign(data, process.env.SECRET_KEY, { algorithm: process.env.JWT_ALGORITHM, expiresIn: expiration }, (err, token) => {
      if (err) {
        throw new Error("Erro ao gerar o token!")
      }
      resolve(token)
    })
  })
}
function validateToken(data) {
  return JWT.verify(data, process.env.SECRET_KEY, { algorithms: process.env.JWT_ALGORITHM }, (err, token) => {
    console.log("Console log em index > auth > JWTSheme: \n", err, "\n", token)
    if (err) {
      return false
    } else {
      return true
    }
  })
}
module.exports = { generateToken, validateToken }