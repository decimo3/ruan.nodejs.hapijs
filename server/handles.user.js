const usuarios = require('./usuarios')
const Token = require('./auth.JWT')

async function logarUsuario(req, res) {
  return await usuarios.logarUsuarios(req.payload.email, req.payload.senha)
    .then((token) => {
      return res.response({token}).code(200)
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
      const {nome, email, telefone} = user
      Token.generateToken({nome, email, telefone})
        .then((token)=>{
          return res.response(token).code(201)
        })
        .catch((err)=>{
          throw new Error(err)
        })
    })
    .catch((err) => {
      // TODO: Gerenciar melhor o erro e passar claramente o erro lançado
      console.error("Erro ao criar o usuário", err)
      return res.response().code(401)
    })
}

module.exports = {
  logarUsuario,
  criarUsuario,
}