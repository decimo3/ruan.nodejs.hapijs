const JWT = require('jsonwebtoken')

async function generateToken(data) {
  new Promise((resolve, reject) => {
    const expiration = Math.floor((Date.now() / 1000) + process.env.EXPIRATION)
    
    try {
      result = JWT.sign(data, process.env.SECRET_KEY, { algorithm: process.env.JWT_ALGORITHM, expiresIn: expiration })
      resolve(result)
  } catch (err) {
    console.error("Erro ao gerar o token!")
    console.error(err)
    reject("Erro ao gerar o token!")
  }
  /*
    , (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
    */
  })
}
async function validateToken(data) {
  new Promise((resolve, reject) => {
    try {
      result = JWT.verify(data, process.env.SECRET_KEY, { algorithms: process.env.JWT_ALGORITHM })
      console.log("Token válido!")
      resolve(true)
    } catch (err) {
      console.log("Token invalido!")
      console.log(err)
      reject(false)
    }
  })
}
module.exports = {
  generateToken,
  validateToken,
}