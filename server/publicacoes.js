const postagens = require('./mongoose')

async function listarPublicacoes() {
  return await postagens.postagens.find({})
}
async function criarPublicacao(nome, titulo, depoimento, favorito) {
    let postagem = new postagens.postagens({nome, titulo, depoimento, favorito})
    let result = await postagem.save()
    return result
}

module.exports = {
  listarPublicacoes,
  criarPublicacao,
}