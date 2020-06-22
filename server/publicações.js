const postagens = require('./mongoose')
const validação = require('./validação')

async function listarPublicação() {
  console.log("Consultando o banco...")
  return await postagens.postagens.find({})
}
async function criarPublicação(nome, titulo, depoimento) {
  let valido = validação.publicação(nome, titulo, depoimento)
  console.log(`Resultado da validação é: ${valido}`)
  if (valido) {
    console.log("Salvando no banco...")
    let dataHora = Date.now()
    let postagem = new postagens.postagens({nome, titulo, depoimento, dataHora})
    console.log(postagem.nome)
    console.log(postagem.titulo)
    console.log(postagem.depoimento)
    console.log(postagem.dataHora)
    let result = await postagem.save()
    console.log(result)
    return result
  } else {
    return {}
  }
}

module.exports = {
  listarPublicação,
  criarPublicação,
}