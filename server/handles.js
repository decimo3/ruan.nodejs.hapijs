const publicacoes = require('./publicacoes')
const usuarios = require('./usuarios')
const validação = require('./validacao')

async function listarPublicacoes (req, res) {
  // TODO: Adicionar limitação de publicações carregadas pelo usuário
    return await publicacoes.listarPublicacoes()
    .then((posts) => {
      return res.response(posts).code(200)
    })
    .catch((err) => {
      return res.response("Erro ao resgatar as publicações").code(401)
    })
  
}

async function criarPublicacao (req, res) {
  // TODO: Trocar a validação por @Hapi/Joy
  if (validação.publicacao([req.payload.nome, req.payload.titulo, req.payload.depoimento])) {
  return await publicacoes.criarPublicacao(req.payload.txtNome, req.payload.txtTitulo, req.payload.txtDepoimento)
    .then((post) => {
      return res.response(post).code(201)
    })
    .catch((err) => {
      res.response("Erro ao criar a publicação").code(401)
    })
  } else {
    return res.response("Solicitação inválida para o caminho solicitado!").code(401)
  }
}

async function logarUsuario(req, res) {
  // TODO: Adicionar a validação de campo de login
  return await usuarios.logarUsuarios(req.payload.email, req.payload.senha)
    .then((user) => {
      return res.response(user).code(200)
    })
    .catch((err) => {
      const errou = "Erro ao logar os usuário!"
      console.warn(errou, err)
      
      return res.response(JSON.stringify({errou})).code(401)
    })
}

async function criarUsuario(req, res) {
  // TODO: Adicionar validação de campos de criação de usuário.
  return await usuarios.criarUsuario(req.payload.nome, req.payload.email, req.payload.senha, req.payload.telefone)
    .then((user) => {
      return res.response(user).code(201)
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      error = "Erro ao criar o usuário"
      err = JSON.stringify({error})
      return res.response(err).code(401)
    })
}

module.exports = {
  listarPublicacoes,
  criarPublicacao,
  logarUsuario,
  criarUsuario,
}