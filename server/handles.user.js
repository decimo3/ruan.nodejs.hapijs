const usuarios = require('./usuarios')

async function logarUsuario(req, res) {
  return await usuarios.logarUsuarios(req.payload.email, req.payload.senha)
    .then((user) => {
      return res.response(user).code(200)
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      const errou = "Erro ao logar os usuário!"
      console.warn(errou, err)
      return res.response(JSON.stringify({ err })).code(401)
    })
}

async function criarUsuario(req, res) {
  return await usuarios.criarUsuario(req.payload.nome, req.payload.email, req.payload.senha, req.payload.telefone)
    .then((user) => {
      return res.response(user).code(201)
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      error = "Erro ao criar o usuário"
      err = JSON.stringify({ error })
      return res.response(err).code(401)
    })
}

module.exports = {
  logarUsuario,
  criarUsuario,
}