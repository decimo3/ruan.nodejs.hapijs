const postagens = require('./mongoose')
const validação = require('./validação')

async function listarPublicação () {
  console.log("Consultando o banco...")
    return await postagens.postagens.find({})
}
async function criarPublicação (nome, titulo, depoimento) {
  let valido = validação.publicação(nome, titulo, depoimento)
console.log(`Resultado da validação é: ${valido}`)
  if (valido){
    console.log("Salvando no banco...")
    let dataHora = Date.now()
    return await postagens.postagens.create({nome, titulo, depoimento, dataHora})
  } else {
    return false
  }
}

module.exports = {
  listarPublicação,
  criarPublicação,
}