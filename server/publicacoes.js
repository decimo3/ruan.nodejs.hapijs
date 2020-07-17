const postagens = require('./mongoose')

async function listarPublicacoes(valor=10) {
  return await postagens.postagens.find({}).sort({_id:1}).limit(valor).then((data)=>{
    return data
  }).catch((err)=>{
    console.error(err)
    throw new Error("Erro ao resgatar as publicações")
  })
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