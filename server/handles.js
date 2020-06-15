const mongoose = require('./mongoose')

function listarPublicação (request, response) {
  console.log("manipulando a solicitação...")
return mongoose.listar()
  .then(console.log("Sucesso!"))
  .catch((err) => {console.log("Erro ao consultar o banco de dadaos", err)})
}
function criarPublicação (request, response) {
  console.log("manipulando a solicitação...")
return mongoose.criar(request.payload.nome, request.payload.titulo, request.payload.depoimento)
  .then(console.log("Sucesso!"))
  .catch((err) => {console.error("Erro ao criar", err)})
}

module.exports = {
  listarPublicação,
  criarPublicação,
}