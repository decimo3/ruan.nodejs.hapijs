const { decode } = require("jsonwebtoken")

function strategy(decoded, request, h) {
  // do your checks to see if the person is valid
  if (decoded) {
    h.response(`decoded is false`)
    return { valid: false }
  }
  else {
    h.response(`decoded is true`).code(200)
    return { valid: true }
  }
}
module.exports = {
  strategy
}