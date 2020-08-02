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
async function validateToken(data) {
  return new Promise((resolve, reject) => {
    JWT.verify(data, process.env.SECRET_KEY, { algorithms: process.env.JWT_ALGORITHM }, (err, token) => {
      if (err) {
        reject(false)
      }
      resolve(true)
    })
  })
}

module.exports = { generateToken, validateToken }