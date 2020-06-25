function printhash (num=80) {
  let result = ''
  for (let index = 0; index < num; index++) {
    result += '#'
  }
  return (result)
}


module.exports = {
  printhash,
}