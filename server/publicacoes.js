// const postagens = require('./mongoose')
const validação = require('./validacao')

async function listarPublicacoes() {
  return await postagens.postagens.find({})
}
async function criarPublicacao(nome, titulo, depoimento, fav) {
  let valido = validação.publicacao([nome, titulo, depoimento])
  if (valido) {
    let postagem = new postagens.postagens({nome, titulo, depoimento, fav})
    let result = await postagem.save()
    return result
  }
}

module.exports = {
  listarPublicacoes,
  criarPublicacao,
}