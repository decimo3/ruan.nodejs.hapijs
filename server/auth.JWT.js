const JWT = require('jsonwebtoken')

const generateToken = data => (
    new Promise((resolve, reject) => {
        const expiration = Math.floor((Date.now() / 1000) + process.env.EXPIRATION)
        JWT.sign(data, process.env.SECRET_KEY, { algorithm: process.env.JWT_ALGORITHM, expiresIn: expiration }, (err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })
)
const validateToken = data => (
    new Promise((resolve, reject) => {
        JWT.verify(data, process.env.SECRET_KEY, {algorithms: process.env.JWT_ALGORITHM},(err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    }))
module.exports = {
    generateToken,
    validateToken,
}