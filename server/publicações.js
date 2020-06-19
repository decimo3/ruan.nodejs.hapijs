const postagens = require('./mongoose')

async function listarPublicação () {
  console.log("Consultando o banco...")
    return await postagens.postagens.find({})
}
async function criarPublicação (nome="Nome de teste", titulo="Titulo de teste", depoimento="Depoimento de teste") {
  console.log("Salvando no banco...")
  let dataHora = Date.now()
  return await postagens.postagens.create({nome, titulo, depoimento, dataHora})
}

module.exports = {
  listarPublicação,
  criarPublicação,
}