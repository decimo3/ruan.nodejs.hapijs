const mongoose = require('./mongoose')

async function listarPublicação (request, response) {
  console.log("manipulando a solicitação...")
return await mongoose.listar()
  .then(console.log("Sucesso!"))
  .catch((err) => {console.log("Erro ao consultar o banco de dadaos", err)})
}
async function criarPublicação (request, response) {
  console.log("manipulando a solicitação...")
return await mongoose.criar(request.payload.nome, request.payload.titulo, request.payload.depoimento)
  .then(console.log("Sucesso!"))
  .catch((err) => {console.error("Erro ao criar", err)})
}

module.exports = {
  listarPublicação,
  criarPublicação,
}