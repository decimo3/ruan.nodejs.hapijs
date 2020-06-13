const basedados = require('./basedados')

function inicio (request, response) {
  response.file('../index.html');
}
function olamundo (request, response) {
  return basedados.olaMundo
}
function meunome (request, response) {
  return basedados.nomeCompleto
}
function receberNome (request, response) {
  return basedados.nome(request.params.name)
}

module.exports = {
  inicio,
  olamundo,
  meunome,
  receberNome,
}