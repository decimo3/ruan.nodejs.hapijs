const { decode } = require("jsonwebtoken")

function strategy(decoded, request, h) {
  // do your checks to see if the person is valid
console.log(decoded)
  if (decoded) {
    console.log(`Strategy returns TRUE`)
    return { valid: false }
  }
  else {
    console.log(`Strategy returns FALSE`)
    return { valid: true }
  }
}
module.exports = {
  strategy
}