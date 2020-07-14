function printHash() {
  let result = ''
  for (let index = 0; index < 80; index++) {
    result += '#'
  }
  return (result)
}
function textoHash(texto) {
  if (texto != false) {
    let char = (80 - texto.length) / 2;
    let hash = '';
    for (var index = 0; index < char; index++) {
      hash += ' ';
    }
    result = hash + texto + hash
    if (result.length > 80) {
      result.slice(-1)
    }
    return result
  }
}

module.exports = { printHash, textoHash }