const basedados = require('./basedados')

function olamundo (request, response) {
  return basedados.lerbanco
}
function meunome (request, response) {
  return basedados.meunome
}

module.exports = {
  olamundo,
  meunome,
}