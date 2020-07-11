const publicacoes = require('./publicacoes')

async function listarPublicacoes(req, res) {
  // TODO: Adicionar limitação de publicações carregadas pelo usuário
  return await publicacoes.listarPublicacoes()
    .then((posts) => {
      return res.response(posts).code(200)
    })
    .catch((err) => {
      return res.response("Erro ao resgatar as publicações").code(401)
    })

}

async function criarPublicacao(req, res) {
  console.log(req.pay)
  return await publicacoes.criarPublicacao(req.payload.txtNome, req.payload.txtTitulo, req.payload.txtDepoimento)
    .then((post) => {
      return res.response(post).code(201)
    })
    .catch((err) => {
      res.response("Erro ao criar a publicação").code(401)
    })
}

module.exports = {
  listarPublicacoes,
  criarPublicacao,
}