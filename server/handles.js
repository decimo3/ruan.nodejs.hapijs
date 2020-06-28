const publicacoes = require('./publicacoes')
const usuarios = require('./usuarios')

async function listarPublicacoes (req, res) {
  return await publicacoes.listarPublicacoes()
    .then((posts) => {
      return res.response(posts).code(200)
    })
    .catch((err) => {
      console.warn("Erro ao resgatar as publicações", err)
    })
}

async function criarPublicacao (req, res) {
  return await publicacoes.criarPublicacao(req.payload.txtNome, req.payload.txtTitulo, req.payload.txtDepoimento, req.payload.favorito)
    .then((post) => {
      return res.response(post).code(201)
    })
    .catch((err) => {
      console.error("Erro ao criar a publicação", err)
    })
}

async function logarUsuario(req, res) {
  return await usuarios.logarUsuarios(req.payload.email, req.payload.senha)
    .then((user) => {
      return res.response(user).code(200)
    })
    .catch(() => {
      const errou = "Erro ao logar os usuário!"
      console.warn(errou)
      
      return res.response(JSON.stringify({errou})).code(401)
    })
}

async function criarUsuario(req, res) {
  return await usuarios.criarUsuario(req.payload.nome, req.payload.email, req.payload.senha, req.payload.telefone)
    .then((user) => {
      return res.response(user).code(201)
    })
    .catch((err) => {
      console.error("Erro ao criar usuário!", err)
    })
}

module.exports = {
  listarPublicacoes,
  criarPublicacao,
  logarUsuario,
  criarUsuario,
}