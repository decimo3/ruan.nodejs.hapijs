function printhash (texto) {
  let result = ''
  for (let index = 0; index < 80; index++) {
    result += '#'
  }
  return (result)
}


module.exports = {
  printhash,
}